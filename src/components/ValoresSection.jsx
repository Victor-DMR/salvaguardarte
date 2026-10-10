import React, { useState } from 'react';
import { 
  Shield, 
  Globe2, 
  Users, 
  Sparkles, 
  Handshake, 
  Heart, 
  Scale, 
  Leaf,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';

const valores = [
  {
    num: '01',
    title: 'Respeto y salvaguardia del patrimonio',
    desc: 'Reconocemos el valor de las memorias, los conocimientos, las tradiciones, los bienes culturales y las expresiones artísticas de las comunidades. Actuamos con responsabilidad frente a su protección, continuidad, transmisión y transformación legítima.',
    icon: Shield,
    color: 'from-[#7E1160] to-[#590B44]',
    accent: '#7E1160'
  },
  {
    num: '02',
    title: 'Diversidad e interculturalidad',
    desc: 'Valoramos la pluralidad cultural, étnica, territorial y artística de Colombia. Promovemos el diálogo respetuoso entre comunidades y culturas, sin discriminación ni imposición de una única manera de comprender y expresar el patrimonio.',
    icon: Globe2,
    color: 'from-[#DE7349] to-[#BF5328]',
    accent: '#DE7349'
  },
  {
    num: '03',
    title: 'Inclusión y equidad',
    desc: 'Impulsamos oportunidades de participación y acceso a la cultura para niñas, niños, jóvenes, mujeres, personas con discapacidad, comunidades étnicas y poblaciones históricamente excluidas, reconociendo sus derechos, capacidades y aportes.',
    icon: Users,
    color: 'from-[#E5A823] to-[#B37F10]',
    accent: '#E5A823'
  },
  {
    num: '04',
    title: 'Creatividad e innovación',
    desc: 'Promovemos nuevas formas de investigar, interpretar, transmitir y proyectar el patrimonio, articulando los saberes tradicionales con los lenguajes artísticos, las tecnologías y las herramientas contemporáneas.',
    icon: Sparkles,
    color: 'from-[#7E1160] to-[#991775]',
    accent: '#7E1160'
  },
  {
    num: '05',
    title: 'Participación y corresponsabilidad comunitaria',
    desc: 'Reconocemos a las comunidades como protagonistas de sus procesos culturales. Escuchamos sus voces, promovemos decisiones participativas y compartimos responsabilidades en la protección y transmisión de sus patrimonios.',
    icon: Handshake,
    color: 'from-[#DE7349] to-[#C85A32]',
    accent: '#DE7349'
  },
  {
    num: '06',
    title: 'Solidaridad y transformación social',
    desc: 'Utilizamos el arte y la cultura como medios para fortalecer los vínculos comunitarios, promover la convivencia, ampliar las oportunidades y contribuir a la construcción de territorios más justos y participativos.',
    icon: Heart,
    color: 'from-[#2D6A4F] to-[#1E4835]',
    accent: '#2D6A4F'
  },
  {
    num: '07',
    title: 'Integridad y transparencia',
    desc: 'Administramos los recursos con honestidad, responsabilidad y trazabilidad. Actuamos con coherencia entre nuestros principios, compromisos, decisiones y resultados, rindiendo cuentas a las comunidades, aliados y entidades financiadoras.',
    icon: Scale,
    color: 'from-[#7E1160] to-[#590B44]',
    accent: '#7E1160'
  },
  {
    num: '08',
    title: 'Sostenibilidad y compromiso territorial',
    desc: 'Promovemos procesos culturales que puedan mantenerse en el tiempo, fortalezcan las capacidades locales, generen oportunidades económicas dignas y contribuyan al cuidado del ambiente y al bienestar colectivo.',
    icon: Leaf,
    color: 'from-[#DE7349] to-[#E5A823]',
    accent: '#DE7349'
  },
];

export default function ValoresSection() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="valores" className="py-16 sm:py-24 bg-[#FAF5EB]/60 border-t border-[#EAE0D1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5A823]/20 border border-[#E5A823]/30 text-xs font-bold text-[#8A6107] mb-3">
            <Shield className="w-3.5 h-3.5 text-[#DE7349]" />
            <span>Nuestros Principios Esenciales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2B1B26] tracking-tight">
            Nuestros 8 Valores Institucionales
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#63535E] leading-relaxed">
            La ética, la pasión comunitaria y el respeto sagrado por nuestras raíces sustentan cada acción de la Corporación Soy Salvaguardarte.
          </p>
        </div>

        {/* 8 Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valores.map((item, idx) => {
            const Icon = item.icon;
            const isExpanded = expandedIndex === idx;
            return (
              <div
                key={item.num}
                onClick={() => toggleExpand(idx)}
                className={`bg-white rounded-3xl p-6 transition-all duration-300 border cursor-pointer flex flex-col justify-between ${
                  isExpanded
                    ? 'border-[#7E1160] shadow-xl shadow-[#7E1160]/10 scale-102 ring-2 ring-[#7E1160]/20'
                    : 'border-[#EADFCB] hover:border-[#DE7349]/50 hover:shadow-lg'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-black tracking-widest text-[#DE7349] bg-[#F7EFE4] px-2.5 py-1 rounded-lg">
                      {item.num}
                    </span>
                    <div className={`w-11 h-11 rounded-2xl bg-gradient-to-tr ${item.color} text-white flex items-center justify-center shadow-md`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif-title text-lg font-bold text-[#2A1825] leading-snug mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5C4C56] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F2E8DC] flex items-center justify-between text-[11px] text-[#867580]">
                  <span className="font-semibold text-[#DE7349]">Soy Salvaguardarte</span>
                  <CheckCircle2 className="w-4 h-4 text-[#E5A823]" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
