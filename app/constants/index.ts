type ValueItem = {
  title: string;
  subtitle: string;
  content: string;
  imageUrl: string;
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

type SDGGoal = {
  number: number;
  title: string;
  description: string;
  color: string;
  svgUrl: string;
};

export const ODS_GOALS: SDGGoal[] = [
  {
    number: 1,
    title: "Fin de la pobreza",
    description: "Eliminar la pobreza en todas sus formas en todo el mundo.",
    color: "#e5243b", // Red
    svgUrl: "/ods/ods-1.svg",
  },
  {
    number: 6,
    title: "Agua limpia y saneamiento",
    description:
      "Garantizar la disponibilidad y la gestión sostenible del agua.",
    color: "#26bde2", // Light Blue
    svgUrl: "/ods/ods-2.svg",
  },
  {
    number: 10,
    title: "Reducción de las desigualdades",
    description: "Reducir la desigualdad en y entre los países.",
    color: "#dd1367", // Magenta / Pink
    svgUrl: "/ods/ods-3.svg",
  },
  {
    number: 11,
    title: "Ciudades y comunidades sostenibles",
    description:
      "Lograr que las ciudades sean inclusivas, seguras, resilientes y sostenibles.",
    color: "#fd9d24", // Orange
    svgUrl: "/ods/ods-4.svg",
  },
  {
    number: 12,
    title: "Producción y consumo responsable",
    description: "Garantizar modalidades de consumo y producción sostenibles.",
    color: "#bf8b2e", // Mustard yellow
    svgUrl: "/ods/ods-5.svg",
  },
  {
    number: 13,
    title: "Acción por el clima",
    description: "Adoptar medidas urgentes para combatir el cambio climático.",
    color: "#3f7e44", // Dark Green
    svgUrl: "/ods/ods-6.svg",
  },
  {
    number: 15,
    title: "Vida de ecosistemas terrestres",
    description:
      "Gestionar sosteniblemente los bosques, luchar contra la desertificación, y detener la pérdida de biodiversidad.",
    color: "#56c02b", // Green
    svgUrl: "/ods/ods-7.svg",
  },
];
