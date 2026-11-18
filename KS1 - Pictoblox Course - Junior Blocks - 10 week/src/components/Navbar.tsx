import React from 'react';
import { ExternalLink, Volume2, VolumeX, GraduationCap, Map, Award, Mic, MicOff } from 'lucide-react';
import { jrSounds } from '../utils/soundEffects';
import { StudentProfile } from '../services/studentAuthService';
import { StudentProfilePill } from './StudentProfilePill';

interface NavbarProps {
  soundEnabled: boolean;
  onToggleSound: () => void;
  voiceEnabled: boolean;
  onToggleVoice: () => void;
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
  voiceEnabled,
  onToggleVoice,
  onOpenTeacher,
  onOpenCheatsheet,
  onOpenCertificate,
  percentCompleted,
  currentUser,
  onOpenLogin,
  onLogout,
}) => {
  return (
    <header className="bg-white/95 backdrop-blur-md sticky top-0 z-40 border-b-2 border-amber-200/90 shadow-xs pt-2.5 pb-2.5 sm:py-3">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 flex items-center justify-between gap-2 sm:gap-4">
        {/* App Title & Shazia Alam Creator Credit */}
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-2xl bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center text-xl sm:text-2xl shadow-sm">
            🐻
          </div>
          <div className="min-w-0 py-0.5">
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
              <h1 className="font-['Fredoka',sans-serif] font-bold text-lg sm:text-xl md:text-2xl text-slate-900 leading-tight tracking-tight">
                Coding Master
              </h1>
              <span className="text-[10px] sm:text-xs font-bold text-amber-900 bg-amber-100 border border-amber-300 px-2 sm:px-2.5 py-0.5 rounded-full font-['Fredoka',sans-serif] whitespace-nowrap">
                Curriculum by Shazia Alam
              </span>
            </div>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-[10px] sm:text-[11px] font-bold text-sky-800 bg-sky-100 border border-sky-300 px-2 sm:px-2.5 py-0.5 rounded-full font-['Fredoka',sans-serif] whitespace-nowrap">
                Junior Blocks &bull; KS1 (Ages 5–7)
              </span>
              <div className="hidden lg:flex items-center gap-1.5 text-xs text-slate-500 font-bold">
                <span>Progress:</span>
                <div className="w-16 h-2.5 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-500 transition-all duration-300 rounded-full"
                    style={{ width: `${percentCompleted}%` }}
                  />
                </div>
                <span className="text-[11px] font-bold text-slate-800">{percentCompleted}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Quick Launch PictoBlox Web */}
          <a
            href="https://pictoblox.ai/web/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => jrSounds.playPop()}
            className="hidden sm:flex items-center gap-1 px-3 py-1.5 sm:px-3 sm:py-2 bg-amber-500 hover:bg-amber-600 text-white font-bold font-['Fredoka',sans-serif] text-xs sm:text-sm rounded-xl transition shadow-xs active:scale-95"
            title="Open PictoBlox Web in a new tab"
          >
            <span>Launch PictoBlox</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {/* Cheatsheet Button */}
          <button
            onClick={() => {
              jrSounds.playPop();
              onOpenCheatsheet();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 sm:px-3 sm:py-2 bg-sky-100 hover:bg-sky-200 text-sky-900 font-bold font-['Fredoka',sans-serif] text-xs sm:text-sm rounded-xl transition"
            title="Junior Blocks Decoder"
          >
            <Map className="w-4 h-4 text-sky-600" />
            <span className="hidden md:inline">Decoder</span>
          </button>

          {/* Certificate Button */}
          <button
            onClick={() => {
              jrSounds.playPop();
              onOpenCertificate();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 sm:px-3 sm:py-2 bg-purple-100 hover:bg-purple-200 text-purple-900 font-bold font-['Fredoka',sans-serif] text-xs sm:text-sm rounded-xl transition"
            title="Graduation Certificate by Shazia Alam"
          >
            <Award className="w-4 h-4 text-purple-600" />
            <span className="hidden md:inline">Certificate</span>
          </button>

          {/* Voice Narration Toggle */}
          <button
            onClick={onToggleVoice}
            className={`p-2 rounded-xl transition ${
              voiceEnabled
                ? 'bg-purple-100 text-purple-900 hover:bg-purple-200'
                : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
            }`}
            title={voiceEnabled ? 'Voice Narration ON' : 'Voice Narration Muted'}
          >
            {voiceEnabled ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
          </button>

          {/* Sound Toggle */}
          <button
            onClick={onToggleSound}
            className={`p-2 rounded-xl transition ${
              soundEnabled
                ? 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
            }`}
            title={soundEnabled ? 'Sound Effects ON' : 'Sound Effects Muted'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Teacher Mode Button (Only visible if not logged in as a student) */}
          {!currentUser && (
            <button
              onClick={() => {
                jrSounds.playPop();
                onOpenTeacher();
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 sm:px-3 sm:py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold font-['Fredoka',sans-serif] text-xs sm:text-sm rounded-xl transition shadow-xs"
              title="Teacher & Club Leader Access (Password Protected)"
            >
              <GraduationCap className="w-4 h-4 text-amber-400" />
              <span className="hidden xl:inline">Teacher Portal</span>
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
