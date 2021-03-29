<script>
    let title = "",
        task = "";
    let tasks = [];

    $: {
        console.log(tasks);
    }
	function clearForm() {
		title = "",
        task = "";
	}
    function addTask(newTask) {
        tasks = [...tasks, newTask];
		clearForm();
    }
    function handleClick() {
        addTask({ title, task });
    }
</script>

<main class="container col-sm-3">
    <form class='p-4 bg-light'>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Title</label>
            <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="titulo de la tarea"
                required
                bind:value={title}
            />
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Task</label>
            <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="ingresa tu que hacer"
                required
                bind:value={task}
            />
        </div>
        <button
            type="submit"
            class="btn btn-primary"
            on:click|preventDefault={handleClick}>Submit</button
        >
    </form>
</main>

<style>
</style>
