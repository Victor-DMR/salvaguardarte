import React, { useState } from 'react';
import { Eye, X, ZoomIn, Sparkles, Filter, Award, Heart } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    title: 'La Inmovilidad Sagrada',
    category: 'cuadros',
    categoryLabel: 'Cuadro Vivo',
    image: '/assets/fotos/cuadro_vivo_1.webp',
    author: 'Diosas y Diosos de Galeras',
    tagline: 'Patrimonio de la Humanidad UNESCO',
    description: 'En el marco rústico sobre la calle galerana, los protagonistas permanecen inmóviles desafiando el tiempo, recreando escenas cotidianas, campesinas y mitológicas ante la mirada atónita del público.',
  },
  {
    id: 2,
    title: 'Gesta y Silencio en la Calle',
    category: 'cuadros',
    categoryLabel: 'Cuadro Vivo',
    image: '/assets/fotos/cuadro_vivo_2.webp',
    author: 'Colectivo Creativo Barrio San José',
    tagline: 'Pinacoteca a Cielo Abierto',
    description: 'La iluminación nocturna destaca la expresión serena y la rigurosa quietud corporal de los creadores populares en la fiesta de los Cuadros Vivos.',
  },
  {
    id: 3,
    title: 'Devoción y Trabajo Campesino',
    category: 'cuadros',
    categoryLabel: 'Cuadro Vivo Costumbrista',
    image: '/assets/fotos/cuadro_vivo_3.webp',
    author: 'Tradición Rural de Galeras',
    tagline: 'Memoria Colectiva Sabanera',
    description: 'Homenaje a las faenas agrícolas, la molienda y los saberes de la tierra que dan sustento y alma al pueblo sabanero sucreño.',
  },
  {
    id: 4,
    title: 'Diosas y Diosos del Marco Rústico',
    category: 'cuadros',
    categoryLabel: 'Cuadro Vivo Popular',
    image: '/assets/fotos/cuadro_vivo_4.webp',
    author: 'Habitantes Creadores de Galeras',
    tagline: 'Teatro Estático Callejero',
    description: 'Las familias disponen sus andenes y puertas para ensamblar majestuosos cuadros vivientes donde la comunidad se convierte en su propio museo vivo.',
  },
  {
    id: 5,
    title: 'El Lienzo Humano a Cielo Abierto',
    category: 'cuadros',
    categoryLabel: 'Cuadro Vivo',
    image: '/assets/fotos/cuadro_vivo_5.webp',
    author: 'Artistas Populares de Sucre',
    tagline: 'Expresión Colectiva',
    description: 'Composiciones con vestuario tradicional, pigmentos y utilería elaborada en los talleres barriales que asombran a miles de visitantes.',
  },
  {
    id: 6,
    title: 'Memoria Viva en el Andén',
    category: 'cuadros',
    categoryLabel: 'Cuadro Vivo',
    image: '/assets/fotos/cuadro_vivo_6.webp',
    author: 'Custodios de la Manifestación',
    tagline: 'UNESCO Patrimonio Inmaterial',
    description: 'Los niños y adultos jóvenes aprenden desde pequeños la disciplina de la inmovilidad, asegurando que la tradición trascienda de generación en generación.',
  },
  {
    id: 7,
    title: 'Alborada de Gaitas al Amanecer',
    category: 'musica',
    categoryLabel: 'Música Ancestral',
    image: '/assets/fotos/musica_alborada.webp',
    author: 'Gaiteros Tradicionales de Galeras',
    tagline: 'Despertar Folclórico',
    description: 'A las cinco de la mañana, los sonidos del pito y la tambora recorren el municipio convocando al pueblo al despertar festivo del Festival de la Algarroba.',
  },
  {
    id: 8,
    title: 'Maestros Gaiteros de la Sabana',
    category: 'musica',
    categoryLabel: 'Música Sabanera',
    image: '/assets/fotos/musica_gaita_1.webp',
    author: 'Ensamble de Gaita Corta & Tambores',
    tagline: 'Sonoridad Ancestral Zenú',
    description: 'Portadores mayores que custodian el toque de gaita hembra, gaita macho, llamador y tambor alegre que acompañan cada velada cultural.',
  },
  {
    id: 9,
    title: 'El Golpe del Tambor Alegre',
    category: 'musica',
    categoryLabel: 'Percusión y Cumbia',
    image: '/assets/fotos/musica_tambores.webp',
    author: 'Tamboreros Sabaneros',
    tagline: 'Ritmo, Pulso y Memoria',
    description: 'Las manos expertas de los tamboreros marcan el pulso inconfundible de los porros, puyas y cumbias que dan vida sonora a Galeras.',
  },
  {
    id: 10,
    title: 'Desfile y Polleras de la Algarroba',
    category: 'teatro',
    categoryLabel: 'Danza & Comparsa',
    image: '/assets/fotos/desfile_algarroba_1.webp',
    author: 'Comparsas del Festival de la Algarroba',
    tagline: 'Colorido y Alegría Popular',
    description: 'El majestuoso desfile por las vías principales con polleras multicolores, danzas y fandango que antecede a las noches de Cuadros Vivos.',
  },
  {
    id: 11,
    title: 'Comparsas Populares en Escena',
    category: 'teatro',
    categoryLabel: 'Teatro & Danza',
    image: '/assets/fotos/desfile_algarroba_2.webp',
    author: 'Juventud Festiva de Galeras',
    tagline: 'Expresión Carnavalera y Folclórica',
    description: 'Jóvenes y niños llenan de música, coreografías alegóricas y personajes populares el recorrido cultural por el municipio.',
  },
  {
    id: 12,
    title: 'Máscaras y Danzas Tradicionales',
    category: 'teatro',
    categoryLabel: 'Danzas Folclóricas',
    image: '/assets/fotos/desfile_algarroba_3.webp',
    author: 'Grupos Danzantes Sucreños',
    tagline: 'Identidad Caribeña',
    description: 'Disfrazados y bailarines que rinden tributo a las raíces indígenas y afrodescendientes que nutren la riqueza festiva de Galeras.',
  },
  {
    id: 13,
    title: 'Talleres de Formación Comunitaria',
    category: 'saberes',
    categoryLabel: 'Saberes Comunitarios',
    image: '/assets/fotos/taller_comunitario_1.webp',
    author: 'Corporación Soy Salvaguardarte',
    tagline: 'Escuela de Patrimonio Vivo',
    description: 'Espacios de diálogo y formación donde portadores de tradición transmiten las técnicas de construcción de marcos, atrezzo y maquillaje escénico.',
  },
  {
    id: 14,
    title: 'Semillero Infantil y Juvenil',
    category: 'saberes',
    categoryLabel: 'Saberes & Oficios',
    image: '/assets/fotos/semillero_infantil_juvenil.webp',
    author: 'Semillero de Arte de Galeras',
    tagline: 'Relevo Generacional',
    description: 'Niñas y niños aprendiendo sobre su historia, el significado de los cuadros vivos y la importancia de proteger el patrimonio cultural inmaterial.',
  },
  {
    id: 15,
    title: 'Transmisión Intergeneracional',
    category: 'saberes',
    categoryLabel: 'Comunidad y Memoria',
    image: '/assets/fotos/transmision_intergeneracional.webp',
    author: 'Encuentros Intergeneracionales',
    tagline: 'Sabiduría de Abuelos a Nietos',
    description: 'Adultos mayores comparten relatos orales, técnicas de caña flecha y secretos de la tradición popular con las nuevas generaciones.',
  },
  {
    id: 16,
    title: 'Manos Creadoras de Galeras',
    category: 'saberes',
    categoryLabel: 'Oficios Populares',
    image: '/assets/fotos/manos_creadoras_galeras.webp',
    author: 'Comunidad Artesanal',
    tagline: 'Creatividad y Resiliencia',
    description: 'El trabajo colaborativo comunitario donde todos aportan materiales, ideas y voluntades para hacer posible cada fiesta del patrimonio.',
  },
];

