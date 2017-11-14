class Punto {
	constructor(x, y){
		this.x = x;
		this.y = y;
	}

	moverEnX(x){
		this.x += x;
	}

	moverEnY(y){
		this.y += y;
	}

	distancia(p){
		const x = this.x - p.x;
		const y = this.y - p.y;
		return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
	}
}

const p1 = new Punto(0, 4);
const p2 = new Punto(3, 0);

console.log(p1.distancia(p2));
console.log(p2.distancia(p1));
p1.moverEnX(10);
console.log(p1.distancia(p2));
console.log(distancia(p1, p2));
console.log(distancia(p1, {x: 13, y: -5}));
p2.moverEnY(-4);
console.log(p1.distancia(p2));

