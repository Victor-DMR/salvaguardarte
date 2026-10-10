import React, { useState } from 'react';
import { Music, Play, Pause, Sparkles, Volume2, Info, Radio } from 'lucide-react';
import { playFluteNote, startFolkSoundtrack, stopFolkSoundtrack, isFolkPlaying } from '../utils/audioSynth';

export default function CulturalPlayer() {
  const [activeNote, setActiveNote] = useState(null);
  const [isPlayingAuto, setIsPlayingAuto] = useState(false);
  const [currentBeat, setCurrentBeat] = useState(0);

  // Gaita notes in Hertz
  const gaitaPads = [
    { label: 'Nota 1 (Mi)', freq: 329.63, sub: 'Tono Grave' },
    { label: 'Nota 2 (Fa#)', freq: 369.99, sub: 'Cuerpo' },
    { label: 'Nota 3 (Sol)', freq: 392.00, sub: 'Melodía' },
    { label: 'Nota 4 (La)', freq: 440.00, sub: 'Vibrato' },
    { label: 'Nota 5 (Si)', freq: 493.88, sub: 'Clímax' },
    { label: 'Nota 6 (Re)', freq: 587.33, sub: 'Agudo' },
    { label: 'Nota 7 (Mi alto)', freq: 659.25, sub: 'Vuelo' },
  ];

  const handlePadClick = (pad, index) => {
    setActiveNote(index);
    playFluteNote(pad.freq, 0.45, 0.2);
    setTimeout(() => {
      setActiveNote(null);
    }, 450);
  };

  const handleAutoToggle = () => {
    if (isPlayingAuto) {
      stopFolkSoundtrack();
      setIsPlayingAuto(false);
    } else {
      startFolkSoundtrack((step) => {
        setCurrentBeat(step % 16);
      });
      setIsPlayingAuto(true);
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#F5EFE6]/60 border-y border-[#EADFCB]/80 relative overflow-hidden">
      {/* Decorative folklore floating elements */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7E1160]/10 border border-[#7E1160]/20 text-xs font-bold text-[#7E1160] mb-3">
            <Radio className="w-3.5 h-3.5 text-[#DE7349]" />
            <span>Música, Teatro Callejero e Identidad Sabanera</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2C1F28] tracking-tight">
            El Sonido Ancestral de la Flauta y la Gaita en Galeras
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#61515C] leading-relaxed">
            En la sabana sucreña, el festival no solo se admira con la vista: se siente con el redoble del tambor alegre, el llanto dulce de la flauta de millo y el compás inmortal de la gaita corta y larga.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Interactive Flute Synthesizer Board */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-[#7E1160]/5 border border-[#E5A823]/30">
            <div className="flex items-center justify-between pb-5 border-b border-[#F0E6D8]">
              <div>
                <span className="text-xs uppercase font-extrabold text-[#DE7349] tracking-wider block">
                  Experiencia Interactiva
                </span>
                <h3 className="font-serif-title text-xl font-bold text-[#640E4D]">
                  Toca la Gaita Tradicional
                </h3>
              </div>

              {/* Master Play/Pause loop button */}
              <button
                onClick={handleAutoToggle}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all shadow-sm ${
                  isPlayingAuto
                    ? 'bg-[#7E1160] text-white animate-pulse'
                    : 'bg-[#F6ECE0] text-[#7E1160] hover:bg-[#ECD9C5]'
                }`}
              >
                {isPlayingAuto ? (
                  <>
                    <Pause className="w-3.5 h-3.5" />
                    <span>Pausar Ensamble</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-[#DE7349]" />
                    <span>Tocar Ensamble Sabanero</span>
                  </>
                )}
              </button>
            </div>

            {/* Visual Equalizer */}
            <div className="my-6 p-4 rounded-2xl bg-[#2D1226] text-white flex items-center justify-between gap-1 overflow-hidden">
              <div className="text-xs font-medium text-amber-200/80 flex items-center gap-1.5">
                <Volume2 className="w-4 h-4 text-[#E5A823]" />
                <span>Onda Sonora Folclórica</span>
              </div>
              <div className="flex items-end gap-1.5 h-8">
                {[...Array(14)].map((_, i) => {
                  const isHigh = isPlayingAuto && (currentBeat % 14 === i || (currentBeat + 3) % 14 === i);
                  return (
                    <span
                      key={i}
                      className={`w-1.5 rounded-full transition-all duration-150 ${
                        isHigh ? 'bg-[#E5A823] h-8 shadow-sm shadow-[#E5A823]' : 'bg-[#DE7349]/50 h-2'
                      }`}
                    ></span>
                  );
                })}
              </div>
            </div>

            {/* Virtual Gaita Hole Buttons */}
            <p className="text-xs text-[#7A6A74] mb-3 font-medium">
              Pulsa los orificios para emitir el soplo de la gaita sabanera:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {gaitaPads.map((pad, idx) => (
                <button
                  key={pad.label}
                  onClick={() => handlePadClick(pad, idx)}
                  className={`p-3.5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between ${
                    activeNote === idx
                      ? 'bg-[#7E1160] text-white border-[#7E1160] scale-95 shadow-md shadow-[#7E1160]/30'
                      : 'bg-[#FBF8F4] text-[#42323D] border-[#EADFCB] hover:border-[#DE7349] hover:bg-[#F6EEE2]'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-xs font-bold">{pad.label}</span>
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        activeNote === idx ? 'bg-[#E5A823]' : 'bg-[#DE7349]/40'
                      }`}
                    ></span>
                  </div>
                  <span
                    className={`text-[10px] mt-2 ${
                      activeNote === idx ? 'text-amber-200' : 'text-[#84747E]'
                    }`}
                  >
                    {pad.sub}
                  </span>
                </button>
              ))}
            </div>

            {/* Gaita Craftsmanship Trivia */}
            <div className="mt-5 p-3.5 rounded-2xl bg-[#FFFBF5] border border-[#E5A823]/30 flex items-start gap-3">
              <Info className="w-5 h-5 text-[#DE7349] flex-shrink-0 mt-0.5" />
              <p className="text-xs text-[#5D4E59] leading-relaxed">
                <strong>¿Sabías qué?</strong> La cabeza de la gaita sabanera se elabora con cera de abeja nativa y polvo de carbón vegetal, mientras que la embocadura se forja tradicionalmente con una pluma de pato o pavo.
              </p>
            </div>
          </div>

          {/* Right Column: Visual Story of Music and Theater */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Card 1: Gaita Musicians photo */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[#E5A823]/30 group">
              <img
                src="/assets/gaita_flauta_musica.jpg"
                alt="Músicos de Gaita en Galeras Sucre"
                className="w-full h-64 object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A0E23]/85 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="bg-[#E5A823] text-[#3D0A2E] text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full tracking-wider mb-1 inline-block">
                    Maestros Portadores
                  </span>
                  <h4 className="font-serif-title text-xl font-bold text-white leading-tight">
                    El Legado de los Gaiteros Sabaneros
                  </h4>
                  <p className="text-xs text-[#FDEBD7] mt-1 max-w-md">
                    Guayaberas blancas, sombrero vueltiao y el repique de las maracas acompañan cada tarde en Galeras.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Festival Dance & Street Theater */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[#E5A823]/30 group">
              <img
                src="/assets/teatro_danza_galeras.jpg"
                alt="Teatro y Danza en Festival de la Algarroba"
                className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A0E23]/85 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="bg-[#DE7349] text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full tracking-wider mb-1 inline-block">
                    Festival de la Algarroba
                  </span>
                  <h4 className="font-serif-title text-xl font-bold text-white leading-tight">
                    Teatro Callejero & Polleras en Movimiento
                  </h4>
                  <p className="text-xs text-[#FDEBD7] mt-1 max-w-md">
                    Danzas sabaneras, máscaras ceremoniales de tradición Zenú y la fiesta popular que une a toda la comunidad.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
