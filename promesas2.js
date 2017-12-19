const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


function get(URL){
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();

		xhr.onreadystatechange = function (){
			const DONE = 4;
			const OK = 200;
			if(this.readyState === DONE){
				if(this.status === OK){
					resolve(JSON.parse(this.responseText));
				} else {
					reject(new Error(`Se produjo un error al realizar el request: ${this.status}`));
				}
			}
		}
		xhr.open('GET', URL);
		xhr.send(null);
	});
}


function handleError(error){
	console.log(`Request failed: ${error}`)
}

const url = 'https://swapi.co/api/people/1/';

let luke;

get(url)
	.then((response) => {
		luke = response;
		return get(luke.homeworld);	
	})
	.then((homeworld) => {
		luke.homeworld = homeworld;
		console.log(`${luke.name} nació en ${luke.homeworld.name}`);
	})
	.catch(err => handleError(err));



