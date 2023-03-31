
	const rep = document.getElementById('rep')
	const city = document.getElementById('city');
	const btn = document.getElementById("btn");
	
	function createContent(data){
		// const div = document.createElement('div')
		// console.log(data)
		// const wt = data.list[0].main.temp
		// div.innerText= wt;
		// const p = document.createElement('p')
		// p.setAttribute('id', "box")
		// rep.append(p)
		// p.append(div)
		for(let i= 0;i<2;i++){
			
			// let wt
			// switch(i){
			// 	case i === 0:
			// 		wt = temp
			// 	case i === 1:
			// 	    wt=feels_like
			// 	case i === 2:
			// 		wt=humidity
			// }
			const request = data.list[0].main.temp
			const div = document.createElement('div')
			div.innerText= request;
			const p = document.createElement('p')
			p.setAttribute('id', "box")
			rep.append(p)
			p.append(div)
		}
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
			createContent(data)
		});
	})
	}

	btn.addEventListener('click', postData)
