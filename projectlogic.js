
const input = document.getElementsByClassName("city");
const city = "London"
const Url = `http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}`
async function request(myUrl){
	await fetch(myUrl)
} 
	request(Url); 
