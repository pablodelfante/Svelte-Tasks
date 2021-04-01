<script>
    import { Router, Route, Link } from "svelte-navigator";
</script>

<Router>
    <header>
  
      <nav>
        <Link to="/">Home</Link>
        <Link to="Notes">Notes</Link>
      </nav>
    </header>
  
    <main>
      <Route path="login">
        
      </Route>
  
      <Route path="/">
       
      </Route>
    </main>
  </Router>