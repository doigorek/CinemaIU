const films = [
    {
        name: 'Человек паук',
        start: '10:00',
        genre: [0, 1],
        image: "img/mov1.jpg",
        hire: true,
        new: true,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        fb: "https://fb.com",
        twitter: "https://twitter.com",
        behance: "https://www.behance.net",
        price: 320,
    },
    {
        name: 'Собачья жизнь 2',
        start: '12:00',
        genre: [2, 3, 4],
        image: "img/mov1.jpg",
        hire: true,
        new: true,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        fb: "https://fb.com",
        twitter: "https://twitter.com",
        behance: "https://www.behance.net",
        price: 380,
    },
    {
        name: 'История игрушек 4',
        start: '15:00',
        genre: [2, 4, 5],
        image: "img/mov2.jpg",
        hire: true,
        new: false,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        fb: "https://fb.com",
        twitter: "https://twitter.com",
        behance: "https://www.behance.net",
        price: 400,
    },
    {
        name: 'Люди в черном: Интернэшнл',
        start: '19:00',
        genre: [0, 1, 4],
        image: "img/mov3.jpg",
        hire: true,
        new:false,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        fb: "https://fb.com",
        twitter: "https://twitter.com",
        behance: "https://www.behance.net",
        price: 420,
    },
    {
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
    {
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
    'фантастика ',   //0
    'боевик ',       //1
    'фэнтези ',      //2
    'драма ',        //3
    'комедия ',      //4
    'мультфильм ',   //5
]


// для секции
const filmsHire = [];
// для секции слайдер
const filmsNew = [];

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
        const arrGenre = [];
        for(let i=0; i < genreFilm.length; i++){
            arrGenre.push(genre[genreFilm[i]]);
        }
        const strGenre = arrGenre.join(', ');
        return strGenre;     //return this.strGenre;   
    },
    getPrice: function() {
        return this.price
    }
}

/********L-22*******/
let orderForm = document.getElementById('orderForm');
let closeOrderForm = document.getElementById('closeOrderForm');
closeOrderForm.onclick = function () {
    orderForm.style.display = 'none';
}

/**************/
for(let i = 0; i< filmsHire.length; i++) {
    const filmName = film.getName.bind(filmsHire[i])();
    const filmStart = film.getStart.bind(filmsHire[i])();
    const filmGenre = film.getGenre.bind(filmsHire[i])();
    const filmsHireHTML = document.getElementById('filmsHire');
    const filmPrice = film.getPrice.bind(filmsHire[i])();

    const filmHTML = `<tr>
            <td id="start_film_2">${filmStart}</td>
            <td id="name_film_2">
            <a href="https://www.kinopoisk.ru/film/sobachya-zhizn-2-2019-1122114/" target="_blank">
            ${filmName}
            </a></td>
            <td id="ganar_film_2">${filmGenre}</td>
            <td>${filmPrice}</td>
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
    // tr.className = 'strFilmHire'
    tr.innerHTML = filmHTML;
    
    tr.onclick = function() {
        
        orderForm.style.display = 'block';
         
        let orderFilmName = document.getElementById('orderFilmName');
        let orderFilmStart = document.getElementById('orderFilmStart');
        let orderFilmGenre = document.getElementById('orderFilmGenre');
        let orderFilmPrice = document.getElementById('orderFilmPrice');

        orderFilmName.innerHTML = filmName;
        orderFilmStart.innerHTML = filmStart;
        orderFilmGenre.innerHTML = filmGenre;
        orderFilmPrice.innerHTML = filmPrice;
        
        let orderFilmTicket = document.getElementById('orderFilmTicket');
        let orderFilmTotalPrice = document.getElementById('orderFilmTotalPrice');

        orderFilmTotalPrice.innerHTML = filmPrice * orderFilmTicket.value ;

        orderFilmTicket.onchange = function () {
            orderFilmTotalPrice.innerHTML = filmPrice * orderFilmTicket.value;
        }

    }

    filmsHireHTML.appendChild(tr);

}


let sendOrder = document.getElementById('sendOrder');
sendOrder.onclick = function () {
    let orderClientName = document.getElementById('orderClientName');

    if(orderClientName.value){
        orderClientName.style.border = '1px solid #bebebe'
    } else {
        orderClientName.style.border = '1px solid red'
    }
}



// const listFilms = document.querySelectorAll('.strFilmHire')

// console.log('List films', listFilms)

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









