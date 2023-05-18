<script lang="ts">
	import { onMount } from 'svelte';
	import List, { Item, Text } from '@smui/list';
	import Button, { Label } from '@smui/button';
	import TextField from '@smui/textfield';
	import Select, { Option } from '@smui/select';
	import { goto } from '$app/navigation';
	import type { Quiz } from '../../../../models/quiz';
	import type { Question } from '../../../../models/question';
	import { addQuestionToQuiz, getQuiz } from '../../../../services/quizService';
	import { createQuestion, getQuestions } from '../../../../services/questionService';
	import { page } from '$app/stores';

	let quiz: Quiz | undefined;
	let questions: Question[] = [];
	let newQuestion: Omit<Question, 'id'> = {
		type: 'multipleChoice',
		question: '',
		answer: '',
		options: []
	};

	onMount(async () => {
		const { id } = $page.params;
		quiz = await getQuiz(id);
		questions = await getQuestions();
	});

	async function handleAddQuestion(quizId: string, questionId: string) {
		await addQuestionToQuiz(quizId, questionId);
		quiz = await getQuiz(quizId);
	}

	async function handleCreateQuestion() {
		const newQuestionId = await createQuestion(newQuestion);
		newQuestion = {
			type: 'multipleChoice',
			question: '',
			answer: '',
			options: []
		};
		questions = await getQuestions();
	}

	function goHome() {
		goto('/');
	}
</script>

<Button on:click={goHome} variant="outlined">
	<Label>Back</Label>
</Button>

<h2>{quiz?.title}</h2>

<h3>Questions in the Quiz:</h3>
{#if quiz}
	<List>
		{#each quiz?.questions as question (question.id)}
			<Item>
				<Text>{question.question}</Text>
			</Item>
		{/each}
	</List>
{/if}

<h3>Add Questions to the Quiz:</h3>
<List>
	{#each questions as question (question.id)}
		<Item
			on:click={() => {
				if (quiz) handleAddQuestion(quiz.id, question.id);
			}}
		>
			<Text>{question.question}</Text>
		</Item>
	{/each}
</List>

<h3>Create a New Question:</h3>
<div>
	<Select bind:value={newQuestion.type} label="Type">
		<Option value="multipleChoice">Multiple Choice</Option>
		<Option value="trueFalse">True/False</Option>
	</Select>
	<TextField bind:value={newQuestion.question} label="Question" />
	<TextField bind:value={newQuestion.answer} label="Correct Answer" />
	{#if newQuestion.type === 'multipleChoice'}
		<div>
			<h4>Options:</h4>
			{#each newQuestion.options as option, i}
				<TextField bind:value={newQuestion.options[i]} label={`Option ${i + 1}`} />
			{/each}
			<Button on:click={() => newQuestion.options.push('')} variant="outlined">
				<Label>Add Option</Label>
			</Button>
		</div>
	{/if}
</div>
<Button on:click={handleCreateQuestion} variant="raised">
	<Label>Create Question</Label>
</Button>
