<script lang="ts">
    export let formData: FormDataEntry[] = [];

    interface FormDataEntry {
        key: string;
        value: string;
    }

    function addRow() {
        formData = [...formData, { key: '', value: '' }];
    }

    function removeRow(index: number) {
        formData = formData.filter((_, idx) => idx !== index);
    }

    function updateKey(index: number, input: HTMLInputElement) {
        formData[index].key = input.value;
    }

    function updateValue(index: number, input: HTMLInputElement) {
        formData[index].value = input.value;
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
            {#each formData as { key, value }, index}
                <tr>
                    <td class="border border-gray-300">
                        <input
                            type="text"
                            class="input input-xs w-full border-none"
                            bind:value={key}
                            on:input={(e) => updateKey(index, e.currentTarget)}
                        />
                    </td>
                    <td class="border border-gray-300">
                        <input
                            type="text"
                            class="input input-xs w-full border-none"
                            bind:value={value}
                            on:input={(e) => updateValue(index, e.currentTarget)}
                        />
                    </td>
                    <td class="border border-gray-300">
                        <button class="btn btn-xs rounded-md" on:click={() => removeRow(index)}>Remove</button>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
    <button class="btn btn-sm btn-primary text-white rounded-md m-2" on:click={addRow}>Add Row</button>
</div>