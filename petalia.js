/*
    Author: Bethelhem Agafari
    Date: 04/6/2023

    Description: javascript  */


// JavaScript to toggle the "show" class on click
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.closing-icon')
const navLinks = document.querySelector('nav ul');


 menuIcon.addEventListener('mouseover', () => {
        navLinks.classList.toggle('show');
 });

// Form Validation

const form = document.getElementById("myForm");
const submitBtn = document.querySelector("input[type='submit']");

submitBtn.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent form submission
  
  const nameField = document.getElementById("name");
  if (nameField.value.trim() === "") {
    alert("Please enter your name.");
    return;
  }
  
  const emailField = document.getElementById("email");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailField.value)) {
    alert("Please enter a valid email address.");
    return;
  }
  
  // Add more validation here if needed
  
  form.submit();
});

function handleReviewSubmit(event) {
    event.preventDefault();
  
    // Retrieve form data
    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    const review = document.getElementById('review').value;
  
    // Validate form data
    if (!name || !rating || !review) {
      alert('Please fill out all fields');
      return;
    }
  
    // Add review to list
    const reviewList = document.getElementById('review-list');
    const li = document.createElement('li');
    li.innerHTML = `
      <h4>${name}</h4>
      <p>Rating: ${rating} stars</p>
      <p>${review}</p>
    `;
    reviewList.appendChild(li);
  
    // Clear form
    document.getElementById('review-form').reset();
  }
  const reviewForm = document.getElementById('review-form');
  reviewForm.addEventListener('submit', handleReviewSubmit);
    


  