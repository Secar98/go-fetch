<script lang="ts">
    import { httpResponseStore } from "../../../stores/http-response-store";
    $: response = $httpResponseStore;
   
</script>

<main>
    <div>
        {#if response.Error != undefined}
            <p class="badge badge-error">Error: {response.Error}</p>
        {/if}
        {#if response.StatusCode != undefined}
            <p class="badge badge-primary">StatusCode: {response.StatusCode}</p>
        {/if}
    </div>
    <div class="mt-4">
        <textarea
            class="w-full h-56 p-2 border border-gray-300 rounded-md font-mono resize-none"
            >{response.Body ?? "No Body"}</textarea
        >
    </div>
</main>
