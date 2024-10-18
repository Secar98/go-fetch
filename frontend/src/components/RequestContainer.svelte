<script>
    import Router, { link } from 'svelte-spa-router'
    import BodyContainer from './sub-containers/BodyContainer.svelte';
    import HeadersContainer from './sub-containers/HeadersContainer.svelte';
    import QueryParamsContainer from './sub-containers/QueryParamsContainer.svelte';
    const prefix = '/home'
    const routes = {
        '/body': BodyContainer,
        '/body/*': BodyContainer,
        '/headers': HeadersContainer,
        '/query': QueryParamsContainer,
    }
</script>
<div>
    <h1 class="text-xl mb-4">Request</h1>
    <div class="grid grid-flow-col justify-start gap-2 mb-4">
        <a href="/home/body" use:link class="btn btn-sm">Body</a>
        <a href="/home/headers" use:link class="btn btn-sm">Headers</a>
        <a href="/home/query" use:link class="btn btn-sm">Params</a>
    </div>
    
    <Router {routes} {prefix} />
</div>


