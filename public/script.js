const BARANGAY_DATA = {
  'Pasig': [
    { name: 'Bagong Ilog', zip: '1600' }, { name: 'Bagong Katipunan', zip: '1600' }, { name: 'Bambang', zip: '1607' },
    { name: 'Buting', zip: '1607' }, { name: 'Caniogan', zip: '1603' }, { name: 'Dela Paz', zip: '1611' },
    { name: 'Kalawaan', zip: '1609' }, { name: 'Kapasigan', zip: '1609' }, { name: 'Kapitolyo', zip: '1603' },
    { name: 'Malinao', zip: '1609' }, { name: 'Manggahan', zip: '1611' }, { name: 'Maybunga', zip: '1607' },
    { name: 'Oranbo', zip: '1600' }, { name: 'Palatiw', zip: '1609' }, { name: 'Pinagbuhatan', zip: '1602' },
    { name: 'Pineda', zip: '1600' }, { name: 'Rosario', zip: '1609' }, { name: 'Sagad', zip: '1602' },
    { name: 'San Antonio', zip: '1603' }, { name: 'San Joaquin', zip: '1611' }, { name: 'San Jose', zip: '1600' },
    { name: 'San Miguel', zip: '1600' }, { name: 'San Nicolas', zip: '1600' }, { name: 'Santa Cruz', zip: '1603' },
    { name: 'Santa Lucia', zip: '1611' }, { name: 'Santa Rosa', zip: '1609' }, { name: 'Santo Tomas', zip: '1603' },
    { name: 'Santolan', zip: '1610' }, { name: 'Sumilang', zip: '1600' }, { name: 'Ugong', zip: '1604' }
  ],
  'Makati': [
    { name: 'Bel-Air', zip: '1209' }, { name: 'Carmona', zip: '1209' }, { name: 'Dasmariñas', zip: '1211' },
    { name: 'Forbes Park', zip: '1211' }, { name: 'Guadalupe Nuevo', zip: '1212' }, { name: 'Guadalupe Viejo', zip: '1212' },
    { name: 'Kasilawan', zip: '1209' }, { name: 'La Paz', zip: '1214' }, { name: 'Magallanes', zip: '1232' },
    { name: 'Olympia', zip: '1207' }, { name: 'Palanan', zip: '1235' }, { name: 'Pembo', zip: '1218' },
    { name: 'Pinagkaisahan', zip: '1214' }, { name: 'Pio del Pilar', zip: '1230' }, { name: 'Poblacion', zip: '1210' },
    { name: 'Rizal', zip: '1216' }, { name: 'Salcedo', zip: '1227' }, { name: 'San Antonio', zip: '1203' },
    { name: 'San Isidro', zip: '1234' }, { name: 'San Lorenzo', zip: '1223' }, { name: 'Santa Cruz', zip: '1203' },
    { name: 'Singkamas', zip: '1207' }, { name: 'South Cemetery', zip: '1209' }, { name: 'Tejeros', zip: '1209' },
    { name: 'Urdaneta', zip: '1223' }, { name: 'Valenzuela', zip: '1204' }
  ],
  'Quezon City': [
    { name: 'Alicia', zip: '1105' }, { name: 'Bagong Silangan', zip: '1119' }, { name: 'Batasan Hills', zip: '1126' },
    { name: 'Commonwealth', zip: '1121' }, { name: 'Cubao', zip: '1109' }, { name: 'Diliman', zip: '1101' },
    { name: 'Fairview', zip: '1118' }, { name: 'Kamuning', zip: '1103' }, { name: 'Loyola Heights', zip: '1108' },
    { name: 'Novaliches', zip: '1123' }, { name: 'Project 2', zip: '1107' }, { name: 'Project 4', zip: '1109' },
    { name: 'Project 6', zip: '1100' }, { name: 'Quirino District', zip: '1112' }, { name: 'San Francisco', zip: '1127' },
    { name: 'Tandang Sora', zip: '1116' }, { name: 'Teachers Village', zip: '1101' }, { name: 'UP Campus', zip: '1101' },
    { name: 'Visayas Avenue', zip: '1128' }, { name: 'West Triangle', zip: '1104' }
  ],
  'Manila': [
    { name: 'Binondo', zip: '1006' }, { name: 'Ermita', zip: '1000' }, { name: 'Intramuros', zip: '1002' },
    { name: 'Malate', zip: '1004' }, { name: 'Paco', zip: '1007' }, { name: 'Pandacan', zip: '1011' },
    { name: 'Port Area', zip: '1018' }, { name: 'Quiapo', zip: '1001' }, { name: 'Sampaloc', zip: '1008' },
    { name: 'San Andres', zip: '1015' }, { name: 'San Miguel', zip: '1005' }, { name: 'San Nicolas', zip: '1010' },
    { name: 'Santa Ana', zip: '1009' }, { name: 'Santa Cruz', zip: '1003' }, { name: 'Santa Mesa', zip: '1016' },
    { name: 'Tondo', zip: '1012' }
  ],
  'Taguig': [
    { name: 'Bagumbayan', zip: '1635' }, { name: 'Bambang', zip: '1635' }, { name: 'BGC (Bonifacio Global City)', zip: '1634' },
    { name: 'Calzada', zip: '1630' }, { name: 'Central Bicutan', zip: '1631' }, { name: 'Central Signal Village', zip: '1632' },
    { name: 'Fort Bonifacio', zip: '1634' }, { name: 'Hagonoy', zip: '1635' }, { name: 'Ibayo-Tipas', zip: '1635' },
    { name: 'Katuparan', zip: '1632' }, { name: 'Ligid-Tipas', zip: '1635' }, { name: 'Lower Bicutan', zip: '1631' },
    { name: 'Maharlika Village', zip: '1640' }, { name: 'North Daang Hari', zip: '1632' }, { name: 'North Signal Village', zip: '1632' },
    { name: 'Palingon', zip: '1635' }, { name: 'Pinagsama', zip: '1632' }, { name: 'San Miguel', zip: '1635' },
    { name: 'Santa Ana', zip: '1635' }, { name: 'South Daang Hari', zip: '1632' }, { name: 'Tuktukan', zip: '1635' },
    { name: 'Upper Bicutan', zip: '1631' }, { name: 'Ususan', zip: '1635' }, { name: 'Wawa', zip: '1635' }
  ],
  'Mandaluyong': [
    { name: 'Barangka Drive', zip: '1550' }, { name: 'Buayang Bato', zip: '1550' }, { name: 'Burol', zip: '1550' },
    { name: 'Daang Bakal', zip: '1550' }, { name: 'Hagdang Bato Itaas', zip: '1550' }, { name: 'Hagdang Bato Libis', zip: '1550' },
    { name: 'Harapin Ang Bukas', zip: '1550' }, { name: 'Highway Hills', zip: '1550' }, { name: 'Hulo', zip: '1550' },
    { name: 'Mauway', zip: '1550' }, { name: 'Namayan', zip: '1550' }, { name: 'New Zañiga', zip: '1550' },
    { name: 'Old Zañiga', zip: '1550' }, { name: 'Pag-asa', zip: '1550' }, { name: 'Plainview', zip: '1550' },
    { name: 'Pleasant Hills', zip: '1550' }, { name: 'Poblacion', zip: '1550' }, { name: 'San Joaquin', zip: '1550' },
    { name: 'Vergara', zip: '1550' }, { name: 'Wack-Wack Greenhills', zip: '1555' }
  ],
  'Marikina': [
    { name: 'Barangka', zip: '1809' }, { name: 'Calumpang', zip: '1808' }, { name: 'Concepcion Dos', zip: '1816' },
    { name: 'Concepcion Uno', zip: '1816' }, { name: 'Fortune', zip: '1812' }, { name: 'Industrial Valley', zip: '1810' },
    { name: 'Jesus dela Peña', zip: '1815' }, { name: 'Kalumpang', zip: '1814' }, { name: 'Malanday', zip: '1811' },
    { name: 'Nangka', zip: '1810' }, { name: 'Parang', zip: '1809' }, { name: 'San Roque', zip: '1813' },
    { name: 'Santa Elena', zip: '1810' }, { name: 'Santo Niño', zip: '1811' }, { name: 'Tañong', zip: '1810' },
    { name: 'Tumana', zip: '1810' }
  ],
  'Parañaque': [
    { name: 'Baclaran', zip: '1700' }, { name: 'BF Homes', zip: '1720' }, { name: 'Don Bosco', zip: '1711' },
    { name: 'Don Galo', zip: '1704' }, { name: 'La Huerta', zip: '1705' }, { name: 'Marcelo Green', zip: '1704' },
    { name: 'Merville', zip: '1709' }, { name: 'Moonwalk', zip: '1709' }, { name: 'San Antonio', zip: '1701' },
    { name: 'San Dionisio', zip: '1704' }, { name: 'San Isidro', zip: '1702' }, { name: 'San Martin de Porres', zip: '1704' },
    { name: 'Santo Niño', zip: '1702' }, { name: 'Sun Valley', zip: '1714' }, { name: 'Tambo', zip: '1701' },
    { name: 'Vitalez', zip: '1701' }
  ],
  'Caloocan': [
    { name: 'Bagong Silang', zip: '1428' }, { name: 'Barangay 1', zip: '1400' }, { name: 'Camarin', zip: '1422' },
    { name: 'Deparo', zip: '1424' }, { name: 'Grace Park East', zip: '1403' }, { name: 'Grace Park West', zip: '1403' },
    { name: 'Maypajo', zip: '1409' }, { name: 'Monumento', zip: '1400' }, { name: 'Novaliches', zip: '1420' },
    { name: 'Pangarap Village', zip: '1427' }, { name: 'Sangandaan', zip: '1411' }
  ],
  'Las Piñas': [
    { name: 'Almanza Dos', zip: '1750' }, { name: 'Almanza Uno', zip: '1750' }, { name: 'BF Resort', zip: '1740' },
    { name: 'CAA-BF International', zip: '1740' }, { name: 'Daniel Fajardo', zip: '1750' }, { name: 'Elias Aldana', zip: '1750' },
    { name: 'Ilaya', zip: '1750' }, { name: 'Mariposa', zip: '1740' }, { name: 'Pamplona Dos', zip: '1742' },
    { name: 'Pamplona Tres', zip: '1743' }, { name: 'Pamplona Uno', zip: '1741' }, { name: 'Pilar', zip: '1750' },
    { name: 'Pulang Lupa Dos', zip: '1740' }, { name: 'Pulang Lupa Uno', zip: '1740' }, { name: 'Talon Dos', zip: '1745' },
    { name: 'Talon Kuatro', zip: '1747' }, { name: 'Talon Singko', zip: '1748' }, { name: 'Talon Tres', zip: '1746' },
    { name: 'Talon Uno', zip: '1744' }, { name: 'Zapote', zip: '1750' }
  ],
  'Muntinlupa': [
    { name: 'Alabang', zip: '1770' }, { name: 'Ayala Alabang', zip: '1780' }, { name: 'Bayanan', zip: '1773' },
    { name: 'Buli', zip: '1774' }, { name: 'Cupang', zip: '1771' }, { name: 'Putatan', zip: '1772' },
    { name: 'Sucat', zip: '1775' }, { name: 'Tunasan', zip: '1773' }
  ],
  'Pasay': [
    { name: 'Baclaran', zip: '1300' }, { name: 'Bagong Ilog', zip: '1300' }, { name: 'Don Bosco', zip: '1300' },
    { name: 'Libertad', zip: '1300' }, { name: 'Malibay', zip: '1300' }, { name: 'Maricaban', zip: '1300' },
    { name: 'Palanyag', zip: '1300' }, { name: 'Pasay Rotonda', zip: '1300' }, { name: 'San Isidro', zip: '1300' },
    { name: 'San Jose', zip: '1300' }, { name: 'Villamor Airbase', zip: '1309' }
  ],
  'San Juan': [
    { name: 'Addition Hills', zip: '1500' }, { name: 'Balong Bato', zip: '1500' }, { name: 'Corazon de Jesus', zip: '1500' },
    { name: 'Ermitaño', zip: '1500' }, { name: 'Greenhills', zip: '1502' }, { name: 'Isabelita', zip: '1500' },
    { name: 'Kabayanan', zip: '1500' }, { name: 'Little Baguio', zip: '1500' }, { name: 'Maytunas', zip: '1500' },
    { name: 'Onse', zip: '1500' }, { name: 'Pasadena', zip: '1500' }, { name: 'Pedro Cruz', zip: '1500' },
    { name: 'Progreso', zip: '1500' }, { name: 'Rivera', zip: '1500' }, { name: 'Salapan', zip: '1500' },
    { name: 'San Perfecto', zip: '1500' }, { name: 'St. Joseph', zip: '1502' }, { name: 'Tibagan', zip: '1500' },
    { name: 'West Crame', zip: '1500' }
  ],
  'Valenzuela': [
    { name: 'Arkong Bato', zip: '1440' }, { name: 'Bagbaguin', zip: '1441' }, { name: 'Balangkas', zip: '1444' },
    { name: 'Bignay', zip: '1441' }, { name: 'Bisig', zip: '1440' }, { name: 'Canumay East', zip: '1446' },
    { name: 'Canumay West', zip: '1446' }, { name: 'Coloong', zip: '1444' }, { name: 'Dalandanan', zip: '1445' },
    { name: 'Gen. T. de Leon', zip: '1442' }, { name: 'Isla', zip: '1440' }, { name: 'Karuhatan', zip: '1441' },
    { name: 'Lingunan', zip: '1447' }, { name: 'Mabolo', zip: '1444' }, { name: 'Malanday', zip: '1447' },
    { name: 'Malinta', zip: '1444' }, { name: 'Mapulang Lupa', zip: '1440' }, { name: 'Marulas', zip: '1443' },
    { name: 'Maysan', zip: '1440' }, { name: 'Palasan', zip: '1440' }, { name: 'Parada', zip: '1440' },
    { name: 'Pariancillo Villa', zip: '1440' }, { name: 'Pasolo', zip: '1440' }, { name: 'Poblacion', zip: '1440' },
    { name: 'Punturin', zip: '1440' }, { name: 'Rincon', zip: '1440' }, { name: 'Tagalag', zip: '1441' },
    { name: 'Ugong', zip: '1440' }, { name: 'Viente Reales', zip: '1440' }, { name: 'Wawang Pulo', zip: '1440' }
  ],
  'Malabon': [
    { name: 'Acacia', zip: '1470' }, { name: 'Baritan', zip: '1470' }, { name: 'Basurero', zip: '1470' },
    { name: 'Catmon', zip: '1470' }, { name: 'Concepcion', zip: '1470' }, { name: 'Dampalit', zip: '1470' },
    { name: 'Flores', zip: '1470' }, { name: 'Hulong Duhat', zip: '1470' }, { name: 'Ibaba', zip: '1470' },
    { name: 'Longos', zip: '1470' }, { name: 'Maysilo', zip: '1470' }, { name: 'Muzon', zip: '1470' },
    { name: 'Niugan', zip: '1470' }, { name: 'Panghulo', zip: '1470' }, { name: 'Potrero', zip: '1470' },
    { name: 'San Agustin', zip: '1470' }, { name: 'Santolan', zip: '1470' }, { name: 'Tañong', zip: '1470' },
    { name: 'Tinajeros', zip: '1470' }, { name: 'Tonsuya', zip: '1470' }, { name: 'Tugatog', zip: '1470' }
  ],
  'Navotas': [
    { name: 'Bagumbayan North', zip: '1485' }, { name: 'Bagumbayan South', zip: '1485' },
    { name: 'Bangculasi', zip: '1485' }, { name: 'Daanghari', zip: '1485' }, { name: 'Navotas East', zip: '1485' },
    { name: 'Navotas West', zip: '1485' }, { name: 'North Bay Blvd. North', zip: '1485' },
    { name: 'North Bay Blvd. South', zip: '1485' }, { name: 'San Jose', zip: '1485' }, { name: 'San Roque', zip: '1485' },
    { name: 'San Rafael Village', zip: '1485' }, { name: 'Sipac-Almacen', zip: '1485' }, { name: 'Tangos', zip: '1485' }
  ],
  'Pateros': [
    { name: 'Aguho', zip: '1620' }, { name: 'Magtanggol', zip: '1620' }, { name: 'Martires del 96', zip: '1620' },
    { name: 'San Pedro', zip: '1620' }, { name: 'San Roque', zip: '1620' }, { name: 'Santa Ana', zip: '1620' },
    { name: 'Santo Rosario-Kanluran', zip: '1620' }, { name: 'Santo Rosario-Silangan', zip: '1620' }, { name: 'Tabacalera', zip: '1620' }
  ],
  'Antipolo': [{ name: 'Bagong Nayon', zip: '1870' }, { name: 'Beverly Hills', zip: '1870' }, { name: 'Calauan', zip: '1870' },
  { name: 'Cupang', zip: '1870' }, { name: 'Dalig', zip: '1870' }, { name: 'Dela Paz', zip: '1870' },
  { name: 'Mambugan', zip: '1870' }, { name: 'Mayamot', zip: '1870' }, { name: 'Ynares', zip: '1870' }],
  'Cebu City': [{ name: 'Apas', zip: '6000' }, { name: 'Banilad', zip: '6000' }, { name: 'Basak Pardo', zip: '6000' },
  { name: 'Carbon', zip: '6000' }, { name: 'IT Park', zip: '6000' }, { name: 'Lahug', zip: '6000' },
  { name: 'Mabolo', zip: '6000' }, { name: 'Maguikay', zip: '6000' }, { name: 'Sambag', zip: '6000' }, { name: 'Talamban', zip: '6000' }],
  'Davao City': [{ name: 'Agdao', zip: '8000' }, { name: 'Buhangin', zip: '8000' }, { name: 'Bunawan', zip: '8000' },
  { name: 'Calinan', zip: '8000' }, { name: 'Mintal', zip: '8000' }, { name: 'Paquibato', zip: '8000' }, { name: 'Poblacion', zip: '8000' }, { name: 'Talomo', zip: '8000' }],
};

function getBrgyOptions(city) {
  const list = BARANGAY_DATA[city];
  if (!list || !list.length) return '<option value="">No barangay data</option>';
  return '<option value="">Select barangay...</option>' + list.map(b => `<option value="${b.name}|${b.zip}">${b.name}</option>`).join('');
}

function onCityChange(select, prefix) {
  const val = select.value;
  const brgyEl = document.getElementById(prefix + '-brgy');
  if (!val) {
    if (brgyEl) { brgyEl.innerHTML = '<option value="">Select city first...</option>'; brgyEl.disabled = true; }
    return;
  }
  const parts = val.split('|');
  const city = parts[0], province = parts[1], region = parts[2], zip = parts[3];
  const el = id => document.getElementById(prefix + '-' + id);
  if (el('province')) { el('province').value = province || ''; el('province').style.color = '#111'; el('province').style.fontWeight = '500'; }
  if (el('region')) { el('region').value = region || ''; el('region').style.color = '#111'; el('region').style.fontWeight = '500'; }
  if (el('zip')) { el('zip').value = zip || ''; el('zip').style.color = '#111'; el('zip').style.fontWeight = '500'; }
  if (brgyEl) {
    brgyEl.innerHTML = getBrgyOptions(city);
    brgyEl.disabled = false;
    brgyEl.style.color = '#111';
  }
  if (prefix === 'addr') updateShippingDisplay();
}

function onBrgyChange(select, prefix) {
  const val = select.value;
  if (!val) return;
  const parts = val.split('|');
  const zip = parts[1];
  const el = id => document.getElementById(prefix + '-' + id);
  if (zip && el('zip')) { el('zip').value = zip; el('zip').style.color = '#111'; el('zip').style.fontWeight = '500'; }
}

function getShippingFee() {
  const cityEl = document.getElementById('addr-city');
  if (!cityEl || !cityEl.value) return 150;
  const city = cityEl.value.split('|')[0];
  if (city === 'Pasig') return 50;
  const region = cityEl.value.split('|')[2] || '';
  if (region === 'NCR - Metro Manila') return 100;
  if (region.includes('Region III') || region.includes('Region IV')) return 150;
  return 200;
}

function updateShippingDisplay() {
  const fee = getShippingFee();
  const shippingEl = document.getElementById('review-shipping');
  const totalEl = document.getElementById('review-total');
  if (!shippingEl || !totalEl) return;
  const subtotal = cart.reduce((s, i) => s + i.finalPrice * (i.qty || 1), 0);
  shippingEl.innerText = '₱' + fee.toLocaleString();
  totalEl.innerText = '₱' + (subtotal + fee).toLocaleString();
}

const API = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
  ? `http://${window.location.hostname}:3000`
  : 'https://uncrowned1-production.up.railway.app';
async function apiFetch(path, opts = {}) {
  const token = sessionStorage.getItem('uc_token');
  const res = await fetch(API + path, {
    headers: { 'Content-Type': 'application/json', ...(token ? { 'Authorization': token } : {}) },
    ...opts
  });
  return res.json();
}

const SIZE_SURCHARGE = { 'S': 0, 'M': 0, 'L': 0, 'XL': 50, '2XL': 100 };
const ALL_SIZES = ['S', 'M', 'L', 'XL', '2XL'];

const ADMIN_CREDENTIALS = { username: 'admin', password: 'admin123' };

