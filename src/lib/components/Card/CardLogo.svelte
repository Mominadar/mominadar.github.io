<script lang="ts">
	export let src: string;
	export let alt: string;
	export let size = 50;
	export let classes = '';
</script>

<img class={`${classes} aspect-square`} {src} {alt} height={size} width={size} />
