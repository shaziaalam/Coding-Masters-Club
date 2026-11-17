import React from 'react';
import { X, Compass, Grid, Sparkles } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface ScratchCheatsheetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScratchCheatsheetModal: React.FC<ScratchCheatsheetModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl border-4 border-amber-300 relative my-8 animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={() => {
            sounds.playPop();
            onClose();
          }}
          className="absolute top-5 right-5 p-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-amber-400 rounded-2xl flex items-center justify-center text-2xl shadow-sm">
            🗺️
          </div>
          <div>
            <h2 className="text-2xl font-bold font-['Fredoka',sans-serif] text-slate-800">
              Scratch Secret Cheatsheet
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              Quick coordinate map and angle guide for young coders!
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {/* X & Y Coordinate Grid Visualizer */}
          <div className="bg-sky-50 border-2 border-sky-200 rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-2 text-sky-900 font-bold font-['Fredoka',sans-serif] text-sm">
              <Grid className="w-4 h-4 text-sky-600" />
              Scratch Stage Coordinates (The 2D Map)
            </div>

            <div className="relative bg-white rounded-xl border border-sky-300 h-48 flex items-center justify-center overflow-hidden">
              {/* Axes lines */}
              <div className="absolute w-full h-0.5 bg-sky-200" />
              <div className="absolute h-full w-0.5 bg-sky-200" />

              {/* Center (0, 0) */}
              <div className="absolute w-3 h-3 bg-amber-500 rounded-full border-2 border-white shadow-sm" />
              <span className="absolute text-[11px] font-bold text-slate-700 bg-white/90 px-1.5 py-0.5 rounded shadow-sm top-[52%] left-[52%]">
                Center (x: 0, y: 0)
              </span>

              {/* Top Y */}
              <span className="absolute top-2 text-[11px] font-bold text-sky-800 bg-sky-100 px-2 py-0.5 rounded">
                Top: y = 180
              </span>
              {/* Bottom Y */}
              <span className="absolute bottom-2 text-[11px] font-bold text-sky-800 bg-sky-100 px-2 py-0.5 rounded">
                Bottom: y = -180
              </span>
              {/* Left X */}
              <span className="absolute left-2 text-[11px] font-bold text-indigo-800 bg-indigo-100 px-2 py-0.5 rounded">
                Far Left: x = -240
              </span>
              {/* Right X */}
              <span className="absolute right-2 text-[11px] font-bold text-indigo-800 bg-indigo-100 px-2 py-0.5 rounded">
                Far Right: x = 240
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-3 text-xs">
              <div className="bg-white p-2 rounded-lg border border-sky-100 font-medium text-slate-700">
                👉 <strong>Change X:</strong> Positive numbers move <strong>RIGHT</strong>, negative numbers move <strong>LEFT</strong>.
              </div>
              <div className="bg-white p-2 rounded-lg border border-sky-100 font-medium text-slate-700">
                👆 <strong>Change Y:</strong> Positive numbers move <strong>UP</strong>, negative numbers move <strong>DOWN</strong>.
              </div>
            </div>
          </div>

          {/* Compass Angles */}
          <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-2 text-amber-900 font-bold font-['Fredoka',sans-serif] text-sm">
              <Compass className="w-4 h-4 text-amber-600" />
              Direction Angles (Point in Direction)
            </div>

            <div className="grid grid-cols-4 gap-2 text-center text-xs">
              <div className="bg-white p-2.5 rounded-xl border border-amber-100">
                <span className="text-lg block">⬆️</span>
                <span className="font-bold text-slate-800 block mt-1">0°</span>
                <span className="text-[10px] text-slate-500 font-medium">Pointing UP</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-amber-100">
                <span className="text-lg block">➡️</span>
                <span className="font-bold text-slate-800 block mt-1">90°</span>
                <span className="text-[10px] text-slate-500 font-medium">Pointing RIGHT</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-amber-100">
                <span className="text-lg block">⬇️</span>
                <span className="font-bold text-slate-800 block mt-1">180°</span>
                <span className="text-[10px] text-slate-500 font-medium">Pointing DOWN</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-amber-100">
                <span className="text-lg block">⬅️</span>
                <span className="font-bold text-slate-800 block mt-1">-90°</span>
                <span className="text-[10px] text-slate-500 font-medium">Pointing LEFT</span>
              </div>
            </div>
          </div>

          {/* Block Categories Guide */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-3 text-slate-800 font-bold font-['Fredoka',sans-serif] text-sm">
              <Sparkles className="w-4 h-4 text-amber-500" />
              Scratch Color Palette Decoder
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-['Fredoka',sans-serif] font-bold">
              <div className="p-2 rounded-xl text-white bg-[#4C97FF] shadow-sm text-center">Motion (Blue)</div>
              <div className="p-2 rounded-xl text-white bg-[#9966FF] shadow-sm text-center">Looks (Purple)</div>
              <div className="p-2 rounded-xl text-white bg-[#CF63CF] shadow-sm text-center">Sound (Magenta)</div>
              <div className="p-2 rounded-xl text-white bg-[#FFBF00] shadow-sm text-center">Events (Yellow)</div>
              <div className="p-2 rounded-xl text-white bg-[#FFAB19] shadow-sm text-center">Control (Amber)</div>
              <div className="p-2 rounded-xl text-white bg-[#5CB1D6] shadow-sm text-center">Sensing (Cyan)</div>
              <div className="p-2 rounded-xl text-white bg-[#59C059] shadow-sm text-center">Operators (Green)</div>
              <div className="p-2 rounded-xl text-white bg-[#FF8C1A] shadow-sm text-center">Variables (Orange)</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <button
            onClick={() => {
              sounds.playPop();
              onClose();
            }}
            className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold font-['Fredoka',sans-serif] text-sm rounded-2xl shadow-sm transition active:scale-95"
          >
            Got it, let's code! 🚀
          </button>
        </div>
      </div>
    </div>
  );
};
