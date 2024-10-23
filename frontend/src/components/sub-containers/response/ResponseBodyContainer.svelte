<script lang="ts">
    import { httpResponseStore } from "../../../stores/http-response-store";
    $: response = $httpResponseStore;

    let statusCodeStyle: string;

    $: {
        if (response.StatusCode != undefined) {
            statusCodeStyle = response.StatusCode >= 200 && response.StatusCode < 400
                ? "badge-success"
                : "badge-error";
        }
    }
</script>

<main>
    <div>
        {#if response.StatusCode != undefined}
            <p class="badge {statusCodeStyle}">StatusCode: {response.StatusCode}</p>
        {/if}
    </div>
    <div class="mt-4">
        <textarea
            class="w-full p-2 border border-gray-300 rounded-md font-mono resize-none"
            style="height: 400px; overflow-y: auto;"
            disabled
            >{response.Body ?? "No Body"}</textarea
        >
    </div>
</main>
