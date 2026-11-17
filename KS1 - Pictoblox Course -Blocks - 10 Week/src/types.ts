export type PictoCategory =
  | 'events'
  | 'motion'
  | 'looks'
  | 'sound'
  | 'control'
  | 'sensing'
  | 'operators'
  | 'variables'
  | 'ai'
  | 'speech';

export type BlockShape = 'hat' | 'stack' | 'c-block' | 'reporter' | 'boolean' | 'cap';

export interface PictoCodeBlock {
  category: PictoCategory;
  shape: BlockShape;
  text: string;
  nestedBlocks?: PictoCodeBlock[];
}

export interface KS1Step {
  id: number;
  title: string;
  narration: string; // The simplified friendly sentence read by "Read to Me"
  actionText: string;
  funTip?: string;
  blocks: PictoCodeBlock[];
  spotCheck: string; // E.g. "👀 Test it: Did Tobi wave and say Hello?"
}

export interface OopsieDetective {
  title: string;
  story: string;
  narration: string;
  buggyCode: PictoCodeBlock[];
  clue: string;
  howToFix: string;
  fixedCode: PictoCodeBlock[];
}

export interface SuperStarChallenge {
  title: string;
  stars: number;
  description: string;
  easyHint: string;
}

export interface KS1TeacherGuide {
  curriculumCreator: string; // "Shazia Alam"
  ks1ComputingTarget: string; // National Curriculum England KS1
  lessonPacing: {
    welcomeAndCircleTime: string; // 0-5 mins
    tobiStoryAndDemo: string;     // 5-15 mins
    handsOnCodingFun: string;     // 15-35 mins
    showAndTellCelebration: string;// 35-40 mins
    tidyAndStickers: string;      // 40-45 mins
  };
  mouseAndKeyboardTips: string;
  littleMistakesToWatch: string[];
  encouragementWords: string;
}

export interface KS1Lesson {
  week: number;
  title: string;
  themeTagline: string;
  badge: {
    name: string;
    icon: string;
    description: string;
  };
  tobiMood: string; // E.g. "Happy Waving Tobi"
  tobiEmoji: string; // E.g. "👋🐻"
  bigIdeaForKids: string; // Ultra-simple 1-sentence explanation
  bigIdeaNarration: string;
  steps: KS1Step[];
  oopsie: OopsieDetective;
  superStar: SuperStarChallenge;
  teacherGuide: KS1TeacherGuide;
}

export interface StudentProgress {
  completedSteps: Record<string, boolean>; // e.g. "w1-s1": true
  completedOopsies: Record<number, boolean>;
  completedSuperStars: Record<number, boolean>;
  studentName: string;
  schoolName: string;
  soundEnabled: boolean;
  voiceEnabled: boolean;
}
