// current year
const currentYear = new Date().getFullYear();

const yearElement = document.getElementById('currentyear');
yearElement.textContent = currentYear;

// last modified
const lastModified = document.lastModified;

const lastModifiedElement = document.getElementById('lastModified');
lastModifiedElement.textContent = `Last modified: ${lastModified}`;
