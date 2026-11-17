export type ScratchCategory =
  | 'events'
  | 'motion'
  | 'looks'
  | 'sound'
  | 'control'
  | 'sensing'
  | 'operators'
  | 'variables';

export type BlockShape = 'hat' | 'stack' | 'c-block' | 'reporter' | 'boolean' | 'cap';

export interface ScratchCodeBlock {
  category: ScratchCategory;
  shape: BlockShape;
  text: string; // e.g. "when [green flag] clicked", "move (10) steps", "if <touching [color]?> then"
  nestedBlocks?: ScratchCodeBlock[]; // For C-blocks like 'forever' or 'if'
}

export interface Step {
  id: number;
  title: string;
  actionText: string;
  tip?: string;
  blocks: ScratchCodeBlock[];
  spotCheck: string;
}

export interface BugHunt {
  title: string;
  scenario: string;
  buggyCode: ScratchCodeBlock[];
  clue: string;
  solutionExplanation: string;
  fixedCode: ScratchCodeBlock[];
}

export interface SpicyChallenge {
  title: string;
  rewardStars: number;
  description: string;
  hint: string;
}

export interface TeacherGuide {
  curriculumLink: string;
  lessonTiming: {
    arrivalAndWarmup: string; // 0-5m
    liveDemo: string;         // 5-15m
    handsOnCoding: string;    // 15-45m
    peerReviewAndDebug: string;// 45-55m
    packDownAndDismissal: string; // 55-60m
  };
  commonTraps: string[];
  differentiationTips: string;
}

export interface Lesson {
  week: number;
  title: string;
  tagline: string;
  badge: {
    name: string;
    icon: string;
    description: string;
  };
  csConcept: string;
  bigIdea: string;
  equipmentNeeds: string;
  steps: Step[];
  bugHunt: BugHunt;
  spicyChallenge: SpicyChallenge;
  teacherGuide: TeacherGuide;
}

export interface StudentProgress {
  completedSteps: Record<string, boolean>; // e.g. "w1-s1": true
  completedBugHunts: Record<number, boolean>; // week -> true
  completedSpicy: Record<number, boolean>;    // week -> true
  studentName: string;
  schoolName: string;
  soundEnabled: boolean;
}
