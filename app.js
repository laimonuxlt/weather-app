window.addEventListener("load", () => {
  let longtitude;
  let latitude;
  let temperatureDegree = document.querySelector(".temperature-display");
  let weatherDescription = document.querySelector(".weather-description");
  let locationName = document.querySelector(".location-display");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      longtitude = position.coords.longitude;
      latitude = position.coords.latitude;

      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longtitude}&appid=b3f761e6bdae1c00d1aed021b5b31fdb`;

      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const { temp } = data.main;
          const { description } = data.weather[0];
          //const location = data.name;

          temperatureDegree.textContent = temp;
          weatherDescription.textContent = description;
          locationName.textContent = data.name;
        });
    });
  } else {
    temperatureDegree.textContent =
      "Your browser do not support geolocation service or this service is disabled";
  }
});
