<script>
    import DropDown from "../components/DropDown.svelte";
    import Container from "../components/Container.svelte";
    let name = "";
</script>

<Container>
    <div class="grid grid-cols-6 gap-2">
        <DropDown styles="col-span-1" />
        <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-primary col-span-4"
        />
        <button class="btn btn-success col-span-1">Send</button>
    </div>
</Container>
