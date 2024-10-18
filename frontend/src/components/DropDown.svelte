<script lang="ts">
    import { HttpMethod, httpRequestStore, stringToHttpMethod } from '../stores/http-request-store';
    import { get } from 'svelte/store';
    export let styles: string;
    const store = get(httpRequestStore)
    let currentMethod = store.method;
    let methods = Object.values(HttpMethod);

    function handleClick(event) {
        const value = (event.target as HTMLLIElement).innerText
        httpRequestStore.update(store => {
            store.method = stringToHttpMethod(value);
            return store;
        });
        currentMethod = HttpMethod[value];
    }
    
</script>

<div class="dropdown">
    <div tabindex="0" role="button" class="btn w-full {styles}">
        {currentMethod}
    </div>
    <ul class="dropdown-content menu bg-base-100 rounded z-[1] w-32 p-2 shadow">
        {#each methods as method}
            <li
            on:click={(event) => handleClick(event)}
            on:keydown={(event) => { if (event.key === 'Enter' || event.key === ' ') { handleClick(event); } }}
            tabindex="0"
            role="menuitem"
            class="menu-title cursor-pointer hover:bg-primary-content transition ease-in duration-200 rounded"
            >
                {method}
            </li>
        {/each}
    </ul>
</div>
