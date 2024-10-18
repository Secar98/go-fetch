<script lang="ts">
    import Table from "./Table.svelte";
    import { httpRequestStore, KeyValue } from '../../stores/http-request-store';
    import { get } from "svelte/store";
    let data: KeyValue[] = get(httpRequestStore).headers;

    $: httpRequestStore.update(store => {
        store.headers = data;
        return store;
    });
    
</script>

<Table bind:data />