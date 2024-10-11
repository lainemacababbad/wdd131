document.addEventListener("DOMContentLoaded", () => {
    // current year
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById("currentyear");
    yearElement.textContent = currentYear;

    // last modified
    const lastModified = document.lastModified;
    const lastModifiedElement = document.getElementById("lastModified");
    lastModifiedElement.textContent = `Last modified: ${lastModified}`;

    // hamburger menu
    const hamburgerMenu = document.getElementById("hamburgerMenu");
    const navMenu = document.getElementById("navMenu");

    hamburgerMenu.addEventListener("click", () => {
        navMenu.classList.toggle("open");
        hamburgerMenu.classList.toggle("open");
    });

    // array of temples
    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
        },
        {
            templeName: "Cebu City Philippines",
            location: "Lahug, Cebu City, Mexico",
            dedicated: "2010, June, 13",
            area: 15000,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cebu-city-philippines/400x250/cebu-philippines-temple-lds-852643-wallpaper.jpg",
        },
        {
            templeName: "Manila Philippines",
            location: "Quezon City, Metro Manila, Philippines",
            dedicated: "1984, September, 25",
            area: 26683,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manila-philippines/400x250/manila-philippines-temple-lds-129585-wallpaper.jpg",
        },
        {
            templeName: "Vancouver British Columbia",
            location: "Langley, British Columbia, Canada",
            dedicated: "2010, May, 2",
            area: 19224,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/vancouver-british-columbia/400x250/vancouver-temple-766984-wallpaper.jpg",
        },
    ];

    // Temple Cards
    function createTempleCards(filteredTemples) {
        const container = document.getElementById("temple-cards-container");
        container.innerHTML = "";

        filteredTemples.forEach(temple => {
            const card = document.createElement("figure");
            card.className = "temple-card";

            card.innerHTML = `
                <h2>${temple.templeName}</h2>
                <p>Location: ${temple.location}</p>
                <p>Dedicated: ${temple.dedicated}</p>
                <p>Area: ${temple.area.toLocaleString()} sq ft</p>
                <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            `;

            container.appendChild(card);
        });
    }

    // Filter
    function showAllTemples() {
        createTempleCards(temples);
    }

    function showOldTemples() {
        const oldTemples = temples.filter(temple => {
            const dedicatedYear = parseInt(temple.dedicated.split(',')[0]);
            return dedicatedYear < 1900;
        });
        createTempleCards(oldTemples);
    }

    function showNewTemples() {
        const newTemples = temples.filter(temple => {
            const dedicatedYear = parseInt(temple.dedicated.split(',')[0]);
            return dedicatedYear > 2000;
        });
        createTempleCards(newTemples);
    }

    function showLargeTemples() {
        const largeTemples = temples.filter(temple => temple.area > 90000);
        createTempleCards(largeTemples);
    }

    function showSmallTemples() {
        const smallTemples = temples.filter(temple => temple.area < 10000);
        createTempleCards(smallTemples);
    }

    // Event Listeners for Navigation Links
    document.querySelector('nav a[href="#"]').addEventListener("click", showAllTemples);
    document.querySelector('nav a[href="#Old"]').addEventListener("click", showOldTemples);
    document.querySelector('nav a[href="#New"]').addEventListener("click", showNewTemples);
    document.querySelector('nav a[href="#Large"]').addEventListener("click", showLargeTemples);
    document.querySelector('nav a[href="#Small"]').addEventListener("click", showSmallTemples);

    // Initialize with all temples displayed
    showAllTemples();
});
