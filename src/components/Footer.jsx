import React from 'react';
import { Heart, MapPin, Sparkles, Award, Code2, ExternalLink } from 'lucide-react';
import { InstagramIcon, FacebookIcon, LinkedinIcon } from './SocialIcons';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const instagramUrl = "https://www.instagram.com/csalvaguardarte?vrfl=Y2J0cWFnNm00czlk";
  const facebookUrl = "https://www.facebook.com/profile.php?id=61578281295144&mibextid=wwXIfr&rdid=EaJDqiwmh4LySUrJ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1EgsWtiukh%2F%3Fmibextid%3DwwXIfr#";
  const linkedinUrl = "https://www.linkedin.com/in/ingeniero-victor-montoya";

  return (
    <footer className="bg-[#240C20] text-[#F3E5DC] pt-16 pb-12 border-t-4 border-[#DE7349]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Logo */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <img
                src="/assets/logo_web.png"
                alt="Logo Corporación Soy Salvaguardarte"
                className="w-14 h-14 object-contain filter drop-shadow brightness-110"
              />
              <div>
                <span className="block text-xs uppercase tracking-widest text-[#E5A823] font-extrabold">
                  Corporación
                </span>
                <span className="block font-serif-title text-2xl font-bold text-white leading-tight">
                  Soy Salvaguardarte
                </span>
                <span className="block text-xs text-[#E1CCD9] flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#DE7349]" />
                  Galeras · Sucre · Colombia
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#D7C3CF] leading-relaxed max-w-sm">
              Organización cultural sin ánimo de lucro dedicada a proteger, investigar y proyectar los Cuadros Vivos, la música de gaita y las expresiones tradicionales del Caribe colombiano.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[11px] font-bold text-[#E5A823] border border-[#E5A823]/30">
                <Award className="w-3.5 h-3.5 text-[#E5A823]" />
                Patrimonio Inmaterial UNESCO 2024
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#E5A823]">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#D7C3CF]">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#cuadros-vivos" className="hover:text-white transition-colors">Cuadros Vivos de Galeras</a>
              </li>
              <li>
                <a href="#festival" className="hover:text-white transition-colors">Festival de la Algarroba</a>
              </li>
              <li>
                <a href="#mision-vision" className="hover:text-white transition-colors">Misión y Visión 2035</a>
              </li>
              <li>
                <a href="#valores" className="hover:text-white transition-colors">Nuestros 8 Valores</a>
              </li>
              <li>
                <a href="#objetivos" className="hover:text-white transition-colors">7 Objetivos Estratégicos</a>
              </li>
              <li>
                <a href="#comunidad" className="hover:text-white transition-colors">Comunidad y Redes</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Social & Heritage Networks */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#E5A823]">
              Síguenos en Redes
            </h4>
            <p className="text-xs text-[#D7C3CF] leading-relaxed">
              Mantén el contacto con las actividades y el patrimonio vivo de Galeras, Sucre:
            </p>

            <div className="flex items-center gap-3">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#DD2A7B] text-white flex items-center justify-center transition-colors shadow group"
                aria-label="Instagram"
                title="Instagram @csalvaguardarte"
              >
                <InstagramIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#1877F2] text-white flex items-center justify-center transition-colors shadow group"
                aria-label="Facebook"
                title="Facebook Salvaguardarte Galeras"
              >
                <FacebookIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-[11px] text-[#CDB9C7] leading-relaxed italic">
              "Creemos en la cultura como derecho, memoria compartida y fuerza para construir futuros más diversos, inclusivos y sostenibles."
            </div>
          </div>

        </div>

        {/* Developer Credit Banner: Victor Montoya Ingeniero de Sistemas */}
        <div className="my-8 p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-white/5 via-[#7E1160]/20 to-white/5 border border-[#E5A823]/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0A66C2] to-[#004182] text-white flex items-center justify-center shadow-md flex-shrink-0">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#E5A823] block">
                Arquitectura y Desarrollo Web
              </span>
              <h4 className="font-serif-title text-base sm:text-lg font-bold text-white leading-tight">
                Víctor Montoya
              </h4>
              <p className="text-xs text-[#D5BFCE]">
                Ingeniero de Sistemas
              </p>
            </div>
          </div>

          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A66C2] hover:bg-[#084e96] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex-shrink-0"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>Ver Perfil en LinkedIn</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-[#AC96A4] gap-4">
          <p>
            © {currentYear} Corporación Soy Salvaguardarte · Galeras, Sucre, Colombia.
          </p>
          <p className="flex items-center gap-1.5 text-white/80">
            <span>Hecho con amor, arte y folclor sabanero</span>
            <Heart className="w-3.5 h-3.5 fill-current text-[#DE7349]" />
          </p>
        </div>

      </div>
    </footer>
  );
}
