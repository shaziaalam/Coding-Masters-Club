import React, { useState } from 'react';
import { BugHunt } from '../types';
import { ScratchBlock } from './ScratchBlock';
import { Bug, HelpCircle, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface BugHuntCardProps {
  bugHunt: BugHunt;
  isCompleted: boolean;
  onToggleComplete: () => void;
}

export const BugHuntCard: React.FC<BugHuntCardProps> = ({
  bugHunt,
  isCompleted,
  onToggleComplete,
}) => {
  const [showClue, setShowClue] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  const toggleClue = () => {
    if (!showClue) sounds.playHint();
    setShowClue(!showClue);
  };

  const toggleSolution = () => {
    if (!showSolution) {
      sounds.playSuccess();
      if (!isCompleted) onToggleComplete();
    }
    setShowSolution(!showSolution);
  };

  return (
    <div className="bg-rose-50/70 border-2 border-rose-200 rounded-3xl p-6 shadow-md transition-all">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-2xl bg-rose-500 text-white flex items-center justify-center text-xl shadow-sm">
            <Bug className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600 font-['Fredoka',sans-serif]">
              Debugging Detective
            </span>
            <h3 className="text-xl font-bold font-['Fredoka',sans-serif] text-slate-800">
              {bugHunt.title}
            </h3>
          </div>
        </div>

        <button
          onClick={() => {
            if (!isCompleted) sounds.playSuccess();
            onToggleComplete();
          }}
          className={`flex items-center gap-2 px-4 py-2 rounded-2xl font-bold font-['Fredoka',sans-serif] text-sm transition-all ${
            isCompleted
              ? 'bg-rose-600 text-white'
              : 'bg-rose-200 text-rose-800 hover:bg-rose-300'
          }`}
        >
          <CheckCircle2 className="w-4 h-4" />
          {isCompleted ? 'Bug Solved! 🎖️' : 'Mark Solved'}
        </button>
      </div>

      {/* Story */}
      <p className="text-slate-700 font-medium mb-4 text-sm leading-relaxed bg-white/70 p-3.5 rounded-2xl border border-rose-100">
        {bugHunt.scenario}
      </p>

      {/* Buggy Code Block */}
      <div className="bg-rose-100/70 border border-rose-300/80 rounded-2xl p-4 mb-4">
        <div className="text-xs font-bold text-rose-700 uppercase tracking-wider mb-2 font-['Fredoka',sans-serif] flex items-center gap-1.5">
          <span className="text-sm">⚠️</span> Broken Code (Can you spot what's wrong?):
        </div>
        <div className="flex flex-col items-start gap-1">
          {bugHunt.buggyCode.map((block, idx) => (
            <ScratchBlock key={idx} block={block} />
          ))}
        </div>
      </div>

      {/* Action Buttons: Clue & Solution */}
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={toggleClue}
          className="flex items-center gap-1.5 px-3.5 py-2 bg-amber-100 hover:bg-amber-200 text-amber-800 font-bold font-['Fredoka',sans-serif] text-xs rounded-xl transition"
        >
          <HelpCircle className="w-4 h-4 text-amber-600" />
          {showClue ? 'Hide Clue' : 'Need a Clue? 💡'}
        </button>

        <button
          onClick={toggleSolution}
          className="flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold font-['Fredoka',sans-serif] text-xs rounded-xl transition shadow-sm ml-auto"
        >
          {showSolution ? (
            <>
              Hide Solution <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              Reveal Detective Fix 🔍 <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      </div>

      {/* Clue Box */}
      {showClue && (
        <div className="mt-3 bg-amber-50 border border-amber-200 rounded-2xl p-3.5 text-xs text-amber-900 font-medium animate-fadeIn">
          <strong className="font-['Fredoka',sans-serif] text-amber-950 block mb-0.5">
            Detective Clue:
          </strong>
          {bugHunt.clue}
        </div>
      )}

      {/* Solution Box */}
      {showSolution && (
        <div className="mt-4 bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-4 animate-fadeIn">
          <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1 font-['Fredoka',sans-serif]">
            ✅ How to Fix It:
          </div>
          <p className="text-xs text-emerald-900 font-medium mb-3">
            {bugHunt.solutionExplanation}
          </p>
          <div className="bg-white/80 border border-emerald-200 rounded-xl p-3 flex flex-col items-start gap-1">
            <span className="text-[11px] font-bold text-emerald-700 font-['Fredoka',sans-serif] mb-1">
              Correct Working Blocks:
            </span>
            {bugHunt.fixedCode.map((block, idx) => (
              <ScratchBlock key={idx} block={block} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
