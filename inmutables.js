// TODO ESTO ES MUTABLE
let cueto = {nombre: 'Daniel', apellido:'Cueto', edad: 22};
let otroCueto = cueto;
console.log(otroCueto === cueto);
otroCueto.edad = 23;
console.log(cueto);

function cumpleanos(persona) {
	persona.edad++;
}
cumpleanos(cueto);
console.log(cueto);
console.log(otroCueto);

let contador = 1;
cumpleanos = (persona) => {
	contador++;
	persona.edad++;
}
cumpleanos(cueto);
console.log(`Contador a: ${contador}`);
console.log(cueto);


// DATO INMUTABLE
cumpleanos = (persona) => {
	const clone = Object.assign({}, persona);
	clone.edad++;
	return clone;
}



