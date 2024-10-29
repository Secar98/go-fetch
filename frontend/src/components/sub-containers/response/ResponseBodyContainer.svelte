<script lang="ts">
    import { httpResponseStore } from "../../../stores/http-response-store";

    let response;
    let statusCodeStyle: string;
    let json;

    $: response = $httpResponseStore;

    $: {
        try {
            response.Body = JSON.parse(response.Body);
            response.Body = JSON.stringify(response.Body, null, 2);
        } catch (error) {
            json = response.Body;
        }

        if (response.StatusCode != undefined) {
            statusCodeStyle = response.StatusCode >= 200 && response.StatusCode < 400
                ? "badge-success"
                : "badge-error";
        }
    }

    function copyToClipboard() {
        const copyContent = response.Body;
        navigator.clipboard.writeText(copyContent);
    }
</script>

<main>
    <div>
        <p class="badge {statusCodeStyle}">StatusCode: {response.StatusCode ?? ' '}</p>
    </div>
    <div class="mt-4 relative">
        <pre
            class="w-full p-2 border border-gray-300 rounded-md font-mono resize-none"
            style="height: 400px; overflow-y: auto;"
        >{response.Body ?? "No Body"}</pre>
        <button
            class="absolute top-2 right-2 btn btn-xs btn-primary text-white"
            on:click={copyToClipboard}
        >
            Copy
        </button>
    </div>
</main>