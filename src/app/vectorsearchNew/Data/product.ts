/**
 * Product Data Module
 *
 * Defines the Product interface and provides a dataset of 100 products
 * for search demonstrations. Products span multiple categories including
 * electronics, smart home devices, kitchen appliances, and fitness equipment.
 *
 * @module products
 */

/**
 * Product Interface
 *
 * Defines the structure for product objects used throughout the application.
 * All products in the database conform to this interface.
 *
 * @interface Product
 *
 * @property {string} id - Unique identifier for the product (e.g., "1", "2", "100")
 * @property {string} name - Product name (e.g., "Wireless Headphones")
 * @property {string} description - Detailed product description for search indexing
 * @property {number} price - Product price in USD (e.g., 59.99)
 * @property {Object} meta - Metadata container for additional product information
 * @property {number} meta.rating - Customer rating from 1.0 to 5.0 (e.g., 4.5)
 *
 * @example
 * const product: Product = {
 *   id: "1",
 *   name: "Wireless Headphones",
 *   description: "Premium wireless headphones with noise cancellation...",
 *   price: 59.99,
 *   meta: { rating: 4.5 }
 * };
 *
 * @see {@link products} - Complete dataset of 100 products
 */
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  meta: {
    rating: number;
  };
  [key: string]: unknown;
}

/**
 * Products Dataset
 *
 * Array of 100 product objects used for search demonstrations.
 * This dataset provides realistic test data for BM25, Vector, and Hybrid search modes.
 *
 * @constant {Product[]} products
 *
 * @description
 * Dataset characteristics:
 * - Total products: 100
 * - Categories: Audio (20%), Smart Home (20%), Computing (15%), Kitchen (15%),
 *              Home Appliances (15%), Fitness (10%), Miscellaneous (5%)
 * - Price range: $24.99 - $1,287.49
 * - Rating range: 3.7 - 4.9 stars
 *
 * Search test cases:
 * - BM25 keyword tests:
 *   - "wireless" → 9 products (exact word match)
 *   - "headphones" → 15 products (audio category)
 *   - "smart home" → 8 products (exact phrase match)
 *
 * - Vector semantic tests:
 *   - "audio quality" → Audio products (semantic similarity)
 *   - "home automation" → Smart home products (concept matching)
 *   - "fitness tracking" → Fitness products (semantic understanding)
 *
 * - Hybrid tests:
 *   - Varies by slider weight (combines keyword + semantic)
 *
 * @example
 * import { products } from './data/products';
 *
 * // Get product count
 * console.log(products.length); // 100
 *
 * // Filter by price
 * const affordable = products.filter(p => p.price < 100);
 *
 * // Search by name
 * const headphones = products.filter(p =>
 *   p.name.toLowerCase().includes('headphones')
 * );
 *
 * @example
 * // Used in search components for database initialization
 * await insertMultiple(database, products);
 *
 * @example
 * // Generate embeddings for all products
 * const productTexts = products.map(p => `${p.name} ${p.description}`);
 * const embeddings = await generateEmbeddingsBatch(productTexts);
 */
