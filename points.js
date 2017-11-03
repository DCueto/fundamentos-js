//function Punto(x, y){
//	this.x = x;
//	this.y = y;
//}
//
//Punto.prototype.moverEnX = function moverEnX(x){
//	this.x += x;
//}
//
//Punto.prototype.moverEnY = function moverEnY(y){
//	this.y += y;
//}
//
//Punto.prototype.distancia = function distancia(p){
//	const x = this.x - p.x;
//	const y = this.y - p.y;
//
//	return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
//}
//
//let p1 = new Punto(0, 4);
//
//let p2 = new Punto(3, 0);
//
//console.log(p1.distancia(p2));
//console.log(p2.distancia(p1));
//p1.moverEnX(10);
//console.log(p1.distancia(p2));
////console.log(distancia(p1, p2));
////console.log(distancia(p1, {x: 13, y: -5}));
//p2.moverEnY(-4);
//console.log(p1.distancia(p2));

const Punto = {
	init: function(x, y){
		this.x = x;
		this.y = y;
	},
	moverEnX: function moverEnX(x){
		this.x += x;
	},
	moverEnY: function moverEnY(y){
		this.y += y;
	},
	distancia: function distancia(p){
		const x = this.x - p.x;
		const y = this.y - p.y;

		return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
	}
}

const p1 = Object.create(Punto);
const p2 = Object.create(Punto);
p1.init(0, 4);
p2.init(3, 0);














