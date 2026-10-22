import React, { useState } from 'react';
import { WhatsAppIcon, LinkedinIcon } from './SocialIcons';
import { X, Send, Code2, Mail, ExternalLink, Sparkles } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [isDevOpen, setIsDevOpen] = useState(false);

  const toggleWhatsApp = () => {
    setIsWhatsAppOpen((prev) => !prev);
    if (!isWhatsAppOpen) setIsDevOpen(false);
  };

  const toggleDev = () => {
    setIsDevOpen((prev) => !prev);
    if (!isDevOpen) setIsWhatsAppOpen(false);
  };

  const whatsappContacts = [
    {
      id: 1,
      number: '3164301576',
      displayNumber: '316 430 1576',
      title: 'Línea de Atención 1',
      subtitle: 'Información general y cultural',
      message: 'Hola, deseo comunicarme con la Corporación Soy Salvaguardarte para recibir información.',
    },
    {
      id: 2,
      number: '3027191972',
      displayNumber: '302 719 1972',
      title: 'Línea de Atención 2',
      subtitle: 'Gestión, alianzas y proyectos',
      message: 'Hola, deseo información sobre alianzas y proyectos con la Corporación Soy Salvaguardarte.',
    },
  ];

  const devContacts = [
    {
      id: 'linkedin',
      title: 'LinkedIn',
      subtitle: 'Perfil Profesional & Trayectoria',
      detail: 'in/ingeniero-victor-montoya',
      href: 'https://www.linkedin.com/in/ingeniero-victor-montoya',
      icon: LinkedinIcon,
      color: 'bg-[#0A66C2] text-white',
      badge: 'Conectar',
    },
    {
      id: 'email',
      title: 'Correo Electrónico',
      subtitle: 'Contacto Directo',
      detail: 'montoyavictor086@gmail.com',
      href: 'mailto:montoyavictor086@gmail.com?subject=Contacto%20desde%20Salvaguardarte&body=Hola%20Víctor,%20deseo%20contactarte%20para%20un%20proyecto%20web.',
      icon: Mail,
      color: 'bg-[#DE7349] text-white',
      badge: 'Escribir',
    },
    {
      id: 'dev-wa',
      title: 'WhatsApp Directo',
      subtitle: 'Mensaje inmediato',
      detail: '302 719 1972',
      href: `https://wa.me/573027191972?text=${encodeURIComponent('Hola Víctor, vi la plataforma de la Corporación Soy Salvaguardarte y deseo comunicarme contigo para un proyecto.')}`,
      icon: WhatsAppIcon,
      color: 'bg-[#25D366] text-white',
      badge: 'Chatear',
    },
  ];

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3">
      
      {/* 1. Popover del Desarrollador */}
      {isDevOpen && (
        <div className="mb-1 w-84 max-w-[calc(100vw-2.5rem)] bg-white rounded-3xl shadow-2xl border border-[#DE7349]/20 overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-200">
          {/* Header con colores de Salvaguardarte */}
          <div className="bg-gradient-to-r from-[#7E1160] via-[#9E1B5A] to-[#DE7349] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20">
                <Code2 className="w-5 h-5 text-[#E5A823]" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#E5A823] block">
                  Desarrollador Web
                </span>
                <h4 className="font-serif-title font-bold text-sm leading-tight text-white">
                  Víctor Montoya
                </h4>
                <p className="text-[11px] text-[#FDEEE4]">
                  Ingeniero de Sistemas
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsDevOpen(false)}
              className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Cerrar ventana del desarrollador"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Subtitle / Description */}
          <div className="p-3.5 bg-[#FAF6F0] border-b border-[#EADFCB] text-[11px] text-[#554650] flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#DE7349] flex-shrink-0" />
            <span>Creador de la arquitectura y diseño de Salvaguardarte. ¿Tienes un proyecto en mente?</span>
          </div>

          {/* Contacts List */}
          <div className="p-3 space-y-2">
            {devContacts.map((contact) => {
              const IconComp = contact.icon;
              return (
                <a
                  key={contact.id}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsDevOpen(false)}
                  className="flex items-center justify-between p-2.5 sm:p-3 rounded-2xl bg-[#FCFAF7] hover:bg-[#F7EFE4] border border-[#EADFCB]/80 transition-all group hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`w-9 h-9 rounded-xl ${contact.color} flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform flex-shrink-0`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="block text-[11px] font-bold text-[#2A1726] leading-tight">
                          {contact.title}
                        </span>
                        <span className="text-[9px] font-semibold text-[#7E1160] bg-[#7E1160]/10 px-1.5 py-0.5 rounded border border-[#7E1160]/20">
                          {contact.badge}
                        </span>
                      </div>
                      <span className="block text-xs font-semibold text-[#7E1160] truncate leading-tight mt-0.5">
                        {contact.detail}
                      </span>
                      <span className="block text-[10px] text-[#7A6A74] truncate mt-0.5">
                        {contact.subtitle}
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#B8A4B2] group-hover:text-[#7E1160] group-hover:translate-x-0.5 transition-all flex-shrink-0 ml-2" />
                </a>
              );
            })}
          </div>

          {/* Footer note */}
          <div className="px-4 py-2 bg-[#FAF6F0] text-center text-[10px] text-[#7A6A74] border-t border-[#EADFCB]">
            Desarrollo Web Full Stack · Sistemas e Innovación
          </div>
        </div>
      )}

      {/* 2. Popover de WhatsApp */}
      {isWhatsAppOpen && (
        <div className="mb-1 w-80 max-w-[calc(100vw-2.5rem)] bg-white rounded-3xl shadow-2xl border border-emerald-500/20 overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#075E54] to-[#128C7E] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-white/15 flex items-center justify-center">
                <WhatsAppIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-serif-title font-bold text-sm leading-tight">
                  Soy Salvaguardarte
                </h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] inline-block animate-pulse"></span>
                  Líneas de WhatsApp activas
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsWhatsAppOpen(false)}
              className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Cerrar ventana de WhatsApp"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Subtitle Message */}
          <div className="p-3.5 bg-[#FAF8F5] border-b border-[#EADFCB]/60 text-[11px] text-[#554650] leading-snug">
            Selecciona la línea con la que deseas comunicarte por WhatsApp:
          </div>

          {/* Contacts List */}
          <div className="p-3 space-y-2">
            {whatsappContacts.map((contact) => (
              <a
                key={contact.id}
                href={`https://wa.me/57${contact.number}?text=${encodeURIComponent(contact.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsWhatsAppOpen(false)}
                className="flex items-center justify-between p-3 rounded-2xl bg-[#F0FAF5] hover:bg-[#E3F5EB] border border-emerald-200/60 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#25D366] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                    <WhatsAppIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-emerald-800 leading-tight">
                      {contact.title}
                    </span>
                    <span className="block text-sm font-black text-[#0B4636] leading-tight">
                      {contact.displayNumber}
                    </span>
                    <span className="block text-[10px] text-gray-500 mt-0.5">
                      {contact.subtitle}
                    </span>
                  </div>
                </div>
                <Send className="w-4 h-4 text-[#25D366] group-hover:translate-x-0.5 transition-transform" />
              </a>
            ))}
          </div>

          {/* Footer note */}
          <div className="px-4 py-2 bg-[#FCFAF7] text-center text-[10px] text-gray-400 border-t border-gray-100">
            Galeras, Sucre · Patrimonio Inmaterial UNESCO
          </div>
        </div>
      )}

      {/* 3. Botón Circular 1 (Arriba): Contacto del Desarrollador */}
      <button
        onClick={toggleDev}
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#7E1160] via-[#941A55] to-[#DE7349] text-white shadow-xl shadow-[#7E1160]/30 hover:shadow-2xl hover:shadow-[#DE7349]/40 border-2 border-[#E5A823]/70 transition-all duration-300 transform hover:scale-110 active:scale-95"
        aria-label="Ver contacto del desarrollador"
        title="Contacto del Desarrollador"
      >
        {/* Subtle Online / Gold Ping Badge */}
        <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5A823] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#E5A823] border-2 border-white"></span>
        </span>

        {/* Code Icon */}
        <Code2 className="w-6 h-6 text-[#FFEEC7] group-hover:text-white group-hover:scale-110 transition-all" />

        {/* Tooltip on Hover (Desktop) */}
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-xl bg-[#291A25] px-3 py-1.5 text-xs font-bold text-white opacity-0 shadow-lg border border-[#DE7349]/40 transition-opacity duration-200 group-hover:opacity-100 hidden sm:block">
          Contacto Desarrollador
        </span>
      </button>

      {/* 4. Botón Circular 2 (Abajo): WhatsApp de Contacto */}
      <button
        onClick={toggleWhatsApp}
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xl shadow-[#25D366]/35 hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 border-2 border-white/20"
        aria-label="Abrir chat de WhatsApp"
        title="Contactar por WhatsApp"
      >
        {/* Active Pulse Dot */}
        <span className="absolute top-1 right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>

        {/* WhatsApp Icon */}
        <WhatsAppIcon className="w-7 h-7 flex-shrink-0 text-white" />

        {/* Tooltip on Hover (Desktop) */}
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-xl bg-[#291A25] px-3 py-1.5 text-xs font-bold text-white opacity-0 shadow-lg border border-white/10 transition-opacity duration-200 group-hover:opacity-100 hidden sm:block">
          WhatsApp de Contacto
        </span>
      </button>

    </div>
  );
}
