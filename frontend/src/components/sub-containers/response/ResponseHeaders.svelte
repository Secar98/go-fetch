<script lang="ts">
    import { httpResponseStore } from "../../../stores/http-response-store";
    import HeadersTable from "../HeadersTable.svelte";
    const headers: { key: string, value: string }[] = [];
    $: response = $httpResponseStore;

    $: {
        response,
        Object.entries(response.Headers ?? {}).map(([key, value]) => { 
                return {
                    key,
                    value: value.join(", ") 
                }
            }).forEach(header => {
                headers.push(header);
            });
    }

</script>

<HeadersTable {headers} />
