// Areas geométricas

let base = 5;
let height = 7;
let radius = 3;

const triangleArea = (base, height) => base * height / 2;

const rectangleArea = (base, height) => base * height;

const circleArea = (radius) => Math.PI * Math.pow(radius, 2);

/* console.log(`El área de un triángulo de base ${base} y 
	altura ${height} es: ${triangleArea(base, height)}`);

console.log(`El área de un rectangulo de base ${base} y 
	altura ${height} es: ${rectangleArea(base, height)}`);

*/

// Películas y Edades

const starWars7 = 'Star Wars: El despertar de la Fuerza';
const pgStarWars7 = 13;

const nameDani = 'Daniel';
let ageDani = 22;

const nameSanti = 'Santi';
let ageSanti = 12;

// Función Verificar Edad

const canWatchStarWars7 = (name, age, isWithAdult = false) => {
	if (age >= pgStarWars7) {
		alert(`${name} puede pasar a ver ${starWars7}`);

	} else if(isWithAdult && age < pgStarWars7){
		alert(`${name} puede pasar a ver ${starWars7}. 
			Aunque su edad es ${age}, se encuentra acompañada/o por un adulto.`);
	}
	else{
		alert(`${name} no puede pasar a ver ${starWars7}.
			Tiene ${age} años y necesita tener ${pgStarWars7}`);
	}
}


canWatchStarWars7(nameDani, ageDani);
canWatchStarWars7(nameSanti, ageSanti, true);











