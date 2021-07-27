<script>
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";
</script>

<Header />
<main class="max-w-7xl mx-auto px-3">
    <slot />
</main>
<Footer />

