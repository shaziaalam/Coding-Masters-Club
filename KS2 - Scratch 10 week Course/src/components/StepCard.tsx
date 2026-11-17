import React from 'react';
import { Step } from '../types';
import { ScratchBlock } from './ScratchBlock';
import { CheckCircle2, Circle, Lightbulb, Sparkles } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface StepCardProps {
  step: Step;
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
  const handleToggle = () => {
    if (!isCompleted) {
      sounds.playStepComplete();
    } else {
      sounds.playPop();
    }
    onToggleComplete();
  };

  return (
    <div
      className={`rounded-3xl p-6 transition-all duration-200 border-2 ${
        isCompleted
          ? 'bg-emerald-50/70 border-emerald-300 shadow-sm'
          : 'bg-white border-amber-200/90 shadow-md hover:shadow-lg'
      }`}
    >
      {/* Header bar */}
      <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
        <div className="flex items-center gap-3">
          <span
            className={`font-['Fredoka',sans-serif] text-sm font-bold px-3 py-1 rounded-full ${
              isCompleted
                ? 'bg-emerald-200 text-emerald-800'
                : 'bg-amber-100 text-amber-800'
            }`}
          >
            Step {stepIndex + 1} of {totalSteps}
          </span>
          <h3 className="font-['Fredoka',sans-serif] text-xl font-bold text-slate-800">
            {step.title}
          </h3>
        </div>

        {/* Complete Toggle Button */}
        <button
          onClick={handleToggle}
          className={`flex items-center gap-2 px-4 py-2 rounded-2xl font-bold font-['Fredoka',sans-serif] text-sm transition-all transform active:scale-95 shadow-sm ${
            isCompleted
              ? 'bg-emerald-600 text-white hover:bg-emerald-700'
              : 'bg-amber-500 hover:bg-amber-600 text-white hover:shadow-md'
          }`}
        >
          {isCompleted ? (
            <>
              <CheckCircle2 className="w-5 h-5 text-emerald-200" />
              <span>Step Completed!</span>
            </>
          ) : (
            <>
              <Circle className="w-5 h-5 text-amber-200" />
              <span>Mark as Done</span>
            </>
          )}
        </button>
      </div>

      {/* Action text */}
      <div className="text-base text-slate-700 font-medium mb-4 leading-relaxed">
        {step.actionText}
      </div>

      {/* Visual Scratch Block Panel */}
      <div className="bg-slate-100/90 border border-slate-200 rounded-2xl p-4 mb-4 flex flex-col items-start gap-1.5 overflow-x-auto shadow-inner">
        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1.5 font-['Fredoka',sans-serif]">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          Blocks to snap together in Scratch:
        </div>
        <div className="flex flex-col items-start gap-1">
          {step.blocks.map((blk, idx) => (
            <ScratchBlock key={idx} block={blk} />
          ))}
        </div>
      </div>

      {/* Spot Check Box */}
      <div className="bg-sky-50 border border-sky-200 rounded-2xl p-3.5 flex items-start gap-3 text-sky-900 text-sm mb-3">
        <span className="text-xl shrink-0">👀</span>
        <div>
          <span className="font-bold font-['Fredoka',sans-serif] block text-sky-950">
            Spot Check (Test your game):
          </span>
          <p className="mt-0.5 text-sky-800 font-medium">{step.spotCheck}</p>
        </div>
      </div>

      {/* Pro-Tip (if present) */}
      {step.tip && (
        <div className="flex items-start gap-2.5 text-amber-900 bg-amber-100/60 rounded-xl p-3 text-xs font-medium border border-amber-200/60">
          <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <span>
            <strong className="font-['Fredoka',sans-serif]">Top Tip:</strong> {step.tip}
          </span>
        </div>
      )}
    </div>
  );
};
