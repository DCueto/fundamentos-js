class Persona {
	constructor(nombre, amigos = []){
		this.nombre = nombre;
		this.amigos = amigos;
	}
	/* Acceder a this de fuera con _this
	listarAmigos(){
		const _this = this;
		this.amigos.forEach(function (amigo) {
			console.log(`Hola, mi nombre es ${_this.nombre} y soy amigo de ${amigo}`);
		});
	} */

	/* Acceder a this de fuera con .bind(this)
	listarAmigos(){
		this.amigos.forEach(function(amigo){
			console.log(`Hola, mi nombre es ${this.nombre} y soy amigo de ${amigo}`);
		}.bind(this));
	}
	*/

	// Acceder a this de fuera con un arrow function

	listarAmigos(){
		this.amigos.forEach((amigo) =>
			console.log(`Hola, mi nombre es ${this.nombre} y soy amigo de ${amigo}`));
	}
}

const dani = new Persona('Dani', ['Aitor', 'Alex']);


const testing = {
	nombre: 'Test',
	normalLogThis: function(){
		return `Esto es this dentro de una función del objeto persona: ${this}`;
	},
	arrowLogThis: ()=>`Esto es this dentro de una arrow function del objeto persona: ${this}`,
	printThis: console.log(this),
	printFunctionThis: function(){
		return this;
	}
}
