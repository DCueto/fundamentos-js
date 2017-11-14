var nombre = "Daniel";

function saludar(nombre){
	if (true) {
		var nombre = "Eric";
	}

	console.log(`Hola ${nombre}`);
}

function saludar10Dani(){
	const nombre = 'Dani'; 

	for (let i = 0; i <= 10; i++) {
		console.log(`${nombre} ${i}`);
	}
}

//saludar("Eric");
saludar(nombre);
console.log(`La variable nombre tiene el valor ${nombre}`);
saludar10Dani();