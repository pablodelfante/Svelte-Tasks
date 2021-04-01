<script>
    import Btn from "./Btn.svelte";
    import db from "./../firebase.js";
    import Modal from "./Modal.svelte";

    let task = {
        title: "",
        task: "",
    };
    let tasks = [];
    let isUpdate = false;

    let idForModal = null;

    $: {
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

    const clearFormAndTasks = () => {
        task = {
            title: "",
            task: "",
        };
        tasks = [];
    };
    const addTask = async newTask => {
        clearFormAndTasks();
        if (!isUpdate) {
            const res = await db.collection("tasks").add(newTask);
            return res.id;
        }
        // get document
        const document = db.collection("tasks").doc(newTask.id);
        // set data
        const response = await document.update(newTask);
        isUpdate = false;
    };
    const deleteTask = async id => {
        clearFormAndTasks();
        const res = await db.collection("tasks").doc(id).delete();
    };
    const updateTask = async taskTarget => {
        task.title = taskTarget.title;
        task.task = taskTarget.task;
        task.id = taskTarget.id;
        isUpdate = true;
    };
    const cancel = () => {
        task.title = "";
        task.task = "";
        isUpdate = false;
    };
    function handleClick() {
        addTask(task);
    }

    
    const passIdForModal = (id)=>{
        idForModal = id;
    }
</script>

<main class="container my-5">
    <form class="custom-shadow col-sm-3 m-auto p-4 shadow-sm bg-light">
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

        {#if !isUpdate}
            <Btn handle={handleClick} />
        {:else}
            <Btn handle={handleClick} text="UPDATE" />
            <Btn handle={cancel} text="CANCEL" />
        {/if}
    </form>
    <!-- --------- -->

    <div class="row mt-5">
        {#each tasks as task}
            <div
                class="custom-shadow card border-secondary m-3 shadow-sm"
                style="max-width: 18rem;"
            >
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
                    <!-- <button
                        type="submit"
                        class="btn btn-primary"
                        on:click|preventDefault={() => {
                            deleteTask(task.id);
                        }}>ELIMINAR</button
                    > -->

                    <Modal handle={deleteTask} reciveId={idForModal} />

                    <button
                        type="button"
                        class="btn btn-primary"
                        data-toggle="modal"
                        data-target="#modal"
                        on:click|preventDefault={passIdForModal(task.id)}
                    >
                        ELIMINAR2
                    </button>

                </div>
            </div>
        {/each}
    </div>
</main>

<style>
</style>
