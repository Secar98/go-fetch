<script>
    import RequestJson from './RequestJson.svelte';
    import RequestFormData from './RequestFormData.svelte';
    import RequestUrlEncoded from './RequestUrlEncoded.svelte';
    let showSection = 'json';

    function renderSection(section) {
        switch (section) {
            case 'json':
                return RequestJson;
            case 'formdata':
                return RequestFormData;
            case 'urlencoded':
                return RequestUrlEncoded;
            default:
                return null;
        }
    }
</script>

<div>
    <div class="grid grid-flow-col justify-start gap-2 mb-4">
        <button class="btn btn-xs" on:click={() => showSection = 'json'}>Json</button>
        <button class="btn btn-xs" on:click={() => showSection = 'formdata'}>Formdata</button>
        <button class="btn btn-xs" on:click={() => showSection = 'urlencoded'}>x-www-form-urlencoded</button>
    </div>
    
    {#if renderSection(showSection)}
        <svelte:component this={renderSection(showSection)} />
    {/if}
</div>