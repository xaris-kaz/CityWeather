 
const apiKey = "d00367f14bb73bdd74a061d8dc47e1c9"; 

function getWeather() {
  const city = document.getElementById("cityInput").value;

  if (!city) {
    alert("Enter a city name!");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === "404") {
        document.getElementById("weatherResult").innerHTML = `<p style="color: red;">City not found!</p>`;
      } else {
        const temp = data.main.temp;
        const desc = data.weather[0].description;
        const humidity = data.main.humidity;

        document.getElementById("weatherResult").innerHTML = `
          <p><strong>Temperature:</strong> ${temp} °C</p>
          <p><strong>Condition:</strong> ${desc}</p>
          <p><strong>Humidity:</strong> ${humidity}%</p>
        `;
      }
    })
    .catch(error => {
      console.error('Error fetching weather:', error);
    });
}
