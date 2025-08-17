// Smooth scrolling for navbar links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Example: Simple greeting in console
console.log("Welcome to Rohit Yadav's Portfolio 🚀");
