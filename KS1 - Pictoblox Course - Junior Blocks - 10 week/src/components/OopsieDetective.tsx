import React, { useState } from 'react';
import { JrOopsie } from '../types';
import { JuniorRibbon } from './JuniorBlock';
import { HelpCircle, CheckCircle2, ChevronDown, ChevronUp, Volume2 } from 'lucide-react';
import { jrSounds } from '../utils/soundEffects';
import { jrNarrator } from '../utils/speechNarration';

interface OopsieDetectiveProps {
  oopsie: JrOopsie;
  isCompleted: boolean;
  onToggleComplete: () => void;
}

export const OopsieDetectiveCard: React.FC<OopsieDetectiveProps> = ({
  oopsie,
  isCompleted,
  onToggleComplete,
}) => {
  const [showClue, setShowClue] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [isReading, setIsReading] = useState(false);

  const toggleClue = () => {
    jrSounds.playPop();
    setShowClue(!showClue);
  };

  const toggleSolution = () => {
    if (!showSolution) {
      jrSounds.playSuccess();
      if (!isCompleted) onToggleComplete();
    } else {
      jrSounds.playPop();
    }
    setShowSolution(!showSolution);
  };

  const handleReadAloud = () => {
    jrSounds.playPop();
    setIsReading(true);
    jrNarrator.speak(oopsie.narration, () => {
      setIsReading(false);
    });
  };

  return (
    <div className="bg-rose-50/80 border-3 border-rose-200 rounded-3xl p-6 shadow-md transition-all">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
        <div className="flex items-center gap-2.5">
          <div className="w-12 h-12 rounded-2xl bg-rose-500 text-white flex items-center justify-center text-2xl shadow-sm">
            🕵️
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-rose-700 font-['Fredoka',sans-serif]">
              Junior Blocks Detective
            </span>
            <h3 className="text-xl font-bold font-['Fredoka',sans-serif] text-slate-800">
              {oopsie.title}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleReadAloud}
            className={`p-2 rounded-xl transition ${
              isReading ? 'bg-rose-600 text-white animate-pulse' : 'bg-rose-100 hover:bg-rose-200 text-rose-800'
            }`}
            title="Read story aloud"
          >
            <Volume2 className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              if (!isCompleted) jrSounds.playSuccess();
              onToggleComplete();
            }}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-2xl font-bold font-['Fredoka',sans-serif] text-xs sm:text-sm transition-all ${
              isCompleted
                ? 'bg-rose-600 text-white'
                : 'bg-rose-200 text-rose-900 hover:bg-rose-300'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            {isCompleted ? 'Solved! 🎖️' : 'Mark Solved'}
          </button>
        </div>
      </div>

      {/* Story */}
      <p className="text-slate-800 font-semibold mb-4 text-sm sm:text-base leading-relaxed bg-white/80 p-3.5 rounded-2xl border border-rose-100">
        {oopsie.story}
      </p>

      {/* Buggy Junior Blocks Ribbon */}
      <div className="bg-rose-100/70 border-2 border-rose-300 rounded-2xl p-4 mb-4">
        <div className="text-xs font-bold text-rose-800 uppercase tracking-wider mb-2 font-['Fredoka',sans-serif] flex items-center gap-1.5">
          <span>⚠️</span> Oopsie in the Ribbon (Can you spot what's wrong?):
        </div>
        <JuniorRibbon blocks={oopsie.buggyBlocks} />
      </div>

      {/* Action Buttons: Clue & Solution */}
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={toggleClue}
          className="flex items-center gap-1.5 px-3.5 py-2 bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold font-['Fredoka',sans-serif] text-xs rounded-xl transition"
        >
          <HelpCircle className="w-4 h-4 text-amber-600" />
          {showClue ? 'Hide Clue' : 'Give me a Clue 💡'}
        </button>

        <button
          onClick={toggleSolution}
          className="flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold font-['Fredoka',sans-serif] text-xs rounded-xl transition shadow-xs ml-auto"
        >
          {showSolution ? (
            <>
              Hide Solution <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              Fix It for Me 🛠️ <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      </div>

      {/* Clue Box */}
      {showClue && (
        <div className="mt-3 bg-amber-50 border-2 border-amber-200 rounded-2xl p-3.5 text-xs sm:text-sm text-amber-950 font-semibold animate-fadeIn">
          <strong className="font-['Fredoka',sans-serif] text-amber-900 block mb-0.5">
            Detective Clue:
          </strong>
          {oopsie.clue}
        </div>
      )}

      {/* Solution Box */}
      {showSolution && (
        <div className="mt-4 bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-4 animate-fadeIn">
          <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1 font-['Fredoka',sans-serif]">
            ✅ How to Fix It:
          </div>
          <p className="text-xs sm:text-sm text-emerald-950 font-semibold mb-3">
            {oopsie.howToFix}
          </p>
          <div className="bg-white border border-emerald-200 rounded-xl p-3">
            <span className="text-[11px] font-bold text-emerald-700 font-['Fredoka',sans-serif] block mb-1">
              Correct Working Ribbon:
            </span>
            <JuniorRibbon blocks={oopsie.fixedBlocks} />
          </div>
        </div>
      )}
    </div>
  );
};
