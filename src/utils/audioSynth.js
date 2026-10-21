// Folk Audio Player for real traditional flauta & gaita recording
// Source: /assets/musica_flauta/flauta.mp3

const AUDIO_SRC = '/assets/musica_flauta/flauta.mp3';

let audioElement = null;
let isPlaying = false;
let pulseInterval = null;
let beat = 0;

function getAudio() {
  if (!audioElement) {
    audioElement = new Audio(AUDIO_SRC);
    audioElement.loop = true;
    audioElement.preload = 'auto';
    audioElement.volume = 0.85;

    audioElement.addEventListener('pause', () => {
      isPlaying = false;
      if (pulseInterval) {
        clearInterval(pulseInterval);
        pulseInterval = null;
      }
    });

    audioElement.addEventListener('play', () => {
      isPlaying = true;
    });

    audioElement.addEventListener('ended', () => {
      isPlaying = false;
      if (pulseInterval) {
        clearInterval(pulseInterval);
        pulseInterval = null;
      }
    });
  }
  return audioElement;
}

export function startFolkSoundtrack(onTick) {
  try {
    const audio = getAudio();
    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          isPlaying = true;
          if (pulseInterval) clearInterval(pulseInterval);
          beat = 0;
          pulseInterval = setInterval(() => {
            beat = (beat + 1) % 4;
            if (onTick) onTick(beat);
          }, 240);
        })
        .catch((err) => {
          console.warn('Audio play was prevented or failed:', err);
        });
    }
  } catch (err) {
    console.error('Error starting audio playback:', err);
  }
}

export function stopFolkSoundtrack() {
  isPlaying = false;
  if (pulseInterval) {
    clearInterval(pulseInterval);
    pulseInterval = null;
  }
  if (audioElement) {
    try {
      audioElement.pause();
    } catch (e) {
      console.warn('Error pausing audio:', e);
    }
  }
}

export function isFolkPlaying() {
  return isPlaying;
}

// Fallback no-op for any legacy calls
export function playFluteNote() {}
