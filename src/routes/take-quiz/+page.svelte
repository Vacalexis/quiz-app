<script lang="ts">
	import { onMount } from 'svelte';
	import { getQuizzes } from '../../services/quizService';
	import List, { Item, Text } from '@smui/list';
	import Button, { Label } from '@smui/button';
	import { goto } from '$app/navigation';
	import type { Quiz } from '../../models/quiz';

	let quizzes: Quiz[] = [];

	onMount(async () => {
		quizzes = await getQuizzes();
	});

	function takeQuiz(id: string) {
		goto(`/quiz/${id}`);
	}

	function goHome() {
		goto('/');
	}
</script>

<Button on:click={goHome} variant="outlined">
	<Label>Back</Label>
</Button>

{#if quizzes.length === 0}
	<p>No quizzes available to take at this moment. Check back later!</p>
{:else}
	<List>
		{#each quizzes as quiz (quiz.id)}
			<Item on:click={() => takeQuiz(quiz.id)}>
				<Text>{quiz.title}</Text>
			</Item>
		{/each}
	</List>
{/if}
