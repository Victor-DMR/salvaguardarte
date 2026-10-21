import React, { useState, useEffect, useRef } from 'react';
import { 
  Volume2, 
  VolumeX, 
  Menu, 
  X, 
  ChevronDown, 
  Target, 
  Palette, 
  Award, 
  Users, 
  Handshake, 
  Heart, 
  Sparkles,
  Building2
} from 'lucide-react';
import { startFolkSoundtrack, stopFolkSoundtrack, isFolkPlaying } from '../utils/audioSynth';
import { LinkedinIcon } from './SocialIcons';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [audioActive, setAudioActive] = useState(false);
  const [pulseBeat, setPulseBeat] = useState(0);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleSound = () => {
    if (audioActive) {
      stopFolkSoundtrack();
      setAudioActive(false);
    } else {
      startFolkSoundtrack((step) => {
        setPulseBeat(step % 4);
      });
      setAudioActive(true);
    }
  };

  // The 3 longest sections grouped in the dropdown as requested
  const dropdownItems = [
    {
      name: 'Naturaleza & Propósito',
      href: '#naturaleza-proposito',
      desc: 'Fundamentos jurídicos, misión y visión 2035',
      icon: Target,
      color: 'text-[#DE7349] bg-[#DE7349]/10'
    },
    {
      name: 'Proyectos en Acción',
      href: '#proyectos-en-accion',
      desc: 'Formación, saberes, eventos y convocatorias',
      icon: Palette,
      color: 'text-[#7E1160] bg-[#7E1160]/10'
    },
    {
      name: 'Cuadros Vivos & Festival',
      href: '#patrimonio-custodiado',
      desc: 'Galería emblemática del patrimonio que custodiamos',
      icon: Award,
      color: 'text-[#E5A823] bg-[#E5A823]/15'
    }
  ];

  const marqueeItems = [
    '🏛️ Corporación Soy Salvaguardarte · Galeras, Sucre',
    '🛡️ Naturaleza Jurídica: Entidad Sin Ánimo de Lucro (ESAL)',
    '✨ Salvaguardia, Formación, Creación y Circulación',
    '🎭 Custodiamos los Cuadros Vivos · Patrimonio UNESCO',
    '🌿 Festival Folclórico de la Algarroba',
    '👥 Fortalecimiento Comunitario & Liderazgo Juvenil',
    '🪈 Gaita Sabanera & Tradición Oral',
    '🤝 Cooperación Estratégica Hacia el 2035',
  ];

  return (
    <>
      {/* Main Header Container (Sticky at top) */}
      <header className="sticky top-0 z-50">
        {/* Banner animado cultural (arriba del todo, fijo con el scroll) */}
        <div className="bg-[#7E1160] text-[#FFF7EC] py-2 overflow-hidden border-b border-[#E5A823]/40 shadow-inner select-none">
          <div className="animate-marquee flex items-center gap-8 whitespace-nowrap text-[11px] sm:text-xs font-bold tracking-wider uppercase">
            {[...marqueeItems, ...marqueeItems].map((item, idx) => (
              <span key={idx} className="flex items-center gap-2">
                <span>{item}</span>
                <span className="text-[#E5A823] text-sm">•</span>
              </span>
            ))}
          </div>
        </div>

        {/* Main Navbar */}
        <div
          className={`transition-all duration-300 ${
            isScrolled
              ? 'bg-[#FCFAF7]/95 backdrop-blur-md shadow-md border-b border-[#E5A823]/25 py-2'
              : 'bg-[#FCFAF7] border-b border-[#EADFCB]/70 py-2 sm:py-2.5'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Logo & Brand */}
          <a href="#inicio" className="flex items-center gap-2.5 sm:gap-3 group text-left flex-shrink-0">
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <img
                src="/assets/logo_original.webp"
                alt="Logo Corporación Soy Salvaguardarte"
                className="w-full h-full object-contain filter drop-shadow-sm"
              />
            </div>
            <div className="min-w-0">
              <span className="block text-[9px] sm:text-[10px] uppercase tracking-[0.16em] font-extrabold text-[#DE7349] leading-none">
                Corporación
              </span>
              <span className="block font-serif-title text-base sm:text-xl xl:text-2xl font-bold text-[#640E4D] leading-tight group-hover:text-[#DE7349] transition-colors truncate">
                Soy Salvaguardarte
              </span>
              <span className="hidden sm:block text-[9px] sm:text-[10px] font-semibold text-[#7A6A74] leading-none mt-0.5">
                Galeras · Sucre · Colombia
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links with Clear, Legible Font Size */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 flex-nowrap">
            
            {/* 1. Inicio */}
            <a
              href="#inicio"
              className="text-sm xl:text-[15px] font-bold text-[#483944] hover:text-[#7E1160] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#DE7349] hover:after:w-full after:transition-all after:duration-300"
            >
              Inicio
            </a>

            {/* 2. Select / Dropdown: Patrimonio & Proyectos (Las 3 secciones más largas) */}
            <div 
              className="relative"
              ref={dropdownRef}
            >
              <button
                type="button"
                onClick={() => setDropdownOpen((prev) => !prev)}
                className={`flex items-center gap-1.5 text-sm xl:text-[15px] font-bold py-1 transition-colors cursor-pointer select-none ${
                  dropdownOpen ? 'text-[#7E1160]' : 'text-[#483944] hover:text-[#7E1160]'
                }`}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                <span>Patrimonio & Proyectos</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 text-[#DE7349] ${
                  dropdownOpen ? 'rotate-180' : ''
                }`} />
              </button>

              {/* Dropdown Floating Panel */}
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-1.5 w-72 bg-white rounded-2xl p-2.5 shadow-2xl border border-[#E5A823]/40 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="text-[10px] uppercase font-extrabold tracking-wider text-[#917E8B] px-3 py-1 border-b border-[#F0E5D5] mb-1">
                    Secciones Principales
                  </div>
                  
                  {dropdownItems.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#FAF3E8] transition-colors group"
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${item.color}`}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-bold text-[#2A1726] group-hover:text-[#7E1160] transition-colors">
                            {item.name}
                          </div>
                          <div className="text-[11px] text-[#7A6A74] line-clamp-1">
                            {item.desc}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 3. Equipo Humano */}
            <a
              href="#equipo-humano"
              className="text-sm xl:text-[15px] font-bold text-[#483944] hover:text-[#7E1160] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#DE7349] hover:after:w-full after:transition-all after:duration-300"
            >
              Equipo Humano
            </a>

            {/* 4. Objetivos */}
            <a
              href="#objetivos"
              className="text-sm xl:text-[15px] font-bold text-[#483944] hover:text-[#7E1160] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#DE7349] hover:after:w-full after:transition-all after:duration-300"
            >
              Objetivos
            </a>

            {/* 5. Aliados */}
            <a
              href="#aliados"
              className="text-sm xl:text-[15px] font-bold text-[#483944] hover:text-[#7E1160] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#DE7349] hover:after:w-full after:transition-all after:duration-300"
            >
              Aliados
            </a>

            {/* 6. Comunidad */}
            <a
              href="#comunidad"
              className="text-sm xl:text-[15px] font-bold text-[#483944] hover:text-[#7E1160] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#DE7349] hover:after:w-full after:transition-all after:duration-300"
            >
              Comunidad
            </a>

          </nav>

          {/* Action Area: Compact Sound Toggle Button & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
            {/* Audio Toggle Button */}
            <button
              onClick={toggleSound}
              title={audioActive ? 'Pausar música sabanera' : 'Escuchar Gaita corta'}
              className={`flex items-center gap-1.5 p-2 sm:px-3 sm:py-2 rounded-full text-xs font-semibold transition-all duration-300 border flex-shrink-0 ${
                audioActive
                  ? 'bg-[#7E1160] text-[#FFF9F2] border-[#7E1160] shadow-md shadow-[#7E1160]/20'
                  : 'bg-[#F4ECE1] text-[#640E4D] border-[#E5A823]/40 hover:bg-[#EBDDC8]'
              }`}
            >
              {audioActive ? (
                <>
                  <Volume2 className="w-4 h-4 text-[#E5A823] animate-pulse flex-shrink-0" />
                  <span className="hidden sm:inline text-xs font-bold">Sonido Sabanero</span>
                  <div className="hidden sm:flex items-end gap-0.5 h-2.5">
                    <span className={`w-0.5 bg-[#E5A823] rounded-sm transition-all duration-150 ${pulseBeat === 0 ? 'h-2.5' : 'h-1'}`}></span>
                    <span className={`w-0.5 bg-[#E5A823] rounded-sm transition-all duration-150 ${pulseBeat === 1 ? 'h-2.5' : 'h-1.5'}`}></span>
                    <span className={`w-0.5 bg-[#E5A823] rounded-sm transition-all duration-150 ${pulseBeat === 2 ? 'h-2.5' : 'h-2'}`}></span>
                    <span className={`w-0.5 bg-[#E5A823] rounded-sm transition-all duration-150 ${pulseBeat === 3 ? 'h-2.5' : 'h-1'}`}></span>
                  </div>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-[#DE7349] flex-shrink-0" />
                  <span className="hidden sm:inline text-xs font-bold">Gaita corta</span>
                </>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-[#640E4D] bg-[#F4ECE1]/70 hover:bg-[#EBDDC8] transition-colors flex-shrink-0 z-50"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-[#7E1160]" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-[#640E4D]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FCFAF7] border-b border-[#E5A823]/30 px-5 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            {/* Audio Toggle control inside mobile drawer */}
            <button
              onClick={toggleSound}
              className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold transition-all mb-3 border ${
                audioActive
                  ? 'bg-[#7E1160] text-white border-[#7E1160] shadow-sm'
                  : 'bg-[#F4ECE1] text-[#640E4D] border-[#E5A823]/40'
              }`}
            >
              {audioActive ? (
                <>
                  <Volume2 className="w-4 h-4 text-[#E5A823] animate-pulse" />
                  <span>Música Sabanera: Activa (Pausar)</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-[#DE7349]" />
                  <span>Activar Música de Gaita corta</span>
                </>
              )}
            </button>

            <nav className="flex flex-col gap-1">
              <a
                href="#inicio"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg font-bold text-sm text-[#483944] hover:bg-[#F4ECE1] hover:text-[#7E1160] transition-colors"
              >
                Inicio
              </a>

              {/* Subgroup: Patrimonio & Proyectos */}
              <div className="pt-2 pb-1">
                <span className="text-[10px] uppercase font-extrabold tracking-wider text-[#917E8B] px-3">
                  Patrimonio & Proyectos
                </span>
                <div className="pl-2 mt-1 space-y-1 border-l-2 border-[#E5A823]/40 ml-3">
                  {dropdownItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-1.5 rounded-lg font-semibold text-xs sm:text-sm text-[#50404C] hover:bg-[#F4ECE1] hover:text-[#7E1160]"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              <a
                href="#equipo-humano"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg font-bold text-sm text-[#483944] hover:bg-[#F4ECE1] hover:text-[#7E1160] transition-colors"
              >
                Equipo Humano
              </a>

              <a
                href="#objetivos"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg font-bold text-sm text-[#483944] hover:bg-[#F4ECE1] hover:text-[#7E1160] transition-colors"
              >
                Objetivos
              </a>

              <a
                href="#aliados"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg font-bold text-sm text-[#483944] hover:bg-[#F4ECE1] hover:text-[#7E1160] transition-colors"
              >
                Aliados
              </a>

              <a
                href="#comunidad"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg font-bold text-sm text-[#483944] hover:bg-[#F4ECE1] hover:text-[#7E1160] transition-colors"
              >
                Comunidad
              </a>

              <div className="pt-2 border-t border-[#EADFCB] flex flex-col gap-2 mt-2">
                <a
                  href="#comunidad"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center bg-[#DE7349] text-white py-2.5 rounded-xl font-bold text-xs shadow-sm"
                >
                  Ir a Redes y Comunidad
                </a>
                <a
                  href="https://www.linkedin.com/in/ingeniero-victor-montoya"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-[#0A66C2] hover:bg-[#084e96] text-white py-2.5 rounded-xl font-bold text-xs shadow-sm transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>Desarrollador (Víctor Montoya)</span>
                </a>
              </div>
            </nav>
          </div>
        )}
        </div>
      </header>
    </>
  );
}
