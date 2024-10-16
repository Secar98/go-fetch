<script>
    import Navbar from "./Navbar.svelte";

</script>
<main>
    <div class="grid grid-cols-6">
        <div class="col-span-1">
            <Navbar />
        </div>
        <div class="m-4 col-span-5">
            <slot />
        </div>
    </div>
</main>