import React, { useState, useRef, useEffect } from 'react';
import { StudentProfile } from '../services/studentAuthService';
import { isCloudConfigured } from '../lib/supabaseClient';
import { Cloud, HardDrive, LogOut, RefreshCw, UserCheck, ChevronDown } from 'lucide-react';
import { jrSounds } from '../utils/soundEffects';

interface StudentProfilePillProps {
  user: StudentProfile | null;
  onOpenLogin: () => void;
  onLogout: () => void;
}

export const StudentProfilePill: React.FC<StudentProfilePillProps> = ({
  user,
  onOpenLogin,
  onLogout,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pillRef = useRef<HTMLDivElement>(null);
  const isCloud = isCloudConfigured();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (pillRef.current && !pillRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!user) {
    return (
      <button
        onClick={() => {
          jrSounds.playPop();
          onOpenLogin();
        }}
        className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold font-['Fredoka',sans-serif] text-xs sm:text-sm rounded-xl shadow-xs transition active:scale-95"
      >
        <UserCheck className="w-4 h-4" />
        <span>Coder Login</span>
      </button>
    );
  }

  return (
    <div className="relative" ref={pillRef}>
      <button
        onClick={() => {
          jrSounds.playPop();
          setMenuOpen(!menuOpen);
        }}
        className="flex items-center gap-2 px-2.5 py-1 bg-amber-50 hover:bg-amber-100/80 border border-amber-300 text-slate-800 rounded-xl transition shadow-xs group"
        title="Student Profile Options"
      >
        {/* Avatar */}
        <span className="text-xl sm:text-2xl leading-none">{user.avatar || '🐻'}</span>

        {/* Name and sync dot */}
        <div className="text-left hidden sm:block">
          <div className="text-xs font-bold font-['Fredoka',sans-serif] text-slate-900 leading-tight">
            {user.displayName}
          </div>
          <div className="flex items-center gap-1 text-[10px] text-slate-500 font-semibold font-['Fredoka',sans-serif]">
            {isCloud ? (
              <span className="flex items-center gap-0.5 text-emerald-600">
                <Cloud className="w-2.5 h-2.5" /> Cloud
              </span>
            ) : (
              <span className="flex items-center gap-0.5 text-amber-600">
                <HardDrive className="w-2.5 h-2.5" /> Local
              </span>
            )}
            <span>• @{user.username}</span>
          </div>
        </div>

        <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 transition" />
      </button>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border-2 border-amber-200 py-2 z-50 animate-fadeIn font-['Fredoka',sans-serif]">
          <div className="px-3 py-2 border-b border-slate-100 flex items-center gap-2.5">
            <span className="text-3xl">{user.avatar}</span>
            <div className="overflow-hidden">
              <div className="font-bold text-slate-900 text-sm truncate">{user.displayName}</div>
              <div className="text-xs text-slate-500 truncate">Code: @{user.username}</div>
            </div>
          </div>

          <button
            onClick={() => {
              jrSounds.playPop();
              setMenuOpen(false);
              onOpenLogin();
            }}
            className="w-full px-3 py-2 text-left text-xs font-bold text-slate-700 hover:bg-amber-50 hover:text-amber-800 flex items-center gap-2 transition"
          >
            <RefreshCw className="w-3.5 h-3.5 text-amber-600" />
            <span>Switch Coder Profile</span>
          </button>

          <button
            onClick={() => {
              jrSounds.playPop();
              setMenuOpen(false);
              onLogout();
            }}
            className="w-full px-3 py-2 text-left text-xs font-bold text-rose-600 hover:bg-rose-50 flex items-center gap-2 transition"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Log Out (Finish Session)</span>
          </button>
        </div>
      )}
    </div>
  );
};
