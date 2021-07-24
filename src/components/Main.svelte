<script>
    import db from "./../helpers/db";
    import { fade } from "svelte/transition";
    import Header from "./Header.svelte";
    import Button from "./Button.svelte";

    let plants = [];
    let name = "";
    let details = "";
    let idToUpdate = "";
    let addButton = true;

    // read data from firestore and get data of changes
    db.collection("pwa-plants").onSnapshot(snapshot => {
        plants = [];
        snapshot.forEach(doc => {
            const newPlant = doc.data();
            newPlant._id = doc.id;
            plants = [...plants, newPlant];
        });
    });

    // write data on firestore
    const sendData = e => {
        const data = {
            name,
            details,
        };

        db.collection("pwa-plants")
            .add(data)
            .then(() => {
                name = "";
                details = "";
            })
            .catch(err => console.log("err to send data"));
    };

    const updateData = async () => {
        const data = { name, details };
        // console.log(data, _id)
        const res = await db
            .collection("pwa-plants")
            .doc(idToUpdate)
            .update(data)
            .catch(err => console.log("error on update"));

        name = "";
        details = "";
        addButton = true;
    };

    const getDataForUpdate = ({ _id, name: nam, details: det }) => {
        idToUpdate = _id;
        name = nam;
        details = det;
        addButton = false;
    };

    const deleteData = _id => {
        db.collection("pwa-plants")
            .doc(_id)
            .delete()
            .catch(err => {
                console.log("error to delete data");
            });
    };
</script>

<Header />

<div class="my-5">
    <h3>Insert and update plants</h3>
    <form action="#">
        <label for="fname">Name:</label><br />
        <input type="text" id="fname" name="name" bind:value={name} /><br />

        <label for="fname">Details:</label><br />
        <textarea
            bind:value={details}
            class="form-control w-auto"
            id="exampleTextarea"
            rows="3"
        />

        {#if addButton}
            <Button handle={sendData} text="ADD PLANT" />
        {:else}
            <Button handle={updateData} text="UPDATE PLANT" />
        {/if}
    </form>
</div>

<div class="table-responsive">
    <table class="table table-hover">
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Update</th>
                <th scope="col">Delete</th>
            </tr>
        </thead>
        <tbody>
            {#each plants as plant}
                <tr class="table-light">
                    <td data-id={plant._id} transition:fade>
                        {plant.name}
                    </td>
                    <td>{plant.details}</td>
                    <td>
                        <svg
                            on:click={() => getDataForUpdate(plant)}
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 0 24 24"
                            width="24px"
                            fill="#000000"
                            ><path d="M0 0h24v24H0z" fill="none" /><path
                                d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                            /></svg
                        ></td
                    >
                    <td>
                        <svg
                            on:click={() => deleteData(plant._id)}
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 0 24 24"
                            width="24px"
                            fill="#000000"
                            ><path d="M0 0h24v24H0V0z" fill="none" /><path
                                d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"
                            /></svg
                        ></td
                    >
                </tr>
            {/each}
        </tbody>
    </table>
</div>
