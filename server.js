require('dotenv').config();
const express = require('express');
const mysql = require('mysql2/promise');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '10mb' }));
app.use(express.static(path.join(__dirname, 'public')));

const ADMIN = { username: 'admin', password: 'admin123' };

let db;
let sessions = {};

async function initDB() {
  db = await mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'railway',
    waitForConnections: true,
    connectionLimit: 10,
    connectTimeout: 30000,
    ssl: { rejectUnauthorized: false },
  });

  await db.query(`CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    birthday DATE,
    gender VARCHAR(20),
    role VARCHAR(20) DEFAULT 'customer',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4`);

  await db.query(`CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100),
    price INT NOT NULL,
    sizes TEXT,
    image TEXT,
    stock INT,
    details TEXT,
    specs TEXT,
    size_stock TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4`);

  await db.query(`CREATE TABLE IF NOT EXISTS orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_num VARCHAR(50) UNIQUE NOT NULL,
    user_id INT,
    subtotal INT,
    shipping INT DEFAULT 150,
    total INT,
    payment_method VARCHAR(50),
    status VARCHAR(50) DEFAULT 'pending',
    address TEXT,
    gcash_proof MEDIUMTEXT,
    gcash_ref VARCHAR(100),
    gcash_status VARCHAR(50),
    gcash_reject_reason TEXT,
    rated TINYINT(1) DEFAULT 0,
    rating INT,
    rating_comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4`);

  await db.query(`CREATE TABLE IF NOT EXISTS order_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    product_id INT,
    name VARCHAR(255),
    category VARCHAR(100),
    size VARCHAR(20),
    qty INT DEFAULT 1,
    price INT,
    image TEXT
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4`);

  await db.query(`CREATE TABLE IF NOT EXISTS saved_addresses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT UNIQUE,
    fname VARCHAR(100),
    lname VARCHAR(100),
    phone VARCHAR(20),
    street VARCHAR(255),
    city VARCHAR(100),
    province VARCHAR(100),
    zip VARCHAR(20),
    region VARCHAR(100),
    is_default TINYINT(1) DEFAULT 1,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4`);

  // Add new columns if upgrading existing DB
  try { await db.query('ALTER TABLE users ADD COLUMN birthday DATE'); } catch (_) { }
  try { await db.query('ALTER TABLE products ADD COLUMN size_stock TEXT'); } catch (_) { }
  try { await db.query('ALTER TABLE users ADD COLUMN gender VARCHAR(20)'); } catch (_) { }
  console.log('Database tables ready.');
}

function genToken() {
  return Math.random().toString(36).substr(2) + Date.now().toString(36);
}

function requireAuth(req, res, next) {
  const token = req.headers['authorization'];
  if (!sessions[token]) return res.status(401).json({ error: 'Please log in.' });
  req.session = sessions[token];
  next();
}

function requireAdmin(req, res, next) {
  const token = req.headers['authorization'];
  if (!sessions[token] || sessions[token].role !== 'admin')
    return res.status(403).json({ error: 'Admin access required.' });
  req.session = sessions[token];
  next();
}

