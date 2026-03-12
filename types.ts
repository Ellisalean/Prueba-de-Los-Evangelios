export enum QuestionType {
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
  TRUE_FALSE = 'TRUE_FALSE',
  ORDERING = 'ORDERING',
  WORD_BANK = 'WORD_BANK',
  SHORT_ANSWER = 'SHORT_ANSWER',
  LONG_ANSWER = 'LONG_ANSWER',
  TABLE = 'TABLE'
}

export interface Question {
  id: number;
  text: string;
  type: QuestionType;
  imageUrl: string; // Nueva propiedad para la imagen de fondo
  options: string[];
  correctAnswer: string; // En ORDERING es "1,2,3", en WORD_BANK es la palabra exacta
  explanation?: string;
}

export interface UserState {
  name: string;
  email: string;
  started: boolean;
  finished: boolean;
  currentQuestionIndex: number;
  answers: Record<number, { answer: string; isCorrect: boolean }>;
  score: number;
  verificationCode?: string;
  completionDate?: string;
}