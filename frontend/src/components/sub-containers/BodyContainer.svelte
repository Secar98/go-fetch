<script lang="ts">
    import Router, { link } from 'svelte-spa-router'
    import JsonContainer from "./Json.svelte";
    import Table from './Table.svelte';

    const prefix = '/home/body'
    const routes = {
        '/json': JsonContainer,
        '/form-data': Table,
    }
</script>

<div>
    <div class="grid grid-flow-col justify-start gap-2 mb-4">
        <a href="/home/body/json" use:link class="btn btn-xs">Json</a>
        <a href="/home/body/form-data" use:link class="btn btn-xs">Form Data</a>
    </div>
    
    <Router {routes} {prefix} />
</div>