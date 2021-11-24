console.log('TASK 1')
console.log('The natural numbers are:')
num1 = 1;
while (num1 <= 10) {
    console.log(num1);
    num1++;
}
console.log('TASK 2')
console.log('The natural numbers are:')

num2 = 1;
sum2 = 0;
while (num2 <= 10) {
    sum2 += num2;
    console.log(num2);
    num2++;

}
console.log('The sum of first 10 natural numbers is:')
console.log(sum2);

console.log('TASK 3')
console.log('The natural numbers till 7 are:')

num3 = 1;
sum3 = 0;
while (num3 <= 7) {
    sum3 += num3;
    console.log(num3);
    num3++;

}
console.log('The sum of first 7 natural numbers is:')
console.log(sum3);

console.log('TASK 4')


console.log('TASK 5')
numDef = 35;
divider = 2;
check = 0;

while (divider <= numDef) {
    check = numDef % divider;
    
    if (check == 0 && divider != numDef) {
    console.log(`Number ${numDef} is NOT a prime number`);
    break;}
    
    else if (check == 0 && divider == numDef) {
        console.log(`Number ${numDef} is a prime number`);}
    
    divider++;
   
}
console.log('TASK 5 MY')
givenNum = 48;
div = 2;
while (div <= givenNum) {
    see = givenNum % div;
    
    if (see == 0 && div != givenNum) {
        console.log('Not Prime');
    break;
    }
   else if (see == 0 && div == givenNum) {
       console.log('Prime')
       
   }
    div++;
}

console.log('TASK 6')





console.log('TASK 7')
num7 = 5;
multi = 1;
result = 1;
 while(multi <= num7) {
     result = multi * result;
     multi ++;
 }
 console.log(`The factorial number of ${num7} is:`)
console.log(result);


console.log('TASK 10')
let number = 1234;
number += '';
let sum = 0;
for (let digit of number) {
    sum += digit;
}
console.log(sum);


