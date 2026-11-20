import React, { useState } from 'react';
import { JrTeacherGuide } from '../types';
import { TeacherClassRoster } from './TeacherClassRoster';
import {
  X,
  Clock,
  AlertTriangle,
  GraduationCap,
  School,
  BookOpen,
  Layers,
  Users,
  FileText,
  KeyRound,
  Eye,
  EyeOff,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Save,
  Cloud,
} from 'lucide-react';
import { jrSounds } from '../utils/soundEffects';
import { clearStoredSupabaseConfig, hasBuiltInCloud, hasCustomOverride } from '../lib/supabaseClient';

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
  const [activeTab, setActiveTab] = useState<'guide' | 'roster' | 'security'>('guide');

  // Teacher Passcode State
  const [currentPasscode, setCurrentPasscode] = useState(
    () => localStorage.getItem('coding_club_teacher_passcode') || '2026'
  );
  const [newPasscode, setNewPasscode] = useState('');
  const [confirmPasscode, setConfirmPasscode] = useState('');
  const [showCurrentPasscode, setShowCurrentPasscode] = useState(false);
  const [passcodeMsg, setPasscodeMsg] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  // Cloud cache reset state
  const [cacheResetMsg, setCacheResetMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const isCustomPasscode = currentPasscode !== '2026';

  const handleUpdatePasscode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPasscode.trim()) {
      setPasscodeMsg({ text: 'Please enter a new passcode!', type: 'error' });
      return;
    }
    if (newPasscode.trim().length < 4) {
      setPasscodeMsg({ text: 'Passcode must be at least 4 characters!', type: 'error' });
      return;
    }
    if (newPasscode.trim() !== confirmPasscode.trim()) {
      setPasscodeMsg({ text: 'Passcodes do not match! Please check and try again.', type: 'error' });
      return;
    }
    localStorage.setItem('coding_club_teacher_passcode', newPasscode.trim());
    setCurrentPasscode(newPasscode.trim());
    setNewPasscode('');
    setConfirmPasscode('');
    setPasscodeMsg({ text: 'Teacher passcode successfully updated! Remember this code for next login.', type: 'success' });
    jrSounds.playSuccess();
  };

  const handleResetPasscodeDefault = () => {
    localStorage.removeItem('coding_club_teacher_passcode');
    setCurrentPasscode('2026');
    setNewPasscode('');
    setConfirmPasscode('');
    setPasscodeMsg({ text: 'Passcode reset back to default: 2026', type: 'success' });
    jrSounds.playPop();
  };

  const handleClearCloudCache = () => {
    clearStoredSupabaseConfig();
    setCacheResetMsg('Device cloud cache cleared! This computer will now use the built-in school cloud connection.');
    jrSounds.playSuccess();
    setTimeout(() => setCacheResetMsg(null), 4000);
  };

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
                {activeTab === 'guide'
                  ? `Week ${weekNumber} Junior Blocks Guide`
                  : activeTab === 'roster'
                  ? 'Class Roster & Cloud DB'
                  : 'Teacher Passcode & Settings'}
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
            className={`flex-1 py-2 px-2.5 rounded-xl font-bold font-['Fredoka',sans-serif] text-xs sm:text-sm flex items-center justify-center gap-1.5 transition ${
              activeTab === 'guide'
                ? 'bg-white text-indigo-900 shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/70'
            }`}
          >
            <FileText className="w-4 h-4 text-amber-500 shrink-0" />
            <span className="truncate">Lesson Guide</span>
          </button>

          <button
            onClick={() => {
              jrSounds.playPop();
              setActiveTab('roster');
            }}
            className={`flex-1 py-2 px-2.5 rounded-xl font-bold font-['Fredoka',sans-serif] text-xs sm:text-sm flex items-center justify-center gap-1.5 transition ${
              activeTab === 'roster'
                ? 'bg-white text-emerald-900 shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/70'
            }`}
          >
            <Users className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="truncate">Roster & DB</span>
          </button>

          <button
            onClick={() => {
              jrSounds.playPop();
              setActiveTab('security');
            }}
            className={`flex-1 py-2 px-2.5 rounded-xl font-bold font-['Fredoka',sans-serif] text-xs sm:text-sm flex items-center justify-center gap-1.5 transition ${
              activeTab === 'security'
                ? 'bg-white text-purple-900 shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/70'
            }`}
          >
            <KeyRound className="w-4 h-4 text-purple-600 shrink-0" />
            <span className="truncate">Teacher Passcode</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 flex-1 overflow-y-auto">
          {activeTab === 'roster' ? (
            <TeacherClassRoster appId={appId} totalSteps={totalSteps} />
          ) : activeTab === 'security' ? (
            <div className="space-y-6">
              {/* Teacher Passcode Card */}
              <div className="bg-slate-900 text-white border border-slate-700 rounded-3xl p-5 shadow-lg">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
                      <KeyRound className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-['Fredoka',sans-serif] font-bold text-base text-white leading-tight">
                        Teacher Portal Passcode
                      </h3>
                      <p className="text-[11px] text-slate-400 font-medium">
                        Change the password required to unlock this Teacher Portal
                      </p>
                    </div>
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${isCustomPasscode ? 'bg-purple-900/60 text-purple-300 border border-purple-700' : 'bg-slate-800 text-slate-400'}`}>
                    {isCustomPasscode ? 'Custom Passcode Active' : 'Default (2026)'}
                  </span>
                </div>

                {/* Current Passcode Display */}
                <div className="bg-slate-800/80 rounded-2xl p-3.5 mb-4 flex items-center justify-between">
                  <div className="text-xs">
                    <span className="text-slate-400 block font-medium">Current Passcode:</span>
                    <span className="font-mono font-bold text-base text-amber-300 tracking-wider">
                      {showCurrentPasscode ? currentPasscode : '••••••••'}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowCurrentPasscode(!showCurrentPasscode)}
                    className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-700 transition text-xs flex items-center gap-1 font-bold"
                  >
                    {showCurrentPasscode ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    <span>{showCurrentPasscode ? 'Hide' : 'Reveal'}</span>
                  </button>
                </div>

                {/* Change Passcode Form */}
                <form onSubmit={handleUpdatePasscode} className="space-y-3 text-xs">
                  <div>
                    <label className="block text-slate-300 font-bold mb-1 font-['Fredoka',sans-serif]">
                      New Passcode (4–16 characters):
                    </label>
                    <input
                      type="password"
                      value={newPasscode}
                      onChange={(e) => setNewPasscode(e.target.value)}
                      placeholder="Enter new teacher passcode"
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-bold mb-1 font-['Fredoka',sans-serif]">
                      Confirm New Passcode:
                    </label>
                    <input
                      type="password"
                      value={confirmPasscode}
                      onChange={(e) => setConfirmPasscode(e.target.value)}
                      placeholder="Re-enter new passcode"
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 font-mono"
                    />
                  </div>

                  {passcodeMsg && (
                    <div className={`p-2.5 rounded-xl font-medium flex items-center gap-2 ${passcodeMsg.type === 'success' ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-rose-950 text-rose-300 border border-rose-800'}`}>
                      {passcodeMsg.type === 'success' ? <CheckCircle2 className="w-4 h-4 shrink-0" /> : <AlertCircle className="w-4 h-4 shrink-0" />}
                      <span>{passcodeMsg.text}</span>
                    </div>
                  )}

                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <button
                      type="submit"
                      className="flex items-center gap-1.5 px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white font-bold font-['Fredoka',sans-serif] rounded-xl transition shadow-xs"
                    >
                      <Save className="w-4 h-4" />
                      <span>Update Passcode</span>
                    </button>

                    {isCustomPasscode && (
                      <button
                        type="button"
                        onClick={handleResetPasscodeDefault}
                        className="flex items-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold font-['Fredoka',sans-serif] rounded-xl transition"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Reset to Default (2026)</span>
                      </button>
                    )}
                  </div>
                </form>
              </div>

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

              {/* Cloud DB Status & Reset Tool */}
              <div className="bg-slate-100 border border-slate-300 rounded-2xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold font-['Fredoka',sans-serif] text-sm">
                    <Cloud className="w-4 h-4 text-emerald-600" />
                    Database Cloud Sync Status
                  </div>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${hasBuiltInCloud() ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                    {hasBuiltInCloud() ? 'School Cloud Ready' : 'Local Computer Mode'}
                  </span>
                </div>
                {hasCustomOverride() && (
                  <p className="text-xs text-amber-700 font-semibold mb-2">
                    ⚠️ Custom device override is currently active on this computer.
                  </p>
                )}
                <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                  If this computer ever saved old or incorrect database credentials, click below to clear them and force this computer to use the official built-in school cloud connection from GitHub Secrets:
                </p>
                <button
                  type="button"
                  onClick={handleClearCloudCache}
                  className="px-3.5 py-2 bg-white hover:bg-slate-200 text-slate-800 font-bold font-['Fredoka',sans-serif] text-xs rounded-xl border border-slate-300 transition flex items-center gap-1.5 shadow-xs"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
                  <span>Clear Device Cache & Sync with School Cloud</span>
                </button>
                {cacheResetMsg && (
                  <p className="text-xs text-emerald-700 font-bold mt-2 animate-fadeIn">
                    ✓ {cacheResetMsg}
                  </p>
                )}
              </div>
            </div>
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
