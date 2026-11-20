import React, { useState, useEffect } from 'react';
import {
  studentAuthService,
  StudentRosterItem,
} from '../services/studentAuthService';
import {
  getStoredSupabaseConfig,
  setStoredSupabaseConfig,
  clearStoredSupabaseConfig,
  isCloudConfigured,
} from '../lib/supabaseClient';
import {
  CloudCheck,
  CloudOff,
  RefreshCw,
  KeyRound,
  Download,
  Search,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Save,
  Trash2,
} from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface TeacherClassRosterProps {
  appId: string;
  totalSteps?: number;
}

export const TeacherClassRoster: React.FC<TeacherClassRosterProps> = ({
  appId,
  totalSteps = 50,
}) => {
  const [roster, setRoster] = useState<StudentRosterItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Supabase Config State
  const [cloudActive, setCloudActive] = useState(isCloudConfigured());
  const [showConfig, setShowConfig] = useState(!isCloudConfigured());
  const [supabaseUrl, setSupabaseUrl] = useState('');
  const [supabaseAnonKey, setSupabaseAnonKey] = useState('');
  const [configMessage, setConfigMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  // PIN Reset Modal State
  const [selectedStudentForPin, setSelectedStudentForPin] = useState<StudentRosterItem | null>(null);
  const [newPin, setNewPin] = useState('');
  const [pinMessage, setPinMessage] = useState<string | null>(null);

  useEffect(() => {
    const cfg = getStoredSupabaseConfig();
    if (cfg) {
      setSupabaseUrl(cfg.url);
      setSupabaseAnonKey(cfg.anonKey);
    }
    loadRoster();
  }, [appId]);

  const loadRoster = async () => {
    setLoading(true);
    try {
      const items = await studentAuthService.getClassRoster(appId, totalSteps);
      setRoster(items);
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  };

  const handleSaveConfig = (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabaseUrl.trim() || !supabaseAnonKey.trim()) {
      setConfigMessage({ text: 'Please fill both the Supabase URL and Anon Key!', type: 'error' });
      return;
    }

    try {
      setStoredSupabaseConfig(supabaseUrl.trim(), supabaseAnonKey.trim());
      setCloudActive(true);
      setConfigMessage({ text: 'Cloud credentials saved successfully!', type: 'success' });
      sounds.playSuccess();
      loadRoster();
    } catch {
      setConfigMessage({ text: 'Failed to save configuration.', type: 'error' });
    }
  };

  const handleDisconnectCloud = () => {
    clearStoredSupabaseConfig();
    setCloudActive(false);
    setSupabaseUrl('');
    setSupabaseAnonKey('');
    setConfigMessage({ text: 'Cloud disconnected. Now using Local Computer storage.', type: 'success' });
    sounds.playPop();
    loadRoster();
  };

  const handleResetPin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedStudentForPin) return;

    if (newPin.trim().length !== 4) {
      setPinMessage('PIN must be exactly 4 digits!');
      return;
    }

    const ok = await studentAuthService.resetStudentPin(selectedStudentForPin.id, newPin.trim());
    if (ok) {
      sounds.playSuccess();
      setPinMessage(`PIN successfully updated to "${newPin.trim()}"!`);
      setTimeout(() => {
        setSelectedStudentForPin(null);
        setNewPin('');
        setPinMessage(null);
      }, 1500);
    } else {
      setPinMessage('Failed to reset PIN.');
    }
  };

  const exportRosterCsv = () => {
    sounds.playPop();
    if (roster.length === 0) return;

    const headers = ['Username', 'Display Name', 'Avatar', 'Current Week', 'Completed Steps', 'Total Steps', 'Percent Completed', 'Last Active'];
    const rows = roster.map(s => [
      `"${s.username}"`,
      `"${s.displayName}"`,
      `"${s.avatar}"`,
      s.currentWeek,
      s.completedStepsCount,
      s.totalStepsCount,
      `${s.percentCompleted}%`,
      `"${new Date(s.lastLogin).toLocaleString()}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `coding_club_roster_${appId}_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredRoster = roster.filter(s =>
    s.displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Cloud DB Connection Status Card */}
      <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-700 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${cloudActive ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}>
              {cloudActive ? <CloudCheck className="w-6 h-6" /> : <CloudOff className="w-6 h-6" />}
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider font-bold text-slate-400 font-['Fredoka',sans-serif]">
                Database Sync Status
              </div>
              <div className="text-base font-extrabold flex items-center gap-2 font-['Fredoka',sans-serif]">
                {cloudActive ? (
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    Supabase Cloud Connected
                  </span>
                ) : (
                  <span className="text-amber-300">Local Computer Storage (Single Device)</span>
                )}
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              sounds.playPop();
              setShowConfig(!showConfig);
            }}
            className="text-xs font-bold font-['Fredoka',sans-serif] px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition shrink-0"
          >
            {showConfig ? 'Hide Cloud Config' : 'Configure Cloud DB'}
          </button>
        </div>

        {/* Supabase Config Drawer Form */}
        {showConfig && (
          <form onSubmit={handleSaveConfig} className="mt-4 pt-2 space-y-3 animate-fadeIn text-xs">
            <p className="text-slate-300 leading-relaxed font-medium">
              Connect to your free <strong className="text-emerald-400">Supabase</strong> cloud project to allow all student computers in your classroom to log in and sync in parallel!
            </p>

            <div>
              <label className="block text-slate-400 font-bold mb-1 font-['Fredoka',sans-serif]">
                Project URL (e.g. https://xyzcompany.supabase.co)
              </label>
              <input
                type="url"
                value={supabaseUrl}
                onChange={e => setSupabaseUrl(e.target.value)}
                placeholder="https://your-project.supabase.co"
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono text-xs"
              />
            </div>

            <div>
              <label className="block text-slate-400 font-bold mb-1 font-['Fredoka',sans-serif]">
                Public Anon Key (Project Settings → API → Project API Keys)
              </label>
              <input
                type="password"
                value={supabaseAnonKey}
                onChange={e => setSupabaseAnonKey(e.target.value)}
                placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono text-xs"
              />
            </div>

            {configMessage && (
              <div className={`p-2.5 rounded-xl font-medium flex items-center gap-2 ${configMessage.type === 'success' ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-rose-950 text-rose-300 border border-rose-800'}`}>
                {configMessage.type === 'success' ? <CheckCircle2 className="w-4 h-4 shrink-0" /> : <AlertCircle className="w-4 h-4 shrink-0" />}
                <span>{configMessage.text}</span>
              </div>
            )}

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <button
                type="submit"
                className="flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold font-['Fredoka',sans-serif] rounded-xl transition shadow-xs"
              >
                <Save className="w-4 h-4" />
                <span>Save Cloud Connection</span>
              </button>

              {cloudActive && (
                <button
                  type="button"
                  onClick={handleDisconnectCloud}
                  className="flex items-center gap-1.5 px-3 py-2 bg-rose-900/60 hover:bg-rose-800 text-rose-200 font-bold font-['Fredoka',sans-serif] rounded-xl transition"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Disconnect Cloud</span>
                </button>
              )}
            </div>

            <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700 text-slate-400 mt-2 flex items-start gap-2">
              <HelpCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <span className="text-slate-200 font-bold">First time setup:</span> Run the SQL script from <code className="text-amber-300">supabase_schema.sql</code> in your Supabase SQL Editor once. It creates the <code className="text-amber-300">students</code> and <code className="text-amber-300">curriculum_progress</code> tables with parallel-access safety.
              </div>
            </div>
          </form>
        )}
      </div>

      {/* Roster Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search coders by name or username..."
            className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium text-slate-800"
          />
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              sounds.playPop();
              loadRoster();
            }}
            disabled={loading}
            className="flex items-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold font-['Fredoka',sans-serif] text-xs rounded-xl transition"
            title="Refresh Roster"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>

          <button
            onClick={exportRosterCsv}
            disabled={roster.length === 0}
            className="flex items-center gap-1.5 px-3 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold font-['Fredoka',sans-serif] text-xs rounded-xl transition disabled:opacity-50"
            title="Download CSV report"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* Roster Count Summary */}
      <div className="flex items-center justify-between text-xs text-slate-500 font-bold font-['Fredoka',sans-serif]">
        <span>Total Registered Coders: {roster.length}</span>
        {searchQuery && <span>Matching Filter: {filteredRoster.length}</span>}
      </div>

      {/* Roster Table / List */}
      <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-xs">
        {loading && roster.length === 0 ? (
          <div className="p-8 text-center text-xs text-slate-400 font-bold font-['Fredoka',sans-serif]">
            Loading class progress data...
          </div>
        ) : filteredRoster.length === 0 ? (
          <div className="p-8 text-center text-xs text-slate-500 font-['Fredoka',sans-serif]">
            {searchQuery ? (
              'No coders found matching your search.'
            ) : !cloudActive ? (
              <div className="space-y-2 max-w-md mx-auto text-left bg-amber-50 p-4 rounded-xl border border-amber-200">
                <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
                  <span>⚠️</span>
                  <span>Currently in Single-Device (Local) Mode</span>
                </div>
                <p className="text-slate-700 font-normal leading-relaxed">
                  Students created on other computers or in other browser windows are not visible here because <strong>Supabase Cloud Database</strong> is not connected yet.
                </p>
                <p className="text-slate-600 font-normal leading-relaxed">
                  To sync students across <strong>all classroom computers, Chromebooks, and home devices</strong>, connect your free Supabase database in the box above!
                </p>
              </div>
            ) : (
              'No students have logged in yet! Have students click "Coder Login" to get started.'
            )}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-['Fredoka',sans-serif]">
                <tr>
                  <th className="py-3 px-3">Coder</th>
                  <th className="py-3 px-3">Code</th>
                  <th className="py-3 px-3 text-center">Week</th>
                  <th className="py-3 px-3">Progress</th>
                  <th className="py-3 px-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {filteredRoster.map(student => (
                  <tr key={student.id} className="hover:bg-slate-50/80 transition">
                    <td className="py-2.5 px-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{student.avatar}</span>
                        <div>
                          <div className="font-bold text-slate-900 font-['Fredoka',sans-serif]">
                            {student.displayName}
                          </div>
                          <div className="text-[10px] text-slate-400">
                            Active {new Date(student.lastLogin).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-2.5 px-3 font-mono text-[11px] text-slate-500">
                      @{student.username}
                    </td>
                    <td className="py-2.5 px-3 text-center">
                      <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold font-['Fredoka',sans-serif] text-[11px]">
                        W{student.currentWeek}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 min-w-[140px]">
                      <div className="flex items-center justify-between text-[10px] font-bold text-slate-600 mb-1">
                        <span>{student.completedStepsCount} / {student.totalStepsCount} steps</span>
                        <span>{student.percentCompleted}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                          style={{ width: `${student.percentCompleted}%` }}
                        />
                      </div>
                    </td>
                    <td className="py-2.5 px-3 text-right">
                      <button
                        onClick={() => {
                          sounds.playPop();
                          setSelectedStudentForPin(student);
                          setNewPin('');
                          setPinMessage(null);
                        }}
                        className="px-2.5 py-1 text-[11px] font-bold font-['Fredoka',sans-serif] bg-slate-100 hover:bg-amber-100 text-slate-700 hover:text-amber-800 rounded-lg transition inline-flex items-center gap-1"
                        title="Reset Student 4-digit PIN"
                      >
                        <KeyRound className="w-3 h-3 text-amber-600" />
                        <span>Reset PIN</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Teacher PIN Reset Dialog Modal */}
      {selectedStudentForPin && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border-2 border-amber-300 animate-fadeIn font-['Fredoka',sans-serif]">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{selectedStudentForPin.avatar}</span>
              <div>
                <h3 className="font-bold text-slate-900 text-base">
                  Reset PIN for {selectedStudentForPin.displayName}
                </h3>
                <div className="text-xs text-slate-500">Username: @{selectedStudentForPin.username}</div>
              </div>
            </div>

            <form onSubmit={handleResetPin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Enter New 4-Digit PIN:
                </label>
                <input
                  type="text"
                  pattern="[0-9]*"
                  maxLength={4}
                  value={newPin}
                  onChange={e => setNewPin(e.target.value.replace(/[^0-9]/g, ''))}
                  placeholder="e.g. 1234"
                  autoFocus
                  className="w-full text-center tracking-widest text-xl font-bold py-2 bg-slate-50 border-2 border-slate-300 rounded-xl focus:outline-none focus:border-amber-500"
                />
              </div>

              {pinMessage && (
                <div className="text-xs text-center font-bold text-amber-700 bg-amber-50 p-2 rounded-xl">
                  {pinMessage}
                </div>
              )}

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedStudentForPin(null)}
                  className="flex-1 py-2 text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={newPin.length !== 4}
                  className="flex-1 py-2 text-xs font-bold text-white bg-amber-500 hover:bg-amber-600 rounded-xl transition shadow-xs disabled:opacity-50"
                >
                  Save PIN
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
