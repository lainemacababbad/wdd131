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
    option.value = product.id; // Use the product id for the value attribute
    option.textContent = product.name; // Use the product name for the display text
    productSelect.appendChild(option); // Add the option to the select element
});

// number of reviews completed
let reviewCount = localStorage.getItem('reviewCount') || 0;

reviewCount = parseInt(reviewCount) + 1;

localStorage.setItem('reviewCount', reviewCount);

document.getElementById('reviewCount').textContent = reviewCount;
