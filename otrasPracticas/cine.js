
let viewersList = [];
let films = [
	{
		filmName: 'Star Wars',
		pegi: 14,
		seating: 10,
		viewers: []
	},
	{
		filmName: 'The Avengers: Infinity War',
		pegi: 14,
		schedules: {
			"8:30": {
				pricing: 6.50,
				seating: 10,
				hall: 3,
				viewers: []
			}
			"13:30": {
				pricing: 6.50,
				seating: 10,
				hall: 3,
				viewers: []
			}
			"20:30": {
				pricing: 8.00,
				hall: 3,
				seating: 10,
				viewers: []
			}
		}
		seating: 10,
		viewers: []
	},
	{
		filmName: 'SAW 3',
		pegi: 18,
		seating: 3,
		viewers: []
	}
];

/*for (let i = films.length; i >= 0; i--) {
	console.log(films[i]
}
*/



class Viewer {
	constructor(name, age, isWithAdult = false){
		this.name = name;
		this.age = age;
		this.isWithAdult = isWithAdult;
		this.avaiableFilms = [];
		this.filmTicket = '';
	}

	printThis(){
		console.log(this);
	}


	canWatchFilms(){
		this.avaiableFilms = [];
		for (let film in films) {
			if (this.age > films[film].pegi){
				console.log(`${this.name} puede pasar a ver ${films[film].filmName}`);
				let item = {
					film: films[film],
					goesWithAdult: false
				}
				this.avaiableFilms.push(item);
			} else if (this.age < films[film].pegi && this.isWithAdult){
				console.log(`${this.name} puede pasar a ver ${films[film].filmName} siempre que vaya acompañado de un adulto`);
				let item = {
					film: films[film],
					goesWithAdult: true
				}
				this.avaiableFilms.push(item);
			} else {
				console.log(`${this.name} no puede pasar a ver ${films[film].filmName}`);
			} 
		}

		console.log(`This are the films you can watch:`);
		console.log(this.avaiableFilms);
	}

	purchaseTicket(film){
		for (let i in this.avaiableFilms){
			let currentFilm = this.avaiableFilms[i].film;
			if (film == currentFilm.filmName){
				this.filmTicket = currentFilm.filmName;
				currentFilm.seating--;

				currentFilm.viewers.push(this);
				console.log(`Acaba de comprar un ticket para la película 
					${this.filmTicket}`);
				console.log(`Después de su compra quedan 
					${currentFilm.seating} asientos para la película ${this.filmTicket}`);
			}
		}
	}

	addToList(){
		viewersList.push(this);
	}
}

let newViewer = new Viewer('Dani', 22);
newViewer.addToList();
newViewer.canWatchFilms();



const marc = new Viewer('Marc', 15);
newViewer.addToList();
marc.canWatchFilms();


