let input = document.querySelector("input")
let button = document.querySelector("button")
let weatherData = document.querySelector(".weather-data")

let api = "1a4e51c7377e8cf939cbc51bb433a57f"
button.addEventListener("click", () => {
    if (input.value.trim() === "") {
        alert("Please enter a city name")
        return
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${api}`)
        .then((res) => {
            return res.json()
        })
        .then((response) => {
            if (response.cod === "404") {
                weatherData.innerHTML = `<p style="color: red">city not found</p>`
                input.value = ""
                return
            }
            console.log(response)
            weatherData.innerHTML = ""
            // console.log(Math.round(response.main.temp - 273))
            let data = document.createElement("div");
            data.style.width = "100%";
            data.style.border = "1px solid #ccc";
            data.style.padding = "15px";
            data.style.margin = "10px 0";
            data.style.borderRadius = "10px";
            data.style.background = "linear-gradient(rgb(73 196 255), rgb(0 97 211))";

            let h2 = document.createElement("h2");
            h2.innerHTML = Math.round(response.main.temp - 273) + "°C"
            h2.style.fontSize = "40px"
            h2.style.margin = "0px"


            let city = document.createElement("h2");
            city.innerHTML = response.name
            city.style.margin = "0px"

            let clouds = document.createElement("p");
            clouds.innerHTML = response.weather[0].main.toLowerCase()
            clouds.style.margin = "0px"

            let p = document.createElement("p")
            p.innerHTML = "wind-speed"+  "=" + response.wind.speed
            p.style.margin = "0px"

            let humidity = document.createElement("p")
            humidity.innerHTML = "humidity"+  "=" + response.main.humidity
            humidity.style.margin = "0px"

            let image = document.createElement("img");
            if (response.weather[0].main.toLowerCase() === "rain") {
                image.setAttribute("src", "images/Screenshot_2025-09-11_154731-removebg-preview.png");
            }
            else if (response.weather[0].main.toLowerCase() === "clouds") {
                image.setAttribute("src", "images/Screenshot_2025-09-11_155358-removebg-preview.png");
            } else {
                image.setAttribute("src", "images/Screenshot_2025-09-11_160849-removebg-preview.png");
            }

            data.appendChild(h2);
            data.appendChild(image);
            data.appendChild(city);
            data.appendChild(clouds);
            data.appendChild(p);
            data.appendChild(humidity);
            weatherData.appendChild(data);


            input.value = ""
        })



        .catch((err) => {
            console.log(err.message)
            weatherData.innerHTML = `<p style="color: red">Error feathing weather data.</p>`
        })
})