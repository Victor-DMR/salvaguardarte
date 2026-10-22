import React, { useState } from 'react';
import { 
  Target, 
  Sparkles, 
  BookOpen, 
  Palette, 
  Share2, 
  Users2, 
  Handshake, 
  ArrowUpRight, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';

const strategicGoals = [
  {
    id: 'patrimonio-vivo',
    num: '01',
    title: 'Patrimonio Vivo',
    subtitle: 'Salvaguardia, Investigación y Memoria',
    desc: 'Fortalecer la identificación, investigación etnográfica, documentación rigurosa, protección, transmisión y apropiación social del patrimonio cultural material e inmaterial de Galeras, Sucre y Colombia, con especial compromiso en los Cuadros Vivos y saberes ancestrales en riesgo.',
    icon: Sparkles,
    badge: 'Salvaguardia Integral',
    actions: [
      'Documentación y registro etnográfico de saberes y portadores de tradición.',
      'Acompañamiento a colectivos de vigías del patrimonio cultural.',
      'Protección activa de las manifestaciones declaradas por la UNESCO y la Nación.'
    ]
  },
  {
    id: 'formacion',
    num: '02',
    title: 'Formación',
    subtitle: 'Pedagogía Artística & Saberes Comunitarios',
    desc: 'Diseñar e implementar procesos de formación artística comunitaria, cultural y patrimonial que fortalezcan las habilidades y liderazgos de niñas, niños, adolescentes, jóvenes, mujeres, maestros artesanos y gestores culturales.',
    icon: BookOpen,
    badge: 'Semilleros & Pedagogía',
    actions: [
      'Escuelas y talleres de iniciación y perfeccionamiento en artes plásticas y escénicas.',
      'Procesos de música tradicional sabanera: gaitas, cumbiambas y percusión.',
      'Transmisión directa de saberes entre sabedores mayores y nuevas generaciones.'
    ]
  },
  {
    id: 'creacion',
    num: '03',
    title: 'Creación',
    subtitle: 'Innovación, Arte Popular & Vanguardia',
    desc: 'Estimular la creación individual y colectiva, la experimentación interdisciplinaria y la producción de nuevas obras que dialoguen con la identidad local, releyendo las raíces culturales con creatividad e innovación contemporánea.',
    icon: Palette,
    badge: 'Expresión & Creación',
    actions: [
      'Residencias y laboratorios creativos en los barrios y veredas de Galeras.',
      'Nuevos montajes escénicos que fusionan tradición oral, música y artes vivas.',
      'Acompañamiento a creadores locales en la producción de contenidos con identidad.'
    ]
  },
  {
    id: 'circulacion',
    num: '04',
    title: 'Circulación',
    subtitle: 'Difusión, Encuentros & Movilidad Artística',
    desc: 'Promover la visibilidad, divulgación y circulación de artistas, agrupaciones, obras y saberes tradicionales a través de festivales, desfiles, ferias, circuitos itinerantes y plataformas digitales en ámbitos local, nacional e internacional.',
    icon: Share2,
    badge: 'Visibilidad & Difusión',
    actions: [
      'Puesta en valor en festivales regionales y convocatorias de circulación nacional.',
      'Producción de desfiles de tradiciones, muestras públicas y carnavales comunitarios.',
      'Circulación de mitos, leyendas, décimas y cantos de vaquería en nuevos escenarios.'
    ]
  },
  {
    id: 'fortalecimiento-comunitario',
    num: '05',
    title: 'Fortalecimiento Comunitario',
    subtitle: 'Inclusión, Equidad & Tejido Social',
    desc: 'Desarrollar proyectos participativos orientados a la garantía efectiva de los derechos culturales, la equidad de género, el liderazgo juvenil, la cohesión comunitaria y el estímulo a economías culturales éticas y sostenibles.',
    icon: Users2,
    badge: 'Tejido Social & Juventudes',
    actions: [
      'Proyectos comunitarios barriales como "Camino Joven" y "Jóvenes Dejando Huellas".',
      'Empoderamiento de comités comunitarios, colectivos de mujeres y familias creadoras.',
      'Generación de modelos de sostenibilidad y reconocimiento digno del trabajo cultural.'
    ]
  },
  {
    id: 'cooperacion',
    num: '06',
    title: 'Cooperación',
    subtitle: 'Alianzas Estratégicas & Concertación',
    desc: 'Consolidar alianzas estratégicas con entidades públicas y privadas, administraciones municipales, cabildos indígenas, instituciones educativas, corporaciones aliadas y fondos de cooperación nacional e internacional.',
    icon: Handshake,
    badge: 'Redes & Alianzas',
    actions: [
      'Concertación con el Ministerio de las Culturas, las Artes y los Saberes.',
      'Trabajo articulado con cabildos indígenas como Costa de Oro (Sampués).',
      'Articulación pedagógica con colegios como la IE Antonio Nariño (INEAN).'
    ]
  }
];

export default function ObjetivosSection() {
  const [selectedObjective, setSelectedObjective] = useState(0);

  return (
    <section id="objetivos" className="py-16 sm:py-24 bg-[#FCFAF7] relative overflow-hidden border-t border-[#EADFCB]">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#E5A823]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7E1160]/10 border border-[#7E1160]/20 text-xs font-bold text-[#7E1160] mb-3">
            <Target className="w-4 h-4 text-[#DE7349]" />
            <span>Plan Estratégico Corporativo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2B1B26] tracking-tight">
            Nuestros 6 Objetivos Estratégicos
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#61515C] leading-relaxed">
            Ejes rectores que fundamentan el actuar de la <strong>Corporación Soy Salvaguardarte</strong> en beneficio de Galeras, Sucre y Colombia.
          </p>
        </div>

        {/* 2-Column Interactive layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive List */}
          <div className="lg:col-span-6 space-y-3">
            {strategicGoals.map((obj, index) => {
              const Icon = obj.icon;
              const isSelected = selectedObjective === index;
              return (
                <div
                  key={obj.id}
                  onClick={() => setSelectedObjective(index)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between gap-4 ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#7E1160] to-[#590B44] text-white border-[#7E1160] shadow-lg shadow-[#7E1160]/20 translate-x-1.5'
                      : 'bg-white text-[#382833] border-[#EADFCB] hover:border-[#DE7349]/50 hover:bg-[#FDFBF7]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className={`w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black transition-colors ${
                      isSelected ? 'bg-[#E5A823] text-[#3D0A2E]' : 'bg-[#F4ECE1] text-[#7E1160]'
                    }`}>
                      {obj.num}
                    </span>
                    <div>
                      <h4 className="font-serif-title font-bold text-base sm:text-lg leading-snug line-clamp-1">
                        {obj.title}
                      </h4>
                      <span className={`text-[11px] font-medium block mt-0.5 ${
                        isSelected ? 'text-amber-200' : 'text-[#84747E]'
                      }`}>
                        {obj.subtitle}
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
            <div className="bg-gradient-to-br from-[#FFFBF5] to-[#FBF3E6] rounded-3xl p-7 sm:p-9 border border-[#E5A823]/40 shadow-xl shadow-[#7E1160]/5 space-y-6">
              
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#DE7349] bg-[#F7EFE4] px-3 py-1 rounded-full border border-[#DE7349]/20">
                  Eje Estratégico {strategicGoals[selectedObjective].num}
                </span>
                <span className="text-xs font-bold text-[#7E1160] bg-white px-3 py-1 rounded-full shadow-sm">
                  {strategicGoals[selectedObjective].badge}
                </span>
              </div>

              <div>
                <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#640E4D] leading-tight mb-2">
                  {strategicGoals[selectedObjective].title}
                </h3>
                <p className="text-sm font-semibold text-[#DE7349] mb-4">
                  {strategicGoals[selectedObjective].subtitle}
                </p>

                <p className="text-base text-[#4C3B47] leading-relaxed">
                  {strategicGoals[selectedObjective].desc}
                </p>
              </div>

              {/* Action lines for this objective */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/90 border border-[#E5A823]/30 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#7E1160] uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-[#DE7349]" />
                  <span>Líneas de Acción Territorial</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-[#554652]">
                  {strategicGoals[selectedObjective].actions.map((act, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#2D6A4F] flex-shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-[#8A7984] border-t border-[#EAE0D1]">
                <span>Estatutos Oficiales · Salvaguardarte</span>
                <span className="text-[#DE7349] font-bold">Galeras, Sucre · Colombia</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
