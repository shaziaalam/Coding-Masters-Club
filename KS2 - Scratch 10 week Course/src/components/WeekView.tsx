import React, { useState } from 'react';
import { Lesson } from '../types';
import { StepCard } from './StepCard';
import { BugHuntCard } from './BugHuntCard';
import { SpicyChallengeCard } from './SpicyChallenge';
import { ChevronLeft, ChevronRight, Sparkles, BookOpen, Layers } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sounds } from '../utils/soundEffects';

interface WeekViewProps {
  lesson: Lesson;
  completedSteps: Record<string, boolean>;
  onToggleStep: (stepKey: string) => void;
  completedBugHunts: Record<number, boolean>;
  onToggleBugHunt: (week: number) => void;
  completedSpicy: Record<number, boolean>;
  onToggleSpicy: (week: number) => void;
  onNextWeek: () => void;
  onPrevWeek: () => void;
  isFirstWeek: boolean;
  isLastWeek: boolean;
  onOpenCertificate: () => void;
}

export const WeekView: React.FC<WeekViewProps> = ({
  lesson,
  completedSteps,
  onToggleStep,
  completedBugHunts,
  onToggleBugHunt,
  completedSpicy,
  onToggleSpicy,
  onNextWeek,
  onPrevWeek,
  isFirstWeek,
  isLastWeek,
  onOpenCertificate,
}) => {
  const [activeStepTab, setActiveStepTab] = useState<number>(0);
  const [viewAllSteps, setViewAllSteps] = useState<boolean>(false);

  // Calculate completed steps for this week
  const weekStepKeys = lesson.steps.map((s) => `w${lesson.week}-s${s.id}`);
  const completedCount = weekStepKeys.filter((k) => completedSteps[k]).length;
  const isAllStepsCompleted = completedCount === lesson.steps.length;

  const handleCompleteAllConfetti = () => {
    sounds.playWeekComplete();
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Week Hero Card */}
      <div className="bg-gradient-to-br from-amber-400 via-amber-300 to-orange-400 rounded-3xl p-6 sm:p-8 text-slate-900 shadow-md border-2 border-amber-300/80 relative overflow-hidden">
        {/* Background Decorative Emojis */}
        <div className="absolute top-2 right-4 text-7xl opacity-20 pointer-events-none select-none">
          {lesson.badge.icon}
        </div>

        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="bg-white/90 text-amber-900 text-xs font-bold font-['Fredoka',sans-serif] px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
              Week {lesson.week} of 10
            </span>
            <span className="bg-amber-900 text-amber-100 text-xs font-bold font-['Fredoka',sans-serif] px-3 py-1 rounded-full">
              {lesson.csConcept}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Fredoka',sans-serif] text-slate-900 tracking-tight mb-2">
            {lesson.badge.icon} {lesson.title}
          </h2>

          <p className="text-base sm:text-lg font-bold text-slate-800/90 mb-5 max-w-2xl">
            {lesson.tagline}
          </p>

          {/* Big Idea Kid-Friendly Box */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-white/60 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900 mb-1 font-['Fredoka',sans-serif]">
              <Sparkles className="w-4 h-4 text-amber-600" />
              The Big Idea
            </div>
            <p className="text-sm text-slate-700 leading-relaxed font-semibold">
              {lesson.bigIdea}
            </p>
          </div>
        </div>
      </div>

      {/* Steps Header & Stepper Tabs */}
      <div className="bg-white rounded-3xl p-6 border border-amber-200/90 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-500" />
              <h3 className="text-xl font-bold font-['Fredoka',sans-serif] text-slate-800">
                Session Steps
              </h3>
            </div>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Completed {completedCount} of {lesson.steps.length} steps this week
            </p>
          </div>

          {/* View toggle (Single Step Stepper vs All Steps) */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                sounds.playPop();
                setViewAllSteps(!viewAllSteps);
              }}
              className="flex items-center gap-1.5 text-xs font-bold font-['Fredoka',sans-serif] text-slate-600 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-xl transition"
            >
              <Layers className="w-3.5 h-3.5" />
              {viewAllSteps ? 'Show 1 Step at a Time' : 'View All Steps on 1 Page'}
            </button>
          </div>
        </div>

        {/* Step Buttons (Tab Bar) */}
        {!viewAllSteps && (
          <div className="grid grid-cols-5 gap-2 mb-6">
            {lesson.steps.map((st, idx) => {
              const key = `w${lesson.week}-s${st.id}`;
              const isDone = completedSteps[key];
              const isActive = activeStepTab === idx;

              return (
                <button
                  key={st.id}
                  onClick={() => {
                    sounds.playPop();
                    setActiveStepTab(idx);
                  }}
                  className={`py-2 px-1 rounded-2xl flex flex-col items-center justify-center font-['Fredoka',sans-serif] text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-amber-500 text-white shadow-md scale-102'
                      : isDone
                      ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <span className="flex items-center gap-1">
                    Step {idx + 1}
                    {isDone && <span className="text-[10px]">✓</span>}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Steps Display */}
        {viewAllSteps ? (
          <div className="space-y-6">
            {lesson.steps.map((st, idx) => (
              <StepCard
                key={st.id}
                step={st}
                stepIndex={idx}
                totalSteps={lesson.steps.length}
                isCompleted={Boolean(completedSteps[`w${lesson.week}-s${st.id}`])}
                onToggleComplete={() => onToggleStep(`w${lesson.week}-s${st.id}`)}
              />
            ))}
          </div>
        ) : (
          <div>
            <StepCard
              step={lesson.steps[activeStepTab]}
              stepIndex={activeStepTab}
              totalSteps={lesson.steps.length}
              isCompleted={Boolean(completedSteps[`w${lesson.week}-s${lesson.steps[activeStepTab].id}`])}
              onToggleComplete={() => onToggleStep(`w${lesson.week}-s${lesson.steps[activeStepTab].id}`)}
            />

            {/* Stepper Navigation Buttons */}
            <div className="flex items-center justify-between gap-3 mt-6 pt-4 border-t border-slate-100">
              <button
                disabled={activeStepTab === 0}
                onClick={() => {
                  sounds.playPop();
                  setActiveStepTab((prev) => Math.max(0, prev - 1));
                }}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold font-['Fredoka',sans-serif] text-xs sm:text-sm transition ${
                  activeStepTab === 0
                    ? 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400'
                    : 'bg-slate-200 hover:bg-slate-300 text-slate-700'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                Previous Step
              </button>

              <button
                disabled={activeStepTab === lesson.steps.length - 1}
                onClick={() => {
                  sounds.playPop();
                  setActiveStepTab((prev) => Math.min(lesson.steps.length - 1, prev + 1));
                }}
                className={`flex items-center gap-1.5 px-5 py-2 rounded-xl font-bold font-['Fredoka',sans-serif] text-xs sm:text-sm transition ${
                  activeStepTab === lesson.steps.length - 1
                    ? 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400'
                    : 'bg-amber-500 hover:bg-amber-600 text-white shadow-xs'
                }`}
              >
                Next Step
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* All Steps Completed Congratulations Banner */}
        {isAllStepsCompleted && (
          <div className="mt-8 bg-emerald-100/80 border-2 border-emerald-300 rounded-3xl p-6 text-center animate-fadeIn">
            <span className="text-4xl block mb-2">🎉</span>
            <h4 className="text-xl font-bold font-['Fredoka',sans-serif] text-emerald-900">
              High Five! You finished all steps for Week {lesson.week}!
            </h4>
            <p className="text-xs text-emerald-800 font-medium mt-1 mb-4">
              You unlocked the <strong>{lesson.badge.name}</strong> badge! Try the Bug Hunt below or tackle the Spicy Challenge!
            </p>
            <button
              onClick={handleCompleteAllConfetti}
              className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold font-['Fredoka',sans-serif] text-xs rounded-xl shadow-xs transition transform active:scale-95"
            >
              Celebrate with Confetti! 🎊
            </button>
          </div>
        )}
      </div>

      {/* Extension Sections Grid: Bug Hunt & Spicy Challenge */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BugHuntCard
          bugHunt={lesson.bugHunt}
          isCompleted={Boolean(completedBugHunts[lesson.week])}
          onToggleComplete={() => onToggleBugHunt(lesson.week)}
        />

        <SpicyChallengeCard
          challenge={lesson.spicyChallenge}
          isCompleted={Boolean(completedSpicy[lesson.week])}
          onToggleComplete={() => onToggleSpicy(lesson.week)}
        />
      </div>

      {/* Week-to-Week Navigation Footer */}
      <div className="bg-white rounded-3xl p-5 border border-amber-200/90 shadow-sm flex items-center justify-between gap-4 flex-wrap">
        <button
          disabled={isFirstWeek}
          onClick={() => {
            sounds.playPop();
            onPrevWeek();
          }}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-bold font-['Fredoka',sans-serif] text-sm transition ${
            isFirstWeek
              ? 'opacity-30 cursor-not-allowed bg-slate-100 text-slate-400'
              : 'bg-slate-200 hover:bg-slate-300 text-slate-700'
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
          Previous Week
        </button>

        {isLastWeek ? (
          <button
            onClick={() => {
              sounds.playWeekComplete();
              onOpenCertificate();
            }}
            className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:brightness-110 text-white font-bold font-['Fredoka',sans-serif] text-sm rounded-2xl shadow-md transition transform active:scale-95"
          >
            <Sparkles className="w-5 h-5 text-amber-300" />
            Claim Graduation Certificate! 🎓
          </button>
        ) : (
          <button
            onClick={() => {
              sounds.playPop();
              onNextWeek();
            }}
            className="flex items-center gap-2 px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold font-['Fredoka',sans-serif] text-sm rounded-2xl shadow-md transition transform active:scale-95"
          >
            <span>Next Week (Week {lesson.week + 1})</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};
