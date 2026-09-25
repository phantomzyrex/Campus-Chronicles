export type Perspective = 'student' | 'teacher';
export type Language = 'english' | 'hinglish' | 'hindi' | 'doctor';

export interface ScheduleItem {
  id: string;
  time: string;
  iconName: string;
  student: {
    title: string;
    caption: string;
    location: string;
    statusBadge: string;
  };
  teacher: {
    title: string;
    caption: string;
    location: string;
    statusBadge: string;
  };
}

export interface ExcuseItem {
  id: string;
  rank: number;
  excuse: string;
  student: {
    deliveryTactic: string;
    confidence: number;
    quote: string;
    icon: string;
  };
  teacher: {
    realityCheck: string;
    plausibility: number;
    quote: string;
    icon: string;
  };
}

export interface ArchetypeItem {
  id: string;
  name: string;
  emoji: string;
  studentTake: string;
  teacherTake: string;
  workloadShare: number;
}

export interface MoodStage {
  id: string;
  stageName: string;
  week: string;
  student: {
    stress: number;
    title: string;
    vibe: string;
    fuel: string;
    thought: string;
  };
  teacher: {
    stress: number;
    title: string;
    vibe: string;
    fuel: string;
    thought: string;
  };
}

export interface ConfessionScenario {
  id: string;
  question: string;
  student: {
    intendedTone: string;
    actualSubtext: string;
    secretFear: string;
  };
  teacher: {
    politeResponse: string;
    internalMonologue: string;
    energyDepleted: string;
  };
}
