const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6fef55a042msh2bf54b76ca073d9p1b5f64jsn5c6b23b8f787',
		'X-RapidAPI-Host': 'forecast9.p.rapidapi.com'
	}
};

fetch('https://forecast9.p.rapidapi.com/', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
