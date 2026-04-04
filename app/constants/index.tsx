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
    color: "#ea5163",
    svgUrl: "/ods/ods-1.svg",
  },
  {
    number: 5,
    title: ["Igualdad", "de género"],
    color: "#e74730",
    svgUrl: "/ods/ods-8.svg",
  },
  {
    number: 8,
    title: ["Trabajo", "decente y", "crecimiento", "económico"],
    color: "#b43842",
    svgUrl: "/ods/ods-9.svg",
  },
  {
    number: 9,
    title: ["Industria,", "innovación e", "infraestructura"],
    color: "#ea5631",
    svgUrl: "/ods/ods-10.svg",
  },
  {
    number: 6,
    title: ["Agua limpia y", "saneamiento"],
    color: "#4dbde3",
    svgUrl: "/ods/ods-2.svg",
  },
  {
    number: 10,
    title: ["Reducción", "de las", "desigualdades"],
    color: "#eb5599",
    svgUrl: "/ods/ods-3.svg",
  },
  {
    number: 11,
    title: ["Ciudades y", "comunidades", "sostenibles"],
    color: "#f39733",
    svgUrl: "/ods/ods-4.svg",
  },
  {
    number: 12,
    title: ["Producción", "y consumo", "responsable"],
    color: "#f39733",
    svgUrl: "/ods/ods-5.svg",
  },
  {
    number: 13,
    title: ["Acción por", "el clima"],
    color: "#408848",
    svgUrl: "/ods/ods-6.svg",
  },
  {
    number: 15,
    title: ["Vida de", "ecosistemas", "terrestres"],
    color: "#55ae47",
    svgUrl: "/ods/ods-7.svg",
  },
];

export const TEAM = [
  { name: "Javier Niebles", position: "CEO", imageUrl: "/team/javier.webp" },
  {
    name: "Maribel Soler",
    position: "Gerente Comercial",
    imageUrl: "/team/maribel.webp",
  }
];

export const SERVICES = [
  {
    title: "Diseño y ejecución de proyectos arquitectónicos",
    slug: "diseno-ejecucion-proyectos",
    icon: "/services/services-1.svg",
    description:
      "Convertimos tu visión en estructuras reales. Desde el diseño conceptual hasta la entrega de llaves, acompañamos cada etapa con precisión técnica y sensibilidad estética.",
  },
  {
    title: "Renovación de espacios",
    slug: "renovacion-espacios",
    icon: "/services/services-2.svg",
    description:
      "Transformamos espacios existentes con intervenciones que maximizan la funcionalidad, la estética y el valor de tu propiedad, respetando su esencia original.",
  },
  {
    title: "Asesoría en normativa urbana y gestión social",
    slug: "asesoria-normativa-urbana",
    icon: "/services/services-3.svg",
    description:
      "Navegamos contigo el marco regulatorio urbano, asegurando que cada proyecto cumpla la normativa vigente y genere un impacto positivo en la comunidad.",
  },
  {
    title: "Automatización y domótica",
    slug: "automatizacion-domotica",
    icon: "/services/services-4.svg",
    description:
      "Integramos tecnología inteligente en tus espacios: control de iluminación, accesos, climatización y seguridad desde cualquier dispositivo, en cualquier lugar.",
  },
  {
    title: "Impermeabilización y trabajos en altura",
    slug: "impermeabilizacion-trabajos-altura",
    icon: "/services/services-5.svg",
    description:
      "Protegemos tus estructuras con soluciones técnicas de impermeabilización e intervenimos de forma segura en trabajos de difícil acceso y gran altura.",
  },
  {
    title: "Señalización industrial",
    slug: "senalizacion-industrial",
    icon: "/services/services-6.svg",
    description:
      "Diseñamos e instalamos sistemas de señalización que garantizan seguridad, orientación y cumplimiento normativo en entornos industriales y comerciales.",
  },
];

