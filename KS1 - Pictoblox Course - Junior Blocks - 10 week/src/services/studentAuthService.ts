import { getSupabase } from '../lib/supabaseClient';

export interface StudentProfile {
  id: string;
  username: string;
  displayName: string;
  avatar: string;
  pin: string;
  schoolName: string;
}

export interface ProgressData {
  completedSteps: Record<string, boolean>;
  completedChallenges: Record<number, boolean>;
  completedExtensions: Record<number, boolean>;
  currentWeek: number;
}

export interface StudentRosterItem {
  id: string;
  username: string;
  displayName: string;
  avatar: string;
  schoolName: string;
  currentWeek: number;
  percentCompleted: number;
  completedStepsCount: number;
  totalStepsCount: number;
  lastLogin: string;
}

const LOCAL_PROFILES_KEY = 'coding_club_local_profiles';
const ACTIVE_USER_KEY = 'coding_club_active_user';

// Helper for local profiles fallback
const getLocalProfiles = (): Record<string, StudentProfile & { progress: Record<string, ProgressData> }> => {
  try {
    const raw = localStorage.getItem(LOCAL_PROFILES_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
};

const saveLocalProfiles = (profiles: Record<string, StudentProfile & { progress: Record<string, ProgressData> }>) => {
  try {
    localStorage.setItem(LOCAL_PROFILES_KEY, JSON.stringify(profiles));
  } catch {
    // storage error
  }
};

export const getStoredActiveUser = (): StudentProfile | null => {
  try {
    const raw = localStorage.getItem(ACTIVE_USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

export const setStoredActiveUser = (user: StudentProfile | null) => {
  try {
    if (user) {
      localStorage.setItem(ACTIVE_USER_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(ACTIVE_USER_KEY);
    }
  } catch {
    // storage error
  }
};

export const studentAuthService = {
  // Login student with username & pin
  async loginStudent(username: string, pin: string, appId: string): Promise<{ success: boolean; user?: StudentProfile; progress?: ProgressData; error?: string }> {
    const cleanUsername = username.trim().toLowerCase();
    const cleanPin = pin.trim();
    const supabase = getSupabase();

    if (supabase) {
      try {
        const { data: student, error } = await supabase
          .from('students')
          .select('*')
          .eq('username', cleanUsername)
          .single();

        if (error || !student) {
          return { success: false, error: 'Student username not found. Ask your teacher or create a new coder profile!' };
        }

        if (student.pin !== cleanPin) {
          return { success: false, error: 'Incorrect 4-digit PIN! Try again or ask your teacher to reset it.' };
        }

        // Update last login
        await supabase
          .from('students')
          .update({ last_login: new Date().toISOString() })
          .eq('id', student.id);

        // Fetch progress for this specific app
        const { data: prog } = await supabase
          .from('curriculum_progress')
          .select('*')
          .eq('student_id', student.id)
          .eq('app_id', appId)
          .maybeSingle();

        const userProfile: StudentProfile = {
          id: student.id,
          username: student.username,
          displayName: student.display_name,
          avatar: student.avatar || '🐻',
          pin: student.pin,
          schoolName: student.school_name || 'Coding Club',
        };

        const progressData: ProgressData = prog ? {
          completedSteps: prog.completed_steps || {},
          completedChallenges: prog.completed_challenges || {},
          completedExtensions: prog.completed_extensions || {},
          currentWeek: prog.current_week || 1,
        } : {
          completedSteps: {},
          completedChallenges: {},
          completedExtensions: {},
          currentWeek: 1,
        };

        setStoredActiveUser(userProfile);
        return { success: true, user: userProfile, progress: progressData };
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : 'Cloud connection error';
        return { success: false, error: message };
      }
    }

    // Local Storage Fallback
    const localProfiles = getLocalProfiles();
    const matched = Object.values(localProfiles).find(p => p.username === cleanUsername);

    if (!matched) {
      return { success: false, error: 'Student username not found locally. Create a new profile!' };
    }

    if (matched.pin !== cleanPin) {
      return { success: false, error: 'Incorrect 4-digit PIN! Try again.' };
    }

    const userProfile: StudentProfile = {
      id: matched.id,
      username: matched.username,
      displayName: matched.displayName,
      avatar: matched.avatar,
      pin: matched.pin,
      schoolName: matched.schoolName,
    };

    const progressData = matched.progress?.[appId] || {
      completedSteps: {},
      completedChallenges: {},
      completedExtensions: {},
      currentWeek: 1,
    };

    setStoredActiveUser(userProfile);
    return { success: true, user: userProfile, progress: progressData };
  },

  // Register a new student
  async registerStudent(
    username: string,
    displayName: string,
    avatar: string,
    pin: string,
    schoolName: string,
    appId: string
  ): Promise<{ success: boolean; user?: StudentProfile; progress?: ProgressData; error?: string }> {
    const cleanUsername = username.trim().toLowerCase();
    const cleanDisplay = displayName.trim() || cleanUsername;
    const cleanPin = pin.trim() || '1234';
    const supabase = getSupabase();

    if (supabase) {
      try {
        // Check if username taken
        const { data: existing } = await supabase
          .from('students')
          .select('id')
          .eq('username', cleanUsername)
          .maybeSingle();

        if (existing) {
          return { success: false, error: 'This username is already taken! Choose a different one (e.g. add a number).' };
        }

        const { data: newStudent, error: insertError } = await supabase
          .from('students')
          .insert({
            username: cleanUsername,
            display_name: cleanDisplay,
            avatar,
            pin: cleanPin,
            school_name: schoolName,
          })
          .select()
          .single();

        if (insertError || !newStudent) {
          return { success: false, error: insertError?.message || 'Failed to create student in cloud.' };
        }

        // Initialize progress row
        await supabase
          .from('curriculum_progress')
          .insert({
            student_id: newStudent.id,
            app_id: appId,
            completed_steps: {},
            completed_challenges: {},
            completed_extensions: {},
            current_week: 1,
          });

        const userProfile: StudentProfile = {
          id: newStudent.id,
          username: newStudent.username,
          displayName: newStudent.display_name,
          avatar: newStudent.avatar,
          pin: newStudent.pin,
          schoolName: newStudent.school_name,
        };

        const progressData: ProgressData = {
          completedSteps: {},
          completedChallenges: {},
          completedExtensions: {},
          currentWeek: 1,
        };

        setStoredActiveUser(userProfile);
        return { success: true, user: userProfile, progress: progressData };
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : 'Cloud registration error';
        return { success: false, error: message };
      }
    }

    // Local Storage Fallback
    const localProfiles = getLocalProfiles();
    const existing = Object.values(localProfiles).find(p => p.username === cleanUsername);
    if (existing) {
      return { success: false, error: 'This username already exists on this computer!' };
    }

    const newId = 'local_' + Math.random().toString(36).substring(2, 9);
    const userProfile: StudentProfile = {
      id: newId,
      username: cleanUsername,
      displayName: cleanDisplay,
      avatar,
      pin: cleanPin,
      schoolName,
    };

    const progressData: ProgressData = {
      completedSteps: {},
      completedChallenges: {},
      completedExtensions: {},
      currentWeek: 1,
    };

    localProfiles[newId] = {
      ...userProfile,
      progress: {
        [appId]: progressData,
      },
    };

    saveLocalProfiles(localProfiles);
    setStoredActiveUser(userProfile);
    return { success: true, user: userProfile, progress: progressData };
  },

  // Sync progress changes to cloud (debounced or on change)
  async syncProgress(studentId: string, appId: string, progress: ProgressData): Promise<void> {
    const supabase = getSupabase();

    if (supabase) {
      try {
        await supabase
          .from('curriculum_progress')
          .upsert(
            {
              student_id: studentId,
              app_id: appId,
              completed_steps: progress.completedSteps,
              completed_challenges: progress.completedChallenges,
              completed_extensions: progress.completedExtensions,
              current_week: progress.currentWeek,
              updated_at: new Date().toISOString(),
            },
            { onConflict: 'student_id,app_id' }
          );
      } catch {
        // fail silently or retry
      }
    }

    // Always update local cache as well
    const localProfiles = getLocalProfiles();
    if (localProfiles[studentId]) {
      localProfiles[studentId].progress = localProfiles[studentId].progress || {};
      localProfiles[studentId].progress[appId] = progress;
      saveLocalProfiles(localProfiles);
    }
  },

  // Get full class roster for teacher dashboard
  async getClassRoster(appId: string, totalSteps: number = 40): Promise<StudentRosterItem[]> {
    const supabase = getSupabase();

    if (supabase) {
      try {
        const { data: students, error: studentError } = await supabase
          .from('students')
          .select('*')
          .order('display_name', { ascending: true });

        if (studentError || !students) return [];

        const { data: progressRows } = await supabase
          .from('curriculum_progress')
          .select('*')
          .eq('app_id', appId);

        const progressMap = new Map<string, { steps: Record<string, boolean>; week: number }>();
        if (progressRows) {
          progressRows.forEach(r => {
            progressMap.set(r.student_id, {
              steps: r.completed_steps || {},
              week: r.current_week || 1,
            });
          });
        }

        return students.map(s => {
          const prog = progressMap.get(s.id);
          const stepsObj = prog?.steps || {};
          const completedCount = Object.values(stepsObj).filter(Boolean).length;
          const percent = Math.min(100, Math.round((completedCount / totalSteps) * 100));

          return {
            id: s.id,
            username: s.username,
            displayName: s.display_name,
            avatar: s.avatar || '🐻',
            schoolName: s.school_name || '',
            currentWeek: prog?.week || 1,
            percentCompleted: percent,
            completedStepsCount: completedCount,
            totalStepsCount: totalSteps,
            lastLogin: s.last_login || s.created_at || new Date().toISOString(),
          };
        });
      } catch {
        return [];
      }
    }

    // Local fallback roster
    const localProfiles = getLocalProfiles();
    return Object.values(localProfiles).map(s => {
      const prog = s.progress?.[appId];
      const stepsObj = prog?.completedSteps || {};
      const completedCount = Object.values(stepsObj).filter(Boolean).length;
      const percent = Math.min(100, Math.round((completedCount / totalSteps) * 100));

      return {
        id: s.id,
        username: s.username,
        displayName: s.displayName,
        avatar: s.avatar,
        schoolName: s.schoolName,
        currentWeek: prog?.currentWeek || 1,
        percentCompleted: percent,
        completedStepsCount: completedCount,
        totalStepsCount: totalSteps,
        lastLogin: new Date().toISOString(),
      };
    });
  },

  // Reset a student's PIN (Teacher tool)
  async resetStudentPin(studentId: string, newPin: string): Promise<boolean> {
    const supabase = getSupabase();
    if (supabase) {
      try {
        const { error } = await supabase
          .from('students')
          .update({ pin: newPin.trim() })
          .eq('id', studentId);
        return !error;
      } catch {
        return false;
      }
    }

    const localProfiles = getLocalProfiles();
    if (localProfiles[studentId]) {
      localProfiles[studentId].pin = newPin.trim();
      saveLocalProfiles(localProfiles);
      return true;
    }
    return false;
  },
};
