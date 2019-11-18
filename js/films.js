films = [
    film1 = {
        name: 'Человек паук',
        start: '10:00',
        genre: [0, 1],
        image: "img/mov1.jpg",
        hire: true,
        new: true,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        fb: "https://fb.com",
        twitter: "https://twitter.com",
        behance: "https://www.behance.net"
    },
    film2 = {
        name: 'Собачья жизнь 2',
        start: '12:00',
        genre: [2, 3, 4],
        image: "img/mov1.jpg",
        hire: true,
        new: true,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        fb: "https://fb.com",
        twitter: "https://twitter.com",
        behance: "https://www.behance.net"
    },
    film3 = {
        name: 'История игрушек 4',
        start: '15:00',
        genre: [2, 4, 5],
        image: "img/mov2.jpg",
        hire: true,
        new: false,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        fb: "https://fb.com",
        twitter: "https://twitter.com",
        behance: "https://www.behance.net"
    },
    film4 = {
        name: 'Люди в черном: Интернэшнл',
        start: '19:00',
        genre: [0, 1, 4],
        image: "img/mov3.jpg",
        hire: true,
        new:false,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        fb: "https://fb.com",
        twitter: "https://twitter.com",
        behance: "https://www.behance.net"
    },
    film5 = {
        name: 'Собачья жизнь 2',
        start: '19:00',
        genre: [0, 1, 4],
        image: "img/mov2.jpg",
        hire: false,
        new:true,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        fb: "https://fb.com",
        twitter: "https://twitter.com",
        behance: "https://www.behance.net"
    },
    film6 = {
        name: 'Люди в черном: Интернэшнл',
        start: '19:00',
        genre: [0, 1, 4],
        image: "img/mov3.jpg",
        hire: false,
        new: true,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        fb: "https://fb.com",
        twitter: "https://twitter.com",
        behance: "https://www.behance.net"
    },
]

//Справочник жанров
const genre = [
    'Фантастика ',   //0
    'Боевик ',       //1
    'Фэнтези ',      //2
    'Драма ',        //3
    'Комедия ',      //4
    'Мультфильм ',   //5
]


// для секции
let filmsHire = [];
// для секции слайдер
let filmsNew = [];

for(let i=0; i < films.length; i++){
    if(films[i].hire === true){
        filmsHire.push(films[i])
    }
    
    if(films[i].hire === false && films[i].new === true) {
        filmsNew.push(films[i])
    }
}


const film = {
    getFb: function() {
        return this.fb;
    },
    getTwitter: function() {
        return this.twitter;
    },
    getBehance: function() {
        return this.behance;
    },
    getDescription: function() {
        return this.description;
    },
    getImg: function() {
        return this.image;
    },
    getName: function () {
        return this.name;  
    },
    getStart: function () {
        return this.start;   
    },
    getGenre: function () {
        const genreFilm = this.genre;
        let arrGenre = [];
        for(let i=0; i < genreFilm.length; i++){
            arrGenre.push(genre[genreFilm[i]]);
        }
        let strGenre = arrGenre.join(', ');
        return strGenre;     //return this.strGenre;   
    }
}



for(let i = 0; i< filmsHire.length; i++) {
    const filmName = film.getName.bind(filmsHire[i])();
    const filmStart = film.getStart.bind(filmsHire[i])();
    const filmGenre = film.getGenre.bind(filmsHire[i])();
    let filmsHireHTML = document.getElementById('filmsHire')


    let filmHTML = `<tr>
            <td id="start_film_2">${filmStart}</td>
            <td id="name_film_2">
            <a href="https://www.kinopoisk.ru/film/sobachya-zhizn-2-2019-1122114/" target="_blank">
            ${filmName}
            </a></td>
            <td id="ganar_film_2">${filmGenre}</td>
            <td>
                <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="33px" height="33px">
                    <path fill-rule="evenodd"  fill="rgb(255, 255, 255)"
                    d="M16.505,32.994 C7.393,32.994 0.005,25.607 0.005,16.494 C0.005,7.381 7.393,-0.006 16.505,-0.006 C25.618,-0.006 33.005,7.381 33.005,16.494 C33.005,25.607 25.618,32.994 16.505,32.994 ZM24.214,14.591 L18.356,14.631 L18.356,8.796 L13.958,8.777 L13.958,14.637 L8.083,14.637 L8.083,19.074 L13.958,19.074 L13.958,24.889 L18.336,24.889 L18.307,19.074 L24.231,19.074 L24.214,14.591 Z"/>
                </svg>
            </td>
        </tr>`
    let tr = document.createElement("tr");
    tr.innerHTML = filmHTML;
    filmsHireHTML.appendChild(tr);
}

const movieGrid = document.getElementById('movie-grid');
const tmpMovieGrid = document.getElementById('template-movie-box');

for(let i = 0; i< filmsNew.length; i++){
    const filmBehance = film.getBehance.bind(filmsNew[i])();
    const filmTwitter = film.getTwitter.bind(filmsNew[i])();
    const filmFb = film.getFb.bind(filmsNew[i])();
    const filmDescription = film.getDescription.bind(filmsNew[i])();
    const filmName = film.getName.bind(filmsNew[i])();
    const filmCover = film.getImg.bind(filmsNew[i])();
    const tmp = tmpMovieGrid.content.cloneNode(true);
    tmp.getElementById('tmp-img').src = filmCover;
    tmp.getElementById('tmp-name').innerText = filmName;
    tmp.getElementById('tmp-description').innerText = filmDescription;
    tmp.getElementById('fb').href = filmFb;
    tmp.getElementById('tw').href = filmTwitter;
    tmp.getElementById('bh').href = filmBehance;

    movieGrid.appendChild(tmp);
}







