import React, { useState } from 'react';
import { Play, RotateCcw } from 'lucide-react';
import { jrSounds } from '../utils/soundEffects';

interface TobiSimulatorProps {
  actionType?: 'move_right' | 'move_left' | 'move_up' | 'move_down' | 'hop' | 'grow' | 'shrink' | 'spin' | 'say' | 'pop';
  value?: number;
  speechText?: string;
}

export const TobiSimulator: React.FC<TobiSimulatorProps> = ({
  actionType = 'hop',
  value = 2,
  speechText = "Hello! I'm Tobi!"
}) => {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [speech, setSpeech] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (isPlaying) return;
    setIsPlaying(true);
    jrSounds.playPop();

    if (actionType === 'move_right') {
      const distance = (value || 2) * 25;
      setPosX((prev) => Math.min(120, prev + distance));
      setTimeout(() => setIsPlaying(false), 400);
    } else if (actionType === 'move_left') {
      const distance = (value || 2) * 25;
      setPosX((prev) => Math.max(-120, prev - distance));
      setTimeout(() => setIsPlaying(false), 400);
    } else if (actionType === 'move_up') {
      const distance = (value || 2) * 20;
      setPosY((prev) => Math.max(-60, prev - distance));
      setTimeout(() => setIsPlaying(false), 400);
    } else if (actionType === 'move_down') {
      const distance = (value || 2) * 20;
      setPosY((prev) => Math.min(60, prev + distance));
      setTimeout(() => setIsPlaying(false), 400);
    } else if (actionType === 'hop') {
      jrSounds.playStepComplete();
      setPosY(-40);
      setTimeout(() => {
        setPosY(0);
        setTimeout(() => setIsPlaying(false), 200);
      }, 300);
    } else if (actionType === 'grow') {
      setScale(1.4);
      setTimeout(() => setIsPlaying(false), 300);
    } else if (actionType === 'shrink') {
      setScale(0.7);
      setTimeout(() => setIsPlaying(false), 300);
    } else if (actionType === 'spin') {
      setRotation((prev) => prev + 360);
      setTimeout(() => setIsPlaying(false), 500);
    } else if (actionType === 'say' || actionType === 'pop') {
      jrSounds.playStepComplete();
      setSpeech(speechText);
      setTimeout(() => {
        setSpeech(null);
        setIsPlaying(false);
      }, 2000);
    } else {
      setIsPlaying(false);
    }
  };

  const handleReset = () => {
    jrSounds.playPop();
    setPosX(0);
    setPosY(0);
    setScale(1);
    setRotation(0);
    setSpeech(null);
    setIsPlaying(false);
  };

  return (
    <div className="bg-sky-100/90 border-2 border-sky-300 rounded-2xl p-3 my-2 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-inner">
      {/* Mini Stage Display */}
      <div className="relative w-full sm:w-64 h-28 bg-gradient-to-b from-sky-200 to-emerald-100 rounded-xl border border-sky-300 overflow-hidden flex items-center justify-center">
        {/* Ground */}
        <div className="absolute bottom-0 w-full h-6 bg-emerald-400 border-t-2 border-emerald-500" />

        {/* Speech Bubble */}
        {speech && (
          <div className="absolute top-2 bg-white px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-md border border-amber-300 animate-bounce z-20">
            💬 {speech}
          </div>
        )}

        {/* Animated Tobi Avatar */}
        <div
          className="text-4xl transition-all duration-300 select-none z-10 filter drop-shadow-md"
          style={{
            transform: `translate(${posX}px, ${posY}px) scale(${scale}) rotate(${rotation}deg)`
          }}
        >
          🐻
        </div>
      </div>

      {/* Simulator Controls */}
      <div className="flex sm:flex-col gap-2 w-full sm:w-auto">
        <button
          onClick={handlePlay}
          disabled={isPlaying}
          className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-bold font-['Fredoka',sans-serif] text-xs rounded-xl shadow-xs transition"
        >
          <Play className="w-3.5 h-3.5 fill-white" />
          <span>{isPlaying ? 'Doing It!' : 'Watch Tobi ▶️'}</span>
        </button>

        <button
          onClick={handleReset}
          className="flex items-center justify-center gap-1 px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold font-['Fredoka',sans-serif] text-xs rounded-xl transition"
          title="Reset Tobi's position"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset</span>
        </button>
      </div>
    </div>
  );
};
