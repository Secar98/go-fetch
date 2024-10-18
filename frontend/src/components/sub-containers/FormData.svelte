<script lang="ts">
    import Table from "./Table.svelte";
    import { httpStore, KeyValue } from '../../stores/http-store';
    import { get } from "svelte/store";
    let data: KeyValue[] = get(httpStore).formData;

    $: httpStore.update(store => {
        store.formData = data;
        return store;
    });
    
</script>

<Table bind:data />