// CALLBACK LOCAL

/*
setTimeout(function callback(){
	console.log('Ha pasado 3 segundo');
}, 3000);

console.log('Hola');

setTimeout(() => console.log('A'), 0);

console.log('B'); 
*/

// Callback a un servidor externo - API

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


function get(URL, callback){
	const xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function (){
		const DONE = 4;
		const OK = 200;
		if(this.readyState === DONE){
			if(this.status === OK){
				callback(null, JSON.parse(this.responseText));
			} else {
				callback(new Error(`Se produjo un error al realizar el request: ${this.status}`));
			}
		}
	}
	xhr.open('GET', URL);
	xhr.send(null);
}

const url = 'https://swapi.co/api/people/1/';

function handleError(error){
	console.log(`Request failed: ${error}`)
}

get(url, function onResponse(error, luke){
	error ? handleError(error) : console.log('Rquest succeded');
	get(luke.homeworld, function onHomeworldResponse(error, homeworld){
		error ? handleError(error) : "";

		luke.homeworld = homeworld;
		console.log(`${luke.name} nació en ${luke.homeworld.name}`);
	});
	console.log('luke', luke);
});
