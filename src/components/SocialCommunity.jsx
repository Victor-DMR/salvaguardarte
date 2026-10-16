import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  ExternalLink, 
  Share2, 
  Heart, 
  MessageCircle, 
  Send, 
  Sparkles, 
  CheckCircle,
  MapPin,
  Calendar
} from 'lucide-react';
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from './SocialIcons';

export default function SocialCommunity() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const instagramUrl = "https://www.instagram.com/csalvaguardarte?vrfl=Y2J0cWFnNm00czlk";
  const facebookUrl = "https://www.facebook.com/profile.php?id=61578281295144&mibextid=wwXIfr&rdid=EaJDqiwmh4LySUrJ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1EgsWtiukh%2F%3Fmibextid%3DwwXIfr#";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#7E1160', '#DE7349', '#E5A823', '#2D6A4F']
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 5000);
  };

  return (
    <section id="comunidad" className="py-16 sm:py-24 bg-gradient-to-b from-[#FCFAF7] via-[#F8F1E6] to-[#FAF5EB] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DE7349]/15 border border-[#DE7349]/30 text-xs font-bold text-[#DE7349] mb-3">
            <Share2 className="w-3.5 h-3.5 text-[#DE7349]" />
            <span>Nuestra Comunidad Digital y Redes Sociales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#291A25] tracking-tight">
            Conéctate con Salvaguardarte Galeras
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#61515C] leading-relaxed">
            Sigue de cerca cada ensayo, exposición callejera, taller formativo y crónica del Festival Folclórico de la Algarroba en nuestras plataformas oficiales.
          </p>
        </div>

        {/* 2 Big Social Media Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Instagram Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-[#7E1160]/5 border border-[#E5A823]/30 flex flex-col justify-between group hover:border-[#DE7349] transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3.5">
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white flex items-center justify-center p-3 shadow-md">
                    <InstagramIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-serif-title text-xl font-bold text-[#2A1725] leading-snug">
                      Instagram Oficial
                    </h3>
                    <span className="text-xs text-[#DE7349] font-bold">@csalvaguardarte</span>
                  </div>
                </div>

                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-[#FAF0E4] hover:bg-[#F2DEC8] text-[#7E1160] text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <span>Seguir</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <p className="text-xs sm:text-sm text-[#5B4C56] leading-relaxed mb-6">
                Historias visuales en tiempo real, reels de los ensayos de inmovilidad, retratos de las diosas y diosos de Galeras, y la magia del Caribe sucreño en tu feed.
              </p>

              {/* Mock Instagram Feed Preview with real WebP photos */}
              <div className="grid grid-cols-3 gap-2 rounded-2xl overflow-hidden mb-6">
                <div className="relative h-24 overflow-hidden group/img">
                  <img
                    src="/assets/fotos/cuadro_vivo_3.webp"
                    alt="Cuadro Vivo post"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover/img:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity text-white text-[10px] font-bold">
                    ❤️ 245
                  </div>
                </div>
                <div className="relative h-24 overflow-hidden group/img">
                  <img
                    src="/assets/fotos/musica_gaita_2.webp"
                    alt="Músicos sabaneros post"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover/img:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity text-white text-[10px] font-bold">
                    ❤️ 310
                  </div>
                </div>
                <div className="relative h-24 overflow-hidden group/img">
                  <img
                    src="/assets/fotos/desfile_algarroba_2.webp"
                    alt="Danza post"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover/img:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity text-white text-[10px] font-bold">
                    ❤️ 288
                  </div>
                </div>
                <div className="relative h-24 overflow-hidden group/img">
                  <img
                    src="/assets/fotos/taller_comunitario_1.webp"
                    alt="Talleres con la comunidad post"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover/img:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity text-white text-[10px] font-bold">
                    ❤️ 195
                  </div>
                </div>
                <div className="relative h-24 overflow-hidden group/img">
                  <img
                    src="/assets/fotos/cuadro_vivo_4.webp"
                    alt="Diosas y diosos post"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover/img:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity text-white text-[10px] font-bold">
                    ❤️ 412
                  </div>
                </div>
                <div className="relative h-24 overflow-hidden group/img">
                  <img
                    src="/assets/fotos/musica_alborada.webp"
                    alt="Alborada tradicional post"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover/img:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity text-white text-[10px] font-bold">
                    ❤️ 350
                  </div>
                </div>
              </div>
            </div>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#DD2A7B] to-[#8134AF] text-white text-center text-xs sm:text-sm font-bold shadow-md hover:opacity-95 transition-opacity flex items-center justify-center gap-2"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Visitar Perfil @csalvaguardarte</span>
            </a>
          </div>

          {/* Facebook Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-[#7E1160]/5 border border-[#E5A823]/30 flex flex-col justify-between group hover:border-[#1877F2] transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3.5">
                  <div className="w-13 h-13 rounded-2xl bg-[#1877F2] text-white flex items-center justify-center p-3 shadow-md">
                    <FacebookIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-serif-title text-xl font-bold text-[#2A1725] leading-snug">
                      Facebook Oficial
                    </h3>
                    <span className="text-xs text-[#1877F2] font-bold">Salvaguardarte Galeras</span>
                  </div>
                </div>

                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-[#EBF3FF] hover:bg-[#D9E9FF] text-[#1877F2] text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <span>Seguir</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <p className="text-xs sm:text-sm text-[#5B4C56] leading-relaxed mb-6">
                Transmisiones en vivo de los festivales, foros comunitarios, alianzas con Nuevo Sol Naciente y colectivos patrimoniales, convocatorias y proyectos de salvaguardia.
              </p>

              {/* Mock Facebook Post Preview */}
              <div className="p-4 rounded-2xl bg-[#F7F9FC] border border-[#DCE4EE] mb-6 space-y-3">
                <div className="flex items-center gap-2.5">
                  <img
                    src="/assets/logo_original.png"
                    alt="Logo Corporación Soy Salvaguardarte"
                    className="w-8 h-8 rounded-full bg-white object-contain p-0.5 border"
                  />
                  <div>
                    <div className="text-xs font-bold text-[#1C2B33]">Salvaguardarte Galeras</div>
                    <div className="text-[10px] text-gray-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>Agenda Cultural Activa · Galeras, Sucre</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-[#334155] leading-snug">
                  "¡Los Cuadros Vivos son memoria viva de la humanidad! Sigamos preservando el arte y la tradición sabanera..."
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-500 pt-1 border-t border-gray-200">
                  <span className="flex items-center gap-1 text-[#1877F2] font-semibold">
                    <Heart className="w-3.5 h-3.5 fill-current text-rose-500" /> 285 Seguidores
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5" /> Comunidad Activa
                  </span>
                </div>
              </div>
            </div>

            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-2xl bg-[#1877F2] text-white text-center text-xs sm:text-sm font-bold shadow-md hover:bg-[#166FE5] transition-colors flex items-center justify-center gap-2"
            >
              <FacebookIcon className="w-4 h-4" />
              <span>Ver Página de Facebook de Salvaguardarte</span>
            </a>
          </div>

        </div>

        {/* WhatsApp Direct Contact Channels */}
        <div className="bg-gradient-to-r from-[#0B4636] via-[#0F6B52] to-[#128C7E] rounded-3xl p-6 sm:p-8 text-white shadow-xl mb-16 border border-emerald-500/30">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-xs font-bold text-[#E5A823] mb-1">
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>Atención Directa e Inmediata por WhatsApp</span>
              </div>
              <h3 className="font-serif-title text-2xl sm:text-3xl font-extrabold text-white">
                Líneas Oficiales de Contacto
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100 max-w-2xl leading-relaxed">
                ¿Deseas información sobre la corporación, talleres pedagógicos, presentaciones o alianzas culturales? Chatea directamente con nuestro equipo:
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto flex-shrink-0">
              <a
                href="https://wa.me/573164301576?text=Hola,%20me%20comunico%20desde%20el%20sitio%20web%20para%20solicitar%20informaci%C3%B3n%20sobre%20la%20Corporaci%C3%B3n%20Soy%20Salvaguardarte"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-5 py-3 rounded-2xl bg-white hover:bg-emerald-50 text-[#0B4636] font-extrabold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <div className="w-9 h-9 rounded-xl bg-[#25D366] text-white flex items-center justify-center shadow-sm flex-shrink-0">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] text-gray-500 uppercase font-bold leading-none">Línea de Contacto 1</span>
                  <span className="block text-sm font-black text-[#0B4636] leading-tight">316 430 1576</span>
                </div>
              </a>

              <a
                href="https://wa.me/573027191972?text=Hola,%20me%20comunico%20desde%20el%20sitio%20web%20para%20solicitar%20informaci%C3%B3n%20sobre%20la%20Corporaci%C3%B3n%20Soy%20Salvaguardarte"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-5 py-3 rounded-2xl bg-white hover:bg-emerald-50 text-[#0B4636] font-extrabold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <div className="w-9 h-9 rounded-xl bg-[#25D366] text-white flex items-center justify-center shadow-sm flex-shrink-0">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] text-gray-500 uppercase font-bold leading-none">Línea de Contacto 2</span>
                  <span className="block text-sm font-black text-[#0B4636] leading-tight">302 719 1972</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Contact & Volunteering Form */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-[#E5A823]/30 max-w-4xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs uppercase font-extrabold text-[#DE7349] tracking-wider block">
              Participación y Alianzas
            </span>
            <h3 className="font-serif-title text-2xl font-bold text-[#640E4D]">
              Únete a la Red de Amigos de Salvaguardarte
            </h3>
            <p className="text-xs sm:text-sm text-[#61515C] mt-2">
              ¿Eres gestor cultural, artista, investigador o voluntario? Escríbenos para articular proyectos y participar en las jornadas de formación.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2 animate-in fade-in duration-300">
              <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="font-serif-title text-xl font-bold text-emerald-900">
                ¡Gracias por tu mensaje y apoyo cultural!
              </h4>
              <p className="text-xs sm:text-sm text-emerald-700">
                El equipo de la Corporación Soy Salvaguardarte se comunicará contigo pronto. ¡Juntos preservamos la memoria!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#4B3B46] mb-1">
                    Nombre o Colectivo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej. María Santos / Grupo Folclórico"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#EADFCB] text-xs sm:text-sm focus:outline-none focus:border-[#7E1160] focus:ring-1 focus:ring-[#7E1160]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#4B3B46] mb-1">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="correo@ejemplo.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#EADFCB] text-xs sm:text-sm focus:outline-none focus:border-[#7E1160] focus:ring-1 focus:ring-[#7E1160]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#4B3B46] mb-1">
                  Mensaje o Propuesta Cultural
                </label>
                <textarea
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="¿Cómo te gustaría colaborar con la salvaguardia de los Cuadros Vivos y la cultura de Galeras?"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#EADFCB] text-xs sm:text-sm focus:outline-none focus:border-[#7E1160] focus:ring-1 focus:ring-[#7E1160]"
                ></textarea>
              </div>

              <div className="pt-2 text-center">
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-[#7E1160] to-[#590B44] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#E5A823]" />
                  <span>Enviar Mensaje y Unirme</span>
                </button>
              </div>

              <div className="mt-6 pt-5 border-t border-[#EADFCB] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#5B4C56]">
                <div className="flex items-center gap-2 font-medium">
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>¿Prefieres WhatsApp? Escríbenos directamente:</span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://wa.me/573164301576?text=Hola,%20quisiera%20ponerme%20en%20contacto%20con%20Salvaguardarte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-[#25D366]/10 text-[#0F6B52] font-bold hover:bg-[#25D366]/20 transition-colors"
                  >
                    <span>316 430 1576</span>
                  </a>
                  <a
                    href="https://wa.me/573027191972?text=Hola,%20quisiera%20ponerme%20en%20contacto%20con%20Salvaguardarte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-[#25D366]/10 text-[#0F6B52] font-bold hover:bg-[#25D366]/20 transition-colors"
                  >
                    <span>302 719 1972</span>
                  </a>
                </div>
              </div>
            </form>
          )}

        </div>

      </div>
    </section>
  );
}
