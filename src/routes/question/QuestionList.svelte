<script>
    import { onMount } from 'svelte';
    import { List, ListItem, ListItemText } from '@smui/list';
    import { getQuestions } from './services/questionService';
  
    let questions = [];
  
    onMount(async () => {
      questions = await getQuestions();
    });
  </script>
  
  <List>
    {#each questions as question (question.id)}
      <ListItem>
        <ListItemText primary={question.text} secondary={question.answer} />
      </ListItem>
    {/each}
  </List>
  