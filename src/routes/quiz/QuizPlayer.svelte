<script>
    import { onMount } from 'svelte';
    import { List, ListItem, ListItemText } from '@smui/list';
    import { Button } from '@smui/button';
    import { getQuiz } from './services/quizService';
    import { getQuestion } from './services/questionService';
  
    let quiz;
    let currentQuestion;
  
    onMount(async () => {
      quiz = await getQuiz(/* pass quiz id here */);
      currentQuestion = await getQuestion(quiz.questions[0]);
    });
  
    function nextQuestion() {
      // implement logic to fetch and display next question
    }
  </script>
  
  {#if currentQuestion}
    <List>
      <ListItem>
        <ListItemText primary={currentQuestion.text} />
      </ListItem>
    </List>
    <Button on:click={nextQuestion}>Next</Button>
  {/if}
  