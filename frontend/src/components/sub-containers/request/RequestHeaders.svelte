<script lang="ts">
    import Table from "../Table.svelte";
    import { httpRequestStore } from '../../../stores/http-request-store';
    import { get } from "svelte/store";
    let data: Map<string,string> = get(httpRequestStore).headers;

    $: httpRequestStore.update(store => {
        store.headers = data;
        return store;
    });
    
</script>

<p class="badge badge-ghost mb-4">Headers</p>
<Table bind:data />