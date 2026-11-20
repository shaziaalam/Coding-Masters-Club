import React, { useState } from 'react';
import { Lock, KeyRound, X, AlertCircle, ArrowLeft } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface TeacherPasscodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const TeacherPasscodeModal: React.FC<TeacherPasscodeModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const storedPasscode = localStorage.getItem('coding_club_teacher_passcode') || '2026';

    if (passcode.trim() === storedPasscode) {
      sounds.playSuccess();
      sessionStorage.setItem('coding_club_teacher_unlocked', 'true');
      setError(null);
      setPasscode('');
      onSuccess();
    } else {
      sounds.playHint();
      setError('Incorrect passcode. This portal is reserved for club teachers & facilitators.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border-4 border-slate-800 animate-fadeIn cursor-default">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-slate-900 text-amber-400 flex items-center justify-center shadow-sm">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-['Fredoka',sans-serif] font-bold text-lg text-slate-900 leading-tight">
                Teacher & Leader Portal
              </h3>
              <span className="text-[11px] font-bold text-slate-500">
                Restricted Educational Area
              </span>
            </div>
          </div>
          <button
            onClick={() => {
              sounds.playPop();
              onClose();
            }}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Safeguarding explanation */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3.5 mb-4 text-xs text-amber-950 font-medium leading-relaxed">
          🔒 Lesson walkthroughs, student rosters, PIN reset tools, and cloud settings are password-protected to safeguard student privacy.
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 font-['Fredoka',sans-serif]">
              Enter Teacher Passcode:
            </label>
            <input
              type="password"
              maxLength={16}
              value={passcode}
              onChange={(e) => {
                setPasscode(e.target.value);
                setError(null);
              }}
              placeholder="Passcode (Default: 2026)"
              autoFocus
              className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 focus:border-slate-800 rounded-2xl text-center text-lg font-mono tracking-widest text-slate-900 focus:outline-none transition"
            />
            <p className="text-[11px] text-slate-500 text-center font-medium mt-2">
              Default passcode is <strong className="text-slate-700">2026</strong>. You can change this anytime inside the Teacher Portal under <strong>Teacher Passcode</strong>.
            </p>
          </div>

          {error && (
            <div className="p-3 bg-rose-50 border border-rose-200 rounded-2xl text-xs font-bold text-rose-700 flex items-start gap-2 animate-fadeIn">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <div className="flex items-center gap-2 pt-2">
            <button
              type="button"
              onClick={() => {
                sounds.playPop();
                onClose();
              }}
              className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold font-['Fredoka',sans-serif] text-xs sm:text-sm rounded-xl transition flex items-center justify-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Course</span>
            </button>

            <button
              type="submit"
              className="flex-1 py-2.5 bg-slate-900 hover:bg-slate-800 active:scale-95 text-white font-bold font-['Fredoka',sans-serif] text-xs sm:text-sm rounded-xl shadow-md transition flex items-center justify-center gap-1.5"
            >
              <KeyRound className="w-4 h-4 text-amber-400" />
              <span>Unlock Guide</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
