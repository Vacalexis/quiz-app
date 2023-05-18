<script>
    import { TextField, Button } from '@smui/textfield';
    import { createQuiz } from './services/quizService';
  
    let name = '';
  
    function submit() {
      createQuiz({ name });
      name = '';
    }
  </script>
  
  <form on:submit|preventDefault={submit}>
    <TextField label="Quiz Name" bind:value={name} />
    <Button unelevated type="submit">Add Quiz</Button>
  </form>
  