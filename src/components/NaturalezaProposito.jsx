import React, { useState } from 'react';
import { 
  Building2, 
  Target, 
  MapPin, 
  ShieldCheck, 
  Compass, 
  Sparkles, 
  CheckCircle2, 
  BookOpen, 
  Globe2, 
  HeartHandshake 
} from 'lucide-react';

export default function NaturalezaProposito() {
  const [activeTab, setActiveTab] = useState('naturaleza');

  return (
    <section id="naturaleza-proposito" className="py-16 sm:py-24 bg-[#FCFAF7] relative overflow-hidden">
      
      {/* Background soft glow accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#7E1160]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#DE7349]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7E1160]/10 border border-[#7E1160]/25 text-xs font-bold text-[#7E1160] mb-3">
            <ShieldCheck className="w-4 h-4 text-[#DE7349]" />
            <span>Marco Institucional & Identidad</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#291A25] tracking-tight">
            Naturaleza Jurídica, Propósito y Ámbito
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#61515C] leading-relaxed">
            Conoce los fundamentos legales, la razón de ser y el territorio de impacto que consolidan a la <strong>Corporación Soy Salvaguardarte</strong>.
          </p>
        </div>

        {/* 3 Interactive Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-full bg-[#F3E9DC] border border-[#E5A823]/30 shadow-inner flex-wrap justify-center gap-1">
            <button
              onClick={() => setActiveTab('naturaleza')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeTab === 'naturaleza'
                  ? 'bg-[#7E1160] text-white shadow-md'
                  : 'text-[#50404C] hover:text-[#7E1160]'
              }`}
            >
              <Building2 className="w-4 h-4 text-[#E5A823]" />
              <span>Naturaleza Jurídica</span>
            </button>

            <button
              onClick={() => setActiveTab('proposito')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeTab === 'proposito'
                  ? 'bg-[#7E1160] text-white shadow-md'
                  : 'text-[#50404C] hover:text-[#7E1160]'
              }`}
            >
              <Target className="w-4 h-4 text-[#DE7349]" />
              <span>Propósito Fundamental</span>
            </button>

            <button
              onClick={() => setActiveTab('ambito')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeTab === 'ambito'
                  ? 'bg-[#7E1160] text-white shadow-md'
                  : 'text-[#50404C] hover:text-[#7E1160]'
              }`}
            >
              <MapPin className="w-4 h-4 text-[#E5A823]" />
              <span>Ámbito de Actuación</span>
            </button>
          </div>
        </div>

        {/* Dynamic Content Panel */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl shadow-[#7E1160]/5 border border-[#E5A823]/30">
          
          {/* TAB 1: NATURALEZA JURÍDICA */}
          {activeTab === 'naturaleza' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              <div className="lg:col-span-8 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7E1160]/10 text-[#7E1160] text-xs font-bold uppercase tracking-wider">
                  <Building2 className="w-3.5 h-3.5 text-[#DE7349]" />
                  <span>Estructura Jurídica & Legalidad</span>
                </div>

                <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#640E4D] leading-tight">
                  Entidad Sin Ánimo de Lucro de Carácter Cultural y Social
                </h3>

                <blockquote className="text-base sm:text-lg text-[#3D2E38] leading-relaxed border-l-4 border-[#7E1160] pl-5 italic font-normal bg-[#FDFBF7] py-2 rounded-r-xl">
                  "La Corporación Soy Salvaguardarte es una entidad sin ánimo de lucro (ESAL), organizada como corporación civil, con personería jurídica, patrimonio propio y autonomía administrativa, conforme a la legislación de la República de Colombia."
                </blockquote>

                <p className="text-sm sm:text-base text-[#554651] leading-relaxed">
                  Nuestra corporación opera bajo los principios de transparencia, autogestión, corresponsabilidad y vocación de servicio comunitario. No persigue fines de lucro mercantil; todos sus excedentes y recursos se reinvierten en la misión cultural, en la investigación etnográfica y en los proyectos formativos y de salvaguardia de las comunidades.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-[#FAF3E8] border border-[#E5A823]/30 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#DE7349] flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#4E3E49]">
                      <strong>Personería Jurídica:</strong> Registrada en Cámara de Comercio con plena capacidad legal para formular y ejecutar convenios públicos y privados.
                    </span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#FAF3E8] border border-[#E5A823]/30 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#DE7349] flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#4E3E49]">
                      <strong>Gobernanza Ética:</strong> Conducción administrativa y legal bajo la dirección de profesionales del territorio galerano.
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 bg-gradient-to-br from-[#7E1160] to-[#540B40] text-white p-6 sm:p-7 rounded-3xl space-y-4 shadow-lg">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#E5A823] mb-2">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="font-serif-title text-xl font-bold text-[#E5A823]">
                  Rasgos de Nuestra Naturaleza
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#F7EBE0]">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E5A823] mt-2 flex-shrink-0"></span>
                    <span>Sin ánimo de lucro (ESAL cultural comunitaria).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E5A823] mt-2 flex-shrink-0"></span>
                    <span>Independencia partidaria y confesional.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E5A823] mt-2 flex-shrink-0"></span>
                    <span>Acreditada para celebrar convenios de concertación cultural nacional y departamental.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E5A823] mt-2 flex-shrink-0"></span>
                    <span>Rendición de cuentas continua ante asociados y la comunidad.</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* TAB 2: PROPÓSITO INSTITUCIONAL */}
          {activeTab === 'proposito' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              <div className="lg:col-span-8 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DE7349]/15 text-[#DE7349] text-xs font-bold uppercase tracking-wider">
                  <Target className="w-3.5 h-3.5" />
                  <span>Misión y Razón de Ser</span>
                </div>

                <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#640E4D] leading-tight">
                  Salvaguardar, Proteger, Formar y Dinamizar el Patrimonio Vivo
                </h3>

                <blockquote className="text-base sm:text-lg text-[#3D2E38] leading-relaxed border-l-4 border-[#DE7349] pl-5 italic font-normal bg-[#FDFBF7] py-2 rounded-r-xl">
                  "El propósito de la Corporación Soy Salvaguardarte es salvaguardar, proteger, investigar, preservar y dinamizar el patrimonio cultural material e inmaterial, histórico, artístico y natural de Colombia, fortaleciendo el tejido comunitario e intergeneracional."
                </blockquote>

                <p className="text-sm sm:text-base text-[#554651] leading-relaxed">
                  Actuamos como un puente vivo entre los maestros portadores de tradición y las nuevas generaciones. Promovemos la educación no formal, los semilleros infantiles y juveniles en música de gaitas, teatro de cuadros vivos, tradición oral, y facilitamos la circulación de obras en circuitos artísticos locales, nacionales e internacionales.
                </p>

                <div className="p-4 rounded-2xl bg-[#FAF3E8] border border-[#E5A823]/30 text-xs sm:text-sm text-[#4E3E49] font-medium flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-[#DE7349] flex-shrink-0" />
                  <span>
                    <strong>Compromiso con la Equidad:</strong> Priorizamos el protagonismo de niñas, niños, jóvenes, mujeres y portadores mayores como sujetos de derechos culturales y motores de paz.
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 bg-gradient-to-br from-[#DE7349] to-[#993718] text-white p-6 sm:p-7 rounded-3xl space-y-4 shadow-lg">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-amber-200 mb-2">
                  <Compass className="w-6 h-6" />
                </div>
                <h4 className="font-serif-title text-xl font-bold text-amber-200">
                  Pilares de Nuestro Propósito
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#FFF0E6]">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-300 mt-2 flex-shrink-0"></span>
                    <span>Transmisión intergeneracional de saberes tradicionales.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-300 mt-2 flex-shrink-0"></span>
                    <span>Investigación etnográfica y documentación rigurosa.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-300 mt-2 flex-shrink-0"></span>
                    <span>Circulación cultural en festivales, becas y encuentros.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-300 mt-2 flex-shrink-0"></span>
                    <span>Creación e innovación desde la identidad popular.</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* TAB 3: ÁMBITO DE ACTUACIÓN */}
          {activeTab === 'ambito' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              <div className="lg:col-span-8 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5A823]/20 text-[#8F6405] text-xs font-bold uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Cobertura Territorial & Redes</span>
                </div>

                <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#640E4D] leading-tight">
                  Desde Galeras, Sucre, Hacia el Caribe y el Mundo
                </h3>

                <blockquote className="text-base sm:text-lg text-[#3D2E38] leading-relaxed border-l-4 border-[#E5A823] pl-5 italic font-normal bg-[#FDFBF7] py-2 rounded-r-xl">
                  "El ámbito de actuación de la Corporación comprende el municipio de Galeras, las zonas rurales y corregimientos de Sucre, los territorios de la sabana caribeña y los escenarios culturales del orden departamental, nacional e internacional."
                </blockquote>

                <p className="text-sm sm:text-base text-[#554651] leading-relaxed">
                  Nuestra sede principal e inspiración histórica radica en <strong>Galeras, Sucre</strong>. Desde allí extendemos procesos de concertación y apoyo a comunidades indígenas (como el Cabildo Indígena Costa de Oro en Sampués), instituciones educativas públicas (como la IE Antonio Nariño - INEAN), corregimientos rurales (Pueblo Nuevo) y colectivos de jóvenes y vigías del patrimonio.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-[#FAF3E8] border border-[#E5A823]/30">
                    <span className="text-xs font-bold text-[#7E1160] block">Galeras & Sucre</span>
                    <p className="text-[11px] text-[#60505A] mt-0.5">Epicentro de cuadros vivos, alboradas, gaitas y memoria viva.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-[#FAF3E8] border border-[#E5A823]/30">
                    <span className="text-xs font-bold text-[#DE7349] block">Región Sabanas & Caribe</span>
                    <p className="text-[11px] text-[#60505A] mt-0.5">Sampués, Pueblo Nuevo, San Judas y redes interculturales.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-[#FAF3E8] border border-[#E5A823]/30">
                    <span className="text-xs font-bold text-[#2D6A4F] block">Nacional & Global</span>
                    <p className="text-[11px] text-[#60505A] mt-0.5">Convocatorias MinCultura, becas y proyección UNESCO.</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 bg-gradient-to-br from-[#2D6A4F] to-[#1B4332] text-white p-6 sm:p-7 rounded-3xl space-y-4 shadow-lg">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-emerald-200 mb-2">
                  <Globe2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif-title text-xl font-bold text-emerald-200">
                  Impacto Geográfico
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#E2F0EA]">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 mt-2 flex-shrink-0"></span>
                    <span>Sede operativa en Galeras, Sucre.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 mt-2 flex-shrink-0"></span>
                    <span>Proyectos intermunicipales en Sucre y Córdoba.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 mt-2 flex-shrink-0"></span>
                    <span>Intercambio con resguardos indígenas y comunidades campesinas.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 mt-2 flex-shrink-0"></span>
                    <span>Concertación con el Ministerio de las Culturas, las Artes y los Saberes.</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Institutional Horizon Banner */}
          <div className="mt-10 pt-6 border-t border-[#F0E5D5] flex flex-col md:flex-row items-center gap-5 bg-[#FCFAF7] p-5 sm:p-6 rounded-2xl">
            <div className="w-12 h-12 rounded-2xl bg-[#7E1160]/10 flex items-center justify-center text-[#7E1160] flex-shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs uppercase font-extrabold text-[#DE7349] tracking-wider block">
                Visión 2035 y Compromiso Territorial
              </span>
              <p className="text-xs sm:text-sm text-[#463642] font-medium leading-relaxed italic">
                "Para 2035, la Corporación Soy Salvaguardarte será una organización cultural referente en Colombia y reconocida internacionalmente por su liderazgo en la salvaguardia del patrimonio cultural, la innovación artística y la transformación social desde los territorios."
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
