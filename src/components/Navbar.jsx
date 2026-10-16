import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Sparkles, Heart, Compass } from 'lucide-react';
import { startFolkSoundtrack, stopFolkSoundtrack, isFolkPlaying } from '../utils/audioSynth';
import { LinkedinIcon, WhatsAppIcon } from './SocialIcons';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [audioActive, setAudioActive] = useState(false);
  const [pulseBeat, setPulseBeat] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Cuadros Vivos', href: '#cuadros-vivos' },
    { name: 'Festival & Tradición', href: '#festival' },
    { name: 'Misión & Visión', href: '#mision-vision' },
    { name: 'Valores', href: '#valores' },
    { name: 'Objetivos', href: '#objetivos' },
    { name: 'Aliados', href: '#aliados' },
    { name: 'Comunidad', href: '#comunidad' },
  ];

  return (
    <>
      {/* Top Banner UNESCO announcement */}
      <div className="bg-gradient-to-r from-[#5B0C45] via-[#7E1160] to-[#991775] text-[#FDF6ED] text-[11px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-4 shadow-sm z-50 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-1.5 sm:gap-2 mx-auto sm:mx-0 font-medium tracking-wide text-center">
            <span className="inline-flex items-center justify-center bg-[#E5A823] text-[#4A0A38] text-[9px] sm:text-[10px] font-extrabold uppercase px-1.5 sm:px-2 py-0.5 rounded-full tracking-wider">
              UNESCO
            </span>
            <span className="truncate">Galeras, Sucre: <strong>Patrimonio Cultural Inmaterial</strong></span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-xs font-medium text-[#E5A823]">
            <div className="flex items-center gap-2">
              <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
              <span className="text-white/80">WhatsApp:</span>
              <a
                href="https://wa.me/573164301576?text=Hola,%20me%20comunico%20desde%20el%20sitio%20web"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-bold hover:text-[#E5A823] transition-colors"
              >
                316 430 1576
              </a>
              <span className="text-white/40">/</span>
              <a
                href="https://wa.me/573027191972?text=Hola,%20me%20comunico%20desde%20el%20sitio%20web"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-bold hover:text-[#E5A823] transition-colors"
              >
                302 719 1972
              </a>
            </div>
            <span className="text-white/30">|</span>
            <span className="flex items-center gap-1.5 text-white/90">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              Cultura Viva
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FCFAF7]/95 backdrop-blur-md shadow-md border-b border-[#E5A823]/20 py-2'
            : 'bg-[#FCFAF7] border-b border-[#EADFCB]/60 py-2.5 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Logo & Brand (compact on mobile to prevent pushing buttons) */}
          <a href="#inicio" className="flex items-center gap-2 sm:gap-3 group text-left flex-shrink-0 min-w-0">
            <div className="relative w-9 h-9 sm:w-12 sm:h-12 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <img
                src="/assets/logo_original.png"
                alt="Logo Corporación Soy Salvaguardarte"
                className="w-full h-full object-contain filter drop-shadow-sm"
              />
            </div>
            <div className="min-w-0">
              <span className="block text-[9px] sm:text-xs uppercase tracking-[0.15em] font-bold text-[#DE7349] leading-none">
                Corporación
              </span>
              <span className="block font-serif-title text-sm sm:text-lg xl:text-2xl font-bold text-[#640E4D] leading-tight group-hover:text-[#DE7349] transition-colors truncate">
                Soy Salvaguardarte
              </span>
              <span className="hidden sm:block text-[9px] sm:text-[11px] font-medium text-[#7A6A74] leading-none mt-0.5">
                Galeras · Sucre · Colombia
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-5 flex-wrap justify-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs xl:text-sm font-semibold text-[#483944] hover:text-[#7E1160] transition-colors relative py-1 whitespace-nowrap after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#DE7349] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Area: Compact Sound Toggle Button & Mobile Hamburger */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0">
            {/* Audio Toggle Button: Icon-only on mobile, full pill on tablet/desktop */}
            <button
              onClick={toggleSound}
              title={audioActive ? 'Pausar música sabanera' : 'Escuchar Gaita y Tambor'}
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
                  <span className="hidden sm:inline text-xs font-bold">Flauta & Gaita</span>
                </>
              )}
            </button>

            {/* Mobile Menu Button: Always completely visible with distinct tap area */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-[#640E4D] bg-[#F4ECE1]/70 hover:bg-[#EBDDC8] transition-colors flex-shrink-0 z-50"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              title={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-[#7E1160]" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-[#640E4D]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FCFAF7] border-b border-[#E5A823]/30 px-5 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            {/* Audio Toggle control inside the mobile menu drawer too */}
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
                  <span>Activar Música de Gaita & Flauta</span>
                </>
              )}
            </button>

            <nav className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg font-medium text-sm text-[#483944] hover:bg-[#F4ECE1] hover:text-[#7E1160] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-[#EADFCB] flex flex-col gap-2">
                <div className="text-[11px] font-bold text-[#7E1160] flex items-center gap-1.5 pt-1">
                  <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Contactar por WhatsApp:</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="https://wa.me/573164301576?text=Hola,%20me%20comunico%20desde%20el%20sitio%20web"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-[#0C381E] py-2 px-2 rounded-xl font-bold text-xs shadow-sm transition-colors"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-[#0C381E]" />
                    <span>316 430 1576</span>
                  </a>
                  <a
                    href="https://wa.me/573027191972?text=Hola,%20me%20comunico%20desde%20el%20sitio%20web"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-[#0C381E] py-2 px-2 rounded-xl font-bold text-xs shadow-sm transition-colors"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-[#0C381E]" />
                    <span>302 719 1972</span>
                  </a>
                </div>

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
      </header>
    </>
  );
}
