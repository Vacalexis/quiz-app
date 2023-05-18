// src/lib/services/quizService.ts

import type { Quiz } from '../models/quiz';

// Generate a unique id for each new quiz
function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

export function createQuiz(quiz: Omit<Quiz, 'id'>): Quiz {
  const newQuiz: Quiz = { ...quiz, id: generateId() };
  const quizzes = getQuizzes();
  quizzes.push(newQuiz);
  localStorage.setItem('quizzes', JSON.stringify(quizzes));
  return newQuiz;
}

export function getQuizzes(): Quiz[] {
  const quizzes = localStorage.getItem('quizzes');
  return quizzes ? JSON.parse(quizzes) : [];
}

export function getQuiz(id: string): Quiz | undefined {
  const quizzes = getQuizzes();
  return quizzes.find((quiz) => quiz.id === id);
}

export function updateQuiz(updatedQuiz: Quiz): void {
  let quizzes = getQuizzes();
  quizzes = quizzes.map((quiz) =>
    quiz.id === updatedQuiz.id ? updatedQuiz : quiz
  );
  localStorage.setItem('quizzes', JSON.stringify(quizzes));
}

export function deleteQuiz(id: string): void {
  let quizzes = getQuizzes();
  quizzes = quizzes.filter((quiz) => quiz.id !== id);
  localStorage.setItem('quizzes', JSON.stringify(quizzes));
}