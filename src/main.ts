import App from './App.svelte';
import '@mux/mux-video';

const app = new App({
	target: document.body,
	props: {
		name: 'world',
    playbackId: 'DS00Spx1CV902MCtPj5WknGlR102V5HFkDe'
	}
});

export default app;
