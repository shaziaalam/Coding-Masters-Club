// Web Speech API Voice Narration for KS1 Junior Blocks

class JrSpeechNarrator {
  public enabled: boolean = true;

  public speak(text: string, onEnd?: () => void): void {
    if (!this.enabled || typeof window === 'undefined' || !('speechSynthesis' in window)) {
      if (onEnd) onEnd();
      return;
    }

    try {
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);

      const voices = window.speechSynthesis.getVoices();
      const ukVoice = voices.find(v => v.lang.includes('en-GB')) || voices.find(v => v.lang.includes('en'));
      if (ukVoice) {
        utterance.voice = ukVoice;
      }

      utterance.rate = 0.9;
      utterance.pitch = 1.15;

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

export const jrNarrator = new JrSpeechNarrator();
