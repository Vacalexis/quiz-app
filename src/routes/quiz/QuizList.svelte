<script>
    import { onMount } from 'svelte';
    import { List, ListItem, ListItemText } from '@smui/list';
    import { getQuizzes } from './services/quizService';
  
    let quizzes = [];
  
    onMount(async () => {
      quizzes = await getQuizzes();
    });
  </script>
  
  <List>
    {#each quizzes as quiz (quiz.id)}
      <ListItem>
        <ListItemText primary={quiz.name} />
      </ListItem>
    {/each}
  </List>
  