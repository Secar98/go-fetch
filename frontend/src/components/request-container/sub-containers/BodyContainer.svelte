<script lang="ts">
    import Router, { link } from 'svelte-spa-router'
    import JsonContainer from "./JsonContainer.svelte";

    const prefix = '/home/body'
    const routes = {
        '/json': JsonContainer,
    }
</script>

<div>
    <div class="grid grid-flow-col justify-start gap-2 mb-4">
        <a href="/home/body/json" use:link class="btn btn-xs">Json</a>
    </div>
    
    <Router {routes} {prefix} />
</div>