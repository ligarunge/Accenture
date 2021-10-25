//TASK 1
let number1 = 7;
let number2 = 10;
if (number1 > number2) {
    console.log('1. First number is bigger');}
else if(number1 < number2) {
    console.log('1. Second number is bigger');
}

else {
    console.log('1. Numbers are the same');
}

//TASK 2
let num1 = 300;
let num2 = 100;
let num3 = 2555;
if (num1 > num2 && num2 > num3) {
    console.log('2. First number is the biggest');}
  else if (num2 > num1 && num1 > num3) {
      console.log('2. Second number is the biggest');
  }
  else {
      console.log('Third number is the biggest');
  }



//TASK 3
let numberA = 9;

if (numberA % 2 == 0) {
    console.log('3. The number is even');
}
else {
    console.log('3. The number is odd');
}
// TASK 4
let num = 30;
if (num > 0) {
    console.log('4. The number is positive');
}
else if (num == 0) {
    console.log('4. The number is zero');
}
else {
    console.log('4. The number is negative');
}

// TASK 5
let num5 = 41;
if (num5 % 5 == 0) {
    console.log('5. The number can be divided by 5');
}
else if (num5 % 11 == 0) {
    console.log('5. The number can be divided by 11');
}
else {
    console.log('5. Not dividable by 5 or 11');
}

//TASK 6
const leapYear = 2024;
let year = 1752;
if ((leapYear - year) % 4 == 0) {
    console.log('6. This is a leap year');
}
else {
    console.log('6. This is a normal 365 day year');
}

//TASK 8

let month = 9;
if (month == 4 || month == 6 || month == 9 || month == 11) {
    console.log('8. This month has 30 days');
}

else if (month == 2) {
    console.log('8. This month has 28 days');
}
else {
    console.log('8. This month has 31 days');
}

//TASK 9
let amount = 340;
const note1 = 50;
const note2 = 20;
const note3 = 10;
const note4 = 5;
if (amount % 50 == 0) {
    console.log(amount/ 50);
}
else if (amount % 50 >= 20 && (amount % 50) % 20 == 0 ) {
    console.log(((amount - (amount % 50)) / 50) + ((amount % 50) / 20));
}
else if (amount % 50 >= 20 && (amount % 50) % 20 >= 10 && ((amount % 50) % 20) % 10 == 0 ) {
    console.log((((amount - (amount % 50)) / 50) + ((amount - (amount - (amount % 50))) - ((amount % 50) % 20)) / 20) + (amount % 50 % 20 / 10));
}


//TASK 10
let angle1 = 90;
let angle2 = 30;
let angle3 = 15;
if (angle1 + angle2 + angle3 == 180) {
    console.log('10. This is a valid triangle');
}
else {
    console.log('10. This triangle does not exist');
}

//TASK 11

let sideA = 200;
let sideB = 20;
let sideC = 20;

if (sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA) {
    console.log('11. This is a valid triangle');
}
else {
    console.log('11. The triangle is NOT valid');
}

//TASK 12
let sideA2 = 30;
let sideB2 = 50;
let sideC2 = 80;

if (sideA2 == sideB2 && sideB2 == sideC2) {
    console.log('12. This is a equilateral triangle');
}
else if (sideA2 == sideB2 || sideA2 == sideC2 || sideB2 == sideC2) {
    console.log('12. This is a isosceles triangle');
}

else {
console.log('12. This is a scalene triangle');
}

//TASK 13

let age = 43;
if (age <=18) {
    console.log('13. You are younger than 18');}
    else if (age >=19 && age <=30) {
        console.log('13. You are in the group from 19 to 30');
    }
    else if (age >=31 && age <=40) {
        console.log('13. You are in the group from 31 to 40');
    }
    else if (age >=41 && age <=50) {
        console.log('13. You are in the group from 41 to 50');
    }
    else if (age >=51) {
        console.log('13. You are in the group 51+');
    }


//TASK 14
let num14 = 60;
if (num14 % 2 == 0 && num14 % 3 == 0) {
    console.log('14. Fizz Bazz');
}

else if (num14 % 3 == 0) {
    console.log('14. Bazz');
}
else if (num14 % 2 == 0) {
    console.log('14. Fizz');
}
else {
    console.log(`14. ${num14}`);
}

