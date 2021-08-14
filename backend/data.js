import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Roman",
      email: "volchukr@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "David",
      email: "user@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "FIODIO Membrane Gaming Keyboard",
      category: "Keyboards",
      image: "/images/p1.jpg",
      price: 50,
      countInStock: 10,
      brand: "FIODIO",
      rating: 1.5,
      numReviews: 414,
      description:
        "USB Wired Keyboard with Rainbow Backlit, Spill Resistant, Multimedia Control for PC and Desktop Computer",
    },
    {
      name: "Razer Sphex V2 Gaming Mouse Pad",
      category: "Mouse Pads",
      image: "/images/p2.jpg",
      price: 20,
      countInStock: 20,
      brand: "Razer",
      rating: 4,
      numReviews: 25,
      description:
        "Ultra-Thin Form Factor - Optimized Gaming Surface - Polycarbonate Finish",
    },
    {
      name: "Logitech Wireless Mouse",
      category: "Mouses",
      image: "/images/p3.jpg",
      price: 40,
      countInStock: 0,
      brand: "Logitech",
      rating: 3.5,
      numReviews: 542,
      description: "Logitech Wireless Mouse M185 (Swift Grey)",
    },
    {
      name: "Gaming Graphics Card",
      category: "Graphics Cards",
      image: "/images/p4.jpg",
      price: 200,
      countInStock: 15,
      brand: "ASUS",
      rating: 4,
      numReviews: 5184,
      description:
        "ASUS GeForce GTX 1050 Ti 4GB Phoenix Fan Edition DVI-D HDMI DP 1.4",
    },
    {
      name: "HP 15 Laptop",
      category: "Laptops",
      image: "/images/p5.jpg",
      price: 630,
      countInStock: 25,
      brand: "Hp",
      rating: 5,
      numReviews: 512,
      description:
        "HP 15 Laptop, 11th Gen Intel Core i5-1135G7 Processor, 8 GB RAM, 256 GB SSD Storage",
    },
    {
      name: "Kids Headphones",
      category: "Headphones",
      image: "/images/p6.jpg",
      price: 24,
      countInStock: 12,
      brand: "ELECDER",
      rating: 4.5,
      numReviews: 125,
      description:
        "Headphones 3.5mm Jack Compatible Cellphones Computer MP3/4 Kindle School Tablet Green/Purple",
    },
    {
      name: "Apple AirPods Pro",
      category: "Apple",
      image: "/images/p7.jpg",
      price: 70,
      countInStock: 14,
      brand: "Apple",
      rating: 1,
      numReviews: 10,
      description: "Apple AirPods Pro",
    },
    {
      name: "Desktop Computer",
      category: "Computers",
      image: "/images/p8.jpg",
      price: 300,
      countInStock: 27,
      brand: "Alarco",
      rating: 2.5,
      numReviews: 158,
      description:
        "Alarco Gaming PC Desktop Computer Intel i5 3.10GHz,8GB Ram,1TB Hard Drive,Windows 10 pro",
    },
    {
      name: "Monitor",
      category: "Monitors",
      image: "/images/p9.jpg",
      price: 170,
      countInStock: 20,
      brand: "Acer",
      rating: 2,
      numReviews: 197,
      description:
        "Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI & VGA Port), Black",
    },
    {
      name: "Desktop Processor",
      category: "Processors",
      image: "/images/p10.jpg",
      price: 340,
      countInStock: 11,
      brand: "Intel",
      rating: 2.5,
      numReviews: 345,
      description:
        "Intel Core i9-9900KF Desktop Processor 8 Cores up to 5.0 GHz Turbo Unlocked Without Processor Graphics",
    },
  ],
};

export default data;
