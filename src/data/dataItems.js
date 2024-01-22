const dataItems = [
  {
    id: 1,
    name: "Vintage Detective Coat",
    description:
      "Classic 1930s detective coat with a tailored fit, wide lapels, and deep coal-black color. Perfect for adding an element of mystery and elegance.",
    image: "coat",
    price: 150,
    category: "Clothing",
  },
  {
    id: 2,
    name: "Elegant Black Coat",
    description:
      "Stylish black coat embodying the essence of 1930s fashion with its elegant design and quality fabric.",
    image: "coatblack",
    price: 165,
    category: "Clothing",
  },
  {
    id: 3,
    name: "Emerald Detective Coat",
    description:
      "Unique detective coat in a bright emerald color, combining 1930s fashion with a bold modern twist.",
    image: "coatgreen",
    price: 170,
    category: "Clothing",
  },
  {
    id: 4,
    name: "Evidence Set",
    description:
      "An exciting collection of clues and artifacts, perfect for any budding detective or mystery lover.",
    image: "evidenseset1",
    price: 80,
    category: "Collectibles",
  },
  {
    id: 5,
    name: "Collection of Detective Games",
    description:
      "A set of thrilling detective games, promising hours of entertainment and puzzles.",
    image: "games",
    price: 60,
    category: "Games",
  },
  {
    id: 6,
    name: "Classic Detective Hat",
    description:
      "Timeless detective hat, made of high-quality materials, perfect for adding a touch of class to any outfit.",
    image: "hat",
    price: 50,
    category: "Clothing",
  },
  {
    id: 7,
    name: "Brown Detective Hat",
    description:
      "This brown detective hat combines style and functionality, making it an indispensable accessory for any mystery enthusiast.",
    image: "hatbrown",
    price: 55,
    category: "Clothing",
  },
  {
    id: 8,
    name: "Grey Detective Hat",
    description:
      "Elegant grey detective hat, exuding sophistication and a sharp sense of style, perfect for both casual and formal occasions.",
    image: "hatgrey",
    price: 52,
    category: "Clothing",
  },
  {
    id: 9,
    name: "Magnifying Glass",
    description:
      "Beautifully crafted magnifying glass, essential for examining the finer details of any mystery.",
    image: "lense",
    price: 40,
    category: "Tools",
  },
  {
    id: 10,
    name: "Vintage Notebook",
    description:
      "Elegant notebook, perfect for jotting down clues and thoughts during detective adventures.",
    image: "notebook",
    price: 25,
    category: "Stationery",
  },
  {
    id: 11,
    name: "Exquisite Perfume",
    description:
      "Charming fragrance capturing the allure and mystery of the detective world.",
    image: "parfume",
    price: 70,
    category: "Perfume",
  },
  {
    id: 12,
    name: "Luxury Pen",
    description:
      "Stylish writing instrument, perfect for recording observations and solving puzzles.",
    image: "pen",
    price: 45,
    category: "Stationery",
  },
  {
    id: 13,
    name: "Elegant Tea Set",
    description:
      "Beautifully designed tea set, adding a sense of refinement and relaxation during long detective sessions.",
    image: "teaset",
    price: 90,
    category: "Home & Life",
  },
  {
    id: 14,
    name: "Classic Watch",
    description:
      "Timeless watch, combining elegance and precision, essential for keeping track of time during investigations.",
    image: "watch",
    price: 120,
    category: "Accessories",
  },

  {
    id: 15,
    name: "Evidence Set Variant 2",
    description:
      "Second version of the Evidence Set, with unique clues and artifacts.",
    image: "evidenseset2",
    price: 85,
    category: "Collectibles",
  },
  {
    id: 16,
    name: "Evidence Set Variant 3",
    description:
      "Another variant of the Evidence Set, expanding the collection of detective tools.",
    image: "evidenseset3",
    price: 90,
    category: "Collectibles",
  },
  {
    id: 17,
    name: "Expansion for Detective Games Collection",
    description:
      "Expansion for the Detective Games Collection, adding new challenges and scenarios.",
    image: "games2",
    price: 35,
    category: "Games",
  },
  {
    id: 18,
    name: "Advanced Detective Games",
    description:
      "More complex set of detective games for the experienced sleuth, offering new and challenging puzzles.",
    image: "games3",
    price: 65,
    category: "Games",
  },

  {
    id: 19,
    name: "Magnifying Glass Variant 2",
    description:
      "Second version of the magnifying glass, with improved magnification for detailed investigations.",
    image: "lense2",
    price: 45,
    category: "Tools",
  },
  {
    id: 20,
    name: "Magnifying Glass Variant 3",
    description:
      "Third variant of the magnifying glass, offering a different style and level of magnification.",
    image: "lense3",
    price: 48,
    category: "Tools",
  },

  {
    id: 21,
    name: "Designer Notebook 2",
    description:
      "Luxury version of the vintage notebook with premium paper and an elegant cover.",
    image: "notebook2",
    price: 30,
    category: "Stationery",
  },
  {
    id: 22,
    name: "Designer Notebook 3",
    description:
      "Third edition of the vintage notebook, combining luxury and functionality.",
    image: "notebook3",
    price: 35,
    category: "Stationery",
  },
  {
    id: 23,
    name: "Perfume Variant 2",
    description:
      "Second fragrance in the exquisite perfume line with a different, captivating scent.",
    image: "parfume2",
    price: 75,
    category: "Perfume",
  },
  {
    id: 24,
    name: "Perfume Variant 3",
    description:
      "Third variant of exquisite perfumes, offering a new and unique fragrance.",
    image: "parfume3",
    price: 78,
    category: "Perfume",
  },
  {
    id: 25,
    name: "Premium Pen 2",
    description:
      "Upgraded version of the luxury pen with a more refined design.",
    image: "pen2",
    price: 50,
    category: "Stationery",
  },
  {
    id: 26,
    name: "Premium Pen 3",
    description:
      "Third edition of the luxury pen, known for its exceptional quality and style.",
    image: "pen3",
    price: 55,
    category: "Stationery",
  },
  {
    id: 27,
    name: "Tea Set Variant 2",
    description:
      "Second version of the elegant tea set, with a different design and color scheme.",
    image: "teaset2",
    price: 95,
    category: "Home & Life",
  },
  {
    id: 28,
    name: "Tea Set Variant 3",
    description:
      "Third edition of the elegant tea set, offering an alternative aesthetic and functionality.",
    image: "teaset3",
    price: 100,
    category: "Home & Life",
  },
  {
    id: 29,
    name: "Modern Watch",
    description:
      "Modern watch, combining classic and contemporary design elements.",
    image: "watch12",
    price: 125,
    category: "Accessories",
  },
  {
    id: 30,
    name: "Exquisite Black Watch",
    description:
      "Stylish black watch, perfectly suited for any detective wishing to make a statement.",
    image: "watchblack",
    price: 130,
    category: "Accessories",
  },
  {
    id: 31,
    name: "Watch Collection",
    description:
      "An assortment of watches, each with a unique design, suitable for various detective scenarios.",
    image: "watches",
    price: 200,
    category: "Accessories",
  },
];

export default dataItems;