let allProducts = [
  {
    id: 1, name: "Uncrowned Signature Shirt", category: "shirts", price: 1200, sizes: ALL_SIZES, image: "https://image2url.com/r2/default/images/1772616627489-ca85cae5-e9e3-4104-9c86-eed7f1c1f95a.png",
    details: ['Drop shoulder cut', 'Boxy oversized fit', 'Front and back logo print', 'Ribbed crew neckline', 'FREE Stickers in every purchase'],
    specs: ['100% COTTON', '260 GSM', 'FRENCH TERRY FABRIC']
  },
  {
    id: 2, name: "Premium Crewneck Shirt", category: "shirts", price: 2800, sizes: ALL_SIZES, image: "https://image2url.com/r2/default/images/1772616781321-dc5096d1-b4b1-47e9-9843-07573b357930.png",
    details: ['Relaxed crewneck silhouette', 'Chest pocket detail', 'Washed premium finish', 'Dropped shoulders', 'FREE Stickers in every purchase'],
    specs: ['100% COTTON', '280 GSM', 'HEAVYWEIGHT JERSEY FABRIC']
  },
  {
    id: 3, name: "U Cant See Me - Cena Tribute", category: "shirts", price: 4500, sizes: ALL_SIZES, image: "https://image2url.com/r2/default/images/1772616833059-bcd3948a-7c37-4d31-97c6-3feba9ee504b.png",
    details: ['Limited edition graphic tee', 'Full front tribute print', 'Oversized boxy fit', 'Reinforced stitching', 'FREE Stickers in every purchase'],
    specs: ['100% COTTON', '240 GSM', 'COMBED COTTON FABRIC']
  },
  {
    id: 4, name: "Premium Crewneck Shirt", category: "shirts", price: 1500, sizes: ALL_SIZES, image: "https://image2url.com/r2/default/images/1772616910426-eff84a2f-325c-48fe-b520-2c73db79f33e.png",
    details: ['Classic crewneck style', 'Minimalist embroidered logo', 'Regular fit construction', 'Soft brushed interior', 'FREE Stickers in every purchase'],
    specs: ['100% COTTON', '260 GSM', 'FLEECE FABRIC']
  },
  {
    id: 5, name: "Crewneck Shirt - White", category: "shirts", price: 3200, sizes: ALL_SIZES, image: "https://image2url.com/r2/default/images/1772616926529-99357e25-a78d-4036-9c7d-004abb0914fc.png",
    details: ['Clean all-white colorway', 'Back graphic print', 'Oversized streetwear fit', 'Double-stitched hem', 'FREE Stickers in every purchase'],
    specs: ['100% COTTON', '270 GSM', 'FRENCH TERRY FABRIC']
  },
  {
    id: 6, name: "Signature Denim Pants", category: "pants", price: 1500, sizes: ALL_SIZES, image: "https://image2url.com/r2/default/images/1772687296130-88262a7a-5fe6-4152-9207-8d2db21469f5.png",
    details: ['Relaxed Tapered Fit', 'Elastic Waistband with Adjustable Drawstring', 'Side Pockets and Back Pocket', 'Minimal Front Logo Print', 'Ribbed / Adjustable Ankle Cuffs', 'Custom Tailored Fit', 'FREE Stickers in every purchase'],
    specs: ['100% COTTON', '320 GSM', 'FRENCH TERRY FABRIC']
  },
  {
    id: 7, name: "Baggy Jeans Pants", category: "pants", price: 2500, sizes: ALL_SIZES, image: "https://image2url.com/r2/default/images/1772687493366-18a16328-2aca-4f31-b434-68009c34dbda.png",
    details: ['Relaxed Tapered Fit', 'Elastic Waistband with Adjustable Drawstring', 'Side Pockets and Back Pocket', 'Minimal Front Logo Print', 'Ribbed / Adjustable Ankle Cuffs', 'Custom Tailored Fit', 'FREE Stickers in every purchase'],
    specs: ['100% COTTON', '320 GSM', 'FRENCH TERRY FABRIC']
  },
  {
    id: 8, name: "Gothic Retro Spider - Baggy Jeans", category: "pants", price: 2100, sizes: ALL_SIZES, image: "https://image2url.com/r2/default/images/1772687632857-3958a437-db9d-4a98-8346-7c572adc2de5.png",
    details: ['Relaxed Tapered Fit', 'Elastic Waistband with Adjustable Drawstring', 'Side Pockets and Back Pocket', 'Minimal Front Logo Print', 'Ribbed / Adjustable Ankle Cuffs', 'Custom Tailored Fit', 'FREE Stickers in every purchase'],
    specs: ['100% COTTON', '320 GSM', 'FRENCH TERRY FABRIC']
  },
  {
    id: 9, name: "2125 - Divine Sweats", category: "pants", price: 1300, sizes: ALL_SIZES, image: "https://image2url.com/r2/default/images/1772687674047-b56301ed-dbde-4bf3-acfc-2bc698bdfd56.png",
    details: ['Relaxed Tapered Fit', 'Elastic Waistband with Adjustable Drawstring', 'Side Pockets and Back Pocket', 'Minimal Front Logo Print', 'Ribbed / Adjustable Ankle Cuffs', 'Custom Tailored Fit', 'FREE Stickers in every purchase'],
    specs: ['100% COTTON', '320 GSM', 'FRENCH TERRY FABRIC']
  },
  {
    id: 10, name: "Aonga Y2k Sweatpants", category: "pants", price: 1300, sizes: ALL_SIZES, image: "https://image2url.com/r2/default/images/1772687697510-5beab4ad-3b58-4355-a2b3-26b2d3d3d383.png",
    details: ['Drop Shoulder Fit', 'Relaxed / Boxy Silhouette', 'Full Front Zipper Closure', 'Front and Back Logo Print', 'Side Pockets', 'Ribbed Cuffs and Hem', 'Custom Fit', 'FRENCH TERRY / FLEECE FABRIC', 'FREE Stickers in every purchase'],
    specs: ['100% COTTON / COTTON BLEND', '380-420 GSM', 'FRENCH TERRY / FLEECE FABRIC']
  },
  {
    id: 11, name: "Vielseitige Herbst-Windbreaker Jacket", category: "jackets", price: 1500, sizes: ALL_SIZES, image: "https://image2url.com/r2/default/images/1772687951776-b553f020-c392-44ed-bea1-944d2892746c.png",
    details: ['Drop Shoulder Fit', 'Relaxed / Boxy Silhouette', 'Full Front Zipper Closure', 'Front and Back Logo Print', 'Side Pockets', 'Ribbed Cuffs and Hem', 'Custom Fit', 'FRENCH TERRY / FLEECE FABRIC', 'FREE Stickers in every purchase'],
    specs: ['100% COTTON / COTTON BLEND', '380-420 GSM', 'FRENCH TERRY / FLEECE FABRIC']
  },
  {
    id: 12, name: "POOPMOOM Y2k Jacket", category: "jackets", price: 1000, sizes: ALL_SIZES, image: "https://image2url.com/r2/default/images/1772688023426-eb7e157e-eb84-4d55-8935-37d0190a9b7c.png",
    details: ['Drop Shoulder Fit', 'Relaxed / Boxy Silhouette', 'Full Front Zipper Closure', 'Front and Back Logo Print', 'Side Pockets', 'Ribbed Cuffs and Hem', 'Custom Fit', 'FRENCH TERRY / FLEECE FABRIC', 'FREE Stickers in every purchase'],
    specs: ['100% COTTON / COTTON BLEND', '380-420 GSM', 'FRENCH TERRY / FLEECE FABRIC']
  },
  {
    id: 13, name: "Japanese Zip Up Hoodie Patagonia", category: "jackets", price: 1600, sizes: ALL_SIZES, image: "https://image2url.com/r2/default/images/1772688071488-95b3b0fa-ccb6-4313-a409-bff8d0d85ea1.png",
    details: ['Drop Shoulder Fit', 'Relaxed / Boxy Silhouette', 'Full Front Zipper Closure', 'Front and Back Logo Print', 'Side Pockets', 'Ribbed Cuffs and Hem', 'Custom Fit', 'FRENCH TERRY / FLEECE FABRIC', 'FREE Stickers in every purchase'],
    specs: ['100% COTTON / COTTON BLEND', '380-420 GSM', 'FRENCH TERRY / FLEECE FABRIC']
  },
];

let registeredUsers = [];
let cart = [];
let currentUser = null;
let productToDelete = null;

let allOrders = [];

document.addEventListener('DOMContentLoaded', () => {

  populateBirthdaySelects();


  const transferToken = localStorage.getItem('uc_admin_token');
  const transferUser = localStorage.getItem('uc_admin_user');
  if (transferToken && transferUser) {
    sessionStorage.setItem('uc_token', transferToken);
    sessionStorage.setItem('uc_user', transferUser);
    localStorage.removeItem('uc_admin_token');
    localStorage.removeItem('uc_admin_user');
  }

  const savedUser = sessionStorage.getItem('uc_user');
  if (savedUser) {
    try {
      currentUser = JSON.parse(savedUser);
    } catch (e) {
      sessionStorage.removeItem('uc_user');
      sessionStorage.removeItem('uc_token');
    }
  }
  updateAuthUI();


  if (new URLSearchParams(window.location.search).get('admin') === '1') {
    if (currentUser && currentUser.role === 'admin') {
      apInit();
    } else {

      window.location.href = window.location.pathname;
    }
    return;
  }

  loadProductsFromAPI();

  const savedCart = localStorage.getItem('uc_cart');
  if (savedCart) {
    try { cart = JSON.parse(savedCart); updateCartUI(); } catch (e) { }
  }
});

function getSurcharge(size) {
  return SIZE_SURCHARGE[size] || 0;
}
function getFinalPrice(basePrice, size) {
  return basePrice + getSurcharge(size);
}

function getSizeChartHTML(category) {
  const cat = (category || '').toLowerCase();
  let rows, headers;
  if (cat === 'pants') {
    headers = ['SIZE', 'LENGTH', 'WIDTH', 'WAIST'];
    rows = [['SMALL', '40', '23', '28-30'], ['MEDIUM', '41', '23', '30-32'], ['LARGE', '42', '25', '32-34'], ['XL', '43', '26', '36-38'], ['2XL', '44', '27', '40-42']];
  } else if (cat === 'jackets') {
    headers = ['SIZE', 'LENGTH', 'CHEST', 'SHOULDER'];
    rows = [['SMALL', '27', '21', '17'], ['MEDIUM', '28', '22', '18'], ['LARGE', '29', '23', '19'], ['XL', '30', '24', '20'], ['2XL', '31', '25', '21']];
  } else {
    headers = ['SIZE', 'LENGTH', 'CHEST', 'SHOULDER'];
    rows = [['SMALL', '27', '20', '17'], ['MEDIUM', '28', '21', '18'], ['LARGE', '29', '22', '19'], ['XL', '30', '23.5', '20'], ['2XL', '31', '25', '21']];
  }
  return `<table style="width:100%;border-collapse:collapse;font-size:0.65rem;font-family:'Inter',sans-serif;">
    <thead><tr>${headers.map(h => `<th style="border:1px solid rgba(255,255,255,0.4);padding:4px 6px;letter-spacing:1px;font-weight:700;color:#fff;background:rgba(0,0,0,0.5);">${h}</th>`).join('')}</tr></thead>
    <tbody>${rows.map(r => `<tr>${r.map(c => `<td style="border:1px solid rgba(255,255,255,0.35);padding:4px 6px;text-align:center;color:#fff;font-weight:600;">${c}</td>`).join('')}</tr>`).join('')}</tbody>
  </table>`;
}

function renderProducts(products) {
  const grid = document.getElementById('product-grid');
  grid.innerHTML = '';
  if (products.length === 0) {
    grid.innerHTML = '<p style="color:#888;grid-column:1/-1;padding:40px 0;">No products found.</p>';
    return;
  }
  products.forEach(product => {
    const ss = product.size_stock || {};
    const hasSizeStock = Object.keys(ss).length > 0;
    const totalStock = hasSizeStock
      ? Object.values(ss).reduce((a, b) => a + b, 0)
      : (product.stock != null ? product.stock : 999);
    const isFullyOut = totalStock === 0;

    const card = document.createElement('div');
    card.className = 'product-card product-card-minimal';
    if (isFullyOut) {
      card.style.opacity = '0.65';
      card.style.cursor = 'default';
      card.onclick = () => showToast('Sorry, this item is currently out of stock.');
    } else {
      card.onclick = () => openProductDetail(product.id);
    }
    card.innerHTML = `
      <div class="image-container" style="position:relative;">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        ${isFullyOut ? `<div style="position:absolute;inset:0;background:rgba(0,0,0,0.55);display:flex;align-items:center;justify-content:center;"><span style="background:#c0392b;color:#fff;font-size:0.65rem;font-weight:800;letter-spacing:2px;padding:6px 14px;">OUT OF STOCK</span></div>` : ''}
        <div class="card-hover-overlay">
          <div class="card-size-chart">
            <div style="color:#fff;font-family:'Anton',sans-serif;font-size:0.75rem;letter-spacing:2px;margin-bottom:6px;text-align:center;">SIZE GUIDE (inches)</div>
            ${getSizeChartHTML(product.category)}
          </div>
        </div>
      </div>
      <div class="product-info">
        <span class="prod-name">${product.name}</span>
        <span class="prod-price">₱${product.price.toLocaleString()}</span>
      </div>
      <div class="product-cat">${product.category.toUpperCase()}</div>
    `;
    grid.appendChild(card);
  });
}

function openProductDetail(id) {
  const product = allProducts.find(p => p.id === id);
  if (!product) return;
  const sizes = (product.sizes && product.sizes.length > 0) ? product.sizes : ALL_SIZES;
  const ss = product.size_stock || {};
  const hasSizeStock = Object.keys(ss).length > 0;

  const sizeButtons = sizes.map(s => {
    const surcharge = getSurcharge(s);
    const tag = surcharge > 0 ? `<span class="size-surcharge-detail">+₱${surcharge}</span>` : '';
    const qty = hasSizeStock ? (ss[s] != null ? ss[s] : 0) : null;
    const noStockAtAll = !hasSizeStock && (product.stock != null && product.stock <= 0);
    const isOut = noStockAtAll || (hasSizeStock && qty === 0);
    const isLow = hasSizeStock && qty > 0 && qty <= 2;
    const stockTag = isOut ? `<span style="display:block;font-size:0.55rem;color:#c0392b;font-weight:700;letter-spacing:0.5px;">OUT</span>`
      : isLow ? `<span style="display:block;font-size:0.55rem;color:#e67e22;font-weight:700;letter-spacing:0.5px;">${qty} LEFT</span>` : '';
    return `<button class="detail-size-btn${isOut ? ' size-out' : ''}" ${isOut ? 'disabled' : `onclick="selectDetailSize(this,${product.id})"`} data-size="${s}" data-base="${product.price}" style="${isOut ? 'opacity:0.4;cursor:not-allowed;text-decoration:line-through;' : ''}">${s}${tag}${stockTag}</button>`;
  }).join('');

  const totalStock = hasSizeStock ? Object.values(ss).reduce((a, b) => a + b, 0) : product.stock;
  const stockBadge = totalStock != null
    ? (totalStock === 0
      ? `<span class="stock-badge out">OUT OF STOCK</span>`
      : totalStock <= 5
        ? `<span class="stock-badge low">${totalStock} LEFT</span>`
        : `<span class="stock-badge in">IN STOCK</span>`)
    : '';

  document.getElementById('detail-image').src = product.image;
  document.getElementById('detail-name').innerText = product.name;
  document.getElementById('detail-cat').innerText = product.category.toUpperCase();
  document.getElementById('detail-price').innerHTML = `₱${product.price.toLocaleString()}`;
  const unisexBadge = `<span class="stock-badge unisex">UNISEX</span>`;
  document.getElementById('detail-stock-badge').innerHTML = stockBadge + unisexBadge;
  document.getElementById('detail-sizes').innerHTML = sizeButtons;
  document.getElementById('detail-size-error').style.display = 'none';
  document.getElementById('detail-add-btn').onclick = () => addToCartFromDetail(product.id);
  document.getElementById('detail-product-id').value = product.id;

  const details = product.details && product.details.length ? product.details : [];
  const specs = product.specs && product.specs.length ? product.specs : [];
  const detailEl = document.getElementById('detail-description');
  if (detailEl) {
    detailEl.innerHTML = `
      ${details.length ? `<div class="detail-desc-section"><div class="detail-desc-title">DETAILS</div>${details.map(d => `<div class="detail-desc-line">${d}</div>`).join('')}</div>` : ''}
      ${specs.length ? `<div class="detail-desc-section"><div class="detail-desc-title">SPEC</div>${specs.map(s => `<div class="detail-desc-line">${s}</div>`).join('')}</div>` : ''}
    `;
  }
  openModal('product-detail-modal');
}

