<script lang="ts">
    import { httpResponseStore } from "../stores/http-response-store";
    import HeadersTable from "./sub-containers/HeadersTable.svelte";
    const headers: { key: string, value: string }[] = [];
    $: response = $httpResponseStore;
    $: {
        response,
        Object.entries(response.Headers ?? {}).map(([key, value]) => { 
                return {
                    key,
                    value: value.join(", ") 
                }
            }).forEach(header => {
                console.log(header);
                headers.push(header);
            });
    }
</script>

<main>
    <h1 class="text-xl mb-4">Request</h1>
    <div>
        {#if response.Error != undefined}
            <p class="badge badge-error">Error: {response.Error}</p>
        {/if}
        {#if response.StatusCode != undefined}
            <p class="badge badge-primary">StatusCode: {response.StatusCode}</p>
        {/if}
       <HeadersTable {headers} />
    </div>
    <div class="">
        <textarea
            class="w-full h-full p-2 border border-gray-300 rounded-md font-mono resize-none"
            >{response.Body ?? "No Body"}</textarea
        >
    </div>
</main>