export const PROJECTS = [
  {
    title: "Parroquia Jesucristo Redentor",
    slug: "parroquia-jesucristo-redentor",
    imageUrl: "/projects/parroquia.webp",
    category: "Arquitectura Religiosa",
    year: "2023",
    location: "Bogotá, Colombia",
    description:
      "Restauración y ampliación de un templo emblemático, integrando elementos contemporáneos que preservan la identidad espiritual y la riqueza arquitectónica del lugar.",
    featured: true,
    area: "850 m²",
    executionTime: "14 meses",
    budget: "Institucional",
    challenge:
      "La estructura original presentaba deterioro significativo y carecía de espacios adecuados para las actividades pastorales de una comunidad en crecimiento. El reto era intervenir sin alterar el carácter sagrado del lugar ni interrumpir los servicios religiosos durante la obra.",
    intervention:
      "Desarrollamos un plan por fases que mantuvo los servicios activos durante la construcción. Reforzamos la estructura existente, ampliamos la nave central y diseñamos un atrio contemporáneo que dialoga con la arquitectura original, incorporando luz natural como elemento espiritual central.",
    sustainability: [
      "Materiales de construcción de origen regional",
      "Sistema de captación de aguas lluvias",
      "Iluminación LED de bajo consumo en todo el recinto",
    ],
    quote:
      "Cada espacio sagrado es una oportunidad para elevar el espíritu a través de la luz, la proporción y el silencio arquitectónico.",
  },
  {
    title: "Deloing Zona Franca",
    slug: "deloing-zona-franca",
    imageUrl: "/projects/deloing.webp",
    category: "Arquitectura Corporativa",
    year: "2023",
    location: "Bogotá, Colombia",
    description:
      "Diseño de espacios corporativos funcionales y eficientes en una de las zonas de mayor actividad empresarial de la capital colombiana.",
    featured: false,
    area: "2.400 m²",
    executionTime: "10 meses",
    budget: "Corporativo",
    challenge:
      "El cliente requería un espacio que reflejara la identidad de una empresa global, optimizando los flujos de trabajo y adaptando la infraestructura a los estándares internacionales de zona franca, sin interrumpir las operaciones del negocio durante la intervención.",
    intervention:
      "Diseñamos una distribución abierta con zonas modulares que permiten configuraciones flexibles. Incorporamos materiales de alta durabilidad y sistemas de climatización eficiente, logrando un ambiente que equilibra productividad y bienestar para los colaboradores.",
    sustainability: [
      "Sistemas de climatización de alta eficiencia energética",
      "Fachadas con control solar integrado",
      "Gestión certificada de residuos de construcción",
    ],
    quote:
      "Los espacios corporativos más efectivos son aquellos que inspiran a quien trabaja en ellos, sin que lo perciban conscientemente.",
  },
  {
    title: "Diverplaza",
    slug: "diverplaza",
    imageUrl: "/projects/diverplaza.webp",
    category: "Diseño Comercial",
    year: "2022",
    location: "Bogotá, Colombia",
    description:
      "Concepto visual dinámico para un espacio de entretenimiento y comercio, maximizando la experiencia del visitante con un diseño atractivo y funcional.",
    featured: false,
    area: "3.800 m²",
    executionTime: "6 meses",
    budget: "Comercial",
    challenge:
      "El espacio necesitaba diferenciarse en un mercado saturado de propuestas comerciales convencionales, creando una experiencia memorable que incentivara la permanencia y el retorno de visitantes de distintos perfiles.",
    intervention:
      "Creamos un concepto de experiencia total que integra circulación lúdica, señalética de marca y materialidad contrastante. Cada zona fue diseñada para generar un estado de ánimo específico, guiando intuitivamente al visitante a través del recorrido comercial.",
    sustainability: [
      "Materiales reciclados en el 40% de los acabados",
      "Iluminación LED con sensores de presencia",
      "Áreas verdes integradas en corredores de circulación",
    ],
    quote:
      "El comercio más exitoso no vende productos, vende experiencias. El diseño es el primer vendedor.",
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
    link: "https://www.facebook.com/company/arquitectonos/",
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


const BOTTOM_LEFT = 'bottom-0 left-1/2 transform -translate-x-1/2';
const TOP_LEFT = 'top-0 left-1/2 transform -translate-x-1/2';
const CENTER = 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-max text-center';


export const HOME_SLIDER = [
  {
    desktop: "/banner/desktop/banner-01.jpg", mobile: "/banner/mobile/banner-mobile-01.png",
    text: (<>
      ¡Construyendo,
      <br /> <strong>sueños</strong>
      <br /> transformando
      <br /> <strong>realidades!</strong>
    </>),
    position: BOTTOM_LEFT,
    color: "text-white",
  },
  {
    desktop: "/banner/desktop/banner-02.jpg", mobile: "/banner/mobile/banner-mobile-02.png",
    text: (<>
      Asesoramos y gestionamos
      <br /> tu proyecto de principio a fin
      <br /> <strong>¡Déjalo en nuestras manos!</strong>
    </>),
    position: TOP_LEFT,
    color: "text-navy-blue",
    smallText: true
  },
  {
    desktop: "/banner/desktop/banner-03.jpg", mobile: "/banner/mobile/banner-mobile-03.png",
    text: (<>
      <strong>¡El futuro del planeta nos importa!</strong>
    </>),
    position: CENTER,
    color: "text-white",
  },
];
