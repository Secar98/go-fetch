<script lang="ts">
  import { Greet } from "../wailsjs/go/main/App.js";
    import About from "./routes/About.svelte";
  import Home from "./routes/Home.svelte";
  import NotFound from "./routes/NotFound.svelte";
  import Router from 'svelte-spa-router'

  let resultText: string = "Please enter your name 👇";
  let name: string;

  function greet(): void {
    Greet(name).then((result) => (resultText = result));
  }

  const routes = {
    "/": Home,
    "/about": About,
    "*": NotFound,
  };
</script>

<main>
  <Router {routes}/>
</main>
