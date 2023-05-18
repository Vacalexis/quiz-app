<script>
    import { TextField, Button } from '@smui/textfield';
	import { createQuestion } from '../../services/questionService';
  
    let question = '';
    let answer = '';
  
    function submit() {
      createQuestion({ question, answer });
      question = '';
      answer = '';
    }
  </script>
  
  <form on:submit|preventDefault={submit}>
    <TextField label="Question" bind:value={question} />
    <TextField label="Answer" bind:value={answer} />
    <Button unelevated type="submit">Add Question</Button>
  </form>
  