<script>
    import Router, { link } from 'svelte-spa-router'
    import BodyContainer from './sub-containers/BodyContainer.svelte'
    import Headers from './sub-containers/request/RequestHeaders.svelte';
    import QueryParams from './sub-containers/request/RequestQueryParams.svelte';
    const prefix = '/home'
    const routes = {
        '/request-body': BodyContainer,
        '/request-body/*': BodyContainer,
        '/request-headers': Headers,
        '/request-query': QueryParams,
    }
</script>
<div>
    <h1 class="text-xl mb-4">Request</h1>
    <div class="grid grid-flow-col justify-start gap-2 mb-4">
        <a href="/home/request-body" use:link class="btn btn-sm">Body</a>
        <a href="/home/request-headers" use:link class="btn btn-sm">Headers</a>
        <a href="/home/request-query" use:link class="btn btn-sm">Params</a>
    </div>
    
    <Router {routes} {prefix} />
</div>


