const temperatureC = 29;
const windSpeedKmH = 10;

function calculateWindChill(temp, speed) {
    // Use the wind chill formula for Celsius
    return Math.round(
        13.12 + 
        0.6215 * temp - 
        35.75 * Math.pow(speed / 3.6, 0.16) + 
        0.4275 * temp * Math.pow(speed / 3.6, 0.16)
    );
}

// Displaying the wind chill factor on page load
window.onload = function() {
    // Check conditions for viable wind chill calculation
    if (temperatureC <= 10 && windSpeedKmH > 4.8) {
        const windChillFactor = calculateWindChill(temperatureC, windSpeedKmH); // Calculate wind chill

        // Select the element where you want to display the wind chill
        const windChillElement = document.querySelector('.hero-text-weather p:last-child'); // Assumes you want to append it to the last <p> in the weather section
        windChillElement.textContent = `Wind Chill: ${windChillFactor} °C`; // Set the text content
    } else {
        // Select the element where you want to display "N/A"
        const windChillElement = document.querySelector('.hero-text-weather p:last-child');
        windChillElement.textContent = 'Wind Chill: N/A'; // Set the text content to "N/A"
    }
};