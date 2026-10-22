import React from 'react';
import { Handshake } from 'lucide-react';

const aliadosList = [
  {
    id: 'cuerpos-reconciliacion',
    name: 'Corporación Cuerpos para la Reconciliación',
    image: '/assets/aliados_fotos/Corporación_cue_pos para la_reconciliación.webp',
    filename: 'Corporación_cue_pos para la_reconciliación.webp'
  },
  {
    id: 'fundacion-gaimata',
    name: 'Fundación Gaimatá',
    image: '/assets/aliados_fotos/Fundación_Gaimatá.webp',
    filename: 'Fundación_Gaimatá.webp'
  },
  {
    id: 'fucas-social-cultural',
    name: 'Fundación Social Cultural (FUCAS)',
    image: '/assets/aliados_fotos/Fundación_social_cultural.webp',
    filename: 'Fundación_social_cultural.webp'
  },
  {
    id: 'institucion-antonio-narino',
    name: 'Institución Educativa Antonio Nariño (INEAN)',
    image: '/assets/aliados_fotos/Instituto_Educati_a_Antonio_Nariño.webp',
    filename: 'Instituto_Educati_a_Antonio_Nariño.webp'
  },
  {
    id: 'corporacion-bailadores-tradicionales',
    name: 'Corporación Bailadores Tradicionales',
    image: '/assets/aliados_fotos/corporacion_bailadores_tradicionales.webp',
    filename: 'corporacion_bailadores_tradicionales.webp'
  },
  {
    id: 'nicho-de-creadores',
    name: 'Nicho de Creadores',
    image: '/assets/aliados_fotos/nicho_de_creadores.webp',
    filename: 'nicho_de_creadores.webp'
  },
  {
    id: 'corporacion-nuevo-sol-naciente',
    name: 'Corporación Cultural Nuevo Sol Naciente',
    image: '/assets/aliados_fotos/corpracion_nuevo_naciente.webp',
    filename: 'corpracion_nuevo_naciente.webp'
  }
];

export default function AliadosSection() {
  return (
    <section id="aliados" className="py-16 sm:py-24 bg-gradient-to-b from-[#FCFAF7] via-[#F8F1E6]/70 to-[#FCFAF7] relative overflow-hidden border-t border-[#EADFCB]">
      
      {/* Decorative Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#DE7349]/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7E1160]/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DE7349]/15 border border-[#DE7349]/30 text-xs font-bold text-[#DE7349] uppercase tracking-wider mb-3">
            <Handshake className="w-4 h-4 text-[#DE7349]" />
            <span>Red Institucional y Colaborativa</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#291A25] tracking-tight font-serif-title leading-tight">
            Nuestros Aliados Estratégicos
          </h2>
        </div>

        {/* Grid of Allies: 7 Photos / Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6 items-center">
          {aliadosList.map((aliado) => (
            <div
              key={aliado.id}
              className="group bg-white rounded-3xl p-5 sm:p-6 flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl border border-[#E5A823]/30 hover:border-[#DE7349]/60 aspect-square"
            >
              <div className="w-full h-full flex items-center justify-center overflow-hidden">
                <img
                  src={encodeURI(aliado.image)}
                  alt={aliado.name}
                  title={aliado.name}
                  className="max-h-full max-w-full object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    if (!e.currentTarget.dataset.retried) {
                      e.currentTarget.dataset.retried = 'true';
                      e.currentTarget.src = `/assets/aliados_fotos/${encodeURIComponent(aliado.filename)}`;
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
