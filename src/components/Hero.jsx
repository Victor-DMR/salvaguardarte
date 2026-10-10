import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Eye, Award, Music, Compass, ArrowRight, Play, CheckCircle } from 'lucide-react';

export default function Hero() {
  const [isFrozen, setIsFrozen] = useState(false);

  const triggerCuadroVivoCelebration = () => {
    setIsFrozen(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#7E1160', '#DE7349', '#E5A823', '#2D6A4F']
    });

    setTimeout(() => {
      setIsFrozen(false);
    }, 4000);
  };

  return (
    <section id="inicio" className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-gradient-to-b from-[#FCFAF7] via-[#F8F1E7]/70 to-[#FCFAF7]">
      {/* Decorative background glows & subtle cultural pattern */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-[#DE7349]/10 via-[#E5A823]/15 to-[#7E1160]/10 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Sombrero vueltiao subtle geometric accent top right */}
      <div className="absolute -top-16 -right-16 w-64 h-64 opacity-5 pointer-events-none rounded-full border-8 border-dashed border-[#2C2229]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Intent */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4ECE1] border border-[#DE7349]/30 text-xs sm:text-sm font-semibold text-[#7E1160] shadow-sm">
              <Sparkles className="w-4 h-4 text-[#E5A823]" />
              <span>Patrimonio Cultural Inmaterial de Colombia y el Mundo</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#2B1B26] leading-[1.12]">
              Donde la Memoria se Vuelve{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#7E1160] via-[#C85A32] to-[#E5A823]">
                Cuadro Vivo
              </span>{' '}
              y la Tierra Respira Folclor
            </h1>

            {/* Subtitle / Docx Essence */}
            <p className="text-base sm:text-lg text-[#554650] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Desde el corazón de <strong>Galeras, Sucre</strong>, la <strong>Corporación Soy Salvaguardarte</strong> custodia, investiga y dinamiza la manifestación teatral comunitaria más asombrosa de América Latina: la galería a cielo abierto de los Cuadros Vivos, el sonido ancestral de la gaita sabanera y el palpitar del Festival de la Algarroba.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#cuadros-vivos"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#7E1160] to-[#5F0C48] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#7E1160]/25 hover:shadow-xl hover:from-[#6B0E51] hover:to-[#4C093A] transition-all transform hover:-translate-y-0.5"
              >
                <Eye className="w-5 h-5 text-[#E5A823]" />
                <span>Explorar Cuadros Vivos</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#mision-vision"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-[#E5A823]/60 text-[#7E1160] font-bold text-sm sm:text-base hover:bg-[#F9F4EB] hover:border-[#DE7349] transition-all shadow-sm"
              >
                <Compass className="w-5 h-5 text-[#DE7349]" />
                <span>Misión & Visión 2035</span>
              </a>
            </div>

            {/* Cultural Indicators Bar */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-[#EAE0D1]">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#7E1160]">UNESCO</div>
                <div className="text-xs text-[#7A6A74] font-medium mt-0.5">Lista Representativa</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#DE7349]">Galeras</div>
                <div className="text-xs text-[#7A6A74] font-medium mt-0.5">Sucre, Colombia</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#E5A823]">35+ Años</div>
                <div className="text-xs text-[#7A6A74] font-medium mt-0.5">FestiAlgarroba</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#2D6A4F]">2035</div>
                <div className="text-xs text-[#7A6A74] font-medium mt-0.5">Visión Estratégica</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase with Interactive Frozen Mode */}
          <div className="lg:col-span-5 relative">
            {/* The Framed Canvas Effect */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Golden/Wood Frame Shadow */}
              <div className="relative rounded-2xl overflow-hidden p-2 sm:p-3 bg-gradient-to-br from-[#E5A823] via-[#8F5927] to-[#5C3214] shadow-2xl shadow-[#7E1160]/20 transform transition-transform duration-500 hover:rotate-0.5">
                
                {/* Inner Border mimicking caña flecha / canvas */}
                <div className="relative rounded-xl overflow-hidden bg-[#1A1218]">
                  <img
                    src="/assets/cuadro_vivo_galeras.jpg"
                    alt="Cuadro Vivo en Galeras Sucre"
                    className={`w-full h-[400px] sm:h-[480px] object-cover transition-all duration-700 ${
                      isFrozen ? 'filter saturate-150 contrast-110 scale-105' : 'hover:scale-102'
                    }`}
                  />

                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Top UNESCO Emblem on Picture */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#FCFAF7]/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#640E4D] shadow">
                    <Award className="w-3.5 h-3.5 text-[#E5A823]" />
                    <span>Teatro Estático en la Calle</span>
                  </div>

                  {/* Interactive Button overlay: Detener el Tiempo */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-serif-title text-lg sm:text-xl font-bold leading-tight">
                          "La Leyenda de la Sabana"
                        </h4>
                        <p className="text-xs text-amber-200">
                          Calle de los Cuadros Vivos · Galeras
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={triggerCuadroVivoCelebration}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#DE7349] to-[#E5A823] text-[#2B1020] font-extrabold text-xs sm:text-sm shadow-md hover:opacity-95 transition-all transform active:scale-95"
                    >
                      {isFrozen ? (
                        <>
                          <CheckCircle className="w-4 h-4 text-emerald-900 animate-bounce" />
                          <span>¡Momento Congelado! ¡Viva el Cuadro Vivo!</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 text-[#7E1160]" />
                          <span>Haz Clic: ¡Congelar Momento Artístico!</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Flauta & Gaita */}
              <div className="hidden sm:flex absolute -bottom-5 -left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-[#E5A823]/30 items-center gap-3 animate-float-slow">
                <div className="w-10 h-10 rounded-xl bg-[#7E1160]/10 flex items-center justify-center text-[#7E1160]">
                  <Music className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#2C2229]">Gaita Sabanera</div>
                  <div className="text-[11px] text-[#7A6A74]">Flauta de Millo & Tambora</div>
                </div>
              </div>

              {/* Floating Badge 2: Diosas y Diosos */}
              <div className="hidden sm:flex absolute -top-5 -right-6 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-[#DE7349]/30 items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#DE7349]/15 flex items-center justify-center text-[#DE7349]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#2C2229]">Diosas y Diosos</div>
                  <div className="text-[10px] text-[#7A6A74]">Creadores de la Inmovilidad</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
