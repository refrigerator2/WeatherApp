const akey = 'de7610c21cac8617562a8bd820aed8e6';

	const lat = document.getElementsByClassName("lat").value;
	const lon = document.getElementsByClassName("lon").value;
	const btn = document.getElementsByClassName("btn")[0];
	const time = "hourly";
	const lang = "en"
	function getLL(){
		return lat, lon;
	}
	btn.addEventListener('click', getLL)

	 const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${akey}`;
	// const url = `https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=39.099724&lon=-94.578331&dt=1643803200&appid=de7610c21cac8617562a8bd820aed8e6`;

	function getData(myUrl){
		return myUrl;
	}
	getData(url).then(response=>response.json).then(json=>console.log(json))
		
