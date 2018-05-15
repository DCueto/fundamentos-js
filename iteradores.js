function fibonacci(){
	let a = 0, b = 1;
	return {
		next: function(reset){
			if (reset) a = 0, b = 1;
			let f = a;
			a = b;
			b = f + b;
			return { value: f, done: false }
		}
	}
}

const fibo = {nombre: 'Dani'}
fibo[Symbol.iterator] = fibonacci;

let i = 0;
for (let value of fibo){
	console.log(value);
	i++;
	if(i>=20) break;
}

// Testing Iterators
function makeIterator(array = []){ 
	var nextIndex = 0;

	return {
		next: function(){
			return nextIndex < array.length ?
				{value: array[nextIndex++], done:false} :
				{done: true};
		}
	};
}

var it = makeIterator(['yo', 'ya']);
console.log(it.next().value); //yo
//console.log(it.next().done);
console.log(it.next().value); //ya
console.log(it.next().done);


//Trying Generators

function* idMaker(){
	var index = 0;
	while(true) yield index++;
}

var gen = idMaker();

console.log(gen.next().value);


//Iterators & Generators

let myIterable = {};
myIterable[Symbol.iterator] = function* (){
	yield 1;
	yield 2;
	yield 3;
};

for (let value of myIterable){
	console.log(value);
}


function* gen(){
	yield* ['a', 'b', 'c'];
}



