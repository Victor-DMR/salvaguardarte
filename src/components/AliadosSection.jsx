import React, { useState } from 'react';
import { 
  Handshake, 
  Sparkles, 
  Heart, 
  GraduationCap, 
  Music, 
  MapPin, 
  ShieldCheck, 
  Info, 
  Eye, 
  X,
  Award,
  ArrowUpRight
} from 'lucide-react';

const aliadosList = [
  {
    id: 'cuerpos-reconciliacion',
    name: 'Corporación Cuerpos para la Reconciliación',
    shortName: 'Cuerpos para la Reconciliación',
    subtitle: 'Embodying Reconciliation · Arte, Memoria y Paz',
    filename: 'Corporación_cue_pos para la_reconciliación.jpeg',
    image: '/assets/aliados_fotos/Corporación_cue_pos para la_reconciliación.jpeg',
    category: 'Paz y Memoria',
    badgeColor: 'bg-[#7E1160] text-white',
    accentBorder: 'border-[#7E1160]/30 hover:border-[#7E1160]',
    accentGlow: 'group-hover:shadow-[#7E1160]/20',
    icon: Heart,
    location: 'Colombia · Red Caribe',
    focusArea: 'Artes escénicas, reconciliación comunitaria y territorio corporal',
    description: 'Organización aliada dedicada a la resignificación del cuerpo como territorio de memoria, paz y reconciliación a través de las artes plásticas, escénicas y el diálogo restaurativo en las comunidades.',
    initiatives: [
      'Procesos de memoria viva y sanación comunitaria',
      'Articulación de expresiones corporales en el espacio público',
      'Talleres pedagógicos de no violencia y diálogo intercultural'
    ]
  },
  {
    id: 'fundacion-gaimata',
    name: 'Fundación Gaimatá',
    shortName: 'Fundación Gaimatá',
    subtitle: 'Cultura Ancestral & Saberes Vivos',
    filename: 'Fundación_Gaimatá.jpeg',
    image: '/assets/aliados_fotos/Fundación_Gaimatá.jpeg',
    category: 'Música y Saberes Ancestrales',
    badgeColor: 'bg-[#DE7349] text-white',
    accentBorder: 'border-[#DE7349]/30 hover:border-[#DE7349]',
    accentGlow: 'group-hover:shadow-[#DE7349]/20',
    icon: Music,
    location: 'Galeras · Sucre · Caribe',
    focusArea: 'Gaita tradicional, oralidad campesina y memoria afro-indígena',
    description: 'Aliado esencial en la investigación, revitalización y difusión de las sonoridades de la sabana, la música de gaita tradicional, los cantos de monte y la salvaguardia de las raíces ancestrales sabaneras.',
    initiatives: [
      'Formación de semilleros de gaita y flauta de millo',
      'Investigación etnomusical y salvaguardia de la tradición oral',
      'Encuentros y ruedas de gaita en barrios y veredas de Galeras'
    ]
  },
  {
    id: 'fucas-social-cultural',
    name: 'Fundación Social Cultural (FUCAS)',
    shortName: 'FUCAS Social Cultural',
    subtitle: 'Gestión Comunitaria & Expresión Artística',
    filename: 'Fundación_social_cultural.jpeg',
    image: '/assets/aliados_fotos/Fundación_social_cultural.jpeg',
    category: 'Desarrollo Comunitario',
    badgeColor: 'bg-[#2D6A4F] text-white',
    accentBorder: 'border-[#2D6A4F]/30 hover:border-[#2D6A4F]',
    accentGlow: 'group-hover:shadow-[#2D6A4F]/20',
    icon: Sparkles,
    location: 'Galeras · Sucre',
    focusArea: 'Gestión cultural popular, empoderamiento barrial y festividades',
    description: 'Entidad comunitaria consagrada al fomento del tejido social, facilitando espacios de participación artística para la niñez y la juventud, y dinamizando las expresiones festivas tradicionales de Galeras.',
    initiatives: [
      'Acompañamiento a colectivos comunitarios y barriales',
      'Talleres de artes plásticas, danza y creatividad popular',
      'Articulación logística y artística en celebraciones tradicionales'
    ]
  },
  {
    id: 'institucion-antonio-narino',
    name: 'Institución Educativa Antonio Nariño (INEAN)',
    shortName: 'INEAN Galeras',
    subtitle: 'Ciencia, Paz y Libertad · Semillero Patrimonial',
    filename: 'Instituto_Educati_a_Antonio_Nariño.jpeg',
    image: '/assets/aliados_fotos/Instituto_Educati_a_Antonio_Nariño.jpeg',
    category: 'Educación y Semilleros',
    badgeColor: 'bg-[#E5A823] text-[#291A25]',
    accentBorder: 'border-[#E5A823]/40 hover:border-[#E5A823]',
    accentGlow: 'group-hover:shadow-[#E5A823]/25',
    icon: GraduationCap,
    location: 'Galeras · Sucre',
    focusArea: 'Formación escolar, pedagogía patrimonial y relevo generacional',
    description: 'Epicentro educativo emblemático de Galeras donde convergen la ciencia, los valores cívicos y la custodia del patrimonio. Es el semillero natural donde niñas, niños y jóvenes aprenden el valor de los Cuadros Vivos.',
    initiatives: [
      'Proyectos pedagógicos de aula en torno a los Cuadros Vivos',
      'Formación de nuevos cuadros vivos infantiles y juveniles',
      'Custodia y transmisión escolar del legado patrimonial UNESCO'
    ]
  }
];

