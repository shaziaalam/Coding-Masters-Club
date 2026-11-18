import React, { useState } from 'react';
import { studentAuthService, StudentProfile, ProgressData } from '../services/studentAuthService';
import { isCloudConfigured } from '../lib/supabaseClient';
import { Sparkles, KeyRound, User, UserPlus, AlertCircle, Cloud, HardDrive, Check } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface StudentLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: StudentProfile, progress: ProgressData) => void;
  appId: string;
  courseTitle: string;
  defaultSchoolName: string;
}

const AVATARS = ['🐻', '🦁', '🚀', '🦄', '🦊', '🐼', '🐱', '🦖', '🎨', '⚽', '🎮', '⭐'];

export const StudentLoginModal: React.FC<StudentLoginModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
  appId,
  courseTitle,
  defaultSchoolName,
}) => {
  const [tab, setTab] = useState<'login' | 'register'>('login');
  const [username, setUsername] = useState('');
  const [pin, setPin] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState('🐻');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const cloudActive = isCloudConfigured();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) {
      setError('Please enter your username or student code!');
      return;
    }
    if (!pin.trim()) {
      setError('Please enter your 4-digit PIN!');
      return;
    }

    setIsLoading(true);
    setError(null);

    const res = await studentAuthService.loginStudent(username, pin, appId);
    setIsLoading(false);

    if (res.success && res.user && res.progress) {
      sounds.playSuccess();
      onLoginSuccess(res.user, res.progress);
      onClose();
    } else {
      sounds.playHint();
      setError(res.error || 'Login failed. Try again!');
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) {
      setError('Please choose a short username or student code!');
      return;
    }
    if (!displayName.trim()) {
      setError('Please enter your name!');
      return;
    }
    if (pin.length !== 4) {
      setError('Please enter a 4-digit PIN (e.g. 1234)!');
      return;
    }

    setIsLoading(true);
    setError(null);

    const res = await studentAuthService.registerStudent(
      username,
      displayName,
      selectedAvatar,
      pin,
      defaultSchoolName,
      appId
    );
    setIsLoading(false);

    if (res.success && res.user && res.progress) {
      sounds.playSuccess();
      onLoginSuccess(res.user, res.progress);
      onClose();
    } else {
      sounds.playHint();
      setError(res.error || 'Registration failed. Try again!');
    }
  };

  const handleGuest = () => {
    sounds.playPop();
    const guestUser: StudentProfile = {
      id: 'guest_' + Math.random().toString(36).substring(2, 7),
      username: 'guest',
      displayName: 'Guest Coder',
      avatar: '⭐',
      pin: '0000',
      schoolName: defaultSchoolName,
    };
    onLoginSuccess(guestUser, {
      completedSteps: {},
      completedChallenges: {},
      completedExtensions: {},
      currentWeek: 1,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border-4 border-amber-300 relative my-8 animate-fadeIn">
        {/* Header Icon & Title */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-tr from-amber-400 to-orange-500 rounded-3xl flex items-center justify-center text-3xl mx-auto shadow-md mb-3 transform hover:rotate-6 transition">
            🐱
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-['Fredoka',sans-serif] text-slate-900 leading-tight">
            Who is Coding Today?
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-bold mt-1">
            {courseTitle}
          </p>

          {/* Cloud vs Local indicator */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold mt-2 font-['Fredoka',sans-serif] bg-slate-100 text-slate-700">
            {cloudActive ? (
              <>
                <Cloud className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">Cloud Sync Active (Supabase)</span>
              </>
            ) : (
              <>
                <HardDrive className="w-3.5 h-3.5 text-amber-600" />
                <span>Local Computer Mode</span>
              </>
            )}
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1.5 rounded-2xl mb-6">
          <button
            type="button"
            onClick={() => {
              sounds.playPop();
              setTab('login');
              setError(null);
            }}
            className={`py-2 px-3 rounded-xl font-bold font-['Fredoka',sans-serif] text-xs sm:text-sm transition flex items-center justify-center gap-1.5 ${
              tab === 'login'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <User className="w-4 h-4 text-amber-500" />
            Returning Coder
          </button>
          <button
            type="button"
            onClick={() => {
              sounds.playPop();
              setTab('register');
              setError(null);
            }}
            className={`py-2 px-3 rounded-xl font-bold font-['Fredoka',sans-serif] text-xs sm:text-sm transition flex items-center justify-center gap-1.5 ${
              tab === 'register'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <UserPlus className="w-4 h-4 text-emerald-500" />
            New Coder
          </button>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-4 bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold rounded-2xl p-3 flex items-start gap-2 animate-shake">
            <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {/* Tab 1: Returning Student Login */}
        {tab === 'login' && (
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 font-['Fredoka',sans-serif] mb-1">
                Username / Student Code:
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="e.g. leo or coder01"
                  className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 font-bold text-slate-900"
                />
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 font-['Fredoka',sans-serif] mb-1">
                4-Digit Secret PIN:
              </label>
              <div className="relative">
                <input
                  type="password"
                  inputMode="numeric"
                  maxLength={4}
                  required
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  placeholder="e.g. 1234"
                  className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 font-black tracking-widest text-slate-900"
                />
                <KeyRound className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-amber-500 hover:bg-amber-600 active:scale-95 text-white font-extrabold font-['Fredoka',sans-serif] text-base rounded-2xl shadow-md transition flex items-center justify-center gap-2 mt-2"
            >
              {isLoading ? (
                <span>Loading My Progress...</span>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Start Coding!</span>
                </>
              )}
            </button>
          </form>
        )}

        {/* Tab 2: New Student Registration */}
        {tab === 'register' && (
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 font-['Fredoka',sans-serif] mb-1">
                Your Full Name / Nickname:
              </label>
              <input
                type="text"
                required
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="e.g. Leo Smith"
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 font-bold text-slate-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 font-['Fredoka',sans-serif] mb-1">
                Choose a Short Username:
              </label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value.toLowerCase())}
                placeholder="e.g. leo or leo12"
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 font-bold text-slate-900 lowercase"
              />
              <span className="text-[10px] text-slate-400 font-semibold block mt-0.5">
                (You will use this short name to log in next time!)
              </span>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 font-['Fredoka',sans-serif] mb-1">
                Choose Your Avatar:
              </label>
              <div className="grid grid-cols-6 gap-2">
                {AVATARS.map((av) => (
                  <button
                    key={av}
                    type="button"
                    onClick={() => {
                      sounds.playPop();
                      setSelectedAvatar(av);
                    }}
                    className={`h-10 rounded-2xl text-xl flex items-center justify-center transition transform active:scale-90 ${
                      selectedAvatar === av
                        ? 'bg-amber-400 ring-2 ring-amber-600 scale-110 shadow-sm'
                        : 'bg-slate-100 hover:bg-slate-200'
                    }`}
                  >
                    {av}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 font-['Fredoka',sans-serif] mb-1">
                Set a 4-Digit Secret PIN:
              </label>
              <input
                type="password"
                inputMode="numeric"
                maxLength={4}
                required
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="4 digits e.g. 1234"
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 font-black tracking-widest text-slate-900"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-extrabold font-['Fredoka',sans-serif] text-base rounded-2xl shadow-md transition flex items-center justify-center gap-2 mt-2"
            >
              {isLoading ? (
                <span>Creating Coder Account...</span>
              ) : (
                <>
                  <Check className="w-5 h-5" />
                  <span>Join Coding Club!</span>
                </>
              )}
            </button>
          </form>
        )}

        {/* Parent & Guest Explore Card */}
        <div className="mt-5 pt-4 border-t border-slate-200">
          <div className="bg-sky-50 border-2 border-sky-200 rounded-2xl p-3 sm:p-3.5 flex items-center justify-between gap-3 text-left">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl shrink-0">👨‍👩‍👧</span>
              <div>
                <span className="font-bold text-xs font-['Fredoka',sans-serif] text-sky-950 block">
                  Parents & Club Visitors
                </span>
                <span className="text-[11px] text-sky-800 font-semibold block leading-tight">
                  Explore all 10 weeks of Scratch lessons & projects freely.
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={handleGuest}
              className="px-3.5 py-2 bg-sky-600 hover:bg-sky-700 active:scale-95 text-white font-bold font-['Fredoka',sans-serif] text-xs rounded-xl shadow-xs transition shrink-0 whitespace-nowrap"
            >
              Explore as Parent ➔
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
