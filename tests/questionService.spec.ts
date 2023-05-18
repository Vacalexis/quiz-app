// tests/questionService.test.ts

import { getQuestions, createQuestion, updateQuestion, deleteQuestion } from '../src/services/questionService';

describe('QuestionService', () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    localStorage.clear();
  });

  test('should create a question', () => {
    const question = createQuestion({ text: 'What is 2 + 2?', answer: '4', type: 'text' });
    expect(question).toHaveProperty('id');
    expect(question.text).toEqual('What is 2 + 2?');
    expect(question.answer).toEqual('4');
    expect(question.type).toEqual('text');
  });

  test('should get all questions', () => {
    createQuestion({ text: 'What is 2 + 2?', answer: '4', type: 'text' });
    createQuestion({ text: 'What is 3 + 3?', answer: '6', type: 'text' });
    const questions = getQuestions();
    expect(questions.length).toEqual(2);
  });

  test('should update a question', () => {
    const question = createQuestion({ text: 'What is 2 + 2?', answer: '4', type: 'text' });
    question.text = 'What is 2 + 3?';
    question.answer = '5';
    updateQuestion(question);
    const updatedQuestion = getQuestions().find((q) => q.id === question.id);
    expect(updatedQuestion.text).toEqual('What is 2 + 3?');
    expect(updatedQuestion.answer).toEqual('5');
  });

  test('should delete a question', () => {
    const question = createQuestion({ text: 'What is 2 + 2?', answer: '4', type: 'text' });
    deleteQuestion(question.id);
    const questions = getQuestions();
    expect(questions.length).toEqual(0);
  });
});
