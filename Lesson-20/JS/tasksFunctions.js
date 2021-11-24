console.log('TASK 1');


function anagrams(text1, text2) {
    if(text1 == text2){
    return true;}
    else {
        return false;
    }
}
const word1 = 'EL bow';
const word2 = 'Belo w';
wordOrder1 = word1.replace(/ /g, '').toUpperCase().split('').sort().toString();//last one can be join
wordOrder2 = word2.replace(/ /g, '').toUpperCase().split('').sort().toString();

console.log(wordOrder1);
console.log(wordOrder2);
console.log(anagrams(wordOrder1, wordOrder2));


console.log('TASK 2')

function palindrome(text, textReversed) {
    if (text == textReversed){
        return true;
    }
    else  {
        return false;
    }
}
const wordPalindrome = 'kayak';

wordToArray = wordPalindrome.toUpperCase().split("");
wordReversed = wordToArray.reverse()
wordToCompare = wordReversed.toString()
wordToCompare2 = wordPalindrome.toUpperCase().split("").toString();
//console.log(wordToArray);
//console.log(wordReversed);
console.log(wordToCompare);
console.log(wordToCompare2);

console.log(palindrome(wordToCompare, wordToCompare2));


console.log('TASKS 3rd of November');
console.log('TASK 1');

function NumReversed(num) {
  
    return num.toString().split("").reverse().join("");

}
console.log(NumReversed(68974521));
console.log(NumReversed(33333888888));

console.log('TASK 2');
function isPalindrome(word) {
    const wordClean = word.toUpperCase().replace(/ /g, '');
    const wordReverse = wordClean.split('').reverse().join('');
    return wordClean == wordReverse;
}

console.log(isPalindrome('kayak'));
console.log(isPalindrome('alus ari Ira Sula'));
console.log(isPalindrome('zakis'));

console.log('TASK 3')
function AlphabeticOrder(wordAlph) {
return wordAlph.toLowerCase().replace(/ /g, '').split('').sort().join('');

}
console.log(AlphabeticOrder('znazibaravigvams'));
console.log(AlphabeticOrder('zilite kakis citi dzivnieki'));

console.log('TASK 4');
function CapitalLetter(textCap) {

    let wordsT4 = textCap.split(" ");
  for (let iT4 = 0; iT4 <= wordsT4.lenght; iT4++) {
    console.log(wordsT4);
    wordsT4[iT4] = wordsT4[iT4][0].toUpperCase() + wordsT4[iT4].substr(1);
    console.log(wordsT4[iT4]);
  }
}

console.log(CapitalLetter("brown fox is foxy"));


console.log('TASK 5');
function longestWord(textText){

}

console.log('TASK 6') 
function CountVowels(textT6) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let sumVowels = 0;
    textCheckT6 = textT6.toLowerCase().replace(/ /g, '').split('');
    console.log(textCheckT6);
    for (let iT6 = 0; iT6 <= textCheckT6.lenght; iT6++){
       
        for (let jT6 = 0; jT6 <= vowels.lenght; jT6++) {
            if (textCheckT6[iT6] == vowels[jT6]) {
                sumVowels += sumVowels;
            }
        }
    }
}
console.log(CountVowels('pilseta pie juras'))


console.log('TASK 8');
function TypeOf(something) {
    return typeof something;
}
console.log(TypeOf('zivtinas'));
console.log(TypeOf(155598752.366));
console.log(TypeOf(true));
console.log(TypeOf(0));

function PerfectNumber(numPerf) {
   
    for (let i = 1; i <= numPerf; i++) {
     let divisorSum = 0;
     for (let j = 1; j < i; j++){
         if (i % j == 0) {
             divisorSum += j;
             
             console.log(i);
             console.log(j);
         }
     }
     if (divisorSum == numPerf) {
         console.log(`${numPerf} is perfect number`);
             break;}
     else {
     
             console.log(`${numPerf} is not perfect`);  
             
     }
     }
     
 }
 console.log(PerfectNumber(17));
 