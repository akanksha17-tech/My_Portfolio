function scrollToContact() {
  // Scroll to the contactdet section smoothly
  document.getElementById('contactdet').scrollIntoView({
      behavior: 'smooth'
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact form');

  form.addEventListener('submit', function (event) {
      event.preventDefault();

      const formData = {
          fullName: form.querySelector('input[placeholder="FullName"]').value,
          emailAddress: form.querySelector('input[placeholder="Email Address"]').value,
          mobileNumber: form.querySelector('input[placeholder="Mobile Number"]').value,
          Subject: form.querySelector('input[placeholder="Subject"]').value,
          message: form.querySelector('textarea').value,
      };

      
      localStorage.setItem('formData', JSON.stringify(formData));

      
      form.reset();
  });
});

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

const navLinks = document.querySelector('.nav-links');
    const resumeButton = document.getElementById('resume');
    
    // Toggle navigation links for small screens
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'block';
        }
    });
