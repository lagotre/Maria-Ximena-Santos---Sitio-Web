export interface Service {
  id: string;
  icon: string;
  title: string;
  titleEn: string;
  shortDescription: string;
  shortDescriptionEn: string;
  description: string;
  descriptionEn: string;
  audience: string;
  audienceEn: string;
  methodologies: string[];
  methodologiesEn: string[];
  featured: boolean;
}

export const services: Service[] = [
  {
    id: 'coaching-empresarial',
    icon: 'Briefcase',
    title: 'Coaching Empresarial',
    titleEn: 'Business Coaching',
    shortDescription: 'Fortalece el liderazgo y potencia el crecimiento estratégico de tu organización.',
    shortDescriptionEn: 'Strengthen leadership and drive strategic growth in your organization.',
    description:
      'Un proceso intensivo orientado al crecimiento estratégico organizacional mediante el fortalecimiento del liderazgo. Desarrollamos equipos de alto rendimiento, mejoramos la toma de decisiones, optimizamos procesos y preparamos líderes para gestionar el cambio con visión global.',
    descriptionEn:
      'An intensive process oriented toward organizational strategic growth through leadership strengthening. We develop high-performance teams, improve decision-making, optimize processes, and prepare leaders to manage change with global vision.',
    audience: 'Directivos, gerentes medios y profesionales en desarrollo',
    audienceEn: 'Directors, middle managers, and developing professionals',
    methodologies: ['Liderazgo Estratégico', 'Equipos de Alto Rendimiento', 'Gestión del Cambio', 'Pensamiento Sistémico'],
    methodologiesEn: ['Strategic Leadership', 'High-Performance Teams', 'Change Management', 'Systems Thinking'],
    featured: true,
  },
  {
    id: 'coaching-emprendimiento',
    icon: 'Rocket',
    title: 'Coaching de Emprendimiento',
    titleEn: 'Entrepreneurship Coaching',
    shortDescription: 'De la idea innovadora al negocio sostenible y rentable.',
    shortDescriptionEn: 'From innovative idea to a sustainable, profitable business.',
    description:
      'Acompañamos a emprendedores en la conversión de ideas innovadoras en negocios sostenibles y rentables. Trabajamos desde 8 pilares: Rendimiento, Innovación, Creatividad, Actitud positiva, Originalidad, Liderazgo, Gestión empresarial y Aprendizaje continuo.',
    descriptionEn:
      'We accompany entrepreneurs in converting innovative ideas into sustainable, profitable businesses. We work from 8 pillars: Performance, Innovation, Creativity, Positive attitude, Originality, Leadership, Business management, and Continuous learning.',
    audience: 'Emprendedores, fundadores y líderes de startups',
    audienceEn: 'Entrepreneurs, founders, and startup leaders',
    methodologies: ['Visión Estratégica', 'Modelos de Negocio', 'Gestión Empresarial', 'Innovación Aplicada'],
    methodologiesEn: ['Strategic Vision', 'Business Models', 'Business Management', 'Applied Innovation'],
    featured: true,
  },
  {
    id: 'innovation-workshops',
    icon: 'Lightbulb',
    title: 'Talleres de Innovación Estratégica',
    titleEn: 'Strategic Innovation Workshops',
    shortDescription: 'Del diagnóstico a la acción. Ideas concretas con equipos directivos.',
    shortDescriptionEn: 'From diagnosis to action. Concrete ideas with executive teams.',
    description:
      'Facilitamos espacios donde los equipos directivos exploran oportunidades, generan ideas concretas y diseñan rutas de acción. No teoría — conversaciones que producen resultados tangibles y compromisos reales.',
    descriptionEn:
      'We facilitate spaces where executive teams explore opportunities, generate concrete ideas, and design action paths. Not theory — conversations that produce tangible results and real commitments.',
    audience: 'CEOs, equipos de innovación, líderes de transformación',
    audienceEn: 'CEOs, innovation teams, transformation leaders',
    methodologies: ['Design Thinking', 'Design Sprint', 'Lean Innovation'],
    methodologiesEn: ['Design Thinking', 'Design Sprint', 'Lean Innovation'],
    featured: true,
  },
  {
    id: 'design-thinking',
    icon: 'Users',
    title: 'Facilitación Design Thinking',
    titleEn: 'Design Thinking Facilitation',
    shortDescription: 'Metodología centrada en personas para diseñar soluciones que funcionan.',
    shortDescriptionEn: 'People-centered methodology to design solutions that work.',
    description:
      'Acompañamos procesos de empatía profunda, definición de problemas y prototipado rápido. Desde retos de producto hasta experiencias internas y modelos de negocio. El foco siempre está en entender antes de resolver.',
    descriptionEn:
      'We accompany deep empathy processes, problem definition, and rapid prototyping. From product challenges to internal experiences and business models. The focus is always on understanding before solving.',
    audience: 'Equipos de producto, marketing, operaciones, innovación',
    audienceEn: 'Product, marketing, operations, innovation teams',
    methodologies: ['Design Thinking (IDEO/Stanford d.school)', 'Human-Centered Design'],
    methodologiesEn: ['Design Thinking (IDEO/Stanford d.school)', 'Human-Centered Design'],
    featured: true,
  },
  {
    id: 'lego-serious-play',
    icon: 'Puzzle',
    title: 'LEGO® Serious Play',
    titleEn: 'LEGO® Serious Play',
    shortDescription: 'Conversaciones estratégicas profundas a través del juego consciente.',
    shortDescriptionEn: 'Deep strategic conversations through conscious play.',
    description:
      'Una metodología fácilmente subestimada y sorprendentemente efectiva para abrir conversaciones difíciles, alinear visiones y desbloquear creatividad en equipos ejecutivos. Nadie habla a través de PowerPoints. Todos hablan a través de sus construcciones.',
    descriptionEn:
      'An easily underestimated and surprisingly effective methodology for opening difficult conversations, aligning visions, and unlocking creativity in executive teams. Nobody speaks through PowerPoints. Everyone speaks through their constructions.',
    audience: 'Equipos directivos, comités de liderazgo, equipos multifuncionales',
    audienceEn: 'Executive teams, leadership committees, cross-functional teams',
    methodologies: ['LEGO® Serious Play (Certificado)', 'Facilitación Estratégica'],
    methodologiesEn: ['LEGO® Serious Play (Certified)', 'Strategic Facilitation'],
    featured: true,
  },
  {
    id: 'coaching-equipos',
    icon: 'Target',
    title: 'Coaching de Equipos',
    titleEn: 'Team Coaching',
    shortDescription: 'Para líderes que necesitan una visión compartida y acción coordinada.',
    shortDescriptionEn: 'For leaders who need shared vision and coordinated action.',
    description:
      'Diseñamos y facilitamos procesos de coaching de equipos que ayudan a construir un entendimiento común. No solo de hacia dónde van, sino de por qué importa y cómo van a llegar juntos.',
    descriptionEn:
      'We design and facilitate team coaching processes that help build common understanding. Not just of where they are going, but why it matters and how they will get there together.',
    audience: 'Comités de dirección, equipos de VP/Director, empresas familiares',
    audienceEn: 'Executive committees, VP/Director teams, family businesses',
    methodologies: ['Future-Back Planning', 'OKR Facilitation', 'World Café'],
    methodologiesEn: ['Future-Back Planning', 'OKR Facilitation', 'World Café'],
    featured: true,
  },
  {
    id: 'co-creation',
    icon: 'GitMerge',
    title: 'Co-creación y Co-diseño',
    titleEn: 'Co-creation and Co-design',
    shortDescription: 'Diseñar el futuro con las personas que lo van a construir.',
    shortDescriptionEn: 'Design the future with the people who will build it.',
    description:
      'Facilitamos procesos participativos donde clientes, colaboradores y stakeholders clave construyen soluciones juntos. Más ownership. Mejores resultados. Menos resistencia al cambio. El proceso mismo es la intervención.',
    descriptionEn:
      'We facilitate participatory processes where clients, collaborators, and key stakeholders build solutions together. More ownership. Better results. Less resistance to change. The process itself is the intervention.',
    audience: 'Equipos de cliente, comunidades internas, proyectos de transformación',
    audienceEn: 'Client teams, internal communities, transformation projects',
    methodologies: ['Participatory Design', 'Co-design Sprint', 'Service Design'],
    methodologiesEn: ['Participatory Design', 'Co-design Sprint', 'Service Design'],
    featured: false,
  },
  {
    id: 'customer-experience',
    icon: 'Map',
    title: 'Mapeo de Experiencia del Cliente',
    titleEn: 'Customer Experience Mapping',
    shortDescription: 'Entender profundamente a tus clientes para innovar donde más importa.',
    shortDescriptionEn: 'Deeply understand your customers to innovate where it matters most.',
    description:
      'Facilitamos el proceso de entender la experiencia real de tus clientes: sus dolores, sus expectativas, sus momentos de verdad. Desde ahí se diseñan propuestas de valor que generan impacto real y relaciones duraderas.',
    descriptionEn:
      'We facilitate the process of understanding your customers\' real experience: their pain points, expectations, and moments of truth. From there, value propositions are designed that generate real impact and lasting relationships.',
    audience: 'Equipos de CX, marketing, producto, operaciones',
    audienceEn: 'CX, marketing, product, operations teams',
    methodologies: ['Customer Journey Mapping', 'Service Blueprint', 'Jobs-to-be-Done'],
    methodologiesEn: ['Customer Journey Mapping', 'Service Blueprint', 'Jobs-to-be-Done'],
    featured: false,
  },
  {
    id: 'organizational-transformation',
    icon: 'RefreshCw',
    title: 'Transformación Organizacional',
    titleEn: 'Organizational Transformation',
    shortDescription: 'Cambio cultural profundo que se sostiene en el tiempo.',
    shortDescriptionEn: 'Deep cultural change that sustains over time.',
    description:
      'Acompañamos procesos de transformación cultural y organizacional desde la estrategia hasta la implementación. Con sensibilidad humana y criterio de negocio. El cambio real no se decreta; se facilita.',
    descriptionEn:
      'We accompany cultural and organizational transformation processes from strategy to implementation. With human sensitivity and business judgment. Real change is not decreed; it is facilitated.',
    audience: 'CEOs, CHROs, líderes de transformación',
    audienceEn: 'CEOs, CHROs, transformation leaders',
    methodologies: ['Change Management', 'Cultural Design', 'Appreciative Inquiry'],
    methodologiesEn: ['Change Management', 'Cultural Design', 'Appreciative Inquiry'],
    featured: false,
  },
  {
    id: 'leadership-facilitation',
    icon: 'Star',
    title: 'Facilitación de Liderazgo e Innovación',
    titleEn: 'Leadership & Innovation Facilitation',
    shortDescription: 'Desarrollar capacidades internas de innovación en equipos directivos.',
    shortDescriptionEn: 'Develop internal innovation capabilities in executive teams.',
    description:
      'Diseñamos programas de desarrollo de capacidades que instalan una cultura de innovación desde la cima. No son talleres de un día. Son transformaciones que se acumulan y que generan capacidad organizacional duradera.',
    descriptionEn:
      'We design capability development programs that install an innovation culture from the top. These are not one-day workshops. They are transformations that accumulate and generate lasting organizational capacity.',
    audience: 'Equipos directivos, alta gerencia, líderes de áreas',
    audienceEn: 'Executive teams, senior management, area leaders',
    methodologies: ['Leadership Development', 'Innovation Culture', 'Facilitation Skills'],
    methodologiesEn: ['Leadership Development', 'Innovation Culture', 'Facilitation Skills'],
    featured: false,
  },
];
