<script>
    import Head from "./components/Head.svelte";
    import Layout from "./components/Layout.svelte";
    import Main from "./components/Main.svelte";
    import "./global.css";
</script>

<Head />
<Layout>
    <Main />
</Layout>

<style global>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

</style>