function selectDetailSize(btn, productId) {
  document.querySelectorAll('.detail-size-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  const product = allProducts.find(p => p.id === productId);
  const surcharge = getSurcharge(btn.dataset.size);
  const finalPrice = product.price + surcharge;
  document.getElementById('detail-price').innerHTML = surcharge > 0
    ? `₱${finalPrice.toLocaleString()} <span style="font-size:0.8rem;color:#888;font-weight:400;">incl. +₱${surcharge} for ${btn.dataset.size}</span>`
    : `₱${finalPrice.toLocaleString()}`;
  document.getElementById('detail-size-error').style.display = 'none';
}

function addToCartFromDetail(id) {
  const product = allProducts.find(p => p.id === id);
  if (!product) return;
  const selectedBtn = document.querySelector('.detail-size-btn.selected');
  if (!selectedBtn) {
    document.getElementById('detail-size-error').style.display = 'block';
    return;
  }
  const size = selectedBtn.dataset.size;
  const ss = product.size_stock || {};
  const hasSizeStock = Object.keys(ss).length > 0;
  if (hasSizeStock && (ss[size] == null || ss[size] <= 0)) return showToast(`Sorry, ${size} is out of stock.`);
  if (!hasSizeStock && product.stock != null && product.stock <= 0) return showToast('Sorry, this item is out of stock.');
  const finalPrice = getFinalPrice(product.price, size);
  const existing = cart.find(i => i.id === id && i.size === size);
  if (existing) {
    existing.qty = (existing.qty || 1) + 1;
    existing.finalPrice = finalPrice;
  } else {
    cart.push({ ...product, size, finalPrice, qty: 1 });
  }
  if (hasSizeStock && ss[size] != null) ss[size] = Math.max(0, ss[size] - 1);
  else if (product.stock != null) product.stock = Math.max(0, product.stock - 1);
  updateCartUI();
  closeModal('product-detail-modal');
  document.getElementById('cart-modal').classList.add('active');
  document.getElementById('overlay').style.display = 'block';
  showToast(`${product.name} (${size}) added to bag!`);
}

function selectSize(btn, productId) {
  document.querySelectorAll(`#sizes-${productId} .size-btn`).forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');

  const basePrice = parseInt(btn.dataset.base);
  const surcharge = getSurcharge(btn.dataset.size);
  const finalPrice = basePrice + surcharge;
  const priceEl = document.getElementById(`price-display-${productId}`);
  if (priceEl) {
    priceEl.innerHTML = surcharge > 0
      ? `₱${finalPrice.toLocaleString()} <span class="price-surcharge-tag">incl. +₱${surcharge} for ${btn.dataset.size}</span>`
      : `₱${finalPrice.toLocaleString()}`;
  }
  const err = document.getElementById(`size-err-${productId}`);
  if (err) err.style.display = 'none';
}

function filterProducts(category) {
  if (category === 'all') renderProducts(allProducts);
  else renderProducts(allProducts.filter(p => p.category === category));
}

function validateStreetInput(input) {
  input.value = input.value.replace(/[^a-zA-Z0-9 ,./\-#()]/g, '');
}

function toggleCart() {
  const cartModal = document.getElementById('cart-modal');
  const overlay = document.getElementById('overlay');
  const isActive = cartModal.classList.toggle('active');
  overlay.style.display = isActive ? 'block' : 'none';
}

function addToCart(id) {
  const product = allProducts.find(p => p.id === id);
  if (!product) return;
  const selectedBtn = document.querySelector(`#sizes-${id} .size-btn.selected`);
  if (!selectedBtn) {
    const err = document.getElementById(`size-err-${id}`);
    if (err) { err.style.display = 'block'; err.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }
    return;
  }
  const size = selectedBtn.dataset.size;
  const ss = product.size_stock || {};
  const hasSS = Object.keys(ss).length > 0;
  if (hasSS && (ss[size] == null || ss[size] <= 0)) return showToast(`❌ ${product.name} (${size}) is out of stock.`);
  if (!hasSS && product.stock != null && product.stock <= 0) return showToast(`❌ ${product.name} is out of stock.`);
  const currentQtyInCart = cart.filter(i => i.id === id && i.size === size).reduce((s, i) => s + (i.qty || 1), 0);
  if (hasSS && ss[size] != null && currentQtyInCart >= ss[size]) return showToast(`❌ Only ${ss[size]} left in stock for ${product.name} (${size}).`);
  const finalPrice = getFinalPrice(product.price, size);
  const existing = cart.find(i => i.id === id && i.size === size);
  if (existing) { existing.qty = (existing.qty || 1) + 1; }
  else { cart.push({ ...product, size, finalPrice, qty: 1 }); }
  updateCartUI();
  document.getElementById('cart-modal').classList.add('active');
  document.getElementById('overlay').style.display = 'block';
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

function updateCartUI() {
  localStorage.setItem('uc_cart', JSON.stringify(cart));
  const totalItems = cart.reduce((s, i) => s + (i.qty || 1), 0);
  document.getElementById('cart-count').innerText = totalItems;
  const container = document.getElementById('cart-items');
  container.innerHTML = '';
  let total = 0;
  cart.forEach((item, index) => {
    const qty = item.qty || 1;
    total += item.finalPrice * qty;
    const surcharge = getSurcharge(item.size);
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div style="flex:1;min-width:0;">
        <h4 style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${item.name}</h4>
        <p style="font-size:0.78rem;color:#888;margin:2px 0;">Size: <strong>${item.size}</strong>${surcharge > 0 ? ` · +₱${surcharge}` : ''}</p>
        <div style="display:flex;align-items:center;justify-content:space-between;margin-top:6px;gap:8px;">
          <div class="qty-control">
            <button class="qty-btn" onclick="changeQty(${index},-1)">−</button>
            <span class="qty-num">${qty}</span>
            <button class="qty-btn" onclick="changeQty(${index},1)">+</button>
          </div>
          <span style="font-weight:700;font-size:0.92rem;">₱${(item.finalPrice * qty).toLocaleString()}</span>
        </div>
        <button onclick="removeFromCart(${index})" class="cart-remove-btn">🗑 Remove</button>
      </div>
    `;
    container.appendChild(div);
  });
  document.getElementById('cart-total').innerText = `₱${total.toLocaleString()}`;
}

function changeQty(index, delta) {
  const item = cart[index];
  if (!item) return;
  const newQty = (item.qty || 1) + delta;
  if (newQty <= 0) { cart.splice(index, 1); }
  else { item.qty = newQty; }
  updateCartUI();
}

function checkout() {
  if (cart.length === 0) return showToast('Your bag is empty.');
  if (!currentUser) {
    document.getElementById('cart-modal').classList.remove('active');
    document.getElementById('overlay').style.display = 'none';
    showToast('Please log in to checkout.');
    setTimeout(() => openModal('login-modal'), 400);
    return;
  }
  document.getElementById('cart-modal').classList.remove('active');
  openCheckout();
}

let selectedPayMethod = 'instapay';
let currentStep = 1;

function openCheckout() {
  goToStep(1, true);
  selectedPayMethod = 'instapay';
  selectPayMethod('instapay');
  prefillSavedAddress();
  openModal('checkout-modal');
}

function goToStep(step, silent) {
  if (!silent && step > currentStep) {
    if (currentStep === 1 && !validateAddress()) return;
    if (currentStep === 2 && !validatePayment()) return;
  }
  if (!silent && step < currentStep) {
    if (!confirm('Are you sure you want to go back? Your progress on this step will be lost.')) return;
  }
  if (step === 3 && !silent) {
    if (selectedPayMethod === 'gcash' || selectedPayMethod === 'instapay') {
      launchGCashRedirect();
      return;
    }
    buildReviewPanel();
  }
  document.querySelectorAll('.checkout-panel').forEach(p => p.classList.remove('active'));
  document.getElementById('checkout-step-' + step).classList.add('active');
  currentStep = step;
  updateStepIndicator(step);
}

function updateStepIndicator(step) {
  for (let i = 1; i <= 3; i++) {
    const circle = document.getElementById('step-circle-' + i);
    const label = document.getElementById('step-label-' + i);
    circle.classList.remove('active', 'done');
    label.classList.remove('active', 'done');
    if (i < step) { circle.classList.add('done'); label.classList.add('done'); circle.innerText = '✓'; }
    else if (i === step) { circle.classList.add('active'); label.classList.add('active'); circle.innerText = i; }
    else { circle.innerText = i; }
  }
  const line1 = document.getElementById('step-line-1');
  const line2 = document.getElementById('step-line-2');
  if (line1) line1.classList.toggle('done', step > 1);
  if (line2) line2.classList.toggle('done', step > 2);
}

function validateAddress() {
  const fname = document.getElementById('addr-fname').value.trim();
  const lname = document.getElementById('addr-lname').value.trim();
  const phone = document.getElementById('addr-phone').value.trim();
  const street = document.getElementById('addr-street').value.trim();
  const street2 = (document.getElementById('addr-street2')?.value || '').trim();
  const city = (document.getElementById('addr-city').value.trim().split('|')[0]);
  const province = document.getElementById('addr-province').value.trim();
  const zip = document.getElementById('addr-zip').value.trim();
  const region = document.getElementById('addr-region').value;
  const err = document.getElementById('address-error');
  if (!fname || !lname) return showCheckError(err, 'Please enter your full name.');
  if (!phone || phone.length !== 11) return showCheckError(err, 'Please enter a valid 11-digit phone number.');
  if (!phone.startsWith('09')) return showCheckError(err, '⚠️ Phone number must start with 09.');
  if (!street) return showCheckError(err, 'Please enter your street address.');
  if (!/[a-zA-Z]/.test(street)) return showCheckError(err, 'Street address must include a street name (e.g. 123 Rizal St.).');
  if ((street.match(/[0-9]/g) || []).length < 1 || (street.match(/[0-9]/g) || []).length > 3) return showCheckError(err, '⚠️ Street address must contain 1 to 3 numbers (e.g. 123 Rizal St.).');
  if (!city) return showCheckError(err, 'Please select your city.');
  if (!province) return showCheckError(err, 'Please enter your province.');
  if (!zip) return showCheckError(err, 'Please enter your ZIP code.');
  if (!region) return showCheckError(err, 'Please select your region.');
  err.style.display = 'none';
  return true;
}

function validatePayment() {
  const err = document.getElementById('payment-error');
  if (!selectedPayMethod) return showCheckError(err, 'Please select a payment method.');
  err.style.display = 'none';
  return true;
}

function showCheckError(el, msg) { el.innerText = msg; el.style.display = 'block'; return false; }

function buildReviewPanel() {
  const subtotal = cart.reduce((s, i) => s + i.finalPrice * (i.qty || 1), 0);
  const shipping = 150;
  const total = subtotal + shipping;
  const itemsEl = document.getElementById('review-items');
  itemsEl.innerHTML = '';
  cart.forEach(item => {
    const surcharge = getSurcharge(item.size);
    const d = document.createElement('div');
    d.className = 'summary-item';
    d.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="summary-item-info">
        <strong>${item.name}</strong>
        <small>${item.category.toUpperCase()} · Size: <strong>${item.size}</strong>${surcharge > 0 ? ` (+₱${surcharge})` : ''}</small>
      </div>
      <div class="summary-item-price">₱${item.finalPrice.toLocaleString()}</div>
    `;
    itemsEl.appendChild(d);
  });
  document.getElementById('review-subtotal').innerText = `₱${subtotal.toLocaleString()}`;
  document.getElementById('review-shipping').innerText = `₱${shipping.toLocaleString()}`;
  document.getElementById('review-total').innerText = `₱${total.toLocaleString()}`;

  const fname = document.getElementById('addr-fname').value.trim();
  const lname = document.getElementById('addr-lname').value.trim();
  const phone = document.getElementById('addr-phone').value.trim();
  const street = document.getElementById('addr-street').value.trim();
  const street2 = (document.getElementById('addr-street2')?.value || '').trim();
  const city = (document.getElementById('addr-city').value.trim().split('|')[0]);
  const province = document.getElementById('addr-province').value.trim();
  const zip = document.getElementById('addr-zip').value.trim();
  const region = document.getElementById('addr-region').value;
  document.getElementById('review-address').innerHTML =
    `<strong>${fname} ${lname}</strong><br>${phone}<br>${street}<br>${city}, ${province} ${zip}<br>${region}`;

  let payHTML = '';
  if (selectedPayMethod === 'instapay') {
    payHTML = `⚡ <strong>GCash InstaPay</strong><br>Tirso Jr. Gervacio`;
  } else {
    payHTML = `💵 <strong>Cash on Delivery</strong><br>Pay when your order arrives.`;
  }
  document.getElementById('review-payment').innerHTML = payHTML;
}

function placeOrder(gcashMeta) {
  const subtotal = cart.reduce((s, i) => s + i.finalPrice * (i.qty || 1), 0);
  const shipping = (gcashMeta && gcashMeta.shippingFee) ? gcashMeta.shippingFee : getShippingFee();
  const total = subtotal + shipping;
  const orderNum = 'UL-' + Math.random().toString(36).substr(2, 6).toUpperCase();

  const addrSrc = (gcashMeta && gcashMeta.address) ? gcashMeta.address : {
    fname: document.getElementById('addr-fname').value.trim(),
    lname: document.getElementById('addr-lname').value.trim(),
    phone: document.getElementById('addr-phone').value.trim(),
    street: document.getElementById('addr-street').value.trim(),
    street2: (document.getElementById('addr-street2')?.value || '').trim(),
    city: (document.getElementById('addr-city').value.trim().split('|')[0]),
    barangay: ((document.getElementById('addr-brgy')?.value || '').split('|')[0]),
    province: document.getElementById('addr-province').value.trim(),
    zip: document.getElementById('addr-zip').value.trim(),
    region: document.getElementById('addr-region').value,
  };
  const { fname, lname, phone, street, barangay, city, province, zip, region } = addrSrc;
  const saveCb = document.getElementById('save-address-cb');
  if (saveCb && saveCb.checked) {
    saveAddressToStorage(addrSrc);
    apiFetch('/api/address', { method: 'POST', body: JSON.stringify(addrSrc) }).catch(() => { });
  }

  const order = {
    orderNum,
    customer: currentUser.username,
    items: cart.map(i => ({ name: i.name, size: i.size, qty: i.qty || 1, price: i.finalPrice, image: i.image })),
    subtotal, shipping, total,
    address: { name: `${fname} ${lname}`, phone, street, barangay: barangay || '', city, province, zip, region },
    payment: selectedPayMethod,
    status: 'pending',
    gcashProof: gcashMeta ? gcashMeta.gcashProof : null,
    gcashRef: gcashMeta ? gcashMeta.gcashRef : null,
    gcashStatus: gcashMeta ? gcashMeta.gcashStatus : null,
    createdAt: new Date().toISOString()
  };
  const isGCashOrder = selectedPayMethod === 'gcash' || selectedPayMethod === 'instapay';
  apiFetch('/api/checkout', {
    method: 'POST', body: JSON.stringify({
      cart: cart.map(i => ({ id: i.id, name: i.name, category: i.category, size: i.size, qty: i.qty || 1, finalPrice: i.finalPrice, price: i.finalPrice, image: i.image })),
      subtotal, shipping, total,
      address: order.address,
      paymentMethod: selectedPayMethod,
      gcashProof: gcashMeta ? gcashMeta.gcashProof : null,
      gcashRef: gcashMeta ? gcashMeta.gcashRef : null,
      gcashStatus: gcashMeta ? gcashMeta.gcashStatus : null,
    })
  }).then(data => {
    if (data && data.error) {
      showToast('❌ ' + data.error);
      loadProductsFromAPI();
      return;
    }
    const realOrderNum = (data && data.orderNum) ? data.orderNum : orderNum;
    document.getElementById('success-screen-confirmed').style.display = isGCashOrder ? 'none' : 'block';
    document.getElementById('success-screen-gcash').style.display = isGCashOrder ? 'block' : 'none';
    document.getElementById('success-order-num').innerText = 'ORDER #' + realOrderNum;
    document.getElementById('success-order-num-gcash').innerText = 'ORDER #' + realOrderNum;
    document.querySelectorAll('.checkout-panel').forEach(p => p.classList.remove('active'));
    document.getElementById('checkout-success').classList.add('active');
    if (isGCashOrder) {
      showToast('⏳ Payment submitted! Waiting for admin confirmation.');
    } else {
      addNotification('🛵 Order #' + realOrderNum + ' placed successfully via COD! We will prepare your order for shipping.', 'cod');
      showToast('🛵 COD Order #' + realOrderNum + ' placed! Preparing for shipping.');
    }
    cart = [];
    updateCartUI();
    updateStepIndicator(4);
    refreshMyOrdersBadges();
    loadProductsFromAPI();
    if (typeof apProducts !== 'undefined') apLoadAll();
  }).catch(err => {
    showToast('Order failed. Please try again.');
    console.error(err);
  });
}

function selectPayMethod(method) {
  selectedPayMethod = method;
  ['instapay', 'cod'].forEach(m => {
    const btn = document.getElementById('pm-' + m);
    const pan = document.getElementById('pay-panel-' + m);
    if (btn) btn.classList.toggle('selected', m === method);
    if (pan) pan.classList.toggle('active', m === method);
  });
  const nextBtn = document.getElementById('checkout-next-btn');
  if (nextBtn) {
    nextBtn.textContent = method === 'cod' ? 'REVIEW ORDER →' : 'PROCEED TO PAYMENT →';
  }
}

function formatCardNumber(input) {
  let v = input.value.replace(/\D/g, '').substring(0, 16);
  input.value = v.replace(/(.{4})/g, '$1 ').trim();
}
function formatExpiry(input) {
  let v = input.value.replace(/\D/g, '').substring(0, 4);
  if (v.length >= 3) v = v.slice(0, 2) + '/' + v.slice(2);
  input.value = v;
}
function updateCardPreview() {
  const num = document.getElementById('card-number').value || '•••• •••• •••• ••••';
  const name = document.getElementById('card-name').value.toUpperCase() || 'YOUR NAME';
  const exp = document.getElementById('card-expiry').value || 'MM/YY';
  document.getElementById('card-num-display').innerText = num;
  document.getElementById('card-name-display').innerText = name;
  document.getElementById('card-exp-display').innerText = exp;
}

function openModal(id) {
  document.getElementById(id).classList.add('active');
  document.getElementById('overlay').style.display = 'block';
}
function closeCheckout() {
  const successVisible = document.getElementById('checkout-success')?.classList.contains('active');
  if (successVisible) {
    closeModal('checkout-modal');
    return;
  }
  if (!confirm('Are you sure you want to cancel checkout? Your cart items will be kept.')) return;
  closeModal('checkout-modal');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('active');
  const anyOpen = document.querySelector('.modal.active');
  const cartOpen = document.getElementById('cart-modal').classList.contains('active');
  if (!anyOpen && !cartOpen) document.getElementById('overlay').style.display = 'none';
}
function closeAllModals() {
  document.querySelectorAll('.modal.active').forEach(m => m.classList.remove('active'));
  document.getElementById('cart-modal').classList.remove('active');
  document.getElementById('overlay').style.display = 'none';
}
function switchModal(fromId, toId) {
  document.getElementById(fromId).classList.remove('active');
  document.getElementById(toId).classList.add('active');
}
function showError(id, msg) {
  const el = document.getElementById(id);
  el.innerText = msg; el.style.display = 'block';
}
function hideError(id) { document.getElementById(id).style.display = 'none'; }
function showToast(msg) {
  const toast = document.createElement('div');
  toast.className = 'toast'; toast.innerText = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 400); }, 3500);
}

function signup() {
  hideError('signup-error');
  const username = document.getElementById('signup-username').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const ageVal = document.getElementById('signup-age').value.trim();
  const password = document.getElementById('signup-password').value;
  const agreedTerms = document.getElementById('agree-terms').checked;
  const agreedPrivacy = document.getElementById('agree-privacy').checked;
  const birthday = document.getElementById('signup-birthday').value;
  const genderEl = document.querySelector('input[name="signup-gender"]:checked');
  const gender = genderEl ? genderEl.value : '';

  if (!username) return showError('signup-error', 'Username is required.');
  if (username.length < 3) return showError('signup-error', '⚠️ Username must be at least 3 characters.');
  if (username.replace(/[^a-zA-Z]/g, '').length > 15) return showError('signup-error', '⚠️ Username must not exceed 15 letters.');
  if ((username.match(/[0-9]/g) || []).length < 1) return showError('signup-error', '⚠️ Username must contain at least 1 number.');
  if ((username.match(/[0-9]/g) || []).length > 2) return showError('signup-error', '⚠️ Username must not exceed 2 numbers.');
  if (!email) return showError('signup-error', 'Email is required.');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showError('signup-error', 'Please enter a valid email address (e.g. juan0606@gmail.com).');
  const localPart = email.split('@')[0];
  const lettersOnly = localPart.replace(/[^a-zA-Z]/g, '');
  const numbersOnly = localPart.replace(/[^0-9]/g, '');
  if (lettersOnly.length > 25) return showError('signup-error', '⚠️ Email username must not exceed 25 letters.');

  if (!ageVal) return showError('signup-error', 'Age is required.');
  const age = parseInt(ageVal);
  if (isNaN(age) || age < 18 || age > 60) return showError('signup-error', '⚠️ Age must be between 18 and 60.');
  if (age < 18) return showError('signup-error', '⚠️ You must be 18 or older to register.');
  if (!birthday) return showError('signup-error', 'Please enter your birthday.');
  const bdYear = parseInt(birthday.split('-')[0]);
  const today = new Date();
  const calculatedAge = today.getFullYear() - bdYear - (
    new Date(today.getFullYear(), parseInt(birthday.split('-')[1]) - 1, parseInt(birthday.split('-')[2])) > today ? 1 : 0
  );
  if (calculatedAge !== age) return showError('signup-error', '⚠️ Age does not match your birthday. Based on your birthday, your age should be ' + calculatedAge + '.');
  if (!gender) return showError('signup-error', 'Please select your gender.');
  if (!password) return showError('signup-error', 'Password is required.');
  const pwStrength = checkPasswordStrength(password);
  if (pwStrength.score < 4) return showError('signup-error', '⚠ ' + pwStrength.tip);
  if (!agreedTerms) return showError('signup-error', 'Please agree to the Terms & Conditions.');
  if (!agreedPrivacy) return showError('signup-error', 'Please agree to the Privacy Policy.');
  apiFetch('/api/signup', { method: 'POST', body: JSON.stringify({ username, email, password, age, birthday, gender, agreedToTerms: agreedTerms, agreedToPrivacy: agreedPrivacy }) })
    .then(data => {
      if (data.error) return showError('signup-error', data.error);
      sessionStorage.setItem('uc_token', data.token);
      localStorage.removeItem('uc_addr_' + data.username);
      currentUser = { username: data.username, role: data.role };
      sessionStorage.setItem('uc_user', JSON.stringify(currentUser));
      ['signup-username', 'signup-email', 'signup-age', 'signup-password', 'signup-birthday'].forEach(id => document.getElementById(id).value = '');
      document.getElementById('agree-terms').checked = false;
      document.getElementById('agree-privacy').checked = false;
      document.getElementById('signup-strength-bar').style.width = '0%';
      document.getElementById('signup-strength-label').innerText = '';
      document.getElementById('bday-month').value = '';
      document.getElementById('bday-day').value = '';
      document.getElementById('bday-year').value = '';
      document.getElementById('signup-birthday').value = '';
      document.querySelectorAll('.gender-option').forEach(el => el.classList.remove('selected'));
      const gc = document.querySelector('input[name="signup-gender"]:checked');
      if (gc) gc.checked = false;
      closeModal('signup-modal');
      updateAuthUI();
      showToast('Account created! Welcome, ' + data.username + '!');
    }).catch(() => showError('signup-error', 'Network error. Please try again.'));
}

function login() {
  hideError('login-error');
  const emailOrUser = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;
  if (!emailOrUser) return showError('login-error', 'Please enter your email or username.');
  if (!password) return showError('login-error', 'Please enter your password.');

  apiFetch('/api/login', { method: 'POST', body: JSON.stringify({ email: emailOrUser, password }) })
    .then(data => {
      if (data.error) return showError('login-error', data.error);
      sessionStorage.setItem('uc_token', data.token);
      currentUser = { username: data.username, role: data.role };
      sessionStorage.setItem('uc_user', JSON.stringify(currentUser));
      if (data.role === 'admin') {

        localStorage.setItem('uc_admin_token', data.token);
        localStorage.setItem('uc_admin_user', JSON.stringify({ username: data.username, role: data.role }));
        closeModal('login-modal');

        const a = document.createElement('a');
        a.href = window.location.pathname + '?admin=1';
        a.target = '_blank';
        a.rel = 'noopener';
        document.body.appendChild(a);
        a.click();
        a.remove();
        return;
      }
      updateAuthUI(); closeModal('login-modal');
      document.getElementById('login-email').value = '';
      document.getElementById('login-password').value = '';
      showToast('Welcome back, ' + data.username + '!');
    }).catch(() => showError('login-error', 'Network error. Please try again.'));
}

function selectGender(val) {
  ['male', 'female', 'other'].forEach(g => {
    const el = document.getElementById('gender-' + g);
    if (el) el.classList.toggle('selected', g === val);
  });
}

function populateBirthdaySelects() {
  const yearSel = document.getElementById('bday-year');
  const daySel = document.getElementById('bday-day');
  if (!yearSel || !daySel) return;
  const curYear = new Date().getFullYear();
  for (let y = curYear; y >= 1920; y--) {
    const o = document.createElement('option');
    o.value = y; o.text = y;
    yearSel.appendChild(o);
  }
  for (let d = 1; d <= 31; d++) {
    const o = document.createElement('option');
    o.value = String(d).padStart(2, '0'); o.text = d;
    daySel.appendChild(o);
  }
}

function updateBirthday() {
  const m = document.getElementById('bday-month').value;
  const d = document.getElementById('bday-day').value;
  const y = document.getElementById('bday-year').value;
  const hidden = document.getElementById('signup-birthday');
  if (hidden) hidden.value = (m && d && y) ? `${y}-${m}-${d}` : '';
}

function notifKey() { return 'uc_notifs_' + (currentUser?.username || 'guest'); }

function getNotifications() {
  try { return JSON.parse(localStorage.getItem(notifKey()) || '[]'); } catch (_) { return []; }
}

function saveNotifications(notifs) {
  try { localStorage.setItem(notifKey(), JSON.stringify(notifs)); } catch (_) { }
}

function addNotification(msg, type) {
  const notifs = getNotifications();
  notifs.unshift({ id: Date.now(), msg, type, read: false, time: new Date().toISOString() });
  saveNotifications(notifs.slice(0, 20));
  updateNotifBadge();
}

function updateNotifBadge() {
  const bell = document.getElementById('notif-bell');
  const badge = document.getElementById('notif-badge');
  if (!bell || !badge) return;
  if (!currentUser || currentUser.role === 'admin') { bell.style.display = 'none'; return; }
  bell.style.display = 'inline-flex';
  bell.style.alignItems = 'center';
  const unread = getNotifications().filter(n => !n.read).length;
  if (unread > 0) {
    badge.style.display = 'flex';
    badge.innerText = unread > 9 ? '9+' : unread;
  } else {
    badge.style.display = 'none';
  }
}

function openNotifications() {
  const notifs = getNotifications();
  const list = document.getElementById('notif-list');
  if (notifs.length === 0) {
    list.innerHTML = '<p style="color:#aaa;text-align:center;padding:20px 0;">No notifications yet.</p>';
  } else {
    list.innerHTML = notifs.map(n => `
      <div style="padding:14px 0;border-bottom:1px solid #f0f0f0;display:flex;gap:12px;align-items:flex-start;${n.read ? 'opacity:0.6;' : ''}">
        <span style="font-size:1.3rem;">${n.type === 'confirmed' ? '✅' : n.type === 'rejected' ? '❌' : n.type === 'shipping' ? '🚚' : n.type === 'completed' ? '📦' : n.type === 'cod' ? '🛵' : '🔔'}</span>
        <div style="flex:1;">
          <p style="margin:0 0 4px 0;font-size:0.88rem;font-weight:${n.read ? '400' : '700'};color:#111;">${n.msg}</p>
          <small style="color:#aaa;">${new Date(n.time).toLocaleDateString('en-PH', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</small>
        </div>
      </div>
    `).join('');
  }
  const all = getNotifications().map(n => ({ ...n, read: true }));
  saveNotifications(all);
  updateNotifBadge();
  openModal('notif-modal');
}

let notifPollInterval = null;
let lastKnownOrderStatuses = {};

function startNotifPolling() {
  if (notifPollInterval) clearInterval(notifPollInterval);
  if (!currentUser || currentUser.role === 'admin') return;
  apiFetch('/api/orders/my').then(orders => {
    if (!Array.isArray(orders)) return;
    orders.forEach(o => {
      lastKnownOrderStatuses[o.order_num] = { status: o.status, gcash_status: o.gcash_status };
    });
  });
  notifPollInterval = setInterval(() => {
    if (!currentUser || currentUser.role === 'admin') return;
    apiFetch('/api/orders/my').then(orders => {
      if (orders && orders.error) {

        stopNotifPolling();
        sessionStorage.removeItem('uc_token');
        sessionStorage.removeItem('uc_user');
        currentUser = null;
        cart = [];
        updateCartUI();
        updateAuthUI();
        showToast('⚠️ Session expired. Please log in again.');
        return;
      }
      if (!Array.isArray(orders)) return;
      orders.forEach(o => {
        const prev = lastKnownOrderStatuses[o.order_num] || {};
        const prevStatus = prev.status;
        const prevGcash = prev.gcash_status;

        if (o.payment_method === 'gcash' || o.payment_method === 'instapay') {
          if (prevGcash !== 'confirmed' && o.gcash_status === 'confirmed') {
            addNotification('✅ Your GCash payment for Order #' + o.order_num + ' has been confirmed! Your order is now being prepared for shipping.', 'confirmed');
            showToast('✅ GCash payment confirmed for Order #' + o.order_num + '!');
          }
          if (prevGcash !== 'rejected' && o.gcash_status === 'rejected') {
            addNotification('❌ Your GCash payment for Order #' + o.order_num + ' was rejected. Please re-submit your payment.', 'rejected');
            showToast('❌ GCash payment rejected for Order #' + o.order_num + '.');
          }
        }

        if (!prevStatus && o.payment_method === 'cod' && o.status === 'pending') {
          addNotification('📋 Order #' + o.order_num + ' placed via Cash on Delivery! Preparing your order.', 'confirmed');
        }

        if (prevStatus === 'pending' && o.status === 'out_for_delivery') {
          addNotification('🚚 Order #' + o.order_num + ' is now out for delivery! Get ready to receive your package.', 'shipping');
          showToast('🚚 Order #' + o.order_num + ' is out for delivery!');
        }

        if (prevStatus !== 'completed' && o.status === 'completed') {
          addNotification('📦 Order #' + o.order_num + ' has been delivered! Don\'t forget to rate your purchase.', 'completed');
          showToast('📦 Order #' + o.order_num + ' has been delivered!');
        }

        if (prevStatus !== 'cancelled' && o.status === 'cancelled' && o.payment_method !== 'gcash' && o.payment_method !== 'instapay') {
          addNotification('❌ Order #' + o.order_num + ' has been cancelled.', 'rejected');
          showToast('❌ Order #' + o.order_num + ' has been cancelled.');
        }

        lastKnownOrderStatuses[o.order_num] = { status: o.status, gcash_status: o.gcash_status };
      });
    });
  }, 15000);
}

function stopNotifPolling() {
  if (notifPollInterval) { clearInterval(notifPollInterval); notifPollInterval = null; }
  lastKnownOrderStatuses = {};
}

function logout() {
  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.55);z-index:99999;display:flex;align-items:center;justify-content:center;';
  overlay.innerHTML = `
    <div style="background:#fff;padding:24px 20px;max-width:320px;width:90%;text-align:center;border-radius:4px;">
      <div style="font-size:1.6rem;margin-bottom:8px;">👋</div>
      <div style="font-family:'Anton',sans-serif;font-size:1.05rem;letter-spacing:1px;margin-bottom:6px;">LOG OUT?</div>
      <p style="font-size:0.82rem;color:#666;margin:0 0 18px 0;">Are you sure you want to log out of your account?</p>
      <div style="display:flex;gap:8px;">
        <button onclick="document.body.removeChild(this.closest('div').closest('div').parentElement)" style="flex:1;padding:11px 6px;background:#f5f5f5;border:none;font-family:'Inter',sans-serif;font-weight:700;font-size:0.78rem;letter-spacing:1px;cursor:pointer;border-radius:2px;">CANCEL</button>
        <button id="confirm-logout-btn" style="flex:1;padding:11px 6px;background:#111;color:#fff;border:none;font-family:'Inter',sans-serif;font-weight:700;font-size:0.78rem;letter-spacing:1px;cursor:pointer;border-radius:2px;">YES, LOG OUT</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  const cancelBtn = overlay.querySelector('button');
  cancelBtn.onclick = () => overlay.remove();
  document.getElementById('confirm-logout-btn').onclick = () => {
    overlay.remove();
    apiFetch('/api/logout', { method: 'POST' }).catch(() => { });
    sessionStorage.removeItem('uc_token');
    sessionStorage.removeItem('uc_user');
    localStorage.removeItem('uc_cart');
    currentUser = null;
    cart = [];
    stopNotifPolling();
    updateCartUI();
    updateAuthUI();
    showToast('Logged out successfully.');
  };
}

function updateAuthUI() {
  if (currentUser) {
    document.getElementById('auth-area').style.display = 'none';
    document.getElementById('user-area').style.display = 'flex';
    document.getElementById('user-greeting').innerText = `HI, ${currentUser.username.toUpperCase()}`;
    const isAdmin = currentUser.role === 'admin';
    document.getElementById('admin-btn').style.display = isAdmin ? 'inline-block' : 'none';
    document.getElementById('my-orders-btn').style.display = isAdmin ? 'none' : 'inline-block';
    document.getElementById('my-address-btn').style.display = isAdmin ? 'none' : 'inline-block';
    updateNotifBadge();
    startNotifPolling();
    if (!isAdmin) {
      apiFetch('/api/address').then(addr => {
        if (addr && addr.fname) {
          saveAddressToStorage(addr);
        }
      }).catch(() => { });
    }
  } else {
    document.getElementById('auth-area').style.display = 'flex';
    document.getElementById('user-area').style.display = 'none';
    const bell = document.getElementById('notif-bell');
    if (bell) bell.style.display = 'none';
  }
}

function switchAdminTab(tab) {
  document.querySelectorAll('.admin-tab').forEach((t, i) => {
    t.classList.toggle('active',
      (tab === 'products' && i === 0) ||
      (tab === 'users' && i === 1) ||
      (tab === 'orders' && i === 2) ||
      (tab === 'inventory' && i === 3)
    );
  });
  document.getElementById('admin-products').style.display = tab === 'products' ? 'block' : 'none';
  document.getElementById('admin-users').style.display = tab === 'users' ? 'block' : 'none';
  document.getElementById('admin-orders').style.display = tab === 'orders' ? 'block' : 'none';
  document.getElementById('admin-inventory').style.display = tab === 'inventory' ? 'block' : 'none';
  if (tab === 'products') loadAdminProducts();
  else if (tab === 'users') loadAdminUsers();
  else if (tab === 'orders') loadAdminOrders();
  else if (tab === 'inventory') renderInventory();
}

function renderInventory() {
  const catFilter = (document.getElementById('inv-filter-cat')?.value || 'all');
  const statusFilter = (document.getElementById('inv-filter-status')?.value || 'all');
  const ALL_SIZES = ['S', 'M', 'L', 'XL', '2XL'];

  let products = [...allProducts];
  if (catFilter !== 'all') products = products.filter(p => p.category === catFilter);


  let totalIn = 0, totalLow = 0, totalOut = 0, totalValue = 0;
  allProducts.forEach(p => {
    const ss = p.size_stock || {};
    const hasStock = Object.keys(ss).length > 0;
    if (!hasStock) { totalOut++; return; }
    const total = Object.values(ss).reduce((a, b) => a + b, 0);
    if (total === 0) totalOut++;
    else if (total <= 5) totalLow++;
    else totalIn++;
    totalValue += total * p.price;
  });
  const summaryEl = document.getElementById('inv-summary');
  summaryEl.innerHTML = `
    <div style="flex:1;min-width:120px;background:#f0faf4;border:1.5px solid #b7e4c7;border-radius:6px;padding:12px 14px;text-align:center;">
      <div style="font-size:1.4rem;font-weight:800;color:#27ae60;">${totalIn}</div>
      <div style="font-size:0.7rem;font-weight:700;letter-spacing:1px;color:#27ae60;">IN STOCK</div>
    </div>
    <div style="flex:1;min-width:120px;background:#fff8f0;border:1.5px solid #f5cba7;border-radius:6px;padding:12px 14px;text-align:center;">
      <div style="font-size:1.4rem;font-weight:800;color:#e67e22;">${totalLow}</div>
      <div style="font-size:0.7rem;font-weight:700;letter-spacing:1px;color:#e67e22;">LOW STOCK</div>
    </div>
    <div style="flex:1;min-width:120px;background:#fff0f0;border:1.5px solid #f5c6c6;border-radius:6px;padding:12px 14px;text-align:center;">
      <div style="font-size:1.4rem;font-weight:800;color:#c0392b;">${totalOut}</div>
      <div style="font-size:0.7rem;font-weight:700;letter-spacing:1px;color:#c0392b;">OUT OF STOCK</div>
    </div>
    <div style="flex:1;min-width:120px;background:#f0f4ff;border:1.5px solid #b0c4de;border-radius:6px;padding:12px 14px;text-align:center;">
      <div style="font-size:1.1rem;font-weight:800;color:#2c3e50;">₱${totalValue.toLocaleString()}</div>
      <div style="font-size:0.7rem;font-weight:700;letter-spacing:1px;color:#2c3e50;">TOTAL VALUE</div>
    </div>
  `;


  if (statusFilter !== 'all') {
    products = products.filter(p => {
      const ss = p.size_stock || {};
      const total = Object.values(ss).reduce((a, b) => a + b, 0);
      const hasStock = Object.keys(ss).length > 0;
      if (statusFilter === 'out') return !hasStock || total === 0;
      if (statusFilter === 'low') return hasStock && total > 0 && total <= 5;
      if (statusFilter === 'in') return hasStock && total > 6;
      return true;
    });
  }

  const container = document.getElementById('admin-inventory-list');
  if (products.length === 0) { container.innerHTML = '<p style="color:#888;padding:20px 0;text-align:center;">No products found.</p>'; return; }

  let html = `<table style="width:100%;border-collapse:collapse;font-size:0.78rem;min-width:600px;">
    <thead>
      <tr style="background:#111;color:#fff;">
        <th style="padding:10px 12px;text-align:left;font-weight:700;letter-spacing:1px;">PRODUCT</th>
        <th style="padding:10px 8px;text-align:center;letter-spacing:1px;">S</th>
        <th style="padding:10px 8px;text-align:center;letter-spacing:1px;">M</th>
        <th style="padding:10px 8px;text-align:center;letter-spacing:1px;">L</th>
        <th style="padding:10px 8px;text-align:center;letter-spacing:1px;">XL</th>
        <th style="padding:10px 8px;text-align:center;letter-spacing:1px;">2XL</th>
        <th style="padding:10px 8px;text-align:center;letter-spacing:1px;">TOTAL</th>
        <th style="padding:10px 8px;text-align:center;letter-spacing:1px;">STATUS</th>
        <th style="padding:10px 8px;text-align:center;letter-spacing:1px;">VALUE</th>
      </tr>
    </thead><tbody>`;

  products.forEach((p, idx) => {
    const ss = p.size_stock || {};
    const hasStock = Object.keys(ss).length > 0;
    const total = Object.values(ss).reduce((a, b) => a + b, 0);
    const bg = idx % 2 === 0 ? '#fff' : '#fafafa';
    let statusBadge, statusColor;
    if (!hasStock || total === 0) { statusBadge = 'OUT OF STOCK'; statusColor = '#c0392b'; }
    else if (total <= 5) { statusBadge = 'LOW STOCK'; statusColor = '#e67e22'; }
    else { statusBadge = 'IN STOCK'; statusColor = '#27ae60'; }

    const sizeCell = s => {
      if (!hasStock) return `<td style="padding:8px;text-align:center;background:#fdecea;color:#c0392b;font-weight:700;">—</td>`;
      const qty = ss[s] != null ? ss[s] : 0;
      const cellBg = qty === 0 ? '#fdecea' : qty <= 2 ? '#fff3e0' : '#fff';
      const color = qty === 0 ? '#c0392b' : qty <= 2 ? '#e67e22' : '#111';
      return `<td style="padding:8px;text-align:center;background:${cellBg};color:${color};font-weight:700;">${qty === 0 ? '0' : qty}</td>`;
    };

    html += `<tr style="background:${bg};border-bottom:1px solid #f0f0f0;">
      <td style="padding:10px 12px;">
        <div style="display:flex;align-items:center;gap:8px;">
          <img src="${p.image}" style="width:36px;height:42px;object-fit:cover;border-radius:2px;flex-shrink:0;">
          <div>
            <div style="font-weight:700;font-size:0.78rem;">${p.name}</div>
            <div style="color:#888;font-size:0.7rem;letter-spacing:1px;">${p.category.toUpperCase()} · ₱${p.price.toLocaleString()}</div>
          </div>
        </div>
      </td>
      ${ALL_SIZES.map(s => sizeCell(s)).join('')}
      <td style="padding:8px;text-align:center;font-weight:800;">${hasStock ? total : '—'}</td>
      <td style="padding:8px;text-align:center;">
        <span style="background:${statusColor}18;color:${statusColor};font-size:0.65rem;font-weight:800;letter-spacing:1px;padding:3px 8px;border-radius:3px;white-space:nowrap;">${statusBadge}</span>
      </td>
      <td style="padding:8px;text-align:center;font-weight:700;">₱${hasStock ? (total * p.price).toLocaleString() : '0'}</td>
    </tr>`;
  });

  html += `</tbody></table>`;
  container.innerHTML = html;
}

function loadAdminProducts() {
  const list = document.getElementById('admin-product-list');
  list.innerHTML = '';
  const countEl = document.getElementById('product-count');
  if (countEl) countEl.innerText = allProducts.length;
  if (allProducts.length === 0) {
    list.innerHTML = '<p style="color:#888;padding:20px 0;">No products. Click "+ ADD PRODUCT".</p>';
    return;
  }
  allProducts.forEach(p => {
    const row = document.createElement('div');
    row.className = 'admin-row';
    const stockTxt = p.stock != null
      ? (p.stock === 0
        ? `<span style="color:#c0392b;font-weight:700;font-size:0.75rem;">OUT OF STOCK</span>`
        : `<span style="color:${p.stock <= 5 ? '#e67e22' : '#27ae60'};font-weight:700;font-size:0.75rem;">${p.stock} in stock</span>`)
      : `<span style="color:#aaa;font-size:0.75rem;">Stock not set</span>`;
    row.innerHTML = `
      <img src="${p.image}" alt="${p.name}" style="width:50px;height:60px;object-fit:cover;flex-shrink:0;">
      <div style="flex:1;min-width:0;">
        <strong style="display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${p.name}</strong>
        <small style="color:#888;">${p.category.toUpperCase()} — ₱${p.price.toLocaleString()}</small>
        <div style="margin-top:2px;">${stockTxt}</div>
      </div>
      <div style="display:flex;gap:6px;flex-shrink:0;align-items:center;">
        <button class="edit-btn" onclick="openAddProduct(${p.id})">EDIT</button>
        <button class="delete-btn trash-btn" onclick="promptDelete(${p.id},'${p.name.replace(/'/g, "\\'")}')">🗑</button>
      </div>
    `;
    list.appendChild(row);
  });
}

function loadProductsFromAPI() {

  renderProducts(allProducts);

  apiFetch('/api/products').then(data => {
    if (Array.isArray(data) && data.length > 0) {
      allProducts = data;
      renderProducts(allProducts);
    } else if (Array.isArray(data) && data.length === 0) {

      seedProductsToDB();
    }
  }).catch(() => {

    renderProducts(allProducts);
  });
}

function seedProductsToDB() {
  const toSeed = [
    { name: "Uncrowned Signature Shirt", category: "shirts", price: 1200, image: "https://image2url.com/r2/default/images/1772616627489-ca85cae5-e9e3-4104-9c86-eed7f1c1f95a.png", sizes: ['S', 'M', 'L', 'XL', '2XL'], details: ['Drop shoulder cut', 'Boxy oversized fit', 'Front and back logo print', 'Ribbed crew neckline', 'FREE Stickers in every purchase'], specs: ['100% COTTON', '260 GSM', 'FRENCH TERRY FABRIC'] },
    { name: "Premium Crewneck Shirt", category: "shirts", price: 2800, image: "https://image2url.com/r2/default/images/1772616781321-dc5096d1-b4b1-47e9-9843-07573b357930.png", sizes: ['S', 'M', 'L', 'XL', '2XL'], details: ['Relaxed crewneck silhouette', 'Chest pocket detail', 'Washed premium finish', 'Dropped shoulders', 'FREE Stickers in every purchase'], specs: ['100% COTTON', '280 GSM', 'HEAVYWEIGHT JERSEY FABRIC'] },
    { name: "U Cant See Me - Cena Tribute", category: "shirts", price: 4500, image: "https://image2url.com/r2/default/images/1772616833059-bcd3948a-7c37-4d31-97c6-3feba9ee504b.png", sizes: ['S', 'M', 'L', 'XL', '2XL'], details: ['Limited edition graphic tee', 'Full front tribute print', 'Oversized boxy fit', 'Reinforced stitching', 'FREE Stickers in every purchase'], specs: ['100% COTTON', '240 GSM', 'COMBED COTTON FABRIC'] },
    { name: "Premium Crewneck Shirt", category: "shirts", price: 1500, image: "https://image2url.com/r2/default/images/1772616910426-eff84a2f-325c-48fe-b520-2c73db79f33e.png", sizes: ['S', 'M', 'L', 'XL', '2XL'], details: ['Classic crewneck style', 'Minimalist embroidered logo', 'Regular fit construction', 'Soft brushed interior', 'FREE Stickers in every purchase'], specs: ['100% COTTON', '260 GSM', 'FLEECE FABRIC'] },
    { name: "Crewneck Shirt - White", category: "shirts", price: 3200, image: "https://image2url.com/r2/default/images/1772616926529-99357e25-a78d-4036-9c7d-004abb0914fc.png", sizes: ['S', 'M', 'L', 'XL', '2XL'], details: ['Clean all-white colorway', 'Back graphic print', 'Oversized streetwear fit', 'Double-stitched hem', 'FREE Stickers in every purchase'], specs: ['100% COTTON', '270 GSM', 'FRENCH TERRY FABRIC'] },
    { name: "Signature Denim Pants", category: "pants", price: 1500, image: "https://image2url.com/r2/default/images/1772687296130-88262a7a-5fe6-4152-9207-8d2db21469f5.png", sizes: ['S', 'M', 'L', 'XL', '2XL'], details: ['Relaxed Tapered Fit', 'Elastic Waistband with Adjustable Drawstring', 'Side Pockets and Back Pocket', 'Minimal Front Logo Print', 'Ribbed / Adjustable Ankle Cuffs', 'Custom Tailored Fit', 'FREE Stickers in every purchase'], specs: ['100% COTTON', '320 GSM', 'FRENCH TERRY FABRIC'] },
    { name: "Baggy Jeans Pants", category: "pants", price: 2500, image: "https://image2url.com/r2/default/images/1772687493366-18a16328-2aca-4f31-b434-68009c34dbda.png", sizes: ['S', 'M', 'L', 'XL', '2XL'], details: ['Relaxed Tapered Fit', 'Elastic Waistband with Adjustable Drawstring', 'Side Pockets and Back Pocket', 'Minimal Front Logo Print', 'Ribbed / Adjustable Ankle Cuffs', 'Custom Tailored Fit', 'FREE Stickers in every purchase'], specs: ['100% COTTON', '320 GSM', 'FRENCH TERRY FABRIC'] },
    { name: "Gothic Retro Spider - Baggy Jeans", category: "pants", price: 2100, image: "https://image2url.com/r2/default/images/1772687632857-3958a437-db9d-4a98-8346-7c572adc2de5.png", sizes: ['S', 'M', 'L', 'XL', '2XL'], details: ['Relaxed Tapered Fit', 'Elastic Waistband with Adjustable Drawstring', 'Side Pockets and Back Pocket', 'Minimal Front Logo Print', 'Ribbed / Adjustable Ankle Cuffs', 'Custom Tailored Fit', 'FREE Stickers in every purchase'], specs: ['100% COTTON', '320 GSM', 'FRENCH TERRY FABRIC'] },
    { name: "2125 - Divine Sweats", category: "pants", price: 1300, image: "https://image2url.com/r2/default/images/1772687674047-b56301ed-dbde-4bf3-acfc-2bc698bdfd56.png", sizes: ['S', 'M', 'L', 'XL', '2XL'], details: ['Relaxed Tapered Fit', 'Elastic Waistband with Adjustable Drawstring', 'Side Pockets and Back Pocket', 'Minimal Front Logo Print', 'Ribbed / Adjustable Ankle Cuffs', 'Custom Tailored Fit', 'FREE Stickers in every purchase'], specs: ['100% COTTON', '320 GSM', 'FRENCH TERRY FABRIC'] },
    { name: "Aonga Y2k Sweatpants", category: "pants", price: 1300, image: "https://image2url.com/r2/default/images/1772687697510-5beab4ad-3b58-4355-a2b3-26b2d3d3d383.png", sizes: ['S', 'M', 'L', 'XL', '2XL'], details: ['Drop Shoulder Fit', 'Relaxed / Boxy Silhouette', 'Full Front Zipper Closure', 'Front and Back Logo Print', 'Side Pockets', 'Ribbed Cuffs and Hem', 'Custom Fit', 'FRENCH TERRY / FLEECE FABRIC', 'FREE Stickers in every purchase'], specs: ['100% COTTON / COTTON BLEND', '380-420 GSM', 'FRENCH TERRY / FLEECE FABRIC'] },
    { name: "Vielseitige Herbst-Windbreaker Jacket", category: "jackets", price: 1500, image: "https://image2url.com/r2/default/images/1772687951776-b553f020-c392-44ed-bea1-944d2892746c.png", sizes: ['S', 'M', 'L', 'XL', '2XL'], details: ['Drop Shoulder Fit', 'Relaxed / Boxy Silhouette', 'Full Front Zipper Closure', 'Front and Back Logo Print', 'Side Pockets', 'Ribbed Cuffs and Hem', 'Custom Fit', 'FRENCH TERRY / FLEECE FABRIC', 'FREE Stickers in every purchase'], specs: ['100% COTTON / COTTON BLEND', '380-420 GSM', 'FRENCH TERRY / FLEECE FABRIC'] },
    { name: "POOPMOOM Y2k Jacket", category: "jackets", price: 1000, image: "https://image2url.com/r2/default/images/1772688023426-eb7e157e-eb84-4d55-8935-37d0190a9b7c.png", sizes: ['S', 'M', 'L', 'XL', '2XL'], details: ['Drop Shoulder Fit', 'Relaxed / Boxy Silhouette', 'Full Front Zipper Closure', 'Front and Back Logo Print', 'Side Pockets', 'Ribbed Cuffs and Hem', 'Custom Fit', 'FRENCH TERRY / FLEECE FABRIC', 'FREE Stickers in every purchase'], specs: ['100% COTTON / COTTON BLEND', '380-420 GSM', 'FRENCH TERRY / FLEECE FABRIC'] },
    { name: "Japanese Zip Up Hoodie Patagonia", category: "jackets", price: 1600, image: "https://image2url.com/r2/default/images/1772688071488-95b3b0fa-ccb6-4313-a409-bff8d0d85ea1.png", sizes: ['S', 'M', 'L', 'XL', '2XL'], details: ['Drop Shoulder Fit', 'Relaxed / Boxy Silhouette', 'Full Front Zipper Closure', 'Front and Back Logo Print', 'Side Pockets', 'Ribbed Cuffs and Hem', 'Custom Fit', 'FRENCH TERRY / FLEECE FABRIC', 'FREE Stickers in every purchase'], specs: ['100% COTTON / COTTON BLEND', '380-420 GSM', 'FRENCH TERRY / FLEECE FABRIC'] },
  ];

  const originalToken = sessionStorage.getItem('uc_token');

  fetch(API + '/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'admin', password: 'admin123' })
  }).then(r => r.json()).then(data => {
    if (!data.token) return;
    const adminToken = data.token;
    let seeded = 0;
    toSeed.forEach(p => {
      fetch(API + '/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': adminToken },
        body: JSON.stringify(p)
      }).then(r => r.json()).then(res => {
        seeded++;
        if (seeded === toSeed.length) {

          if (originalToken) sessionStorage.setItem('uc_token', originalToken);
          else sessionStorage.removeItem('uc_token');
          loadProductsFromAPI();
        }
      });
    });
  }).catch(() => { });
}

function loadAdminUsers() {
  const list = document.getElementById('admin-user-list');
  list.innerHTML = '<p style="color:#888;padding:20px 0;">Loading...</p>';
  apiFetch('/api/admin/users').then(users => {
    list.innerHTML = '';
    if (!users.length) { list.innerHTML = '<p style="color:#888;padding:20px 0;">No registered customers yet.</p>'; return; }
    users.forEach(u => {
      const row = document.createElement('div');
      row.className = 'admin-row';
      row.innerHTML = `<div style="flex:1;">
        <strong>${u.username}</strong>
        <small style="display:block;color:#888;">${u.email} · Age: ${u.age}</small>
        <small style="display:block;color:#aaa;">Joined: ${new Date(u.created_at).toLocaleDateString()}</small>
      </div>
