import React, { useState } from 'react';
import { Eye, X, ZoomIn, Sparkles, Award, Heart, Video, Music, BookOpen, MapPin, Feather, Info, Flame } from 'lucide-react';

const galleryItems = [
  // =========================================================================
  // 1. CUADROS VIVOS (de /assets/cuadros_vivos_fotos/ y /assets/fotos/)
  // =========================================================================
  {
    id: 1,
    title: 'La Inmovilidad Sagrada en el Andén',
    category: 'cuadros',
    subCategory: 'tradicional',
    categoryLabel: 'Cuadro Vivo Tradicional',
    image: '/assets/cuadros_vivos_fotos/IMG_3413.webp',
    author: 'Diosas y Diosos de Galeras',
    tagline: 'Costumbrismo Sabanero',
    description: 'En el marco de madera rústica montado en la calle galerana, dos creadores inmóviles personifican una escena de la memoria campesina ante el público asombrado.',
  },
  {
    id: 2,
    title: 'Devoción y Trabajo Campesino',
    category: 'cuadros',
    subCategory: 'tradicional',
    categoryLabel: 'Cuadro Vivo Tradicional',
    image: '/assets/cuadros_vivos_fotos/IMG_3403.webp',
    author: 'Tradición Rural de Galeras',
    tagline: 'Memoria Colectiva',
    description: 'Bajo la luz escénica nocturna, los personajes recrean los oficios de la sabana, la molienda de caña y las labores cotidianas que forjaron la identidad sucreña.',
  },
  {
    id: 3,
    title: 'El Lienzo Humano a Cielo Abierto',
    category: 'cuadros',
    subCategory: 'experimental',
    categoryLabel: 'Cuadro Vivo Experimental',
    image: '/assets/cuadros_vivos_fotos/IMG_3432.webp',
    author: 'Artistas Plásticos de Galeras',
    tagline: 'Vanguardia Teatral Popular',
    description: 'Propuesta visual contemporánea donde el tratamiento cromático, la iluminación cálida y la postura escénica plantean un profundo mensaje alegórico.',
  },
  {
    id: 4,
    title: 'Montaje Escénico en la Vía Pública',
    category: 'cuadros',
    subCategory: 'calles_nichos',
    categoryLabel: 'Calles & Nichos',
    image: '/assets/cuadros_vivos_fotos/IMG_3305.webp',
    author: 'Comunidad de Galeras',
    tagline: 'La Calle como Museo',
    description: 'La vía pública cerrada al tráfico vehicular para albergar las estructuras monumentales efímeras donde el espectador camina inmerso en una pinacoteca viva.',
  },
  {
    id: 5,
    title: 'El Sendero de los Marcos Efímeros',
    category: 'cuadros',
    subCategory: 'calles_nichos',
    categoryLabel: 'Calles & Nichos',
    image: '/assets/cuadros_vivos_fotos/IMG_3281.webp',
    author: 'Familias y Nichos Barriales',
    tagline: 'Nicho Comunitario',
    description: 'Los andenes y portales de las casas familiares convertidos en nichos de arte, donde las familias cuidan y custodian cada cuadro con ramas de algarrobo.',
  },
  {
    id: 6,
    title: 'Gesta y Silencio en la Noche',
    category: 'cuadros',
    subCategory: 'experimental',
    categoryLabel: 'Cuadro Vivo Experimental',
    image: '/assets/fotos/cuadro_vivo_2.webp',
    author: 'Colectivo Creativo Barrio San José',
    tagline: 'Escultura Viva en Blanco',
    description: 'Los actores permanecen estáticos bajo pigmentos y telas escultóricas, desafiando la gravedad y el tiempo en una sobrecogedora lección de autocontrol.',
  },
  {
    id: 7,
    title: 'Diosas y Diosos del Marco Rústico',
    category: 'cuadros',
    subCategory: 'tradicional',
    categoryLabel: 'Cuadro Vivo Tradicional',
    image: '/assets/fotos/cuadro_vivo_4.webp',
    author: 'Portadores Populares',
    tagline: 'Patrimonio de la Humanidad UNESCO',
    description: 'Personajes ataviados con vestuario campesino sabanero, inmóviles ante los flashes y las miradas de miles de visitantes en el Festival de la Algarroba.',
  },
  {
    id: 8,
    title: 'La Gran Pinacoteca a Cielo Abierto',
    category: 'cuadros',
    subCategory: 'calles_nichos',
    categoryLabel: 'Calles & Nichos',
    image: '/assets/fotos/hero_cuadro_vivo.webp',
    author: 'Municipio de Galeras',
    tagline: 'Galería Efímera Más Grande',
    description: 'La experiencia inmersiva de recorrer los kilómetros de calles empedradas de Galeras donde cada paso revela una nueva obra humana inmóvil.',
  },

  // =========================================================================
  // 2. GAITAS: GRUPOS DE GAITA CORTA (de /assets/Gaita_fotos/)
  // =========================================================================
  {
    id: 9,
    title: 'Grupo de Gaita Corta en Tarima de Gala',
    category: 'gaitas',
    subCategory: 'gaitas',
    categoryLabel: 'Gaita Corta en Vivo',
    image: '/assets/Gaita_fotos/IMG_0644.webp',
    author: 'Ensamble Tradicional Sabanero',
    tagline: 'Sonoridad Ancestral Zenú',
    description: 'Presentación estelar de los maestros de gaita corta en el escenario central del festival, combinando el sonido agudo y brillante del carrizo con el repique de tambores.',
  },
  {
    id: 10,
    title: 'Maestría y Golpe de Tambor Sabanero',
    category: 'gaitas',
    subCategory: 'gaitas',
    categoryLabel: 'Percusión y Compás',
    image: '/assets/Gaita_fotos/IMG_0660.webp',
    author: 'Gaiteros de la Sabana',
    tagline: 'Tambor Alegre y Llamador',
    description: 'Los tamboreros sabaneros marcando el compás vertiginoso del porro tapao y la puya, sosteniendo la melodía virtuosa de la gaita corta.',
  },
  {
    id: 11,
    title: 'Diálogo Ancestral de Gaita y Maraca',
    category: 'gaitas',
    subCategory: 'gaitas',
    categoryLabel: 'Sonoridad Tradicional',
    image: '/assets/Gaita_fotos/IMG_0684.webp',
    author: 'Ensamble de Gaitas de Galeras',
    tagline: 'Cera de Abeja y Plumilla de Pato',
    description: 'La gaita corta se caracteriza por su cabeza de cera de abeja silvestre con carbón y su embocadura de pluma de pato, otorgando un sonido nítido y festivo.',
  },
  {
    id: 12,
    title: 'Noche de Competencia de Gaita Corta',
    category: 'gaitas',
    subCategory: 'gaitas',
    categoryLabel: 'Festival Folclórico',
    image: '/assets/Gaita_fotos/IMG_0686.webp',
    author: 'Portadores Mayores de Sucre',
    tagline: 'Herencia de Generaciones',
    description: 'Encuentro anual de juglares y gaiteros que preservan las partituras no escritas de la sabana caribeña transmitidas oralmente de padres a hijos.',
  },
  {
    id: 13,
    title: 'La Fuerza Rítmica del Fandango Sabanero',
    category: 'gaitas',
    subCategory: 'gaitas',
    categoryLabel: 'Fandango y Cumbia',
    image: '/assets/Gaita_fotos/IMG_0688.webp',
    author: 'Agrupación Folclórica Galerana',
    tagline: 'Fervor Musical',
    description: 'La gaita corta eleva el espíritu de la fiesta nocturna, animando a los espectadores tras contemplar la solemne inmovilidad de los Cuadros Vivos.',
  },
  {
    id: 14,
    title: 'Clausura y Gran Toque de Gaitas',
    category: 'gaitas',
    subCategory: 'gaitas',
    categoryLabel: 'Gaita Corta Tradicional',
    image: '/assets/Gaita_fotos/IMG_0690.webp',
    author: 'Maestros del Festival',
    tagline: 'Patrimonio Sonoro de Sucre',
    description: 'La unión de los mejores gaiteros de la región rindiendo homenaje a la música de viento y tambor que da identidad y vida a Galeras.',
  },

  // =========================================================================
  // 3. DESFILE DE TRADICIONES & BAILADORAS (de /assets/desfile_tradiciones_fotos/)
  // =========================================================================
  {
    id: 15,
    title: 'Bailadoras de Fandango y Cumbia',
    category: 'desfile',
    subCategory: 'desfile',
    categoryLabel: 'Danza Tradicional',
    image: '/assets/desfile_tradiciones_fotos/WhatsApp_Image_2026-10-13_at_3.19.08_PM.webp',
    author: 'Comparsas de Galeras',
    tagline: 'Desfile de Tradiciones',
    description: 'Las bailadoras desfilan con sus trajes tradicionales y faldas amplias, llenando de alegría y cadencia el recorrido principal del Festival de la Algarroba.',
  },
  {
    id: 16,
    title: 'Polleras y Alegría en el Recorrido Popular',
    category: 'desfile',
    subCategory: 'desfile',
    categoryLabel: 'Desfile Folclórico',
    image: '/assets/desfile_tradiciones_fotos/WhatsApp_Image_2026-10-13_at_3.19.09_PM_1.webp',
    author: 'Mujeres y Jóvenes de Galeras',
    tagline: 'Colorido y Memoria',
    description: 'El remolino de colores en las polleras campesinas y el compás sabanero que anteceden al silencio sagrado de los Cuadros Vivos nocturnos.',
  },
  {
    id: 17,
    title: 'Comparsa y Júbilo de la Comunidad',
    category: 'desfile',
    subCategory: 'desfile',
    categoryLabel: 'Comparsa de la Algarroba',
    image: '/assets/desfile_tradiciones_fotos/WhatsApp_Image_2026-10-13_at_3.19.09_PM.webp',
    author: 'Comunidad Festiva de Galeras',
    tagline: 'Tradición en Movimiento',
    description: 'La participación activa de todas las generaciones bailando al son de la gaita corta y los tambores por las calles coloniales de Galeras.',
  },

  // =========================================================================
  // 4. TALLERES DE FORMACIÓN & EVIDENCIAS (de /assets/talleres_fotos/)
  // =========================================================================
  {
    id: 18,
    title: 'Taller de Expresión y Creación Escénica',
    category: 'talleres',
    subCategory: 'talleres',
    categoryLabel: 'Taller Formativo',
    image: '/assets/talleres_fotos/evidencia_taller_1.webp',
    author: 'Corporación Soy Salvaguardarte',
    tagline: 'Evidencias Formativas',
    description: 'Jornadas prácticas de formación comunitaria en Galeras con niñas, niños y jóvenes, explorando el lenguaje de los Cuadros Vivos y la memoria histórica.',
  },
  {
    id: 19,
    title: 'Construcción y Montaje de Marcos Efímeros',
    category: 'talleres',
    subCategory: 'talleres',
    categoryLabel: 'Taller Formativo',
    image: '/assets/talleres_fotos/evidencia_taller_2.webp',
    author: 'Portadores y Maestros Locales',
    tagline: 'Técnica y Oficio',
    description: 'Prácticas de diseño y ensamble de marcos escenográficos, aprendiendo sobre proporciones, maderas y atrezzo característico.',
  },
  {
    id: 20,
    title: 'Práctica de Inmovilidad y Concentración',
    category: 'talleres',
    subCategory: 'talleres',
    categoryLabel: 'Taller Formativo',
    image: '/assets/talleres_fotos/evidencia_taller_3.webp',
    author: 'Diosas y Diosos en Formación',
    tagline: 'Disciplina Actoral Popular',
    description: 'Ejercicios de respiración y quietud corporal para preparar a las nuevas generaciones como esculturas vivientes del festival.',
  },
  {
    id: 21,
    title: 'Diálogo Intergeneracional y Saberes',
    category: 'talleres',
    subCategory: 'talleres',
    categoryLabel: 'Taller Formativo',
    image: '/assets/talleres_fotos/evidencia_taller_4.webp',
    author: 'Comunidad y Familias Galeranas',
    tagline: 'Memoria Viva',
    description: 'Encuentros donde sabedores mayores comparten con los aprendices historias de tradición oral, costumbres y valores identitarios.',
  },
  {
    id: 22,
    title: 'Caracterización, Vestuario y Atrezzo',
    category: 'talleres',
    subCategory: 'talleres',
    categoryLabel: 'Taller Formativo',
    image: '/assets/talleres_fotos/evidencia_taller_5.webp',
    author: 'Artistas Plásticos y Artesanos',
    tagline: 'Diseño Tradicional',
    description: 'Elaboración comunitaria de tocados, elementos alegóricos y vestimenta tradicional con materiales locales y fibras vegetales.',
  },
  {
    id: 23,
    title: 'Creatividad Infantil en Acción',
    category: 'talleres',
    subCategory: 'talleres',
    categoryLabel: 'Taller Formativo',
    image: '/assets/talleres_fotos/evidencia_taller_6.webp',
    author: 'Semillero Infantil de Galeras',
    tagline: 'Sembrando Futuro',
    description: 'Participación activa de la infancia galerana como relevo generacional para mantener vivo el patrimonio inmaterial ante el mundo.',
  },
  {
    id: 24,
    title: 'Comunidad Unida por el Patrimonio',
    category: 'talleres',
    subCategory: 'talleres',
    categoryLabel: 'Taller Formativo',
    image: '/assets/talleres_fotos/evidencia_taller_7.webp',
    author: 'Corporación Soy Salvaguardarte',
    tagline: 'Compromiso Colectivo',
    description: 'Socialización y balance de las jornadas formativas territoriales, consolidando el tejido social y la custodia cultural de Galeras.',
  },
];

