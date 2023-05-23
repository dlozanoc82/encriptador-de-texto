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
        const boton = e.target;
        console.log('Se ha hecho clic en el botón:', boton.textContent);
    }
})

function responseForDefault(){
    
}

function cleanForm(){
    containerMessage.innerHTML= '';
}

async function encryptMessage(message) {
    cleanForm();

    if(validationMessage(message)) return;
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
        containerMessage.appendChild(newItem);
        containerMessage.appendChild(btnCopy);
    }, 1000);

}

async function decryptMessage(message) {
    cleanForm();

    if(validationMessage(message)) return;
    const textDecrypt = await decryptTextWithRegex(message);

    if (!textDecrypt) {
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
        containerMessage.appendChild(newItem);
        containerMessage.appendChild(btnCopy);
    }, 1000);
}
