// current year
const currentYear = new Date().getFullYear();

const yearElement = document.getElementById("currentyear");
yearElement.textContent = currentYear;

// last modified
const lastModified = document.lastModified;

const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = `Last modified: ${lastModified}`;

// product array
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5,
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7,
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5,
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9,
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0,
  },
];

// select element
const productSelect = document.getElementById('product');

 // this is where it populates the select element
 products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

// review count
function updateReviewCount() {
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCount = parseInt(reviewCount) + 1; // adds one
    localStorage.setItem('reviewCount', reviewCount); // this is where the updated count
    return reviewCount;
  }
  
  // Handle form submission
  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const reviewCount = updateReviewCount();
    window.location.href = 'review.html'; // leads to the review.html file
  });
  
  // Update review count on review.html
  document.addEventListener('DOMContentLoaded', () => {
    const reviewCount = localStorage.getItem('reviewCount') || 0;
    document.getElementById('reviewCount').textContent = reviewCount; // shows the count
  });