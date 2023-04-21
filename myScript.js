// Store Data
// Variable to Store the Element => Done
// Function to get the data from weather app
// Manipluate the varibe of already created element

let data

const inputBox = document.getElementById('inputBox')
const countryName = document.getElementById('countryName')
const stateName = document.getElementById('stateName')
const cityName = document.getElementById('cityName')
const humidity = document.getElementById('humidity')
const windSpeed = document.getElementById('windSpeed')
const temprature = document.getElementById('temprature')
const logoImage = document.getElementById('logoImage')
const weatherStatus = document.getElementById('weatherStatus')

const getData = async (event) => {
  event.preventDefault()
  if (!inputBox.value) {
    alert('🙏PLS Enter the City Name')
  }
  // Store CityName from Input Box
  const city_name = inputBox.value

  // Fetch Details
  const fetchData = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=e985f8290af84e8b807181058231502&q=${city_name}`,
  )

  const data = await fetchData.json()
  console.log(data) // Go to console

  // Displaying data in html page
  countryName.innerText = data.location.country
  stateName.innerText = data.location.region
  cityName.innerText = data.location.name
  humidity.innerText = data.current.humidity
  windSpeed.innerText = data.current.wind_kph
  temprature.innerText = data.current.temp_c
  windSpeed.innerText = data.current.wind_kph
  logoImage.src = data.current.condition.icon
  weatherStatus.innerText = data.current.condition.text
}
