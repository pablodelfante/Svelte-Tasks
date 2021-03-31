<script>
    export let handle = nul;

    
    const hideModal = ()=>{
        document.querySelector('.modal-backdrop').classList.remove('modal-backdrop');
    }
</script>

<div
    class="modal fade"
    id="modal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
>
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Confirmacion</h5>
                <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                >
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">Seguro queres borrar el elemento?</div>
            <div class="modal-footer">
                <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal">Cerrar</button
                >
                <button type="button" class="btn btn-primary" on:click={hideModal} on:click={handle()} >Confirmar</button>
            </div>
        </div>
    </div>
</div>

<button
    type="button"
    class="btn btn-primary"
    data-toggle="modal"
    data-target="#modal"
>
    ELIMINAR2
</button>
