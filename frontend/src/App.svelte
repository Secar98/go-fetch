<script lang="ts">
  import { Greet } from "../wailsjs/go/main/App.js";
  import About from "./routes/About.svelte";
  import Home from "./routes/Home.svelte";
  import NotFound from "./routes/NotFound.svelte";
  import Router from 'svelte-spa-router'

  // function greet(): void {
  //   Greet(name).then((result) => (resultText = result));
  // }
</script>

<Router
    routes={{
        "/home": Home,
        "/home/*": Home,
        "/about": About,
        "*": NotFound,
    }}
/>
