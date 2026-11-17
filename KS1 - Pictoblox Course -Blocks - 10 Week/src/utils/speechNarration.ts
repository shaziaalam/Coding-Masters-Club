// Web Speech API Voice Narration for Key Stage 1 Early Readers

class KidSpeechNarrator {
  public enabled: boolean = true;

  public speak(text: string, onEnd?: () => void): void {
    if (!this.enabled || typeof window === 'undefined' || !('speechSynthesis' in window)) {
      if (onEnd) onEnd();
      return;
    }

    try {
      window.speechSynthesis.cancel(); // Stop any active speech

      const utterance = new SpeechSynthesisUtterance(text);

      // Select gentle, natural English voice if available
      const voices = window.speechSynthesis.getVoices();
      const ukVoice = voices.find(v => v.lang.includes('en-GB')) || voices.find(v => v.lang.includes('en'));
      if (ukVoice) {
        utterance.voice = ukVoice;
      }

      utterance.rate = 0.92; // Slightly slower, very clear for 5-7 year olds
      utterance.pitch = 1.1; // Friendly warm pitch

      utterance.onend = () => {
        if (onEnd) onEnd();
      };

      utterance.onerror = () => {
        if (onEnd) onEnd();
      };

      window.speechSynthesis.speak(utterance);
    } catch {
      if (onEnd) onEnd();
    }
  }

  public stop(): void {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }

  public isSpeaking(): boolean {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return false;
    return window.speechSynthesis.speaking;
  }
}

export const narrator = new KidSpeechNarrator();
