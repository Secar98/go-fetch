<script lang="ts">
    import Table from "../Table.svelte";
    import { BodyType, HttpRequestStore, httpRequestStore } from '../../../stores/http-request-store';
    import { get } from "svelte/store";
    import { onMount } from "svelte";
    let store: HttpRequestStore = get(httpRequestStore);
    let data = store.formData;

    onMount(() => {
        store.selectedBodyType = BodyType.URL_ENCODED
        httpRequestStore.set(store);
    });

    $: httpRequestStore.update(store => {
        store.formData = data;
        return store;
    });

</script>

<Table bind:data />