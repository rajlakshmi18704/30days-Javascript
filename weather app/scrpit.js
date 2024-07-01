
const searchinput=document.querySelector('.serach-box')
const searchbtn=document.querySelector('.header button')
const weather_img=document.querySelector('.weather-img')
const temperature=document.querySelector('.temperature')
const descrip=document.querySelector('.weather-txt')
const humidity=document.querySelector('.humid-text span')
const windspeed=document.querySelector('.wind-txt')
const locationnotfound=document.querySelector('.location-not-found')
const weatherbody=document.querySelector('.weather-container')
 async function checkweather(city){
const apikey="2db573e8a57f5668e08a0d3a578d587f"
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
const data=await fetch(`${url}`).then((res)=>res.json())
if(data.cod==='404'){
 locationnotfound.style.display='flex';
 weatherbody.style.display='none'
 document.querySelector('.weather-text').style.display="none"
  return
}
temperature.innerHTML=`${Math.round(data.main.temp-273.15)}°C`
descrip.innerHTML=`${data.weather[0].description}`
humidity.innerHTML=`${data.main.humidity}%`
windspeed.innerHTML=`${data.wind.speed}KM/H`
if(data.weather[0].main=="Clouds"){
  weather_img.src=`images/cloud.png`
  aboutweather()
}
 else if(data.weather[0].main=="Clear"){
  weather_img.src=`images/clear.png`
  aboutweather()
}
 else if(data.weather[0].main=="Mist"){
  weather_img.src=`images/mist.png`
  aboutweather()
}
 else if(data.weather[0].main=="Rain"){
  weather_img.src=`images/rain.png`
  aboutweather()
}
 else if(data.weather[0].main=="snow"){
  weather_img.src=`images/snow.png`
  aboutweather()
}

}
searchbtn.addEventListener('click',()=>{
  checkweather(searchinput.value)
})
function aboutweather(){
  locationnotfound.style.display='none';
  weatherbody.style.display='flex'
  document.querySelector('.weather-text').style.display="flex"
}