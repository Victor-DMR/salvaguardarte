import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Award, 
  Eye, 
  Camera, 
  Flame, 
  Pause, 
  Play 
} from 'lucide-react';

const carouselSlides = [
  {
    id: 1,
    title: 'Cuadros Vivos: Galería a Cielo Abierto',
    badge: 'Patrimonio Inmaterial UNESCO',
    category: 'Cuadros Vivos de Galeras',
    image: '/assets/cuadros_vivos_fotos/IMG_3413.webp',
    caption: 'Teatro estático y memoria viva escenificada en los andenes de Galeras, Sucre.'
  },
  {
    id: 2,
    title: 'Festival Folclórico de la Algarroba',
    badge: 'Fiesta & Tradición Sabanera',
    category: 'Festival de la Algarroba',
    image: '/assets/fotos/desfile_algarroba_1.webp',
    caption: 'Más de tres décadas de música, desfile de comparsas y expresiones populares.'
  },
  {
    id: 3,
    title: 'Diosas y Diosos de la Inmovilidad',
    badge: 'Creación Popular',
    category: 'Cuadros Vivos de Galeras',
    image: '/assets/cuadros_vivos_fotos/IMG_3403.webp',
    caption: 'Artistas y familias galeranas recreando oficios, mitos y escenas costumbristas.'
  },
  {
    id: 4,
    title: 'Comparsas y Danzas Sabaneras',
    badge: 'Circulación Festiva',
    category: 'Festival de la Algarroba',
    image: '/assets/fotos/desfile_algarroba_3.webp',
    caption: 'Polleras al viento, gaitas y tamboras recorriendo las calles en homenaje a la cultura.'
  },
  {
    id: 5,
    title: 'El Arte que Respira en la Calle',
    badge: 'Vanguardia Popular',
    category: 'Cuadros Vivos de Galeras',
    image: '/assets/cuadros_vivos_fotos/IMG_3432.webp',
    caption: 'Composiciones escultóricas vivientes que conmueven a visitantes de todo el mundo.'
  },
  {
    id: 6,
    title: 'El Sendero de los Marcos Efímeros',
    badge: 'Nichos Barriales',
    category: 'Cuadros Vivos de Galeras',
    image: '/assets/cuadros_vivos_fotos/IMG_3281.webp',
    caption: 'Cada calle se transforma en un museo vivo custodiado por la propia comunidad.'
  },
  {
    id: 7,
    title: 'Alegría y Desfile Tradicional',
    badge: 'Identidad Caribe',
    category: 'Festival de la Algarroba',
    image: '/assets/fotos/desfile_algarroba_5.webp',
    caption: 'La manifestación festiva que reúne a las familias en torno a la identidad sabanera.'
  }
];

export default function PatrimonioCarrusel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef(null);

  const total = carouselSlides.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(nextSlide, 4500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, currentIndex]);

  return (
    <section id="patrimonio-custodiado" className="py-16 sm:py-20 bg-gradient-to-b from-[#FCFAF7] via-[#F4EDE2] to-[#FCFAF7] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7E1160]/10 border border-[#7E1160]/20 text-xs font-bold text-[#7E1160] mb-3">
            <Award className="w-4 h-4 text-[#DE7349]" />
            <span>Patrimonio Inmaterial que Custodiamos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2C1827] tracking-tight">
            Cuadros Vivos y Festival de la Algarroba
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#655460] leading-relaxed">
            Manifestaciones emblemáticas de Galeras, Sucre, que documentamos, protegemos y proyectamos con orgullo.
          </p>
        </div>

        {/* Carousel Showcase Container */}
        <div 
          className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-2 border-[#E5A823]/40 bg-[#160B14]"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          {/* Main Slide Image */}
          <div className="relative h-[380px] sm:h-[480px] md:h-[540px] w-full overflow-hidden">
            {carouselSlides.map((slide, index) => {
              const isActive = index === currentIndex;
              return (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Subtle Gradient overlay for reading */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10"></div>

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2">
                    <span className="px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-extrabold text-[#640E4D] shadow uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#DE7349]" />
                      <span>{slide.badge}</span>
                    </span>
                  </div>

                  {/* Bottom Captions */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 text-white space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-amber-300 block">
                      {slide.category}
                    </span>
                    <h3 className="font-serif-title text-xl sm:text-3xl font-bold leading-tight">
                      {slide.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#E2D4DF] max-w-2xl leading-relaxed">
                      {slide.caption}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-3 sm:left-5 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-sm transition-all transform hover:scale-105"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-3 sm:right-5 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-sm transition-all transform hover:scale-105"
            aria-label="Foto siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Bottom Bar: Indicators & Controls */}
          <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-2.5 py-1 rounded-full bg-black/50 hover:bg-black/80 text-white text-[11px] font-medium flex items-center gap-1.5 backdrop-blur-sm transition-colors"
              aria-label={isPlaying ? 'Pausar carrusel' : 'Reproducir carrusel'}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Pausar</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Auto</span>
                </>
              )}
            </button>
            <span className="text-xs font-mono font-bold text-white bg-black/50 px-2.5 py-1 rounded-full backdrop-blur-sm">
              {currentIndex + 1} / {total}
            </span>
          </div>

        </div>

        {/* Thumbnail Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {carouselSlides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentIndex(idx)}
              className={`transition-all rounded-full ${
                idx === currentIndex
                  ? 'w-8 h-2.5 bg-[#7E1160]'
                  : 'w-2.5 h-2.5 bg-[#D5C2B4] hover:bg-[#A88E9E]'
              }`}
              aria-label={`Ver diapositiva ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
