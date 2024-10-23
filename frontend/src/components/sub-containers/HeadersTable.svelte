<script lang="ts">
    export let headers: { key: string; value: string }[] = [];
</script>

<div class="overflow-x-auto border rounded-md" style="max-height: 400px; overflow-y: auto;">
    <table class="table table-sm">
        <thead>
            <tr>
                <th class="border border-gray-300 rounded-md">Key</th>
                <th class="border border-gray-300 rounded-md">Value</th>
            </tr>
        </thead>
        <tbody>
            {#each headers as { key, value }}
                <tr>
                    <td class="border border-gray-300">
                        <p class="w-full border-none">
                            {key}
                        </p>
                    </td>
                    <td class="border border-gray-300">
                        <p class="w-full border-none">
                            {value}
                        </p>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>