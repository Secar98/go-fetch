<script lang="ts">
    import { onMount } from 'svelte';
    import { selectedMethod, HttpMethod, stringToHttpMethod } from '../stores/method-store';
    export let styles: string;
    let currentMethod;
    let methods = Object.values(HttpMethod);

    onMount(() => {
        const unsubscribe = selectedMethod.subscribe((value) => {
            currentMethod = value;
        });

        return () => {
            unsubscribe();
        }
    });

    function handleClick(event) {
        const value = (event.target as HTMLLIElement).innerText
        selectedMethod.set(stringToHttpMethod(value));
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
