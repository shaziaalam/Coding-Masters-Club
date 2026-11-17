import React, { useState, useEffect, useRef } from 'react';
import { curriculumData } from './data/curriculumData';
import { Navbar } from './components/Navbar';
import { BadgeBar } from './components/BadgeBar';
import { WeekView } from './components/WeekView';
import { TeacherDrawer } from './components/TeacherDrawer';
import { ScratchCheatsheetModal } from './components/ScratchCheatsheetModal';
import { CertificateModal } from './components/CertificateModal';
import { StudentLoginModal } from './components/StudentLoginModal';
import {
  StudentProfile,
  ProgressData,
  studentAuthService,
  getStoredActiveUser,
  setStoredActiveUser,
} from './services/studentAuthService';
import { sounds } from './utils/soundEffects';

const APP_ID = 'ks2_scratch';

export const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<StudentProfile | null>(() => getStoredActiveUser());
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(() => !getStoredActiveUser());

  const [currentWeek, setCurrentWeek] = useState<number>(1);
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>({});
  const [completedBugHunts, setCompletedBugHunts] = useState<Record<number, boolean>>({});
  const [completedSpicy, setCompletedSpicy] = useState<Record<number, boolean>>({});
  const [studentName, setStudentName] = useState<string>(() => getStoredActiveUser()?.displayName || '');
  const [schoolName, setSchoolName] = useState<string>(() => getStoredActiveUser()?.schoolName || 'UK Primary School Coding Club');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Modals state
  const [isTeacherOpen, setIsTeacherOpen] = useState<boolean>(false);
  const [isCheatsheetOpen, setIsCheatsheetOpen] = useState<boolean>(false);
  const [isCertificateOpen, setIsCertificateOpen] = useState<boolean>(false);

  // Avoid syncing back initial mount state before user progress is loaded
  const isLoadedRef = useRef<boolean>(false);

  // Load progress if user was already stored in localStorage
  useEffect(() => {
    const initUser = getStoredActiveUser();
    if (initUser) {
      setCurrentUser(initUser);
      setStudentName(initUser.displayName);
      if (initUser.schoolName) setSchoolName(initUser.schoolName);

      // Fetch progress from studentAuthService
      studentAuthService.loginStudent(initUser.username, initUser.pin, APP_ID).then((res) => {
        if (res.success && res.progress) {
          setCompletedSteps(res.progress.completedSteps || {});
          setCompletedBugHunts(res.progress.completedChallenges || {});
          setCompletedSpicy(res.progress.completedExtensions || {});
          if (res.progress.currentWeek) setCurrentWeek(res.progress.currentWeek);
        }
        isLoadedRef.current = true;
      });
    } else {
      isLoadedRef.current = true;
    }
  }, []);

  // Sync to database/local cache whenever progress changes
  useEffect(() => {
    if (!isLoadedRef.current || !currentUser) return;

    const progress: ProgressData = {
      completedSteps,
      completedChallenges: completedBugHunts,
      completedExtensions: completedSpicy,
      currentWeek,
    };

    studentAuthService.syncProgress(currentUser.id, APP_ID, progress);
  }, [completedSteps, completedBugHunts, completedSpicy, currentWeek, currentUser]);

  const handleLoginSuccess = (user: StudentProfile, progress: ProgressData) => {
    setCurrentUser(user);
    setStudentName(user.displayName);
    if (user.schoolName) setSchoolName(user.schoolName);
    setCompletedSteps(progress.completedSteps || {});
    setCompletedBugHunts(progress.completedChallenges || {});
    setCompletedSpicy(progress.completedExtensions || {});
    if (progress.currentWeek) setCurrentWeek(progress.currentWeek);
    isLoadedRef.current = true;
  };

  const handleLogout = () => {
    sounds.playPop();
    setStoredActiveUser(null);
    setCurrentUser(null);
    setCompletedSteps({});
    setCompletedBugHunts({});
    setCompletedSpicy({});
    setStudentName('');
    setIsLoginOpen(true);
  };

  // Toggle step complete
  const handleToggleStep = (stepKey: string) => {
    setCompletedSteps((prev) => ({
      ...prev,
      [stepKey]: !prev[stepKey],
    }));
  };

  // Toggle bug hunt
  const handleToggleBugHunt = (week: number) => {
    setCompletedBugHunts((prev) => ({
      ...prev,
      [week]: !prev[week],
    }));
  };

  // Toggle spicy challenge
  const handleToggleSpicy = (week: number) => {
    setCompletedSpicy((prev) => ({
      ...prev,
      [week]: !prev[week],
    }));
  };

  // Toggle sound
  const handleToggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    sounds.enabled = next;
    if (next) sounds.playPop();
  };

  // Check if a whole week is completed (all 5 steps finished)
  const isWeekCompleted = (week: number): boolean => {
    const targetLesson = curriculumData.find((l) => l.week === week);
    if (!targetLesson) return false;
    return targetLesson.steps.every((s) => completedSteps[`w${week}-s${s.id}`]);
  };

  // Overall completion percentage
  const totalStepsCount = curriculumData.reduce((acc, l) => acc + l.steps.length, 0);
  const totalCompletedCount = Object.values(completedSteps).filter(Boolean).length;
  const percentCompleted = Math.round((totalCompletedCount / totalStepsCount) * 100);

  const currentLesson = curriculumData.find((l) => l.week === currentWeek) || curriculumData[0];

  return (
    <div className="min-h-screen bg-amber-50/50 flex flex-col font-['Nunito',sans-serif]">
      {/* Top Navbar */}
      <Navbar
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        onOpenTeacher={() => setIsTeacherOpen(true)}
        onOpenCheatsheet={() => setIsCheatsheetOpen(true)}
        onOpenCertificate={() => setIsCertificateOpen(true)}
        percentCompleted={percentCompleted}
        currentUser={currentUser}
        onOpenLogin={() => setIsLoginOpen(true)}
        onLogout={handleLogout}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-6">
        {/* Badge Bar & Week Navigation */}
        <BadgeBar
          lessons={curriculumData}
          currentWeek={currentWeek}
          onSelectWeek={(wk) => setCurrentWeek(wk)}
          isWeekCompleted={isWeekCompleted}
        />

        {/* Current Week View */}
        <WeekView
          lesson={currentLesson}
          completedSteps={completedSteps}
          onToggleStep={handleToggleStep}
          completedBugHunts={completedBugHunts}
          onToggleBugHunt={handleToggleBugHunt}
          completedSpicy={completedSpicy}
          onToggleSpicy={handleToggleSpicy}
          onNextWeek={() => setCurrentWeek((prev) => Math.min(10, prev + 1))}
          onPrevWeek={() => setCurrentWeek((prev) => Math.max(1, prev - 1))}
          isFirstWeek={currentWeek === 1}
          isLastWeek={currentWeek === 10}
          onOpenCertificate={() => setIsCertificateOpen(true)}
        />
      </main>

      {/* Teacher Guide & Class Roster Slide-over Drawer */}
      <TeacherDrawer
        isOpen={isTeacherOpen}
        onClose={() => setIsTeacherOpen(false)}
        guide={currentLesson.teacherGuide}
        weekNumber={currentLesson.week}
        schoolName={schoolName}
        onUpdateSchoolName={(name) => setSchoolName(name)}
        appId={APP_ID}
        totalSteps={totalStepsCount}
      />

      {/* Scratch Cheatsheet Modal */}
      <ScratchCheatsheetModal
        isOpen={isCheatsheetOpen}
        onClose={() => setIsCheatsheetOpen(false)}
      />

      {/* Graduation Certificate Modal */}
      <CertificateModal
        isOpen={isCertificateOpen}
        onClose={() => setIsCertificateOpen(false)}
        studentName={studentName}
        onUpdateStudentName={(name) => setStudentName(name)}
        schoolName={schoolName}
        totalCompleted={totalCompletedCount}
      />

      {/* Student Login / Profile Switcher Modal */}
      <StudentLoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLoginSuccess={handleLoginSuccess}
        appId={APP_ID}
        courseTitle="KS2 Scratch 3.0 Coding Club"
        defaultSchoolName={schoolName}
      />
    </div>
  );
};

export default App;
