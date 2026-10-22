import React, { useState } from 'react';
import { 
  FolderKanban, 
  Award, 
  GraduationCap, 
  Sparkles, 
  Calendar, 
  MapPin, 
  Users, 
  Layers, 
  ExternalLink, 
  CheckCircle2, 
  X, 
  ZoomIn, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Filter 
} from 'lucide-react';

// =========================================================================
// 1. NUESTROS PROYECTOS (9 Proyectos Oficiales)
// =========================================================================
const officialProjects = [
  {
    id: 'beca-contrapulso-2025',
    title: 'Proyecto Vallenato Sabanero para La Paz',
    category: 'ganador',
    year: '2025',
    callout: 'Ganadores de la Beca Contrapulso 2025',
    partner: 'Con el Maestro y Artista Nafer Arrieta',
    tag: 'Beca Nacional MinCultura',
    description: 'Iniciativa artística y comunitaria que rescata las raíces del vallenato sabanero como vehículo de memoria, convivencia y reconciliación territorial, de la mano del legendario acordeonero y artista Nafer Arrieta.',
    typeLabel: 'Proyecto Ganador',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-300'
  },
  {
    id: 'jovenes-cambio-2025',
    title: 'Proyecto Camino Joven: Cultura y Futuro',
    category: 'ganador',
    year: '2025',
    callout: 'Ganador de la Convocatoria Jóvenes por el Cambio 2025',
    partner: 'Barrio San Judas · Galeras, Sucre',
    tag: 'Juventudes & Territorio',
    description: 'Proceso de liderazgo cultural y formativo orientado a adolescentes y jóvenes del barrio San Judas, promoviendo el arte comunitario, la prevención de violencias y la apropiación de identidades barriales.',
    typeLabel: 'Proyecto Ganador',
    badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300'
  },
  {
    id: 'concertacion-cultural-2026',
    title: 'Noche de Tradiciones: Salvaguardia, Divulgación y Circulación',
    category: 'ganador',
    year: '2026',
    callout: 'Ganadores de Convocatoria Concertación Cultural 2026',
    partner: 'Territorio de Galeras, Sucre',
    tag: 'Concertación Nacional',
    description: 'Salvaguardia, divulgación y circulación de mitos, leyendas, décimas y cantos de vaquería en el territorio de Galeras, Sucre. Fortalece la oralidad campesina y los saberes orales sabaneros.',
    typeLabel: 'Proyecto Ganador',
    badgeColor: 'bg-purple-100 text-purple-900 border-purple-300'
  },
  {
    id: 'apoyo-inean-2026',
    title: 'De la Escuela a la Tradición: Gaitas y Cumbiambas',
    category: 'apoyo',
    year: '2026',
    callout: 'Apoyo al Proyecto Institucional Educativo',
    partner: 'Institución Educativa Antonio Nariño - INEAN (2026)',
    tag: 'Educación & Patrimonio Conexo',
    description: 'Formación en música de gaitas y cumbiambas para la salvaguardia de manifestaciones conexas al Cuadro Vivo de Galeras, integrando a estudiantes y docentes en la pedagogía del patrimonio inmaterial.',
    typeLabel: 'Apoyo Institucional',
    badgeColor: 'bg-blue-100 text-blue-900 border-blue-300'
  },
  {
    id: 'apoyo-cabildo-costa-oro-2025',
    title: 'Festival Trenzando Saberes para Innovar en Ellos',
    category: 'apoyo',
    year: '2025',
    callout: 'Apoyo al Proyecto Étnico Comunitario',
    partner: 'Cabildo Indígena Costa de Oro - Sampués (2025)',
    tag: 'Identidad Zenú & Tejeduría',
    description: 'Acompañamiento a la comunidad indígena de Costa de Oro en el fortalecimiento de saberes ancestrales de la caña flecha, el trenzado tradicional y la innovación artesanal con respeto cultural.',
    typeLabel: 'Apoyo Étnico Comunitario',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-300'
  },
  {
    id: 'apoyo-vigias-lunatico-2026',
    title: 'Patrimonio Vivo en Voz de su Gente',
    category: 'apoyo',
    year: '2026',
    callout: 'Apoyo al Fortalecimiento de Vigías Culturales',
    partner: 'Grupo de Vigías Cuadros Vivos & Colectivo Lunático (2026)',
    tag: 'Vigías del Patrimonio',
    description: 'Fortalecimiento de las capacidades técnicas y comunicativas del Grupo de Vigías del Patrimonio Cultural Cuadros Vivos de Galeras, impulsando relatos comunitarios y protección del patrimonio.',
    typeLabel: 'Apoyo a Vigías',
    badgeColor: 'bg-rose-100 text-rose-900 border-rose-300'
  },
  {
    id: 'apoyo-jovenes-huellas-2026',
    title: 'Jóvenes Dejando Huellas: Participación y Liderazgo',
    category: 'apoyo',
    year: '2026',
    callout: 'Apoyo al Proyecto de Juventudes',
    partner: 'Plataforma de Juventudes de Galeras (2026)',
    tag: 'Participación Juvenil',
    description: 'Iniciativa de participación, liderazgo y transformación social desde Galeras, Sucre, formando a jóvenes como agentes de cambio cultural, memoria histórica y cohesión social.',
    typeLabel: 'Apoyo a Juventudes',
    badgeColor: 'bg-teal-100 text-teal-900 border-teal-300'
  },
  {
    id: 'apoyo-tierra-dulce-2026',
    title: 'III Festival Tierra Dulce',
    category: 'apoyo',
    year: '2026',
    callout: 'Apoyo a Festivales Rurales',
    partner: 'Corregimiento de Pueblo Nuevo 1 · Galeras (2026)',
    tag: 'Cultura Rural & Sabores',
    description: 'Acompañamiento al festival gastronómico y cultural del corregimiento de Pueblo Nuevo 1, valorando las tradiciones del dulce sabanero, la música campesina y la economía popular.',
    typeLabel: 'Apoyo Rural',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-300'
  },
  {
    id: 'apoyo-movimiento-patrimonio-2026',
    title: 'Festival Movimiento y Patrimonio 2026',
    category: 'apoyo',
    year: '2026',
    callout: 'Apoyo a la Danza y Artes Vivas',
    partner: 'Corporación Cuerpos para la Reconciliación (2026)',
    tag: 'Danza & Reconciliación',
    description: 'Articulación en la producción y pedagogía de la danza contemporánea y tradicional como medio de sanación, resignificación del cuerpo y preservación del patrimonio vivo.',
    typeLabel: 'Apoyo a Redes Culturales',
    badgeColor: 'bg-indigo-100 text-indigo-900 border-indigo-300'
  }
];

