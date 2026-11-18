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
            🐻
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

        {/* Tab Switcher: Login vs Register */}
        <div className="flex bg-slate-100 p-1.5 rounded-2xl mb-6 font-['Fredoka',sans-serif]">
          <button
            type="button"
            onClick={() => {
              sounds.playPop();
              setTab('login');
              setError(null);
            }}
            className={`flex-1 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition ${
              tab === 'login'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <User className="w-4 h-4 text-amber-600" />
            <span>Returning Coder</span>
          </button>

          <button
            type="button"
            onClick={() => {
              sounds.playPop();
              setTab('register');
              setError(null);
            }}
            className={`flex-1 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition ${
              tab === 'register'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <UserPlus className="w-4 h-4 text-emerald-600" />
            <span>I'm New Here!</span>
          </button>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-rose-50 border-2 border-rose-200 rounded-2xl text-rose-800 text-xs font-bold flex items-center gap-2 animate-shake">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
            <span>{error}</span>
          </div>
        )}

        {/* Login Form */}
        {tab === 'login' ? (
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 font-['Fredoka',sans-serif]">
                Student Username / Code
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="e.g. maya7 or coder1"
                autoCapitalize="none"
                autoCorrect="off"
                className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 focus:border-amber-400 rounded-2xl text-sm font-bold text-slate-800 focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 font-['Fredoka',sans-serif]">
                4-Digit Secret PIN
              </label>
              <div className="relative">
                <input
                  type="password"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={4}
                  value={pin}
                  onChange={(e) => setPin(e.target.value.replace(/[^0-9]/g, ''))}
                  placeholder="••••"
                  className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 focus:border-amber-400 rounded-2xl text-center text-xl font-mono tracking-widest text-slate-800 focus:outline-none transition"
                />
                <KeyRound className="w-4 h-4 text-slate-400 absolute right-4 top-3.5" />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-extrabold font-['Fredoka',sans-serif] text-base rounded-2xl shadow-md shadow-amber-500/30 transition transform active:scale-98 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              <span>{isLoading ? 'Checking...' : "Let's Code!"}</span>
            </button>
          </form>
        ) : (
          /* Register Form */
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 font-['Fredoka',sans-serif]">
                Choose an Avatar
              </label>
              <div className="grid grid-cols-6 gap-2 p-2 bg-slate-50 rounded-2xl border-2 border-slate-200">
                {AVATARS.map((av) => (
                  <button
                    key={av}
                    type="button"
                    onClick={() => {
                      sounds.playPop();
                      setSelectedAvatar(av);
                    }}
                    className={`text-2xl p-2 rounded-xl transition ${
                      selectedAvatar === av
                        ? 'bg-amber-300 scale-110 shadow-xs'
                        : 'hover:bg-slate-200/60'
                    }`}
                  >
                    {av}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 font-['Fredoka',sans-serif]">
                Your Name
              </label>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="e.g. Maya Patel"
                className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 focus:border-emerald-400 rounded-2xl text-sm font-bold text-slate-800 focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 font-['Fredoka',sans-serif]">
                Choose a Student Username / Code
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value.toLowerCase().replace(/[^a-z0-9_-]/g, ''))}
                placeholder="e.g. maya12"
                autoCapitalize="none"
                className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 focus:border-emerald-400 rounded-2xl text-sm font-bold text-slate-800 focus:outline-none transition font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 font-['Fredoka',sans-serif]">
                Create a 4-Digit Secret PIN
              </label>
              <input
                type="password"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={4}
                value={pin}
                onChange={(e) => setPin(e.target.value.replace(/[^0-9]/g, ''))}
                placeholder="e.g. 1234"
                className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-200 focus:border-emerald-400 rounded-2xl text-center text-lg font-mono tracking-widest text-slate-800 focus:outline-none transition"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold font-['Fredoka',sans-serif] text-base rounded-2xl shadow-md shadow-emerald-500/30 transition transform active:scale-98 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <Check className="w-5 h-5" />
              <span>{isLoading ? 'Creating Profile...' : 'Save & Start Coding'}</span>
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
                  Explore all 10 weeks of lessons, simulators & projects freely.
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
