const api = "b04bc857b2ec1ce3e2986be47d7493b8";
let paraply = document.querySelector(".paraply");
let paragraf = document.querySelector(".paragraf");
let weatherClass = document.querySelector(".weather");

// Use enter instead of button
let input = document.querySelector("input");
input.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    getInputValue();
  }
});

// get the data from the API.
function getInputValue() {
  // Selecting the input element and get its value
  let inputVal = document.getElementById("location").value;
  const apiCallCord = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=b04bc857b2ec1ce3e2986be47d7493b8`;

  fetch(apiCallCord)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      var weather = data["weather"][0]["main"];
      setNewInfo(inputVal, weather);
    });
}

// Show weather info to user.
function setNewInfo(inputVal, weather) {
  paraply.textContent = toUpperCase(inputVal);
  weatherClass.textContent = "There will be " + toLowerCase(weather) + " today";
  if (weather == "Rain") {
    paragraf.textContent = "You will probably need an umbrella";
    changeBGrain();
  } else if (weather == "Thunderstorm") {
    paragraf.textContent = "You will probably need an umbrella";
    changeBGrain();
  } else {
    paragraf.textContent = "You will probably be fine without an umbrella";
    noRain();
  }
}

function toUpperCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function toLowerCase(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

function changeBGrain() {
  document.body.style.backgroundImage = "url('images/rainy.jpeg')";
}

function noRain() {
  document.body.style.backgroundImage =
    "url('images/photo-1469122312224-c5846569feb1.jpeg')";
}
