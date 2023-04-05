
const rep = document.getElementById('rep')
const city = document.getElementById('city');
const btn = document.getElementById("btn");
const tm = document.getElementById('tempcheck')


function createContent(request){
		const div = document.createElement('div')
		div.innerText= request;
		const p = document.createElement('p')
		p.setAttribute('id', "box")
		rep.append(p)
		p.append(div)
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
		 if(sunrise.checked){
			value = data.city.sunrise
			createContent(value)
		 }
		 if(sunset.checked){
			value = data.city.sunset
			createContent(value)
		 }
		console.log(data)
		}

async function getData(){
const akey = 'a412a1788e338d0074a61750c01f41b8';
const value = city.value
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=${akey}`;
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
