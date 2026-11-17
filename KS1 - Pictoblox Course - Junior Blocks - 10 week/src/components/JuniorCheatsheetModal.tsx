import React from 'react';
import { X } from 'lucide-react';
import { jrSounds } from '../utils/soundEffects';

interface CheatsheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JuniorCheatsheetModal: React.FC<CheatsheetProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl border-4 border-amber-300 relative my-8 animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={() => {
            jrSounds.playPop();
            onClose();
          }}
          className="absolute top-5 right-5 p-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-amber-400 rounded-2xl flex items-center justify-center text-3xl shadow-sm">
            🐻
          </div>
          <div>
            <h2 className="text-2xl font-bold font-['Fredoka',sans-serif] text-slate-800">
              Junior Blocks Decoder
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold">
              The visual guide to all Junior Block categories!
            </p>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm">
          {/* Yellow Triggers */}
          <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-3.5">
            <div className="font-bold text-amber-950 font-['Fredoka',sans-serif] text-sm mb-1.5 flex items-center gap-1.5">
              <span className="text-base">🟨</span> Yellow Trigger Blocks (How It Starts)
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="bg-white p-2 rounded-xl border border-amber-200">
                <span className="text-xl block">🚩</span>
                <span className="font-bold text-slate-800 block mt-0.5">Green Flag</span>
                <span className="text-[10px] text-slate-500">Tap flag to go</span>
              </div>
              <div className="bg-white p-2 rounded-xl border border-amber-200">
                <span className="text-xl block">👆</span>
                <span className="font-bold text-slate-800 block mt-0.5">Tap</span>
                <span className="text-[10px] text-slate-500">Tap on Tobi</span>
              </div>
              <div className="bg-white p-2 rounded-xl border border-amber-200">
                <span className="text-xl block">💥</span>
                <span className="font-bold text-slate-800 block mt-0.5">Bump</span>
                <span className="text-[10px] text-slate-500">Touch another sprite</span>
              </div>
            </div>
          </div>

          {/* Blue Motion */}
          <div className="bg-sky-50 border-2 border-sky-300 rounded-2xl p-3.5">
            <div className="font-bold text-sky-950 font-['Fredoka',sans-serif] text-sm mb-1.5 flex items-center gap-1.5">
              <span className="text-base">🟦</span> Blue Motion Blocks (Where It Goes)
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-center text-xs">
              <div className="bg-white p-1.5 rounded-xl border border-sky-200">
                <span className="text-lg block">➡️</span>
                <span className="font-bold text-slate-800 block text-[10px]">Move Right</span>
              </div>
              <div className="bg-white p-1.5 rounded-xl border border-sky-200">
                <span className="text-lg block">⬅️</span>
                <span className="font-bold text-slate-800 block text-[10px]">Move Left</span>
              </div>
              <div className="bg-white p-1.5 rounded-xl border border-sky-200">
                <span className="text-lg block">⬆️</span>
                <span className="font-bold text-slate-800 block text-[10px]">Move Up</span>
              </div>
              <div className="bg-white p-1.5 rounded-xl border border-sky-200">
                <span className="text-lg block">⬇️</span>
                <span className="font-bold text-slate-800 block text-[10px]">Move Down</span>
              </div>
              <div className="bg-white p-1.5 rounded-xl border border-sky-200">
                <span className="text-lg block">🦘</span>
                <span className="font-bold text-slate-800 block text-[10px]">Hop Jump</span>
              </div>
              <div className="bg-white p-1.5 rounded-xl border border-sky-200">
                <span className="text-lg block">↷</span>
                <span className="font-bold text-slate-800 block text-[10px]">Turn Spin</span>
              </div>
            </div>
          </div>

          {/* Purple Looks */}
          <div className="bg-purple-50 border-2 border-purple-300 rounded-2xl p-3.5">
            <div className="font-bold text-purple-950 font-['Fredoka',sans-serif] text-sm mb-1.5 flex items-center gap-1.5">
              <span className="text-base">🟪</span> Purple Looks Blocks (How It Looks)
            </div>
            <div className="grid grid-cols-4 gap-2 text-center text-xs">
              <div className="bg-white p-2 rounded-xl border border-purple-200">
                <span className="text-lg block">➕</span>
                <span className="font-bold text-slate-800 block text-[11px]">Grow</span>
              </div>
              <div className="bg-white p-2 rounded-xl border border-purple-200">
                <span className="text-lg block">➖</span>
                <span className="font-bold text-slate-800 block text-[11px]">Shrink</span>
              </div>
              <div className="bg-white p-2 rounded-xl border border-purple-200">
                <span className="text-lg block">🙈</span>
                <span className="font-bold text-slate-800 block text-[11px]">Hide</span>
              </div>
              <div className="bg-white p-2 rounded-xl border border-purple-200">
                <span className="text-lg block">💬</span>
                <span className="font-bold text-slate-800 block text-[11px]">Say</span>
              </div>
            </div>
          </div>

          {/* Orange Control & Red End */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-orange-50 border-2 border-orange-300 rounded-2xl p-3">
              <div className="font-bold text-orange-950 font-['Fredoka',sans-serif] text-xs mb-1">
                🟧 Orange Control Blocks
              </div>
              <div className="text-xs text-slate-700 space-y-1 font-medium">
                <div>⏱️ <strong>Wait:</strong> Pauses for seconds</div>
                <div>🐇 <strong>Speed:</strong> Snail or Rabbit</div>
                <div>🔁 <strong>Repeat:</strong> Does action N times</div>
              </div>
            </div>

            <div className="bg-rose-50 border-2 border-rose-300 rounded-2xl p-3">
              <div className="font-bold text-rose-950 font-['Fredoka',sans-serif] text-xs mb-1">
                🟥 Red End Blocks
              </div>
              <div className="text-xs text-slate-700 space-y-1 font-medium">
                <div>🛑 <strong>End:</strong> Finishes the sequence</div>
                <div>♾️ <strong>Forever:</strong> Loops endlessly</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <button
            onClick={() => {
              jrSounds.playPop();
              onClose();
            }}
            className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold font-['Fredoka',sans-serif] text-sm sm:text-base rounded-2xl shadow-sm transition active:scale-95"
          >
            Got it, let's play! 🐻🚀
          </button>
        </div>
      </div>
    </div>
  );
};
