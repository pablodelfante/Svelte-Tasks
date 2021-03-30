<script>
    import Btn from "./Btn.svelte";
    import db from "./firebase";

    let task = {
        title: "",
        task: "",
    };
    let tasks = [];

    $: {
        console.log(tasks);
    }

    // getDatos from firestore
    const colection = db.collection("tasks");
    const observer = colection.onSnapshot(
        querySnapshot => {
            querySnapshot.forEach(doc => {
                const newDoc = [{ ...doc.data(), id: doc.id }];
                tasks = [...tasks, ...newDoc];
            });
        },
        err => {
            console.log(`error: ${err}`);
        }
    );
    // ---------------

    function clearForm() {
        task = {
            title: "",
            task: "",
        };
    }
    const addTask = newTask => {
        tasks = [...tasks, newTask];
        clearForm();
    };
    const deleteTask = task => {
        console.log(task);
    };
    const updateTask = task => {
        console.log(task);
    };
    function handleClick() {
        addTask(task);
    }
</script>

<main class="container col-sm-3 my-5">
    <form class="p-4 bg-light">
        <fieldset class="font-weight-bold mb-3">Asignador de tareas</fieldset>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Title</label>
            <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="titulo de la tarea"
                required
                bind:value={task.title}
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
                bind:value={task.task}
            />
        </div>
        <Btn handle={handleClick} />
    </form>
    <!-- --------- -->

    <div class="mt-5">
        {#each tasks as task}
            <div class="card border-secondary mb-3" style="max-width: 18rem;">
                <div class="card-header">{task.title}</div>
                <div class="card-body text-secondary">
                    <h5 class="card-title">{task.title}</h5>
                    <p class="card-text">{task.task}</p>
                </div>
                <div class="card-footer">
                    <button
                        type="submit"
                        class="btn btn-primary"
                        on:click|preventDefault={() => {
                            updateTask(task);
                        }}>EDITAR</button
                    >
                    <button
                        type="submit"
                        class="btn btn-primary"
                        on:click|preventDefault={() => {
                            deleteTask(task);
                        }}>ELIMINAR</button
                    >
                </div>
            </div>
        {/each}
    </div>
</main>

<style>
</style>
