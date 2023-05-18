<script lang="ts">
	import TextField, { Input } from '@smui/textfield';
	import Button, { Label } from '@smui/button';
	import { createQuiz } from '../../services/quizService';
	import { goto } from '$app/navigation';
	import { Quiz } from '../../models/quiz';

	let quizName = '';

	async function handleCreateQuiz() {
		const newQuiz: Quiz = await createQuiz({
			title: quizName,
			questions: []
		});

		goto(`/quiz/${newQuiz.id}/edit`);
	}
</script>

<TextField bind:value={quizName} label="Quiz Name">
	<Input />
</TextField>

<Button on:click={handleCreateQuiz} variant="raised">
	<Label>Create Quiz</Label>
</Button>
