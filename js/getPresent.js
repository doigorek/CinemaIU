
let buttonShowModalPresent = document.getElementById('getPresentModal');
let modalPresentWindow = document.getElementById('modalPresent');
let closePresentWindow = document.getElementById('closeModalPresent');

buttonShowModalPresent.onclick = function(){
    modalPresentWindow.style.display = 'block';
}

closePresentWindow.onclick = function () {
    modalPresentWindow.style.display = 'none';
}

sendPresentInfo.onclick = function () {
    let nameGuest = document.getElementById('name_guest').value;
    let selectGuest = document.getElementById('select_guest').value;

    if(nameGuest.value){
        console.log('nameGuest', nameGuest.value); 
        nameGuest.style.border = 'none'
    } else {
        nameGuest.style.border = '2px solid red'
    }

    if(selectGuest != 0){
        console.log('selectGuest', selectGuest.value);
        selectGuest.style.border = '1px solid #bebebe'
    } else {
        selectGuest.style.border = '2px solid red'
    }

    if (selectGuest.value != 0 && nameGuest.value){
    
    }
}

let nameGuest = document.getElementById('name_guest')
nameGuest.change = function () {
    console.log('До нажатия кнопки отправить nameGuest', nameGuest.value)
}

let selectGuest = document.getElementById('select_guest')
selectGuest.change = function () {
    console.log('До нажатия кнопки отправить selectGuest', selectGuest.value)
}
