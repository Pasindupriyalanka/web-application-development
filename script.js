document.getElementById('contactForm').addEventListener('submit', function(event) {
    if (!validateContactForm()) {
      event.preventDefault();
    }
  });
  
  document.getElementById('registerForm').addEventListener('submit', function(event) {
    if (!validateRegisterForm()) {
      event.preventDefault();
    }
  });
  
  document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    if (!validateFeedbackForm()) {
      event.preventDefault();
    }
  });
  
  function validateContactForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  
    if (name === '' || email === '' || message === '') {
      alert('All fields are required.');
      return false;
    }
  
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email.');
      return false;
    }
  
    return true;
  }
  
  function validateRegisterForm() {
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let nic = document.getElementById('nic').value;
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let phone
  