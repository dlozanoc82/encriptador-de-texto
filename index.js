import { decryptTextWithRegex, encryptTextWithRegex , autoResize} from "./js/main";


// FORM
const formulario = document.getElementById('form');
formulario.addEventListener("submit",(event) => event.preventDefault());

// CAPTURA EL CONTENIDO
const textarea = document.getElementById('encrypt-text');
textarea.addEventListener('input', () => autoResize(textarea));

//BTN ENCRYPT
const btnEncrypt = document.getElementById('encrypt');
btnEncrypt.addEventListener('click', ()  => {
    const message = textarea.value;
    encryptMessage(message)
});

//BTN DECRYPT
const btnDecrypt = document.getElementById('decrypt');

//CONTAINER MESSAGE
const containerMessage = document.getElementById('content-message');


//Validation Message
function validationMessage(message) {

    if (message === '' || message.length < 3) {
        console.log('El mensaje no es el esperado');
        return true;
    }

    if(!(message === message.toLowerCase())){
        console.log('El mensaje no esta en minusculas')
        return true;
    }

    return false;
}

function encryptMessage(message) {
    if(validationMessage(message)) return;
    const textEncrypt = encryptTextWithRegex(message);

    let newItem = document.createElement("p");
    newItem.classList.add('message__info__response');
    newItem.innerHTML = textEncrypt;
    containerMessage.appendChild(newItem);

}

function decryptMessage(message) {
    if(validationMessage(message)) return;
    const textDecrypt = decryptTextWithRegex(message);
}
