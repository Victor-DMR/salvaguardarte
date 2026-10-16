import React, { useState } from 'react';
import { WhatsAppIcon } from './SocialIcons';
import { X, MessageCircle, Send } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
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

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      {/* Expanded Contacts Popover */}
      {isOpen && (
        <div className="mb-3 w-80 max-w-[calc(100vw-2.5rem)] bg-white rounded-3xl shadow-2xl border border-emerald-500/20 overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-200">
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
              onClick={() => setIsOpen(false)}
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
            {contacts.map((contact) => (
              <a
                key={contact.id}
                href={`https://wa.me/57${contact.number}?text=${encodeURIComponent(contact.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
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

      {/* Main Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2 px-4 py-3 sm:px-4 sm:py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xl shadow-[#25D366]/30 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95"
        aria-label="Abrir chat de WhatsApp"
        title="Contactar por WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <WhatsAppIcon className="w-6 h-6 flex-shrink-0" />
        <span className="hidden sm:inline font-bold text-xs tracking-wide">
          WhatsApp de Contacto
        </span>
      </button>
    </div>
  );
}
