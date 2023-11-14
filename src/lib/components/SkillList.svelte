<script lang="ts">
	import type { Skill } from '$lib/types';
	import { getAssetURL } from '$lib/data/assets';

	export let items: Array<Skill> = [];
	const id = 'skills';
</script>

<div class="flex flex-wrap gap-4 justify-center text-lg font-serif mt-[3rem] mb-[5rem]" {id}>
	{#each items as item}
		<div class="box-content w-60px md:w-150px p-15px col-center">
			<img
				class="w-60px h-60px md:w-120px md:h-120px aspect-square"
				src={getAssetURL(item.logo)}
				alt={item.name}
			/>
			<span class="text-center m-t-20px">{item.name}</span>
		</div>
	{/each}
</div>
