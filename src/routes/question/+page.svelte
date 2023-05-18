<script lang="ts">
    import { onMount } from 'svelte';
    import TextField, { Input } from '@smui/textfield';
    import Button, { Label } from '@smui/button';
    import Select, { Item } from '@smui/select';
    import { createQuiz } from '../../services/quizService';
    import { goto } from '$app/navigation';
  
    let quizName = '';
    let questionPrompt = '';
    let questionAnswer = '';
    let questionType = '';
    let questionOptions = [];
  
    async function createQuiz() {
      await createQuiz({
        id: Date.now().toString(),
        name: quizName,
        questions: [{
          id: Date.now().toString(),
          type: questionType,
          prompt: questionPrompt,
          answer: questionAnswer,
          options: questionType === 'multipleChoice' ? questionOptions : [],
        }]
      });
  
      goto('/');
    }
  </script>
  
  <TextField bind:value={quizName} label="Quiz Name">
    <Input />
  </TextField>
  
  <TextField bind:value={questionPrompt} label="Question Prompt">
    <Input />
  </TextField>
  
  <TextField bind:value={questionAnswer} label="Question Answer">
    <Input />
  </TextField>
  
  <Select bind:value={questionType} label="Question Type">
    <Item value="trueFalse">True / False</Item>
    <Item value="multipleChoice">Multiple Choice</Item>
  </Select>
  
  {#if questionType === 'multipleChoice'}
    <TextField bind:value={questionOptions} label="Question Options (comma separated)">
      <Input />
    </TextField>
  {/if}
  
  <Button on:click={createQuiz} variant="raised">
    <Label>Create Quiz</Label>
  </Button>
  