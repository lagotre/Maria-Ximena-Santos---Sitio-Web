export interface Testimonial {
  id: string;
  quote: string;
  quoteEn: string;
  name: string;
  title: string;
  titleEn: string;
  company: string;
  sector: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '01',
    quote:
      'Maria Ximena tiene la capacidad única de abrir conversaciones que las organizaciones llevan años evitando. Su metodología nos ayudó a alinear a nuestro equipo directivo en torno a una visión compartida en menos tiempo del que esperábamos. No es una facilitadora de metodologías; es alguien que entiende profundamente cómo funcionan las organizaciones.',
    quoteEn:
      'Maria Ximena has the unique ability to open conversations that organizations have been avoiding for years. Her methodology helped us align our executive team around a shared vision in less time than we expected. She is not a methodology facilitator; she is someone who deeply understands how organizations work.',
    name: 'Carlos Mendoza',
    title: 'Director de Innovación',
    titleEn: 'Director of Innovation',
    company: 'Empresa del sector energético',
    sector: 'Energía',
  },
  {
    id: '02',
    quote:
      'Lo que más valoro de trabajar con ella es la combinación de rigor metodológico y sensibilidad humana real. No es una consultora de PowerPoints que llega con una fórmula. Llega con preguntas. Y esas preguntas cambian la conversación. Llevamos tres años trabajando juntos en procesos de transformación y cada vez el proceso se vuelve más preciso.',
    quoteEn:
      'What I value most about working with her is the combination of methodological rigor and genuine human sensitivity. She is not a PowerPoint consultant who arrives with a formula. She arrives with questions. And those questions change the conversation. We have been working together for three years on transformation processes and each time the process becomes more precise.',
    name: 'Claudia Restrepo',
    title: 'CEO',
    titleEn: 'CEO',
    company: 'Empresa del sector retail',
    sector: 'Retail',
  },
  {
    id: '03',
    quote:
      'Facilitó un proceso de LEGO® Serious Play con nuestro comité directivo que generó más claridad estratégica en dos días que seis meses de reuniones convencionales. Lo que me sorprendió no fue la metodología — fue su capacidad para leer la sala y llevar la conversación exactamente a donde necesitaba estar. Eso no se aprende en un libro.',
    quoteEn:
      'She facilitated a LEGO® Serious Play process with our executive committee that generated more strategic clarity in two days than six months of conventional meetings. What surprised me was not the methodology — it was her ability to read the room and take the conversation exactly where it needed to be. That is not learned from a book.',
    name: 'Andrés Villegas',
    title: 'VP de Recursos Humanos',
    titleEn: 'VP of Human Resources',
    company: 'Empresa multinacional',
    sector: 'Multinacional',
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
