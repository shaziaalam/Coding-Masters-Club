import React, { useState } from 'react';
import { TeacherGuide } from '../types';
import { TeacherClassRoster } from './TeacherClassRoster';
import { X, Clock, AlertTriangle, GraduationCap, School, BookOpen, Users, FileText } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface TeacherDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  guide: TeacherGuide;
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
  appId = 'ks2_scratch',
  totalSteps = 50,
}) => {
  const [activeTab, setActiveTab] = useState<'guide' | 'roster'>('guide');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-sm flex justify-end transition-opacity">
      <div className="w-full max-w-2xl bg-white h-full shadow-2xl flex flex-col overflow-y-auto animate-slideInRight">
        {/* Header */}
        <div className="p-6 bg-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600 flex items-center justify-center text-white">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-indigo-300 font-bold font-['Fredoka',sans-serif]">
                Teacher & Tutor Dashboard
              </span>
              <h2 className="text-xl font-bold font-['Fredoka',sans-serif]">
                {activeTab === 'guide' ? `Week ${weekNumber} Lesson Dossier` : 'Class Roster & Cloud DB'}
              </h2>
            </div>
          </div>
          <button
            onClick={() => {
              sounds.playPop();
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
              sounds.playPop();
              setActiveTab('guide');
            }}
            className={`flex-1 py-2 px-3 rounded-xl font-bold font-['Fredoka',sans-serif] text-xs sm:text-sm flex items-center justify-center gap-2 transition ${
              activeTab === 'guide'
                ? 'bg-white text-indigo-900 shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/70'
            }`}
          >
            <FileText className="w-4 h-4 text-indigo-600" />
            <span>Week {weekNumber} Lesson Guide</span>
          </button>

          <button
            onClick={() => {
              sounds.playPop();
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
              <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-2 text-indigo-900 font-bold font-['Fredoka',sans-serif] text-sm">
                  <School className="w-4 h-4 text-indigo-600" />
                  School / Club Branding
                </div>
                <p className="text-xs text-indigo-700 mb-2">
                  This name will be displayed on all student achievement graduation certificates:
                </p>
                <input
                  type="text"
                  value={schoolName}
                  onChange={(e) => onUpdateSchoolName(e.target.value)}
                  placeholder="e.g. St Mary's Primary Coding Club"
                  className="w-full px-3 py-2 text-sm bg-white border border-indigo-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium text-slate-800"
                />
              </div>

              {/* National Curriculum Link */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-2 text-slate-900 font-bold font-['Fredoka',sans-serif] text-sm">
                  <BookOpen className="w-4 h-4 text-emerald-600" />
                  UK National Curriculum Alignment (KS2)
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {guide.curriculumLink}
                </p>
              </div>

              {/* 60-Minute Session Breakdown */}
              <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-3 text-amber-900 font-bold font-['Fredoka',sans-serif] text-sm">
                  <Clock className="w-4 h-4 text-amber-600" />
                  60-Minute Session Architecture
                </div>
                <div className="space-y-2.5 text-xs">
                  <div className="flex gap-2">
                    <span className="font-bold text-amber-900 w-20 shrink-0 font-['Fredoka',sans-serif]">00–05 Mins:</span>
                    <span className="text-slate-700">{guide.lessonTiming.arrivalAndWarmup}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-bold text-amber-900 w-20 shrink-0 font-['Fredoka',sans-serif]">05–15 Mins:</span>
                    <span className="text-slate-700">{guide.lessonTiming.liveDemo}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-bold text-amber-900 w-20 shrink-0 font-['Fredoka',sans-serif]">15–45 Mins:</span>
                    <span className="text-slate-700">{guide.lessonTiming.handsOnCoding}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-bold text-amber-900 w-20 shrink-0 font-['Fredoka',sans-serif]">45–55 Mins:</span>
                    <span className="text-slate-700">{guide.lessonTiming.peerReviewAndDebug}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-bold text-amber-900 w-20 shrink-0 font-['Fredoka',sans-serif]">55–60 Mins:</span>
                    <span className="text-slate-700">{guide.lessonTiming.packDownAndDismissal}</span>
                  </div>
                </div>
              </div>

              {/* 3 Common Traps */}
              <div className="bg-rose-50/70 border border-rose-200 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-3 text-rose-900 font-bold font-['Fredoka',sans-serif] text-sm">
                  <AlertTriangle className="w-4 h-4 text-rose-600" />
                  Common Traps & Quick Fixes
                </div>
                <ul className="space-y-2 text-xs text-rose-900/90 list-disc list-inside">
                  {guide.commonTraps.map((trap, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {trap}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Differentiation */}
              <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-4">
                <div className="text-emerald-900 font-bold font-['Fredoka',sans-serif] text-sm mb-1.5">
                  💡 Differentiation & Inclusion
                </div>
                <p className="text-xs text-emerald-800 leading-relaxed font-medium">
                  {guide.differentiationTips}
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 text-center">
          <button
            onClick={() => {
              sounds.playPop();
              onClose();
            }}
            className="w-full py-2.5 bg-slate-800 hover:bg-slate-900 text-white font-bold font-['Fredoka',sans-serif] text-sm rounded-xl transition"
          >
            Close Tutor Panel
          </button>
        </div>
      </div>
    </div>
  );
};