`;
      list.appendChild(row);
    });
  }).catch(() => { list.innerHTML = '<p style="color:#c00;">Failed to load users.</p>'; });
}

function loadAdminOrders() {
  const list = document.getElementById('admin-order-list');
  const countEl = document.getElementById('order-count');
  list.innerHTML = '<p style="color:#888;padding:20px 0;">Loading orders...</p>';
  apiFetch('/api/admin/orders').then(orders => {
    console.log('ADMIN ORDERS API:', orders);
    allOrders = Array.isArray(orders) ? orders : [];
    list.innerHTML = '';
    if (countEl) countEl.innerText = orders.length;
    if (!orders.length) { list.innerHTML = '<p style="color:#888;padding:20px 0;">No orders yet.</p>'; return; }
    orders.forEach((order, idx) => {
      const statusColors = { pending: '#e67e22', out_for_delivery: '#2980b9', completed: '#27ae60', cancelled: '#c0392b', refunded: '#9b59b6' };
      const statusLabels = { pending: '⏳ Pending', out_for_delivery: '🚚 Out for Delivery', completed: '✅ Completed', cancelled: '❌ Cancelled', refunded: '💜 Refunded' };
      const color = statusColors[order.status] || '#888';
      const label = statusLabels[order.status] || order.status;
      const date = new Date(order.created_at).toLocaleString();
      const itemsSummary = order.items.map(i => `${i.name} (${i.size})`).join(', ');

      const isGCash = order.payment_method === 'gcash' || order.payment_method === 'instapay';
      const gcashPending = isGCash && order.gcash_status === 'pending_confirmation';
      const gcashConfirmed = isGCash && order.gcash_status === 'confirmed';
      const gcashRejected = isGCash && order.gcash_status === 'rejected';

      const row = document.createElement('div');
      row.className = 'admin-order-row';
      row.innerHTML = `
      <div class="order-row-top">
        <div>
          <strong class="order-num">#${order.order_num}</strong>
          <span class="order-customer">by ${order.customer}</span>
          <span class="order-date">${date}</span>
        </div>
        <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
          ${gcashPending ? `<span class="gcash-badge pending">⏳ AWAITING VERIFICATION</span>` : ''}
          ${gcashConfirmed ? `<span class="gcash-badge confirmed">💙 GCASH CONFIRMED</span>` : ''}
          ${gcashRejected ? `<span class="gcash-badge rejected">❌ PAYMENT REJECTED</span>` : ''}
          <span class="order-status-badge" style="background:${color};">${label}</span>
        </div>
      </div>
      <div class="order-row-items">${itemsSummary}</div>
      <div class="order-row-address">📍 ${order.address.street}${order.address.street2 ? ' — ' + order.address.street2 : ''}, ${order.address.city}, ${order.address.province} ${order.address.zip} · ${order.address.phone}</div>
      ${isGCash && order.gcash_ref ? `
        <div class="gcash-proof-row">
          <div class="gcash-ref-display">📋 Ref #: <strong>${order.gcash_ref}</strong></div>
          ${order.gcash_proof ? `<img src="${order.gcash_proof}" class="gcash-proof-thumb" onclick="viewGCashProof(${idx})" title="Click to enlarge">` : ''}
          ${gcashPending ? `
            <div style="display:flex;gap:8px;flex-shrink:0;">
              <button class="order-btn gcash-confirm-btn" onclick="confirmGCashPaymentAdmin(${idx})">✅ CONFIRM</button>
              <button class="order-btn gcash-reject-btn"  onclick="rejectGCashPaymentAdmin(${idx})">❌ REJECT</button>
            </div>
          ` : ''}
          ${gcashRejected ? `<span style="font-size:0.75rem;color:#c0392b;font-weight:700;">Reason: ${order.gcash_reject_reason || 'Invalid payment proof'}</span>` : ''}
        </div>
      ` : ''}
      <div class="order-row-bottom">
        <span class="order-total">Total: <strong>₱${order.total.toLocaleString()}</strong> · ${order.payment_method.toUpperCase()}</span>
        <div class="order-actions">
          ${(order.status === 'pending' && (!isGCash || gcashConfirmed)) ? `<button class="order-btn deliver" onclick="updateOrderStatus(${idx},'out_for_delivery')">🚚 Mark Out for Delivery</button>` : ''}
          ${order.status === 'out_for_delivery' ? `<button class="order-btn complete" onclick="updateOrderStatus(${idx},'completed')">✅ Mark Completed</button>` : ''}
          ${order.status === 'completed' ? `<span style="color:#27ae60;font-weight:700;font-size:0.8rem;">✅ Delivered</span>` : ''}
          ${order.status !== 'completed' && order.status !== 'cancelled' ? `<button class="order-btn cancel" onclick="updateOrderStatus(${idx},'cancelled')">Cancel</button>` : ''}
        </div>
      </div>
    `;
      list.appendChild(row);
    });
  }).catch(() => { list.innerHTML = '<p style="color:#c00;">Failed to load orders.</p>'; });
}

function updateOrderStatus(idx, newStatus) {
  const order = allOrders[idx];
  apiFetch('/api/admin/orders/' + order.order_num + '/status', { method: 'PUT', body: JSON.stringify({ status: newStatus }) })
    .then(() => {
      const labels = { out_for_delivery: 'Out for Delivery', completed: 'Completed', cancelled: 'Cancelled' };
      showToast('Order #' + order.order_num + ' → ' + (labels[newStatus] || newStatus));
      loadAdminOrders();
    }).catch(() => showToast('Failed to update order.'));
}

function confirmGCashPaymentAdmin(idx) {
  const order = allOrders[idx];
  apiFetch('/api/admin/orders/' + order.order_num + '/gcash', { method: 'PUT', body: JSON.stringify({ gcash_status: 'confirmed' }) })
    .then(() => { showToast('💙 GCash confirmed for Order #' + order.order_num); loadAdminOrders(); })
    .catch(() => showToast('Failed to confirm GCash.'));
}

let gcashRejectTargetIdx = null;

function rejectGCashPaymentAdmin(idx) {
  gcashRejectTargetIdx = idx;
  document.getElementById('gcash-reject-reason').value = '';
  document.querySelectorAll('.reject-reason-chip').forEach(c => c.classList.remove('selected'));
  openModal('gcash-reject-modal');
}

function selectRejectReason(chip, text) {
  document.querySelectorAll('.reject-reason-chip').forEach(c => c.classList.remove('selected'));
  chip.classList.add('selected');
  document.getElementById('gcash-reject-reason').value = text;
}

function confirmGCashReject() {
  const reason = document.getElementById('gcash-reject-reason').value.trim();
  if (!reason) { showToast('Please select or type a reason.'); return; }
  const order = allOrders[gcashRejectTargetIdx];
  apiFetch('/api/admin/orders/' + order.order_num + '/gcash', { method: 'PUT', body: JSON.stringify({ gcash_status: 'rejected', gcash_reject_reason: reason }) })
    .then(() => {
      closeModal('gcash-reject-modal');
      showToast('❌ GCash rejected for Order #' + order.order_num);
      loadAdminOrders();
    }).catch(() => showToast('Failed to reject GCash.'));
}

function viewGCashProof(idx) {
  const order = allOrders[idx];
  if (!order || !order.gcash_proof) return;
  const win = window.open('');
  win.document.write(`<html><body style="margin:0;background:#000;display:flex;align-items:center;justify-content:center;min-height:100vh;"><img src="${order.gcash_proof}" style="max-width:100%;max-height:100vh;object-fit:contain;"></body></html>`);
}

function promptDelete(id, name) {
  productToDelete = id;
  document.getElementById('delete-product-name').innerText = name;
  openModal('delete-modal');
}
function confirmDelete() {
  if (productToDelete === null) return;
  apiFetch('/api/products/' + productToDelete, { method: 'DELETE' })
    .then(() => {
      allProducts = allProducts.filter(p => p.id !== productToDelete);
      productToDelete = null;
      closeModal('delete-modal');
      renderProducts(allProducts);
      loadAdminProducts();
      showToast('Product deleted successfully.');
    }).catch(() => showToast('Failed to delete product.'));
}

let editingProductId = null;
function openAddProduct(id) {
  editingProductId = id || null;
  hideError('add-product-error');
  ALL_SIZES.forEach(s => { const el = document.getElementById('stock-' + s); if (el) el.value = ''; });
  if (id) {
    const p = allProducts.find(p => p.id === id);
    document.getElementById('add-product-title').innerText = 'EDIT PRODUCT';
    document.getElementById('new-product-image').value = p.image;
    document.getElementById('new-product-name').value = p.name;
    document.getElementById('new-product-category').value = p.category;
    document.getElementById('new-product-price').value = p.price;
    document.getElementById('new-product-details').value = p.details ? p.details.join('\n') : '';
    document.getElementById('new-product-specs').value = p.specs ? p.specs.join('\n') : '';
    const sizeStock = p.size_stock || {};
    ALL_SIZES.forEach(s => {
      const el = document.getElementById('stock-' + s);
      if (el) el.value = sizeStock[s] != null ? sizeStock[s] : '';
    });
    previewImage();
  } else {
    document.getElementById('add-product-title').innerText = 'ADD PRODUCT';
    document.getElementById('new-product-image').value = '';
    document.getElementById('new-product-name').value = '';
    document.getElementById('new-product-category').value = '';
    document.getElementById('new-product-price').value = '';
    document.getElementById('new-product-details').value = '';
    document.getElementById('new-product-specs').value = '';
    document.getElementById('img-preview-img').style.display = 'none';
    document.getElementById('img-placeholder').style.display = 'block';
    document.getElementById('img-placeholder').innerText = 'IMAGE PREVIEW';
  }
  openModal('add-product-modal');
}

function previewImage() {
  const url = document.getElementById('new-product-image').value.trim();
  const img = document.getElementById('img-preview-img');
  const ph = document.getElementById('img-placeholder');
  if (url) {
    img.src = url;
    img.onload = () => { img.style.display = 'block'; ph.style.display = 'none'; };
    img.onerror = () => { img.style.display = 'none'; ph.style.display = 'block'; ph.innerText = '⚠ Invalid image URL'; };
  } else {
    img.style.display = 'none'; ph.style.display = 'block'; ph.innerText = 'IMAGE PREVIEW';
  }
}

function saveProduct() {
  const image = document.getElementById('new-product-image').value.trim();
  const name = document.getElementById('new-product-name').value.trim();
  const category = document.getElementById('new-product-category').value;
  const priceVal = document.getElementById('new-product-price').value;

  const size_stock = {};
  ALL_SIZES.forEach(s => {
    const el = document.getElementById('stock-' + s);
    if (el && el.value !== '') size_stock[s] = parseInt(el.value) || 0;
  });
  const sizes = ALL_SIZES.filter(s => size_stock[s] == null || size_stock[s] > 0);

  if (!image) return showError('add-product-error', 'Please enter an image URL.');
  if (!name) return showError('add-product-error', 'Please enter a product name.');
  if (!category) return showError('add-product-error', 'Please select a category.');
  if (!priceVal || parseInt(priceVal) < 1) return showError('add-product-error', 'Please enter a valid price.');
  document.getElementById('add-product-error').style.display = 'none';

  const price = parseInt(priceVal);
  const stock = Object.values(size_stock).reduce((a, b) => a + b, 0) || null;
  const details = document.getElementById('new-product-details').value.trim().split('\n').map(s => s.trim()).filter(Boolean);
  const specs = document.getElementById('new-product-specs').value.trim().split('\n').map(s => s.trim()).filter(Boolean);
  const method = editingProductId !== null ? 'PUT' : 'POST';
  const url = editingProductId !== null ? '/api/products/' + editingProductId : '/api/products';
  apiFetch(url, { method, body: JSON.stringify({ name, category, price, image, sizes, stock, size_stock, details, specs }) })
    .then(data => {
      if (data.error) return showToast('Error: ' + data.error);
      const msg = editingProductId !== null ? '"' + name + '" updated successfully.' : '"' + name + '" added to the store!';
      closeModal('add-product-modal');
      editingProductId = null;
      apiFetch('/api/products').then(products => {
        if (Array.isArray(products) && products.length > 0) {
          allProducts = products;
          renderProducts(allProducts);
          loadAdminProducts();
        }
      });
      showToast(msg);
    }).catch(() => showToast('Failed to save product.'));
}

function getCustomerTab(order) {
  if (order.status === 'cancelled') {
    if ((order.payment_method === 'gcash' || order.payment_method === 'instapay') && order.gcash_status === 'rejected') return 'to_pay';
    return null;
  }
  if (order.status === 'pending') {
    if (order.payment_method === 'cod') return 'to_ship';
    if ((order.payment_method === 'gcash' || order.payment_method === 'instapay') && order.gcash_status === 'confirmed') return 'to_ship';
    return 'to_pay';
  }
  if (order.status === 'out_for_delivery') return 'to_receive';
  if (order.status === 'completed') return order.rated && order.rating ? null : 'to_rate';
  return null;
}

let currentMyOrdersTab = 'to_pay';
let ratingTargetOrderNum = null;
let currentRating = 0;

function openMyOrders() {
  refreshMyOrdersBadges();
  switchMyOrdersTab('to_pay');
  openModal('my-orders-modal');
}

function refreshMyOrdersBadges() {
  apiFetch('/api/orders/my').then(orders => {
    if (!Array.isArray(orders)) return;
    allOrders = orders;
    const tabs = ['to_pay', 'to_ship', 'to_receive', 'to_rate'];
    const counts = { to_pay: 0, to_ship: 0, to_receive: 0, to_rate: 0 };
    orders.forEach(o => { const tab = getCustomerTab(o); if (tab) counts[tab]++; });
    tabs.forEach(tab => {
      const el = document.getElementById('badge-' + tab);
      if (!el) return;
      el.innerText = counts[tab];
      el.classList.toggle('visible', counts[tab] > 0);
    });
  }).catch(() => { });
}

function switchMyOrdersTab(tab) {
  currentMyOrdersTab = tab;
  document.querySelectorAll('.my-orders-tab').forEach((t, i) => {
    const tabs = ['to_pay', 'to_ship', 'to_receive', 'to_rate'];
    t.classList.toggle('active', tabs[i] === tab);
  });
  renderMyOrders(tab);
}

function renderMyOrders(tab) {
  const list = document.getElementById('my-orders-list');
  list.innerHTML = '<p style="color:#888;padding:20px 0;text-align:center;">Loading...</p>';
  apiFetch('/api/orders/my').then(orders => {
    console.log('MY ORDERS API:', orders);
    if (orders && orders.error) {

      sessionStorage.removeItem('uc_token');
      sessionStorage.removeItem('uc_user');
      currentUser = null;
      cart = [];
      stopNotifPolling();
      updateCartUI();
      updateAuthUI();
      closeModal('my-orders-modal');
      showToast('⚠️ Session expired. Please log in again.');
      setTimeout(() => openModal('login-modal'), 600);
      return;
    }
    allOrders = Array.isArray(orders) ? orders : [];
    list.innerHTML = '';
    const myOrders = allOrders.filter(o => getCustomerTab(o) === tab);

    if (myOrders.length === 0) {
      const emptyIcons = { to_pay: '💳', to_ship: '📦', to_receive: '🚚', to_rate: '⭐' };
      const emptyMsgs = {
        to_pay: 'No orders waiting for payment.',
        to_ship: 'No orders being prepared.',
        to_receive: 'No orders out for delivery.',
        to_rate: 'No completed orders to rate yet.'
      };
      list.innerHTML = `
      <div class="my-order-empty">
        <div class="empty-icon">${emptyIcons[tab]}</div>
        <p>${emptyMsgs[tab]}</p>
      </div>`;
      return;
    }

    myOrders.forEach(order => {
      const statusColors = {
        pending: '#e67e22',
        out_for_delivery: '#2980b9',
        completed: '#27ae60',
        refunded: '#9b59b6',
      };
      const statusLabels = {
        pending: order.payment_method === 'cod' ? '📦 Preparing' : ((order.payment_method === 'gcash' || order.payment_method === 'instapay') ? '⚡ GCash InstaPay - Verifying Payment' : '💳 Awaiting Payment'),
        out_for_delivery: '🚚 Out for Delivery',
        completed: '✅ Delivered',
        refunded: '💜 Refunded',
      };
      const color = statusColors[order.status] || '#888';
      const label = statusLabels[order.status] || order.status;
      const date = new Date(order.created_at).toLocaleDateString('en-PH', { year: 'numeric', month: 'short', day: 'numeric' });

      const itemsHTML = order.items.map(item => `
      <div class="my-order-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="my-order-item-info">
          <strong>${item.name}</strong>
          <small>Size: ${item.size}</small>
        </div>
        <div class="my-order-item-price">₱${item.price.toLocaleString()}</div>
      </div>
    `).join('');


      let actionBtn = '';
      if (tab === 'to_pay') {
        const isGCashOrInstapay = order.payment_method === 'gcash' || order.payment_method === 'instapay';
        if (isGCashOrInstapay) {
          if (order.gcash_status === 'pending_confirmation') {
            actionBtn = `<span style="font-size:0.75rem;font-weight:700;color:#e67e22;background:#fff8f0;border:1px solid #f5cba7;padding:6px 12px;border-radius:4px;">⏳ Waiting for admin to verify your payment</span>`;
          } else if (order.gcash_status === 'confirmed') {
            actionBtn = `<span style="font-size:0.75rem;font-weight:700;color:#27ae60;background:#f0fff4;border:1px solid #a9dfbf;padding:6px 12px;border-radius:4px;">✅ Payment Confirmed</span>`;
          } else if (order.gcash_status === 'rejected') {
            actionBtn = `<div style="text-align:right;"><span style="font-size:0.75rem;font-weight:700;color:#c0392b;background:#fdecea;border:1px solid #f5c6c6;padding:6px 12px;border-radius:4px;display:inline-block;">❌ Payment Rejected</span>${order.gcash_reject_reason ? `<div style="font-size:0.72rem;color:#c0392b;margin-top:4px;">Reason: ${order.gcash_reject_reason}</div>` : ''}<div style="margin-top:8px;"><button class="my-order-action-btn primary" onclick="resubmitGCash('${order.order_num}')">🔄 RESUBMIT PAYMENT</button></div></div>`;
          } else {
            actionBtn = `<span style="font-size:0.75rem;font-weight:700;color:#e67e22;background:#fff8f0;border:1px solid #f5cba7;padding:6px 12px;border-radius:4px;">⏳ Waiting for admin approval</span>`;
          }
        } else {
          actionBtn = `<span style="font-size:0.75rem;font-weight:700;color:#888;background:#f4f4f4;border:1px solid #e0e0e0;padding:6px 12px;border-radius:4px;">📦 Preparing your order</span>`;
        }
      } else if (tab === 'to_ship') {
        actionBtn = '';
      } else if (tab === 'to_receive') {
        actionBtn = `<button class="my-order-action-btn primary" onclick="confirmReceived('${order.order_num}')">ORDER RECEIVED</button>`;
      } else if (tab === 'to_rate') {
        actionBtn = `<button class="my-order-action-btn primary" onclick="openRateModal('${order.order_num}')">RATE NOW</button>`;
      }

      const ratedHTML = order.rated
        ? `<div class="rated-stars">${'★'.repeat(order.rating)}${'☆'.repeat(5 - order.rating)}</div>${order.rating_comment ? `<div class="rated-comment">"${order.rating_comment}"</div>` : ''}`
        : '';

      const card = document.createElement('div');
      card.className = 'my-order-card';
      card.innerHTML = `
      <div class="my-order-card-top">
        <div>
          <span class="my-order-num">#${order.order_num}</span>
          <span style="color:#aaa;font-size:0.75rem;margin-left:8px;">${date}</span>
        </div>
        <span class="my-order-status" style="background:${color};color:#fff;">${label}</span>
      </div>
      <div class="my-order-items-list">${itemsHTML}</div>
      ${ratedHTML}
      <div class="my-order-footer">
        <div class="my-order-total">Total: <strong>₱${order.total.toLocaleString()}</strong></div>
        ${actionBtn}
      </div>
    `;
      list.appendChild(card);
    });
  }).catch(() => { list.innerHTML = '<p style="color:#c00;padding:20px 0;text-align:center;">Failed to load orders.</p>'; });
}

function confirmReceived(orderNum) {
  apiFetch('/api/orders/' + orderNum + '/received', { method: 'PUT' })
    .then(() => {
      showToast('Order marked as received! Please rate your purchase.');
      refreshMyOrdersBadges();
      setTimeout(() => switchMyOrdersTab('to_rate'), 800);
    }).catch(() => showToast('Failed to update order.'));
}

function openRateModal(orderNum) {
  ratingTargetOrderNum = orderNum;
  currentRating = 0;
  setRating(0);
  document.getElementById('rate-comment').value = '';
  document.getElementById('rate-order-label').innerText = 'Order #' + orderNum;
  openModal('rate-modal');
}

function setRating(rating) {
  currentRating = rating;
  const stars = document.querySelectorAll('.star');
  stars.forEach((s, i) => s.classList.toggle('active', i < rating));
  const labels = ['', 'Poor 😞', 'Fair 😐', 'Good 😊', 'Great 😄', 'Excellent! 🤩'];
  document.getElementById('rate-label-text').innerText = labels[rating] || '';
}

function submitRating() {
  if (currentRating === 0) return showToast('Please select a star rating.');
  const comment = document.getElementById('rate-comment').value.trim();
  apiFetch('/api/orders/' + ratingTargetOrderNum + '/rate', { method: 'PUT', body: JSON.stringify({ rating: currentRating, comment }) })
    .then(() => {
      closeModal('rate-modal');
      refreshMyOrdersBadges();
      switchMyOrdersTab('to_rate');
      showToast('Thank you for your rating! ' + '⭐'.repeat(Math.min(currentRating, 3)));
    }).catch(() => showToast('Failed to submit rating.'));
}

function checkPasswordStrength(pw) {
  const checks = {
    length: pw.length >= 8,
    upper: /[A-Z]/.test(pw),
    lower: /[a-z]/.test(pw),
    number: /[0-9]/.test(pw),
    special: /[^A-Za-z0-9]/.test(pw),
  };
  const score = Object.values(checks).filter(Boolean).length;
  const tips = [];
  if (!checks.length) tips.push('at least 8 characters');
  if (!checks.upper) tips.push('an uppercase letter');
  if (!checks.lower) tips.push('a lowercase letter');
  if (!checks.number) tips.push('a number');
  if (!checks.special) tips.push('a special character (!@#$...)');
  const tip = tips.length ? 'Password needs: ' + tips.join(', ') + '.' : 'Strong password!';
  return { score, tip, checks };
}

function onPasswordInput() {
  const pw = document.getElementById('signup-password').value;
  const bar = document.getElementById('signup-strength-bar');
  const lbl = document.getElementById('signup-strength-label');
  const tip = document.getElementById('pw-tip');
  if (!bar || !lbl) return;
  const { score, checks } = checkPasswordStrength(pw);
  const pct = ['0%', '20%', '40%', '60%', '80%', '100%'][score];
  const colors = ['#ccc', '#e74c3c', '#e67e22', '#f1c40f', '#2ecc71', '#27ae60'];
  const labels = ['', 'Weak', 'Fair', 'Good', 'Strong', 'Very Strong'];
  bar.style.width = pct;
  bar.style.background = colors[score];
  lbl.innerText = score > 0 ? labels[score] : '';
  lbl.style.color = colors[score];
  if (score === 5) lbl.innerText = '✓ ' + labels[score];
  if (tip) {
    const missing = [];
    if (!checks.length) missing.push('8+ characters');
    if (!checks.upper) missing.push('uppercase letter (A-Z)');
    if (!checks.lower) missing.push('lowercase letter (a-z)');
    if (!checks.number) missing.push('number (0-9)');
    if (!checks.special) missing.push('special character (!@#$...)');
    tip.innerText = pw.length > 0 && missing.length ? '⚠ Needs: ' + missing.join(', ') : '';
    tip.style.color = '#e67e22';
  }
}

function addrKey() { return 'uc_addr_' + (currentUser?.username || 'guest'); }

function saveAddressToStorage(addr) {
  try { localStorage.setItem(addrKey(), JSON.stringify(addr)); } catch (_) { }
}

function getSavedAddress() {
  try {
    const raw = localStorage.getItem(addrKey());
    return raw ? JSON.parse(raw) : null;
  } catch (_) { return null; }
}

function formatAddressSummary(a) {
  if (!a) return '';
  return `<strong>${a.fname} ${a.lname}</strong><br>${a.phone}<br>${a.street}${a.street2 ? ' — ' + a.street2 : ''}<br>${a.city}, ${a.province} ${a.zip}<br>${a.region}`;
}

function fillCheckoutForm(a) {
  if (!a) return;
  const fnameEl = document.getElementById('addr-fname'); if (fnameEl) fnameEl.value = a.fname || '';
  const lnameEl = document.getElementById('addr-lname'); if (lnameEl) lnameEl.value = a.lname || '';
  const phoneEl = document.getElementById('addr-phone'); if (phoneEl) phoneEl.value = a.phone || '';
  const streetEl = document.getElementById('addr-street'); if (streetEl) streetEl.value = a.street || '';
  const street2El = document.getElementById('addr-street2'); if (street2El) street2El.value = a.street2 || '';
  const provEl = document.getElementById('addr-province'); if (provEl) { provEl.value = a.province || ''; provEl.style.color = '#111'; }
  const zipEl = document.getElementById('addr-zip'); if (zipEl) { zipEl.value = a.zip || ''; zipEl.style.color = '#111'; }
  const regEl = document.getElementById('addr-region'); if (regEl) { regEl.value = a.region || ''; regEl.style.color = '#111'; }
  const cityEl = document.getElementById('addr-city');
  if (cityEl && a.city) {
    const opts = Array.from(cityEl.options);
    const match = opts.find(o => o.value.startsWith(a.city + '|'));
    if (match) { cityEl.value = match.value; onCityChange(cityEl, 'addr'); }
    else cityEl.value = a.city;
  }
  if (a.barangay) {
    const brgyEl = document.getElementById('addr-brgy');
    if (brgyEl) {
      const bOpts = Array.from(brgyEl.options);
      const bMatch = bOpts.find(o => o.value.startsWith(a.barangay + '|'));
      if (bMatch) brgyEl.value = bMatch.value;
    }
  }
}

function clearCheckoutForm() {
  ['addr-fname', 'addr-lname', 'addr-phone', 'addr-street', 'addr-street2', 'addr-city', 'addr-province', 'addr-zip'].forEach(id => {
    const el = document.getElementById(id); if (el) el.value = '';
  });
  const reg = document.getElementById('addr-region'); if (reg) reg.value = '';
}

function prefillSavedAddress() {
  const addr = getSavedAddress();
  const card = document.getElementById('saved-addr-card');
  const banner = document.getElementById('no-addr-banner');
  const formWrap = document.getElementById('addr-form-wrap');

  if (addr) {
    document.getElementById('saved-addr-summary').innerHTML = formatAddressSummary(addr);
    card.style.display = 'block';
    banner.style.display = 'none';
    formWrap.style.display = 'none';
    fillCheckoutForm(addr);
  } else {
    card.style.display = 'none';
    banner.style.display = 'block';
    formWrap.style.display = 'none';
    clearCheckoutForm();
  }
}

function showAddressForm(fromCard) {
  const addr = getSavedAddress();
  document.getElementById('saved-addr-card').style.display = 'none';
  document.getElementById('no-addr-banner').style.display = 'none';
  document.getElementById('addr-form-wrap').style.display = 'block';
  if (fromCard && addr) fillCheckoutForm(addr);
  const actions = document.getElementById('addr-form-actions');
  if (actions) actions.style.display = fromCard ? 'block' : 'none';
}

function cancelAddressEdit() { prefillSavedAddress(); }

const GCASH_OWNER = { name: 'Tirso Jr. Gervacio' };
let gcashProofDataUrl = null;

let gcashSavedAddress = null;

function launchGCashRedirect() {
  const subtotal = cart.reduce((s, i) => s + i.finalPrice * (i.qty || 1), 0);
  const total = subtotal + 150;
  gcashProofDataUrl = null;

  gcashSavedAddress = {
    fname: document.getElementById('addr-fname').value.trim(),
    lname: document.getElementById('addr-lname').value.trim(),
    phone: document.getElementById('addr-phone').value.trim(),
    street: document.getElementById('addr-street').value.trim(),
    street2: (document.getElementById('addr-street2')?.value || '').trim(),
    city: (document.getElementById('addr-city').value.trim().split('|')[0]),
    barangay: ((document.getElementById('addr-brgy')?.value || '').split('|')[0]),
    province: document.getElementById('addr-province').value.trim(),
    zip: document.getElementById('addr-zip').value.trim(),
    region: document.getElementById('addr-region').value,
  };

  closeModal('checkout-modal');

  const overlay = document.createElement('div');
  overlay.id = 'gcash-overlay';
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:9999;display:flex;align-items:center;justify-content:center;overflow-y:auto;padding:20px 0;';

  overlay.innerHTML = `
    <div style="background:#fff;width:360px;border-radius:16px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,0.5);">
      <div style="background:#00a3e0;padding:24px 20px 18px;text-align:center;">
        <div style="font-size:2.5rem;margin-bottom:4px;">💙</div>
        <div style="color:#fff;font-family:Anton,sans-serif;font-size:1.6rem;letter-spacing:2px;">GCash</div>
        <div style="color:rgba(255,255,255,0.85);font-size:0.78rem;margin-top:2px;">Send payment to</div>
      </div>
      <div style="padding:24px 24px 20px;">
        <div style="background:#f0f9ff;border:1px solid #bae0f7;border-radius:10px;padding:16px;margin-bottom:20px;text-align:center;">
          <div style="font-size:0.7rem;color:#888;font-weight:700;letter-spacing:1px;margin-bottom:4px;">ACCOUNT NAME</div>
          <div style="font-size:1.05rem;font-weight:900;color:#111;margin-bottom:14px;">${GCASH_OWNER.name}</div>
          <div style="font-size:0.7rem;color:#888;font-weight:700;letter-spacing:1px;margin-bottom:8px;">SCAN QR CODE — InstaPay / GCash</div>
          <img src="data:image/png;base64,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" style="width:180px;height:180px;object-fit:contain;border-radius:8px;border:1px solid #dde;" alt="InstaPay QR">
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;background:#f9f9f9;border-radius:8px;padding:12px 16px;margin-bottom:20px;">
          <span style="font-size:0.78rem;font-weight:700;color:#888;letter-spacing:1px;">AMOUNT TO PAY</span>
          <span style="font-size:1.4rem;font-weight:900;color:#111;">₱${total.toLocaleString()}</span>
        </div>
        <div style="margin-bottom:18px;">
          <div style="font-size:0.72rem;font-weight:700;letter-spacing:1px;color:#555;margin-bottom:8px;">STEP 1 — Open GCash app and send ₱${total.toLocaleString()} to the number above.</div>
          <div style="font-size:0.72rem;font-weight:700;letter-spacing:1px;color:#555;margin-bottom:8px;">STEP 2 — Take a screenshot of your payment receipt.</div>
          <div style="font-size:0.72rem;font-weight:700;letter-spacing:1px;color:#555;margin-bottom:12px;">STEP 3 — Upload your proof of payment below.</div>
          <label id="proof-upload-label" style="display:flex;align-items:center;justify-content:center;gap:10px;border:2px dashed #bae0f7;border-radius:8px;padding:16px;cursor:pointer;transition:0.2s;background:#fafeff;">
            <span style="font-size:1.4rem;">📎</span>
            <span id="proof-label-text" style="font-size:0.8rem;font-weight:700;color:#00a3e0;">UPLOAD SCREENSHOT</span>
            <input type="file" id="gcash-proof-input" accept="image/*" style="display:none;" onchange="previewGCashProof(this)">
          </label>
          <div id="gcash-proof-preview" style="display:none;margin-top:10px;text-align:center;">
            <img id="gcash-proof-img" src="" style="max-width:100%;max-height:160px;border-radius:6px;border:1px solid #ddd;">
            <div style="font-size:0.72rem;color:#27ae60;font-weight:700;margin-top:6px;">✅ Screenshot uploaded</div>
          </div>
        </div>
        <div style="margin-bottom:12px;">
          <label style="font-size:0.72rem;font-weight:700;letter-spacing:1px;color:#555;display:block;margin-bottom:6px;">REFERENCE NUMBER (from receipt)</label>
          <input id="gcash-ref-input" type="text" inputmode="numeric" placeholder="e.g. 1234567890123" maxlength="13" oninput="this.value=this.value.replace(/[^0-9]/g,'')" style="width:100%;padding:10px 14px;border:1.5px solid #ddd;font-size:0.9rem;outline:none;border-radius:6px;font-family:Inter,sans-serif;">
        </div>
        <div id="gcash-submit-error" style="display:none;color:#c0392b;font-size:0.78rem;font-weight:700;margin-bottom:10px;"></div>
        <button onclick="confirmGCashPayment()" style="width:100%;padding:14px;background:#00a3e0;color:#fff;border:none;border-radius:8px;font-size:0.95rem;font-weight:700;cursor:pointer;letter-spacing:1px;margin-bottom:10px;">
          ✓ CONFIRM ORDER & SUBMIT PAYMENT
        </button>
        <button onclick="cancelGCashPayment()" style="width:100%;padding:10px;background:transparent;color:#888;border:1px solid #ddd;border-radius:8px;font-size:0.82rem;cursor:pointer;">
          Cancel
        </button>
      </div>
    </div>`;
  document.body.appendChild(overlay);
}

function previewGCashProof(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    gcashProofDataUrl = e.target.result;
    document.getElementById('gcash-proof-img').src = gcashProofDataUrl;
    document.getElementById('gcash-proof-preview').style.display = 'block';
    document.getElementById('proof-label-text').innerText = 'CHANGE SCREENSHOT';
  };
  reader.readAsDataURL(file);
}

function resubmitGCash(orderNum) {
  gcashProofDataUrl = null;
  const subtotal = 0;
  const total = 0;
  const overlay = document.createElement('div');
  overlay.id = 'gcash-overlay';
  overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);z-index:9999;display:flex;align-items:center;justify-content:center;';
  overlay.innerHTML = `
    <div style="background:#fff;border-radius:16px;padding:28px 24px;max-width:360px;width:90%;max-height:90vh;overflow-y:auto;">
      <h3 style="font-size:1.1rem;font-weight:800;margin:0 0 6px 0;">🔄 RESUBMIT GCASH PAYMENT</h3>
      <p style="font-size:0.82rem;color:#888;margin:0 0 18px 0;">Order #${orderNum} — Upload new screenshot and reference number.</p>
      <div style="margin-bottom:14px;">
        <label style="font-size:0.78rem;font-weight:700;letter-spacing:1px;display:block;margin-bottom:6px;">UPLOAD NEW SCREENSHOT</label>
        <label id="resubmit-proof-label" style="display:block;border:2px dashed #ddd;border-radius:8px;padding:16px;text-align:center;cursor:pointer;background:#fafafa;">
          <span id="resubmit-label-text" style="color:#aaa;font-size:0.8rem;letter-spacing:1px;">TAP TO UPLOAD SCREENSHOT</span>
          <input type="file" accept="image/*" style="display:none;" onchange="handleResubmitProof(this)">
        </label>
      </div>
      <div style="margin-bottom:14px;">
        <label style="font-size:0.78rem;font-weight:700;letter-spacing:1px;display:block;margin-bottom:6px;">NEW REFERENCE NUMBER</label>
        <input id="resubmit-ref-input" type="text" inputmode="numeric" placeholder="e.g. 1234567890123" maxlength="13" oninput="this.value=this.value.replace(/[^0-9]/g,'')" style="width:100%;padding:10px 14px;border:1.5px solid #ddd;font-size:0.9rem;outline:none;border-radius:6px;box-sizing:border-box;">
      </div>
      <div id="resubmit-error" style="display:none;color:#c0392b;font-size:0.78rem;font-weight:700;margin-bottom:10px;"></div>
      <button onclick="confirmResubmitGCash('${orderNum}')" style="width:100%;padding:14px;background:#00a3e0;color:#fff;border:none;border-radius:8px;font-size:0.95rem;font-weight:700;cursor:pointer;letter-spacing:1px;margin-bottom:10px;">✓ CONFIRM & RESUBMIT</button>
      <button onclick="document.getElementById('gcash-overlay').remove();gcashProofDataUrl=null;" style="width:100%;padding:10px;background:transparent;color:#888;border:1px solid #ddd;border-radius:8px;font-size:0.82rem;cursor:pointer;">Cancel</button>
    </div>
  `;
  document.body.appendChild(overlay);
}

function handleResubmitProof(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    gcashProofDataUrl = e.target.result;
    document.getElementById('resubmit-label-text').innerText = '✅ Screenshot uploaded!';
  };
  reader.readAsDataURL(file);
}

function confirmResubmitGCash(orderNum) {
  const ref = (document.getElementById('resubmit-ref-input').value || '').trim();
  const errEl = document.getElementById('resubmit-error');
  if (!gcashProofDataUrl) { errEl.style.display = 'block'; errEl.innerText = 'Please upload your GCash screenshot.'; return; }
  if (!ref) { errEl.style.display = 'block'; errEl.innerText = 'Please enter the reference number.'; return; }
  errEl.style.display = 'none';
  apiFetch('/api/orders/' + orderNum + '/resubmit-gcash', {
    method: 'PUT',
    body: JSON.stringify({ gcash_proof: gcashProofDataUrl, gcash_ref: ref, gcash_status: 'pending_confirmation' })
  }).then(data => {
    if (data.error) { showToast('Error: ' + data.error); return; }
    document.getElementById('gcash-overlay').remove();
    gcashProofDataUrl = null;
    showToast('✅ Payment resubmitted! Waiting for admin confirmation.');
    addNotification('🔄 You resubmitted GCash payment for Order #' + orderNum + '. Waiting for admin confirmation.', 'confirmed');
    refreshMyOrdersBadges();
    switchMyOrdersTab('to_pay');
  }).catch(() => showToast('Failed to resubmit. Try again.'));
}

function confirmGCashPayment() {
  const ref = (document.getElementById('gcash-ref-input').value || '').trim();
  const errEl = document.getElementById('gcash-submit-error');
  if (!gcashProofDataUrl) {
    errEl.style.display = 'block';
    errEl.innerText = 'Please upload your GCash screenshot first.';
    return;
  }
  if (!ref) {
    errEl.style.display = 'block';
    errEl.innerText = 'Please enter the reference number from your receipt.';
    return;
  }
  errEl.style.display = 'none';
  const overlay = document.getElementById('gcash-overlay');
  if (overlay) overlay.remove();
  const proofToSend = gcashProofDataUrl;
  gcashProofDataUrl = null;
  placeOrder({
    gcashProof: proofToSend,
    gcashRef: ref,
    gcashStatus: 'pending_confirmation',
    address: gcashSavedAddress,
    shippingFee: getShippingFee()
  });

}

function cancelGCashPayment() {
  const overlay = document.getElementById('gcash-overlay');
  if (overlay) overlay.remove();
  gcashProofDataUrl = null;
  openModal('checkout-modal');
}

function openAddressBook() {
  const addr = getSavedAddress();
  const savedDiv = document.getElementById('address-book-saved');
  const emptyDiv = document.getElementById('address-book-empty');
  const formDiv = document.getElementById('address-book-form');
  if (addr) {
    document.getElementById('ab-saved-display').innerHTML = `
      <div class="ab-field"><span class="ab-label">NAME</span><span>${addr.fname} ${addr.lname}</span></div>
      <div class="ab-field"><span class="ab-label">PHONE</span><span>${addr.phone}</span></div>
      <div class="ab-field"><span class="ab-label">ADDRESS</span><span>${addr.street}${addr.street2 ? ' — ' + addr.street2 : ''}</span></div>
      <div class="ab-field"><span class="ab-label">CITY</span><span>${addr.city}, ${addr.province} ${addr.zip}</span></div>
      <div class="ab-field"><span class="ab-label">REGION</span><span>${addr.region}</span></div>
    `;
    savedDiv.style.display = 'block';
    emptyDiv.style.display = 'none';
    formDiv.style.display = 'none';
  } else {
    savedDiv.style.display = 'none';
    emptyDiv.style.display = 'block';
    formDiv.style.display = 'block';
    clearAddressBookForm();
  }
  openModal('address-book-modal');
}

function showAddressBookForm() {
  const addr = getSavedAddress();
  document.getElementById('address-book-saved').style.display = 'none';
  document.getElementById('address-book-empty').style.display = 'none';
  document.getElementById('address-book-form').style.display = 'block';
  if (addr) {
    const map = {
      'ab-fname': addr.fname, 'ab-lname': addr.lname,
      'ab-phone': addr.phone, 'ab-street': addr.street, 'ab-street2': addr.street2 || '',
      'ab-city': addr.city, 'ab-province': addr.province,
      'ab-zip': addr.zip, 'ab-region': addr.region
    };
    Object.entries(map).forEach(([id, val]) => {
      const el = document.getElementById(id); if (el && val) el.value = val;
    });
  }
}

function clearAddressBookForm() {
  ['ab-fname', 'ab-lname', 'ab-phone', 'ab-street', 'ab-street2', 'ab-city', 'ab-province', 'ab-zip'].forEach(id => {
    const el = document.getElementById(id); if (el) el.value = '';
  });
  const r = document.getElementById('ab-region'); if (r) r.value = '';
}

function cancelAddressBookForm() {
  openAddressBook();
}

function saveAddressBook() {
  const fname = document.getElementById('ab-fname').value.trim();
  const lname = document.getElementById('ab-lname').value.trim();
  const phone = document.getElementById('ab-phone').value.trim();
  const street = document.getElementById('ab-street').value.trim();
  const street2 = (document.getElementById('ab-street2')?.value || '').trim();
  const city = (document.getElementById('ab-city').value.trim().split('|')[0]);
  const province = document.getElementById('ab-province').value.trim();
  const zip = document.getElementById('ab-zip').value.trim();
  const region = document.getElementById('ab-region').value;
  if (!fname || !lname) return showToast('Please enter your full name.');
  if (!phone || phone.length !== 11) return showToast('Please enter a valid 11-digit phone number.');
  if (!phone.startsWith('09')) return showToast('⚠️ Phone number must start with 09.');
  if (!street) return showToast('Please enter your street address.');
  if (!/[a-zA-Z]/.test(street)) return showToast('Street address must include a street name (e.g. 123 Rizal St.).');
  if ((street.match(/[0-9]/g) || []).length < 1 || (street.match(/[0-9]/g) || []).length > 3) return showToast('⚠️ Street address must contain 1 to 3 numbers (e.g. 123 Rizal St.).');
  if (!city || !province || !zip || !region) return showToast('Please fill in all address fields.');
  saveAddressToStorage({ fname, lname, phone, street, street2, city, province, zip, region });
  showToast('✅ Address saved!');
  openAddressBook();
}

let apOrders = [], apProducts = [], apCustomers = [], apCharts = {}, apEditId = null;

function apInit() {
  document.getElementById('admin-fullpage').style.display = 'block';
  document.body.style.overflow = 'hidden';
  document.title = 'UNCROWNED — Admin Panel';
  document.getElementById('ap-date').innerText = new Date().toLocaleDateString('en-PH', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
  document.getElementById('ap-admin-name').innerText = (currentUser?.username || 'ADMIN').toUpperCase();
  apLoadAll();
}

async function apLoadAll() {
  try {
    const [orders, products, users] = await Promise.all([
      apiFetch('/api/admin/orders'),
      apiFetch('/api/products'),
      apiFetch('/api/admin/users')
    ]);
    apOrders = Array.isArray(orders) ? orders : [];
    apProducts = Array.isArray(products) ? products : [];
    apCustomers = Array.isArray(users) ? users.filter(u => u.role !== 'admin') : [];
    apTab('dashboard');
  } catch (e) { showToast('Failed to load admin data.'); }
}

function apLogout() {
  if (!confirm('Log out?')) return;
  sessionStorage.removeItem('uc_token');
  sessionStorage.removeItem('uc_user');
  currentUser = null;
  window.close();
}

function apTab(name) {
  ['dashboard', 'orders', 'products', 'customers', 'inventory'].forEach(tab => {
    const el = document.getElementById('apnav-' + tab);
    if (!el) return;
    if (tab === name) {
      el.classList.add('apnav-active');
    } else {
      el.classList.remove('apnav-active');
    }
  });
  const titles = { dashboard: 'DASHBOARD', orders: 'ORDERS', products: 'PRODUCTS', customers: 'CUSTOMERS', inventory: 'INVENTORY' };
  document.getElementById('ap-topbar-title').innerText = titles[name] || name;
  ({ dashboard: apDashboard, orders: apRenderOrders, products: apRenderProducts, customers: apRenderCustomers, inventory: apRenderInventory })[name]?.();
}

function apDashboard() {
  const completed = apOrders.filter(o => o.status === 'completed');
  const revenue = completed.reduce((s, o) => s + (Number(o.total) || 0), 0);
  const pending = apOrders.filter(o => o.status === 'pending').length;
  const outOfStock = apProducts.filter(p => { const ss = p.size_stock || {}; return Object.keys(ss).length > 0 && Object.values(ss).reduce((a, b) => a + b, 0) === 0; }).length;
  document.getElementById('ap-content').innerHTML = `
    <div style="font-family:'Anton',sans-serif;font-size:1.8rem;letter-spacing:2px;margin-bottom:4px;">DASHBOARD</div>
    <div style="font-size:0.7rem;color:#888;margin-bottom:24px;">Last updated: ${new Date().toLocaleTimeString()}</div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:24px;">
      ${apStat('TOTAL REVENUE', '₱' + revenue.toLocaleString(), 'from completed orders', '#00c48c', '💰')}
      ${apStat('TOTAL ORDERS', apOrders.length, pending + ' pending', '#1e90ff', '🛒')}
      ${apStat('CUSTOMERS', apCustomers.length, 'registered accounts', '#ffa502', '👥')}
      ${apStat('PRODUCTS', apProducts.length, outOfStock + ' out of stock', '#ff4757', '👕')}
    </div>
    <div style="display:grid;grid-template-columns:2fr 1fr;gap:14px;margin-bottom:16px;">
      <div style="background:#fff;border:1px solid #e8e8e8;padding:20px;">
        <div style="font-size:0.68rem;font-weight:700;letter-spacing:2px;margin-bottom:4px;">REVENUE BY CATEGORY</div>
        <div style="font-size:0.62rem;color:#888;margin-bottom:14px;">Total sales per category</div>
        <div style="height:200px;"><canvas id="apc-revenue"></canvas></div>
      </div>
      <div style="background:#fff;border:1px solid #e8e8e8;padding:20px;">
        <div style="font-size:0.68rem;font-weight:700;letter-spacing:2px;margin-bottom:4px;">ORDER STATUS</div>
        <div style="font-size:0.62rem;color:#888;margin-bottom:14px;">All orders distribution</div>
        <div style="height:200px;"><canvas id="apc-status"></canvas></div>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:24px;">
      <div style="background:#fff;border:1px solid #e8e8e8;padding:20px;">
        <div style="font-size:0.68rem;font-weight:700;letter-spacing:2px;margin-bottom:4px;">PAYMENT METHODS</div>
        <div style="font-size:0.62rem;color:#888;margin-bottom:14px;">GCash vs Cash on Delivery</div>
        <div style="height:180px;"><canvas id="apc-payment"></canvas></div>
      </div>
      <div style="background:#fff;border:1px solid #e8e8e8;padding:20px;">
        <div style="font-size:0.68rem;font-weight:700;letter-spacing:2px;margin-bottom:4px;">STOCK BY SIZE</div>
        <div style="font-size:0.62rem;color:#888;margin-bottom:14px;">Total units per size</div>
        <div style="height:180px;"><canvas id="apc-stock"></canvas></div>
      </div>
    </div>
    <div style="background:#fff;border:1px solid #e8e8e8;">
      <div style="padding:14px 18px;border-bottom:1px solid #e8e8e8;display:flex;justify-content:space-between;align-items:center;">
        <span style="font-size:0.7rem;font-weight:700;letter-spacing:2px;">RECENT ORDERS</span>
        <button onclick="apTab('orders')" style="padding:6px 14px;background:#fff;border:1.5px solid #111;font-size:0.65rem;font-weight:700;letter-spacing:1px;cursor:pointer;">VIEW ALL</button>
      </div>
      <div style="overflow-x:auto;">${apOrderTable(apOrders.slice(0, 8), false)}</div>
    </div>`;
  setTimeout(apBuildCharts, 100);
}

function apStat(label, value, sub, color, icon) {
  return `<div style="background:#fff;border:1px solid #e8e8e8;padding:18px 20px;position:relative;border-left:3px solid ${color};">
    <div style="font-size:0.62rem;font-weight:700;letter-spacing:2px;color:#888;margin-bottom:6px;">${label}</div>
    <div style="font-family:'Anton',sans-serif;font-size:1.8rem;letter-spacing:1px;line-height:1;">${value}</div>
    <div style="font-size:0.68rem;color:#888;margin-top:4px;">${sub}</div>
    <div style="position:absolute;right:14px;top:14px;font-size:1.4rem;opacity:0.12;">${icon}</div>
  </div>`;
}

function apBuildCharts() {
  if (typeof Chart === 'undefined') {
    const s = document.createElement('script');
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js';
    s.onload = apBuildCharts;
    document.head.appendChild(s);
    return;
  }
  const catRev = { shirts: 0, pants: 0, jackets: 0 };
  apOrders.filter(o => o.status === 'completed').forEach(o => {
    const items = Array.isArray(o.items) ? o.items : (typeof o.items === 'string' ? JSON.parse(o.items) : []);
    items.forEach(item => { const p = apProducts.find(x => x.name === item.name); if (p) catRev[p.category] = (catRev[p.category] || 0) + (item.price * (item.qty || 1)); });
  });
  apMkChart('apc-revenue', 'bar', ['Shirts', 'Pants', 'Jackets'], [catRev.shirts, catRev.pants, catRev.jackets], ['#0a0a0a', '#333', '#666']);
  const sc = {}; apOrders.forEach(o => { sc[o.status] = (sc[o.status] || 0) + 1; });
  apMkChart('apc-status', 'doughnut', Object.keys(sc).map(s => s.replace('_', ' ').toUpperCase()), Object.values(sc),
    Object.keys(sc).map(s => ({ pending: '#ffa502', out_for_delivery: '#1e90ff', completed: '#00c48c', cancelled: '#ff4757' }[s] || '#888')));
  const gcash = apOrders.filter(o => o.payment_method === 'gcash' || o.payment_method === 'instapay').length;
  const cod = apOrders.filter(o => o.payment_method === 'cod').length;
  apMkChart('apc-payment', 'pie', ['GCash InstaPay', 'COD'], [gcash, cod], ['#1e90ff', '#0a0a0a']);
  const st = { S: 0, M: 0, L: 0, XL: 0, '2XL': 0 };
  apProducts.forEach(p => { const ss = p.size_stock || {}; Object.entries(ss).forEach(([s, q]) => { if (st[s] != null) st[s] += q; }); });
  apMkChart('apc-stock', 'bar', Object.keys(st), Object.values(st), ['#0a0a0a', '#222', '#444', '#666', '#888']);
}

function apMkChart(id, type, labels, data, colors) {
  if (apCharts[id]) apCharts[id].destroy();
  const ctx = document.getElementById(id); if (!ctx) return;
  apCharts[id] = new Chart(ctx, {
    type,
    data: { labels, datasets: [{ data, backgroundColor: colors, borderColor: type === 'bar' ? colors : '#fff', borderWidth: type === 'bar' ? 0 : 2, borderRadius: type === 'bar' ? 2 : 0 }] },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: type !== 'bar', labels: { font: { family: 'Inter', size: 10 }, padding: 10 } } },
      scales: type === 'bar' ? { x: { grid: { display: false }, ticks: { font: { family: 'Inter', size: 9 } } }, y: { grid: { color: '#f0f0f0' }, ticks: { font: { family: 'Inter', size: 9 } } } } : undefined
    }
  });
}

function apTh() { return 'padding:10px 14px;text-align:left;font-size:0.6rem;font-weight:700;letter-spacing:2px;color:#888;border-bottom:1px solid #e8e8e8;background:#fafafa;'; }
function apTd() { return 'padding:10px 14px;vertical-align:middle;'; }
function apBtn(bg) { return `background:${bg};color:#fff;border:none;padding:4px 10px;font-size:0.62rem;font-weight:700;letter-spacing:1px;cursor:pointer;margin-right:4px;`; }