export default function CuadrosVivosGallery() {
  const [activeFilter, setActiveFilter] = useState('todos');
  const [selectedItem, setSelectedItem] = useState(null);
  const [likes, setLikes] = useState({});

  const filteredItems = activeFilter === 'todos'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

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
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5A823]/15 border border-[#E5A823]/30 text-xs font-bold text-[#7E1160] mb-3">
            <Award className="w-3.5 h-3.5 text-[#DE7349]" />
            <span>Galería a Cielo Abierto Más Grande del Mundo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2C1F28] tracking-tight">
            Los Cuadros Vivos de Galeras, Sucre
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#665761] leading-relaxed">
            Cada enero, las calles de Galeras se transforman en una inmensa pinacoteca efímera donde los propios habitantes —diosas y diosos— se convierten en esculturas vivientes e inmóviles de profunda carga social, estética y comunitaria.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {[
            { id: 'todos', label: 'Todas las Obras' },
            { id: 'cuadros', label: 'Cuadros Vivos' },
            { id: 'musica', label: 'Flauta & Gaita' },
            { id: 'teatro', label: 'Teatro & Danza' },
            { id: 'saberes', label: 'Saberes & Oficios' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeFilter === tab.id
                  ? 'bg-[#7E1160] text-white shadow-md shadow-[#7E1160]/20 scale-105'
                  : 'bg-[#F5ECE0] text-[#55434F] hover:bg-[#EBDEC8]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
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
