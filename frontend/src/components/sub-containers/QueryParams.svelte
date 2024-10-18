<script lang="ts">
    import Table from "./Table.svelte";
    import { httpStore, KeyValue } from '../../stores/http-store';
    import { get } from "svelte/store";
    let data: KeyValue[] = get(httpStore).queryParameters;

    $: httpStore.update(store => {
        store.queryParameters = data;
        return store;
    });
    
</script>

<Table bind:data />