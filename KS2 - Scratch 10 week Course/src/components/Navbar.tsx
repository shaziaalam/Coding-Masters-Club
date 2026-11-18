import React from 'react';
import { ExternalLink, Volume2, VolumeX, GraduationCap, Map, Award } from 'lucide-react';
import { sounds } from '../utils/soundEffects';
import { StudentProfile } from '../services/studentAuthService';
import { StudentProfilePill } from './StudentProfilePill';

interface NavbarProps {
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenTeacher: () => void;
  onOpenCheatsheet: () => void;
  onOpenCertificate: () => void;
  percentCompleted: number;
  currentUser: StudentProfile | null;
  onOpenLogin: () => void;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  soundEnabled,
  onToggleSound,
  onOpenTeacher,
  onOpenCheatsheet,
  onOpenCertificate,
  percentCompleted,
  currentUser,
  onOpenLogin,
  onLogout,
}) => {
  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-40 border-b border-amber-200/80 shadow-xs pt-2.5 pb-2.5 sm:py-3">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 flex items-center justify-between gap-2 sm:gap-4">
        {/* Logo & Brand */}
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-2xl bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center text-xl sm:text-2xl shadow-sm">
            🐱
          </div>
          <div className="min-w-0 py-0.5">
            <h1 className="font-['Fredoka',sans-serif] font-bold text-lg sm:text-xl md:text-2xl text-slate-800 leading-tight tracking-tight">
              KS2 Code Club
            </h1>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-[10px] sm:text-[11px] font-bold text-amber-700 bg-amber-100 border border-amber-200 px-2 sm:px-2.5 py-0.5 rounded-full font-['Fredoka',sans-serif] whitespace-nowrap">
                Scratch 3.0 Curriculum
              </span>
              <div className="hidden lg:flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <span>Progress:</span>
                <div className="w-16 h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-500 transition-all duration-300 rounded-full"
                    style={{ width: `${percentCompleted}%` }}
                  />
                </div>
                <span className="text-[11px] font-bold text-slate-700">{percentCompleted}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Quick Launch Scratch */}
          <a
            href="https://scratch.mit.edu/projects/editor"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sounds.playPop()}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-white font-bold font-['Fredoka',sans-serif] text-xs sm:text-sm rounded-xl transition shadow-xs active:scale-95"
            title="Open Scratch 3.0 editor in a new browser tab"
          >
            <span>Launch Scratch</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {/* Cheatsheet Button */}
          <button
            onClick={() => {
              sounds.playPop();
              onOpenCheatsheet();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-sky-100 hover:bg-sky-200 text-sky-800 font-bold font-['Fredoka',sans-serif] text-xs sm:text-sm rounded-xl transition"
            title="Coordinates & Blocks Cheatsheet"
          >
            <Map className="w-4 h-4 text-sky-600" />
            <span className="hidden md:inline">Cheatsheet</span>
          </button>

          {/* Certificate Button */}
          <button
            onClick={() => {
              sounds.playPop();
              onOpenCertificate();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-100 hover:bg-purple-200 text-purple-800 font-bold font-['Fredoka',sans-serif] text-xs sm:text-sm rounded-xl transition"
            title="View or Print Graduation Certificate"
          >
            <Award className="w-4 h-4 text-purple-600" />
            <span className="hidden md:inline">Certificate</span>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={onToggleSound}
            className={`p-2 rounded-xl transition ${
              soundEnabled
                ? 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
            }`}
            title={soundEnabled ? 'Mute Sounds' : 'Enable Sounds'}
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4" />
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
          </button>

          {/* Teacher Mode Button (Only visible if not logged in as a student) */}
          {!currentUser && (
            <button
              onClick={() => {
                sounds.playPop();
                onOpenTeacher();
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 sm:px-3 sm:py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold font-['Fredoka',sans-serif] text-xs sm:text-sm rounded-xl transition shadow-xs cursor-pointer"
              title="Teacher & Club Leader Access (Password Protected: 2026)"
            >
              <GraduationCap className="w-4 h-4 text-amber-400" />
              <span className="hidden sm:inline">Teacher Portal</span>
            </button>
          )}

          {/* Student Profile Pill */}
          <StudentProfilePill
            user={currentUser}
            onOpenLogin={onOpenLogin}
            onLogout={onLogout}
          />
        </div>
      </div>
    </header>
  );
};
