import type { Question } from './question';

export interface Quiz {
	id: string;
	title: string;
	questions: Question[];
}
