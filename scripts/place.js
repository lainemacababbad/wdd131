// static values for temperature and wind speed
let temperature = 29; // °C
let windSpeed = 10; // km/h

// formula for the wind chill
function calculateWindChill(temperature, windSpeed) {
  return (
    13.12 +
    0.6215 * temperature -
    11.37 * Math.pow(windSpeed, 0.16) +
    0.3965 * temperature * Math.pow(windSpeed, 0.16)
  );
}

// if conditions <= 10 °C and > 4.8 km/h
if (temperature <= 10 && windSpeed > 4.8) {
  let windChill = calculateWindChill(temperature, windSpeed);
  document.getElementById(
    "wind-chill"
  ).textContent = `Wind Chill: ${windChill.toFixed(1)}°C`;
} else {
  document.getElementById("wind-chill").textContent = "Wind Chill: N/A";
}