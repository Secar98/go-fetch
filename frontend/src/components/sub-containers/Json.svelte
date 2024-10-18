<script lang="ts">
    import { onMount } from "svelte";
    import { BodyType, httpStore, HttpStore } from "../../stores/http-store";
    import { get } from "svelte/store";
    let store: HttpStore = get(httpStore);

    onMount(() => {
        store.selectedBodyType = BodyType.JSON
        httpStore.set(store);
    });

    let jsonInput: string = store.json;
    let parsedJson: object | null = null;
    let errorMessage: string = '';

    $: httpStore.update(store => {
        store.json = jsonInput;
        return store;
    });

    function handleJsonInput(event: Event) {
        const input = (event.target as HTMLTextAreaElement).value;
        jsonInput = input;

        try {
            const parsed = JSON.parse(input);
            parsedJson = parsed;
            errorMessage = '';
        } catch (error) {
            parsedJson = null;
            errorMessage = 'Invalid JSON';
        }
    }

    function handleKeydown(event: KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault();
            const textarea = event.target as HTMLTextAreaElement;
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;

            jsonInput = jsonInput.substring(0, start) + '\t' + jsonInput.substring(end);
            textarea.value = jsonInput;
            textarea.selectionStart = textarea.selectionEnd = start + 1;
        }
    }
</script>

<div>
    <textarea
        class="w-full h-48 p-2 border border-gray-300 rounded-md font-mono resize-none"
        placeholder="Enter JSON here..."
        bind:value={jsonInput}
        on:input={handleJsonInput}
        on:keydown={handleKeydown}
    ></textarea>

    {#if errorMessage}
        <p class="text-red-500 mt-4 text-lg font-semibold">{errorMessage}</p>
    {/if}

    {#if parsedJson}
        <h2 class="text-green-500 mt-4 text-lg font-semibold">Valid JSON:</h2>
        <pre class="bg-gray-100 p-2 rounded-md mt-2">{JSON.stringify(parsedJson, null, 2)}</pre>
    {/if}
</div>