const tempcheck = document.getElementById('tempcheck')
const humcheck = document.getElementById('humcheck')
const press = document.getElementById('presscheck') 
const rep = document.getElementById('rep')
const city = document.getElementById('city');
const btn = document.getElementById("btn");
const tm = document.getElementById('tempcheck')
const unit = document.getElementById('units')

let units;

unit.addEventListener('change', function(event){
	units = event.target.value
})


function createContent(request){
		const div = document.createElement('div')
		div.innerText= request;
		div.setAttribute('id', "box")
		rep.append(div)
}

function measurementSystem(data, value){
	const request = data.list[0].main
switch (units){
case "metric":
	switch (value){
		case request.temp:
			value += "&#176"+"C"
		break;
		case request.humidity:
			value+="%"
		break;
		case request.pressure:
			value+="hPa"
			break;
		case data.list[0].wind.deg:
			value+="&#176"
		break;
		case data.list[0].wind.speed:
			value+="meter/second"
		break;
		case data.list[0].wind.gust:
			value+="meter/second"
		break;
	}
	break;
case "imperial":
	switch (value){
		case request.temp:
			value += "&#176"+"F"
		break;
		case request.humidity:
			value+="%"
		break;
		case request.pressure:
			value+="hPa"
			break;
		case data.list[0].wind.deg:
			value+="&#176"
		break;
		case data.list[0].wind.speed:
			value+="miles/hour"
		break;
		case data.list[0].wind.gust:
			value+="miles/hour"
		break;
	}
	break;
	case "standart":
	switch (value){
		case request.temp:
			value += "K"
		break;
		case request.humidity:
			value+="%"
		break;
		case request.pressure:
			value+="hPa"
			break;
		case data.list[0].wind.deg:
			value+="&#176"
		break;
		case data.list[0].wind.speed:
			value+="meter/second"
		break;
		case data.list[0].wind.gust:
			value+="meter/second"
		break;
	}
	break;
}
}
function postContent(data){
	const request = data.list[0].main
	let value
		if(tempcheck.checked){
			value = measurementSystem(data, request.temp)
			createContent(value)
		}
		if(humcheck.checked){
			value = request.humidity
			createContent(value)
		}
		 if(press.checked){
			value = request.pressure
		 	createContent(value)
		 }
		 if(wind.checked){
			value = data.list[0].wind.deg
			createContent(value)
			value = data.list[0].wind.speed 
			createContent(value)
			value = data.list[0].wind.gust 
			createContent(value)
		 }
		value = data.list[0].weather.icon
		createContent(value)
		}

async function getData(){
const akey = 'a412a1788e338d0074a61750c01f41b8';
const value = city.value
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&units=${units}&appid=${akey}`;
const dat = await fetch(url)
	return dat;
}

function postData(){
	getData()
	.then(function(response){
		response.json()
		.then(function(data) {
		postContent(data)
	});
})
}

btn.addEventListener('click', postData)
