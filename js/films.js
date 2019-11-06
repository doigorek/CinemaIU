const ganars = ['фантастика ', 'боевик ', 'приключения ', 'фэнтези ', 'драмма ', 'комедия ']
const films = [
    ['10:00', 'Человек паук', [2, 3, 4] ],
    ['12:00', 'Собачья жизнь 2', [1, 1]],
    ['14:00', 'История игрушек 4', [2, 2, 2, 4]],
    ['16:00', 'Люди в черном: Интернэшнл', [4]]
]



const filmstTableBody = document.getElementById('films-table-body');
for (let i = 0; i < films.length; i++) {
    
    let ganresIndex
    let currentFilmsGanars = ''
    for(let j = 0; j < ganars.length; j++)
    {
        ganresIndex = films[i][2][j]
        if(ganresIndex != undefined){
            currentFilmsGanars += String(ganars[ganresIndex])
        } 
    }
    
    // let ganresIndex = films[i][2][0]
    // let currentFilmsGanars = ganars[ganresIndex]

    filmstTableBody.innerHTML += `
        <tr>
            <td>${films[i][0]}</td>
            <td><a href="https://www.kinopoisk.ru/film/838/" target="_blank">${films[i][1]}</a></td>
            
            <td>${currentFilmsGanars}</td>

            <td>
                <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="33px" height="33px">
                <path fill-rule="evenodd"  fill="rgb(255, 255, 255)"
                    d="M16.505,32.994 C7.393,32.994 0.005,25.607 0.005,16.494 C0.005,7.381 7.393,-0.006 16.505,-0.006 C25.618,-0.006 33.005,7.381 33.005,16.494 C33.005,25.607 25.618,32.994 16.505,32.994 ZM24.214,14.591 L18.356,14.631 L18.356,8.796 L13.958,8.777 L13.958,14.637 L8.083,14.637 L8.083,19.074 L13.958,19.074 L13.958,24.889 L18.336,24.889 L18.307,19.074 L24.231,19.074 L24.214,14.591 Z"/>
                </svg>
            </td>
        </tr>
    `
}