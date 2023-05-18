// src/lib/services/questionService.ts
import type { Question } from '../models/question';

// Generate a unique id for each new question
function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

export function createQuestion(question: Omit<Question, 'id'>): Question {
  const newQuestion: Question = { ...question, id: generateId() };
  const questions = getQuestions();
  questions.push(newQuestion);
  localStorage.setItem('questions', JSON.stringify(questions));
  return newQuestion;
}

export function getQuestions(): Question[] {
  const questions = localStorage.getItem('questions');
  return questions ? JSON.parse(questions) : [];
}

export function getQuestion(id: string): Question | undefined {
  const questions = getQuestions();
  return questions.find((question) => question.id === id);
}

export function updateQuestion(updatedQuestion: Question): void {
  let questions = getQuestions();
  questions = questions.map((question) =>
    question.id === updatedQuestion.id ? updatedQuestion : question
  );
  localStorage.setItem('questions', JSON.stringify(questions));
}

export function deleteQuestion(id: string): void {
  let questions = getQuestions();
  questions = questions.filter((question) => question.id !== id);
  localStorage.setItem('questions', JSON.stringify(questions));
}
