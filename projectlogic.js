
	const city = document.getElementsByClassName('city')[0]
	const btn = document.getElementsByClassName("btn")[0];

	const akey = 'a412a1788e338d0074a61750c01f41b8';
	const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${akey}`;

	function getData(){
	fetch(url).then(function(response){
		response.json().then(function(data) {
			console.log(data);
		});
	})
	}

	btn.addEventListener('click', getData)
