import React, { useState } from 'react';
import { 
  Target, 
  BookOpen, 
  Palette, 
  Users2, 
  Coins, 
  Building2, 
  Globe, 
  Check, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

const objetivos = [
  {
    num: '01',
    title: 'Salvaguardia y gestión del patrimonio cultural',
    desc: 'Fortalecer la identificación, investigación, documentación, protección, transmisión y apropiación social del patrimonio cultural material e inmaterial de Colombia, con especial énfasis en los Cuadros Vivos de Galeras y en las manifestaciones que requieran procesos de salvaguardia.',
    icon: Target,
    badge: 'Prioridad UNESCO'
  },
  {
    num: '02',
    title: 'Formación, transmisión de saberes y liderazgo cultural',
    desc: 'Diseñar e implementar procesos de formación artística, cultural, patrimonial y comunitaria que fortalezcan las capacidades de niñas, niños, jóvenes, mujeres, artistas, portadores de tradición, gestores culturales y organizaciones sociales.',
    icon: BookOpen,
    badge: 'Comunidad & Semilleros'
  },
  {
    num: '03',
    title: 'Creación, innovación y circulación artística',
    desc: 'Impulsar la creación individual y colectiva, la experimentación interdisciplinaria y la circulación de obras, experiencias y manifestaciones culturales mediante encuentros, festivales, residencias, intercambios, plataformas digitales y alianzas nacionales e internacionales.',
    icon: Palette,
    badge: 'Innovación & Escena'
  },
  {
    num: '04',
    title: 'Inclusión, participación y transformación social',
    desc: 'Desarrollar iniciativas culturales accesibles y participativas que contribuyan a la garantía de derechos culturales, la equidad de género, el reconocimiento de la diversidad, el diálogo intercultural y el fortalecimiento del tejido social en comunidades urbanas y rurales.',
    icon: Users2,
    badge: 'Tejido Social Caribe'
  },
  {
    num: '05',
    title: 'Sostenibilidad económica y economías culturales y creativas',
    desc: 'Fortalecer las capacidades de emprendimiento, gestión, comercialización y generación de ingresos de artistas, portadores de tradición, emprendedores y organizaciones culturales, promoviendo modelos económicos éticos que reconozcan el valor del trabajo creativo y contribuyan a la sostenibilidad de los procesos patrimoniales.',
    icon: Coins,
    badge: 'Economía Naranja Ética'
  },
  {
    num: '06',
    title: 'Fortalecimiento institucional y cooperación estratégica',
    desc: 'Consolidar una estructura organizativa, administrativa, financiera y técnica transparente y sostenible, capaz de formular, gestionar y ejecutar proyectos de calidad, establecer alianzas con entidades públicas y privadas, acceder a fondos nacionales e internacionales y participar en redes de cooperación cultural.',
    icon: Building2,
    badge: 'Gobernanza & Alianzas'
  },
  {
    num: '07',
    title: 'Proyección nacional e internacional del patrimonio',
    desc: 'Posicionar a la Corporación Soy Salvaguardarte como una organización reconocida por su aporte a la salvaguardia patrimonial, mediante la documentación y difusión de experiencias, la participación en redes, la cooperación intercultural y la circulación de las expresiones culturales de Colombia, proyectando especialmente los Cuadros Vivos de Galeras a escenarios nacionales e internacionales.',
    icon: Globe,
    badge: 'Impacto Global'
  },
];

export default function ObjetivosSection() {
  const [selectedObjective, setSelectedObjective] = useState(0);

  return (
    <section id="objetivos" className="py-16 sm:py-24 bg-[#FCFAF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7E1160]/10 border border-[#7E1160]/20 text-xs font-bold text-[#7E1160] mb-3">
            <Target className="w-3.5 h-3.5 text-[#DE7349]" />
            <span>Ruta de Acción Estratégica</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2B1B26] tracking-tight">
            Nuestros 7 Objetivos Estratégicos
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#61515C] leading-relaxed">
            Metas medibles y transformadoras para asegurar que el patrimonio vivo de Galeras y Colombia prospere y trascienda fronteras.
          </p>
        </div>

        {/* 2-Column Interactive layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: List of 7 Goals */}
          <div className="lg:col-span-6 space-y-3">
            {objetivos.map((obj, index) => {
              const Icon = obj.icon;
              const isSelected = selectedObjective === index;
              return (
                <div
                  key={obj.num}
                  onClick={() => setSelectedObjective(index)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between gap-4 ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#7E1160] to-[#590B44] text-white border-[#7E1160] shadow-lg shadow-[#7E1160]/20 translate-x-1.5'
                      : 'bg-white text-[#382833] border-[#EADFCB] hover:border-[#DE7349]/50 hover:bg-[#FDFBF7]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black ${
                      isSelected ? 'bg-[#E5A823] text-[#3D0A2E]' : 'bg-[#F4ECE1] text-[#7E1160]'
                    }`}>
                      {obj.num}
                    </span>
                    <div>
                      <h4 className="font-serif-title font-bold text-sm sm:text-base leading-snug line-clamp-1">
                        {obj.title}
                      </h4>
                      <span className={`text-[11px] font-medium ${
                        isSelected ? 'text-amber-200' : 'text-[#84747E]'
                      }`}>
                        {obj.badge}
                      </span>
                    </div>
                  </div>

                  <ArrowUpRight className={`w-4 h-4 flex-shrink-0 transition-transform ${
                    isSelected ? 'rotate-45 text-[#E5A823]' : 'text-[#B4A4AF]'
                  }`} />
                </div>
              );
            })}
          </div>

          {/* Right Column: In-Depth Spotlight Card */}
          <div className="lg:col-span-6 sticky top-28">
            <div className="bg-gradient-to-br from-[#FFFBF5] to-[#FBF3E6] rounded-3xl p-7 sm:p-10 border border-[#E5A823]/40 shadow-xl shadow-[#7E1160]/5 space-y-6">
              
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#DE7349] bg-[#F7EFE4] px-3 py-1 rounded-full border border-[#DE7349]/20">
                  Objetivo Estratégico {objetivos[selectedObjective].num}
                </span>
                <span className="text-xs font-bold text-[#7E1160] bg-white px-3 py-1 rounded-full shadow-sm">
                  {objetivos[selectedObjective].badge}
                </span>
              </div>

              <div>
                <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#640E4D] leading-tight mb-4">
                  {objetivos[selectedObjective].title}
                </h3>

                <p className="text-base text-[#4C3B47] leading-relaxed">
                  {objetivos[selectedObjective].desc}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/80 border border-[#E5A823]/30 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#7E1160]">
                  <Sparkles className="w-4 h-4 text-[#DE7349]" />
                  <span>Enfoque Territorial y Comunitario</span>
                </div>
                <p className="text-xs text-[#63535E] leading-relaxed">
                  Implementado con participación activa desde Galeras, Sucre, vinculando a portadores de tradición, agentes culturales y entidades aliadas a nivel nacional e internacional.
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-[#8A7984]">
                <span>Estatutos Oficiales · Salvaguardarte</span>
                <span className="text-[#DE7349] font-bold">Galeras, Sucre</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
