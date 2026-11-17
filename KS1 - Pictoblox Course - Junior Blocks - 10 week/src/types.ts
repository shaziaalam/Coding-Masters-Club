export type JrCategory =
  | 'trigger' // Yellow: Flag, Tap, Bump
  | 'motion'  // Blue: Move, Hop, Turn
  | 'looks'   // Purple: Grow, Shrink, Hide, Show, Say
  | 'sound'   // Green: Pop, Audio
  | 'control' // Orange: Wait, Speed, Repeat
  | 'end';    // Red: End, Forever

export interface JrBlock {
  category: JrCategory;
  name: string;
  iconName: string; // e.g. 'flag', 'tap', 'bump', 'right', 'left', 'up', 'down', 'hop', 'turn_right', 'turn_left', 'grow', 'shrink', 'show', 'hide', 'say', 'pop', 'wait', 'speed', 'repeat', 'end', 'forever'
  label: string;
  value?: number | string; // The number badge under the block (e.g. 2, 4, 1) or text string
  nestedBlocks?: JrBlock[]; // For Repeat block
}

export interface JrStep {
  id: number;
  title: string;
  actionText: string;
  narration: string; // Spoken by "Read to Me"
  blocks: JrBlock[];
  spotCheck: string;
  funTip?: string;
  simulationAction?: {
    type: 'move_right' | 'move_left' | 'move_up' | 'move_down' | 'hop' | 'grow' | 'shrink' | 'spin' | 'say' | 'pop';
    value?: number;
  };
}

export interface JrOopsie {
  title: string;
  story: string;
  narration: string;
  buggyBlocks: JrBlock[];
  clue: string;
  howToFix: string;
  fixedBlocks: JrBlock[];
}

export interface JrSuperStar {
  title: string;
  stars: number;
  description: string;
  easyHint: string;
}

export interface JrTeacherGuide {
  curriculumCreator: string; // "Shazia Alam"
  ks1ComputingTarget: string;
  lessonPacing: {
    circleTime: string;      // 0-5 mins
    tobiDemo: string;        // 5-15 mins
    handsOnRibbon: string;   // 15-35 mins
    carnivalShowcase: string;// 35-40 mins
    tidyAndCelebrate: string;// 40-45 mins
  };
  juniorBlocksTips: string;
  littleOopsiesToWatch: string[];
  encouragementWords: string;
}

export interface JrLesson {
  week: number;
  title: string;
  themeTagline: string;
  badge: {
    name: string;
    icon: string;
    description: string;
  };
  tobiMood: string;
  tobiEmoji: string;
  bigIdeaForKids: string;
  bigIdeaNarration: string;
  steps: JrStep[];
  oopsie: JrOopsie;
  superStar: JrSuperStar;
  teacherGuide: JrTeacherGuide;
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
