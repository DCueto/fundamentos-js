
// El require de fetch solo es necesario para utilizar
// fetch() en node

let fetch = require('node-fetch');

// Para utilizar fetch sin el require de node ejecutalo en
// la consola de chrome

function handleError(err){
	console.log(`Request failed: ${err}`);
}

let luke;
const url = 'https://swapi.co/api/people/1/';

fetch(url)
	.then(response => response.json())
	.then((json) => {
		luke = json;
		return fetch(luke.homeworld);
	})
	.then(response => response.json())
	.then((json) => {
		luke.homeworld = json;
		console.log(`${luke.name} nació en ${luke.homeworld.name}`);
	})
	.catch(err => handleError(err));