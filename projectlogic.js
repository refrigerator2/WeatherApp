
	const rep = document.getElementById('rep')
	const city = document.getElementById('city');
	const btn = document.getElementById("btn");
	
	function createContent(data){
		const div = document.createElement('div')
		div.innerText= data.list.main
		const p = document.createElement('p')
		p.setAttribute('id', "box")
		rep.append(p)
		p.append(div)
	}

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
			const div=document.createElement('div')
			div.innerText= data.list.main
			rep.append(div)
		});
	})
	}

	btn.addEventListener('click', postData)
