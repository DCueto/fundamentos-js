let vidaGoku = 100;
let vidaSuperman = 100;

const MIN_POWER = 5;
const MAX_POWER = 12;

const ambosSiganVivos = () => vidaGoku > 0 && vidaSuperman > 0;


const calcularGolpe = () => Math.round(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER);

const gokuSigueVivo = () => vidaGoku > 0;

let round = 0;

while (ambosSiganVivos()){
	round++;
	console.log(`Round ${round}`);

	const golpeGoku = calcularGolpe();
	const golpeSuperman = calcularGolpe();

	if (golpeGoku > golpeSuperman) {
		// ataca Goku
		console.log(`Goku ataca a Superman con un golpe de ${golpeGoku}`);
		vidaSuperman -= golpeGoku;
		console.log(`Superman queda en ${vidaSuperman} de vida`);
	} else{
		// ataca Superman
		console.log(`Super ataca a Goku con un ataque de ${golpeSuperman}`);
		vidaGoku -= golpeSuperman;
		console.log(`Goku qeuda en ${vidaGoku} de vida`);
	}
}


if (gokuSigueVivo()) {
	console.log(`Goku ganó la pelea. Su vida es de: ${vidaGoku}`);

} else{
	console.log(`Superman ganó la pelea. Su vida es de: ${vidaSuperman}`);
}







