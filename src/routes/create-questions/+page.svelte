<script lang="ts">
	import List, { Item, Text } from '@smui/list';
	import Select, { Option } from '@smui/select';
	import Button, { Label } from '@smui/button';
	import Textfield from '@smui/textfield';
	import { createQuestion, getQuestions } from '../../services/questionService';
	import { enhance } from '$app/forms';
	import type { MultipleChoiceQuestion, Question } from '../../models/question';
	import { base } from '$app/paths';

	let questions = getQuestions();

	let newQuestionTitle = '';
	let newQuestionType = 'multipleChoice';
	let choiceAText = '';
	let choiceBText = '';
	let choiceCText = '';
	let choiceDText = '';
	let newQuestionAnswer = '';

	function createNewQuestion() {
		let question!: Omit<Question, 'id'>;
		if (newQuestionType === 'multipleChoice') {
			question = {
				title: newQuestionTitle,
				type: 'multipleChoice',
				answer: newQuestionAnswer,
				choices: [choiceAText, choiceBText, choiceCText, choiceDText]
			} as Omit<MultipleChoiceQuestion, 'id'>;
		}
		createQuestion(question);
        questions = getQuestions();
	}
</script>

<section>
	<h1>Perguntas</h1>
	<div>
		<form method="POST" on:submit|preventDefault={createNewQuestion}>
			<Textfield
				bind:value={newQuestionTitle}
				input$name="newQuestionTitle"
				label="Título da pergunta"
			/>
			<Select bind:value={newQuestionType} label="Tipo de pergunta">
				<Option value="multipleChoice">Escolha múltipla</Option>
				<Option value="trueFalse">Verdadeiro ou falso</Option>
			</Select>
			{#if newQuestionType === 'multipleChoice'}
				<Textfield bind:value={choiceAText} label="Opção A" />
				<Textfield bind:value={choiceBText} label="Opção B" />
				<Textfield bind:value={choiceCText} label="Opção C" />
				<Textfield bind:value={choiceDText} label="Opção D" />
				<Select bind:value={newQuestionAnswer} label="Opção correta">
					<Option value="{0}">A</Option>
					<Option value="{1}">B</Option>
					<Option value="{2}">C</Option>
					<Option value="{3}">D</Option>
				</Select>
			{/if}
			{#if newQuestionType === 'trueFalse'}
				<Select bind:value={newQuestionAnswer} label="Opção correta">
					<Option value="{true}">Verdadeiro</Option>
					<Option value="{false}">Falso</Option>
				</Select>
			{/if}
			<Button type="submit" variant="raised">
				<Label>Criar pergunta</Label>
			</Button>
		</form>
	</div>
	<div>
		<div>
			<List>
				{#each questions as question}
					<Item on:SMUI:action={() => {}}><Text>{question.title}</Text></Item>
				{/each}
			</List>
		</div>
	</div>
</section>
<Button href="{base}" variant="raised">
    <Label>Back</Label>
</Button>

<style>
	form {
		display: flex;
		flex-direction: column;
	}
</style>
