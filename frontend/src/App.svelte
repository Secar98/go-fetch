<script lang="ts">
  import About from "./routes/About.svelte";
  import Home from "./routes/Home.svelte";
  import NotFound from "./routes/NotFound.svelte";
  import Router from 'svelte-spa-router'
</script>

<Router
    routes={{
        "/": Home,
        "/home": Home,
        "/home/*": Home,
        "/about": About,
        "*": NotFound,
    }}
/>
