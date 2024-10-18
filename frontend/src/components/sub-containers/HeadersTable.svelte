<script lang="ts">
    export let headers: { key: string; value: string }[] = [];
</script>

<div
    class="overflow-y-scroll h-20 my-4 w-full p-2 border border-gray-300 rounded-md font-mono resize-none"
>
    {#each headers as header}   
        <p class="my-2">{header['key']}: {header['value']}</p>
    {/each}
</div>