function apStatusBadge(o) {
  const labels = { pending: 'Pending', out_for_delivery: 'Out for Delivery', completed: 'Delivered', cancelled: 'Cancelled' };
  const colors = { pending: '#ffa502', out_for_delivery: '#1e90ff', completed: '#00c48c', cancelled: '#ff4757' };
  const c = colors[o.status] || '#888';
  let extra = '';
  if (o.payment_method === 'gcash') {
    if (o.gcash_status === 'pending_confirmation') extra += ' <span style="background:#fff8e8;color:#ffa502;padding:2px 6px;font-size:0.58rem;font-weight:800;">GCASH PENDING</span>';
    else if (o.gcash_status === 'rejected') extra += ' <span style="background:#fff0f0;color:#ff4757;padding:2px 6px;font-size:0.58rem;font-weight:800;">REJECTED</span>';
    else if (o.gcash_status === 'confirmed') extra += ' <span style="background:#e8faf5;color:#00c48c;padding:2px 6px;font-size:0.58rem;font-weight:800;">GCASH OK</span>';
  }
  return `<span style="background:${c}18;color:${c};padding:3px 8px;font-size:0.62rem;font-weight:800;">${labels[o.status] || o.status}</span>${extra}`;
}

function apOrderTable(orders, showActions) {
  if (!orders.length) return '<div style="padding:30px;text-align:center;color:#888;font-size:0.8rem;">No orders found.</div>';
  return `<table style="width:100%;border-collapse:collapse;font-size:0.78rem;">
    <thead><tr>
      <th style="${apTh()}">ORDER #</th><th style="${apTh()}">CUSTOMER</th><th style="${apTh()}">TOTAL</th>
      <th style="${apTh()}">PAYMENT</th><th style="${apTh()}">STATUS</th><th style="${apTh()}">DATE</th>
      ${showActions ? `<th style="${apTh()}">ACTION</th>` : ''}
    </tr></thead>
    <tbody>${orders.map(o => {
    const idx = apOrders.indexOf(o);
    const isGCashOrInstapay = o.payment_method === 'gcash' || o.payment_method === 'instapay';
    const gcashPending = isGCashOrInstapay && o.gcash_status === 'pending_confirmation';
    const gcashConfirmed = isGCashOrInstapay && o.gcash_status === 'confirmed';
    const payColor = isGCashOrInstapay ? '#e8f4ff' : '#f4f4f4';
    const payText = isGCashOrInstapay ? '#1e90ff' : '#888';
    const payLabel = o.payment_method === 'instapay' ? 'GCASH INSTAPAY' : (o.payment_method || '').toUpperCase();
    let actions = '';
    if (showActions) {
      if (gcashPending) { actions += `<button onclick="apApproveGCash(${idx})" style="${apBtn('#00c48c')}">✓ APPROVE</button><button onclick="apRejectGCash(${idx})" style="${apBtn('#ff4757')}">✗ REJECT</button>`; }
      if (o.status === 'pending' && (!isGCashOrInstapay || gcashConfirmed)) actions += `<button onclick="apUpdateStatus(${idx},'out_for_delivery')" style="${apBtn('#1e90ff')}">🚚 SHIP</button>`;
      if (o.status === 'out_for_delivery') actions += `<button onclick="apUpdateStatus(${idx},'completed')" style="${apBtn('#0a0a0a')}">✅ DONE</button>`;
      if (o.status !== 'completed' && o.status !== 'cancelled' && o.status !== 'refunded') actions += `<button onclick="apUpdateStatus(${idx},'cancelled')" style="${apBtn('#ff4757')}">CANCEL</button>`;
    }
    const hasProof = isGCashOrInstapay && (o.gcash_ref || o.gcash_proof);
    const rowId = `aproof-${o.order_num}`;
    return `<tr style="border-bottom:${hasProof ? 'none' : '1px solid #f5f5f5'};">
        <td style="${apTd()};font-size:0.72rem;font-weight:700;">${o.order_num}</td>
        <td style="${apTd()}">${o.username}</td>
        <td style="${apTd()};font-weight:700;">₱${Number(o.total).toLocaleString()}</td>
        <td style="${apTd()}">
          <span style="background:${payColor};color:${payText};padding:2px 8px;font-size:0.6rem;font-weight:800;">${payLabel}</span>
          ${hasProof ? `<button onclick="apToggleProof('${rowId}')" style="display:block;margin-top:4px;background:none;border:none;color:#1e90ff;font-size:0.62rem;cursor:pointer;font-weight:700;padding:0;">📎 VIEW PROOF</button>` : ''}
        </td>
        <td style="${apTd()}">${apStatusBadge(o)}</td>
        <td style="${apTd()};color:#888;font-size:0.7rem;">${o.created_at ? new Date(o.created_at).toLocaleDateString('en-PH', { month: 'short', day: 'numeric', year: 'numeric' }) : '—'}</td>
        ${showActions ? `<td style="${apTd()};white-space:nowrap;">${actions || '<span style="color:#ccc;">—</span>'}</td>` : ''}
      </tr>
      ${hasProof ? `<tr id="${rowId}" style="display:none;border-bottom:1px solid #f5f5f5;background:#fafcff;">
        <td colspan="${showActions ? 7 : 6}" style="padding:14px 18px;">
          <div style="display:flex;gap:24px;align-items:flex-start;flex-wrap:wrap;">
            <div>
              <div style="font-size:0.6rem;font-weight:700;letter-spacing:2px;color:#888;margin-bottom:6px;">REFERENCE NUMBER</div>
              <div style="font-size:1rem;font-weight:800;color:#111;">${o.gcash_ref || '—'}</div>
            </div>
            ${o.gcash_proof ? `<div>
              <div style="font-size:0.6rem;font-weight:700;letter-spacing:2px;color:#888;margin-bottom:6px;">PAYMENT SCREENSHOT</div>
              <img src="${o.gcash_proof}" onclick="window.open(this.src,'_blank')" style="max-height:200px;max-width:280px;object-fit:contain;border:1px solid #e0e0e0;cursor:zoom-in;border-radius:4px;" title="Click to enlarge">
            </div>`: '<div style="color:#aaa;font-size:0.75rem;">No screenshot uploaded.</div>'}
            ${o.gcash_reject_reason ? `<div><div style="font-size:0.6rem;font-weight:700;letter-spacing:2px;color:#ff4757;margin-bottom:6px;">REJECTION REASON</div><div style="font-size:0.8rem;color:#ff4757;">${o.gcash_reject_reason}</div></div>` : ''}
          </div>
        </td>
      </tr>`: ''}`;
  }).join('')}</tbody></table>`;
}

