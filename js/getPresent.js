let name_guest = document.getElementById('name_guest')
let button_send_info = document.getElementById('sendPresentInfo')

console.log('До нажатия кнопки отправить', name_guest.value)

button_send_info.onclick = function(){
    let name = name_guest.value
    console.log('Имя ', name)
}

