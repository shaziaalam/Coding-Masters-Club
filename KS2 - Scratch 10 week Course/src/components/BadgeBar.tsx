import React from 'react';
import { Lesson } from '../types';
import { Lock } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface BadgeBarProps {
  lessons: Lesson[];
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
    <div className="bg-white/80 backdrop-blur-md rounded-2xl p-3 border border-amber-200/80 shadow-sm mb-6">
      <div className="flex items-center justify-between mb-2 px-1">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-900/70 font-['Fredoka',sans-serif]">
          Your 10-Week Coding Quest
        </span>
        <span className="text-xs font-bold text-amber-700 font-['Fredoka',sans-serif]">
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
                sounds.playPop();
                onSelectWeek(lesson.week);
              }}
              title={`Week ${lesson.week}: ${lesson.badge.name} - ${lesson.badge.description}`}
              className={`relative flex flex-col items-center justify-center p-2 rounded-xl transition-all transform active:scale-95 group ${
                isCurrent
                  ? 'ring-2 ring-amber-500 bg-amber-100/80 shadow-sm'
                  : completed
                  ? 'bg-emerald-50 hover:bg-emerald-100/70 border border-emerald-200'
                  : 'bg-slate-100 hover:bg-slate-200/80 border border-slate-200/60 opacity-75'
              }`}
            >
              <span className={`text-xl transition-transform group-hover:scale-110 ${!completed && !isCurrent ? 'grayscale opacity-60' : ''}`}>
                {lesson.badge.icon}
              </span>

              <span className="text-[10px] font-bold mt-1 text-slate-700 font-['Fredoka',sans-serif] truncate max-w-full">
                Wk {lesson.week}
              </span>

              {!completed && !isCurrent && (
                <div className="absolute top-1 right-1">
                  <Lock className="w-2.5 h-2.5 text-slate-400" />
                </div>
              )}

              {completed && (
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center text-[8px] text-white font-bold">
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
