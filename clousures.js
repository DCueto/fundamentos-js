
function saludarFamilia(apellido){
	return const saludarMiembroFamilia = (nombre) =>
		console.log(`Hola ${nombre} ${apellido}`);
}

const saludarGomez = saludarFamilia('Gomez');
const saludarPerez = saludarFamilia('Perez');


saludarGomez('Daniel');
saludarGomez('Juan');
saludarGomez('Maria');

saludarPerez('Dario');
saludarPerez('Jaime');


// Práctica utilizando clusures

const makePrefixer = (prefix) => (text) => 
	console.log(`${prefix}` + `${text}`);

// O mejor

const makePrefixer = (prefix) => (text) => prefix + text;

const prefijoRe = makePrefixer('re');

prefijoRe('sano');