export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description:
      'Wireless headphones built for daily use with stable connection and consistent results.',
    price: 92.49,
    meta: { rating: 3.8 },
  },
  {
    id: '2',
    name: 'Smart Watch',
    description:
      'Smart watch built for daily use with easy maintenance and consistent results.',
    price: 204.99,
    meta: { rating: 3.9 },
  },
  {
    id: '3',
    name: 'Gaming Laptop',
    description:
      'Gaming laptop built for daily use with secure pairing and consistent results.',
    price: 1162.49,
    meta: { rating: 4.0 },
  },
  {
    id: '4',
    name: 'Bluetooth Speaker',
    description:
      'Bluetooth speaker built for daily use with compact design and consistent results.',
    price: 144.99,
    meta: { rating: 4.1 },
  },
  {
    id: '5',
    name: 'Noise Cancelling Earbuds',
    description:
      'Noise cancelling earbuds built for daily use with enhanced portability.',
    price: 197.49,
    meta: { rating: 4.2 },
  },
  {
    id: '6',
    name: 'Mechanical Keyboard',
    description:
      'Mechanical keyboard built for daily use with tactile precision.',
    price: 94.99,
    meta: { rating: 4.3 },
  },
  {
    id: '7',
    name: 'Wireless Mouse',
    description: 'Wireless mouse built for daily use with ergonomic comfort.',
    price: 107.49,
    meta: { rating: 4.4 },
  },
  {
    id: '8',
    name: '4K Monitor',
    description: '4K monitor built for daily use with sharp visuals.',
    price: 694.99,
    meta: { rating: 4.5 },
  },
  {
    id: '9',
    name: 'USB-C Hub',
    description:
      'USB-C hub built for daily use with multi-device connectivity.',
    price: 132.49,
    meta: { rating: 4.6 },
  },
  {
    id: '10',
    name: 'External SSD',
    description: 'External SSD built for daily use with fast data transfer.',
    price: 169.99,
    meta: { rating: 4.7 },
  },
  {
    id: '11',
    name: 'Smartphone Gimbal',
    description:
      'Smartphone gimbal built for daily use with smooth stabilization.',
    price: 129.99,
    meta: { rating: 4.8 },
  },
  {
    id: '12',
    name: 'Fitness Tracker',
    description: 'Fitness tracker built for daily use with health monitoring.',
    price: 219.99,
    meta: { rating: 4.9 },
  },
  {
    id: '13',
    name: 'Wireless Charger',
    description: 'Wireless charger built for daily use with fast charging.',
    price: 57.49,
    meta: { rating: 3.7 },
  },
  {
    id: '14',
    name: 'Action Camera',
    description: 'Action camera built for daily use with durable construction.',
    price: 69.99,
    meta: { rating: 3.8 },
  },
  {
    id: '15',
    name: 'VR Headset',
    description: 'VR headset built for daily use with immersive visuals.',
    price: 324.99,
    meta: { rating: 3.9 },
  },
  {
    id: '16',
    name: 'Smart Home Speaker',
    description: 'Smart home speaker built for daily use with voice control.',
    price: 234.99,
    meta: { rating: 4.0 },
  },
  {
    id: '17',
    name: 'Electric Toothbrush',
    description:
      'Electric toothbrush built for daily use with effective cleaning.',
    price: 107.49,
    meta: { rating: 4.1 },
  },
  {
    id: '18',
    name: 'Air Purifier',
    description: 'Air purifier built for daily use with allergen filtration.',
    price: 119.99,
    meta: { rating: 4.2 },
  },
  {
    id: '19',
    name: 'Smart Thermostat',
    description: 'Smart thermostat built for daily use with energy efficiency.',
    price: 132.49,
    meta: { rating: 4.3 },
  },
  {
    id: '20',
    name: 'Security Camera',
    description: 'Security camera built for daily use with motion detection.',
    price: 144.99,
    meta: { rating: 4.4 },
  },
  {
    id: '21',
    name: 'Dash Camera',
    description: 'Dash camera built for daily use with continuous recording.',
    price: 157.49,
    meta: { rating: 4.5 },
  },
  {
    id: '22',
    name: 'Smart Light Bulb',
    description: 'Smart light bulb built for daily use with app control.',
    price: 24.99,
    meta: { rating: 4.6 },
  },
  {
    id: '23',
    name: 'Robot Vacuum',
    description: 'Robot vacuum built for daily use with automated cleaning.',
    price: 272.49,
    meta: { rating: 4.7 },
  },
  {
    id: '24',
    name: 'Power Bank',
    description: 'Power bank built for daily use with high capacity.',
    price: 94.99,
    meta: { rating: 4.8 },
  },
  {
    id: '25',
    name: 'Smart Door Lock',
    description: 'Smart door lock built for daily use with secure access.',
    price: 207.49,
    meta: { rating: 4.9 },
  },
  {
    id: '26',
    name: 'USB Microphone',
    description: 'USB microphone built for daily use with clear audio capture.',
    price: 159.99,
    meta: { rating: 3.7 },
  },
  {
    id: '27',
    name: 'Portable Projector',
    description: 'Portable projector built for daily use with compact design.',
    price: 632.49,
    meta: { rating: 3.8 },
  },
  {
    id: '28',
    name: 'Smart Scale',
    description: 'Smart scale built for daily use with body metrics.',
    price: 119.99,
    meta: { rating: 3.9 },
  },
  {
    id: '29',
    name: 'Gaming Controller',
    description: 'Gaming controller built for daily use with responsive input.',
    price: 132.49,
    meta: { rating: 4.0 },
  },
  {
    id: '30',
    name: 'Laptop Cooling Pad',
    description:
      'Laptop cooling pad built for daily use with airflow enhancement.',
    price: 144.99,
    meta: { rating: 4.1 },
  },
  {
    id: '31',
    name: 'Smart Smoke Detector',
    description: 'Smart smoke detector built for daily use with alerts.',
    price: 57.49,
    meta: { rating: 4.2 },
  },
  {
    id: '32',
    name: 'E-Reader',
    description: 'E-reader built for daily use with eye-friendly display.',
    price: 169.99,
    meta: { rating: 4.3 },
  },
  {
    id: '33',
    name: 'Tablet Stylus',
    description: 'Tablet stylus built for daily use with pressure sensitivity.',
    price: 82.49,
    meta: { rating: 4.4 },
  },
  {
    id: '34',
    name: 'Wi-Fi Router',
    description: 'Wi-Fi router built for daily use with strong signal.',
    price: 244.99,
    meta: { rating: 4.5 },
  },
  {
    id: '35',
    name: 'Mesh Wi-Fi System',
    description: 'Mesh Wi-Fi system built for daily use with full coverage.',
    price: 1287.49,
    meta: { rating: 4.6 },
  },
  {
    id: '36',
    name: 'Smart Plug',
    description: 'Smart plug built for daily use with remote control.',
    price: 69.99,
    meta: { rating: 4.7 },
  },
  {
    id: '37',
    name: 'Electric Kettle',
    description: 'Electric kettle built for daily use with quick boiling.',
    price: 82.49,
    meta: { rating: 4.8 },
  },
  {
    id: '38',
    name: 'Induction Cooktop',
    description: 'Induction cooktop built for daily use with precise heating.',
    price: 354.99,
    meta: { rating: 4.9 },
  },
  {
    id: '39',
    name: 'Air Fryer',
    description: 'Air fryer built for daily use with oil-free cooking.',
    price: 407.49,
    meta: { rating: 3.7 },
  },
  {
    id: '40',
    name: 'Coffee Grinder',
    description: 'Coffee grinder built for daily use with consistent grinding.',
    price: 19.99,
    meta: { rating: 3.8 },
  },
  {
    id: '41',
    name: 'Smart Doorbell',
    description: 'Smart doorbell built for daily use with video alerts.',
    price: 132.49,
    meta: { rating: 3.9 },
  },
  {
    id: '42',
    name: 'Outdoor Camera',
    description: 'Outdoor camera built for daily use with weather resistance.',
    price: 144.99,
    meta: { rating: 4.0 },
  },
  {
    id: '43',
    name: 'Baby Monitor',
    description: 'Baby monitor built for daily use with live audio video.',
    price: 157.49,
    meta: { rating: 4.1 },
  },
  {
    id: '44',
    name: 'Streaming Stick',
    description: 'Streaming stick built for daily use with media apps.',
    price: 69.99,
    meta: { rating: 4.2 },
  },
  {
    id: '45',
    name: 'Soundbar',
    description: 'Soundbar built for daily use with enhanced audio output.',
    price: 532.49,
    meta: { rating: 4.3 },
  },
  {
    id: '46',
    name: 'NAS Storage',
    description: 'NAS storage built for daily use with centralized data.',
    price: 1044.99,
    meta: { rating: 4.4 },
  },
  {
    id: '47',
    name: 'Mini PC',
    description: 'Mini PC built for daily use with compact performance.',
    price: 1097.49,
    meta: { rating: 4.5 },
  },
  {
    id: '48',
    name: 'Graphics Tablet',
    description: 'Graphics tablet built for daily use with drawing precision.',
    price: 119.99,
    meta: { rating: 4.6 },
  },
  {
    id: '49',
    name: 'Photo Printer',
    description: 'Photo printer built for daily use with high color accuracy.',
    price: 632.49,
    meta: { rating: 4.7 },
  },
  {
    id: '50',
    name: 'Portable Monitor',
    description: 'Portable monitor built for daily use with mobility.',
    price: 269.99,
    meta: { rating: 4.8 },
  },
  {
    id: '51',
    name: 'Webcam',
    description: 'Webcam built for daily use with HD video.',
    price: 82.49,
    meta: { rating: 4.9 },
  },
  {
    id: '52',
    name: 'Ring Light',
    description: 'Ring light built for daily use with adjustable brightness.',
    price: 94.99,
    meta: { rating: 3.7 },
  },
  {
    id: '53',
    name: 'Tripod',
    description: 'Tripod built for daily use with stable support.',
    price: 107.49,
    meta: { rating: 3.8 },
  },
  {
    id: '54',
    name: 'Studio Headphones',
    description: 'Studio headphones built for daily use with accurate sound.',
    price: 259.99,
    meta: { rating: 3.9 },
  },
  {
    id: '55',
    name: 'DJ Mixer',
    description: 'DJ mixer built for daily use with professional controls.',
    price: 182.49,
    meta: { rating: 4.0 },
  },
  {
    id: '56',
    name: 'Bluetooth Adapter',
    description: 'Bluetooth adapter built for daily use with wireless support.',
    price: 194.99,
    meta: { rating: 4.1 },
  },
  {
    id: '57',
    name: 'Car Charger',
    description: 'Car charger built for daily use with fast charging.',
    price: 207.49,
    meta: { rating: 4.2 },
  },
  {
    id: '58',
    name: 'Solar Charger',
    description: 'Solar charger built for daily use with renewable power.',
    price: 69.99,
    meta: { rating: 4.3 },
  },
  {
    id: '59',
    name: 'Smart Alarm Clock',
    description: 'Smart alarm clock built for daily use with scheduling.',
    price: 82.49,
    meta: { rating: 4.4 },
  },
  {
    id: '60',
    name: 'Temperature Sensor',
    description: 'Temperature sensor built for daily use with accuracy.',
    price: 94.99,
    meta: { rating: 4.5 },
  },
  {
    id: '61',
    name: 'Water Leak Sensor',
    description: 'Water leak sensor built for daily use with instant alerts.',
    price: 107.49,
    meta: { rating: 4.6 },
  },
  {
    id: '62',
    name: 'Smart IR Remote',
    description: 'Smart IR remote built for daily use with device control.',
    price: 119.99,
    meta: { rating: 4.7 },
  },
  {
    id: '63',
    name: 'LED Strip Lights',
    description: 'LED strip lights built for daily use with ambient lighting.',
    price: 132.49,
    meta: { rating: 4.8 },
  },
  {
    id: '64',
    name: 'Portable Fan',
    description: 'Portable fan built for daily use with cooling airflow.',
    price: 144.99,
    meta: { rating: 4.9 },
  },
  {
    id: '65',
    name: 'Dehumidifier',
    description: 'Dehumidifier built for daily use with moisture control.',
    price: 447.49,
    meta: { rating: 3.7 },
  },
  {
    id: '66',
    name: 'Humidifier',
    description: 'Humidifier built for daily use with air comfort.',
    price: 94.99,
    meta: { rating: 3.8 },
  },
  {
    id: '67',
    name: 'Cordless Vacuum',
    description: 'Cordless vacuum built for daily use with easy handling.',
    price: 357.49,
    meta: { rating: 3.9 },
  },
  {
    id: '68',
    name: 'Handheld Steamer',
    description: 'Handheld steamer built for daily use with wrinkle removal.',
    price: 119.99,
    meta: { rating: 4.0 },
  },
  {
    id: '69',
    name: 'Electric Shaver',
    description: 'Electric shaver built for daily use with smooth shaving.',
    price: 132.49,
    meta: { rating: 4.1 },
  },
  {
    id: '70',
    name: 'Hair Dryer',
    description: 'Hair dryer built for daily use with heat control.',
    price: 144.99,
    meta: { rating: 4.2 },
  },
  {
    id: '71',
    name: 'Smart Glucometer',
    description: 'Smart glucometer built for daily use with health tracking.',
    price: 277.49,
    meta: { rating: 4.3 },
  },
  {
    id: '72',
    name: 'Blood Pressure Monitor',
    description: 'Blood pressure monitor built for daily use with accuracy.',
    price: 339.99,
    meta: { rating: 4.4 },
  },
  {
    id: '73',
    name: 'Massage Gun',
    description: 'Massage gun built for daily use with muscle relief.',
    price: 107.49,
    meta: { rating: 4.5 },
  },
  {
    id: '74',
    name: 'Heated Blanket',
    description: 'Heated blanket built for daily use with temperature control.',
    price: 119.99,
    meta: { rating: 4.6 },
  },
  {
    id: '75',
    name: 'Electric Screwdriver',
    description:
      'Electric screwdriver built for daily use with torque control.',
    price: 132.49,
    meta: { rating: 4.7 },
  },
  {
    id: '76',
    name: '3D Printer',
    description: '3D printer built for daily use with precision printing.',
    price: 1214.99,
    meta: { rating: 4.8 },
  },
  {
    id: '77',
    name: 'Filament Spool',
    description:
      'Filament spool built for daily use with material consistency.',
    price: 57.49,
    meta: { rating: 4.9 },
  },
  {
    id: '78',
    name: 'Drone',
    description: 'Drone built for daily use with stable flight.',
    price: 1327.49,
    meta: { rating: 3.7 },
  },
  {
    id: '79',
    name: 'FPV Goggles',
    description: 'FPV goggles built for daily use with immersive view.',
    price: 194.99,
    meta: { rating: 3.8 },
  },
  {
    id: '80',
    name: 'RC Car',
    description: 'RC car built for daily use with responsive control.',
    price: 19.99,
    meta: { rating: 3.9 },
  },
  {
    id: '81',
    name: 'Smart Notebook',
    description: 'Smart notebook built for daily use with digital sync.',
    price: 32.49,
    meta: { rating: 4.0 },
  },
  {
    id: '82',
    name: 'Digital Voice Recorder',
    description:
      'Digital voice recorder built for daily use with clear capture.',
    price: 44.99,
    meta: { rating: 4.1 },
  },
  {
    id: '83',
    name: 'Label Maker',
    description: 'Label maker built for daily use with quick printing.',
    price: 57.49,
    meta: { rating: 4.2 },
  },
  {
    id: '84',
    name: 'Barcode Scanner',
    description: 'Barcode scanner built for daily use with fast scanning.',
    price: 69.99,
    meta: { rating: 4.3 },
  },
  {
    id: '85',
    name: 'Thermal Printer',
    description: 'Thermal printer built for daily use with receipt printing.',
    price: 82.49,
    meta: { rating: 4.4 },
  },
  {
    id: '86',
    name: 'POS Tablet Stand',
    description: 'POS tablet stand built for daily use with stability.',
    price: 94.99,
    meta: { rating: 4.5 },
  },
  {
    id: '87',
    name: 'Conference Speakerphone',
    description:
      'Conference speakerphone built for daily use with clear calls.',
    price: 207.49,
    meta: { rating: 4.6 },
  },
  {
    id: '88',
    name: 'Ethernet Switch',
    description: 'Ethernet switch built for daily use with network expansion.',
    price: 219.99,
    meta: { rating: 4.7 },
  },
  {
    id: '89',
    name: 'HDMI Capture Card',
    description: 'HDMI capture card built for daily use with video recording.',
    price: 257.49,
    meta: { rating: 4.8 },
  },
  {
    id: '90',
    name: 'Game Streaming Microphone',
    description:
      'Game streaming microphone built for daily use with broadcast quality.',
    price: 294.99,
    meta: { rating: 4.9 },
  },
  {
    id: '91',
    name: 'Bluetooth Tracker',
    description: 'Bluetooth tracker built for daily use with item tracking.',
    price: 107.49,
    meta: { rating: 3.7 },
  },
  {
    id: '92',
    name: 'Smart Luggage Scale',
    description:
      'Smart luggage scale built for daily use with weight tracking.',
    price: 119.99,
    meta: { rating: 3.8 },
  },
  {
    id: '93',
    name: 'Portable Router',
    description:
      'Portable router built for daily use with mobile connectivity.',
    price: 199.99,
    meta: { rating: 3.9 },
  },
  {
    id: '94',
    name: 'Noise Meter',
    description: 'Noise meter built for daily use with sound measurement.',
    price: 162.49,
    meta: { rating: 4.0 },
  },
  {
    id: '95',
    name: 'USB Audio Interface',
    description: 'USB audio interface built for daily use with studio input.',
    price: 224.99,
    meta: { rating: 4.1 },
  },
  {
    id: '96',
    name: 'Smart Water Bottle',
    description:
      'Smart water bottle built for daily use with hydration tracking.',
    price: 44.99,
    meta: { rating: 4.2 },
  },
  {
    id: '97',
    name: 'Electric Lunch Box',
    description: 'Electric lunch box built for daily use with heating.',
    price: 57.49,
    meta: { rating: 4.3 },
  },
  {
    id: '98',
    name: 'Projector Screen',
    description: 'Projector screen built for daily use with clear projection.',
    price: 559.99,
    meta: { rating: 4.4 },
  },
  {
    id: '99',
    name: 'Soldering Station',
    description:
      'Soldering station built for daily use with temperature control.',
    price: 132.49,
    meta: { rating: 4.5 },
  },
  {
    id: '100',
    name: 'Smart Pet Feeder',
    description: 'Smart pet feeder built for daily use with scheduled feeding.',
    price: 19.99,
    meta: { rating: 4.6 },
  },
];
