import React, { useState, useEffect, useRef } from 'react';
import { ks1CurriculumData } from './data/curriculumData';
import { Navbar } from './components/Navbar';
import { BadgeBar } from './components/BadgeBar';
import { WeekView } from './components/WeekView';
import { TeacherDrawer } from './components/TeacherDrawer';
import { PictoCheatsheetModal } from './components/PictoCheatsheetModal';
import { CertificateModal } from './components/CertificateModal';
import { StudentLoginModal } from './components/StudentLoginModal';
import { TeacherPasscodeModal } from './components/TeacherPasscodeModal';
import {
  StudentProfile,
  ProgressData,
  studentAuthService,
  getStoredActiveUser,
  setStoredActiveUser,
} from './services/studentAuthService';
import { kidSounds } from './utils/soundEffects';
import { narrator } from './utils/speechNarration';

const APP_ID = 'ks1_blocks';

export const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<StudentProfile | null>(() => getStoredActiveUser());
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(() => !getStoredActiveUser());

  const [currentWeek, setCurrentWeek] = useState<number>(1);
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>({});
  const [completedOopsies, setCompletedOopsies] = useState<Record<number, boolean>>({});
  const [completedSuperStars, setCompletedSuperStars] = useState<Record<number, boolean>>({});
  const [studentName, setStudentName] = useState<string>(() => getStoredActiveUser()?.displayName || '');
  const [schoolName, setSchoolName] = useState<string>(() => getStoredActiveUser()?.schoolName || 'UK Primary School Coding Club');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [voiceEnabled, setVoiceEnabled] = useState<boolean>(true);

  // Modals state
  const [isTeacherOpen, setIsTeacherOpen] = useState<boolean>(false);
  const [isTeacherPasscodeOpen, setIsTeacherPasscodeOpen] = useState<boolean>(false);
  const [isCheatsheetOpen, setIsCheatsheetOpen] = useState<boolean>(false);
  const [isCertificateOpen, setIsCertificateOpen] = useState<boolean>(false);

  const handleOpenTeacher = () => {
    if (sessionStorage.getItem('coding_club_teacher_unlocked') === 'true') {
      setIsTeacherOpen(true);
    } else {
      setIsTeacherPasscodeOpen(true);
    }
  };

  const isLoadedRef = useRef<boolean>(false);

  // Load progress if user was already stored in localStorage
  useEffect(() => {
    const initUser = getStoredActiveUser();
    if (initUser) {
      setCurrentUser(initUser);
      setStudentName(initUser.displayName);
      if (initUser.schoolName) setSchoolName(initUser.schoolName);

      studentAuthService.loginStudent(initUser.username, initUser.pin, APP_ID).then((res) => {
        if (res.success && res.progress) {
          setCompletedSteps(res.progress.completedSteps || {});
          setCompletedOopsies(res.progress.completedChallenges || {});
          setCompletedSuperStars(res.progress.completedExtensions || {});
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
      completedChallenges: completedOopsies,
      completedExtensions: completedSuperStars,
      currentWeek,
    };

    studentAuthService.syncProgress(currentUser.id, APP_ID, progress);
  }, [completedSteps, completedOopsies, completedSuperStars, currentWeek, currentUser]);

  const handleLoginSuccess = (user: StudentProfile, progress: ProgressData) => {
    setCurrentUser(user);
    setStudentName(user.displayName);
    if (user.schoolName) setSchoolName(user.schoolName);
    setCompletedSteps(progress.completedSteps || {});
    setCompletedOopsies(progress.completedChallenges || {});
    setCompletedSuperStars(progress.completedExtensions || {});
    if (progress.currentWeek) setCurrentWeek(progress.currentWeek);
    isLoadedRef.current = true;
  };

  const handleLogout = () => {
    kidSounds.playPop();
    setStoredActiveUser(null);
    setCurrentUser(null);
    setCompletedSteps({});
    setCompletedOopsies({});
    setCompletedSuperStars({});
    setStudentName('');
    setIsLoginOpen(true);
  };

  // Toggle step
  const handleToggleStep = (stepKey: string) => {
    setCompletedSteps((prev) => ({
      ...prev,
      [stepKey]: !prev[stepKey],
    }));
  };

  // Toggle Oopsie
  const handleToggleOopsie = (week: number) => {
    setCompletedOopsies((prev) => ({
      ...prev,
      [week]: !prev[week],
    }));
  };

  // Toggle SuperStar
  const handleToggleSuperStar = (week: number) => {
    setCompletedSuperStars((prev) => ({
      ...prev,
      [week]: !prev[week],
    }));
  };

  // Toggle Sound
  const handleToggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    kidSounds.enabled = next;
    if (next) kidSounds.playPop();
  };

  // Toggle Voice
  const handleToggleVoice = () => {
    const next = !voiceEnabled;
    setVoiceEnabled(next);
    narrator.enabled = next;
    if (next) {
      kidSounds.playPop();
      narrator.speak('Voice helper is now turned on!');
    } else {
      narrator.stop();
    }
  };

  // Check if a whole week is completed
  const isWeekCompleted = (week: number): boolean => {
    const targetLesson = ks1CurriculumData.find((l) => l.week === week);
    if (!targetLesson) return false;
    return targetLesson.steps.every((s) => completedSteps[`w${week}-s${s.id}`]);
  };

  // Overall completion percentage
  const totalStepsCount = ks1CurriculumData.reduce((acc, l) => acc + l.steps.length, 0);
  const totalCompletedCount = Object.values(completedSteps).filter(Boolean).length;
  const percentCompleted = Math.round((totalCompletedCount / totalStepsCount) * 100);

  const currentLesson = ks1CurriculumData.find((l) => l.week === currentWeek) || ks1CurriculumData[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/60 via-orange-50/40 to-sky-50/50 flex flex-col font-['Nunito',sans-serif]">
      {/* Top Navbar */}
      <Navbar
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        voiceEnabled={voiceEnabled}
        onToggleVoice={handleToggleVoice}
        onOpenTeacher={handleOpenTeacher}
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
          lessons={ks1CurriculumData}
          currentWeek={currentWeek}
          onSelectWeek={(wk) => setCurrentWeek(wk)}
          isWeekCompleted={isWeekCompleted}
        />

        {/* Current Week View */}
        <WeekView
          lesson={currentLesson}
          completedSteps={completedSteps}
          onToggleStep={handleToggleStep}
          completedOopsies={completedOopsies}
          onToggleOopsie={handleToggleOopsie}
          completedSuperStars={completedSuperStars}
          onToggleSuperStar={handleToggleSuperStar}
          onNextWeek={() => setCurrentWeek((prev) => Math.min(10, prev + 1))}
          onPrevWeek={() => setCurrentWeek((prev) => Math.max(1, prev - 1))}
          isFirstWeek={currentWeek === 1}
          isLastWeek={currentWeek === 10}
          onOpenCertificate={() => setIsCertificateOpen(true)}
        />
      </main>

      {/* Teacher Passcode Gate Modal */}
      <TeacherPasscodeModal
        isOpen={isTeacherPasscodeOpen}
        onClose={() => setIsTeacherPasscodeOpen(false)}
        onSuccess={() => {
          setIsTeacherPasscodeOpen(false);
          setIsTeacherOpen(true);
        }}
      />

      {/* Teacher Guide Slide-over Drawer */}
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

      {/* Tobi Cheatsheet Modal */}
      <PictoCheatsheetModal
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
        courseTitle="Coding Master - KS1 PictoBlox"
        defaultSchoolName={schoolName}
        onOpenTeacher={() => {
          setIsLoginOpen(false);
          handleOpenTeacher();
        }}
      />
    </div>
  );
};

export default App;
