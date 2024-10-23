<script>
    import ResponseBodyContainer from './sub-containers/response/ResponseBodyContainer.svelte';
    import ResponseHeaders from './sub-containers/response/ResponseHeaders.svelte';
    let showSection = 'body';
</script>

<div>
    <h1 class="text-xl mb-4">Response</h1>
    <div class="grid grid-flow-col justify-start gap-2 mb-4">
        <button class="btn btn-sm" on:click={() => showSection = 'body'}>Body</button>
        <button class="btn btn-sm" on:click={() => showSection = 'headers'}>Headers</button>
    </div>
    
    {#if showSection === 'body'}
        <ResponseBodyContainer />
    {/if}
    {#if showSection === 'headers'}
        <ResponseHeaders />
    {/if}
</div>