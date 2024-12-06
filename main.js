
const apiKey='f00c38e0279b7bc85480c3fe775d518c'
const searchBar=document.querySelector(".search-bar input")
const searchButton=document.querySelector(".search-bar button")
const weatherIcon=document.querySelector(".weather-icon")
const tempElement=document.querySelector(".temp")
const cityElement=document.querySelector(".city")
const humidityElement=document.querySelector(".humidity")
const windElement=document.querySelector(".wind")


searchButton.addEventListener('click',()=>{
  const city=searchBar.value
  if(!city)
  {
    alert("please enter a city name")
    return
  }
  getWeather(city)
})

function getWeather(city)
{
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  fetch(url)
  .then(response=>{
    if(!response.ok)
    {
      throw new Error('City not found')
    }
    return response.json()

  })

  .then(data=>{
    cityElement.textContent=data.name
    tempElement.textContent=`${Math.round(data.main.temp)}°C`
    humidityElement.textContent=`${data.main.humidity}%`
    windElement.textContent=`${data.wind.speed}km/hr`
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  })
  .catch(error=>alert(error.message))
}