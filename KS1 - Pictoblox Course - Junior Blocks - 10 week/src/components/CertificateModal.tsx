import React, { useEffect } from 'react';
import { X, Printer, Award, Sparkles, ArrowLeft } from 'lucide-react';
import confetti from 'canvas-confetti';
import { jrSounds } from '../utils/soundEffects';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  studentName: string;
  onUpdateStudentName: (name: string) => void;
  schoolName: string;
  totalCompleted: number;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  studentName,
  onUpdateStudentName,
  schoolName,
  totalCompleted,
}) => {
  // Listen for Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        jrSounds.playPop();
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const triggerConfetti = () => {
    jrSounds.playWeekComplete();
    confetti({
      particleCount: 130,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  const handlePrint = () => {
    triggerConfetti();
    setTimeout(() => {
      window.print();
    }, 300);
  };

  const currentDate = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          jrSounds.playPop();
          onClose();
        }
      }}
      className="certificate-modal-overlay fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
    >
      <div className="certificate-modal-card bg-white rounded-3xl max-w-3xl w-full p-6 shadow-2xl relative my-8 animate-fadeIn border-4 border-amber-300">
        {/* Modal Controls (Hidden in print) */}
        <div className="no-print flex items-center justify-between pb-4 mb-4 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Award className="w-6 h-6 text-amber-500" />
            <h2 className="text-xl font-bold font-['Fredoka',sans-serif] text-slate-800">
              Coding Master — Junior Blocks Certificate
            </h2>
          </div>
          <button
            onClick={() => {
              jrSounds.playPop();
              onClose();
            }}
            className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold font-['Fredoka',sans-serif] text-xs sm:text-sm rounded-xl transition flex items-center gap-1.5 shadow-xs active:scale-95"
            title="Close Certificate and return to curriculum"
          >
            <X className="w-4 h-4" />
            <span>Close</span>
          </button>
        </div>

        {/* Inputs (Hidden in print) */}
        <div className="no-print bg-amber-50 p-4 rounded-2xl border border-amber-200 mb-6 flex flex-col sm:flex-row gap-4 items-center">
          <div className="flex-1 w-full">
            <label className="block text-xs font-bold text-amber-950 font-['Fredoka',sans-serif] mb-1">
              Student Full Name:
            </label>
            <input
              type="text"
              value={studentName}
              onChange={(e) => onUpdateStudentName(e.target.value)}
              placeholder="e.g. Mia Taylor"
              className="w-full px-3 py-2 text-sm bg-white border border-amber-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 font-bold text-slate-800"
            />
          </div>

          <button
            onClick={handlePrint}
            className="w-full sm:w-auto px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold font-['Fredoka',sans-serif] rounded-xl flex items-center justify-center gap-2 shadow-md transition transform active:scale-95"
          >
            <Printer className="w-4 h-4" />
            Print Certificate
          </button>
        </div>

        {/* PRINTABLE CERTIFICATE CARD */}
        <div
          id="printable-certificate"
          className="bg-gradient-to-br from-amber-50 via-white to-orange-50 border-8 border-double border-amber-400 p-8 rounded-3xl text-center relative overflow-hidden shadow-inner"
        >
          {/* Decorative Corner Ornaments */}
          <div className="absolute top-3 left-4 text-3xl text-amber-400 opacity-60">✨</div>
          <div className="absolute top-3 right-4 text-3xl text-amber-400 opacity-60">✨</div>
          <div className="absolute bottom-3 left-4 text-3xl text-amber-400 opacity-60">✨</div>
          <div className="absolute bottom-3 right-4 text-3xl text-amber-400 opacity-60">✨</div>

          {/* School Banner */}
          <div className="text-sm font-bold uppercase tracking-widest text-amber-800 font-['Fredoka',sans-serif] mb-1">
            {schoolName || 'Primary School Coding Club'}
          </div>

          <div className="inline-block bg-amber-100 text-amber-900 border border-amber-300 px-4 py-1 rounded-full text-xs font-bold font-['Fredoka',sans-serif] mb-3">
            🌟 Coding Master Course &bull; KS1 Junior Blocks 🌟
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Fredoka',sans-serif] tracking-tight mb-1">
            Certificate of Achievement
          </h1>

          <div className="text-xs sm:text-sm font-bold text-indigo-700 font-['Fredoka',sans-serif] mb-4">
            Curriculum Created by Shazia Alam
          </div>

          <p className="text-sm text-slate-600 italic mb-1 font-medium">
            This certificate is proudly awarded to:
          </p>

          {/* Student Name */}
          <div className="cert-student-name text-3xl sm:text-4xl font-black text-amber-600 font-['Fredoka',sans-serif] border-b-2 border-amber-300 pb-2 mb-3 max-w-md mx-auto">
            {studentName || 'Young Coding Master'}
          </div>

          <div className="text-xs font-bold text-emerald-800 bg-emerald-100 border border-emerald-300 py-1 px-3 rounded-full inline-block mb-3">
            🏆 Completed {totalCompleted} Junior Block Quests
          </div>

          <p className="cert-description text-xs sm:text-sm text-slate-700 max-w-lg mx-auto leading-relaxed mb-6 font-medium">
            For outstanding enthusiasm, creative problem-solving, and excellence in completing the 
            <strong> 10-Week Key Stage 1 PictoBlox Junior Blocks Course</strong>. Having mastered algorithms, 
            movement arrows, hopping, loops, sound effects, character bumping, and building an original animated movie!
          </p>

          {/* 10 Badge Showcase */}
          <div className="cert-badges flex flex-wrap justify-center gap-2 mb-8 max-w-md mx-auto">
            {['🚩', '👆', '🐾', '🌳', '🦘', '🙈', '🔄', '💥', '🐇', '👑'].map((icon, i) => (
              <span
                key={i}
                className="w-8 h-8 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-sm shadow-xs"
                title={`Week ${i + 1} Badge`}
              >
                {icon}
              </span>
            ))}
          </div>

          {/* Signatures & Date */}
          <div className="cert-signatures grid grid-cols-2 gap-8 max-w-md mx-auto text-xs border-t border-slate-200 pt-4 text-slate-600">
            <div>
              <div className="font-bold text-slate-800 font-['Fredoka',sans-serif] text-sm">
                {currentDate}
              </div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Date Awarded</span>
            </div>
            <div>
              <div className="font-bold text-slate-800 font-['Fredoka',sans-serif] text-sm italic">
                Shazia Alam
              </div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Curriculum Creator</span>
            </div>
          </div>
        </div>

        {/* Footer Action Buttons */}
        <div className="no-print mt-6 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => {
              jrSounds.playPop();
              onClose();
            }}
            className="w-full sm:w-auto px-6 py-2.5 bg-slate-800 hover:bg-slate-900 text-white font-bold font-['Fredoka',sans-serif] text-sm rounded-xl flex items-center justify-center gap-2 shadow-md transition transform active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Curriculum</span>
          </button>

          <button
            onClick={triggerConfetti}
            className="w-full sm:w-auto px-4 py-2 bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold font-['Fredoka',sans-serif] text-xs sm:text-sm rounded-xl flex items-center justify-center gap-1.5 transition"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Celebrate with Confetti!</span>
          </button>
        </div>
      </div>
    </div>
  );
};
