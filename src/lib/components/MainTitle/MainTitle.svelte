<script lang="ts">
	export let classes = '';
</script>

<h4
	class={`font-[var(--title-f)] font-black tracking-[4px] text-center text-2em sm:text-[2em] md:text-[3em] lg:text-[3em] ${classes}`}
	style="background: linear-gradient(var(--main-text), var(--accent-text-hover)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;"
>
	<slot />
</h4>
