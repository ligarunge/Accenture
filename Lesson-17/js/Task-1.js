//let number1 = 7;
//let number2 = 10;
//if (number1 > number2) {
    //console.log('First number is bigger');}
//else if(number1 < number2) {
    //console.log('Second number is bigger');
//}

//else {
   // console.log('Numbers are the same');
//}

//TASK 2
let number1 = 30;
let number2 = 100;
let number3 = 25;
if (number1 > number2 && number2 > number3) {
    console.log('First number is the biggest');}
  



//TASK 3
let numberA = 9;

if (numberA % 2 == 0) {
    console.log('The number is even');
}
else {
    console.log('The number is odd');
}
// TASK 4
let num = 30;
if (num > 0) {
    console.log('The number is positive');
}
else if (num == 0) {
    console.log('The number is zero');
}
else {
    console.log('The number is negative');
}

// TASK 5
let num5 = 41;
if (num5 % 5 == 0) {
    console.log('The number can be divided by 5');
}
else if (num5 % 11 == 0) {
    console.log('The number can be divided by 11');
}
else {
    console.log('Not dividable by 5 or 11');
}

//TASK 6
const leapYear = 2024;
let year = 1752;
if ((leapYear - year) % 4 == 0) {
    console.log('This is a leap year');
}
else {
    console.log('This is a normal 365 day year');
}

//TASK 8

//TASK 10
let angle1 = 90;
let angle2 = 30;
let angle3 = 15;
if (angle1 + angle2 + angle3 == 180) {
    console.log('This is a valid triangle');
}
else {
    console.log('This triangle does not exist');
}

//TASK 11

//TASK 13

let age = 43;
if (age <=18) {
    console.log('You are younger than 18');}
    else if (age >=19 && age <=30) {
        console.log('You are in the group from 19 to 30');
    }
    else if (age >=31 && age <=40) {
        console.log('You are in the group from 31 to 40');
    }
    else if (age >=41 && age <=50) {
        console.log('You are in the group from 41 to 50');
    }
    else if (age >=51) {
        console.log('You are in the group 51+');
    }


//TASK 14
let num14 = 60;
if (num14 % 2 == 0 && num14 % 3 == 0) {
    console.log('Fizz Bazz');
}

else if (num14 % 3 == 0) {
    console.log('Bazz');
}
else if (num14 % 2 == 0) {
    console.log('Fizz');
}
else {
    console.log(num14);
}

