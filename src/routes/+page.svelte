<script lang="ts">
	import Button, { Label } from '@smui/button';
	import { base } from '$app/paths';
</script>

<section>
	<h1>Welcome to QuizApp!</h1>
	<div>
		<Button href="{base}/create-questions" variant="raised">
			<Label>Create Questions</Label>
		</Button>
		<Button href="{base}/respond-questions" variant="raised">
			<Label>Responder a perguntas</Label>
		</Button>
	</div>
</section>
