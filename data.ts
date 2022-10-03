export const nav = [
  { title: "Alojate", url: "/alojate" },
  { title: "Co-work", url: "/cowork" },
  {
    title: "Experimenta",
    submenuMob: [
      { title: "Alojate", url: "/experimenta/alojate" },
      { title: "Co-work", url: "/experimenta/cowork" },
      { title: "Experimenta", url: "/experimenta/experimenta" },
    ],
    submenuDesk: [
      { title: "City Host", url: "/experimenta/cityhost" },
      { title: "Actividades", url: "/experimenta/actividades" },
      { title: "Gastronomía", url: "/experimenta/gastronomia" },
      { title: "Eventos", url: "/experimenta/eventos" },
    ],
  },
  { title: "Español", url: "/español" },
  { title: "Reservar", url: "/reservar" },
  { title: "Únete", url: "/unete" },
  { title: "English", url: "/english" },
] as const;

export const home = {
  hero: { title: "Tu tribu te espera" },
  about: {
    text1: "Un hogar con espacio para coworkear, conectarte con",
    text2: "aventuras locales",
    text3: "y personas increíbles.",
  },
  services: {
    title: "Hoteles que son hogares",
    subtitle:
      "Siéntete parte de la tribu en un ambiente diseñado para que experimentes el viaje que va a cambiar algo en ti.",
    card: {
      location: "Arequipa",
      text: "Hub de exploradores, artistas y profesionales que ven al mundo su verdadero hogar.",
      services: "Servicios de este hotel",
    },
  },
} as const;

export const footer = {
  text: "Here we should have a few words about what and who the company is. This should serve well for SEO purposes.",
  social: [
    { title: "youtube", url: "https://www.youtube.com/" },
    { title: "facebook", url: "https://www.facebook.com/" },
    { title: "twitter", url: "https://www.twitter.com/" },
    { title: "instagram", url: "https://www.instagram.com/" },
  ],
  contact: {
    title: "Contacta con nosotros",
    tel: "(054) 1234567",
    email: "info@nomadperu.com.pe",
  },
  proposition: [
    { title: "Alojate", url: "/alojate" },
    { title: "Co-work", url: "/cowork" },
    { title: "Experimenta", url: "/experimenta" },
    { title: "Unete", url: "/unete" },
    { title: "Inversores", url: "/inversores" },
  ],
  subText: "Gracias por scrollear :)",
} as const;

export const hotels = [
  {
    img: "/img/img-card-nav-1.png",
    iconType: "/img/type-urban.png",
    title:
      "Social hub de alta experiencia, para millennials y zetas ejecutivos.",
    activity:
      "Habitaciones VIP · Piscina Climatizada · Salón de eventos · Espacio Coworking · Wifi gratís",
    price: "4560",
  },
  {
    img: "/img/img-card-nav-2.png",
    iconType: "/img/type-tribe.png",
    title: "Exploradores, artistas y emprendedores juntos en un lugar único.",
    activity: "Habitaciones VIP · Piscina · Gastronomía Vegana · Wifi gratís",
    price: "3190",
  },
  {
    img: "/img/img-card-nav-3.png",
    iconType: "/img/type-family.png",
    title: "Vive junto a toda tu familia la mejor experiencia de sus vidas.",
    activity:
      "Habitaciones VIP · Piscina Climatizada · Actividades · Spa · Cancha de golf · Wifi gratís",
    price: "4560",
  },
] as const;
