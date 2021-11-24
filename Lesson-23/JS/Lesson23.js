


function ChangeText() {
    const p = document.getElementById('special-p');
    if (p.innerText == 'Foo') {
        p.innerText = 'Bar';
        p.style.color = 'blue';
    }
    else {
        p.innerText = 'Foo';
        p.style.color = 'red';
    }
    
}
function changeTextMultiple() {
const paragraphs = document.querySelectorAll('.changable-text');
//querySelector will only seleft first element
//querySelectorAll creates array
for (const paragraph of paragraphs) {
    if (paragraph.innerText == 'Foo') {
        paragraph.innerText = 'Bar';
        paragraph.style.color = 'blue';
    }
    else {
        paragraph.innerText = 'Foo';
        paragraph.style.color = 'red';
    }
}
}

function checkPalindrome() {
    const input = document.getElementById('input-text')
   
    const cleanedUpInput = input
    .value
    .toUpperCase()
    .replace(/ /g, '');
    const isPalindrome = cleanedUpInput
    .split('')
    .reverse()
    .join('') == cleanedUpInput;

    const result = document.getElementById('result');
        if (input.value == '') {
            result.innerHTML = 'The input field is empty';
        }
        else if (isPalindrome) {
            result.innerHTML = `<strong>${input.value}</strong> is a palindrome`;
        
        }
        else {
            result.innerHTML = `<strong>${input.value}</strong> is not a palindrome`;
        }   
}

function showCars() {
    let list = document.getElementById('cars-list');
    list.innerHTML = '';//every time everythin gets cleaned up and starts again
    const cars = ['vaz', 'gaz', 'maz', 'zaz', 'uaz'];

    for (const car of cars) {
        list.innerHTML = `${list.innerHTML} <li>${car}</li>`;
    }
}