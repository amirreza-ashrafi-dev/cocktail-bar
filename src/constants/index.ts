const navLinks = [
  {
    id: "cocktails",
    title: "Cocktails",
  },
  {
    id: "about",
    title: "About Us",
  },
  {
    id: "work",
    title: "The Art",
  },
  {
    id: "contact",
    title: "Contact",
  },
] as const;

const cocktailLists = [
  {
    name: "Golden Martini",
    country: "FR",
    detail: "24k Flakes",
    price: "$25",
  },
  {
    name: "Truffle Whiskey Sour",
    country: "SCT",
    detail: "Limited Run",
    price: "$22",
  },
  {
    name: "Velvet Espresso",
    country: "BR",
    detail: "Cold Brew",
    price: "$18",
  },
  {
    name: "Kyoto Sakura",
    country: "JP",
    detail: "Gin Based",
    price: "$20",
  },
] as const;

const mockTailLists = [
  {
    name: "Cool Cucumber Tonic",
    country: "GR",
    detail: "Infused",
    price: "$10",
  },
  {
    name: "Mango Chili Twist",
    country: "MX",
    detail: "Sweet & Spicy",
    price: "$13",
  },
  {
    name: "Blueberry Sage Soda",
    country: "CA",
    detail: "Craft Brew",
    price: "$12",
  },
  {
    name: "Watermelon Mint Chill",
    country: "ES",
    detail: "Crushed Ice",
    price: "$11",
  },
] as const;

const profileLists = [
  {
    imgPath: "/images/profile1.png",
  },
  {
    imgPath: "/images/profile2.png",
  },
  {
    imgPath: "/images/profile3.png",
  },
  {
    imgPath: "/images/profile4.png",
  },
] as const;

const featureLists = [
  "Perfectly balanced blends",
  "Garnished to perfection",
  "Ice-cold every time",
  "Expertly shaken & stirred",
];

const goodLists = [
  "Handpicked ingredients",
  "Signature techniques",
  "Bartending artistry in action",
  "Freshly muddled flavors",
] as const;

const storeInfo = {
  heading: "Where to Find Us",
  address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
  contact: {
    phone: "(555) 987-6543",
    email: "hello@jsmcocktail.com",
  },
} as const;

const openingHours = [
  { day: "Mon–Thu", time: "11:00am – 12am" },
  { day: "Fri", time: "11:00am – 2am" },
  { day: "Sat", time: "9:00am – 2am" },
  { day: "Sun", time: "9:00am – 1am" },
] as const;

const socials = [
  {
    name: "Instagram",
    icon: "/images/insta.png",
    url: "#",
  },
  {
    name: "X (Twitter)",
    icon: "/images/x.png",
    url: "#",
  },
  {
    name: "Facebook",
    icon: "/images/fb.png",
    url: "#",
  },
] as const;

const allCocktails = [
  {
    id: 1,
    name: "Classic Mojito",
    image: "/images/drink1.png",
    title: "Simple Ingredients, Bold Flavor",
    description:
      "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
  },
  {
    id: 2,
    name: "Raspberry Mojito",
    image: "/images/drink2.png",
    title: "A Zesty Classic That Never Fails",
    description:
      "The Margarita is a classic that balances tangy lime, smooth tequila, and a touch of sweetness. Shaken, frozen, or on the rocks—it’s always crisp & refreshing.",
  },
  {
    id: 3,
    name: "Violet Breeze",
    image: "/images/drink3.png",
    title: "Simple Ingredients, Bold Flavor",
    description:
      "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
  },
  {
    id: 4,
    name: "Curacao Mojito",
    image: "/images/drink4.png",
    title: "Crafted With Care, Poured With Love",
    description:
      "Each cocktail is made with fresh ingredients and a passion for perfecting every pour, whether you're celebrating or simply relaxing.",
  },
] as const;

export {
  navLinks,
  cocktailLists,
  mockTailLists,
  profileLists,
  featureLists,
  goodLists,
  openingHours,
  storeInfo,
  socials,
  allCocktails,
};
