const ganar_1 = 'фантастика '
const ganar_2 = 'боевик '
const ganar_3 = 'приключения '
const ganar_4 = 'фэнтези '
const ganar_5 = 'драмма '
const ganar_6 = 'комедия '

let start_film_1 = '10:00'
let start_film_2 = '20:00'
let start_film_3 = '23:00'
let start_film_4 = '00:00'

let name_film_1 = 'Человек паук'
let name_film_2 = 'Собачья жизнь 2'
let name_film_3 = 'История игрушек 4'
let name_film_4 = 'Люди в черном: Интернэшнл'

// console.log('фильм 1', name_film_1)

let ganar_film_1 = ganar_1 + ganar_2 + ganar_3
let ganar_film_2 = ganar_3 + ganar_4 + ganar_6
let ganar_film_3 = ganar_1 + ganar_2 + ganar_3
let ganar_film_4 = ganar_1 + ganar_2 + ganar_3

/*1*/
let element_start_film_1 = document.getElementById('start_film_1')
let element_name_film_1 = document.getElementById('name_film_1')
let element_ganar_film_1 = document.getElementById('ganar_film_1')

// console.log('Элемент 1', document.getElementById('name_film_1'))

element_start_film_1.innerHTML = start_film_1
element_name_film_1.innerHTML = name_film_1
element_ganar_film_1.innerHTML = ganar_film_1

/*2*/
let element_start_film_2 = document.getElementById('start_film_2')
let element_name_film_2 = document.getElementById('name_film_2')
let element_ganar_film_2 = document.getElementById('ganar_film_2')

element_start_film_2.innerHTML = start_film_2
element_name_film_2.innerHTML = name_film_2
element_ganar_film_2.innerHTML = ganar_film_2

/*3*/
let element_start_film_3 = document.getElementById('start_film_3')
let element_name_film_3 = document.getElementById('name_film_3')
let element_ganar_film_3 = document.getElementById('ganar_film_3')

element_start_film_3.innerHTML = start_film_3
element_name_film_3.innerHTML = name_film_3
element_ganar_film_3.innerHTML = ganar_film_3
/*4*/
let element_start_film_4 = document.getElementById('start_film_4')
let element_name_film_4 = document.getElementById('name_film_4')
let element_ganar_film_4 = document.getElementById('ganar_film_4')

element_start_film_4.innerHTML = start_film_4
element_name_film_4.innerHTML = name_film_4
element_ganar_film_4.innerHTML = ganar_film_4