// =========================================================================
// 2. FOTOS: FORMACIÓN ARTÍSTICA COMUNITARIA
// =========================================================================
const formacionArtisticaPhotos = [
  {
    src: '/assets/formacion_artistica/WhatsApp Image 2026-10-19 at 5.30.53 PM.webp',
    title: 'Semillero de Iniciación Musical y Tradición',
    caption: 'Niñas y niños aprendiendo los toques de gaita y percusión tradicional en Galeras.'
  },
  {
    src: '/assets/formacion_artistica/WhatsApp Image 2026-10-19 at 5.30.53 PM (1).webp',
    title: 'Taller Pedagógico de Expresión Corporal',
    caption: 'Formación en artes escénicas comunitarias fortaleciendo la confianza y el trabajo en equipo.'
  },
  {
    src: '/assets/formacion_artistica/WhatsApp Image 2026-10-19 at 5.30.54 PM.webp',
    title: 'Práctica Instrumental de Gaitas',
    caption: 'Transmisión intergeneracional con instrumentos construidos con materiales autóctonos.'
  },
  {
    src: '/assets/formacion_artistica/WhatsApp Image 2026-10-19 at 5.30.54 PM (1).webp',
    title: 'Semillero Infantil de Cultura y Memoria',
    caption: 'Espacios seguros y enriquecedores donde la niñez galerana abraza su identidad.'
  },
  {
    src: '/assets/formacion_artistica/WhatsApp Image 2026-10-19 at 5.30.54 PM (2).webp',
    title: 'Encuentro Formativo con Jóvenes Creadores',
    caption: 'Jornadas de creación colectiva en los barrios de Galeras.'
  },
  {
    src: '/assets/formacion_artistica/WhatsApp Image 2026-10-19 at 5.30.54 PM (3).webp',
    title: 'Taller de Ritmos y Cantos Tradicionales',
    caption: 'Apreciación musical e interpretación de cumbias, puyas y porros sabaneros.'
  },
  {
    src: '/assets/formacion_artistica/WhatsApp Image 2026-10-19 at 5.30.54 PM (4).webp',
    title: 'Laboratorio de Creatividad y Pintura',
    caption: 'Estimulando la motricidad y la imaginación inspirada en los cuadros vivos.'
  },
  {
    src: '/assets/formacion_artistica/WhatsApp Image 2026-10-19 at 5.30.54 PM (5).webp',
    title: 'Pedagogía del Patrimonio en las Escuelas',
    caption: 'Articulación directa con los centros educativos rurales y urbanos.'
  }
];

