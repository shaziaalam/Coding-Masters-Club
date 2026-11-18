import React, { useState } from 'react';
import { JrTeacherGuide } from '../types';
import { TeacherClassRoster } from './TeacherClassRoster';
import { X, Clock, AlertTriangle, GraduationCap, School, BookOpen, Layers, Users, FileText } from 'lucide-react';
import { jrSounds } from '../utils/soundEffects';

interface TeacherDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  guide: JrTeacherGuide;
  weekNumber: number;
  schoolName: string;
  onUpdateSchoolName: (name: string) => void;
  appId?: string;
  totalSteps?: number;
}

export const TeacherDrawer: React.FC<TeacherDrawerProps> = ({
  isOpen,
  onClose,
  guide,
  weekNumber,
  schoolName,
  onUpdateSchoolName,
  appId = 'ks1_junior',
  totalSteps = 40,
}) => {
  const [activeTab, setActiveTab] = useState<'guide' | 'roster'>('guide');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-sm flex justify-end transition-opacity">
      <div className="w-full max-w-2xl bg-white h-full shadow-2xl flex flex-col overflow-y-auto animate-slideInRight">
        {/* Header */}
        <div className="p-6 bg-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500 flex items-center justify-center text-white">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-amber-300 font-bold font-['Fredoka',sans-serif]">
                Curriculum Creator: {guide.curriculumCreator}
              </span>
              <h2 className="text-xl font-bold font-['Fredoka',sans-serif]">
                {activeTab === 'guide' ? `Week ${weekNumber} Junior Blocks Guide` : 'Class Roster & Cloud DB'}
              </h2>
            </div>
          </div>
          <button
            onClick={() => {
              jrSounds.playPop();
              onClose();
            }}
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-200 bg-slate-100 p-2 gap-2 shrink-0">
          <button
            onClick={() => {
              jrSounds.playPop();
              setActiveTab('guide');
            }}
            className={`flex-1 py-2 px-3 rounded-xl font-bold font-['Fredoka',sans-serif] text-xs sm:text-sm flex items-center justify-center gap-2 transition ${
              activeTab === 'guide'
                ? 'bg-white text-indigo-900 shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/70'
            }`}
          >
            <FileText className="w-4 h-4 text-amber-500" />
            <span>Week {weekNumber} Lesson Guide</span>
          </button>

          <button
            onClick={() => {
              jrSounds.playPop();
              setActiveTab('roster');
            }}
            className={`flex-1 py-2 px-3 rounded-xl font-bold font-['Fredoka',sans-serif] text-xs sm:text-sm flex items-center justify-center gap-2 transition ${
              activeTab === 'roster'
                ? 'bg-white text-emerald-900 shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/70'
            }`}
          >
            <Users className="w-4 h-4 text-emerald-600" />
            <span>Class Roster & Cloud DB</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 flex-1 overflow-y-auto">
          {activeTab === 'roster' ? (
            <TeacherClassRoster appId={appId} totalSteps={totalSteps} />
          ) : (
            <>
              {/* School / Club Branding Setting */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-2 text-amber-950 font-bold font-['Fredoka',sans-serif] text-sm">
                  <School className="w-4 h-4 text-amber-600" />
                  School / Club Branding
                </div>
                <p className="text-xs text-amber-800 mb-2">
                  This name will be displayed on all student graduation certificates:
                </p>
                <input
                  type="text"
                  value={schoolName}
                  onChange={(e) => onUpdateSchoolName(e.target.value)}
                  placeholder="e.g. St Anne's Primary Coding Club"
                  className="w-full px-3 py-2 text-sm bg-white border border-amber-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 font-bold text-slate-800"
                />
              </div>

              {/* National Curriculum Link */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-2 text-slate-900 font-bold font-['Fredoka',sans-serif] text-sm">
                  <BookOpen className="w-4 h-4 text-emerald-600" />
                  UK Key Stage 1 Computing Target
                </div>
                <p className="text-xs text-slate-700 leading-relaxed font-semibold">
                  {guide.ks1ComputingTarget}
                </p>
              </div>

              {/* 30–45 Minute Session Architecture */}
              <div className="bg-sky-50 border border-sky-200 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-3 text-sky-950 font-bold font-['Fredoka',sans-serif] text-sm">
                  <Clock className="w-4 h-4 text-sky-600" />
                  30–45 Minute KS1 Session Architecture
                </div>
                <div className="space-y-2.5 text-xs">
                  <div className="flex gap-2">
                    <span className="font-bold text-sky-900 w-24 shrink-0 font-['Fredoka',sans-serif]">00–05 Mins:</span>
                    <span className="text-slate-700 font-medium">{guide.lessonPacing.circleTime}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-bold text-sky-900 w-24 shrink-0 font-['Fredoka',sans-serif]">05–15 Mins:</span>
                    <span className="text-slate-700 font-medium">{guide.lessonPacing.tobiDemo}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-bold text-sky-900 w-24 shrink-0 font-['Fredoka',sans-serif]">15–35 Mins:</span>
                    <span className="text-slate-700 font-medium">{guide.lessonPacing.handsOnRibbon}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-bold text-sky-900 w-24 shrink-0 font-['Fredoka',sans-serif]">35–40 Mins:</span>
                    <span className="text-slate-700 font-medium">{guide.lessonPacing.carnivalShowcase}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-bold text-sky-900 w-24 shrink-0 font-['Fredoka',sans-serif]">40–45 Mins:</span>
                    <span className="text-slate-700 font-medium">{guide.lessonPacing.tidyAndCelebrate}</span>
                  </div>
                </div>
              </div>

              {/* Junior Blocks Tips */}
              <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-2 text-purple-950 font-bold font-['Fredoka',sans-serif] text-sm">
                  <Layers className="w-4 h-4 text-purple-600" />
                  Junior Blocks Pedagogy for KS1
                </div>
                <p className="text-xs text-purple-900 leading-relaxed font-medium">
                  {guide.juniorBlocksTips}
                </p>
              </div>

              {/* Common Oopsies */}
              <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-3 text-rose-950 font-bold font-['Fredoka',sans-serif] text-sm">
                  <AlertTriangle className="w-4 h-4 text-rose-600" />
                  Little Oopsies to Watch & Quick Fixes
                </div>
                <ul className="space-y-2 text-xs text-rose-950 list-disc list-inside font-medium">
                  {guide.littleOopsiesToWatch.map((oopsie, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {oopsie}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Praise & Encouragement */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
                <div className="text-emerald-950 font-bold font-['Fredoka',sans-serif] text-sm mb-1.5">
                  💬 Praise & Encouragement Tip
                </div>
                <p className="text-xs text-emerald-900 leading-relaxed font-semibold italic">
                  {guide.encouragementWords}
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center gap-3">
          <button
            onClick={() => {
              sessionStorage.removeItem('coding_club_teacher_unlocked');
              jrSounds.playPop();
              onClose();
            }}
            className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold font-['Fredoka',sans-serif] text-xs sm:text-sm rounded-xl transition flex items-center justify-center gap-1.5 border border-slate-200"
            title="Lock Teacher Mode so passcode is required again"
          >
            <span>🔒 Lock & Exit</span>
          </button>
          <button
            onClick={() => {
              jrSounds.playPop();
              onClose();
            }}
            className="flex-1 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold font-['Fredoka',sans-serif] text-xs sm:text-sm rounded-xl transition"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
