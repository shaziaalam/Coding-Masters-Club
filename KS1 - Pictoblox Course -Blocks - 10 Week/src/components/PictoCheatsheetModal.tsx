import React from 'react';
import { X, Flag, Square, Sparkles } from 'lucide-react';
import { kidSounds } from '../utils/soundEffects';

interface CheatsheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PictoCheatsheetModal: React.FC<CheatsheetProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl border-4 border-amber-300 relative my-8 animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={() => {
            kidSounds.playPop();
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
              Tobi's Secret Helper Guide
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold">
              Everything you need to know to be a Coding Master!
            </p>
          </div>
        </div>

        <div className="space-y-5">
          {/* Green Flag & Stop Sign */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-3.5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
                <Flag className="w-5 h-5 fill-white" />
              </div>
              <div>
                <span className="font-bold text-emerald-900 font-['Fredoka',sans-serif] block text-sm">
                  Green Flag = GO!
                </span>
                <span className="text-xs text-emerald-800 font-medium">Starts all your recipes and games.</span>
              </div>
            </div>

            <div className="bg-rose-50 border-2 border-rose-200 rounded-2xl p-3.5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500 text-white flex items-center justify-center shrink-0">
                <Square className="w-5 h-5 fill-white" />
              </div>
              <div>
                <span className="font-bold text-rose-900 font-['Fredoka',sans-serif] block text-sm">
                  Red Button = STOP!
                </span>
                <span className="text-xs text-rose-800 font-medium">Freezes all actions and sounds.</span>
              </div>
            </div>
          </div>

          {/* Keyboard Arrow Directions */}
          <div className="bg-sky-50 border-2 border-sky-200 rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-2 text-sky-950 font-bold font-['Fredoka',sans-serif] text-sm">
              <span className="text-lg">⌨️</span>
              Keyboard Arrow Steerer
            </div>

            <div className="grid grid-cols-4 gap-2 text-center text-xs">
              <div className="bg-white p-2.5 rounded-xl border border-sky-100 shadow-xs">
                <span className="text-xl block">⬆️</span>
                <span className="font-bold text-slate-800 block mt-1">Up Arrow</span>
                <span className="text-[10px] text-sky-700 font-bold">JUMP HIGH</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-sky-100 shadow-xs">
                <span className="text-xl block">➡️</span>
                <span className="font-bold text-slate-800 block mt-1">Right Arrow</span>
                <span className="text-[10px] text-sky-700 font-bold">WALK RIGHT</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-sky-100 shadow-xs">
                <span className="text-xl block">⬇️</span>
                <span className="font-bold text-slate-800 block mt-1">Down Arrow</span>
                <span className="text-[10px] text-sky-700 font-bold">DUCK DOWN</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-sky-100 shadow-xs">
                <span className="text-xl block">⬅️</span>
                <span className="font-bold text-slate-800 block mt-1">Left Arrow</span>
                <span className="text-[10px] text-sky-700 font-bold">WALK LEFT</span>
              </div>
            </div>
          </div>

          {/* Block Color Decoder */}
          <div className="bg-amber-50/70 border-2 border-amber-200 rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-3 text-amber-950 font-bold font-['Fredoka',sans-serif] text-sm">
              <Sparkles className="w-4 h-4 text-amber-500" />
              PictoBlox Color Rainbow Decoder
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-['Fredoka',sans-serif] font-bold">
              <div className="p-2 rounded-xl text-white bg-[#FFBF00] shadow-xs text-center">Events (Yellow)</div>
              <div className="p-2 rounded-xl text-white bg-[#4C97FF] shadow-xs text-center">Motion (Blue)</div>
              <div className="p-2 rounded-xl text-white bg-[#9966FF] shadow-xs text-center">Looks (Purple)</div>
              <div className="p-2 rounded-xl text-white bg-[#CF63CF] shadow-xs text-center">Sound (Pink)</div>
              <div className="p-2 rounded-xl text-white bg-[#FFAB19] shadow-xs text-center">Control (Amber)</div>
              <div className="p-2 rounded-xl text-white bg-[#00BFFF] shadow-xs text-center">Speech (Cyan)</div>
              <div className="p-2 rounded-xl text-white bg-[#8A2BE2] shadow-xs text-center">AI Vision (Violet)</div>
              <div className="p-2 rounded-xl text-white bg-[#FF8C1A] shadow-xs text-center">Variables (Orange)</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <button
            onClick={() => {
              kidSounds.playPop();
              onClose();
            }}
            className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold font-['Fredoka',sans-serif] text-sm sm:text-base rounded-2xl shadow-sm transition active:scale-95"
          >
            Yay! Let's Code Tobi! 🐻🚀
          </button>
        </div>
      </div>
    </div>
  );
};