export default function AliadosSection() {
  const [selectedAliado, setSelectedAliado] = useState(null);

  return (
    <section id="aliados" className="py-20 sm:py-28 bg-gradient-to-b from-[#FCFAF7] via-[#F8F1E6]/70 to-[#FCFAF7] relative overflow-hidden border-t border-[#EADFCB]">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#DE7349]/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7E1160]/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DE7349]/15 border border-[#DE7349]/30 text-xs font-bold text-[#DE7349] uppercase tracking-wider mb-4">
            <Handshake className="w-4 h-4 text-[#DE7349]" />
            <span>Red Institucional y Colaborativa</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#291A25] tracking-tight font-serif-title leading-tight">
            Nuestros Aliados Estratégicos
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#61515C] leading-relaxed">
            La salvaguardia del patrimonio inmaterial, la memoria viva y la creatividad en Galeras es una labor colectiva. Trabajamos hombro a hombro con organizaciones, fundaciones e instituciones que fortalecen nuestra identidad cultural.
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-[#EADFCB] shadow-xs text-center">
              <span className="block text-2xl font-black text-[#7E1160]">4</span>
              <span className="text-[11px] font-semibold text-[#7A6A74] uppercase tracking-wider">Aliados Clave</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-[#EADFCB] shadow-xs text-center">
              <span className="block text-2xl font-black text-[#DE7349]">100%</span>
              <span className="text-[11px] font-semibold text-[#7A6A74] uppercase tracking-wider">Comunitario</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-[#EADFCB] shadow-xs text-center">
              <span className="block text-2xl font-black text-[#2D6A4F]">UNESCO</span>
              <span className="text-[11px] font-semibold text-[#7A6A74] uppercase tracking-wider">Compromiso</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-[#EADFCB] shadow-xs text-center">
              <span className="block text-2xl font-black text-[#E5A823]">2035</span>
              <span className="text-[11px] font-semibold text-[#7A6A74] uppercase tracking-wider">Visión Futura</span>
            </div>
          </div>
        </div>

        {/* Grid of Allies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {aliadosList.map((aliado) => {
            const IconComponent = aliado.icon;
            return (
              <div
                key={aliado.id}
                className={`group relative bg-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl border ${aliado.accentBorder} ${aliado.accentGlow}`}
              >
                {/* Top Badge & Category */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className={`inline-flex items-center gap-1.5 text-[11px] font-extrabold px-2.5 py-1 rounded-full ${aliado.badgeColor} shadow-xs`}>
                    <IconComponent className="w-3 h-3" />
                    <span>{aliado.category}</span>
                  </span>
                  <span className="text-[11px] font-medium text-[#8F7D89] flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#DE7349]" />
                    {aliado.location.split('·')[0].trim()}
                  </span>
                </div>

                {/* Ally Photo / Logo */}
                <div className="relative mb-6 flex items-center justify-center">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-tr from-[#FCFAF7] to-[#F3EBE1] p-3 flex items-center justify-center border border-[#EADFCB] shadow-inner group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                    <img
                      src={aliado.image}
                      alt={`Logo oficial de ${aliado.name}`}
                      className="w-full h-full object-contain filter drop-shadow-sm transition-all duration-300 group-hover:brightness-105"
                      loading="lazy"
                      onError={(e) => {
                        // Fallback to encodeURI if needed
                        if (!e.currentTarget.dataset.retried) {
                          e.currentTarget.dataset.retried = 'true';
                          e.currentTarget.src = `/assets/aliados_fotos/${encodeURIComponent(aliado.filename)}`;
                        }
                      }}
                    />
                  </div>

                  {/* Quick view button overlay */}
                  <button
                    onClick={() => setSelectedAliado(aliado)}
                    className="absolute bottom-1 right-3 sm:right-6 bg-white/90 backdrop-blur-md text-[#7E1160] hover:text-[#DE7349] p-2 rounded-full shadow-md border border-[#EADFCB] opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
                    title={`Ver detalles de ${aliado.name}`}
                    aria-label={`Ver detalles de ${aliado.name}`}
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Ally Details */}
                <div className="flex-1 flex flex-col">
                  {/* Name of Provider / Entity (Highlighted as requested) */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#291A25] group-hover:text-[#7E1160] transition-colors leading-snug">
                    {aliado.name}
                  </h3>

                  <p className="mt-1 text-xs font-semibold text-[#DE7349]">
                    {aliado.subtitle}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-[#61515C] leading-relaxed line-clamp-3">
                    {aliado.description}
                  </p>

                  {/* Focus Area Pill */}
                  <div className="mt-4 pt-4 border-t border-[#F0E6D8] mt-auto">
                    <span className="block text-[10px] uppercase font-bold tracking-wider text-[#8F7D89] mb-1">
                      Línea de Articulación:
                    </span>
                    <p className="text-xs text-[#483944] font-medium leading-tight">
                      {aliado.focusArea}
                    </p>
                  </div>
                </div>

                {/* Bottom Action */}
                <button
                  onClick={() => setSelectedAliado(aliado)}
                  className="mt-5 w-full py-2.5 px-4 rounded-xl text-xs font-bold text-[#7E1160] bg-[#FCFAF7] hover:bg-[#7E1160] hover:text-white border border-[#EADFCB] hover:border-[#7E1160] transition-all duration-200 flex items-center justify-center gap-2 group/btn cursor-pointer"
                >
                  <span>Conocer Alianza</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Cooperation & Inclusion Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#7E1160] via-[#8C166C] to-[#590B44] text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[radial-gradient(circle_at_center,rgba(229,168,35,0.18)_0,transparent_70%)] pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E5A823] bg-white/10 px-3 py-1 rounded-full mb-3">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E5A823]" />
                Alianzas para el Desarrollo Cultural Sostenible
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-serif-title leading-tight">
                ¿Tu institución u organización desea vincularse a Salvaguardarte?
              </h3>
              <p className="mt-3 text-sm text-[#F6E7F1] leading-relaxed">
                Fortalecemos convenios pedagógicos, patrocinios comunitarios y co-creación artística para salvaguardar los Cuadros Vivos de Galeras como Patrimonio Inmaterial de la Humanidad.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto flex-shrink-0">
              <a
                href="#comunidad"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#E5A823] hover:bg-[#d69919] text-[#3A0A2E] font-extrabold text-sm shadow-md hover:shadow-lg transition-all duration-200"
              >
                <span>Proponer Alianza</span>
                <Handshake className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Modal with Details of the Ally */}
      {selectedAliado && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedAliado(null)}
        >
          <div 
            className="bg-[#FCFAF7] rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#EADFCB] relative overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedAliado(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white hover:bg-red-50 text-[#61515C] hover:text-red-600 transition-colors border border-[#EADFCB] shadow-xs cursor-pointer z-10"
              aria-label="Cerrar ventana"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-[#EADFCB]">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-white p-3 flex-shrink-0 flex items-center justify-center border border-[#EADFCB] shadow-md">
                <img
                  src={selectedAliado.image}
                  alt={selectedAliado.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="text-center sm:text-left flex-1">
                <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full ${selectedAliado.badgeColor} mb-2`}>
                  {selectedAliado.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#291A25] leading-snug">
                  {selectedAliado.name}
                </h3>
                <p className="text-sm font-semibold text-[#DE7349] mt-0.5">
                  {selectedAliado.subtitle}
                </p>
                <p className="text-xs text-[#7A6A74] flex items-center justify-center sm:justify-start gap-1.5 mt-2">
                  <MapPin className="w-3.5 h-3.5 text-[#DE7349]" />
                  {selectedAliado.location}
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="py-6 space-y-5">
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-[#7E1160] mb-2 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5" />
                  <span>Sobre la Organización y su Rol</span>
                </h4>
                <p className="text-sm text-[#483944] leading-relaxed">
                  {selectedAliado.description}
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-[#EADFCB]/80">
                <h4 className="text-xs font-black uppercase tracking-wider text-[#DE7349] mb-2.5 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>Líneas de Trabajo e Impacto Conjunto</span>
                </h4>
                <ul className="space-y-2">
                  {selectedAliado.initiatives.map((init, i) => (
                    <li key={i} className="text-xs sm:text-sm text-[#61515C] flex items-start gap-2">
                      <span className="text-[#DE7349] font-bold mt-0.5">•</span>
                      <span>{init}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-[#EADFCB] flex items-center justify-between">
              <span className="text-xs text-[#8F7D89]">
                Aliado acreditado por Soy Salvaguardarte
              </span>
              <button
                onClick={() => setSelectedAliado(null)}
                className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-[#7E1160] hover:bg-[#590B44] transition-colors shadow-sm cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