// =========================================================================
// 3. FOTOS: SALVAGUARDIA DE SABERES
// =========================================================================
const salvaguardiaSaberesPhotos = [
  {
    src: '/assets/proyectos_en_accion/WhatsApp Image 2026-10-19 at 5.30.24 PM (1).webp',
    title: 'Diálogo con Portadores de Tradición',
    caption: 'Encuentros etnográficos de memoria oral con los sabedores mayores de Galeras.'
  },
  {
    src: '/assets/proyectos_en_accion/WhatsApp Image 2026-10-19 at 5.30.24 PM (2).webp',
    title: 'Reconocimiento de Saberes Ancestrales',
    caption: 'Espacios de diálogo comunitario para registrar historias, mitos y décimas populares.'
  },
  {
    src: '/assets/proyectos_en_accion/WhatsApp Image 2026-10-19 at 5.30.24 PM (3).webp',
    title: 'Fortalecimiento de la Identidad Territorial',
    caption: 'Comunidades que custodian su patrimonio inmaterial y defienden su memoria viva.'
  },
  {
    src: '/assets/proyectos_en_accion/WhatsApp Image 2026-10-19 at 5.30.24 PM (4).webp',
    title: 'Talleres de Construcción y Preservación',
    caption: 'Metodologías participativas para la salvaguardia activa de manifestaciones patrimoniales.'
  },
  {
    src: '/assets/proyectos_en_accion/WhatsApp Image 2026-10-19 at 5.30.24 PM (5).webp',
    title: 'Encuentros Intergeneracionales',
    caption: 'Adultos mayores y juventudes compartiendo el legado cultural sabanero.'
  },
  {
    src: '/assets/proyectos_en_accion/WhatsApp Image 2026-10-19 at 5.30.24 PM.webp',
    title: 'Memoria Colectiva en Territorio',
    caption: 'Documentando las prácticas comunitarias que hacen único a Sucre.'
  },
  {
    src: '/assets/proyectos_en_accion/WhatsApp Image 2026-10-19 at 5.30.25 PM.webp',
    title: 'Sistematización y Custodia Cultural',
    caption: 'Construyendo archivos vivos para las futuras generaciones de Galeras.'
  }
];

// =========================================================================
// 4. FOTOS: EVENTOS CULTURALES & DESFILE DE TRADICIONES
// =========================================================================
const eventosCulturalesPhotos = [
  {
    src: '/assets/Desfile _de tradiciones_fotos/WhatsApp Image 2026-10-19 at 5.31.21 PM.webp',
    title: 'Desfile de Tradiciones en las Calles de Galeras',
    caption: 'Color, danzas folclóricas y comparsas comunitarias llenando de vida el territorio.'
  },
  {
    src: '/assets/Desfile _de tradiciones_fotos/WhatsApp Image 2026-10-19 at 5.31.21 PM (1).webp',
    title: 'Danzas y Bailadoras de la Sabana',
    caption: 'Expresión viva de nuestras cumbiambas y bailes cantados en el desfile popular.'
  },
  {
    src: '/assets/Desfile _de tradiciones_fotos/WhatsApp Image 2026-10-19 at 5.31.22 PM.webp',
    title: 'Comparsas y Puesta en Escena Comunitaria',
    caption: 'Familias, agrupaciones y gestores celebrando la riqueza de nuestras tradiciones.'
  },
  {
    src: '/assets/Desfile _de tradiciones_fotos/WhatsApp Image 2026-10-19 at 5.31.22 PM (1).webp',
    title: 'Alegría y Participación Popular',
    caption: 'La comunidad congregada en las calles celebrando el orgullo galerano y caribeño.'
  },
  {
    src: '/assets/Desfile _de tradiciones_fotos/WhatsApp Image 2026-10-19 at 5.31.22 PM (2).webp',
    title: 'Música de Viento y Percusión Tradicional',
    caption: 'Bandas, tambores y gaiteros guiando el ritmo del Desfile de Tradiciones.'
  },
  {
    src: '/assets/Desfile _de tradiciones_fotos/WhatsApp_Image_2026-10-13_at_3.19.08_PM.webp',
    title: 'Bailadoras con Vestuario Típico Sabanero',
    caption: 'La elegancia del traje tradicional de pollera y flores en homenaje a las abuelas.'
  },
  {
    src: '/assets/Desfile _de tradiciones_fotos/WhatsApp_Image_2026-10-13_at_3.19.09_PM.webp',
    title: 'Gaitas y Tamboras en Escena Callejera',
    caption: 'El sonido ancestral que hace vibrar la memoria del Caribe colombiano.'
  }
];

