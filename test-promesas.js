const promise = new Promise((resolve, reject) => {
	setTimeout(()=>resolve(), 5000); 
});

promise
	.then(()=>{
		console.log('Siiii!');
	})
	.catch(()=>{
		console.log('Noooo!');
	});


const promise2 = new Promise((resolve, reject) => {
	setTimeout(()=>reject(new Error(`Error en Timeout`)), 5000);
});

promise2
	.then(()=>{
		console.log('Siii!');
	})
	.catch((error)=> console.log(`${error} Noooooo!`));
