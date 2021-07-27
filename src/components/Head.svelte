<svelte:head>
    <title>PWA</title>

    <!-- icon for apple home -->
    <link rel="apple-touch-icon" href="/img/icons/192.png" />

    <!-- theme color xra barra del navegador -->
    <meta name="theme-color" content="#07BEB8" />

    <!-- Tipografías -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Fredericka+the+Great&family=Lato:wght@100;300;400;700&display=swap"
        rel="stylesheet"
    />

    <!-- asignar manifest json -->
    <link rel="manifest" href="./manifest.json" />

    <script>
        // Register your service worke
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register("./serviceWorker.js");
            //.then(reg => console.log('sw register', reg))
            //.catch(err => console.log('sw error', err))
        }

        // Then later, request a one-off sync: dispara evento de sincronización para ser escuchado
        navigator.serviceWorker.ready.then(function (swRegistration) {
            return swRegistration.sync.register("getDataSync");
        });
    </script>
</svelte:head>
