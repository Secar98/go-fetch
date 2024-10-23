<script>
    import DropDown from "../components/DropDown.svelte";
    import Container from "../components/Container.svelte";
    import RequestContainer from "../components/RequestContainer.svelte";
    import  ResponseContainer from "../components/ResponseContainer.svelte";
    import { httpRequestStore } from "../stores/http-request-store";
    import sendRequest from "../api/send-request";
    import { get } from "svelte/store";
    let input = get(httpRequestStore).url;

    $: input, httpRequestStore.update(store => {
        store.url = input;
        return store;
    });

    function onEnter(event) {
        if (event.key === 'Enter') {
            sendRequest();
        }
    }

</script>

<Container>
    <div class="grid grid-cols-6 gap-2">
        <DropDown styles="col-span-1" />
        <input
            type="text"
            placeholder="http://localhost:8080"
            class="input input-bordered input-primary col-span-4"
            bind:value={input}
            on:keydown={onEnter}
        />
        <button on:click={sendRequest} class="btn btn-success col-span-1">Send</button>
    </div>
    <div class="grid grid-cols-2 mt-6 gap-2 rounded">
        <RequestContainer />
        <ResponseContainer />
    </div>
</Container>
