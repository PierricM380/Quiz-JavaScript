const form = document.querySelector('.form-quizz');
const resultTitle = document.querySelector('.resultats h2');
const resultNote = document.querySelector('.note');
const helpResult = document.querySelector('.aide');
const allQuestions = document.querySelectorAll('.question-block');

let arrayResults = [];
let answer = ['c', 'a', 'b', 'a', 'c'];
let checkedArray = [];
const emojis = ['✅', '✨', '👀', '😭', '👎'];

form.addEventListener('submit', (event) => {
    // preventDefault unable refresh page
    event.preventDefault();
    // Catch value checked by user and push into empty array declared before
    for (let i = 1; i < 6; i++) {
        arrayResults.push(document.querySelector(`input[name="q${i}"]:checked`).value);
    }

    // console.log(arrayResults);

    // Check numbers of faults
    checkedFaults(arrayResults);
    arrayResults = [];
})

function checkedFaults(arResults) {
    for (let a = 0; a < 5; a++) {
        if (arResults[a] === answer[a]) {
            checkedArray.push(true);
        } else {
            checkedArray.push(false);
        }
    }
    // console.log(checkedArray);

    displayResults(checkedArray);
    displayColors(checkedArray);
    checkedArray = [];
}

function displayResults(arCheck) {
    const faultsNumber = arCheck.filter(element => element !== true).length;

    // console.log(faultsNumber);

    switch (faultsNumber) {
        case 0:
            resultTitle.innerText = `${emojis[0]} Bravo, c'est un sans faute ! ${emojis[0]}`
            helpResult.innerText = ''
            resultNote.innerText = '5/5'
            break;
        case 1:
            resultTitle.innerText = `${emojis[1]} Vous y êtes presque !  ${emojis[1]}`
            helpResult.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !'
            resultNote.innerText = '4/5'
            break;
        case 2:
            resultTitle.innerText = `${emojis[1]} Encore un effort ... ${emojis[2]}`
            helpResult.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            resultNote.innerText = '3/5'
            break;
        case 3:
            resultTitle.innerText = `${emojis[2]} Il reste quelques erreurs ${emojis[3]}`
            helpResult.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            resultNote.innerText = '2/5'
            break;
        case 4:
            resultTitle.innerText = `${emojis[3]} Peux mieux faire ! ${emojis[3]}`
            helpResult.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            resultNote.innerText = '1/5'
            break;
        case 5:
            resultTitle.innerText = `${emojis[4]} Peux mieux faire ! ${emojis[4]}`
            helpResult.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            resultNote.innerText = '0/5'
            break;
        default:
            "Oups, cas inatendu !!!"
    }
}

function displayColors(arBoolValue) {
    for (let c = 0; c < arBoolValue.length; c++) {
        if (arBoolValue[c] === true) {
            allQuestions[c].style.background = 'lightgreen';
        } else {
            allQuestions[c].style.background = '#ffb8b8';
            allQuestions[c].classList.add('echec');

            setTimeout(() => {
                allQuestions[c].classList.remove('echec');
            }, 500);
        }
    }
}

allQuestions.forEach(item => {
    item.addEventListener('click', () => {
        item.style.background = 'white';
    })
})