<script>
    export let handle = null;
    export let text = null;
</script>

<input
    on:click|preventDefault={handle}
    type="submit"
    class="h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-700  focus:shadow-outline hover:bg-gray-800"
    value={text}
/>