// Smooth Scrolling Functionality
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});

// Form Submission (Fake for Demonstration)
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Message sent successfully!');
    this.reset();
});
