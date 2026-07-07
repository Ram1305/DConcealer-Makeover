import galleryT1 from "@/components/assets/t1.jpeg";
import galleryT2 from "@/components/assets/t2.jpeg";
import galleryT3 from "@/components/assets/t3.jpeg";

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
  {
    id: 3,
    category: "Engagement",
    img: galleryT3.src,
    caption: "Signature Bridal Glow",
    featured: true,
  },
  { id: 1, category: "Bridal", img: galleryT1.src, caption: "Radiant HD Bridal Look" },
  { id: 2, category: "Reception", img: galleryT2.src, caption: "Glamorous Reception Glow" },
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

export const instagramHandle = "@d__concealer";
export const instagramUrl = "https://www.instagram.com/d__concealer/";

export const contactPhone = {
  display: "+91 831 031 3243",
  tel: "+918310313243",
  whatsapp: "918310313243",
} as const;

export const whatsappUrl = `https://wa.me/${contactPhone.whatsapp}`;

export const instagramPosts = [
  {
    id: 1,
    url: "https://www.instagram.com/reel/DJcXKrRTRaR/",
    img: "https://scontent.cdninstagram.com/v/t51.75761-15/496490562_17903822679169522_2667514995500674057_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=105&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=tF4YzaQ-JWQQ7kNvwFTnju1&_nc_oc=Adq-xuOPOBFmAbb8WpP8GQ3lYOcckD8l5BPagYQXthHOCvrh0OIj-1ldMLiJhB0m6gdAdjFsyLYO1_IJLL--3zx2&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=UMOov6ffr4YU0rpZ5B5GYA&_nc_ss=7260f&oh=00_AQDKy4WjnaiJyFk4fuhAWhNCnsCutUiJTnx8T_TUstOAng&oe=6A5306B4",
    alt: "D_Concealer Makeover Instagram reel",
  },
  {
    id: 2,
    url: "https://www.instagram.com/reel/DHNbG0ERQYs/",
    img: "https://scontent.cdninstagram.com/v/t51.75761-15/484214541_17897363934169522_8966750824649510395_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=104&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=JnT6-Ll1TRcQ7kNvwG4nzoF&_nc_oc=AdpS6PKIZ1Dfv1_CNbrLoXeKvSPn5m6OmgfCt_gG4ex-cYJKQDzU2DCrwT-zQBg80YhmmaCG1PqYk5mt0wbRueJH&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=ubRxHdSNOmfPwd_EUCglsg&_nc_ss=7260f&oh=00_AQB69srxgdU4Ky8Zz70GaMHZbhjLXdCvIVMRRpV8f9I7Gg&oe=6A52F329",
    alt: "D_Concealer Makeover Instagram reel",
  },
  {
    id: 3,
    url: "https://www.instagram.com/reel/DEaPlMSyumB/",
    img: "https://scontent.cdninstagram.com/v/t51.75761-15/472492541_17888704002169522_251030699626094554_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=107&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=NguKoZ9R8tsQ7kNvwHCCXBQ&_nc_oc=Adr5og-SvzfHwVpO-tptHz8KvXMmIKPQWwlx1SDLMtcw7VBHebmKqsu6rhUOvteZ56UBiEEXcGBKAp5UAlPvnnfd&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=d1iIjvwFxFIdDxTfrxvKAQ&_nc_ss=7260f&oh=00_AQB1ZPKGDfGKWvx16Ik-dWnaJ1tlN4WQt021bEPTOLolww&oe=6A52D2C3",
    alt: "D_Concealer Makeover Instagram reel",
  },
  {
    id: 4,
    url: "https://www.instagram.com/reel/DCjQ4QcSDRM/",
    img: "https://scontent.cdninstagram.com/v/t51.75761-15/467544907_17882643732169522_4298439578911984614_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=108&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=BZ3xbcmE93IQ7kNvwHeW_z_&_nc_oc=AdpVzt8g1C88DrRQCcHYbsxbxuBMoHZhujLHeJyvriwfuuTqQCHoc729R0dgEgw9_r6yQxR4hhObXJWneCfwn_xd&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=v32sP4LlbBK-c9K-gvA12A&_nc_ss=7260f&oh=00_AQD9fjORUO8tjyICYoHxVHFelBncwVC4k2TFv9KKPJJxdg&oe=6A52F6F3",
    alt: "D_Concealer Makeover Instagram reel",
  },
  {
    id: 5,
    url: "https://www.instagram.com/reel/DHIpiUty87T/",
    img: "https://scontent.cdninstagram.com/v/t51.75761-15/483936445_17897122737169522_8653422381558659054_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=111&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=MtioFQaa1OsQ7kNvwGgACHT&_nc_oc=AdqO12Z_sCuFT3fz81FZJj2TxNhBkS44hq5Nhm6E27Nus9l07GCbB_eVNSDa_uiRfB5h3UBl-8pHHMjRSgiW5QXs&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=KofNg7woFjs-FwuyuXBtwA&_nc_ss=7260f&oh=00_AQA0r6aOkctYVW9eJ-hT8Tdr-J3EYJW8joBpr8xPGlbHmQ&oe=6A52D854",
    alt: "D_Concealer Makeover Instagram reel",
  },
  {
    id: 6,
    url: "https://www.instagram.com/reel/C9ezRdns2q6/",
    img: "https://scontent.cdninstagram.com/v/t51.71878-15/503749498_1045094457728362_912949571159587389_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=101&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=jpkuPHR6DVwQ7kNvwFZfhxI&_nc_oc=Adr47Y0TVOhkk2mfbUHO5v9kNooBMYNRMPq6KhogOAkpkj4phHYFi4sHAleR8-aLu-qkgbmYmlt-gzaIpG5gsP4X&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=3yTi0i5203S9QtyD9RZpjg&_nc_ss=7260f&oh=00_AQAzR0EKdskUjkdZEARROah_WPcBmiBVp9T8EijveyRF-A&oe=6A52FA31",
    alt: "D_Concealer Makeover Instagram reel",
  },
  {
    id: 7,
    url: "https://www.instagram.com/reel/C4zsFbtpcvo/",
    img: "https://scontent.cdninstagram.com/v/t51.71878-15/503151961_1783834359207088_1628560804552256245_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=110&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=I_hHrw1cqAoQ7kNvwHd0xPi&_nc_oc=Adp2OdHYFkGvirUJEX1UH7pO4TMMeZbQwoCWZAi0rkyI8gfMzMObGQQiZXAxGUlpMwlbjhXxcPGvz9AftARDBfA5&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=HxQrFT1Af_KcBE86-0OkWg&_nc_ss=7260f&oh=00_AQCf0YW3EF1zESvyUJwzMKVLpWvwoQCXzixM81byXqU-QQ&oe=6A52ED11",
    alt: "D_Concealer Makeover Instagram reel",
  },
  {
    id: 8,
    url: "https://www.instagram.com/reel/DE6kTHJS-Db/",
    img: "https://scontent.cdninstagram.com/v/t51.71878-15/497877042_1767684480758637_5302395721588940349_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=103&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=4-x0d4AXafYQ7kNvwEozK8E&_nc_oc=AdrlCvySVSZpu5TXbmyWASXJYOl9yGN6nJ7K1VmnQvypZgwD4pQmjT3dFtNlCsLc_ZvMCyW-7an4zNn9vhPjgpxz&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=LpiNhQg21bZDpngIXH8bDA&_nc_ss=7260f&oh=00_AQByJ6Jthf_qHjIGKVyXCZ8Qh_TYMC8sI_FSskg2_UZ8FQ&oe=6A52F132",
    alt: "D_Concealer Makeover Instagram reel",
  },
  {
    id: 9,
    url: "https://www.instagram.com/reel/DGzeX85y67F/",
    img: "https://scontent.cdninstagram.com/v/t51.75761-15/482769579_17896072461169522_1180759175240741984_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=110&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=V7TphnOIJ50Q7kNvwEl3Th-&_nc_oc=Adrr_m845MWQ5aEDzfzeVpo0ni-1fWPN0Z8fZA4xa0b8fEQjOi_ULueFhGuat-1VH7EW0JnwIQz6JFRIiLSJMENP&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=LZ4A2HrFsvv0_fge333O6A&_nc_ss=7260f&oh=00_AQDgUFOBX2Jyq2emerlA75Uq5g4hPcG8gIIvoEGWEKfD8w&oe=6A52FA44",
    alt: "D_Concealer Makeover Instagram reel",
  },
  {
    id: 10,
    url: "https://www.instagram.com/reel/DG8a2UgyQ5M/",
    img: "https://scontent.cdninstagram.com/v/t51.75761-15/482927892_17896506825169522_6139498313348261497_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=106&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=9HO_sFCTyF4Q7kNvwGH5VWq&_nc_oc=AdrzFJAszWaPcVPomBNxPKM9nWR0AMCd5tPP6NFtCvYs63XoM5n-HmSgIQyNEnJSpdId25hmGdywke8rvfC5Bj1Y&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=lGzoC9RBJjUgRLeFftBj3w&_nc_ss=7260f&oh=00_AQDsB5RiHYIYzdC0iSepIw9o_PIGCztBEC0Ng0dtqDeEPg&oe=6A530389",
    alt: "D_Concealer Makeover Instagram reel",
  },
  {
    id: 11,
    url: "https://www.instagram.com/reel/DDgbYysyrbN/",
    img: "https://scontent.cdninstagram.com/v/t51.75761-15/469731469_17885693409169522_361345819926641945_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=108&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=cffd7X9NMMMQ7kNvwFEZtGa&_nc_oc=AdqqWfjuUyteALCMuYFQLpH2zSAVJeTWgA7lSlut_MnvHYcK2LHzaW0LJXdc2kQhgWnlYERceWp3rTjzZyWnxRlw&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=eqxBMbtN6oWKPgFq_jMl_Q&_nc_ss=7260f&oh=00_AQAyAkN7-DI1qE7amGS9yit7Ybd8Y7ThrH5KNj6uejzR4Q&oe=6A52EF01",
    alt: "D_Concealer Makeover Instagram reel",
  },
];