app.get('/api/products', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM products ORDER BY created_at DESC');
    rows.forEach(r => {
      if (typeof r.sizes === 'string') try { r.sizes = JSON.parse(r.sizes); } catch (_) { }
      if (typeof r.details === 'string') try { r.details = JSON.parse(r.details); } catch (_) { }
      if (typeof r.specs === 'string') try { r.specs = JSON.parse(r.specs); } catch (_) { }
      if (typeof r.size_stock === 'string') try { r.size_stock = JSON.parse(r.size_stock); } catch (_) { r.size_stock = {}; }
      if (!r.size_stock) r.size_stock = {};
    });
    res.json(rows);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/api/products', requireAdmin, async (req, res) => {
  const { name, category, price, image, sizes, stock, size_stock, details, specs } = req.body;
  if (!name || !category || !price || !image)
    return res.status(400).json({ error: 'All fields are required.' });
  try {
    const [result] = await db.query(
      'INSERT INTO products (name,category,price,sizes,image,stock,details,specs,size_stock) VALUES (?,?,?,?,?,?,?,?,?)',
      [name, category, parseInt(price), JSON.stringify(sizes || []), image,
        stock != null ? parseInt(stock) : null,
        JSON.stringify(details || []), JSON.stringify(specs || []), JSON.stringify(size_stock || {})]
    );
    const [rows] = await db.query('SELECT * FROM products WHERE id=?', [result.insertId]);
    res.json({ status: 'success', product: rows[0] });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/api/products/:id', requireAdmin, async (req, res) => {
  const { name, category, price, image, sizes, stock, size_stock, details, specs } = req.body;
  try {
    await db.query(
      'UPDATE products SET name=?,category=?,price=?,sizes=?,image=?,stock=?,details=?,specs=?,size_stock=? WHERE id=?',
      [name, category, parseInt(price), JSON.stringify(sizes || []), image,
        stock != null ? parseInt(stock) : null,
        JSON.stringify(details || []), JSON.stringify(specs || []), JSON.stringify(size_stock || {}), req.params.id]
    );
    const [rows] = await db.query('SELECT * FROM products WHERE id=?', [req.params.id]);
    if (!rows.length) return res.status(404).json({ error: 'Product not found.' });
    res.json({ status: 'success', product: rows[0] });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/api/products/:id', requireAdmin, async (req, res) => {
  try {
    const [result] = await db.query('DELETE FROM products WHERE id=?', [req.params.id]);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Product not found.' });
    res.json({ status: 'success' });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/api/products/fix-details', requireAdmin, async (req, res) => {
  const pantsDetails = JSON.stringify(['Relaxed Tapered Fit', 'Elastic Waistband with Adjustable Drawstring', 'Side Pockets and Back Pocket', 'Minimal Front Logo Print', 'Ribbed / Adjustable Ankle Cuffs', 'Custom Tailored Fit', 'FREE Stickers in every purchase']);
  const pantsSpecs = JSON.stringify(['100% COTTON', '320 GSM', 'FRENCH TERRY FABRIC']);
  const jacketsDetails = JSON.stringify(['Drop Shoulder Fit', 'Relaxed / Boxy Silhouette', 'Full Front Zipper Closure', 'Front and Back Logo Print', 'Side Pockets', 'Ribbed Cuffs and Hem', 'Custom Fit', 'FRENCH TERRY / FLEECE FABRIC', 'FREE Stickers in every purchase']);
  const jacketsSpecs = JSON.stringify(['100% COTTON / COTTON BLEND', '380-420 GSM', 'FRENCH TERRY / FLEECE FABRIC']);
  try {
    await db.query('UPDATE products SET details=?, specs=? WHERE category=?', [pantsDetails, pantsSpecs, 'pants']);
    await db.query('UPDATE products SET details=?, specs=? WHERE category=?', [jacketsDetails, jacketsSpecs, 'jackets']);
    res.json({ status: 'success', message: 'Pants and jackets details updated in DB.' });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/api/signup', async (req, res) => {
  const { username, email, password, age, birthday, gender, agreedToTerms, agreedToPrivacy } = req.body;
  if (!username || !email || !password || !age)
    return res.status(400).json({ error: 'All fields are required.' });
  if (parseInt(age) < 18)
    return res.status(403).json({ error: 'You must be 18 or older.' });
  if (!agreedToTerms || !agreedToPrivacy)
    return res.status(400).json({ error: 'Please agree to Terms and Privacy Policy.' });
  try {
    const [emailCheck] = await db.query('SELECT id FROM users WHERE email=?', [email.toLowerCase()]);
    if (emailCheck.length) return res.status(409).json({ error: 'Email already registered.' });
    const [userCheck] = await db.query('SELECT id FROM users WHERE LOWER(username)=?', [username.toLowerCase()]);
    if (userCheck.length) return res.status(409).json({ error: 'Username already taken.' });
    const [result] = await db.query(
      'INSERT INTO users (username,email,password,age,birthday,gender,role) VALUES (?,?,?,?,?,?,?)',
      [username, email.toLowerCase(), password, parseInt(age), birthday || null, gender || null, 'customer']
    );
    const token = genToken();
    sessions[token] = { userId: result.insertId, username, role: 'customer' };
    res.json({ status: 'success', token, username, role: 'customer' });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Email and password required.' });
  if (email === 'admin' && password === ADMIN.password) {
    const token = genToken();
    sessions[token] = { username: 'Admin', role: 'admin' };
    return res.json({ status: 'success', token, username: 'Admin', role: 'admin' });
  }
  try {
    const [rows] = await db.query(
      'SELECT * FROM users WHERE (email=? OR LOWER(username)=?) AND password=?',
      [email.toLowerCase(), email.toLowerCase(), password]
    );
    if (!rows.length) return res.status(401).json({ error: 'Invalid credentials.' });
    const user = rows[0];
    const token = genToken();
    sessions[token] = { userId: user.id, username: user.username, role: user.role };
    res.json({ status: 'success', token, username: user.username, role: user.role });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/api/logout', (req, res) => {
  delete sessions[req.headers['authorization']];
  res.json({ status: 'success' });
});

app.delete('/api/admin/users/:id', requireAdmin, async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const [rows] = await db.query('SELECT username, role FROM users WHERE id=?', [id]);
    if (!rows.length) return res.status(404).json({ error: 'User not found.' });
    if (rows[0].role === 'admin') return res.status(403).json({ error: 'Cannot delete admin.' });
    const username = rows[0].username;
    await db.query('DELETE FROM order_items WHERE order_num IN (SELECT order_num FROM orders WHERE username=?)', [username]);
    await db.query('DELETE FROM orders WHERE username=?', [username]);
    await db.query('DELETE FROM saved_addresses WHERE username=?', [username]);
    await db.query('DELETE FROM users WHERE id=?', [id]);
    res.json({ success: true });
  } catch (e) { console.error('Delete user error:', e); res.status(500).json({ error: e.message }); }
});

app.get('/api/admin/users', requireAdmin, async (req, res) => {
  try {
    const [rows] = await db.query(
      'SELECT id,username,email,age,created_at FROM users WHERE role="customer" ORDER BY created_at DESC'
    );
    res.json(rows);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/api/admin/orders', requireAdmin, async (req, res) => {
  try {
    const [orders] = await db.query(
      'SELECT o.*,u.username AS customer FROM orders o JOIN users u ON o.user_id=u.id ORDER BY o.created_at DESC'
    );
    for (const o of orders) {
      const [items] = await db.query('SELECT * FROM order_items WHERE order_id=?', [o.id]);
      o.items = items;
      o.address = typeof o.address === 'string' ? JSON.parse(o.address) : o.address;
    }
    res.json(orders);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/api/admin/orders/:orderNum/status', requireAdmin, async (req, res) => {
  const { status } = req.body;
  if (!['pending', 'out_for_delivery', 'completed', 'cancelled'].includes(status))
    return res.status(400).json({ error: 'Invalid status.' });
  try {
    await db.query('UPDATE orders SET status=? WHERE order_num=?', [status, req.params.orderNum]);
    res.json({ status: 'success' });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/api/admin/orders/:orderNum/gcash', requireAdmin, async (req, res) => {
  const { gcash_status, gcash_reject_reason } = req.body;
  try {
    await db.query(
      'UPDATE orders SET gcash_status=?,gcash_reject_reason=? WHERE order_num=?',
      [gcash_status, gcash_reject_reason || null, req.params.orderNum]
    );
    if (gcash_status === 'rejected')
      await db.query('UPDATE orders SET status="cancelled" WHERE order_num=?', [req.params.orderNum]);
    res.json({ status: 'success' });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/api/orders/my', requireAuth, async (req, res) => {
  try {
    const [orders] = await db.query(
      'SELECT * FROM orders WHERE user_id=? ORDER BY created_at DESC', [req.session.userId]
    );
    for (const o of orders) {
      const [items] = await db.query('SELECT * FROM order_items WHERE order_id=?', [o.id]);
      o.items = items;
      o.address = typeof o.address === 'string' ? JSON.parse(o.address) : o.address;
    }
    res.json(orders);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/api/orders/:orderNum/received', requireAuth, async (req, res) => {
  try {
    await db.query(
      'UPDATE orders SET status="completed" WHERE order_num=? AND user_id=?',
      [req.params.orderNum, req.session.userId]
    );
    res.json({ status: 'success' });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/api/orders/:orderNum/rate', requireAuth, async (req, res) => {
  const { rating, comment } = req.body;
  if (!rating || rating < 1 || rating > 5)
    return res.status(400).json({ error: 'Rating must be 1-5.' });
  try {
    await db.query(
      'UPDATE orders SET rated=1,rating=?,rating_comment=? WHERE order_num=? AND user_id=?',
      [rating, comment || '', req.params.orderNum, req.session.userId]
    );
    res.json({ status: 'success' });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/api/checkout', requireAuth, async (req, res) => {
  const { cart, subtotal, shipping, total, address, paymentMethod, gcashProof, gcashRef, gcashStatus } = req.body;
  if (!cart || !cart.length) return res.status(400).json({ error: 'Cart is empty.' });
  const orderNum = 'UC-' + Math.random().toString(36).substr(2, 6).toUpperCase();
  const conn = await db.getConnection();
  try {
    await conn.beginTransaction();
    const [orderResult] = await conn.query(
      `INSERT INTO orders (order_num,user_id,subtotal,shipping,total,payment_method,status,address,gcash_proof,gcash_ref,gcash_status)
       VALUES (?,?,?,?,?,?,'pending',?,?,?,?)`,
      [orderNum, req.session.userId, subtotal || total, shipping || 150, total,
        paymentMethod, JSON.stringify(address), gcashProof || null, gcashRef || null, gcashStatus || null]
    );
    const orderId = orderResult.insertId;
    for (const item of cart) {
      await conn.query(
        'INSERT INTO order_items (order_id,product_id,name,category,size,qty,price,image) VALUES (?,?,?,?,?,?,?,?)',
        [orderId, item.id || null, item.name, item.category, item.size, item.qty || 1, item.finalPrice || item.price, item.image]
      );
    }
    await conn.commit();
    conn.release();
    res.json({ status: 'success', orderNum });
  } catch (e) {
    await conn.rollback();
    conn.release();
    res.status(500).json({ error: e.message });
  }
});

app.get('/api/address', requireAuth, async (req, res) => {
  try {
    const [rows] = await db.query(
      'SELECT * FROM saved_addresses WHERE user_id=? LIMIT 1', [req.session.userId]
    );
    res.json(rows[0] || null);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/api/address', requireAuth, async (req, res) => {
  const { fname, lname, phone, street, city, province, zip, region } = req.body;
  try {
    await db.query('DELETE FROM saved_addresses WHERE user_id=?', [req.session.userId]);
    await db.query(
      'INSERT INTO saved_addresses (user_id,fname,lname,phone,street,city,province,zip,region) VALUES (?,?,?,?,?,?,?,?,?)',
      [req.session.userId, fname, lname, phone, street, city, province, zip, region]
    );
    res.json({ status: 'success' });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

initDB().then(() => {
  app.listen(PORT, () => {
    console.log('\n=======================================');
    console.log('  UNCROWNED is running!');
    console.log('  Open: http://localhost:' + PORT);
    console.log('  Admin: admin / admin123');
    console.log('  DB: InfinityFree MySQL');
    console.log('=======================================\n');
  });
}).catch(err => {
  console.error('Database error:', err.message);
  process.exit(1);
});