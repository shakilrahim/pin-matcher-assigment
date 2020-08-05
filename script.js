
const wrongStatus = document.getElementById("wrongStatus"); 
const successStatus = document.getElementById("successStatus"); 
const generateButton = document.getElementById("generate-button");
const randomInputField = document.getElementById("random-value"); 
const numberButtons = document.querySelectorAll('[data-number]'); 
const userInputField = document.getElementById("userInputValue");
const submitButton = document.getElementById("submitButton"); 
const clearAllUserInput = document.getElementById("clearAllUserInput"); 
const backspaceButton = document.getElementById("backspaceButton");
const btnClickCount = document.getElementById("btnClickCount"); 
var submitCount = 0;

function hideStatus() { 
    wrongStatus.style.display = 'none';
    successStatus.style.display = 'none';
    randomInputField.style.backgroundColor = '#3D4153';
}

window.onload = hideStatus;

generateButton.addEventListener('click', function () {
    generateRandomNumber(); 
});

function generateRandomNumber() {
    var random = Math.floor(Math.random() * 9999);
    if (random.toString().length === 4) {
        randomInputField.value = random;
        changeInputFieldColorBgColorTextAline(randomInputField);
    }
    else {
        
        generateRandomNumber();
    }
}

for (var i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', function () {
        userInputField.value = userInputField.value + this.id;
        changeInputFieldColorBgColorTextAline(userInputField);
    });
}

function changeInputFieldColorBgColorTextAline(changesID) {
    changesID.style.color = 'white';
    changesID.style.backgroundColor = '#3D4153';
    changesID.style.textAlign = 'center';
}

submitButton.addEventListener('click', function () {
    if (parseInt(randomInputField.value) == parseInt(userInputField.value)) {
        successStatus.style.display = 'inline';
        wrongStatus.style.display = 'none';
        submitCount = 0;
        btnClickCount.innerText = 3;
    } else {
        submitCount++;
        wrongStatus.style.display = 'inline';
        successStatus.style.display = 'none';
    }

    checkTotalSubmit(submitCount);
});

clearAllUserInput.addEventListener('click', function () {
    userInputField.value = "";
});

backspaceButton.addEventListener('click', function () { 
    if (userInputField.value.length > 0) {
        userInputField.value = userInputField.value.slice(0, -1);
    }
});

function checkTotalSubmit(submitCount) { 
    if (submitCount == 1) {
        btnClickCount.innerText = 2;
    } else if (submitCount == 2) {
        btnClickCount.innerText = 1;
    } else if (submitCount == 3) {
        btnClickCount.innerText = 0;
        submitButton.disabled = true;
        submitButton.style.backgroundColor = 'red';
    }
}