
// BIEN, UTILIZAMOS LA MEMOIZACIÓN PARA EVITAR
// EJECUTAR LA MISMA FUNCIÓN TODO EL RATO Y GUARDAR
// LOS DATOS EN UN ARREGLO DE CLAVE Y VALOR (OBJETO)

let contadorMemo = 0;
function fibonacciMemo(num, memoria = {}){
	contadorMemo++;
	if (memoria[num]) {
		return memoria[num];
	}
	if (num == 1) return 0;
	if (num == 2) return 1;

	return memoria[num] = fibonacciMemo(num-1, memoria) + 
						fibonacciMemo(num - 2, memoria);

}

fibonacciMemo(20);



// MAL, EJECUTA LA MISMA FUNCIÓN DEMASIADAS VECES

contadorRec = 0;
function fibonacciRecursivo(num){
	if (num == 1) return 0;
	if (num == 2) return 1;

	contadorRec++;
	//console.log(contador2);

	return fibonacciRecursivo(num-1) + fibonacciRecursivo(num - 2);
}

fibonacciRecursivo(20);

