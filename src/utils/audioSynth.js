// Web Audio Synthesizer for Caribbean Gaita & Tambor Alegre folklore rhythms
let audioCtx = null;
let isPlaying = false;
let loopInterval = null;
let step = 0;

// Notes for traditional sabanera gaita (pentatonic modal frequencies)
const gaitaScale = [
  329.63, // E4
  369.99, // F#4
  392.00, // G4
  440.00, // A4
  493.88, // B4
  587.33, // D5
  659.25  // E5
];

const melodySequence = [
  0, 2, 3, 4, 3, 2, 0, 1, 2, 4, 5, 4, 3, 2, 0, 3
];

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// Play a flute / gaita note with gentle harmonics and vibrato
export function playFluteNote(freq, duration = 0.35, gainValue = 0.12) {
  const ctx = getAudioContext();
  const now = ctx.currentTime;

  const osc = ctx.createOscillator();
  const osc2 = ctx.createOscillator();
  const filter = ctx.createBiquadFilter();
  const gainNode = ctx.createGain();

  // Flute sound: triangle + soft sine harmonic
  osc.type = 'triangle';
  osc.frequency.setValueAtTime(freq, now);

  osc2.type = 'sine';
  osc2.frequency.setValueAtTime(freq * 2, now); // 2nd harmonic octave

  // Flute low-pass filter with gentle breathiness
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(freq * 3, now);

  // Soft envelope
  gainNode.gain.setValueAtTime(0, now);
  gainNode.gain.linearRampToValueAtTime(gainValue, now + 0.05);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  osc.connect(filter);
  osc2.connect(filter);
  filter.connect(gainNode);
  gainNode.connect(ctx.destination);

  osc.start(now);
  osc2.start(now);
  osc.stop(now + duration);
  osc2.stop(now + duration);
}

// Play tambor alegre golpe
function playTambor(type = 'golpe', duration = 0.25) {
  const ctx = getAudioContext();
  const now = ctx.currentTime;

  const osc = ctx.createOscillator();
  const gainNode = ctx.createGain();

  osc.type = 'sine';
  if (type === 'golpe') {
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(45, now + 0.15);
    gainNode.gain.setValueAtTime(0.3, now);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + duration);
  } else {
    // Slap / palmada
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(80, now + 0.08);
    gainNode.gain.setValueAtTime(0.18, now);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
  }

  osc.connect(gainNode);
  gainNode.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + duration);
}

// Play maraca shaker (noise burst)
function playMaraca() {
  const ctx = getAudioContext();
  const now = ctx.currentTime;
  const bufferSize = ctx.sampleRate * 0.05;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }

  const noise = ctx.createBufferSource();
  noise.buffer = buffer;

  const filter = ctx.createBiquadFilter();
  filter.type = 'highpass';
  filter.frequency.setValueAtTime(3500, now);

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.04, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);

  noise.start(now);
}

export function startFolkSoundtrack(onTick) {
  if (isPlaying) return;
  isPlaying = true;
  getAudioContext();

  const bpm = 120;
  const intervalMs = (60 / bpm / 2) * 1000; // 16th steps

  loopInterval = setInterval(() => {
    if (!isPlaying) return;

    // Rhythm step: 0 to 15
    const currentStep = step % 16;

    // Tambor rhythm (Cumbia/Porro pattern)
    if (currentStep === 0 || currentStep === 8) {
      playTambor('golpe', 0.28);
    }
    if (currentStep === 4 || currentStep === 12) {
      playTambor('slap', 0.12);
    }

    // Maracas on every off-beat
    if (currentStep % 2 === 1) {
      playMaraca();
    }

    // Gaita flute melody line every 2 steps
    if (currentStep % 2 === 0) {
      const scaleIdx = melodySequence[currentStep];
      const freq = gaitaScale[scaleIdx];
      playFluteNote(freq, 0.32, 0.09);
    }

    if (onTick) {
      onTick(currentStep);
    }

    step++;
  }, intervalMs);
}

export function stopFolkSoundtrack() {
  isPlaying = false;
  if (loopInterval) {
    clearInterval(loopInterval);
    loopInterval = null;
  }
}

export function isFolkPlaying() {
  return isPlaying;
}
