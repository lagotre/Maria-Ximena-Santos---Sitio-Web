export interface Testimonial {
  id: string;
  quote: string;
  quoteEn: string;
  name: string;
  title: string;
  titleEn: string;
  company: string;
  sector: string;
  featured: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: '01',
    quote:
      'Su energía contagiosa, su enfoque humano y su capacidad para movilizar equipos hacia resultados extraordinarios la han consolidado como una conferencista y facilitadora de alto impacto. Está certificada en metodologías creativas, lo que potencia su habilidad para diseñar experiencias de aprendizaje memorables, en las que combina teoría, práctica y emoción de forma magistral. Con un estilo cercano y retador, promueve culturas de liderazgo consciente, innovación colaborativa y empoderamiento personal, siendo una voz clave en el impulso de nuevas formas de pensar y actuar en entornos de alta complejidad.',
    quoteEn:
      'Her contagious energy, human approach, and ability to mobilize teams toward extraordinary results have established her as a high-impact speaker and facilitator. She is certified in creative methodologies, which enhances her ability to design memorable learning experiences, combining theory, practice, and emotion masterfully. With a close and challenging style, she promotes cultures of conscious leadership, collaborative innovation, and personal empowerment.',
    name: 'Nel Martinez',
    title: 'Inspiración',
    titleEn: 'Inspiration',
    company: '',
    sector: 'Liderazgo',
    featured: true,
  },
  {
    id: '02',
    quote:
      'Muy buen manejo de la audiencia y conocimiento del tema, todos quedamos muy agradecidos y contentos con el taller.',
    quoteEn:
      'Very good audience management and knowledge of the subject — we were all very grateful and happy with the workshop.',
    name: 'Lina Rendón',
    title: 'Jefe de Mercadeo',
    titleEn: 'Head of Marketing',
    company: 'INFOTRACK',
    sector: 'Tecnología',
    featured: false,
  },
  {
    id: '03',
    quote:
      'Disfruto las sesiones de coaching con Maria Ximena, he visto los resultados positivos durante el proceso en las áreas que hemos trabajado.',
    quoteEn:
      'I enjoy the coaching sessions with Maria Ximena. I have seen positive results throughout the process in the areas we have worked on.',
    name: 'Sandra Rubiano',
    title: 'Gerente de Producto',
    titleEn: 'Product Manager',
    company: 'Laboratorios Legrand',
    sector: 'Farmacéutico',
    featured: true,
  },
  {
    id: '04',
    quote:
      'Ximena aporta desde su conocimiento y desde su ser, abriendo nuevas perspectivas!!',
    quoteEn:
      'Ximena contributes from her knowledge and her being, opening new perspectives!',
    name: 'Olga de Pérez',
    title: 'Conexión Vital',
    titleEn: 'Conexión Vital',
    company: 'Conexión Vital',
    sector: 'Bienestar',
    featured: false,
  },
  {
    id: '05',
    quote:
      'María Ximena es una profesional estructurada, con gran experiencia en el sector real lo que hace que sus procesos de asesoría lleguen a objetivos concretos y aplicables.',
    quoteEn:
      'María Ximena is a structured professional with extensive experience in the real sector, which means her advisory processes lead to concrete and applicable objectives.',
    name: 'Beatriz Cabrera Franco',
    title: 'Gerente de Marketing Digital',
    titleEn: 'Digital Marketing Manager',
    company: 'Legrand',
    sector: 'Tecnología',
    featured: true,
  },
  {
    id: '06',
    quote:
      'Su experiencia como empresaria, aporta a las instituciones no solo conocimiento y creatividad, a la hora de sortear los diferentes retos de ser empresarios, sino la determinación con la que se debe trabajar para cumplir con los objetivos de la empresa.',
    quoteEn:
      'Her experience as an entrepreneur brings to institutions not only knowledge and creativity when navigating the challenges of being business owners, but also the determination with which one must work to achieve company objectives.',
    name: 'Bibiana González',
    title: 'Presidenta',
    titleEn: 'President',
    company: 'Práctica Privada Colombia',
    sector: 'Salud',
    featured: false,
  },
  {
    id: '07',
    quote:
      'Eres un gran profesional y una persona increíble. Tu trabajo es impresionante.',
    quoteEn:
      'You are a great professional and an incredible person. Your work is impressive.',
    name: 'Carol Peña',
    title: 'Coordinadora de Desarrollo Empresarial y Convenios',
    titleEn: 'Business Development & Agreements Coordinator',
    company: 'ANDIGRAF',
    sector: 'Industria',
    featured: false,
  },
  {
    id: '08',
    quote:
      'María Ximena es una gran formadora haciendo ver la innovación de manera sencilla.',
    quoteEn:
      'María Ximena is a great trainer who makes innovation look simple.',
    name: 'Andrés Gallo',
    title: 'Gerente de Innovación',
    titleEn: 'Innovation Manager',
    company: 'Skandia',
    sector: 'Finanzas',
    featured: false,
  },
  {
    id: '09',
    quote:
      'Tuve el privilegio de conocer a Ximena en su rol como consultora en Design Thinking e Innovación, y puedo decir con total certeza que es una profesional excepcional. Durante un taller realizado en Yanuba, Ximena demostró una visión estratégica y creatividad sobresaliente, cualidades que no solo enriquecieron cada fase del taller, sino que también inspiraron al equipo a pensar más allá de lo convencional. Su capacidad para identificar oportunidades de mejora, liderar sesiones colaborativas y traducir ideas en soluciones concretas y viables fue clave para alcanzar los objetivos propuestos.',
    quoteEn:
      'I had the privilege of meeting Ximena in her role as a Design Thinking and Innovation consultant, and I can say with total certainty that she is an exceptional professional. During a workshop held at Yanuba, Ximena demonstrated outstanding strategic vision and creativity — qualities that not only enriched every phase of the workshop but also inspired the team to think beyond the conventional.',
    name: 'Luz Angelica Villegas Osorio',
    title: 'Yanuba',
    titleEn: 'Yanuba',
    company: 'Yanuba',
    sector: 'Consultoría',
    featured: false,
  },
  {
    id: '10',
    quote:
      'Tuve el privilegio de comenzar mi carrera profesional bajo la mentoría de María Ximena, y no puedo imaginar una mejor guía en mis primeros pasos laborales. Es una mujer y ser humano excepcional, con una visión estratégica, clara y profundamente humana que lleva cualquier proyecto al siguiente nivel. María Ximena combina estructura, creatividad y una capacidad única para anticiparse a lo que un equipo necesita. Su liderazgo orientado a las personas no solo logra resultados concretos, sino que genera confianza, crecimiento y un ambiente de trabajo inspirador.',
    quoteEn:
      'I had the privilege of beginning my professional career under María Ximena\'s mentorship, and I cannot imagine a better guide for my first steps in the workforce. She is an exceptional woman and human being, with a strategic, clear, and deeply human vision that takes any project to the next level.',
    name: 'Keity Frysz',
    title: 'Key Account Director — Experiential Marketing',
    titleEn: 'Key Account Director — Experiential Marketing',
    company: '',
    sector: 'Marketing',
    featured: false,
  },
];

