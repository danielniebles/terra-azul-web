type ValueItem = {
  title: string;
  subtitle: string;
  content: string;
  imageUrl: string;
};

type SDGGoal = {
  number: number;
  title: string[];
  color: string;
  svgUrl: string;
};

export const DNA_VALUES: ValueItem[] = [
  {
    title: "INNOVACIÓN",
    subtitle: "Estamos siempre un paso adelante en arquitectura inteligente.",
    content:
      "Buscamos constantemente nuevas tecnologías y metodologías para crear espacios inteligentes, eficientes y sostenibles.",
    imageUrl: "/dna/dna_1.webp", // Replace with actual image path
  },
  {
    title: "SOSTENIBILIDAD",
    subtitle: "Respetamos el planeta en cada obra.",
    content:
      "Diseñamos con responsabilidad ambiental, minimizando el impacto ecológico y promoviendo el uso eficiente de los recursos.",
    imageUrl: "/dna/dna_2.webp", // Replace with actual image path
  },
  {
    title: "CONOCIMIENTO",
    subtitle: "Expertos en cada detalle de la arquitectura.",
    content:
      "Contamos con un equipo altamente calificado que aplica procesos optimizados, garantizando soluciones precisas y efectivas.",
    imageUrl: "/dna/dna_3.webp", // Replace with actual image path
  },
  {
    title: "CONFIANZA",
    subtitle: "Transparencia y cumplimiento en cada proyecto.",
    content:
      "Trabajamos con transparencia y compromiso, asegurando que cada proyecto se entregue con la calidad y los tiempos acordados.",
    imageUrl: "/dna/dna_4.webp", // Replace with actual image path
  },
];

export const ODS_GOALS: SDGGoal[] = [
  {
    number: 1,
    title: ["Fin de la", "pobreza"],
    color: "#ea5163", // Red
    svgUrl: "/ods/ods-1.svg",
  },
  {
    number: 6,
    title: ["Agua limpia y", "saneamiento"],
    color: "#4dbde3", // Light Blue
    svgUrl: "/ods/ods-2.svg",
  },
  {
    number: 10,
    title: ["Reducción", "de las", "desigualdades"],
    color: "#eb5599", // Magenta / Pink
    svgUrl: "/ods/ods-3.svg",
  },
  {
    number: 11,
    title: ["Ciudades y", "comunidades", "sostenibles"],
    color: "#f39733", // Orange
    svgUrl: "/ods/ods-4.svg",
  },
  {
    number: 12,
    title: ["Producción", "y consumo", "responsable"],
    color: "#f39733", // Mustard yellow
    svgUrl: "/ods/ods-5.svg",
  },
  {
    number: 13,
    title: ["Acción por", "el clima"],
    color: "#408848", // Dark Green
    svgUrl: "/ods/ods-6.svg",
  },
  {
    number: 15,
    title: ["Vida de", "ecosistemas", "terrestres"],
    color: "#55ae47", // Green
    svgUrl: "/ods/ods-7.svg",
  },
];

export const TEAM = [
  { name: "Javier Niebles", position: "CEO", imageUrl: "/team/javier.webp" },
  {
    name: "Maribel Soler",
    position: "Gerente Comercial",
    imageUrl: "/team/maribel.webp",
  },
  {
    name: "Marisol Duarte",
    position: "Consultora Comercial",
    imageUrl: "/team/marisol.webp",
  },
];

export const SERVICES = [
  {
    title: "Diseño y ejecución de proyectos arquitectónicos",
    icon: "/services/services-1.svg",
  },
  {
    title: "Renovación de espacios",
    icon: "/services/services-2.svg",
  },
  {
    title: "Asesoría en normativa urbana y gestión social",
    icon: "/services/services-3.svg",
  },
  {
    title: "Automatización y domótica",
    icon: "/services/services-4.svg",
  },
  {
    title: "Impermeabilización y trabajos en altura",
    icon: "/services/services-5.svg",
  },
  {
    title: "Señalización industrial",
    icon: "/services/services-6.svg",
  },
];

export const PROJECTS = [
  {
    title: "Parroquia Jesucristo Redentor",
    imageUrl: "/projects/parroquia.webp",
  },
  {
    title: "Deloing Zona Franca",
    imageUrl: "/projects/deloing.webp",
  },
  {
    title: "Diverplaza",
    imageUrl: "/projects/diverplaza.webp",
  },
];

export const SOCIALS = [
  {
    name: "Tiktok",
    icon: "/social/tiktok.svg",
    link: "https://twitter.com/Arquitectonos",
  },
  {
    name: "Instagram",
    icon: "/social/ig.svg",
    link: "https://www.instagram.com/arquitectonos/",
  },
  {
    name: "Linkedin",
    icon: "/social/in.svg",
    link: "https://www.linkedin.com/company/arquitectonos/",
  },
  {
    name: "Facebook",
    icon: "/social/fb.svg",
    link: "https://www.linkedin.com/company/arquitectonos/",
  },
];

export const MENU = [
  {
    name: "Inicio",
    link: "home",
  },
  {
    name: "Nosotros",
    link: "nosotros",
  },
  {
    name: "Servicios",
    link: "servicios",
  },
  {
    name: "Proyectos",
    link: "proyectos",
  },
  {
    name: "Contáctanos",
    link: "contactanos",
  },
];

export const HOME_SLIDER = [
  { mobile: "/home/banner-mobile-01.jpg", desktop: "/home/banner-01.jpg" },
  { mobile: "/home/banner-mobile-02.jpg", desktop: "/home/banner-02.jpg" },
  { mobile: "/home/banner-mobile-03.jpg", desktop: "/home/banner-03.jpg" },
];
