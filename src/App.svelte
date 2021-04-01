<script>
    import { Router, Route, Link } from "svelte-navigator";
    import Notes from "./components/Notes.svelte";
    import Cover from "./components/Cover.svelte";

    function burguerMenu() {
        this.classList.toggle("is-active");
    }
</script>

<Router>

    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            

            <button
                class="navbar-toggler hamburger hamburger--collapse p-2"
                type="button"

                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"

                on:click={burguerMenu}
            >
                <span class="hamburger-box">
                    <span class="hamburger-inner" />
                </span>
            </button>

            <div
                class="collapse navbar-collapse justify-content-center"
                id="navbarNav"
            >
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link to="/" class="nav-link">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="notes" class="nav-link">Notes</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>

    <main>
        <Route path="notes" primary = {false}>
            <Notes />
        </Route>

        <Route path="/" primary = {false}>
            <Cover></Cover>
        </Route>
    </main>
</Router>
