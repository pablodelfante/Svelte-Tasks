<script>
    import { fade } from "svelte/transition";

    /* esto no es tan aconsejable en Svelte
    es mejor export let name = value */
    const { plants, getDataForUpdate, deleteData } = $$props;
</script>

<!-- component -->
<div class="shadow overflow-x-auto rounded border-b border-gray-200">
    <table class="min-w-full bg-white">
        <thead class="bg-gray-800 text-white">
            <tr>
                <th class="text-left py-3 px-4 uppercase font-semibold text-sm"
                    >Name</th
                >
                <th class="text-left py-3 px-4 uppercase font-semibold text-sm"
                    >Description</th
                >
                <th class="text-left py-3 px-4 uppercase font-semibold text-sm"
                    >Update</th
                >
                <th class="text-left py-3 px-4 uppercase font-semibold text-sm"
                    >Delete</th
                >
            </tr>
        </thead>
        <tbody class="text-gray-700">
            {#each plants as plant}
                <tr class="bg-gray-100">
                    <td
                        data-id={plant._id}
                        transition:fade
                        class="text-left py-3 px-4"
                    >
                        {plant.name}
                    </td>
                    <td class="text-left py-3 px-4">{plant.details}</td>
                    <td class="text-left py-3 px-4">
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
                        >
                    </td>
                    <td class="text-left py-3 px-4">
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
                        >
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
