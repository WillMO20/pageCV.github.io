document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');

    if (!sidebar || !sidebarOverlay) return;

    // Abrir el menú lateral al hacer clic en "Menú"
    if (event.target.closest('#openSidebarBtn')) {
        event.preventDefault();
        sidebar.classList.add('open');
        sidebarOverlay.classList.add('show');
    }

    // Cerrar el menú lateral con la equis (X)
    if (event.target.closest('#closeSidebarBtn')) {
        sidebar.classList.remove('open');
        sidebarOverlay.classList.remove('show');
    }

    // Cerrar el menú si se hace clic fuera en el fondo oscuro
    if (event.target.id === 'sidebarOverlay') {
        sidebar.classList.remove('open');
        sidebarOverlay.classList.remove('show');
    }
});