function apToggleProof(rowId) {
  const row = document.getElementById(rowId);
  if (!row) return;
  row.style.display = row.style.display === 'none' ? 'table-row' : 'none';
}

function apRenderOrders() {
  document.getElementById('ap-content').innerHTML = `
    <div style="font-family:'Anton',sans-serif;font-size:1.8rem;letter-spacing:2px;margin-bottom:4px;">ORDERS</div>
    <div style="font-size:0.7rem;color:#888;margin-bottom:20px;">Manage and fulfill customer orders</div>
    <div style="display:flex;gap:10px;margin-bottom:16px;flex-wrap:wrap;">
      <input id="ap-osearch" placeholder="Search order # or customer..." oninput="apFilterOrders()" style="padding:8px 12px;border:1px solid #e8e8e8;font-size:0.78rem;flex:1;min-width:180px;outline:none;">
      <select id="ap-ostatus" onchange="apFilterOrders()" style="padding:8px 12px;border:1px solid #e8e8e8;font-size:0.78rem;outline:none;">
        <option value="all">ALL STATUS</option><option value="pending">PENDING</option>
        <option value="out_for_delivery">OUT FOR DELIVERY</option><option value="completed">COMPLETED</option><option value="cancelled">CANCELLED</option>
      </select>
      <select id="ap-opay" onchange="apFilterOrders()" style="padding:8px 12px;border:1px solid #e8e8e8;font-size:0.78rem;outline:none;">
        <option value="all">ALL PAYMENTS</option><option value="instapay">GCASH INSTAPAY</option><option value="cod">COD</option>
      </select>
    </div>
    <div style="background:#fff;border:1px solid #e8e8e8;overflow-x:auto;" id="ap-otable">${apOrderTable(apOrders, true)}</div>`;
}

