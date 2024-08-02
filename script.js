document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    // Apply startup animation to section 1
    const section1 = document.getElementById('section1');
    section1.classList.add('startup-animation');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: [0, 1]
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                switch (entry.target.id) {
                    case 'section2':
                        entry.target.classList.add('slideInRight');
                        break;
                    case 'section3':
                        entry.target.classList.add('slideInLeft');
                        break;
                    case 'section4':
                        entry.target.classList.add('zoomIn');
                        break;
                    case 'section5':
                        entry.target.classList.add('fadeInUp');
                        break;
                }
            } else {
                switch (entry.target.id) {
                    case 'section2':
                        entry.target.classList.remove('slideInRight');
                        entry.target.classList.add('slideOutRight');
                        break;
                    case 'section3':
                        entry.target.classList.remove('slideInLeft');
                        entry.target.classList.add('slideOutLeft');
                        break;
                    case 'section4':
                        entry.target.classList.remove('zoomIn');
                        entry.target.classList.add('zoomOut');
                        break;
                    case 'section5':
                        entry.target.classList.remove('fadeInUp');
                        entry.target.classList.add('fadeOutUp');
                        break;
                }
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.centered-links');
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
        if (window.scrollY < lastScrollY) {
            // Scrolling up
            nav.classList.remove('hidden');
        } else {
            // Scrolling down
            nav.classList.add('hidden');
        }
        lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    // Show the nav on page load
    nav.classList.remove('hidden');
});

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".link");

    // Check local storage for the active link and set it
    const activeLinkId = localStorage.getItem("activeLinkId");
    if (activeLinkId) {
        document.getElementById(activeLinkId).classList.add("active");
    }

    links.forEach(link => {
        link.addEventListener("click", function() {
            // Remove active class from all links
            links.forEach(l => l.classList.remove("active"));

            // Add active class to the clicked link
            this.classList.add("active");

            // Store the active link's ID in local storage
            localStorage.setItem("activeLinkId", this.id);
        });
    });
});


//Code for email sending
(function() {
    emailjs.init("n2ZDYrfT68WU5YbsqunyC");
})();

function sendEmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const additional = document.getElementById('additional').value;
    const message = document.getElementById('message').value;

    const templateParams = {
        name: name,
        email: email,
        phone: phone,
        additional: additional,
        message: message
    };

    emailjs.send('service_a8b4uyr', 'template_p8z2dgv', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            form.reset();
            document.getElementById('confirmation-message').style.display = 'block';
        } else {
            console.error('There was a problem submitting the form');
        }
    };
    xhr.send(data);
});