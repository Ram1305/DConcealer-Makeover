export const packages = [
  {
    id: "bridal-hd",
    name: "Bridal HD Package",
    price: "₹15,000",
    unit: "/ Session",
    featured: true,
    includes: [
      "High-end products",
      "One HD Long Lasting Makeup",
      "Hairdo",
      "Saree / Lehenga Draping",
      "Hair Extensions",
      "Contact Lens",
      "Eyelashes",
    ],
    note: "Accessories not included. Extra hairstyle or saree change is chargeable.",
  },
  {
    id: "semi-hd",
    name: "Semi HD Package",
    price: "₹10,000",
    unit: "/ Session",
    featured: false,
    includes: [
      "Semi HD Makeup",
      "Simple Hairdo",
      "Complimentary Saree Draping",
      "Hair Extensions",
    ],
    note: "",
  },
];

export const onSpotServices = [
  { name: "Simple Makeup (Sister/Friends)", price: "₹3,500" },
  { name: "Mature Skin Makeup", price: "₹3,500" },
  { name: "Kids Makeup & Hair", price: "₹2,000" },
  { name: "Simple Hairstyle", price: "₹1,500" },
  { name: "Saree Draping", price: "₹700" },
  { name: "Groom Makeup", price: "₹3,500" },
];

export const additionalServices = [
  { name: "Extra Hair Extensions", price: "₹1,000" },
  { name: "Extra Eyelashes", price: "₹350" },
  { name: "Extra Lens", price: "₹500" },
];

export const aboutFeatures = [
  { title: "Premium Products", desc: "Only high-end, skin-safe cosmetics for a flawless finish." },
  { title: "Certified Artist", desc: "Trained and certified in HD bridal artistry." },
  { title: "HD Bridal Makeup", desc: "Camera-ready, long-lasting HD techniques." },
  { title: "Luxury Experience", desc: "A calm, pampering studio experience from start to finish." },
  { title: "Long Lasting Makeup", desc: "Built to last through vows, dances, and tears of joy." },
  { title: "Professional Hair Styling", desc: "Elegant hairdos tailored to your outfit and face shape." },
];

export const whyChooseUs = [
  { title: "Premium Products", icon: "Sparkles" },
  { title: "Luxury Finish", icon: "Gem" },
  { title: "Certified Artist", icon: "BadgeCheck" },
  { title: "Long Lasting Makeup", icon: "Clock" },
  { title: "Affordable Luxury", icon: "Heart" },
  { title: "Bridal Specialist", icon: "Crown" },
  { title: "Professional Hair Styling", icon: "Scissors" },
  { title: "100% Hygiene", icon: "ShieldCheck" },
];

export const galleryCategories = [
  "All",
  "Bridal",
  "Reception",
  "Engagement",
  "Traditional",
  "Modern Bride",
  "Hair Styling",
] as const;

export const galleryItems = [
  { id: 1, category: "Bridal", img: "https://images.unsplash.com/photo-1617633150878-7df1d12a9a57?w=800&q=80", caption: "Radiant HD Bridal Look" },
  { id: 2, category: "Reception", img: "https://images.unsplash.com/photo-1631549424057-403e75d68e2f?w=800&q=80", caption: "Glamorous Reception Glow" },
  { id: 3, category: "Engagement", img: "https://images.unsplash.com/photo-1626496151483-c16515f579ea?w=800&q=80", caption: "Vibrant Engagement Charm" },
  { id: 4, category: "Traditional", img: "https://images.unsplash.com/photo-1717341829793-7dd4390e59e7?w=800&q=80", caption: "Timeless Traditional Bride" },
  { id: 5, category: "Modern Bride", img: "https://images.unsplash.com/photo-1588842867976-fd084ca2c87b?w=800&q=80", caption: "Contemporary Bridal Edit" },
  { id: 6, category: "Hair Styling", img: "https://images.unsplash.com/photo-1623428455512-264b33ca8cec?w=800&q=80", caption: "Signature Hair Artistry" },
  { id: 7, category: "Bridal", img: "https://images.unsplash.com/photo-1610047614301-13c63f00c032?w=800&q=80", caption: "Dewy HD Perfection" },
  { id: 8, category: "Reception", img: "https://images.unsplash.com/photo-1692850852630-495a2145c2a4?w=800&q=80", caption: "Evening Reception Sparkle" },
  { id: 9, category: "Modern Bride", img: "https://images.unsplash.com/photo-1570212773364-e30cd076539e?w=800&q=80", caption: "Editorial Modern Bride" },
];

export const testimonials = [
  {
    name: "Ananya R.",
    event: "Bridal Makeup, Chennai",
    quote:
      "My makeup stayed flawless through a seven hour wedding. Every compliment I got that day, I owe to this team.",
    rating: 5,
  },
  {
    name: "Priya S.",
    event: "Reception Look",
    quote:
      "The studio felt like a five star spa. Calm, elegant, and the final look was better than I imagined.",
    rating: 5,
  },
  {
    name: "Meera K.",
    event: "Engagement Makeup",
    quote:
      "Professional, punctual and so talented. The HD finish photographed beautifully in every light.",
    rating: 5,
  },
  {
    name: "Divya N.",
    event: "Bridal HD Package",
    quote:
      "From the trial to the wedding morning, everything was seamless. Worth every rupee.",
    rating: 5,
  },
];

export const terms = [
  "Separate accommodation required for the artist team.",
  "Maximum one person is permitted to stay with the bride during the session.",
  "2.5 to 3 hours are required for the complete bridal look.",
  "25% advance is required to confirm your booking.",
  "The advance amount is strictly non-refundable.",
  "The advance can be adjusted if the event is postponed.",
  "Trial session charges apply separately.",
  "Client should arrange jewellery, flowers and accessories.",
  "Travel charges are additional, based on location.",
];

export const quickServices = [
  { name: "Party Makeup", icon: "brush" },
  { name: "Engagement", icon: "face_6" },
  { name: "Airbrush HD", icon: "air" },
  { name: "Trial Session", icon: "content_cut" },
];

export const aboutDesktopFeatures = [
  {
    title: "Premium Products",
    desc: "Exclusively using Chanel, Dior, and Estée Lauder for lasting, camera-ready perfection.",
    icon: "diamond",
  },
  {
    title: "Certified Artist",
    desc: "Specialized international training in HD and Airbrush techniques for brides.",
    icon: "workspace_premium",
  },
  {
    title: "Bespoke Styling",
    desc: "Custom makeup plans tailored to your skin type, outfit, and personal aesthetic.",
    icon: "auto_awesome",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Packages", href: "#packages" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];
