
const rep = document.getElementById('rep')
const city = document.getElementById('city');
const btn = document.getElementById("btn");
const tm = document.getElementById('tempcheck')
const unit = document.getElementById('units')

let units;

unit.addEventListener('change', function(event){
	units = event.target.value
	console.log(units)
})


function createContent(request){
		const div = document.createElement('div')
		div.innerText= request;
		div.setAttribute('id', "box")
		rep.append(div)
}

function postContent(data){
	const tempcheck = document.getElementById('tempcheck')
	const humcheck = document.getElementById('humcheck')
	const sunrise = document.getElementById('sunrise')
	const sunset = document.getElementById('sunrise')
	const press = document.getElementById('presscheck') 
	const request = data.list[0].main
	let value
		if(tempcheck.checked){
			value = request.temp
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
