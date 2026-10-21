import React from 'react';
import { 
  Users, 
  Award, 
  Briefcase, 
  Palette, 
  ShieldCheck, 
  Sparkles, 
  Mail, 
  MapPin, 
  CheckCircle2 
} from 'lucide-react';

export default function EquipoHumano() {
  const teamMembers = [
    {
      name: 'María Fernanda Severiche Olascuaga',
      role: 'Dirección & Representante Legal',
      badge: 'Liderazgo Institucional',
      category: 'Dirección General',
      description: 'Líder en la gestión cultural comunitaria y representación legal de la Corporación Soy Salvaguardarte. Conduce la formulación estratégica, la concertación de proyectos con entidades del orden nacional e internacional, la administración ética de recursos y la defensa integral del patrimonio material e inmaterial de Galeras y el Caribe.',
      responsibilities: [
        'Representación legal e institucional de la corporación ante entidades públicas y privadas.',
        'Formulación y gerencia de proyectos para convocatorias de MinCultura y cooperación internacional.',
        'Gobernanza, transparencia administrativa y sostenibilidad organizativa.',
        'Articulación de alianzas estratégicas con comunidades, resguardos y organizaciones aliadas.'
      ],
      avatarColor: 'from-[#7E1160] to-[#540B40]',
      accentColor: '#7E1160',
      initials: 'MF'
    },
    {
      name: 'Tatiana Narváez Pineda',
      role: 'Gestión & Producción Artística',
      badge: 'Creación & Operación Cultural',
      category: 'Producción Artística',
      description: 'Maestra en Artes escénicas, coordinación artística y gestión comunitaria en territorio. Articula los procesos de formación, el montaje de eventos culturales, la relación directa con creadores, directores de comparsas, músicos de gaita, portadores de tradición y el equipo técnico de campo.',
      responsibilities: [
        'Dirección y coordinación de producción en eventos, desfiles y festivales culturales.',
        'Seguimiento pedagógico y metodológico en semilleros de formación artística.',
        'Acompañamiento a colectivos comunitarios, jóvenes y portadores de tradición oral.',
        'Curaduría artística, logística de montajes y puesta en escena territorial.'
      ],
      avatarColor: 'from-[#DE7349] to-[#993718]',
      accentColor: '#DE7349',
      initials: 'TN'
    }
  ];

  return (
    <section id="equipo-humano" className="py-16 sm:py-24 bg-gradient-to-b from-[#FCFAF7] via-[#F8F2E9]/60 to-[#FCFAF7] relative overflow-hidden">
      
      {/* Decorative background glows */}
      <div className="absolute top-1/4 right-5 w-72 h-72 bg-[#E5A823]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-5 w-80 h-80 bg-[#7E1160]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7E1160]/10 border border-[#7E1160]/20 text-xs font-bold text-[#7E1160] mb-3">
            <Users className="w-4 h-4 text-[#DE7349]" />
            <span>Estructura Organizacional & Talento Humano</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2B1B26] tracking-tight">
            Nuestro Equipo Humano
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#61515C] leading-relaxed">
            Hombres y mujeres con vocación, arraigo territorial y rigor profesional lideran el presente y el futuro de la <strong>Corporación Soy Salvaguardarte</strong>.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 sm:p-9 border border-[#E5A823]/30 shadow-xl shadow-[#7E1160]/5 flex flex-col justify-between hover:border-[#DE7349]/60 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group"
            >
              {/* Top Accent Gradient Bar */}
              <div 
                className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r"
                style={{
                  backgroundImage: idx === 0 
                    ? 'linear-gradient(to right, #7E1160, #C85A32, #E5A823)' 
                    : 'linear-gradient(to right, #DE7349, #E5A823, #2D6A4F)'
                }}
              ></div>

              <div className="space-y-6">
                
                {/* Profile Header */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${member.avatarColor} text-white flex items-center justify-center font-serif-title text-2xl sm:text-3xl font-bold shadow-md flex-shrink-0 border-2 border-white/80`}>
                    {member.initials}
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DE7349] bg-[#FAF3E8] px-2.5 py-0.5 rounded-full border border-[#DE7349]/20">
                        {member.badge}
                      </span>
                    </div>

                    <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-[#2A1825] leading-tight">
                      {member.name}
                    </h3>
                    
                    <p className="text-sm font-semibold text-[#7E1160] mt-0.5">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Bio Description */}
                <p className="text-sm sm:text-base text-[#52414E] leading-relaxed">
                  {member.description}
                </p>

                {/* Key Responsibilities */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#FCFAF7] border border-[#EADFCB] space-y-2.5">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#7E1160] flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[#DE7349]" />
                    <span>Responsabilidades y Competencias Clave</span>
                  </h4>

                  <ul className="space-y-2 text-xs sm:text-sm text-[#4E3E49]">
                    {member.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#2D6A4F] flex-shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Bottom Institutional Seal */}
              <div className="mt-6 pt-4 border-t border-[#F0E5D5] flex items-center justify-between text-xs text-[#8A7984]">
                <div className="flex items-center gap-1.5 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#DE7349]" />
                  <span>Galeras, Sucre</span>
                </div>
                <span className="font-semibold text-[#7E1160]">Corporación Soy Salvaguardarte</span>
              </div>

            </div>
          ))}
        </div>

        {/* Commitment statement */}
        <div className="mt-12 text-center max-w-2xl mx-auto p-5 rounded-2xl bg-white/80 border border-[#E5A823]/30 shadow-sm">
          <p className="text-xs sm:text-sm text-[#5B4956] leading-relaxed">
            Nuestro equipo humano trabaja de la mano con líderes comunales, maestros artesanos, comités de vigías y formadores para ejecutar con rigurosidad y transparencia cada proyecto cultural en territorio.
          </p>
        </div>

      </div>
    </section>
  );
}
