
const WHATSAPP_NUMBER = "2348064730355";


const designs = [
  {
    id: 1,
    name: "Floral Rosette",
    category: "floral",
    price: "₦5,000",
    image: "./images/Design11.BMP",
    description: "Elegant floral embroidery with a symmetrical rosette and detailed petals."
  },
  {
    id: 2,
    name: "Geometric Wave Medallion",
    category: "heritage",
    price: "₦4,500",
    image: "./images/Design13.BMP",
    description: "Elegant geometric embroidery featuring flowing wave patterns and a detailed circular motif."
  },
  {
    id: 3,
    name: "Abstract Geometric Flow",
    category: "heritage",
    price: "₦5,000",
    image: "./images/Design27.BMP",
    description: "Bold geometric embroidery with flowing lines and angular shapes for a modern, artistic look."
  },
  {
    id: 4,
    name: "Interwoven Heritage Panel",
    category: "heritage",
    price: "₦6,000",
    image: "./images/Design62.BMP",
    description: "Intricate geometric embroidery featuring flowing interlocking lines in a traditional-inspired panel design."
  },
  {
    id: 5,
    name: "Royal Lion Emblem",
    category: "heritage",
    price: "₦7,000",
    image: "./images/Mufasa.BMP",
    description: "Bold lion-head embroidery featuring detailed flowing mane patterns with elegant gold and white stitching."
  },
  {
    id: 6,
    name: "Golden Geometric Border",
    category: "heritage",
    price: "₦7,500",
    image: "./images/Design31.BMP",
    description: "Elegant golden embroidery featuring layered rectangular borders, geometric details, and repeating circular patterns."
  },
  {
    id: 7,
    name: "Academic Excellence Crest",
    category: "heritage",
    price: "₦8,000",
    image: "./images/Design1 LOGO.BMP",
    description: "Detailed school emblem embroidery featuring an eagle, shield, books, torch, stars, and laurel branches."
  },
  {
    id: 8,
    name: "Ornamental Vine Embroidery Set",
    category: "floral",
    price: "₦7,500",
    image: "./images/Design34.1.BMP",
    description: "Elegant embroidery set featuring flowing vine motifs, decorative diamonds, and scalloped ornamental borders."
  },{
    id: 9,
    name: "Emerald Vine Garland",
    category: "floral",
    price: "₦4,500",
    image: "./images/Design1.1.BMP",
    description: "A graceful green vine embroidered with small leaves and flowers, ideal for decorating garment necklines and edges."
  },
  {
    id: 10,
    name: "Floral Pocket Panel",
    category: "floral",
    price: "₦5,000",
    image: "./images/STCH19.BMP",
    description: "A light garment panel with small floral clusters and decorative framing."
  },
  {
    id: 11,
    name: "Golden Leaf Trail",
    category: "floral",
    price: "₦3,500",
    image: "./images/Design3.BMP",
    description: "A delicate golden stem with flowing leaves, suitable for sleeves, collars, and decorative accents."
  },
  {
    id: 12,
    name: "Golden Blossom Frame",
    category: "floral",
    price: "₦5,000",
    image: "./images/Design5 pock.BMP",
    description: "A refined golden floral arrangement inside a simple rectangular frame, perfect for decorative panels."
  },
  {
    id: 13,
    name: "Midnight Blossom Scatter",
    category: "floral",
    price: "₦5,500",
    image: "./images/Design51.BMP",
    description: "A subtle all-over floral pattern with fine branching details, suitable for elegant fabric decoration."
  },
  {
    id: 14,
    name: "Golden Botanical Sprig",
    category: "floral",
    price: "₦4,500",
    image: "./images/Design6 FP.BMP",
    description: "A delicate botanical embroidery arrangement featuring flowering branches in a clean, balanced layout."
  },
  {
    id: 15,
    name: "Regal Flame Ornament",
    category: "heritage",
    price: "₦6,500",
    image: "./images/Design64.BMP",
    description: "A dramatic symmetrical ornamental design with curling flame-like details and rich red-and-gold styling."
  },
  {
    id: 16,
    name: "Emerald Heritage Lattice",
    category: "heritage",
    price: "₦5,000",
    image: "./images/DEUSTCH1.BMP",
    description: "A repeating green geometric pattern arranged as a decorative border and matching panel."
  },
  {
    id: 17,
    name: "Golden Garden Blooms",
    category: "floral",
    price: "₦5,000",
    image: "./images/OR.BMP",
    description: "A floral composition featuring golden blossoms and curved stems with a small red accent flower."
  },
  {
    id: 18,
    name: "Pink Square Panel",
    category: "heritage",
    price: "₦5,000",
    image: "./images/Design41.BMP",
    description: "A decorative pink panel featuring repeated square motifs and a clean geometric layout."
  },
  {
    id: 19,
    name: "Midnight Symmetry",
    category: "heritage",
    price: "₦5,500",
    image: "./images/Design47.BMP",
    description: "A narrow, symmetrical black ornamental motif with intricate curves and balanced detailing."
  },
  {
    id: 20,
    name: "Olive Interlace Panel",
    category: "heritage",
    price: "₦6,000",
    image: "./images/Design48.jpg",
    description: "An ornamental panel featuring interwoven shapes in olive, beige, and muted neutral tones."
  },
  {
    id: 21,
    name: "Black Gold Medallion Panel",
    category: "heritage",
    price: "₦6,500",
    image: "./images/Design50.BMP",
    description: "A bold dark panel combining geometric borders and circular ornamental accents."
  },
  {
    id: 22,
    name: "Golden Circle Medallion",
    category: "heritage",
    price: "₦3,500",
    image: "./images/Design53.BMP",
    description: "A delicate circular ornamental motif accompanied by a matching smaller decorative element."
  },
  {
    id: 23,
    name: "Golden Fan Ornament",
    category: "heritage",
    price: "₦4,500",
    image: "./images/Design58.BMP",
    description: "A fan-shaped gold-and-black design with radiating lines and a refined decorative finish."
  },
  {
    id: 24,
    name: "Golden Floral Jewel Set",
    category: "floral",
    price: "₦4,000",
    image: "./images/STCH42 FP.BMP",
    description: "A small ornamental floral medallion paired with a narrow decorative border."
  },
  {
    id: 25,
    name: "Golden Leaf Border",
    category: "floral",
    price: "₦5,000",
    image: "./images/STCH36.BMP",
    description: "A warm golden repeating leaf-like pattern with a matching square motif."
  },
  {
    id: 26,
    name: "Emerald Double Vine",
    category: "floral",
    price: "₦5,000",
    image: "./images/STCH31.BMP",
    description: "Two green symmetrical leafy patterns form a balanced vertical design."
  },
  {
    id: 27,
    name: "Monochrome Leaf Panel",
    category: "floral",
    price: "₦4,500",
    image: "./images/STCH34.BMP",
    description: "A fine black-and-white botanical motif paired with a matching border."
  },
  {
    id: 28,
    name: "Silver Interlace Set",
    category: "heritage",
    price: "₦4,500",
    image: "./images/STCH50 FP.BMP",
    description: "A gray geometric border and matching panel with repeating diamond forms."
  },
  {
    id: 29,
    name: "Crimson Double Garland",
    category: "heritage",
    price: "₦4,500",
    image: "./images/STCH51 FP.BMP",
    description: "Two symmetrical red ornamental garlands arranged against a dark background."
  },
  {
    id: 30,
    name: "Olive Diamond Accent",
    category: "heritage",
    price: "₦4,000",
    image: "./images/STCH9 FP.BMP",
    description: "A slim border and matching diamond motif in muted olive and gold."
  },
  
];