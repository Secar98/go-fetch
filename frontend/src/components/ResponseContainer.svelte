<script>
    import Router, { link } from 'svelte-spa-router'
    import ResponseBodyContainer from './sub-containers/response/ResponseBodyContainer.svelte'
    import ResponseHeaders from './sub-containers/response/ResponseHeaders.svelte';
    const prefix = '/home'
    const routes = {
        '/response-body': ResponseBodyContainer,
        '/response-body/*': ResponseBodyContainer,
        '/response-headers': ResponseHeaders,
    }
</script>
<div>
    <h1 class="text-xl mb-4">Response</h1>
    <div class="grid grid-flow-col justify-start gap-2 mb-4">
        <a href="/home/response-body" use:link class="btn btn-sm">Body</a>
        <a href="/home/response-headers" use:link class="btn btn-sm">Headers</a>
    </div>
    
    <Router {routes} {prefix} />
</div>


