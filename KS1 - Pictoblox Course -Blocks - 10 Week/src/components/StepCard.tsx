import React, { useState } from 'react';
import { KS1Step } from '../types';
import { PictoBlock } from './PictoBlock';
import { CheckCircle2, Circle, Volume2, Sparkles, Heart } from 'lucide-react';
import { kidSounds } from '../utils/soundEffects';
import { narrator } from '../utils/speechNarration';

interface StepCardProps {
  step: KS1Step;
  stepIndex: number;
  totalSteps: number;
  isCompleted: boolean;
  onToggleComplete: () => void;
}

export const StepCard: React.FC<StepCardProps> = ({
  step,
  stepIndex,
  totalSteps,
  isCompleted,
  onToggleComplete
}) => {
  const [isReading, setIsReading] = useState(false);

  const handleToggle = () => {
    if (!isCompleted) {
      kidSounds.playStepComplete();
    } else {
      kidSounds.playPop();
    }
    onToggleComplete();
  };

  const handleReadAloud = () => {
    kidSounds.playPop();
    setIsReading(true);
    narrator.speak(step.narration, () => {
      setIsReading(false);
    });
  };

  return (
    <div
      className={`rounded-3xl p-6 transition-all duration-200 border-3 ${
        isCompleted
          ? 'bg-emerald-50/80 border-emerald-300 shadow-md'
          : 'bg-white border-amber-200 shadow-lg hover:shadow-xl'
      }`}
    >
      {/* Header bar */}
      <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
        <div className="flex items-center gap-2.5">
          <span
            className={`font-['Fredoka',sans-serif] text-sm font-bold px-3.5 py-1.5 rounded-full ${
              isCompleted
                ? 'bg-emerald-200 text-emerald-900'
                : 'bg-amber-100 text-amber-900'
            }`}
          >
            Step {stepIndex + 1} of {totalSteps}
          </span>
          <h3 className="font-['Fredoka',sans-serif] text-xl sm:text-2xl font-bold text-slate-800">
            {step.title}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          {/* Read to Me Button */}
          <button
            onClick={handleReadAloud}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-2xl font-bold font-['Fredoka',sans-serif] text-xs sm:text-sm transition-all shadow-xs active:scale-95 ${
              isReading
                ? 'bg-purple-600 text-white animate-pulse'
                : 'bg-purple-100 hover:bg-purple-200 text-purple-900'
            }`}
            title="Listen to this step read aloud"
          >
            <Volume2 className="w-4 h-4 text-purple-600" />
            <span>{isReading ? 'Reading...' : 'Read to Me 🔊'}</span>
          </button>

          {/* Complete Toggle Button */}
          <button
            onClick={handleToggle}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-2xl font-bold font-['Fredoka',sans-serif] text-sm sm:text-base transition-all transform active:scale-95 shadow-sm ${
              isCompleted
                ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                : 'bg-amber-500 hover:bg-amber-600 text-white hover:shadow-md'
            }`}
          >
            {isCompleted ? (
              <>
                <CheckCircle2 className="w-5 h-5 text-emerald-200" />
                <span>Done! ⭐</span>
              </>
            ) : (
              <>
                <Circle className="w-5 h-5 text-amber-200" />
                <span>I Did It!</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Action text */}
      <div className="text-base sm:text-lg text-slate-800 font-semibold mb-4 leading-relaxed">
        {step.actionText}
      </div>

      {/* Visual PictoBlox Block Display */}
      <div className="bg-amber-50/70 border-2 border-amber-200 rounded-2xl p-4 mb-4 flex flex-col items-start gap-1.5 overflow-x-auto shadow-inner">
        <div className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-1 flex items-center gap-1.5 font-['Fredoka',sans-serif]">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          Blocks to snap together in PictoBlox:
        </div>
        <div className="flex flex-col items-start gap-1">
          {step.blocks.map((blk, idx) => (
            <PictoBlock key={idx} block={blk} />
          ))}
        </div>
      </div>

      {/* Spot Check Box */}
      <div className="bg-sky-50 border-2 border-sky-200 rounded-2xl p-3.5 flex items-start gap-3 text-sky-950 text-sm mb-3">
        <span className="text-2xl shrink-0">👀</span>
        <div>
          <span className="font-bold font-['Fredoka',sans-serif] block text-sky-900 text-base">
            Spot Check (Test your game):
          </span>
          <p className="mt-0.5 text-sky-900 font-bold">{step.spotCheck}</p>
        </div>
      </div>

      {/* Fun Tip (if present) */}
      {step.funTip && (
        <div className="flex items-center gap-2 text-amber-900 bg-amber-100/70 rounded-2xl p-3 text-xs sm:text-sm font-semibold border border-amber-200">
          <Heart className="w-4 h-4 text-rose-500 shrink-0" />
          <span>
            <strong className="font-['Fredoka',sans-serif]">Tobi's Tip:</strong> {step.funTip}
          </span>
        </div>
      )}
    </div>
  );
};
