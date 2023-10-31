<script lang="ts">
	import type { Skill } from '$lib/types';
	import { getAssetURL } from '$lib/data/assets';

	export let items: Array<Skill> = [];
</script>

<div class="carrousel flex-[0.5] row-center">
		{#each items as item}
			<div class="box-content w-150px p-15px col-center">
				<img class="w-120px h-120px aspect-square" src={getAssetURL(item.logo)} alt={item.name} />
				<span class="text-center m-t-20px">{item.name}</span>
			</div>
		{/each}
</div>
