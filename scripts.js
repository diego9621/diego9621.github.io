// Smooth Scrolling Functionality
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        console.log(`Anchor clicked: ${targetId}`); // Debug log
        if (target) {
            console.log(`Scrolling to: ${targetId}`); // Debug log
            window.scrollTo({
                top: target.offsetTop - 60,
                behavior: 'smooth'
            });
        } else {
            console.error(`Element with ID ${targetId} not found.`);
        }
    });
});
