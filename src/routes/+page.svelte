<script lang="ts">
	import Button, { Label } from '@smui/button';
	import { goto } from '$app/navigation';
</script>

<section>
	<h1>Welcome to QuizApp!</h1>
	<div>
		<Button on:click={() => goto('/create-questions')} variant="raised">
			<Label>Create Questions</Label>
		</Button>
		<Button on:click={() => goto('/respond-questions')} variant="raised">
			<Label>Responder a perguntas</Label>
		</Button>
	</div>
</section>
