export type QuestionType = 'multipleChoide' | 'trueFalse';

export interface Question {
	id: string;
	type: 'multipleChoice' | 'trueFalse';
	question: string;
	options: string[];
	answer: string;
}
