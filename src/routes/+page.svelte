<script lang="ts">
	import Button, { Label } from '@smui/button';
	import { goto } from '$app/navigation';
</script>

<section>
	<h1>Welcome to QuizApp!</h1>
	<div>
		<Button on:click={() => goto('/create-quiz')} variant="raised">
			<Label>Create a Quiz</Label>
		</Button>
		<Button on:click={() => goto('/take-quiz')} variant="raised">
			<Label>Take a Quiz</Label>
		</Button>
	</div>
</section>