function apFilterOrders() {
  const s = (document.getElementById('ap-osearch')?.value || '').toLowerCase();
  const st = document.getElementById('ap-ostatus')?.value || 'all';
  const py = document.getElementById('ap-opay')?.value || 'all';
  let o = [...apOrders];
  if (s) o = o.filter(x => (x.order_num + x.username).toLowerCase().includes(s));
  if (st !== 'all') o = o.filter(x => x.status === st);
  if (py !== 'all') o = o.filter(x => x.payment_method === py);
  document.getElementById('ap-otable').innerHTML = apOrderTable(o, true);
}

async function apUpdateStatus(idx, status) {
  const o = apOrders[idx]; if (!o) return;
  await apiFetch('/api/admin/orders/' + o.order_num + '/status', { method: 'PUT', body: JSON.stringify({ status }) });
  o.status = status; apRenderOrders(); showToast('✅ Order updated.');
}

async function apApproveGCash(idx) {
  const o = apOrders[idx]; if (!o) return;
  await apiFetch('/api/admin/orders/' + o.order_num + '/gcash', { method: 'PUT', body: JSON.stringify({ gcash_status: 'confirmed' }) });
  o.gcash_status = 'confirmed'; apRenderOrders(); showToast('✅ GCash approved.');
}

function apRejectGCash(idx) {
  const reason = prompt('Rejection reason:'); if (!reason) return;
  const o = apOrders[idx];
  apiFetch('/api/admin/orders/' + o.order_num + '/gcash', { method: 'PUT', body: JSON.stringify({ gcash_status: 'rejected', gcash_reject_reason: reason }) })
    .then(() => { o.gcash_status = 'rejected'; o.gcash_reject_reason = reason; apRenderOrders(); showToast('❌ GCash rejected.'); });
}

function apRenderProducts() {
  document.getElementById('ap-content').innerHTML = `
    <div style="font-family:'Anton',sans-serif;font-size:1.8rem;letter-spacing:2px;margin-bottom:4px;">PRODUCTS</div>
    <div style="font-size:0.7rem;color:#888;margin-bottom:20px;">Add, edit, or remove products</div>
    <div style="display:flex;gap:10px;margin-bottom:16px;flex-wrap:wrap;">
      <input id="ap-psearch" placeholder="Search products..." oninput="apFilterProducts()" style="padding:8px 12px;border:1px solid #e8e8e8;font-size:0.78rem;flex:1;min-width:180px;outline:none;">
      <select id="ap-pcat" onchange="apFilterProducts()" style="padding:8px 12px;border:1px solid #e8e8e8;font-size:0.78rem;outline:none;">
        <option value="all">ALL CATEGORIES</option><option value="shirts">SHIRTS</option><option value="pants">PANTS</option><option value="jackets">JACKETS</option>
      </select>
      <button onclick="apOpenProductForm()" style="padding:8px 18px;background:#0a0a0a;color:#fff;border:none;font-size:0.72rem;font-weight:700;letter-spacing:1px;cursor:pointer;">+ ADD PRODUCT</button>
    </div>
    <div style="background:#fff;border:1px solid #e8e8e8;overflow-x:auto;" id="ap-ptable"></div>`;
  apFilterProducts();
}

function apFilterProducts() {
  const s = (document.getElementById('ap-psearch')?.value || '').toLowerCase();
  const c = document.getElementById('ap-pcat')?.value || 'all';
  let p = [...apProducts];
  if (s) p = p.filter(x => x.name.toLowerCase().includes(s));
  if (c !== 'all') p = p.filter(x => x.category === c);
  const el = document.getElementById('ap-ptable');
  if (!p.length) { el.innerHTML = '<div style="padding:30px;text-align:center;color:#888;">No products found.</div>'; return; }
  el.innerHTML = `<table style="width:100%;border-collapse:collapse;font-size:0.78rem;">
    <thead><tr><th style="${apTh()}">IMAGE</th><th style="${apTh()}">NAME</th><th style="${apTh()}">CATEGORY</th><th style="${apTh()}">PRICE</th><th style="${apTh()}">STOCK</th><th style="${apTh()}">ACTION</th></tr></thead>
    <tbody>${p.map(x => {
    const ss = x.size_stock || {}; const tot = Object.values(ss).reduce((a, b) => a + b, 0); const hasSS = Object.keys(ss).length > 0;
    const badge = !hasSS ? '<span style="background:#f4f4f4;color:#888;padding:2px 8px;font-size:0.6rem;font-weight:800;">NOT SET</span>'
      : tot === 0 ? '<span style="background:#fff0f0;color:#ff4757;padding:2px 8px;font-size:0.6rem;font-weight:800;">OUT OF STOCK</span>'
        : tot <= 5 ? `<span style="background:#fff8e8;color:#ffa502;padding:2px 8px;font-size:0.6rem;font-weight:800;">${tot} LEFT</span>`
          : `<span style="background:#e8faf5;color:#00c48c;padding:2px 8px;font-size:0.6rem;font-weight:800;">${tot} IN STOCK</span>`;
    return `<tr style="border-bottom:1px solid #f5f5f5;">
        <td style="${apTd()}"><img src="${x.image}" style="width:36px;height:44px;object-fit:cover;" onerror="this.style.display='none'"></td>
        <td style="${apTd()};font-weight:700;">${x.name}</td>
        <td style="${apTd()}"><span style="background:#f4f4f4;color:#888;padding:2px 8px;font-size:0.6rem;font-weight:800;">${x.category.toUpperCase()}</span></td>
        <td style="${apTd()};font-weight:700;">₱${Number(x.price).toLocaleString()}</td>
        <td style="${apTd()}">${badge}</td>
        <td style="${apTd()}">
          <button onclick="apOpenProductForm(${x.id})" style="padding:5px 12px;background:#fff;border:1.5px solid #111;font-size:0.65rem;font-weight:700;cursor:pointer;margin-right:4px;">EDIT</button>
          <button onclick="apDeleteProduct(${x.id},'${x.name.replace(/'/g, "\\'")}' )" style="padding:5px 12px;background:#ff4757;color:#fff;border:none;font-size:0.65rem;font-weight:700;cursor:pointer;">🗑</button>
        </td>
      </tr>`;
  }).join('')}</tbody></table>`;
}

function apOpenProductForm(id = null) {
  apEditId = id;
  const SIZES = ['S', 'M', 'L', 'XL', '2XL'];
  const p = id ? apProducts.find(x => x.id === id) : null;
  const ss = p?.size_stock || {};
  const ov = document.createElement('div');
  ov.id = 'ap-pform-overlay';
  ov.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:999999;display:flex;align-items:center;justify-content:center;';
  ov.innerHTML = `<div style="background:#fff;width:90%;max-width:520px;max-height:90vh;overflow-y:auto;">
    <div style="padding:18px 22px;border-bottom:1px solid #e8e8e8;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;background:#fff;z-index:5;">
      <span style="font-family:'Anton',sans-serif;font-size:1.1rem;letter-spacing:2px;">${id ? 'EDIT' : 'ADD'} PRODUCT</span>
      <button onclick="document.getElementById('ap-pform-overlay').remove()" style="background:none;border:none;font-size:1.5rem;cursor:pointer;color:#888;">×</button>
    </div>
    <div style="padding:22px;display:flex;flex-direction:column;gap:14px;">
      <div><label style="font-size:0.62rem;font-weight:700;letter-spacing:2px;color:#888;display:block;margin-bottom:5px;">PRODUCT NAME</label>
        <input id="apf-name" value="${p?.name || ''}" style="width:100%;padding:10px 12px;border:1.5px solid #e8e8e8;font-size:0.85rem;outline:none;box-sizing:border-box;"></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
        <div><label style="font-size:0.62rem;font-weight:700;letter-spacing:2px;color:#888;display:block;margin-bottom:5px;">CATEGORY</label>
          <select id="apf-cat" style="width:100%;padding:10px 12px;border:1.5px solid #e8e8e8;font-size:0.85rem;outline:none;">
            <option value="shirts" ${p?.category === 'shirts' ? 'selected' : ''}>Shirts</option>
            <option value="pants" ${p?.category === 'pants' ? 'selected' : ''}>Pants</option>
            <option value="jackets" ${p?.category === 'jackets' ? 'selected' : ''}>Jackets</option>
          </select></div>
        <div><label style="font-size:0.62rem;font-weight:700;letter-spacing:2px;color:#888;display:block;margin-bottom:5px;">PRICE (₱)</label>
          <input id="apf-price" type="number" value="${p?.price || ''}" style="width:100%;padding:10px 12px;border:1.5px solid #e8e8e8;font-size:0.85rem;outline:none;box-sizing:border-box;"></div>
      </div>
      <div><label style="font-size:0.62rem;font-weight:700;letter-spacing:2px;color:#888;display:block;margin-bottom:5px;">IMAGE URL</label>
        <input id="apf-image" value="${p?.image || ''}" style="width:100%;padding:10px 12px;border:1.5px solid #e8e8e8;font-size:0.85rem;outline:none;box-sizing:border-box;"></div>
      <div><label style="font-size:0.62rem;font-weight:700;letter-spacing:2px;color:#888;display:block;margin-bottom:8px;">STOCK PER SIZE</label>
        <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:8px;">
          ${SIZES.map(s => `<div style="text-align:center;"><div style="font-size:0.62rem;font-weight:700;margin-bottom:4px;">${s}</div>
            <input id="apf-${s}" type="number" min="0" value="${ss[s] != null ? ss[s] : ''}" placeholder="0" style="width:100%;padding:8px 4px;text-align:center;border:1.5px solid #e8e8e8;font-size:0.82rem;outline:none;box-sizing:border-box;"></div>`).join('')}
        </div></div>
      <div><label style="font-size:0.62rem;font-weight:700;letter-spacing:2px;color:#888;display:block;margin-bottom:5px;">DETAILS (one per line)</label>
        <textarea id="apf-details" rows="3" style="width:100%;padding:10px 12px;border:1.5px solid #e8e8e8;font-size:0.82rem;outline:none;box-sizing:border-box;resize:vertical;">${(p?.details || []).join('\n')}</textarea></div>
      <div><label style="font-size:0.62rem;font-weight:700;letter-spacing:2px;color:#888;display:block;margin-bottom:5px;">SPECS (one per line)</label>
        <textarea id="apf-specs" rows="2" style="width:100%;padding:10px 12px;border:1.5px solid #e8e8e8;font-size:0.82rem;outline:none;box-sizing:border-box;resize:vertical;">${(p?.specs || []).join('\n')}</textarea></div>
      <div id="apf-err" style="color:#ff4757;font-size:0.75rem;display:none;"></div>
    </div>
    <div style="padding:14px 22px;border-top:1px solid #e8e8e8;display:flex;gap:10px;justify-content:flex-end;">
      <button onclick="document.getElementById('ap-pform-overlay').remove()" style="padding:10px 20px;background:#fff;border:1.5px solid #e8e8e8;font-size:0.72rem;font-weight:700;cursor:pointer;">CANCEL</button>
      <button onclick="apSaveProduct()" style="padding:10px 20px;background:#0a0a0a;color:#fff;border:none;font-size:0.72rem;font-weight:700;letter-spacing:1px;cursor:pointer;">SAVE PRODUCT</button>
    </div>
  </div>`;
  document.getElementById('admin-fullpage').appendChild(ov);
}

