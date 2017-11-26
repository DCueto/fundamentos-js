const persona = {
	nombre: 'Daniel',
	apellido: 'Cueto'
}


function saludar(veces, uppercase){
	let str = `Hola ${this.nombre} ${this.apellido}`;
	str = uppercase ? str.toUpperCase() : str;
	for (let i=0; i<veces; i++){
		console.log(str);
	}
}

// Call permite ejecutar la función de retorno del
// bind referenciando un objeto como "this"

saludar.call(persona, 3, true);

// Apply es lo mismo que Call solo que todos los
// parametros se envian en un array

saludar.apply(persona, [3, true]);

// Pasamos un array con los parametros y lo desmontamos
// para enviar cada parametro por separado en el Call
// (LOS "..." recorren el array y extraen cada parametro)

const params = [2, true];
saludar.call(persona, ...params);


// Pasamos un array con los parametros directamente
// con el método Apply

const params = [4, false];
saludar.apply(persona, params);


