<script lang="ts">
    export let styles: string;

    let methods = ["GET", "POST", "OPTIONS"];
    let selectedMethod = methods[0];
</script>

<div class="dropdown">
    <div tabindex="0" role="button" class="btn w-full {styles}">
        {selectedMethod}
    </div>
    <ul class="dropdown-content menu bg-base-100 rounded z-[1] w-32 p-2 shadow">
        {#each methods as method}
            <li
            on:click={(event) => selectedMethod = event.target.innerText}
            on:keydown={(event) => { if (event.key === 'Enter' || event.key === ' ') { selectedMethod = event.target.innerText; event.preventDefault(); }}}
            tabindex="0"
            role="menuitem"
            class="menu-title cursor-pointer hover:bg-primary-content transition ease-in duration-200 rounded"
            >
                {method}
            </li>
        {/each}
    </ul>
</div>
