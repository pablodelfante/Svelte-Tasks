<script>
    export let handle = null;
    export let text = null;
</script>

<input
    on:click|preventDefault={handle}
    type="submit"
    class="btn btn-outline-primary my-3"
    value={text}
/>
