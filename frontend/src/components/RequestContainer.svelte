<script>
    import BodyContainer from './sub-containers/BodyContainer.svelte';
    import Headers from './sub-containers/request/RequestHeaders.svelte';
    import QueryParams from './sub-containers/request/RequestQueryParams.svelte';

    let currentSection = 'body';

    function renderSection(section) {
        switch (section) {
            case 'body':
                return BodyContainer;
            case 'headers':
                return Headers;
            case 'params':
                return QueryParams;
            default:
                return null;
        }
    }
</script>

<div>
    <h1 class="text-xl mb-4">Request</h1>
    <div class="grid grid-flow-col justify-start gap-2 mb-4">
        <button on:click={() => currentSection = 'body'} class="btn btn-sm">Body</button>
        <button on:click={() => currentSection = 'headers'} class="btn btn-sm">Headers</button>
        <button on:click={() => currentSection = 'params'} class="btn btn-sm">Params</button>
    </div>
    
    {#if renderSection(currentSection)}
        <svelte:component this={renderSection(currentSection)} />
    {/if}
</div>