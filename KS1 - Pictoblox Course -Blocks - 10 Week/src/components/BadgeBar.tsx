import React from 'react';
import { KS1Lesson } from '../types';
import { Lock } from 'lucide-react';
import { kidSounds } from '../utils/soundEffects';

interface BadgeBarProps {
  lessons: KS1Lesson[];
  currentWeek: number;
  onSelectWeek: (week: number) => void;
  isWeekCompleted: (week: number) => boolean;
}

export const BadgeBar: React.FC<BadgeBarProps> = ({
  lessons,
  currentWeek,
  onSelectWeek,
  isWeekCompleted,
}) => {
  return (
    <div className="bg-white/90 backdrop-blur-md rounded-3xl p-3 sm:p-4 border-2 border-amber-200/90 shadow-sm mb-6">
      <div className="flex items-center justify-between mb-2.5 px-2">
        <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-900 font-['Fredoka',sans-serif]">
          Your 10-Week Coding Master Quest
        </span>
        <span className="text-xs sm:text-sm font-bold text-amber-700 font-['Fredoka',sans-serif]">
          Week {currentWeek} of 10
        </span>
      </div>

      <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
        {lessons.map((lesson) => {
          const completed = isWeekCompleted(lesson.week);
          const isCurrent = lesson.week === currentWeek;

          return (
            <button
              key={lesson.week}
              onClick={() => {
                kidSounds.playPop();
                onSelectWeek(lesson.week);
              }}
              title={`Week ${lesson.week}: ${lesson.badge.name} - ${lesson.badge.description}`}
              className={`relative flex flex-col items-center justify-center p-2 rounded-2xl transition-all transform active:scale-95 group ${
                isCurrent
                  ? 'ring-3 ring-amber-500 bg-amber-100 shadow-md scale-105'
                  : completed
                  ? 'bg-emerald-50 hover:bg-emerald-100 border border-emerald-300'
                  : 'bg-slate-100 hover:bg-slate-200/80 border border-slate-200/60 opacity-80'
              }`}
            >
              <span className={`text-2xl sm:text-3xl transition-transform group-hover:scale-115 ${!completed && !isCurrent ? 'grayscale opacity-60' : ''}`}>
                {lesson.badge.icon}
              </span>

              <span className="text-[10px] sm:text-xs font-bold mt-1 text-slate-800 font-['Fredoka',sans-serif] truncate max-w-full">
                Wk {lesson.week}
              </span>

              {!completed && !isCurrent && (
                <div className="absolute top-1 right-1">
                  <Lock className="w-2.5 h-2.5 text-slate-400" />
                </div>
              )}

              {completed && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center text-[9px] text-white font-black">
                  ✓
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
