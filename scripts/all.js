window.addEventListener('DOMContentLoaded', () => {
//menu
 /*   try {
        let menuBtn = document.querySelector('.hb-sidebar-trigger');
        let sidebar = document.querySelector('.hb-aside');
        let activeClass = 'active';
        menuBtn.addEventListener('click', () => {
            sidebar.classList.toggle(activeClass);
            menuBtn.classList.toggle(activeClass);
        });
    } catch (e) {
        console.log(e);
    }*/
    // The try/catch block ensures the script doesn't crash if the elements don't exist
    try {
        const menuBtn = document.querySelector('.hb-sidebar-trigger');
        const sidebar = document.querySelector('.hb-aside');
        const activeClass = 'active';

        // 1. Existing toggle logic
        menuBtn.addEventListener('click', (event) => {
            // Stop the click from immediately bubbling up to the document listener below
            event.stopPropagation();
            sidebar.classList.toggle(activeClass);
            menuBtn.classList.toggle(activeClass);
        });

        // 2. New logic: Close on outside click
        document.addEventListener('click', (event) => {
            // Check if the click occurred outside BOTH the sidebar and the menu button.
            // .contains() checks if the clicked element (event.target) is a descendant of the element.
            const isClickInsideSidebar = sidebar.contains(event.target);
            const isClickInsideMenuBtn = menuBtn.contains(event.target);

            // If the click is NOT inside the sidebar AND NOT inside the button, and the sidebar is currently open:
            if (!isClickInsideSidebar && !isClickInsideMenuBtn && sidebar.classList.contains(activeClass)) {

                // Remove the active class from both elements
                sidebar.classList.remove(activeClass);
                menuBtn.classList.remove(activeClass);
            }
        });

    } catch (e) {
        console.error("Error initializing menu logic:", e);
    }

    //scrollspy init
   /* try {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sidebarNav',
            //offset: 150,                // same as your data-bs-offset
            // rootMargin: '0px 0px -40%' // optional: fine-tune when items become active
        });
    } catch (e) {
        console.log(e)
    }*/
})