
	const lat = document.getElementsByClassName("lat").value;
	const lon = document.getElementsByClassName("lon").value;
	const btn = document.getElementsByClassName("btn")[0];

	const akey = 'a412a1788e338d0074a61750c01f41b8';
	const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${akey}`;

	function getLL(){
		return lat, lon;
	}
	btn.addEventListener('click', function(){
		fetch(url)
	})
	 
	const languageSelector = document.getElementById('language');
	languageSelector.addEventListener('change', function() {
    const selectedLanguage = languageSelector.value;
    const script = document.createElement('script');
    script.src = `lang_${selectedLanguage}.js`;
    document.head.appendChild(script);
});
		
