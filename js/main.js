import Swal from 'sweetalert2';

const data = [
    {
        vowel: 'a',
        encrypt: 'ai'
    },
    {
        vowel: 'e',
        encrypt: 'enter'
    },
    {
        vowel: 'i',
        encrypt: 'imes'
    },
    {
        vowel: 'o',
        encrypt: 'ober'
    },
    {
        vowel: 'u',
        encrypt: 'ufat'
    },
]

function autoResize(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
}

function copyText(textMessage) {

    navigator.clipboard.writeText(textMessage)
        .then(() => {
            Swal.fire(
                'Good job!',
                'Texto copiado correctamente',
                'success'
            )
            // Puedes mostrar un mensaje o realizar alguna acción adicional aquí
        })
        .catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se puede copiar el texto en el portapapeles'
            })

            console.error('Error al copiar el texto: ', error);
            // Maneja el error de acuerdo a tus necesidades
        });
}

function validationMessage(message) {

    if (message === '' || message.length < 5) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El mensaje esta vacio o es muy corto'
        })
        return true;
    }

    if(!(message === message.toLowerCase())){
        Swal.fire({
            icon: 'warning',
            title: 'Advertencia',
            text: 'El mensaje debe estar en minusculas'
        })
        return true;
    }

    return false;
}

async function encryptTextWithRegex(text) {
    const regex = new RegExp(data.map(item => item.vowel).join('|'), 'gi');

    const encryptedText = text.replace(regex, match => {
        const matchingData = data.find(item => item.vowel.toLowerCase() === match.toLowerCase());
        return matchingData ? matchingData.encrypt : match;
    });


    Swal.fire(
        'Good job!',
        'Mensaje encriptado correctamente',
        'success'
    )

    return encryptedText;
}

async function decryptTextWithRegex(text) {

    if (!isEncryptedText(text)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Este mensaje no esta encriptado, por favor vuelve a intentarlo!'
        })

        return null;
    }

    const regex = new RegExp(data.map(item => item.encrypt).join('|'), 'gi');

    const decryptedText = text.replace(regex, match => {
        const matchingData = data.find(item => item.encrypt.toLowerCase() === match.toLowerCase());
        return matchingData ? matchingData.vowel : match;
    });

    Swal.fire(
        'Good job!',
        'Mensaje desncriptado correctamente',
        'success'
    )


    return decryptedText;
}

function isEncryptedText(text) {
    const regex = new RegExp(data.map(item => item.encrypt).join('|'), 'gi');

    if (regex.test(text)) {
        return true;
    } else {
        return false;
    }
}

export{
    encryptTextWithRegex,
    decryptTextWithRegex,
    autoResize,
    validationMessage,
    copyText
}


