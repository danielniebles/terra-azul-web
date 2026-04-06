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
    longDescription:
      "Nuestro proceso integral parte del levantamiento de necesidades y la definición del programa arquitectónico, pasando por el diseño conceptual, los planos de construcción y los permisos de obra, hasta la supervisión técnica en sitio y la entrega final. Trabajamos con herramientas de modelado BIM que nos permiten anticipar problemas, optimizar costos y garantizar que cada decisión de diseño sea técnicamente viable antes de ejecutarla.",
    benefits: [
      "Diseño conceptual y planos arquitectónicos completos",
      "Gestión de licencias y permisos de construcción",
      "Modelado BIM para visualización previa a la obra",
      "Supervisión técnica durante toda la ejecución",
      "Entrega con acta de obra y garantía post-construcción",
      "Coordinación de todas las especialidades (estructura, instalaciones, acabados)",
    ],
    images: ["atlantis-raso-desmonte.jpg", "atlantis-raso.jpg", "drywall.jpg", "pintura.jpg"] as string[],
  },
  {
    title: "Renovación de espacios",
    slug: "renovacion-espacios",
    icon: "/services/services-2.svg",
    description:
      "Transformamos espacios existentes con intervenciones que maximizan la funcionalidad, la estética y el valor de tu propiedad, respetando su esencia original.",
    longDescription:
      "La renovación de espacios requiere un diagnóstico preciso del estado actual y una visión clara de lo que se quiere lograr. En Terra Azul evaluamos la estructura, las instalaciones y los acabados existentes para proponer intervenciones que generen el mayor impacto con el menor riesgo. Nos especializamos en cocinas, baños, espacios corporativos, locales comerciales y viviendas, aplicando materiales y soluciones contemporáneas que elevan la calidad del espacio sin necesidad de demoliciones innecesarias.",
    benefits: [
      "Diagnóstico estructural y de instalaciones previo a la intervención",
      "Diseño de interiores con selección de materiales y acabados",
      "Remodelación de cocinas, baños y espacios sociales",
      "Adecuación de locales comerciales y oficinas",
      "Instalación de pisos, cielos rasos, carpintería y pintura",
      "Entrega con garantía de mano de obra y materiales",
    ],
    images: ["bbq-801.jpg", "cocina-513.jpeg", "cocina-801.JPG", "deloing-oficina-antes.JPG", "deloing-oficina-despues.JPG"] as string[],
  },
  {
    title: "Asesoría en normativa urbana y gestión social",
    slug: "asesoria-normativa-urbana",
    icon: "/services/services-3.svg",
    description:
      "Navegamos contigo el marco regulatorio urbano, asegurando que cada proyecto cumpla la normativa vigente y genere un impacto positivo en la comunidad.",
    longDescription:
      "Entender y aplicar correctamente las normas urbanas es determinante para la viabilidad de cualquier proyecto constructivo. Nuestro equipo analiza el Plan de Ordenamiento Territorial (POT), los usos del suelo, los índices de construcción y las normas de sismo-resistencia aplicables a cada predio. Adicionalmente, acompañamos procesos de gestión social con comunidades y entidades públicas, facilitando la aprobación de proyectos que involucran impacto en el entorno urbano o social.",
    benefits: [
      "Análisis de norma urbana y viabilidad del predio",
      "Elaboración y radicación de licencias de construcción",
      "Gestión ante curadurías urbanas y entidades distritales",
      "Consultoría en norma sismo-resistente (NSR-10)",
      "Acompañamiento en procesos de socialización comunitaria",
      "Conceptos técnicos y respuesta a requerimientos de entidades",
    ],
    images: [] as string[],
  },
  {
    title: "Automatización y domótica",
    slug: "automatizacion-domotica",
    icon: "/services/services-4.svg",
    description:
      "Integramos tecnología inteligente en tus espacios: control de iluminación, accesos, climatización y seguridad desde cualquier dispositivo, en cualquier lugar.",
    longDescription:
      "La domótica transforma cualquier inmueble en un espacio inteligente, eficiente y seguro. Diseñamos e instalamos sistemas integrados que centralizan el control de iluminación, climatización, acceso vehicular y peatonal, sistemas de alarma y videovigilancia. Trabajamos con plataformas abiertas y compatibles con los principales ecosistemas del mercado (Google Home, Amazon Alexa, Apple HomeKit), garantizando que la tecnología se adapte a tu estilo de vida y no al revés.",
    benefits: [
      "Automatización de iluminación por zonas y horarios",
      "Control de accesos: puertas, portones y barreras vehiculares",
      "Integración de cámaras de seguridad y alarmas",
      "Control de climatización y gestión de energía",
      "Compatibilidad con Google Home, Alexa y Apple HomeKit",
      "Soporte técnico y mantenimiento preventivo",
    ],
    images: [] as string[],
  },
  {
    title: "Impermeabilización y trabajos en altura",
    slug: "impermeabilizacion-trabajos-altura",
    icon: "/services/services-5.svg",
    description:
      "Protegemos tus estructuras con soluciones técnicas de impermeabilización e intervenimos de forma segura en trabajos de difícil acceso y gran altura.",
    longDescription:
      "Las filtraciones y humedades son una de las causas más frecuentes de deterioro estructural en edificaciones. En Terra Azul aplicamos sistemas de impermeabilización de alta tecnología para cubiertas, terrazas, sótanos, muros de contención y fachadas, usando membranas asfálticas, poliuretanos y recubrimientos cristalizantes según las condiciones de cada superficie. Para intervenciones en altura, contamos con personal certificado en trabajo en alturas y equipos de descenso controlado, garantizando la seguridad en cada operación.",
    benefits: [
      "Diagnóstico de filtraciones y humedad estructural",
      "Impermeabilización de cubiertas planas e inclinadas",
      "Tratamiento de sótanos, muros y fachadas",
      "Aplicación de membranas asfálticas y poliuretanos",
      "Personal certificado en trabajo seguro en alturas",
      "Garantía de impermeabilidad por escrito",
    ],
    images: ["impermeabilizacion.jpg", "obra-seca.jpg", "policarbonato-801.JPG"] as string[],
  },
  {
    title: "Señalización industrial",
    slug: "senalizacion-industrial",
    icon: "/services/services-6.svg",
    description:
      "Diseñamos e instalamos sistemas de señalización que garantizan seguridad, orientación y cumplimiento normativo en entornos industriales y comerciales.",
    longDescription:
      "Una señalización adecuada no solo es una obligación legal; es una herramienta de seguridad que protege a las personas y activos de una organización. Diseñamos sistemas de señalización visual que integran normas NTC e ISO, señales de evacuación, identificación de riesgos, demarcación de áreas y señalización de tráfico interno para plantas industriales, bodegas, centros comerciales y edificios de oficinas. Cada proyecto incluye un diagnóstico de riesgos y un plano de señalización aprobado por el área de seguridad y salud en el trabajo.",
    benefits: [
      "Diagnóstico de riesgos y levantamiento de señalización existente",
      "Diseño de sistema de señalización conforme NTC e ISO",
      "Señales de evacuación, emergencia e identificación de riesgos",
      "Demarcación de áreas y vías internas de circulación",
      "Señalización de tráfico para plantas y bodegas",
      "Entrega con planos record y manual de mantenimiento",
    ],
    images: ["bodega-senalizacion-1.JPEG", "bodega-senalizacion-2.jpg", "bodega-senalizacion.jpeg"] as string[],
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
    link: "https://www.tiktok.com/@terra.azul1",
  },
  {
    name: "Instagram",
    icon: "/social/ig.svg",
    link: "https://www.instagram.com/terraazul.co/",
  },
  {
    name: "Linkedin",
    icon: "/social/in.svg",
    link: "https://www.linkedin.com/in/terra-azul-8381a1106/",
  }
];

export const MENU = [
  {
    name: "Inicio",
    link: "home",
    href: "/",
  },
  {
    name: "Nosotros",
    link: "nosotros",
  },
  {
    name: "Servicios",
    href: "/servicios",
  },
  {
    name: "Proyectos",
    href: "/proyectos",
  },
  {
    name: "Contáctanos",
    link: "contactanos",
  },
];


const BOTTOM_LEFT = 'bottom-0 left-1/2 transform -translate-x-1/2';
//const TOP_LEFT = 'top-0 left-1/2 transform -translate-x-1/2';
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
    position: CENTER,
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
