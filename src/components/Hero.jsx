import React from 'react';
import { 
  Building2, 
  Target, 
  MapPin, 
  ArrowRight, 
  Users, 
  Sparkles, 
  BookOpen, 
  Palette, 
  ShieldCheck, 
  Award 
} from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-4 pb-8 sm:pt-6 sm:pb-10 lg:pt-6 lg:pb-12 bg-gradient-to-b from-[#FCFAF7] via-[#F8F1E7]/70 to-[#FCFAF7]">
      {/* Decorative background glows */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[720px] h-[400px] bg-gradient-to-tr from-[#DE7349]/12 via-[#E5A823]/18 to-[#7E1160]/12 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Subtle Sombrero vueltiao circular motif accent */}
      <div className="absolute -top-16 -right-16 w-64 h-64 opacity-5 pointer-events-none rounded-full border-8 border-dashed border-[#2C2229]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Institutional Text & Identity */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-5">
            
            {/* SEO Location & Heritage Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7E1160]/10 border border-[#7E1160]/20 text-xs font-bold text-[#7E1160] uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-[#DE7349]" />
              <span>Galeras, Sucre · Patrimonio Cultural Inmaterial UNESCO</span>
            </div>

            {/* Main Title (Single H1 on page for Google SEO) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#2B1B26] leading-[1.12]">
              Corporación{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#7E1160] via-[#C85A32] to-[#E5A823]">
                Soy Salvaguardarte
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl font-medium text-[#7E1160] leading-snug">
              Naturaleza jurídica, propósito transformador y salvaguardia del patrimonio vivo de Galeras, Sucre y Colombia.
            </p>

            {/* Institutional Essence: Propósito y Ámbito */}
            <div className="space-y-2.5 text-sm sm:text-base lg:text-lg text-[#554650] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              <p>
                Somos una organización cultural comunitaria con personería jurídica sin ánimo de lucro, nacida en <strong>Galeras, Sucre</strong>. Nuestro propósito central es la <strong>salvaguardia, protección, investigación, formación artística, creación y circulación</strong> del patrimonio cultural material e inmaterial de nuestros territorios.
              </p>
              <p className="text-xs sm:text-sm lg:text-base text-[#6E5D68] italic border-l-4 border-[#E5A823] pl-3 py-0.5 bg-[#FAF4EA]/80 rounded-r-lg">
                Articulamos saberes ancestrales, semilleros juveniles, creadores y comunidades para garantizar la memoria viva, la equidad social y la sostenibilidad cultural.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href="#proyectos-en-accion"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-gradient-to-r from-[#7E1160] to-[#5F0C48] text-white font-bold text-xs sm:text-sm shadow-md shadow-[#7E1160]/25 hover:shadow-lg hover:from-[#6B0E51] hover:to-[#4C093A] transition-all transform hover:-translate-y-0.5"
              >
                <Palette className="w-4 h-4 text-[#E5A823]" />
                <span>Proyectos en Acción</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#naturaleza-proposito"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full bg-white border border-[#E5A823]/60 text-[#7E1160] font-bold text-xs sm:text-sm hover:bg-[#F9F4EB] hover:border-[#DE7349] transition-all shadow-sm"
              >
                <Target className="w-4 h-4 text-[#DE7349]" />
                <span>Propósito & Ámbito</span>
              </a>

              <a
                href="#equipo-humano"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#FAF3E7] text-[#4E113C] font-bold text-xs sm:text-sm hover:bg-[#F3E6D3] transition-all"
              >
                <Users className="w-4 h-4 text-[#DE7349]" />
                <span>Equipo Humano</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Showcase featuring Team & Fieldwork */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Golden/Folk Frame */}
              <div className="relative rounded-3xl overflow-hidden p-2.5 sm:p-3 bg-gradient-to-br from-[#E5A823] via-[#945C2B] to-[#5C1645] shadow-2xl shadow-[#7E1160]/20">
                
                {/* Main Image Showcase */}
                <div className="relative rounded-2xl overflow-hidden bg-[#1E111C]">
                  <img
                    src="/assets/proyectos_en_accion/WhatsApp Image 2026-10-19 at 5.30.24 PM (1).webp"
                    alt="Corporación Soy Salvaguardarte en acción comunitaria en Galeras Sucre"
                    className="w-full h-[400px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>

                  {/* Official Emblem Top Left */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#FCFAF7]/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#640E4D] shadow">
                    <Award className="w-3.5 h-3.5 text-[#E5A823]" />
                    <span>Gestión y Patrimonio Comunitario</span>
                  </div>

                  {/* Text Overlay Bottom */}
                  <div className="absolute bottom-4 left-4 right-4 text-white space-y-2">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300 block">
                        Corporación Soy Salvaguardarte
                      </span>
                      <h4 className="font-serif-title text-lg sm:text-xl font-bold leading-tight">
                        Transformación Social desde el Arte y la Memoria
                      </h4>
                      <p className="text-xs text-[#E6D7E3] mt-1">
                        Trabajando hombro a hombro con niños, jóvenes, gestores y portadores de tradición de Galeras y el Caribe.
                      </p>
                    </div>

                    <div className="pt-2 flex items-center justify-between text-[11px] text-amber-200/90 border-t border-white/20">
                      <span>Galeras, Sucre · Colombia</span>
                      <span className="font-semibold text-white">Vigencia 2025 - 2026</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Objetivos Estratégicos */}
              <div className="hidden sm:flex absolute -bottom-5 -left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-[#E5A823]/30 items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#7E1160]/10 flex items-center justify-center text-[#7E1160]">
                  <Sparkles className="w-5 h-5 text-[#DE7349]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#2C2229]">6 Objetivos Estratégicos</div>
                  <div className="text-[11px] text-[#7A6A74]">Patrimonio, Formación y Circulación</div>
                </div>
              </div>

              {/* Floating Badge 2: Dirección y Representación */}
              <div className="hidden sm:flex absolute -top-5 -right-6 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-[#DE7349]/30 items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#DE7349]/15 flex items-center justify-center text-[#DE7349]">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#2C2229]">Equipo de Liderazgo</div>
                  <div className="text-[10px] text-[#7A6A74]">Dirección & Producción Artística</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
