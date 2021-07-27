<script>
    import { fade } from "svelte/transition";

    let menuMobile = false;
    const handleMenu = () => {
        menuMobile = !menuMobile;
    };
</script>

<header class="bg-white dark:bg-gray-800">
    <!-- menu desktop -->
    <div class="flex items-center justify-between h-16 | max-w-7xl mx-auto px-8">
        <div class=" flex items-center">
            <a class="flex-shrink-0" href="/">
                <img class="w-11" src="img/icons/192.png" alt="Workflow" />
            </a>
            <div class="hidden md:block">
                <div class="flex items-baseline space-x-4">
                    <a
                        class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        href="/"
                    >
                        <h1 class="text-4xl">Garden app</h1>
                    </a>
                </div>
            </div>
        </div>
        <div class="block">
            <div class="ml-4 flex items-center md:ml-6" />
        </div>
        <div class="-mr-2 flex md:hidden">
            <button
                on:click={handleMenu}
                class="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
                <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="h-8 w-8"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"
                    />
                </svg>
            </button>
        </div>
    </div>

    <!-- menu mobile -->
    {#if menuMobile}
        <nav transition:fade class="md:hidden">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                    class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    href="/"
                >
                    Fake menu
                </a>
                <a
                    class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    href="/"
                >
                    Fake item
                </a>
            </div>
        </nav>
    {/if}
</header>
