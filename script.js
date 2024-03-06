function processText() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    const cryptType = document.getElementById('cryptType').value;
    let outputText = '';

    if (!validateInput()) {
        alert("O texto deve conter apenas letras minúsculas e não deve conter caracteres especiais ou letras com acento.");
        return;
    }

    if (cryptType === 'encrypt') {
        outputText = encryptText(inputText);
    } else {
        outputText = decryptText(inputText);
    }

    document.getElementById('outputText').value = outputText;
}

function validateInput() {
    const inputText = document.getElementById('inputText').value;
    const regex = /^[a-z]+$/;

    if (!regex.test(inputText)) {
        return false;
    }

    return true;
}

function encryptText(text) {
    const encryptionMap = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    return text.split('').map(char => encryptionMap[char] || char).join('');
}

function decryptText(text) {
    const decryptionMap = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    return text.split(/(enter|imes|ai|ober|ufat)/).map(part => decryptionMap[part] || part).join('');
}

function copyToClipboard() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
}
