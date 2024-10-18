<script lang="ts">
    import Table from "./Table.svelte";
    import { httpRequestStore } from '../../stores/http-request-store';
    import { get } from "svelte/store";
    let data: Map<string,string> = get(httpRequestStore).headers;

    $: httpRequestStore.update(store => {
        console.log(data);
        store.headers = data;
        return store;
    });
    
</script>

<Table bind:data />