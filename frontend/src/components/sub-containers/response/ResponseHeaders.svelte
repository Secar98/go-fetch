<script lang="ts">
    import { httpResponseStore } from "../../../stores/http-response-store";
    import HeadersTable from "./HeadersTable.svelte";
    let headers: { key: string, value: string }[] = [];
    $: response = $httpResponseStore;

    $: {
        response,
        Object.entries(response.Headers ?? {}).map(([key, value]) => { 
                return {
                    key,
                    value: value.join(", ") 
                }
            }).map(header => {
                headers.push(header);
            });
        headers = headers;
    }

</script>

<HeadersTable {headers} />
