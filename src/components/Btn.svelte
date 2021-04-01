<script>
    export let handle = null;
    export let text = 'AGREGAR';
</script>

<button
    type="submit"
    class="btn btn-primary"
    on:click|preventDefault={handle}>{text}</button
>
