<script>
    import { Button } from '@smui/button';
    import QuestionList from './QuestionList.svelte';
    import QuestionForm from './QuestionForm.svelte';
    import QuizList from './QuizList.svelte';
    import QuizForm from './QuizForm.svelte';
    import QuizPlayer from './QuizPlayer.svelte';
  
    let currentPage = 'questions';  // You can control this with a router in the future
  </script>
  
  <main>
    <Button on:click={() => currentPage = 'questions'}>Questions</Button>
    <Button on:click={() => currentPage = 'quizzes'}>Quizzes</Button>
    <Button on:click={() => currentPage = 'playQuiz'}>Play Quiz</Button>
    {#if currentPage === 'questions'}
      <QuestionList />
      <QuestionForm />
    {:else if currentPage === 'quizzes'}
      <QuizList />
      <QuizForm />
    {:else if currentPage === 'playQuiz'}
      <QuizPlayer />
    {/if}
  </main>
  