<script>
    import Head from "./components/Head.svelte";
    import Layout from "./components/Layout.svelte";
    import Main from "./components/Main.svelte";
</script>

<Head />
<Layout>
    <Main />
</Layout>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    body {
        background-color: #a77f4b;
        font-family: "Lato", sans-serif;
    }

    h1 {
        font-family: "Fredericka the Great", cursive;
    }

    input {
        border-radius: 255px 25px 225px 25px/25px 225px 25px 255px;
    }
</style>
