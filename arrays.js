

// MAL
//function suma(n1, n2, n3, n4, n5) {
//	return n1 + n2 + n3 + n4 + n5
//}

// BIEN
function suma(...numbers){
	// Método tradicional
	let acum = 0;
	for (let i=0; i < numbers.length; i++){
		acum += numbers[i];
	}
	console.log(numbers);
	console.log(`La suma de todos los números es: ${acum}`);

	return acum;
}

// MEJOR
function suma(...numbers){

	// Utilizando reduce() para sumar todos los numeros del array
	const resultado = numbers.reduce(function(acum, number){
		acum += number;
		return acum;
	}, 0);

	console.log(numbers);
	console.log(`La suma de todos los números es: ${resultado}`);

	return resultado;
}

// BIEN dobles()
function dobles(...numbers){
	const resultado = [];
	for (let i = 0; i < numbers.length; i++){
		resultado.push(numbers[i] * 2);
	}

	return resultado;
}

// MEJOR dobles()
const dobles = (...numbers) => 
	numbers.map(number => number * 2);


// filter()

function pares(...numbers){
	const resultado = [];
	const length = numbers.length;
	for (let i = 0; i < length; i++){
		const number = numbers[i];
		if (number % 2 == 0) {
			resultado.push(number);
		}
	}
	return resultado;
}

const pares = (...numbers) => 
	numbers.filter((number) => number % 2 == 0);


suma(4, 8, 12, 8956, 7);
