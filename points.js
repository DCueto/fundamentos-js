let p1 = {
	x: 3,
	y: 4,
	moverEnX: function (x) { this.x += x; },
	moverEnY: function (y) { this.y += y; }
}

let p2 = {
	x: 3,
	y: 0,
	moverEnX: function (x) { this.x += x; },
	moverEnY: function (y) { this.y += y; }

}

const distancia = (p1, p2) => {
	const x = p1.x - p2.x;
	const y = p1.y - p2.y;

	return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}

console.log(distancia(p1, p2));
//console.log(distancia(p1, {x: 13, y: -5}));

p1.moverEnX(10);
p2.moverEnY(-4);