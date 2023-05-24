<script lang="ts">
	import { MultipleChoiceQuestion, type Answer, Question } from '../../models/question';
	import { getQuestions } from '../../services/questionService';
	import { arrayShuffle } from '../../services/utils';
	import Card, { Content, PrimaryAction, Actions, ActionButtons, ActionIcons } from '@smui/card';
	import Button, { Label } from '@smui/button';
	import { base } from '$app/paths';

	const shuffledQuestions = arrayShuffle(getQuestions());
	let currentIndex = 0;

	let currentQuestion: MultipleChoiceQuestion;
	if (shuffledQuestions[currentIndex])
		currentQuestion = MultipleChoiceQuestion.fromObject(shuffledQuestions[currentIndex]);
	let currentAnswer: Answer | null = null;
	let isAnswered = false;

	function respondQuestion(answer: Answer) {
		currentAnswer = answer;
		isAnswered = true;
	}

	function nextQuestion() {
		currentAnswer = null;
		isAnswered = false;
		console.log(isAnswered);
		if (currentIndex + 1 === shuffledQuestions.length) currentIndex = 0;
		else currentIndex++;
		currentQuestion = MultipleChoiceQuestion.fromObject(shuffledQuestions[currentIndex]);
	}
</script>

<section>
	{#if shuffledQuestions.length > 0}
		<div class="card-container">
			<Card>
				<Content>{currentQuestion.title}</Content>
				<Actions>
					{#each currentQuestion.choices as choice, i}
						<Button
							on:click={() => respondQuestion(i)}
							variant={currentAnswer === i ? 'raised' : undefined}
							class={(isAnswered && currentAnswer === i && currentQuestion.validate(currentAnswer)
								? 'right'
								: '') +
								(isAnswered && currentAnswer === i && !currentQuestion.validate(currentAnswer)
									? 'wrong'
									: '') +
								(isAnswered && currentAnswer !== i && currentQuestion.validate(i)
									? 'correctAnswer'
									: '')}
						>
							<Label>{choice}</Label>
						</Button>
					{/each}
				</Actions>
			</Card>
		</div>
	{:else}
		<div>Não existem perguntas. Por favor adicionar.</div>
	{/if}
	<Button href={base} variant="raised">
		<Label>Back</Label>
	</Button>
	{#if shuffledQuestions.length > 0}
		<Button on:click={nextQuestion}>
			<Label>Próxima pergunta</Label>
		</Button>
	{/if}
</section>

<style>
	* :global(.right) {
		background-color: green;
	}

	* :global(.wrong) {
		background-color: red;
	}

	* :global(.correctAnswer) {
		background-color: lightgreen;
	}
</style>
