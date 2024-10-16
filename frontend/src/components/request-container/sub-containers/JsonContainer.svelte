<script lang="ts">
    import { writable } from 'svelte/store';

    let jsonInput = writable<string>('');
    let parsedJson = writable<object | null>(null);
    let errorMessage = writable<string>('');

    function handleJsonInput(event: Event) {
        const input = (event.target as HTMLTextAreaElement).value;
        jsonInput.set(input);

        try {
            const parsed = JSON.parse(input);
            parsedJson.set(parsed);
            errorMessage.set('');
        } catch (error) {
            parsedJson.set(null);
            errorMessage.set('Invalid JSON');
        }
    }

    function handleKeydown(event: KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault();
            const textarea = event.target as HTMLTextAreaElement;
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;

            jsonInput.update(value => {
                const newValue = value.substring(0, start) + '\t' + value.substring(end);
                textarea.value = newValue;
                textarea.selectionStart = textarea.selectionEnd = start + 1;
                return newValue;
            });
        }
    }
</script>

<div class="p-4">
    <textarea
        class="w-full h-48 p-2 border border-gray-300 rounded-md font-mono resize-none"
        placeholder="Enter JSON here..."
        on:input={handleJsonInput}
        on:keydown={handleKeydown}
    ></textarea>

    {#if $errorMessage}
        <p class="text-red-500 mt-4 text-lg font-semibold">{$errorMessage}</p>
    {/if}

    {#if $parsedJson}
        <h2 class="text-green-500 mt-4 text-lg font-semibold">Valid JSON:</h2>
        <pre class="bg-gray-100 p-2 rounded-md mt-2">{JSON.stringify($parsedJson, null, 2)}</pre>
    {/if}
</div>