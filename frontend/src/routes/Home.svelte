<script>
    import DropDown from "../components/DropDown.svelte";
    import Container from "../components/Container.svelte";
    import RequestContainer from "../components/RequestContainer.svelte";
    import ResponseContainer from "../components/ResponseContainer.svelte";
</script>

<Container>
    <div class="grid grid-cols-6 gap-2">
        <DropDown styles="col-span-1" />
        <input
            type="text"
            placeholder="http://localhost:8080"
            class="input input-bordered input-primary col-span-4"
        />
        <button class="btn btn-success col-span-1">Send</button>
    </div>
    <div class="grid grid-cols-2 mt-6 gap-2 rounded">
        <RequestContainer />
        <ResponseContainer />
    </div>
</Container>
