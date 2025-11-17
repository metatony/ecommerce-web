const productList = [
  {
    id: 1,
    name: "Silk Draped Skirt",
    price: 25,
    desktopImage:
      "https://res.cloudinary.com/de2vjcr29/image/upload/v1750021958/image-10_vnmzlq.png",
    mobileImage: "https://example.com/products/classic-tshirt-mobile.png",
    category: "Clothing Skirt Pants",
    description:
      "Elegantly crafted from smooth silk, this draped skirt offers a graceful silhouette perfect for both day-to-day wear and special occasions.",
  },
  {
    id: 2,
    name: "Charmeuse Shorts",
    price: 65,
    desktopImage:
      "https://res.cloudinary.com/de2vjcr29/image/upload/v1750021958/image-11_zb1p39.png",
    mobileImage: "https://example.com/products/sporty-jacket-mobile.png",
    category: "Clothing Shorts Pants",
    description:
      "Delicately made with luxurious charmeuse fabric, these shorts blend comfort with refined style for a modern, chic look.",
  },
  {
    id: 3,
    name: "Cashmere Cardigan",
    price: 85,
    desktopImage:
      "https://res.cloudinary.com/de2vjcr29/image/upload/v1750021954/image-8_uhoids.png",
    mobileImage: "https://example.com/products/elegant-dress-mobile.png",
    category: "Clothing Cardigan Top",
    description:
      "Soft and luxurious, this cashmere cardigan is a timeless layering piece that adds both sophistication and warmth to any ensemble.",
  },
  {
    id: 4,
    name: "Slim Back Slit Turtle-neck Tee",
    price: 50,
    desktopImage:
      "https://res.cloudinary.com/de2vjcr29/image/upload/v1750021955/image-9_bz8l5w.png",
    mobileImage: "https://example.com/products/casual-sneakers-mobile.png",
    category: "Clothing Turtle Top Tee",
    description:
      "Modern and sleek, this slim back slit turtle-neck tee features a flattering cut and versatile design that pairs perfectly with any outfit.",
  },
  {
    id: 5,
    name: "Cashmere Funnel Neck Sweater",
    price: 120,
    desktopImage:
      "https://res.cloudinary.com/de2vjcr29/image/upload/v1750021954/image-7_m1hzv9.png",
    mobileImage: "https://example.com/products/leather-boots-mobile.png",
    category: "Clothing Sweater Top",
    description:
      "This lightweight linen blazer combines classic tailoring with a breathable fabric for an effortlessly chic look. Ideal for transitional weather, its minimalist design provides a polished appearance whether paired with jeans or formal trousers.",
  },
  {
    id: 6,
    name: "Cashmere Cropped Sweater",
    price: 30,
    desktopImage:
      "https://res.cloudinary.com/de2vjcr29/image/upload/v1750021948/image-5_uodep3.png",
    mobileImage: "https://example.com/products/summer-shorts-mobile.png",
    category: "Clothing Sweater Top",
    description:
      "Feminine and stylish, this pert blouse features delicate ruffle detailing that adds flair to any outfit. Its soft fabric and tailored fit make it an excellent choice for both office wear and casual outings.",
  },
  {
    id: 7,
    name: "Classic Pant",
    price: 150,
    desktopImage:
      "https://res.cloudinary.com/de2vjcr29/image/upload/v1750021948/image-3_z9mgoi.png",
    mobileImage: "https://example.com/products/winter-coat-mobile.png",
    category: "Clothing Pants Trouser",
    description:
      "Timeless and versatile, these chic denim jeans offer a modern slim fit with subtle distressing details. Designed for both style and durability, they provide everyday comfort without sacrificing a contemporary look.",
  },
  {
    id: 8,
    name: "Poplin Oversized Shirt",
    price: 40,
    desktopImage:
      "https://res.cloudinary.com/de2vjcr29/image/upload/v1750021948/image-6_lfz5kd.png",
    mobileImage: "https://example.com/products/formal-shirt-mobile.png",
    category: "Clothing Shirt Top",
    description:
      "Exuding sophistication, this elegant wool overcoat features a timeless silhouette with modern touches such as a notched lapel and tailored cuffs. Perfect for chillier days, it offers warmth along with unmatched style.",
  },
  {
    id: 9,
    name: "Maxi Skirt",
    price: 55,
    desktopImage:
      "https://res.cloudinary.com/de2vjcr29/image/upload/v1750021948/image-4_uzipta.png",
    mobileImage: "https://example.com/products/highwaist-jeans-mobile.png",
    category: "Clothing Skirt Pants",
    description:
      "This versatile midi dress transitions effortlessly from day to night with its elegant design and flattering cut. Its balanced blend of casual ease and refined detail makes it a standout option for any occasion.",
  },
  {
    id: 10,
    name: "Silk Wide-Leg Pant",
    price: 45,
    desktopImage:
      "https://res.cloudinary.com/de2vjcr29/image/upload/v1750021947/image-2_j71zxo.png",
    mobileImage: "https://example.com/products/denim-skirt-mobile.png",
    category: "Clothing Pants Trouser",
    description:
      "Bold yet cozy, this statement knit sweater features an intricate design and soft, comfortable fabric. Its unique texture and modern styling offer a dynamic flair that enhances any layered look during cooler months.",
  },
  {
    id: 11,
    name: "Alpaca Wool Cropped Cardigan",
    price: 35,
    desktopImage:
      "https://res.cloudinary.com/de2vjcr29/image/upload/v1750021947/image-1_gp34u6.png",
    mobileImage: "https://example.com/products/vintage-hat-mobile.png",
    category: "Clothing Cardigan Top",
    description:
      "The modern pleated skirt redefines classic style with its expertly crafted folds and dynamic movement. Perfect for both professional and casual settings, its refined design elevates any ensemble with subtle sophistication.",
  },
  {
    id: 12,
    name: "Relaxed blazer",
    price: 20,
    desktopImage:
      "https://res.cloudinary.com/de2vjcr29/image/upload/v1750037967/coats_kssm4r.png",
    mobileImage: "https://example.com/products/trendy-sunglasses-mobile.png",
    category: "Clothing Blazer Jacket",
    description:
      "Designed for everyday comfort, these casual slip-on sneakers boast a sleek silhouette and understated styling. Their versatile design makes them ideal for a variety of occasions, blending effortless style with practical functionality.",
  },
  {
    id: 13,
    name: "Ponte Legging Pant",
    price: 248,
    desktopImage:
      "https://res.cloudinary.com/de2vjcr29/image/upload/v1750115503/pant2_cckmw1.png",
    mobileImage: "https://example.com/products/vintage-hat-mobile.png",
    category: "Clothing Pants Legging",
    description:
      "This elegant silk scarf offers a touch of luxury with its soft drape and vibrant print. Perfect for accenting any outfit, it brings both color and sophistication to your wardrobe, making it a stylish choice for any season.",
  },
  {
    id: 14,
    name: "Silk Wide-Leg Pant",
    price: 148,
    desktopImage:
      "https://res.cloudinary.com/de2vjcr29/image/upload/v1750115500/pant1_uvd4oz.png",
    mobileImage: "https://example.com/products/trendy-sunglasses-mobile.png",
    category: "Clothing Pants Trouser",
    description:
      "Experience unparalleled elegance and fluidity with these silk wide-leg pants. Carefully tailored for a graceful drape, their luxurious fabric and relaxed silhouette make them an excellent choice for both upscale events and refined everyday wear.",
  },
  {
    id: 15,
    name: "Classic Easy Zipper Tote",
    price: 298,
    desktopImage:
      "https://res.cloudinary.com/de2vjcr29/image/upload/v1749586491/desk1_oppnwt.png",
    category: "Bags Tote",
    description:
      "This classic easy zipper tote is designed for both style and functionality. Crafted from high-quality materials, it features a spacious interior with a secure zipper closure, making it perfect for everyday use or travel. The timeless design ensures it complements any outfit, while the durable construction guarantees long-lasting wear.",
  },
  {
    id: 16,
    name: "Concertina Phone Bag",
    price: 140,
    desktopImage:
      "https://res.cloudinary.com/de2vjcr29/image/upload/v1749586567/desk2_xeli7k.png",
    category: "Bags Phone",
    description:
      "The Concertina Phone Bag is a stylish and practical accessory designed to keep your phone secure and easily accessible. Made from premium materials, it features a unique concertina design that allows for easy expansion and contraction, providing ample space for your phone and essentials. Its sleek look makes it a perfect companion for both casual outings and formal events.",
  },
  {
    id: 18,
    name: "Cashmere Beanie",
    price: 35,
    desktopImage:
      "https://res.cloudinary.com/de2vjcr29/image/upload/v1749586574/desk4_hqfuj0.png",
    category: "Accessories Beanie",
    description:
      "The Single-Origin Cashmere Beanie is crafted from the finest cashmere, offering unparalleled warmth and softness. Its minimalist design makes it a versatile accessory that pairs well with any outfit. Whether you're heading out for a casual day or dressing up for an evening event, this beanie adds a touch of luxury while keeping you cozy in colder temperatures.",
  },
];

export default productList;
