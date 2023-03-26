
	
	const city = document.getElementById('city');
	const btn = document.getElementsByClassName("btn")[0];
	
	async function getData(){
	const akey = 'a412a1788e338d0074a61750c01f41b8';
	const value = city.value
	const url = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=${akey}`;
	const dat = await fetch(url)
		return dat;
	}

	function postData(){
		getData().then(function(response){
			response.json().then(function(data) {
				console.log(data);
		});
	})
	}

	btn.addEventListener('click', postData)