async function apSaveProduct() {
  const SIZES = ['S', 'M', 'L', 'XL', '2XL'];
  const name = document.getElementById('apf-name').value.trim();
  const category = document.getElementById('apf-cat').value;
  const price = parseInt(document.getElementById('apf-price').value);
  const image = document.getElementById('apf-image').value.trim();
  const errEl = document.getElementById('apf-err');
  if (!name || !price || !image) { errEl.style.display = 'block'; errEl.innerText = '⚠ Fill in all required fields.'; return; }
  const size_stock = {};
  SIZES.forEach(s => { const el = document.getElementById('apf-' + s); if (el && el.value !== '') size_stock[s] = parseInt(el.value) || 0; });
  const stock = Object.values(size_stock).reduce((a, b) => a + b, 0) || null;
  const sizes = SIZES.filter(s => size_stock[s] == null || size_stock[s] > 0);
  const details = document.getElementById('apf-details').value.split('\n').map(s => s.trim()).filter(Boolean);
  const specs = document.getElementById('apf-specs').value.split('\n').map(s => s.trim()).filter(Boolean);
  const d = await apiFetch(apEditId ? `/api/products/${apEditId}` : '/api/products',
    { method: apEditId ? 'PUT' : 'POST', body: JSON.stringify({ name, category, price, image, sizes, stock, size_stock, details, specs }) });
  if (d.error) { errEl.style.display = 'block'; errEl.innerText = '⚠ ' + d.error; return; }
  const fresh = await apiFetch('/api/products');
  if (Array.isArray(fresh)) { apProducts = fresh; allProducts = fresh; }
  document.getElementById('ap-pform-overlay')?.remove();
  apRenderProducts();
  showToast(apEditId ? '✅ Product updated.' : '✅ Product added.');
}

async function apDeleteProduct(id, name) {
  if (!confirm(`Delete "${name}"?`)) return;
  await apiFetch('/api/products/' + id, { method: 'DELETE' });
  apProducts = apProducts.filter(p => p.id !== id); allProducts = allProducts.filter(p => p.id !== id);
  apRenderProducts(); showToast('🗑 Product deleted.');
}

function apRenderCustomers() {
  document.getElementById('ap-content').innerHTML = `
    <div style="font-family:'Anton',sans-serif;font-size:1.8rem;letter-spacing:2px;margin-bottom:4px;">CUSTOMERS</div>
    <div style="font-size:0.7rem;color:#888;margin-bottom:20px;">All registered customer accounts</div>
    <div style="margin-bottom:16px;">
      <input id="ap-csearch" placeholder="Search by username or email..." oninput="apFilterCustomers()" style="padding:8px 12px;border:1px solid #e8e8e8;font-size:0.78rem;width:100%;max-width:320px;outline:none;">
    </div>
    <div style="background:#fff;border:1px solid #e8e8e8;overflow-x:auto;" id="ap-ctable"></div>`;
  apFilterCustomers();
}

function apFilterCustomers() {
  const s = (document.getElementById('ap-csearch')?.value || '').toLowerCase();
  let c = [...apCustomers];
  if (s) c = c.filter(u => (u.username + u.email).toLowerCase().includes(s));
  const el = document.getElementById('ap-ctable');
  if (!c.length) { el.innerHTML = '<div style="padding:30px;text-align:center;color:#888;">No customers found.</div>'; return; }
  el.innerHTML = `<table style="width:100%;border-collapse:collapse;font-size:0.78rem;">
    <thead><tr>
      <th style="${apTh()}">#</th>
      <th style="${apTh()}">USERNAME</th>
      <th style="${apTh()}">EMAIL</th>
      <th style="${apTh()}">AGE</th>
      <th style="${apTh()}">GENDER</th>
      <th style="${apTh()}">JOINED</th>
      <th style="${apTh()}">ORDERS</th>
      <th style="${apTh()}">ACTION</th>
    </tr></thead>
    <tbody>${c.map((u, i) => {
    const userOrders = apOrders.filter(o => (o.username || o.customer) === u.username);
    return `<tr style="border-bottom:1px solid #f0f0f0;">
        <td style="${apTd()};color:#888;">${i + 1}</td>
        <td style="${apTd()};font-weight:700;">${u.username}</td>
        <td style="${apTd()};color:#888;font-size:0.75rem;">${u.email}</td>
        <td style="${apTd()}">${u.age || '—'}</td>
        <td style="${apTd()}">${u.gender || '—'}</td>
        <td style="${apTd()};color:#888;font-size:0.7rem;">${u.created_at ? new Date(u.created_at).toLocaleDateString('en-PH', { month: 'short', day: 'numeric', year: 'numeric' }) : '—'}</td>
        <td style="${apTd()}"><span style="background:${userOrders.length > 0 ? '#e8f4ff' : '#f4f4f4'};color:${userOrders.length > 0 ? '#1e90ff' : '#888'};padding:2px 8px;font-size:0.62rem;font-weight:800;">${userOrders.length} orders</span></td>
        <td style="${apTd()}">
          <button onclick="apToggleCustomerOrders('custo-${u.username}')" style="padding:5px 12px;background:#0a0a0a;color:#fff;border:none;font-size:0.65rem;font-weight:700;letter-spacing:1px;cursor:pointer;">VIEW ORDERS</button>
        </td>
      </tr>
      <tr id="custo-${u.username}" style="display:none;">
        <td colspan="8" style="padding:0;background:#fafafa;border-bottom:2px solid #e8e8e8;">
          ${apCustomerOrders(u.username)}
        </td>
      </tr>`;
  }).join('')}</tbody></table>`;
}

function apToggleCustomerOrders(id) {
  const row = document.getElementById(id);
  if (!row) return;
  row.style.display = row.style.display === 'none' ? 'table-row' : 'none';
}

function apCustomerOrders(username) {
  const orders = apOrders.filter(o => (o.username || o.customer) === username);
  if (!orders.length) return `<div style="padding:16px 24px;color:#888;font-size:0.78rem;">No orders yet.</div>`;
  const statusColors = { pending: '#ffa502', out_for_delivery: '#1e90ff', completed: '#00c48c', cancelled: '#ff4757', refunded: '#9b59b6', return_requested: '#e67e22', returned: '#7f8c8d' };
  const statusLabels = { pending: 'Pending', out_for_delivery: 'Out for Delivery', completed: 'Delivered', cancelled: 'Cancelled', refunded: 'Refunded', return_requested: 'Return Requested', returned: 'Returned' };
  return `<div style="padding:12px 24px;">
    <div style="font-size:0.65rem;font-weight:700;letter-spacing:2px;color:#888;margin-bottom:10px;">ORDER HISTORY</div>
    <table style="width:100%;border-collapse:collapse;font-size:0.75rem;">
      <thead><tr style="background:#f0f0f0;">
        <th style="padding:8px 12px;text-align:left;font-size:0.6rem;font-weight:700;letter-spacing:1px;color:#888;">ORDER #</th>
        <th style="padding:8px 12px;text-align:left;font-size:0.6rem;font-weight:700;letter-spacing:1px;color:#888;">ITEMS</th>
        <th style="padding:8px 12px;text-align:left;font-size:0.6rem;font-weight:700;letter-spacing:1px;color:#888;">TOTAL</th>
        <th style="padding:8px 12px;text-align:left;font-size:0.6rem;font-weight:700;letter-spacing:1px;color:#888;">PAYMENT</th>
        <th style="padding:8px 12px;text-align:left;font-size:0.6rem;font-weight:700;letter-spacing:1px;color:#888;">STATUS</th>
        <th style="padding:8px 12px;text-align:left;font-size:0.6rem;font-weight:700;letter-spacing:1px;color:#888;">DATE</th>
        <th style="padding:8px 12px;text-align:left;font-size:0.6rem;font-weight:700;letter-spacing:1px;color:#888;">ACTION</th>
      </tr></thead>
      <tbody>${orders.map(o => {
    const idx = apOrders.indexOf(o);
    const c = statusColors[o.status] || '#888';
    const items = Array.isArray(o.items) ? o.items : (typeof o.items === 'string' ? JSON.parse(o.items) : []);
    const payLabel = o.payment_method === 'instapay' ? 'GCASH INSTAPAY' : (o.payment_method || '').toUpperCase();
    const payBg = (o.payment_method === 'gcash' || o.payment_method === 'instapay') ? '#e8f4ff' : '#f4f4f4';
    const payCol = (o.payment_method === 'gcash' || o.payment_method === 'instapay') ? '#1e90ff' : '#888';
    const canCancel = !['completed', 'cancelled', 'refunded', 'returned'].includes(o.status);
    const canRefund = ['completed', 'out_for_delivery'].includes(o.status);
    const canReturn = o.status === 'completed';
    const canMarkReturned = o.status === 'return_requested';
    return `<tr style="border-bottom:1px solid #ebebeb;">
          <td style="padding:8px 12px;font-weight:700;font-size:0.72rem;">${o.order_num}</td>
          <td style="padding:8px 12px;color:#888;">${items.length} item(s)</td>
          <td style="padding:8px 12px;font-weight:700;">₱${Number(o.total).toLocaleString()}</td>
          <td style="padding:8px 12px;"><span style="background:${payBg};color:${payCol};padding:2px 7px;font-size:0.6rem;font-weight:800;">${payLabel}</span></td>
          <td style="padding:8px 12px;"><span style="background:${c}18;color:${c};padding:2px 8px;font-size:0.6rem;font-weight:800;">${statusLabels[o.status] || o.status}</span></td>
          <td style="padding:8px 12px;color:#888;font-size:0.7rem;">${o.created_at ? new Date(o.created_at).toLocaleDateString('en-PH', { month: 'short', day: 'numeric', year: 'numeric' }) : '—'}</td>
          <td style="padding:8px 12px;white-space:nowrap;display:flex;gap:4px;flex-wrap:wrap;">
            ${canCancel ? `<button onclick="apCancelCustomerOrder(${idx})" style="padding:4px 9px;background:#ff4757;color:#fff;border:none;font-size:0.6rem;font-weight:700;cursor:pointer;letter-spacing:0.5px;">CANCEL</button>` : ''}
            ${canRefund ? `<button onclick="apRefundCustomerOrder(${idx})" style="padding:4px 9px;background:#9b59b6;color:#fff;border:none;font-size:0.6rem;font-weight:700;cursor:pointer;letter-spacing:0.5px;">REFUND</button>` : ''}
            ${canReturn ? `<button onclick="apReturnCustomerOrder(${idx})" style="padding:4px 9px;background:#e67e22;color:#fff;border:none;font-size:0.6rem;font-weight:700;cursor:pointer;letter-spacing:0.5px;">RETURN</button>` : ''}
            ${canMarkReturned ? `<button onclick="apMarkReturned(${idx})" style="padding:4px 9px;background:#7f8c8d;color:#fff;border:none;font-size:0.6rem;font-weight:700;cursor:pointer;letter-spacing:0.5px;">MARK RETURNED</button>` : ''}
            ${!canCancel && !canRefund && !canReturn && !canMarkReturned ? `<span style="color:#ccc;font-size:0.7rem;">—</span>` : ''}
          </td>
        </tr>`;
  }).join('')}</tbody>
    </table>
  </div>`;
}

async function apCancelCustomerOrder(idx) {
  const o = apOrders[idx]; if (!o) return;
  if (!confirm(`Cancel order ${o.order_num} for ${o.username || o.customer}?`)) return;
  await apiFetch('/api/admin/orders/' + o.order_num + '/status', { method: 'PUT', body: JSON.stringify({ status: 'cancelled' }) });
  o.status = 'cancelled';
  apRenderCustomers();
  showToast('❌ Order ' + o.order_num + ' cancelled.');
}

async function apRefundCustomerOrder(idx) {
  const o = apOrders[idx]; if (!o) return;
  if (!confirm(`Refund order ${o.order_num}?\n\nTotal: ₱${Number(o.total).toLocaleString()}\nPayment: ${o.payment_method === 'instapay' ? 'GCash InstaPay' : (o.payment_method || '').toUpperCase()}`)) return;
  await apiFetch('/api/admin/orders/' + o.order_num + '/status', { method: 'PUT', body: JSON.stringify({ status: 'refunded' }) });
  o.status = 'refunded';
  apRenderCustomers();
  showToast('💜 Order ' + o.order_num + ' marked as refunded.');
}

async function apReturnCustomerOrder(idx) {
  const o = apOrders[idx]; if (!o) return;
  if (!confirm(`Mark order ${o.order_num} as Return Requested?\n\nCustomer will be notified to send item back.`)) return;
  await apiFetch('/api/admin/orders/' + o.order_num + '/status', { method: 'PUT', body: JSON.stringify({ status: 'return_requested' }) });
  o.status = 'return_requested';
  apRenderCustomers();
  showToast('🔄 Order ' + o.order_num + ' marked as Return Requested.');
}

async function apMarkReturned(idx) {
  const o = apOrders[idx]; if (!o) return;
  if (!confirm(`Confirm item returned for order ${o.order_num}?`)) return;
  await apiFetch('/api/admin/orders/' + o.order_num + '/status', { method: 'PUT', body: JSON.stringify({ status: 'returned' }) });
  o.status = 'returned';
  apRenderCustomers();
  showToast('📦 Order ' + o.order_num + ' marked as Returned.');
}

function apRenderInventory() {
  const SIZES = ['S', 'M', 'L', 'XL', '2XL'];
  let totalIn = 0, totalLow = 0, totalOut = 0, totalVal = 0;
  apProducts.forEach(p => {
    const ss = p.size_stock || {}; const tot = Object.values(ss).reduce((a, b) => a + b, 0);
    if (!Object.keys(ss).length || tot === 0) totalOut++; else if (tot <= 5) totalLow++; else totalIn++; totalVal += tot * p.price;
  });
  document.getElementById('ap-content').innerHTML = `
    <div style="font-family:'Anton',sans-serif;font-size:1.8rem;letter-spacing:2px;margin-bottom:4px;">INVENTORY</div>
    <div style="font-size:0.7rem;color:#888;margin-bottom:20px;">Stock levels per size</div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:20px;">
      <div style="background:#fff;border:1.5px solid #b7e4c7;padding:14px;text-align:center;"><div style="font-family:'Anton',sans-serif;font-size:1.6rem;color:#00c48c;">${totalIn}</div><div style="font-size:0.6rem;font-weight:700;letter-spacing:2px;color:#00c48c;">IN STOCK</div></div>
      <div style="background:#fff;border:1.5px solid #f5cba7;padding:14px;text-align:center;"><div style="font-family:'Anton',sans-serif;font-size:1.6rem;color:#ffa502;">${totalLow}</div><div style="font-size:0.6rem;font-weight:700;letter-spacing:2px;color:#ffa502;">LOW STOCK</div></div>
      <div style="background:#fff;border:1.5px solid #f5c6c6;padding:14px;text-align:center;"><div style="font-family:'Anton',sans-serif;font-size:1.6rem;color:#ff4757;">${totalOut}</div><div style="font-size:0.6rem;font-weight:700;letter-spacing:2px;color:#ff4757;">OUT OF STOCK</div></div>
      <div style="background:#fff;border:1.5px solid #b0c4de;padding:14px;text-align:center;"><div style="font-family:'Anton',sans-serif;font-size:1.1rem;color:#1e90ff;">₱${totalVal.toLocaleString()}</div><div style="font-size:0.6rem;font-weight:700;letter-spacing:2px;color:#1e90ff;">TOTAL VALUE</div></div>
    </div>
    <div style="display:flex;gap:10px;margin-bottom:14px;align-items:center;">
      <select id="ap-icat" onchange="apInvFilter()" style="padding:8px 12px;border:1px solid #e8e8e8;font-size:0.78rem;outline:none;">
        <option value="all">ALL CATEGORIES</option><option value="shirts">SHIRTS</option><option value="pants">PANTS</option><option value="jackets">JACKETS</option>
      </select>
      <select id="ap-istat" onchange="apInvFilter()" style="padding:8px 12px;border:1px solid #e8e8e8;font-size:0.78rem;outline:none;">
        <option value="all">ALL STATUS</option><option value="in">IN STOCK</option><option value="low">LOW STOCK</option><option value="out">OUT OF STOCK</option>
      </select>
      <button onclick="apExportInventory()" style="margin-left:auto;padding:8px 18px;background:#0a0a0a;color:#fff;border:none;font-size:0.72rem;font-weight:700;letter-spacing:1px;cursor:pointer;">⬇ EXPORT CSV</button>
    </div>
    <div style="background:#fff;border:1px solid #e8e8e8;overflow-x:auto;" id="ap-itable"></div>`;
  apInvFilter();
}

function apInvFilter() {
  const SIZES = ['S', 'M', 'L', 'XL', '2XL'];
  const cat = document.getElementById('ap-icat')?.value || 'all';
  const stat = document.getElementById('ap-istat')?.value || 'all';
  let p = [...apProducts];
  if (cat !== 'all') p = p.filter(x => x.category === cat);
  if (stat === 'out') p = p.filter(x => { const ss = x.size_stock || {}; return !Object.keys(ss).length || Object.values(ss).reduce((a, b) => a + b, 0) === 0; });
  else if (stat === 'low') p = p.filter(x => { const ss = x.size_stock || {}; const t = Object.values(ss).reduce((a, b) => a + b, 0); return Object.keys(ss).length && t > 0 && t <= 5; });
  else if (stat === 'in') p = p.filter(x => { const ss = x.size_stock || {}; const t = Object.values(ss).reduce((a, b) => a + b, 0); return Object.keys(ss).length && t > 5; });
  const el = document.getElementById('ap-itable');
  if (!p.length) { el.innerHTML = '<div style="padding:30px;text-align:center;color:#888;">No products found.</div>'; return; }
  el.innerHTML = `<table style="width:100%;border-collapse:collapse;font-size:0.78rem;min-width:600px;">
    <thead><tr style="background:#0a0a0a;color:#fff;">
      <th style="padding:10px 14px;text-align:left;font-size:0.6rem;letter-spacing:2px;font-weight:700;">PRODUCT</th>
      ${SIZES.map(s => `<th style="padding:10px 8px;text-align:center;font-size:0.6rem;letter-spacing:1px;font-weight:700;">${s}</th>`).join('')}
      <th style="padding:10px 8px;text-align:center;font-size:0.6rem;letter-spacing:1px;font-weight:700;">TOTAL</th>
      <th style="padding:10px 8px;text-align:center;font-size:0.6rem;letter-spacing:1px;font-weight:700;">STATUS</th>
      <th style="padding:10px 8px;text-align:center;font-size:0.6rem;letter-spacing:1px;font-weight:700;">VALUE</th>
    </tr></thead>
    <tbody>${p.map((x, i) => {
    const ss = x.size_stock || {}; const tot = Object.values(ss).reduce((a, b) => a + b, 0); const hasSS = Object.keys(ss).length > 0;
    let badge, bc;
    if (!hasSS || tot === 0) { badge = 'OUT OF STOCK'; bc = '#ff4757'; } else if (tot <= 5) { badge = 'LOW STOCK'; bc = '#ffa502'; } else { badge = 'IN STOCK'; bc = '#00c48c'; }
    const sc = s => {
      if (!hasSS) return `<td style="text-align:center;color:#ccc;padding:10px 8px;">—</td>`; const q = ss[s] != null ? ss[s] : 0;
      return `<td style="text-align:center;padding:10px 8px;background:${q === 0 ? '#fff0f0' : q <= 2 ? '#fff8e8' : ''};color:${q === 0 ? '#ff4757' : q <= 2 ? '#ffa502' : '#111'};font-weight:700;">${q}</td>`;
    };
    return `<tr style="background:${i % 2 ? '#fafafa' : '#fff'};border-bottom:1px solid #f0f0f0;">
        <td style="${apTd()}"><div style="display:flex;align-items:center;gap:8px;">
          <img src="${x.image}" style="width:32px;height:38px;object-fit:cover;" onerror="this.style.display='none'">
          <div><div style="font-weight:700;font-size:0.75rem;">${x.name}</div><div style="color:#888;font-size:0.62rem;">${x.category.toUpperCase()} · ₱${x.price.toLocaleString()}</div></div>
        </div></td>
        ${SIZES.map(s => sc(s)).join('')}
        <td style="text-align:center;padding:10px 8px;font-weight:800;">${hasSS ? tot : '—'}</td>
        <td style="text-align:center;padding:10px 8px;"><span style="background:${bc}18;color:${bc};font-size:0.58rem;font-weight:800;padding:3px 8px;">${badge}</span></td>
        <td style="text-align:center;padding:10px 8px;font-weight:700;">₱${hasSS ? (tot * x.price).toLocaleString() : '0'}</td>
      </tr>`;
  }).join('')}</tbody></table>`;
}

function apExportInventory() {
  const SIZES = ['S', 'M', 'L', 'XL', '2XL'];
  const rows = [['Product', 'Category', 'Price', 'S', 'M', 'L', 'XL', '2XL', 'Total Stock', 'Status', 'Total Value']];
  apProducts.forEach(p => {
    const ss = p.size_stock || {};
    const tot = Object.values(ss).reduce((a, b) => a + b, 0);
    const hasSS = Object.keys(ss).length > 0;
    const status = !hasSS || tot === 0 ? 'Out of Stock' : tot <= 5 ? 'Low Stock' : 'In Stock';
    rows.push([
      p.name,
      p.category,
      p.price,
      ss['S'] ?? '',
      ss['M'] ?? '',
      ss['L'] ?? '',
      ss['XL'] ?? '',
      ss['2XL'] ?? '',
      hasSS ? tot : '',
      status,
      hasSS ? tot * p.price : 0
    ]);
  });
  rows.push([]);
  rows.push(['SUMMARY', '', '', '', '', '', '', '', '', '', '']);
  const totalVal = apProducts.reduce((s, p) => { const ss = p.size_stock || {}; return s + Object.values(ss).reduce((a, b) => a + b, 0) * p.price; }, 0);
  const inStock = apProducts.filter(p => { const ss = p.size_stock || {}; const t = Object.values(ss).reduce((a, b) => a + b, 0); return Object.keys(ss).length && t > 5; }).length;
  const lowStock = apProducts.filter(p => { const ss = p.size_stock || {}; const t = Object.values(ss).reduce((a, b) => a + b, 0); return Object.keys(ss).length && t > 0 && t <= 5; }).length;
  const outStock = apProducts.filter(p => { const ss = p.size_stock || {}; return !Object.keys(ss).length || Object.values(ss).reduce((a, b) => a + b, 0) === 0; }).length;
  rows.push(['Total Products', apProducts.length]);
  rows.push(['In Stock', inStock]);
  rows.push(['Low Stock', lowStock]);
  rows.push(['Out of Stock', outStock]);
  rows.push(['Total Inventory Value', '₱' + totalVal.toLocaleString()]);
  rows.push(['Report Generated', new Date().toLocaleString('en-PH')]);

  const csv = rows.map(r => r.map(v => `"${String(v).replace(/"/g, '""')}"`).join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `UNCROWNED_Inventory_${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  showToast('✅ Inventory report downloaded.');
}