export default function ProyectosEnAccion() {
  const [activeTab, setActiveTab] = useState('nuestros-proyectos');
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [projectFilter, setProjectFilter] = useState('todos');

  // Filtered projects
  const filteredProjects = officialProjects.filter(p => {
    if (projectFilter === 'todos') return true;
    if (projectFilter === 'ganador') return p.category === 'ganador';
    if (projectFilter === 'apoyo') return p.category === 'apoyo';
    if (projectFilter === '2025') return p.year === '2025';
    if (projectFilter === '2026') return p.year === '2026';
    return true;
  });

  return (
    <section id="proyectos-en-accion" className="py-16 sm:py-24 bg-[#FCFAF7] relative overflow-hidden border-t border-[#EADFCB]">
      
      {/* Decorative ambient background */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#7E1160]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#E5A823]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DE7349]/15 border border-[#DE7349]/30 text-xs font-bold text-[#DE7349] mb-3">
            <FolderKanban className="w-4 h-4 text-[#7E1160]" />
            <span>Impacto en Territorio · 2025 - 2026</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#291A25] tracking-tight">
            Proyectos en Acción
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#61515C] leading-relaxed">
            Iniciativas vivas que transforman comunidades a través de la formación artística, la salvaguardia de saberes, los eventos culturales y proyectos ganadores de concertación.
          </p>
        </div>

        {/* 4 Main Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#F3E9DC] border border-[#E5A823]/30 shadow-inner flex-wrap justify-center gap-1.5">
            
            <button
              onClick={() => setActiveTab('nuestros-proyectos')}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeTab === 'nuestros-proyectos'
                  ? 'bg-[#7E1160] text-white shadow-md'
                  : 'text-[#50404C] hover:text-[#7E1160]'
              }`}
            >
              <Award className="w-4 h-4 text-[#E5A823]" />
              <span>Nuestros Proyectos</span>
              <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded-full font-mono">9</span>
            </button>

            <button
              onClick={() => setActiveTab('formacion')}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeTab === 'formacion'
                  ? 'bg-[#7E1160] text-white shadow-md'
                  : 'text-[#50404C] hover:text-[#7E1160]'
              }`}
            >
              <GraduationCap className="w-4 h-4 text-[#DE7349]" />
              <span>Formación Artística Comunitaria</span>
              <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded-full font-mono">8</span>
            </button>

            <button
              onClick={() => setActiveTab('saberes')}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeTab === 'saberes'
                  ? 'bg-[#7E1160] text-white shadow-md'
                  : 'text-[#50404C] hover:text-[#7E1160]'
              }`}
            >
              <Sparkles className="w-4 h-4 text-[#E5A823]" />
              <span>Salvaguardia de Saberes</span>
              <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded-full font-mono">7</span>
            </button>

            <button
              onClick={() => setActiveTab('eventos')}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeTab === 'eventos'
                  ? 'bg-[#7E1160] text-white shadow-md'
                  : 'text-[#50404C] hover:text-[#7E1160]'
              }`}
            >
              <Users className="w-4 h-4 text-[#DE7349]" />
              <span>Eventos Culturales & Tradiciones</span>
              <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded-full font-mono">7</span>
            </button>

          </div>
        </div>

        {/* ================================================================= */}
        {/* TAB 1: NUESTROS PROYECTOS (9 Proyectos Oficiales) */}
        {/* ================================================================= */}
        {activeTab === 'nuestros-proyectos' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            
            {/* Filter pills */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3.5 sm:p-4 rounded-2xl border border-[#EADFCB] shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-[#7E1160]">
                <Filter className="w-4 h-4 text-[#DE7349]" />
                <span>Filtrar Proyectos:</span>
              </div>
              <div className="flex flex-wrap items-center gap-1.5">
                {[
                  { id: 'todos', label: 'Todos (9)' },
                  { id: 'ganador', label: 'Ganadores Convocatorias (3)' },
                  { id: 'apoyo', label: 'Apoyos Institucionales (6)' },
                  { id: '2025', label: 'Vigencia 2025' },
                  { id: '2026', label: 'Vigencia 2026' }
                ].map(flt => (
                  <button
                    key={flt.id}
                    onClick={() => setProjectFilter(flt.id)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                      projectFilter === flt.id
                        ? 'bg-[#7E1160] text-white shadow-sm'
                        : 'bg-[#F4ECE1] text-[#554652] hover:bg-[#EAE0D1]'
                    }`}
                  >
                    {flt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid of Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((proj) => (
                <div
                  key={proj.id}
                  className="bg-white rounded-3xl p-6 border border-[#E5A823]/30 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:border-[#DE7349]/70 group"
                >
                  <div className="space-y-4">
                    
                    {/* Header Badges */}
                    <div className="flex items-center justify-between gap-2">
                      <span className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full border ${proj.badgeColor}`}>
                        {proj.typeLabel}
                      </span>
                      <span className="text-xs font-bold text-[#7E1160] bg-[#FAF3E8] px-2.5 py-0.5 rounded-full border border-[#E5A823]/30">
                        {proj.year}
                      </span>
                    </div>

                    {/* Callout */}
                    <div className="text-[11px] font-bold text-[#DE7349] uppercase tracking-wider">
                      {proj.callout}
                    </div>

                    {/* Title */}
                    <h3 className="font-serif-title text-lg sm:text-xl font-bold text-[#2C1827] leading-snug group-hover:text-[#7E1160] transition-colors">
                      {proj.title}
                    </h3>

                    {/* Partner / Beneficiary */}
                    <div className="p-3 rounded-xl bg-[#FAF5EE] border border-[#EADFCB] text-xs font-semibold text-[#4F3E4B] flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#DE7349] flex-shrink-0" />
                      <span>{proj.partner}</span>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#5C4D58] leading-relaxed">
                      {proj.description}
                    </p>

                  </div>

                  {/* Footer Tag */}
                  <div className="mt-5 pt-3.5 border-t border-[#F0E5D5] flex items-center justify-between text-[11px] text-[#867581]">
                    <span className="font-medium text-[#7E1160] flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2D6A4F]" />
                      <span>{proj.tag}</span>
                    </span>
                    <span className="font-semibold text-[#DE7349]">Galeras · Sucre</span>
                  </div>

                </div>
              ))}
            </div>

          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 2: FORMACIÓN ARTÍSTICA COMUNITARIA */}
        {/* ================================================================= */}
        {activeTab === 'formacion' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="bg-[#FAF3E8] p-5 sm:p-6 rounded-3xl border border-[#E5A823]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-xs font-extrabold uppercase text-[#DE7349] tracking-wider">
                  Semilleros Infantiles y Juveniles
                </span>
                <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-[#640E4D]">
                  Formación Artística Comunitaria
                </h3>
                <p className="text-xs sm:text-sm text-[#5A4A56] max-w-2xl">
                  Talleres de gaitas, expresión corporal, teatro campesino, percusión tradicional y artes plásticas con niñas, niños y jóvenes de Galeras.
                </p>
              </div>
              <span className="text-xs font-bold text-[#7E1160] bg-white px-3 py-1.5 rounded-full shadow-sm flex-shrink-0">
                8 Fotografías en Registro
              </span>
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {formacionArtisticaPhotos.map((photo, pIdx) => (
                <div
                  key={pIdx}
                  onClick={() => setSelectedPhoto(photo)}
                  className="group relative rounded-2xl overflow-hidden bg-[#1E111C] shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-[#E5A823]/25 transform hover:-translate-y-1"
                >
                  <div className="h-60 overflow-hidden relative">
                    <img
                      src={encodeURI(photo.src)}
                      alt={photo.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="p-4 bg-white space-y-1">
                    <h4 className="font-serif-title text-sm font-bold text-[#2C1827] leading-snug line-clamp-1 group-hover:text-[#7E1160]">
                      {photo.title}
                    </h4>
                    <p className="text-xs text-[#705F6C] line-clamp-2">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 3: SALVAGUARDIA DE SABERES */}
        {/* ================================================================= */}
        {activeTab === 'saberes' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="bg-[#FAF3E8] p-5 sm:p-6 rounded-3xl border border-[#E5A823]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-xs font-extrabold uppercase text-[#DE7349] tracking-wider">
                  Memoria Viva y Transmisión Oral
                </span>
                <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-[#640E4D]">
                  Salvaguardia de Saberes
                </h3>
                <p className="text-xs sm:text-sm text-[#5A4A56] max-w-2xl">
                  Encuentros etnográficos, registro de sabedores mayores, décimas campesinas, cantos de vaquería y custodia de las raíces identitarias sabaneras.
                </p>
              </div>
              <span className="text-xs font-bold text-[#7E1160] bg-white px-3 py-1.5 rounded-full shadow-sm flex-shrink-0">
                7 Fotografías de Campo
              </span>
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {salvaguardiaSaberesPhotos.map((photo, pIdx) => (
                <div
                  key={pIdx}
                  onClick={() => setSelectedPhoto(photo)}
                  className="group relative rounded-2xl overflow-hidden bg-[#1E111C] shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-[#E5A823]/25 transform hover:-translate-y-1"
                >
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={encodeURI(photo.src)}
                      alt={photo.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="p-4 bg-white space-y-1">
                    <h4 className="font-serif-title text-sm sm:text-base font-bold text-[#2C1827] leading-snug line-clamp-1 group-hover:text-[#7E1160]">
                      {photo.title}
                    </h4>
                    <p className="text-xs text-[#705F6C] line-clamp-2">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 4: EVENTOS CULTURALES & DESFILE DE TRADICIONES */}
        {/* ================================================================= */}
        {activeTab === 'eventos' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="bg-[#FAF3E8] p-5 sm:p-6 rounded-3xl border border-[#E5A823]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-xs font-extrabold uppercase text-[#DE7349] tracking-wider">
                  Circulación y Danzas Tradicionales
                </span>
                <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-[#640E4D]">
                  Eventos Culturales & Desfile de Tradiciones
                </h3>
                <p className="text-xs sm:text-sm text-[#5A4A56] max-w-2xl">
                  Comparsas, bailadoras, música de gaitas y bandas sabaneras recorriendo las calles en celebración de nuestras expresiones ancestrales.
                </p>
              </div>
              <span className="text-xs font-bold text-[#7E1160] bg-white px-3 py-1.5 rounded-full shadow-sm flex-shrink-0">
                7 Fotografías del Desfile
              </span>
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventosCulturalesPhotos.map((photo, pIdx) => (
                <div
                  key={pIdx}
                  onClick={() => setSelectedPhoto(photo)}
                  className="group relative rounded-2xl overflow-hidden bg-[#1E111C] shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-[#E5A823]/25 transform hover:-translate-y-1"
                >
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={encodeURI(photo.src)}
                      alt={photo.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="p-4 bg-white space-y-1">
                    <h4 className="font-serif-title text-sm sm:text-base font-bold text-[#2C1827] leading-snug line-clamp-1 group-hover:text-[#7E1160]">
                      {photo.title}
                    </h4>
                    <p className="text-xs text-[#705F6C] line-clamp-2">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* =================================================================== */}
      {/* FULLSCREEN LIGHTBOX MODAL */}
      {/* =================================================================== */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#1A0E18] rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black/90 flex items-center justify-center transition-all"
              aria-label="Cerrar vista"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="max-h-[70vh] flex items-center justify-center bg-black">
              <img
                src={encodeURI(selectedPhoto.src)}
                alt={selectedPhoto.title}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="p-5 sm:p-6 bg-gradient-to-t from-[#200A1C] to-[#140511] text-white space-y-2">
              <div className="flex items-center justify-between text-xs text-amber-300">
                <span className="uppercase tracking-widest font-bold">Corporación Soy Salvaguardarte</span>
                <span>Galeras, Sucre · Colombia</span>
              </div>
              <h3 className="font-serif-title text-xl sm:text-2xl font-bold leading-tight">
                {selectedPhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#E0CFDA] leading-relaxed">
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
