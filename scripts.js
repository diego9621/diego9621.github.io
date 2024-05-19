document.addEventListener('DOMContentLoaded', function () {
    // Smooth Scrolling Functionality
    document.querySelectorAll('.nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);

            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 60,
                    behavior: 'smooth'
                });
            } else {
                console.error(`Element with ID ${targetId} not found.`);
            }
        });
    });

    // Form Submission (Fake for Demonstration)
    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Message sent successfully!');
        this.reset();
    });
});
