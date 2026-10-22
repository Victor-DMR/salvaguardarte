import React from 'react';
import { Heart, MapPin, Sparkles, Award } from 'lucide-react';
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from './SocialIcons';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const instagramUrl = "https://www.instagram.com/csalvaguardarte?vrfl=Y2J0cWFnNm00czlk";
  const facebookUrl = "https://www.facebook.com/profile.php?id=61578281295144&mibextid=wwXIfr&rdid=EaJDqiwmh4LySUrJ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1EgsWtiukh%2F%3Fmibextid%3DwwXIfr#";

  return (
    <footer className="bg-[#240C20] text-[#F3E5DC] pt-16 pb-12 border-t-4 border-[#DE7349]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Logo */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <img
                src="/assets/logo_original.webp"
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
              Entidad sin ánimo de lucro (ESAL) con sede en Galeras, Sucre. Comprometida con la salvaguardia, formación artística comunitaria, investigación, creación y circulación del patrimonio vivo de Colombia.
            </p>

            <div className="pt-2 border-t border-white/10 space-y-1 text-xs text-[#E1CCD9]">
              <div className="font-semibold text-[#E5A823]">Equipo de Dirección:</div>
              <div>• <strong>María Fernanda Severiche Olascuaga</strong> — Dirección / Representante Legal</div>
              <div>• <strong>Tatiana Narváez Pineda</strong> — Gestión y Producción Artística</div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[11px] font-bold text-[#E5A823] border border-[#E5A823]/30">
                <Award className="w-3.5 h-3.5 text-[#E5A823]" />
                Patrimonio Inmaterial UNESCO & Nación
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
                <a href="#naturaleza-proposito" className="hover:text-white transition-colors">Naturaleza & Propósito</a>
              </li>
              <li>
                <a href="#equipo-humano" className="hover:text-white transition-colors">Equipo Humano</a>
              </li>
              <li>
                <a href="#proyectos-en-accion" className="hover:text-white transition-colors">Proyectos en Acción</a>
              </li>
              <li>
                <a href="#objetivos" className="hover:text-white transition-colors">6 Objetivos Estratégicos</a>
              </li>
              <li>
                <a href="#patrimonio-custodiado" className="hover:text-white transition-colors">Cuadros Vivos & Festival</a>
              </li>
              <li>
                <a href="#aliados" className="hover:text-white transition-colors">Aliados Estratégicos</a>
              </li>
              <li>
                <a href="#comunidad" className="hover:text-white transition-colors">Comunidad y Redes</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Social & Heritage Networks & Contact */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#E5A823]">
              Contacto y Redes
            </h4>
            <p className="text-xs text-[#D7C3CF] leading-relaxed">
              Mantén el contacto con las actividades y el patrimonio vivo de Galeras, Sucre:
            </p>

            <div className="flex flex-wrap items-center gap-3">
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

              <a
                href="https://wa.me/573164301576?text=Hola,%20deseo%20comunicarme%20con%20la%20Corporaci%C3%B3n%20Soy%20Salvaguardarte"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-white flex items-center justify-center transition-colors shadow group border border-[#25D366]/30"
                aria-label="WhatsApp 3164301576"
                title="WhatsApp: 316 430 1576"
              >
                <WhatsAppIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href="https://wa.me/573027191972?text=Hola,%20deseo%20comunicarme%20con%20la%20Corporaci%C3%B3n%20Soy%20Salvaguardarte"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-white flex items-center justify-center transition-colors shadow group border border-[#25D366]/30"
                aria-label="WhatsApp 3027191972"
                title="WhatsApp: 302 719 1972"
              >
                <WhatsAppIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>



            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-[11px] text-[#CDB9C7] leading-relaxed italic">
              "Creemos en la cultura como derecho, memoria compartida y fuerza para construir futuros más diversos, inclusivos y sostenibles."
            </div>
          </div>

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
