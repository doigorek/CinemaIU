
const buttonShowModalPresent = document.getElementById('getPresentModal');
const modalPresentWindow = document.getElementById('modalPresent');
const closePresentWindow = document.getElementById('closeModalPresent');
const sendPresentInfo = document.getElementById('sendPresentInfo')

buttonShowModalPresent.onclick = function(){
    modalPresentWindow.style.display = 'block';
}

closePresentWindow.onclick = function () {
    modalPresentWindow.style.display = 'none';
}

 sendPresentInfo.onclick = function () {
    let nameGuest = document.getElementById('name_guest');
    let selectGuest = document.getElementById('select_guest');

    if(nameGuest.value){
        console.log('nameGuest', nameGuest.value); 
        nameGuest.style.border = '1px solid #bebebe'
    } else {
        nameGuest.style.border = '2px solid red'
    }

    if(selectGuest.value != 0){
        console.log('selectGuest', selectGuest.value);
        selectGuest.style.border = '1px solid #bebebe'
    } else {
        selectGuest.style.border = '2px solid red'
    }

    if (selectGuest.value != 0 && nameGuest.value) {
        modalPresentWindow.style.display = 'none'
    }
}


