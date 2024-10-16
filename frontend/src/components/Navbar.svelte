<script>
    import { link } from 'svelte-spa-router';
</script>

<nav class="bg-gray-800 p-6 h-screen">
    <div class="container mx-auto flex flex-col justify-between items-start">
        <div class="text-white text-2xl font-bold mb-6">GO-Client</div>
        <div class="flex flex-col space-y-7 text-xl">
        <a href="/home" use:link class="text-gray-300 hover:text-white">Home</a>
        <a href="/about" use:link class="text-gray-300 hover:text-white">About</a>
        </div>
    </div>
</nav>