<script lang="ts">
    export let data: Map<string, string>;

    function addRow() {
        data.set('', '');
        data = new Map(data)
    }

    function removeRow(key: string) {
        data.delete(key);
        data = new Map(data);
    }

    function updateKey(oldKey: string, newKey: string) {
        if (newKey !== oldKey && !data.has(newKey)) {
            const value = data.get(oldKey);
            if (value !== undefined) {
                data.delete(oldKey);
                data.set(newKey, value);
                data = new Map(data);
            }
        }
    }

    function updateValue(key: string, value: string) {
        data.set(key, value);
        data = new Map(data);
    }
</script>

<div class="overflow-x-auto border rounded-md">
    <table class="table table-sm">
        <thead>
            <tr>
                <th class="border border-gray-300 rounded-md">Key</th>
                <th class="border border-gray-300 rounded-md">Value</th>
                <th class="border border-gray-300 rounded-md">Actions</th>
            </tr>
        </thead>
        <tbody>
            {#each Array.from(data.entries()) as [key, value]}
                <tr>
                    <td class="border border-gray-300">
                        <input
                            type="text"
                            class="input input-xs w-full border-none"
                            value={key}
                            on:blur={(e) => updateKey(key, e.currentTarget.value)}
                        />
                    </td>
                    <td class="border border-gray-300">
                        <input
                            type="text"
                            class="input input-xs w-full border-none"
                            value={value}
                            on:blur={(e) => updateValue(key, e.currentTarget.value)}
                        />
                    </td>
                    <td class="border border-gray-300">
                        <button class="btn btn-xs btn-error rounded-md" on:click={() => removeRow(key)}>Remove</button>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
    <button class="btn btn-xs btn-primary text-white rounded-md m-2" on:click={addRow}>Add Row</button>
</div>