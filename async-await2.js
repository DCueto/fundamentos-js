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


// Prueba para ver como funciona el eventLoop con async-await

function handleError(err){
	console.log(`Request failed: ${err}`);
}


async function getLuke(callNumber){
	try{
		if(callNumber == 1) await setTimeout(null, 4000);
		const response = await fetch('https://swapi.co/api/people/1');
		const luke = await response.json();
		const responseHomeworld = await fetch(luke.homeworld);
		luke.homeworld = await responseHomeworld.json();
		console.log(`Call #${callNumber}: ${luke.name} nació en ${luke.homeworld.name}`);
	} catch (err){
		handleError(err);
	}
}

console.log('First');
getLuke(1);
getLuke(2);
getLuke(3);
console.log('Second');