import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NaturalezaProposito from './components/NaturalezaProposito';
import EquipoHumano from './components/EquipoHumano';
import ProyectosEnAccion from './components/ProyectosEnAccion';
import ObjetivosSection from './components/ObjetivosSection';
import ValoresSection from './components/ValoresSection';
import PatrimonioCarrusel from './components/PatrimonioCarrusel';
import AliadosSection from './components/AliadosSection';
import SocialCommunity from './components/SocialCommunity';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';

export default function App() {
  React.useEffect(() => {
    const dismissPreloader = () => {
      const preloader = document.getElementById('app-preloader');
      if (preloader) {
        preloader.classList.add('fade-out');
        setTimeout(() => {
          if (preloader && preloader.parentNode) {
            preloader.remove();
          }
        }, 700);
      }
    };

    if (document.readyState === 'complete') {
      const timer = setTimeout(dismissPreloader, 1200);
      return () => clearTimeout(timer);
    } else {
      const handleLoad = () => {
        setTimeout(dismissPreloader, 900);
      };
      window.addEventListener('load', handleLoad);
      const fallbackTimer = setTimeout(dismissPreloader, 3000);
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(fallbackTimer);
      };
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFAF7] selection:bg-[#DE7349]/20 selection:text-[#7E1160]">
      {/* Top Navigation Bar with Marquee Banner included */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero: Naturaleza, Propósito y Ámbito de Salvaguardarte */}
        <Hero />

        {/* 2. Naturaleza Jurídica, Propósito y Ámbito de Actuación */}
        <NaturalezaProposito />

        {/* 3. Equipo Humano & Liderazgo (María Fernanda Severiche & Tatiana Narváez) */}
        <EquipoHumano />

        {/* 4. Proyectos en Acción: Formación, Saberes, Eventos y los 9 Proyectos */}
        <ProyectosEnAccion />

        {/* 5. Los 6 Objetivos Estratégicos */}
        <ObjetivosSection />

        {/* 6. Los 8 Valores Institucionales */}
        <ValoresSection />

        {/* 7. Carrusel de Fotos: Cuadros Vivos y Festival de la Algarroba */}
        <PatrimonioCarrusel />

        {/* 8. Red de Aliados Estratégicos */}
        <AliadosSection />

        {/* 9. Redes Sociales (Instagram & Facebook) y Participación */}
        <SocialCommunity />
      </main>

      {/* Floating WhatsApp Contact Button */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer />
    </div>
  );
}
