<script lang="ts">
    import Table from "./Table.svelte";
    import { httpStore, KeyValue } from '../../stores/http-store';
    import { get } from "svelte/store";
    let data: KeyValue[] = get(httpStore).headers;

    $: httpStore.update(store => {
        store.headers = data;
        return store;
    });
    
</script>

<Table bind:data />