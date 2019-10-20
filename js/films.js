films = [
    film1 = {
        name: 'Человек паук',
        start: '12:00',
        ganar: [0,1],
        hire: true,
        new: false,
    },
    film2 = {
        name: 'Собачья жизнь 2',
        start: '16:00',
        ganar: [2,3,4],
        hire: false,
        new: false,
        
    },
    film3 = {
        name: 'История игруше 4',
        start: '15:00',
        ganar: [2,4,5],
        hire: true,
        new: true,
    },
    film4 = {
        name: 'Люди в черном 2',
        start: '15:00',
        ganar: [0,1,4],
        hire: true,
        new: false,
    }
]
console.log('films')

const ganars = [
    'Фантастика', //0
    'Боевик',     //1
    'Фэнтези',    //2
    'Драмма',     //3
    'Комедия',    //4
    'Мультфильм'  //5
]

// Для секции выберите фильм и выберите жанр
let filmsHire = []
let filmsNew = []



for (let i = 0; i < films.length; i++) {
    if (films[i].hire === flase && films[i].new ===true){
        filmsNew.push(films[i])
    }
}
//console.log('Для секции выберите фильм', filmsHire)
//console.log('Для секции Новинки слайдер', filmsNew)

const film = {
    getName: function () {
        console.log(this.name)
    },
    getStart: function () {
        console.log(this.start)
    },
    getGanar: function () {
        const ganarsFilm = this.ganar
        let arrGanars = []
        for(let i = 0; i < ganarsFilm.length; i++){
            arrGanars.push(ganars[ganarsFilm[i]])
        }
        let strGanars = arrGanars.join(', ')
    }
}

for (let i = 0; i < filmsHire.length; i++) {
    let filmHTML = 
    film.getName.bind(filmsHire[i])()
    film.getStart.bind(filmsStart[i])()
    film.getGanar.bind(filmsGanar[i])()
}