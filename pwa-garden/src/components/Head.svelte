<svelte:head>
    <title>PWA</title>

    <!-- icon for apple home -->
    <link rel="apple-touch-icon" href="/img/icons/192.png" />

    <!-- theme color xra barra del navegador -->
    <meta name="theme-color" content="#C4FFF9" />

    <!-- css bootstrap -->
    <link rel="stylesheet" href="./bootstrap.min.css" />

    <!-- asignar manifest json -->
    <link rel="manifest" href="./manifest.json" />

    <!-- service worker register -->
    <script>
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register("./serviceWorker.js");
            //.then(reg => console.log('sw register', reg))
            //.catch(err => console.log('sw error', err))
        }
    </script>

  
</svelte:head>
