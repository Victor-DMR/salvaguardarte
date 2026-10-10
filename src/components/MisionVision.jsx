import React, { useState } from 'react';
import { Compass, Target, HeartHandshake, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export default function MisionVision() {
  const [activeTab, setActiveTab] = useState('mision');

  return (
    <section id="mision-vision" className="py-16 sm:py-24 bg-[#FCFAF7] relative overflow-hidden">
      
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#7E1160]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#DE7349]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7E1160]/10 border border-[#7E1160]/25 text-xs font-bold text-[#7E1160] mb-3">
            <Compass className="w-3.5 h-3.5 text-[#DE7349]" />
            <span>Marco Institucional y Horizonte Estratégico</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#291A25] tracking-tight">
            Misión, Visión 2035 y Compromiso
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#61515C] leading-relaxed">
            Nuestros principios rectores guían cada proyecto, investigación y jornada comunitaria por la preservación de nuestro patrimonio inmaterial.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-full bg-[#F3E9DC] border border-[#E5A823]/30 shadow-inner">
            <button
              onClick={() => setActiveTab('mision')}
              className={`flex items-center gap-2 px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeTab === 'mision'
                  ? 'bg-[#7E1160] text-white shadow-md'
                  : 'text-[#50404C] hover:text-[#7E1160]'
              }`}
            >
              <Compass className="w-4 h-4 text-[#E5A823]" />
              <span>Nuestra Misión</span>
            </button>

            <button
              onClick={() => setActiveTab('vision')}
              className={`flex items-center gap-2 px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeTab === 'vision'
                  ? 'bg-[#7E1160] text-white shadow-md'
                  : 'text-[#50404C] hover:text-[#7E1160]'
              }`}
            >
              <Target className="w-4 h-4 text-[#DE7349]" />
              <span>Nuestra Visión (2035)</span>
            </button>
          </div>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl shadow-[#7E1160]/5 border border-[#E5A823]/30">
          {activeTab === 'mision' ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              <div className="lg:col-span-8 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DE7349]/15 text-[#DE7349] text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Propósito Fundamental</span>
                </div>
                
                <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#640E4D] leading-tight">
                  Salvaguardar, Proteger y Dinamizar el Patrimonio Vivo
                </h3>

                <blockquote className="text-base sm:text-lg text-[#3D2E38] leading-relaxed border-l-4 border-[#DE7349] pl-5 italic font-normal bg-[#FDFBF7] py-2 rounded-r-xl">
                  "La Corporación Soy Salvaguardarte tiene como misión salvaguardar, proteger, investigar, preservar y dinamizar el patrimonio cultural material e inmaterial, histórico, artístico y natural de Colombia, reconociendo la diversidad de sus territorios, comunidades y expresiones culturales."
                </blockquote>

                <p className="text-sm sm:text-base text-[#554651] leading-relaxed">
                  Mediante la investigación, la formación, la creación artística, la transmisión intergeneracional de saberes, la circulación cultural y la innovación social, promovemos la participación comunitaria, la inclusión, la equidad, el liderazgo de niñas, niños, jóvenes y mujeres, y el fortalecimiento de las economías culturales y creativas.
                </p>

                <div className="p-4 rounded-2xl bg-[#FAF3E8] border border-[#E5A823]/30 text-xs sm:text-sm text-[#4E3E49] font-medium flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-[#DE7349] flex-shrink-0" />
                  <span>
                    <strong>Especial énfasis:</strong> Desde Galeras, Sucre, impulsamos especialmente la salvaguardia y proyección de los <strong>Cuadros Vivos</strong> y de las manifestaciones culturales de los territorios.
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 bg-gradient-to-br from-[#7E1160] to-[#540B40] text-white p-7 sm:p-8 rounded-3xl space-y-4 shadow-lg">
                <h4 className="font-serif-title text-xl font-bold text-[#E5A823]">
                  Líneas de Acción
                </h4>
                <ul className="space-y-3 text-xs sm:text-sm text-[#F7EBE0]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#DE7349] flex-shrink-0 mt-0.5" />
                    <span>Investigación y documentación etnográfica.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#DE7349] flex-shrink-0 mt-0.5" />
                    <span>Transmisión intergeneracional de saberes tradicionales.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#DE7349] flex-shrink-0 mt-0.5" />
                    <span>Liderazgo de niñas, niños, jóvenes y mujeres galeranas.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#DE7349] flex-shrink-0 mt-0.5" />
                    <span>Fortalecimiento de economías creativas sostenibles.</span>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              <div className="lg:col-span-8 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5A823]/20 text-[#8F6405] text-xs font-bold uppercase tracking-wider">
                  <Target className="w-3.5 h-3.5" />
                  <span>Horizonte Hacia el 2035</span>
                </div>

                <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#640E4D] leading-tight">
                  Referente Nacional y Reconocimiento Internacional
                </h3>

                <blockquote className="text-base sm:text-lg text-[#3D2E38] leading-relaxed border-l-4 border-[#E5A823] pl-5 italic font-normal bg-[#FDFBF7] py-2 rounded-r-xl">
                  "Para el año 2035, la Corporación Soy Salvaguardarte será una organización cultural referente en Colombia y reconocida internacionalmente por su liderazgo en la salvaguardia del patrimonio cultural, la innovación artística y la transformación social desde los territorios."
                </blockquote>

                <p className="text-sm sm:text-base text-[#554651] leading-relaxed">
                  Será un agente articulador de saberes, comunidades, creadores e instituciones, con capacidades sólidas para investigar, formar, crear, circular y gestionar iniciativas culturales sostenibles e inclusivas. Proyectará los Cuadros Vivos y la diversidad cultural de Colombia como referentes de identidad y memoria viva ante el mundo.
                </p>

                <div className="p-4 rounded-2xl bg-[#FAF3E8] border border-[#E5A823]/30 text-xs sm:text-sm text-[#4E3E49] font-medium flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-[#DE7349] flex-shrink-0" />
                  <span>
                    <strong>Meta Clave:</strong> Transmisión asegurada del patrimonio entre generaciones y construcción de comunidades más equitativas, participativas y sostenibles.
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 bg-gradient-to-br from-[#DE7349] to-[#AC4C24] text-white p-7 sm:p-8 rounded-3xl space-y-4 shadow-lg">
                <h4 className="font-serif-title text-xl font-bold text-[#FFE699]">
                  Impacto Proyectado
                </h4>
                <ul className="space-y-3 text-xs sm:text-sm text-[#FFF4E8]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FFE699] flex-shrink-0 mt-0.5" />
                    <span>Liderazgo en salvaguardia patrimonial ante la UNESCO.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FFE699] flex-shrink-0 mt-0.5" />
                    <span>Articulación global de creadores y gestores culturales.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FFE699] flex-shrink-0 mt-0.5" />
                    <span>Proyección internacional de los Cuadros Vivos de Galeras.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FFE699] flex-shrink-0 mt-0.5" />
                    <span>Modelos éticos de economía creativa comunitaria.</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Institutional Commitment Banner */}
          <div className="mt-12 pt-8 border-t border-[#F0E5D5] flex flex-col md:flex-row items-center gap-6 bg-[#FCFAF7] p-6 rounded-2xl">
            <div className="w-14 h-14 rounded-2xl bg-[#7E1160]/10 flex items-center justify-center text-[#7E1160] flex-shrink-0">
              <HeartHandshake className="w-7 h-7" />
            </div>
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs uppercase font-extrabold text-[#DE7349] tracking-wider block">
                Nuestro Compromiso Sagrado
              </span>
              <p className="text-sm sm:text-base text-[#463642] font-medium leading-relaxed italic">
                "Trabajamos para que el patrimonio permanezca vivo en las comunidades, se transmita entre generaciones y encuentre nuevas formas de expresión, participación y sostenibilidad. Creemos en la cultura como derecho, memoria compartida y fuerza para construir futuros más diversos, inclusivos y sostenibles."
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
