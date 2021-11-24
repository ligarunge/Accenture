const num1 = parseInt('123'); // global functions - function that is available everywhere and not thied to an object
console.log(num1, typeof num1);

const num2 = parseFloat('123.23');
console.log(num2);

const num10 = 4.5;//methods . Math is referred to as a static object. 
const num11 = Math.round(num10);
console.log(num11)

console.log(console) //methods - functions that are tied to objects
console.log(Math);
console.log(Math.PI);
console.log(Math.round(5.5));
console.log(Math.ceil(5.4)); //always round UP
console.log(Math.floor(5.4)); //always rounds DOWN

const num3 = 3.1416;
console.log(num3.toFixed(2)); 
console.log(num3.toString());

const someText = 'Foo bar baz';
console.log(someText.toUpperCase());
console.log(someText.toLowerCase());
console.log(someText.length);
console.log(someText.replace('bar', 'biz'));
const someTextUpperCase = someText.toUpperCase();
console.log(someTextUpperCase);

const someText2 = 'foo bar baz';
console.log(someText2.replace(' ', '-')); //only replaces the first occurence
console.log(someText2.replace(/ /g, '-')); //this will replace all the spaces, letters etc(g is global)
console.log(someText2.replace(/a/g, '-'));

console.log(someText2.toUpperCase().replace(/o/g, 'e'));

//date object 
const now1 = new Date();
for (let i = 0; i < 1_000_000_000; i++) {
    
}
const now2 = new Date(); // the same origen but they are not equal.because they are separate instances of
const now3 = new Date();
        // but this time and date is unreliable - comes from my computer
console.log(now1.getMonth()); //months start with 0 - so november is 10th month. date starts with 1

console.log(now2.toISOString()); //ISO is always in UTC 0 time zone
console.log(now3.getTime()); //the best way for the computer

// functions for arrays
const cars= ['vaz', 'zaz', 'gaz', 'maz', 'uaz'];
console.log(cars);
console.log(cars.sort()) //does alphabetical sort
console.log(cars.sort().reverse())
console.log(cars) //it applies it to variable itself. mutates it and it keeps the new value

cars.push('audi'); //pop to remove
console.log(cars);//slice removes elements
console.log(cars.splice(2, 0, 'foo', 'bar')) //very rare operation
console.log(cars);
console.log(cars.pop())//shift removes from beginning. unshift adds one in front of array
console.log(cars);

console.log(cars.join(',').toUpperCase()) //to get form array to string
console.log('foo bar baz'.split('').sort().join()) //split opposite of join


//functions we create. We come up with names. same rules as for variables

console.log('before function definition');
function addTwoNumbers(number1, number2) {
return number1 + number2;
}
console.log(addTwoNumbers(1, 2));
console.log('after call 1');
console.log(addTwoNumbers(5, 2));


function isOdd(num) {
    return num % 2 == 1;
}
const numberIsOdd = 3;
console.log(isOdd(numberIsOdd));


function fizzBazz(cipars) {
    if (cipars % 2 == 0 && cipars % 3 == 0) {
        return 'Fizz Bazz';
    }
    else if (cipars % 2 == 0) {
        return 'Fizz';
    }
    else if (cipars % 3 == 0) {
        return 'Bazz';
    }
    else {
        return cipars;
    }
}
for (let i = 0; i < 100; i ++) {
    console.log(fizzBazz(i));
}