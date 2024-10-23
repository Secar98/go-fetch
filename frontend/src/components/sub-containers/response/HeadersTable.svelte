<script lang="ts">
    export let headers: { key: string; value: string }[] = [];
</script>

<p class="badge badge-ghost mb-4">Headers</p>
<div class="overflow-x-auto border rounded-md" style="height: 400px; overflow-y: auto;">
    <table class="table table-sm">
        <thead>
            <tr>
                <th class="border-gray-300 rounded-md">Key</th>
                <th class="border-gray-300 rounded-md">Value</th>
            </tr>
        </thead>
        <tbody>
            {#each headers as { key, value }}
                <tr>
                    <td class="border-gray-300">
                        <p class="w-full border-none">
                            {key}
                        </p>
                    </td>
                    <td class="border-gray-300">
                        <p class="w-full border-none">
                            {value}
                        </p>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>