const nacimiento = new Date(1995, 6, 15);
const hoy = new Date();

const tiempo = hoy - nacimiento;

const tiempoSegundos = tiempo / 1000;
const tiempoMinutos = tiempoSegundos / 60;
const tiempoHoras = tiempoMinutos / 60;

const proximo = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate());

const diasSemana = [
	'Domingo',
	'Lunes',
	'Martes',
	'Miercoles',
	'Jueves',
	'Viernes',
	'Sábado'
];

console.log(diasSemana[proximo.getDay()]);