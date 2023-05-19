// First, let's create a type for the answer. In this case, it can be either a string or a boolean value.
export type Answer = string | boolean | number;

export abstract class Question {
	abstract type: string;
	constructor(public id: string, public title: string, public answer: Answer) {}

	abstract validate(userAnswer: Answer): boolean;
}

export class MultipleChoiceQuestion extends Question {
	type = 'multipleChoice';
	constructor(
		public id: string,
		public title: string,
		public answer: number,
		public choices: string[]
	) {
		super(id, title, answer as number);
	}

	validate(userAnswer: number): boolean {
		return userAnswer === this.answer;
	}

	static fromObject(obj: MultipleChoiceQuestion): MultipleChoiceQuestion {
		return new MultipleChoiceQuestion(obj.id, obj.title, obj.answer, obj.choices);
	}
}

export class TrueFalseQuestion extends Question {
	type = 'trueFalse';
	constructor(public id: string, public title: string, public answer: boolean) {
		super(id, title, answer);
	}

	validate(userAnswer: Answer): boolean {
		return userAnswer === this.answer;
	}
}
