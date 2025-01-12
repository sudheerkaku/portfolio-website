// Toggle navigation menu visibility
function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
}

// Smooth scrolling behavior for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Filter projects by category
function filterProjects(category) {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        if (category === 'all' || project.dataset.category === category) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

// Lightbox effect for project images
function openLightbox(img) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = img.src;
    lightbox.style.display = 'block';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

// Form validation and real-time feedback
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting and refreshing the page
    validateForm();
});

function validateForm() {
    let valid = true;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    const formFeedback = document.getElementById('form-feedback');

    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    formFeedback.textContent = '';

    if (name === '') {
        nameError.textContent = 'Name is required';
        valid = false;
    }

    if (email === '') {
        emailError.textContent = 'Email is required';
        valid = false;
    } else if (!validateEmail(email)) {
        emailError.textContent = 'Invalid email format';
        valid = false;
    }

    if (message === '') {
        messageError.textContent = 'Message is required';
        valid = false;
    }

    if (valid) {
        formFeedback.textContent = 'Form submitted successfully!';
        formFeedback.style.color = 'green';
    } else {
        formFeedback.textContent = 'Please correct the errors above';
        formFeedback.style.color = 'red';
    }

    return valid;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Real-time feedback for form fields
document.getElementById('name').addEventListener('input', function() {
    const nameError = document.getElementById('name-error');
    if (this.value === '') {
        nameError.textContent = 'Name is required';
    } else {
        nameError.textContent = '';
    }
});

document.getElementById('email').addEventListener('input', function() {
    const emailError = document.getElementById('email-error');
    if (this.value === '') {
        emailError.textContent = 'Email is required';
    } else if (!validateEmail(this.value)) {
        emailError.textContent = 'Invalid email format';
    } else {
        emailError.textContent = '';
    }
});

document.getElementById('message').addEventListener('input', function() {
    const messageError = document.getElementById('message-error');
    if (this.value === '') {
        messageError.textContent = 'Message is required';
    } else {
        messageError.textContent = '';
    }
});