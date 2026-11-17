import React, { useState } from 'react';
import { SpicyChallenge } from '../types';
import { Flame, Star, Lightbulb, CheckCircle2 } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface SpicyChallengeProps {
  challenge: SpicyChallenge;
  isCompleted: boolean;
  onToggleComplete: () => void;
}

export const SpicyChallengeCard: React.FC<SpicyChallengeProps> = ({
  challenge,
  isCompleted,
  onToggleComplete,
}) => {
  const [showHint, setShowHint] = useState(false);

  const toggleComplete = () => {
    if (!isCompleted) sounds.playSuccess();
    else sounds.playPop();
    onToggleComplete();
  };

  return (
    <div
      className={`rounded-3xl p-6 border-2 transition-all ${
        isCompleted
          ? 'bg-amber-100/90 border-amber-400 shadow-sm'
          : 'bg-gradient-to-br from-amber-50 to-orange-50/70 border-amber-300 shadow-md hover:shadow-lg'
      }`}
    >
      <div className="flex items-center justify-between gap-3 mb-3 flex-wrap">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center text-xl shadow-sm">
            <Flame className="w-5 h-5 text-amber-100" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600 font-['Fredoka',sans-serif]">
                Fast Finisher Extension
              </span>
              <div className="flex text-amber-500">
                {Array.from({ length: challenge.rewardStars }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                ))}
              </div>
            </div>
            <h3 className="text-xl font-bold font-['Fredoka',sans-serif] text-slate-800">
              🌶️ {challenge.title}
            </h3>
          </div>
        </div>

        <button
          onClick={toggleComplete}
          className={`flex items-center gap-2 px-4 py-2 rounded-2xl font-bold font-['Fredoka',sans-serif] text-sm transition-all ${
            isCompleted
              ? 'bg-amber-600 text-white'
              : 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:brightness-105 shadow-sm'
          }`}
        >
          <CheckCircle2 className="w-4 h-4" />
          {isCompleted ? 'Challenge Smashed! ⭐' : 'Mark Completed'}
        </button>
      </div>

      <p className="text-slate-700 font-medium mb-3 text-sm leading-relaxed">
        {challenge.description}
      </p>

      <div className="flex items-center gap-3">
        <button
          onClick={() => setShowHint(!showHint)}
          className="flex items-center gap-1.5 text-xs text-amber-800 hover:text-amber-900 font-bold font-['Fredoka',sans-serif] bg-amber-200/60 hover:bg-amber-200 px-3 py-1.5 rounded-xl transition"
        >
          <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
          {showHint ? 'Hide Hint' : 'Need a Spicy Hint?'}
        </button>
      </div>

      {showHint && (
        <div className="mt-2.5 bg-amber-100/70 border border-amber-300/80 rounded-xl p-3 text-xs text-amber-950 font-medium">
          <strong>Hint:</strong> {challenge.hint}
        </div>
      )}
    </div>
  );
};
