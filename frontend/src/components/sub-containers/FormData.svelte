<script lang="ts">
    import Table from "./Table.svelte";
    import { BodyType, HttpStore, httpStore } from '../../stores/http-store';
    import { get } from "svelte/store";
    import { onMount } from "svelte";
    let store: HttpStore = get(httpStore);
    let data = store.formData;

    onMount(() => {
        store.selectedBodyType = BodyType.FORM_DATA
        httpStore.set(store);
    });

    $: httpStore.update(store => {
        store.formData = data;
        return store;
    });

</script>

<Table bind:data />