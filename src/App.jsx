import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CulturalPlayer from './components/CulturalPlayer';
import CuadrosVivosGallery from './components/CuadrosVivosGallery';
import FestivalAlgarroba from './components/FestivalAlgarroba';
import MisionVision from './components/MisionVision';
import ValoresSection from './components/ValoresSection';
import ObjetivosSection from './components/ObjetivosSection';
import SocialCommunity from './components/SocialCommunity';
import Footer from './components/Footer';
import { Sparkles, Award } from 'lucide-react';

export default function App() {
  const marqueeItems = [
    '🏛️ Galeras, Sucre: Patrimonio Inmaterial UNESCO',
    '🎭 Cuadros Vivos: El Arte que Respira en la Calle',
    '🪈 Gaita Sabanera & Flauta de Millo Ancestral',
    '🌿 Festival Folclórico de la Algarroba',
    '🎨 Diosas y Diosos de la Inmovilidad',
    '✨ Corporación Soy Salvaguardarte',
    '💛 Tradición, Memoria y Futuro Hacia el 2035',
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFAF7] selection:bg-[#DE7349]/20 selection:text-[#7E1160]">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Continuous Cultural Marquee Tape */}
        <div className="bg-[#7E1160] text-[#FFF7EC] py-3 overflow-hidden border-y-2 border-[#E5A823]/40 shadow-inner">
          <div className="animate-marquee flex items-center gap-10 whitespace-nowrap text-xs sm:text-sm font-bold tracking-wider uppercase">
            {[...marqueeItems, ...marqueeItems].map((item, idx) => (
              <span key={idx} className="flex items-center gap-2">
                <span>{item}</span>
                <span className="text-[#E5A823] text-base">•</span>
              </span>
            ))}
          </div>
        </div>

        {/* Gallery: Cuadros Vivos a Cielo Abierto */}
        <CuadrosVivosGallery />

        {/* Interactive Soundscape, Gaita and Theatre */}
        <CulturalPlayer />

        {/* Festival de la Algarroba & Street Art Creation */}
        <FestivalAlgarroba />

        {/* Misión, Visión 2035 y Compromiso Institucional */}
        <MisionVision />

        {/* Los 8 Valores Institucionales */}
        <ValoresSection />

        {/* Los 7 Objetivos Estratégicos */}
        <ObjetivosSection />

        {/* Redes Sociales (Instagram & Facebook) y Participación */}
        <SocialCommunity />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