export interface CaseStudy {
  id: string;
  client: string;
  sector: string;
  challenge: string;
  challengeEn: string;
  process: string;
  processEn: string;
  result: string;
  resultEn: string;
  tags: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'enel',
    client: 'Enel Colombia',
    sector: 'Energía',
    challenge:
      'Rediseñar la experiencia interna de gestión de proyectos de energía renovable, con equipos distribuidos en múltiples regiones.',
    challengeEn:
      'Redesign the internal project management experience for renewable energy projects, with teams distributed across multiple regions.',
    process:
      'Proceso de co-creación con equipos multifuncionales. Cuatro talleres de Design Thinking, mapeo de experiencias internas y prototipado de nuevos flujos de trabajo.',
    processEn:
      'Co-creation process with cross-functional teams. Four Design Thinking workshops, internal experience mapping, and prototyping of new workflows.',
    result:
      'Tres nuevos prototipos de proceso implementados en un plazo de seis meses. Reducción del 30% en fricción de coordinación entre equipos.',
    resultEn:
      'Three new process prototypes implemented within six months. 30% reduction in coordination friction between teams.',
    tags: ['Design Thinking', 'Co-creación', 'Procesos Internos'],
  },
  {
    id: 'procolombia',
    client: 'ProColombia',
    sector: 'Promoción Internacional',
    challenge:
      'Desarrollar capacidades de innovación y co-creación en equipos de promoción internacional en múltiples sedes del país.',
    challengeEn:
      'Develop innovation and co-creation capabilities in international promotion teams across multiple offices nationwide.',
    process:
      'Programa de desarrollo de capacidades en 4 ciudades. Talleres de LEGO® Serious Play, facilitación de Design Thinking y sesiones de alineación estratégica regional.',
    processEn:
      'Capability development program in 4 cities. LEGO® Serious Play workshops, Design Thinking facilitation, and regional strategic alignment sessions.',
    result:
      'Nueva metodología de co-creación instalada en cuatro sedes. Equipo interno capacitado para facilitar procesos propios.',
    resultEn:
      'New co-creation methodology installed in four offices. Internal team trained to facilitate their own processes.',
    tags: ['LEGO® Serious Play', 'Desarrollo de Capacidades', 'Alineación'],
  },
  {
    id: 'claro',
    client: 'Claro Colombia',
    sector: 'Telecomunicaciones',
    challenge:
      'Construir una cultura de innovación en el área de transformación digital, con más de 40 líderes de distintas áreas de la organización.',
    challengeEn:
      'Build an innovation culture in the digital transformation area, with more than 40 leaders from different areas of the organization.',
    process:
      'Proceso de facilitación en tres etapas: diagnóstico de cultura, talleres de alineación y construcción participativa del roadmap de innovación.',
    processEn:
      'Three-stage facilitation process: culture diagnosis, alignment workshops, and participatory construction of the innovation roadmap.',
    result:
      'Roadmap de innovación construido con participación de más de 40 líderes. Tres iniciativas estratégicas priorizadas con equipos asignados y compromisos concretos.',
    resultEn:
      'Innovation roadmap built with participation from more than 40 leaders. Three strategic initiatives prioritized with assigned teams and concrete commitments.',
    tags: ['Transformación Cultural', 'Facilitación', 'Roadmap de Innovación'],
  },
];
