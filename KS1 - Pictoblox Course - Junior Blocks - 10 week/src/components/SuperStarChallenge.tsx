import React, { useState } from 'react';
import { JrSuperStar } from '../types';
import { Star, Lightbulb, CheckCircle2 } from 'lucide-react';
import { jrSounds } from '../utils/soundEffects';

interface SuperStarProps {
  superStar: JrSuperStar;
  isCompleted: boolean;
  onToggleComplete: () => void;
}

export const SuperStarCard: React.FC<SuperStarProps> = ({
  superStar,
  isCompleted,
  onToggleComplete,
}) => {
  const [showHint, setShowHint] = useState(false);

  const toggleComplete = () => {
    if (!isCompleted) jrSounds.playSuccess();
    else jrSounds.playPop();
    onToggleComplete();
  };

  return (
    <div
      className={`rounded-3xl p-6 border-3 transition-all ${
        isCompleted
          ? 'bg-amber-100/90 border-amber-400 shadow-sm'
          : 'bg-gradient-to-br from-amber-50 to-orange-50 border-amber-300 shadow-md hover:shadow-lg'
      }`}
    >
      <div className="flex items-center justify-between gap-3 mb-3 flex-wrap">
        <div className="flex items-center gap-2.5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-400 to-orange-500 text-white flex items-center justify-center text-2xl shadow-sm">
            ⭐
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-700 font-['Fredoka',sans-serif]">
                Extra Fun Challenge
              </span>
              <div className="flex text-amber-500">
                {Array.from({ length: superStar.stars }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                ))}
              </div>
            </div>
            <h3 className="text-xl font-bold font-['Fredoka',sans-serif] text-slate-800">
              {superStar.title}
            </h3>
          </div>
        </div>

        <button
          onClick={toggleComplete}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-2xl font-bold font-['Fredoka',sans-serif] text-xs sm:text-sm transition-all ${
            isCompleted
              ? 'bg-amber-600 text-white'
              : 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:brightness-105 shadow-xs'
          }`}
        >
          <CheckCircle2 className="w-4 h-4" />
          {isCompleted ? 'Smashed! ⭐' : 'I Did This!'}
        </button>
      </div>

      <p className="text-slate-800 font-semibold mb-3 text-sm sm:text-base leading-relaxed">
        {superStar.description}
      </p>

      <div className="flex items-center gap-3">
        <button
          onClick={() => {
            jrSounds.playPop();
            setShowHint(!showHint);
          }}
          className="flex items-center gap-1.5 text-xs text-amber-900 font-bold font-['Fredoka',sans-serif] bg-amber-200/70 hover:bg-amber-200 px-3 py-1.5 rounded-xl transition"
        >
          <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
          {showHint ? 'Hide Hint' : 'Need a Secret Hint? 💡'}
        </button>
      </div>

      {showHint && (
        <div className="mt-2.5 bg-amber-100 border border-amber-300 rounded-xl p-3 text-xs sm:text-sm text-amber-950 font-semibold">
          <strong>Hint:</strong> {superStar.easyHint}
        </div>
      )}
    </div>
  );
};
