// var
// let
//const

var firstName;

firstName = 'John';
console.log(firstName);

var lastName = 'Doe';
lastName = 'Griffin';
console.log(lastName);

let age = 42;
console.log(age);

const pi = 3.14;
// pi = 123; - will not work
console.log(pi);

const cars = ['vaz', 'zaz', 'gaz', 'maz', 'uaz', 'bmw'];
console.log(cars);
console.log(cars[2]); //means third element
console.log(cars[6]);

let specialCar = cars[5];
console.log(specialCar);
cars[4] = 'ford';
console.log(cars);

let person = {
    name: 'John',
    surname: 'Doe',
    age: 42,
    'favorite color': 'Red',
};
console.log(person);
console.log(person.name);
console.log(person['favorite color']);

person.age = 41;
console.log(person);

// + - * / %

console.log(1+1);
let number1 = 5;
let number2 = 10;

console.log(number1 - number2);
console.log(number1 - 3);
console.log(2 + 2 * 2);
console.log((2 + 2) * 2);
console.log(5 % 2);
let name = 'John';
let surname = 'Doe';
console.log(`${name} ${surname} is our user`); //ES6
console.log(name + ' ' + surname + ' is our user'); //ES5

//comparisons
console.log(5 > 3);
console.log(5 < 3);
console.log(5 >= 3);
console.log(5 <= 3);

console.log(5 == 5); //true
console.log(5 == 4); //false
console.log(5 != 4); //true

console.log(5 == '5'); //true 

console.log(5 === '5'); //strict comparison takes in account data type too

//IF statements


if (false) {
    console.log('logging from inside of an if statement')
}
console.log('logging after an if statement')

let someAge = 13 
if (someAge > 18) {
    console.log('The person is older than 18');
    
}
//if (someAge < 18) {
   // console.log('The person is a kid')}

   else {
       console.log('The person is younger than 18')
   }

   let currentGrade = 7;
 //  if (currentGrade <= 6) {
   //    console.log('The student is in elementary school');
   //}
   //else {
     //  if (currentGrade <=9) {
       //    console.log('The student is in primary');
       //}
       //else {
         //  console.log('The student is in highschool');
       //}
   //}

   if (currentGrade <=6) {
       console.log('The student is in elementary school');
   } else if (currentGrade <=9) {
      console.log('The student is in primary');}
      else {
          console.log('The student is in highschool');
      }
      
     // if (currentGrade = 6) {
       // console.log('The student will need to pass the exam');}
       //DANGER

      if (currentGrade ==6) {
        console.log('The student is will need to pass the exam');}

        if (currentGrade == 6 || currentGrade == 9 || currentGrade == 12)
        {
            console.log('The student is will need to pass the exam');}

        let carColor = 'red';
        let carType = 'sports';

        if (carColor == 'red' && carType == 'sports')
            {
                console.log('Your car is Ferrari') //AND &&
            }
        