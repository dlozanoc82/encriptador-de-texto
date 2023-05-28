import './css/normalize.css';
import './css/styles.css';
import img from './img/busqueda.jpg'

import { 
    decryptTextWithRegex, 
    encryptTextWithRegex , 
    autoResize, 
    validationMessage,
    copyText
} from "./js/main";

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
btnDecrypt.addEventListener('click', () => {
    const message = textarea.value;
    decryptMessage(message);
})

//CONTAINER MESSAGE
const containerMessage = document.getElementById('content-message');
containerMessage.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const textMessage = document.getElementById('response').innerText;
        copyText(textMessage);
    }
})

function responseForDefault(){
    const defaultHtml = `
        <img src="${img}" alt="Mensaje encriptado o desencriptado">
        <h3>Ningún mensaje fue encontrado </h3>
        <p>Ingresa el texto que desees encriptar o desencriptar </p>
    `
    let newItem = document.createElement("div");
    newItem.innerHTML = defaultHtml;
    containerMessage.style.justifyContent = 'center';
    containerMessage.appendChild(newItem);

}

function cleanForm(){
    containerMessage.innerHTML= '';
}

async function encryptMessage(message) {
    cleanForm();

    if(validationMessage(message)) {
        responseForDefault();
        return null;
    };
    const textEncrypt = await encryptTextWithRegex(message);

    let newItem = document.createElement("p");
    newItem.classList.add('message__info__response');
    newItem.id = "response";
    newItem.innerHTML = textEncrypt;

    let btnCopy = document.createElement("button");
    btnCopy.classList.add('btn', 'button__copy');
    btnCopy.innerText = "Copiar";
    btnCopy.type = "button"; 

    setTimeout(() => {
        containerMessage.style.justifyContent = 'space-between';
        containerMessage.appendChild(newItem);
        containerMessage.appendChild(btnCopy);
    }, 1000);

}

async function decryptMessage(message) {
    cleanForm();

    if(validationMessage(message)) {
        responseForDefault();
        return null;
    };
    const textDecrypt = await decryptTextWithRegex(message);

    if (!textDecrypt) {
        responseForDefault();
        return null;
    }

    let newItem = document.createElement("p");
    newItem.id = "response";
    newItem.classList.add('message__info__response');
    newItem.innerHTML = textDecrypt;
    
    let btnCopy = document.createElement("button");
    btnCopy.classList.add('btn', 'button__copy');
    btnCopy.id = "button__copy";
    btnCopy.innerText = "Copiar";
    btnCopy.type = "button"; 

    setTimeout(() => {
        containerMessage.style.justifyContent = 'space-between';
        containerMessage.appendChild(newItem);
        containerMessage.appendChild(btnCopy);
    }, 1000);
}
