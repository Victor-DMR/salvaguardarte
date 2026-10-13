import React, { useState } from 'react';
import { Calendar, Users, MapPin, Sparkles, Feather, Clock, Flame, ChevronRight } from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'La Memoria y el Lienzo Social',
    subtitle: 'Concepción Colectiva',
    desc: 'Familias, vecinos y artistas se reúnen en los patios para concebir la escena. No hay libretos cerrados: se eligen mitos locales, denuncias sociales, pasajes históricos o devociones sabaneras.',
    icon: Sparkles,
  },
  {
    step: '02',
    title: 'La Carpintería del Marco Efímero',
    subtitle: 'Madera, Telas y Caña Flecha',
    desc: 'Sobre la acera o el umbral de las casas se levanta un marco monumental de madera, decorado con ramas de algarrobo, palma de vino, cortinajes y telas que delimitan la ventana mágica.',
    icon: Feather,
  },
  {
    step: '03',
    title: 'La Caracterización de Diosas y Diosos',
    subtitle: 'Maquillaje, Ropajes y Atrezzo',
    desc: 'Horas antes del anochecer, los participantes se transforman con polvos de almidón, pigmentos minerales, atuendos campesinos o vestimentas alegóricas, asumiendo su rol teatral.',
    icon: Flame,
  },
  {
    step: '04',
    title: 'La Inmovilidad Sagrada en la Calle',
    subtitle: 'El Milagro Estático',
    desc: 'Al caer la noche, la calle se silencia y se encienden las luces. Durante horas, los cuerpos permanecen completamente inmóviles, desafiando la fatiga ante miles de espectadores conmovidos.',
    icon: Clock,
  },
];

export default function FestivalAlgarroba() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="festival" className="py-16 sm:py-24 bg-gradient-to-b from-[#FAF5EC] via-[#FCFAF7] to-[#FAF5EC] relative overflow-hidden">
      
      {/* Sombrero vueltiao decorative element */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DE7349]/15 border border-[#DE7349]/30 text-xs font-bold text-[#DE7349] mb-3">
            <Calendar className="w-3.5 h-3.5 text-[#DE7349]" />
            <span>Celebración Anual en Enero · Galeras, Sucre</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#291A25] tracking-tight">
            El Festival Folclórico de la Algarroba
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#61515C] leading-relaxed">
            Una fiesta donde el tiempo se detiene y la calle se convierte en un santuario del arte popular caribeño, reuniendo a gaiteros, poetas, artesanos y a los míticos protagonistas de los Cuadros Vivos.
          </p>
        </div>

        {/* Feature Cards Grid: 3 Pillars of Festival */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E8DEC9] flex flex-col">
            <div className="h-44 overflow-hidden relative">
              <img
                src="/assets/fotos/cuadro_vivo_7.webp"
                alt="Diosas y Diosos de Galeras"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-[#7E1160]/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">
                Creación Humana
              </div>
            </div>
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif-title text-xl font-bold text-[#2A1725] mb-2">
                  Diosas y Diosos Populares
                </h3>
                <p className="text-xs sm:text-sm text-[#5B4C56] leading-relaxed">
                  Así se denomina a los ciudadanos de Galeras que entregan su cuerpo a la inmovilidad. Desde niños de 6 años hasta ancianos de 80, todos son creadores y protagonistas de la obra.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E8DEC9] flex flex-col">
            <div className="h-44 overflow-hidden relative">
              <img
                src="/assets/fotos/desfile_algarroba_3.webp"
                alt="Desfile y Fiesta de la Algarroba"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-[#DE7349]/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">
                Fiesta Ancestral
              </div>
            </div>
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif-title text-xl font-bold text-[#2A1725] mb-2">
                  El Fruto del Algarrobo
                </h3>
                <p className="text-xs sm:text-sm text-[#5B4C56] leading-relaxed">
                  El árbol sagrado inspira la festividad y da origen a la tradicional jalea y dulces sabaneros que endulzan las noches festivaleras, símbolo de fertilidad, resistencia y arraigo natural.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E8DEC9] flex flex-col">
            <div className="h-44 overflow-hidden relative">
              <img
                src="/assets/fotos/cuadro_vivo_8.webp"
                alt="La Calle como Escenario en Galeras"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-[#E5A823]/90 text-[#321303] text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">
                Arte en la Calle
              </div>
            </div>
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif-title text-xl font-bold text-[#2A1725] mb-2">
                  La Calle como Escenario
                </h3>
                <p className="text-xs sm:text-sm text-[#5B4C56] leading-relaxed">
                  Sin palcos cerrados ni taquillas elitistas. Galeras democratiza el arte derribando cualquier frontera entre actor y espectador: el arte florece al pie de la puerta de cada hogar.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Interactive Stepper: ¿Cómo nace un Cuadro Vivo? */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-[#E5A823]/30">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-[#F0E6D8] gap-4">
            <div>
              <span className="text-xs uppercase font-extrabold text-[#DE7349] tracking-wider block">
                Proceso Comunitario
              </span>
              <h3 className="font-serif-title text-2xl font-bold text-[#640E4D]">
                ¿Cómo Nace un Cuadro Vivo en Galeras?
              </h3>
            </div>
            <span className="text-xs text-[#7A6A74] font-medium bg-[#FAF4EA] px-3.5 py-1.5 rounded-full border border-[#E5A823]/30">
              Paso {activeStep + 1} de {steps.length}
            </span>
          </div>

          {/* Stepper Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {steps.map((st, index) => {
              const Icon = st.icon;
              const isActive = activeStep === index;
              return (
                <button
                  key={st.step}
                  onClick={() => setActiveStep(index)}
                  className={`p-3.5 rounded-2xl text-left border transition-all duration-200 flex flex-col justify-between ${
                    isActive
                      ? 'bg-[#7E1160] text-white border-[#7E1160] shadow-md shadow-[#7E1160]/20 scale-102'
                      : 'bg-[#FCFAF7] text-[#4A3945] border-[#EADFCB] hover:bg-[#F7EFE4]'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <span className={`text-xs font-black ${isActive ? 'text-[#E5A823]' : 'text-[#DE7349]'}`}>
                      {st.step}
                    </span>
                    <Icon className="w-4 h-4 opacity-80" />
                  </div>
                  <span className="text-xs font-bold leading-snug line-clamp-1">{st.subtitle}</span>
                </button>
              );
            })}
          </div>

          {/* Active Step Showcase */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#FFFBF5] to-[#FBF4E8] border border-[#E5A823]/30 flex flex-col md:flex-row items-center gap-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-[#DE7349] to-[#E5A823] text-white flex items-center justify-center font-black text-2xl sm:text-3xl shadow-md flex-shrink-0">
              {steps[activeStep].step}
            </div>
            <div className="flex-1 text-center md:text-left space-y-2">
              <h4 className="font-serif-title text-xl sm:text-2xl font-bold text-[#640E4D]">
                {steps[activeStep].title}
              </h4>
              <p className="text-sm sm:text-base text-[#52424E] leading-relaxed">
                {steps[activeStep].desc}
              </p>
            </div>
            <button
              onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
              className="px-5 py-2.5 rounded-full bg-[#DE7349] text-white text-xs font-bold hover:bg-[#C85A32] transition-colors flex items-center gap-1.5 flex-shrink-0"
            >
              <span>Siguiente Fase</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
