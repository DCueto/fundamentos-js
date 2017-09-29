

const nombre = 'Daniel';
const dias = [
	'lunes',
	'martes',
	'miércoles',
	'jueves',
	'viernes',
	'sábado',
	'domingo'
];

function correr(){
	const min = 5;
	const max = 15;
	// Devuelve un valor entre 5 y 15
	return Math.round(Math.random() * (max - min) + min);
}

let totalKms = 0;
const lenght = dias.lenght;
for (let i = 0; i < length; i++){
	const kms = correr();
	totalKms += kms;
	console.log(`El día ${dias[i]}, ${nombre} corrió ${kms} kms`);
}

console.log(`En total, ${nombre} corrió ${totalKms} kms`);

const promedioKms = totalKms / length;
console.log(`El promedio de kms que ha corrido ${nombre} es de ${promedioKms.toFixed(2)}`);