export default function CuadrosVivosGallery() {
  // Pestañas principales: 'cuadros' | 'gaitas' | 'desfile' | 'talleres'
  const [mainTab, setMainTab] = useState('cuadros');
  
  // Subfiltro dentro de Cuadros Vivos: 'todos' | 'tradicional' | 'experimental' | 'calles_nichos'
  const [cuadrosSubFilter, setCuadrosSubFilter] = useState('todos');

  const [selectedItem, setSelectedItem] = useState(null);
  const [likes, setLikes] = useState({});

  // Filtrado de items
  const filteredItems = galleryItems.filter((item) => {
    if (mainTab === 'cuadros') {
      if (item.category !== 'cuadros') return false;
      if (cuadrosSubFilter === 'todos') return true;
      return item.subCategory === cuadrosSubFilter;
    }
    if (mainTab === 'gaitas') {
      return item.category === 'gaitas';
    }
    if (mainTab === 'desfile') {
      return item.category === 'desfile';
    }
    if (mainTab === 'talleres') {
      return item.category === 'talleres';
    }
    return true;
  });

  const toggleLike = (e, id) => {
    e.stopPropagation();
    setLikes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  return (
    <section id="cuadros-vivos" className="py-16 sm:py-24 bg-[#FCFAF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5A823]/15 border border-[#E5A823]/30 text-xs font-bold text-[#7E1160] mb-3">
            <Award className="w-3.5 h-3.5 text-[#DE7349]" />
            <span>Galería a Cielo Abierto Más Grande del Mundo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2C1F28] tracking-tight">
            Los Cuadros Vivos de Galeras, Sucre
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#665761] leading-relaxed">
            Patrimonio Cultural Inmaterial de la Humanidad (UNESCO). Una manifestación estética comunitaria donde el tiempo se detiene y la calle se transforma en un museo vivo.
          </p>
        </div>

        {/* DEFINICIÓN: ¿QUÉ ES UN CUADRO VIVO? */}
        <div className="mb-14 rounded-3xl bg-gradient-to-br from-[#FFFDF9] via-[#F9F2E7] to-[#F5ECE0] p-6 sm:p-9 border-2 border-[#E5A823]/40 shadow-xl relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full border-8 border-dashed border-[#7E1160]/10 pointer-events-none"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="p-2 rounded-xl bg-[#7E1160] text-white">
                <Info className="w-4 h-4" />
              </span>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#7E1160]">
                Definición Patrimonial & Etnográfica
              </span>
            </div>

            <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#640E4D] mb-4">
              ¿Qué es un Cuadro Vivo en Galeras?
            </h3>

            <p className="text-sm sm:text-base text-[#493945] leading-relaxed mb-6 font-normal">
              Un <strong>Cuadro Vivo</strong> es una expresión artística comunitaria y teatral de inmovilidad corporal, enmarcada en estructuras rústicas de madera dispuestas sobre las calles, andenes y esquinas del municipio de <strong>Galeras, Sucre</strong>. Los propios pobladores —llamados afectuosamente <em>diosas y diosos populares</em>— personifican durante horas escenas estáticas cargadas de devoción, costumbres del campo, crítica social, mitos y reflexiones filosóficas, transformando el espacio público en una <strong>pinacoteca efímera a cielo abierto</strong> única en el planeta.
            </p>

            {/* 3 Pilares Conceptuales */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 border-t border-[#E8DEC9]">
              <div className="p-4 rounded-2xl bg-white/80 border border-[#E5A823]/30 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-[#7E1160] font-bold text-sm mb-1.5">
                  <Feather className="w-4 h-4 text-[#DE7349]" />
                  <span>1. La Inmovilidad Sagrada</span>
                </div>
                <p className="text-xs text-[#5F4F5A] leading-relaxed">
                  Los cuerpos de niños, jóvenes y ancianos vencen la fatiga y el parpadeo en riguroso silencio para dar vida al personaje plástico.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/80 border border-[#E5A823]/30 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-[#7E1160] font-bold text-sm mb-1.5">
                  <MapPin className="w-4 h-4 text-[#E5A823]" />
                  <span>2. Calles, Andenes y Nichos</span>
                </div>
                <p className="text-xs text-[#5F4F5A] leading-relaxed">
                  Las fachadas y portales de los hogares sirven de nichos escenográficos naturales, aboliendo toda barrera entre obra y comunidad.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/80 border border-[#E5A823]/30 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-[#7E1160] font-bold text-sm mb-1.5">
                  <Award className="w-4 h-4 text-[#2D6A4F]" />
                  <span>3. Patrimonio Vivo UNESCO</span>
                </div>
                <p className="text-xs text-[#5F4F5A] leading-relaxed">
                  Inscrito en la Lista Representativa del Patrimonio Cultural Inmaterial por su valor de cohesión social, dignidad e identidad colectiva.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* PESTAÑAS PRINCIPALES (TABS) */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <button
            onClick={() => setMainTab('cuadros')}
            className={`flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 ${
              mainTab === 'cuadros'
                ? 'bg-[#7E1160] text-white shadow-lg shadow-[#7E1160]/25 scale-105'
                : 'bg-[#F5ECE0] text-[#55434F] hover:bg-[#EBDEC8]'
            }`}
          >
            <Eye className="w-4 h-4" />
            <span>Cuadros Vivos</span>
          </button>

          <button
            onClick={() => setMainTab('gaitas')}
            className={`flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 ${
              mainTab === 'gaitas'
                ? 'bg-[#7E1160] text-white shadow-lg shadow-[#7E1160]/25 scale-105'
                : 'bg-[#F5ECE0] text-[#55434F] hover:bg-[#EBDEC8]'
            }`}
          >
            <Music className="w-4 h-4" />
            <span>Gaitas (Gaita Corta)</span>
          </button>

          <button
            onClick={() => setMainTab('desfile')}
            className={`flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 ${
              mainTab === 'desfile'
                ? 'bg-[#7E1160] text-white shadow-lg shadow-[#7E1160]/25 scale-105'
                : 'bg-[#F5ECE0] text-[#55434F] hover:bg-[#EBDEC8]'
            }`}
          >
            <Flame className="w-4 h-4 text-[#DE7349]" />
            <span>Desfile de Tradiciones</span>
          </button>

          <button
            onClick={() => setMainTab('talleres')}
            className={`flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 ${
              mainTab === 'talleres'
                ? 'bg-[#7E1160] text-white shadow-lg shadow-[#7E1160]/25 scale-105'
                : 'bg-[#F5ECE0] text-[#55434F] hover:bg-[#EBDEC8]'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Talleres de Formación</span>
          </button>
        </div>

        {/* SUBPESTAÑAS DE CUADROS VIVOS: Tradicional, Experimental, Calles y Nichos */}
        {mainTab === 'cuadros' && (
          <div className="flex flex-wrap justify-center gap-2 mb-10 animate-in fade-in duration-200">
            {[
              { id: 'todos', label: 'Todos los Cuadros Vivos' },
              { id: 'tradicional', label: 'Cuadro Vivo Tradicional' },
              { id: 'experimental', label: 'Cuadro Vivo Experimental' },
              { id: 'calles_nichos', label: 'Calles de Cuadros Vivos & Nichos' },
            ].map((sub) => (
              <button
                key={sub.id}
                onClick={() => setCuadrosSubFilter(sub.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  cuadrosSubFilter === sub.id
                    ? 'bg-[#DE7349] text-white shadow-md'
                    : 'bg-white text-[#6A5A65] border border-[#E5D7C5] hover:border-[#DE7349]'
                }`}
              >
                {sub.label}
              </button>
            ))}
          </div>
        )}

        {/* BANNER / CONTEXTO DE GAITA CORTA */}
        {mainTab === 'gaitas' && (
          <div className="mb-10 p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-[#2B1B26] to-[#451B38] text-white border border-[#E5A823]/40 shadow-xl flex flex-col md:flex-row items-center gap-6 animate-in fade-in duration-200">
            <div className="w-16 h-16 rounded-2xl bg-[#E5A823]/20 flex items-center justify-center text-[#E5A823] flex-shrink-0">
              <Music className="w-8 h-8" />
            </div>
            <div className="space-y-1 text-center md:text-left flex-1">
              <span className="text-[11px] font-black uppercase text-[#E5A823] tracking-wider">
                Música Ancestral de la Sabana
              </span>
              <h4 className="font-serif-title text-xl sm:text-2xl font-bold">
                Grupos de Gaita Corta en Tarima
              </h4>
              <p className="text-xs sm:text-sm text-[#F7EBE0] leading-relaxed">
                Fotografías en vivo de los grupos y maestros de <strong>gaita corta sabanera</strong> en el festival de Galeras. Afinación brillante con plumilla de pato, cabeza de cera de abeja silvestre y el repique de tambores que acompaña cada velada.
              </p>
            </div>
          </div>
        )}

        {/* BANNER Y VIDEO: DESFILE DE TRADICIONES (BAILADORAS) */}
        {mainTab === 'desfile' && (
          <div className="mb-12 bg-gradient-to-br from-[#2D1226] via-[#200D1C] to-[#3D1432] rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-[#DE7349]/50 shadow-2xl text-white animate-in fade-in duration-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Video Player Bailadoras */}
              <div className="lg:col-span-7">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black border border-[#DE7349]/40">
                  <video
                    controls
                    poster="/assets/desfile_tradiciones_fotos/bailadoras_poster.webp"
                    className="w-full h-auto max-h-[440px] object-contain mx-auto bg-black rounded-xl"
                    preload="none"
                  >
                    <source src="/assets/desfile_tradiciones_fotos/Bailadoras.mp4" type="video/mp4" />
                    Tu navegador no soporta reproducción de video HTML5.
                  </video>
                </div>
              </div>

              {/* Information & Context */}
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DE7349]/20 border border-[#DE7349]/40 text-xs font-bold text-[#E5A823]">
                  <Video className="w-4 h-4" />
                  <span>Video: Desfile de Bailadoras</span>
                </div>

                <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#FFF5E6] leading-tight">
                  Bailadoras & Comparsas del Festival
                </h3>

                <p className="text-xs sm:text-sm text-[#F1DFCE] leading-relaxed">
                  Registro en video del majestuoso desfile por las calles de Galeras. Las bailadoras con sus polleras al viento, fandangos y cumbias que anteceden a la quietud nocturna de los Cuadros Vivos.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <span className="block text-xl font-black text-[#DE7349]">Tradición</span>
                    <span className="text-[11px] text-[#DFC9B7]">Fandango y Cumbia</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <span className="block text-xl font-black text-[#E5A823]">Galeras</span>
                    <span className="text-[11px] text-[#DFC9B7]">FestiAlgarroba</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-[#E5D2C2] flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-[#E5A823] flex-shrink-0" />
                  <span>Haz clic en reproducir para vivir el movimiento y colorido del desfile.</span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* SECCIÓN ESPECIAL DE TALLERES: VIDEO DOCUMENTAL ANEXADO */}
        {mainTab === 'talleres' && (
          <div className="mb-12 bg-gradient-to-br from-[#2D1226] via-[#1E0D1B] to-[#3B1532] rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-[#E5A823]/40 shadow-2xl text-white animate-in fade-in duration-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Video Player Talleres */}
              <div className="lg:col-span-7">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black border border-[#E5A823]/30">
                  <video
                    controls
                    poster="/assets/talleres_fotos/video_poster.webp"
                    className="w-full h-auto max-h-[440px] object-contain mx-auto bg-black rounded-xl"
                    preload="metadata"
                  >
                    <source src="/assets/talleres_fotos/taller_video_evidencia.mp4" type="video/mp4" />
                    Tu navegador no soporta reproducción de video HTML5.
                  </video>
                </div>
              </div>

              {/* Information & Context */}
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5A823]/20 border border-[#E5A823]/40 text-xs font-bold text-[#E5A823]">
                  <Video className="w-4 h-4" />
                  <span>Video Documental de Talleres</span>
                </div>

                <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#FFF5E6] leading-tight">
                  Talleres de Formación y Salvaguardia Comunitaria
                </h3>

                <p className="text-xs sm:text-sm text-[#F1DFCE] leading-relaxed">
                  Registro documental directo de las jornadas pedagógicas de la <strong>Corporación Soy Salvaguardarte</strong> en Galeras, Sucre. Niñas, niños, jóvenes y sabedores mayores explorando técnicas de inmovilidad, elaboración de marcos, utilería teatral y tejido tradicional.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <span className="block text-xl font-black text-[#E5A823]">7+</span>
                    <span className="text-[11px] text-[#DFC9B7]">Evidencias Fotográficas</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <span className="block text-xl font-black text-[#DE7349]">100%</span>
                    <span className="text-[11px] text-[#DFC9B7]">Comunitario y Real</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-[#E5D2C2] flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-[#E5A823] flex-shrink-0" />
                  <span>Explora abajo las fotografías de los talleres y semilleros en Galeras.</span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* GALLERY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-[#EADFCB] hover:border-[#DE7349]/50 flex flex-col transform hover:-translate-y-1.5"
            >
              {/* Image Frame */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-[#2D1226]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

                {/* Badge Category */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#640E4D] shadow">
                  {item.categoryLabel}
                </div>

                {/* Like Button */}
                <button
                  onClick={(e) => toggleLike(e, item.id)}
                  className="absolute top-4 right-4 bg-white/80 hover:bg-white backdrop-blur-md p-2 rounded-full text-[#DE7349] transition-transform active:scale-125 shadow"
                  title="Expresar aprecio"
                >
                  <Heart className={`w-4 h-4 ${(likes[item.id] || 0) > 0 ? 'fill-current text-rose-600' : ''}`} />
                </button>

                {/* Zoom indicator on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="inline-flex items-center gap-2 bg-[#7E1160]/90 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg backdrop-blur-sm">
                    <ZoomIn className="w-4 h-4 text-[#E5A823]" />
                    Inspeccionar Obra
                  </span>
                </div>

                {/* Bottom title inside image */}
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[10px] text-[#E5A823] font-bold block uppercase tracking-wider">
                    {item.tagline}
                  </span>
                  <h3 className="font-serif-title text-lg font-bold leading-tight drop-shadow">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <p className="text-xs sm:text-sm text-[#5C4D58] line-clamp-3 leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-2 border-t border-[#F1E7DA] flex items-center justify-between text-xs text-[#806E7A]">
                  <span className="font-medium truncate max-w-[200px]">{item.author}</span>
                  <span className="text-[#DE7349] font-bold flex items-center gap-1">
                    {(likes[item.id] || 0) > 0 && `+${likes[item.id]} `}Ver más →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-[#FCFAF7] rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl border border-[#E5A823]/40 flex flex-col md:flex-row relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black/90 text-white p-2 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="md:w-3/5 bg-black flex items-center justify-center relative min-h-[300px] md:min-h-[460px]">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="max-h-[500px] w-full object-contain"
              />
            </div>

            {/* Modal Content */}
            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-[#FCFAF7]">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#7E1160]/10 text-[#7E1160] text-xs font-black uppercase tracking-wider mb-2">
                  {selectedItem.categoryLabel}
                </span>
                <h3 className="font-serif-title text-2xl font-bold text-[#2C1F28] leading-tight">
                  {selectedItem.title}
                </h3>
                <p className="text-xs font-semibold text-[#DE7349] mt-1">
                  {selectedItem.tagline}
                </p>

                <p className="text-sm text-[#50414B] mt-4 leading-relaxed">
                  {selectedItem.description}
                </p>

                <div className="mt-6 p-3.5 rounded-2xl bg-[#F6ECE0] border border-[#E5A823]/25 text-xs text-[#523F4C]">
                  <strong>Custodia Patrimonial:</strong> Esta manifestación es preservada con amor por la comunidad galerana y respaldada por la <em>Corporación Soy Salvaguardarte</em>.
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EAE0D1] flex items-center justify-between">
                <span className="text-xs text-[#7A6A74] italic">Galeras, Sucre</span>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-5 py-2 rounded-full bg-[#7E1160] text-white text-xs font-bold hover:bg-[#600C49] transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
