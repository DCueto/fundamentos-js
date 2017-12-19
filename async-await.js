//Requiere Babel para transcribir el código y ser funcional dentro
//de la herramienta codepen
//Puedes ejecutar este código en
// babel.js/repl

//Para utilizar este código en node es necesario
//tener babel y babel-polyfill

//NO UTILIZAR EL REQUIRE FUERA DE NODE
let fetch = require('node-fetch');

// Para utilizar fetch sin el require de node ejecutalo en
// la consola de chrome


//Si ejecutas el async-await en el inspector del navegador
//te funcionará perfectamente

function handleError(err){
	console.log(`Request failed: ${err}`);
}

async function getLuke(){
	try{
		const url = 'https://swapi.co/api/people/1/';
		let response = await fetch(url);
		const luke = await response.json();
		const responseHomeworld = await fetch(luke.homeworld);
		luke.homeworld = await responseHomeworld.json();
		console.log(`${luke.name} nació en ${luke.homeworld.name}`);
	} catch (err){
		handleError(err);
	}
}

getLuke();
