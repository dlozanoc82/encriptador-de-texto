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

function encryptTextWithRegex(text) {
    const regex = new RegExp(data.map(item => item.vowel).join('|'), 'gi');

    const encryptedText = text.replace(regex, match => {
        const matchingData = data.find(item => item.vowel.toLowerCase() === match.toLowerCase());
        return matchingData ? matchingData.encrypt : match;
    });

    return encryptedText;
}

function decryptTextWithRegex(text) {

    if (!isEncryptedText(text)) {
        console.log('Upps el texto no esta encriptado');
        return;
    }

    const regex = new RegExp(data.map(item => item.encrypt).join('|'), 'gi');

    const decryptedText = text.replace(regex, match => {
        const matchingData = data.find(item => item.encrypt.toLowerCase() === match.toLowerCase());
        return matchingData ? matchingData.vowel : match;
    });

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

// Ejemplo de uso:
const textoEncriptado = 'Hoberlai mufatndober';
const textoNoEncriptado = 'Hola mundo';

export{
    encryptTextWithRegex,
    decryptTextWithRegex,
    autoResize
}


