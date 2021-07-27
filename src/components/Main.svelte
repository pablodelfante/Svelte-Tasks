<script>
    import db from "./../helpers/db";
    import Button from "./Button.svelte";
    import Table from './Table.svelte';

    // let plants = [];
    let name = "";
    let details = "";
    let idToUpdate = "";
    let addButton = true;

    const plants = [
    {
        "details": "La menta piperita es una planta medicinal digestiva, analgésica y antiséptica",
        "name": "Menta",
        "_id": "6B15n6sn78fckithvoPI"
    },
    {
        "name": "Caléndula",
        "details": "La caléndula es una de las hierbas medicinales más populares y versátiles. Se ha dicho tradicionalmente que levanta el ánimo.",
        "_id": "DP6YyhnevT0y7pB5XwPE"
    },
    {
        "name": "Áloe vera",
        "details": "Aloe vera es una planta medicinal refrescante y cicatrizante",
        "_id": "F2kC0pN6jlALvbNm88aR"
    },
    {
        "name": "Manzanilla",
        "details": "La manzanilla es nativa de Europa, Oriente Próximo y la India y se utiliza para desórdenes digestivos o nerviosos",
        "_id": "busc7m4r7emqlf1WhZyg"
    }
]

    // read data from firestore and get data of changes
 /*    db.collection("pwa-plants").onSnapshot(snapshot => {
        plants = [];
        snapshot.forEach(doc => {
            const newPlant = doc.data();
            newPlant._id = doc.id;
            plants = [...plants, newPlant];
        });
    }); */

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

<div class="container my-5 max-w-md">
    <h3 class="text-2xl">Insert and update plants</h3>

    <form action="#" class="grid gap-5 py-8">
        <div class="grid">
            <label for="fname" class="font-light">Name:</label>
            <input
                type="text"
                class="border-4 border-gray-200"
                id="fname"
                name="name"
                bind:value={name}
            />
        </div>

        <div class="grid">
            <label for="fname" class="font-light">Details:</label>
            <textarea
                bind:value={details}
                class="border-4 border-gray-200"
                id="exampleTextarea"
                rows="3"
            />
        </div>

        {#if addButton}
            <Button handle={sendData} text="ADD PLANT" />
        {:else}
            <Button handle={updateData} text="UPDATE PLANT" />
        {/if}
    </form>
</div>



<!-- component -->
<Table {...{plants, getDataForUpdate, deleteData}}/>