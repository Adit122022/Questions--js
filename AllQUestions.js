/* 1 ACCEPTING NUMBERS USING PROMPT AND CASTING INTO INTEGER
 let a = prompt("ENTER YOUR FIRST NUMBER")
     let b = prompt("ENTER YOUR SECOND NUMBER")
     let a = Number(prompt("ENTER YOUR FIRST NUMBER"))
     let b = Number(prompt("ENTER YOUR SECOND NUMBER"))
    let a = parseInt(prompt("ENTER YOUR FIRST NUMBER"))
    let b = parseInt(prompt("ENTER YOUR SECOND NUMBER"))
    console.log(`sum of ${a} and ${b} is  ${a+b}`)

 ***************************************************************************************
 2  ACCEPTING NAME AND AGE AND DISPLAYING THE GREET WITH AGE AND NAME 
 let a =prompt("Enter your Name...");
 let b = Number( prompt("Enter your age"))
 console.log("Hello  " +a + "!" + "  You are " + b + " years old") ;

 ***************************************************************************************
 3  <!-- Accept  two numbers and return  which on is greatest -->
 let a =parseFloat(prompt("Enter length "))
        let b =parseFloat(prompt("Enter width "))
        
       if(a > b ){
        console.log("Length is greater than width")

       }
       else{
        console.log("Width is greater than length")
       }

 ***************************************************************************************
 4   ACcept length and width of a rectangle as double . Calculate and print the area and perimeter
  let a =parseFloat(prompt("Enter length "))
        let b =parseFloat(prompt("Enter width "))
        
        let area = a * b
        let perimeter = 2 * (a + b)
         
        console.log("Area: " + area + ", perimeter: " + perimeter)
      
******************************************************************************************
 5 Take a number and display the number is even or odd

  let a =parseFloat(prompt("Enter Number "))
        if(a %2 ===0){
            console.log("Odd")
        }
        else{
            console.log("Even")
        }

 *****************************************************************************************
 6  sum of two numbers 

 var a =5
        var b = 10
        console.log(`Sum of ${a} and ${b} is ${a+b}`)
        console.log("Sum of 5 and 7 is" + (a + b))

 ******************************************************************************************
 7 take name and age and display u are eligible for vote or not if not then display the age in how mnay years u are eligble for vote

  let a =prompt("enter name")
        let b = parseInt(prompt("Enter age"))
if (a >=18){
    alert(`${a} you are eligible for vote`)
}

else{
    confirm(`${a} is not eligible to vote , you are eligble for vote in ${18-b}`)
}


************************************************************************************************
8    Take a number bteween 1-7 and dsiplay the name of day
*****first way
  let day = prompt("enter day number between 1-7");
     let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
     alert(daysOfWeek[day-1]); // JavaScript array starts from 0, so we subtract 1 to get the correct index.

**** Another way to solve it using switch-case statement
    // switch (day) {
    //     case "1":
    //         alert("Sunday");
    //         break;
    //     case "2":
    //         alert("Monday");
    //         break;
    //     case "3":
    //         alert("Tuesday");
    //         break;
    //     case "4":
    //         alert("Wednesday");
    //         break;
    //     case "5":
    //         alert("Thursday");
    //         break;
    //     case "6":
    //         alert("Friday");
    //         break;
    //     case "7":
    //         alert("Saturday");
    //         break;
    //     default:
    //         alert("Invalid day number");
    //         break;
    // }


************************************************************************************************
9  Accept the lengths of the three sides of a triangle. Calculate the area 
using Heron's formula and print it.

function calculate(a,b,c){
    if (a + b > c && a + c > b && b + c > a) {
        let s = (a+b+c)/2
        let area =Math.sqrt(s* ( s - a ) * ( s - b ) * ( s - c ));
        return area;
    }
    else{
        return "The given sides do not form a valid triangle.";
    }

}
let a = parseFloat(prompt("Enter the first side of the triangle:"));
let b = parseFloat(prompt("Enter the second side of the triangle:"));
let c = parseFloat(prompt("Enter the third side of the triangle:"));
let result = calculate(a,b,c);
console.log(result !== "Invalid triangle sides" ? `The area of the triangle is: ${result}` : result);


************************************************************************************************

10   Accept a year from the user and determine if it is a leap year or not based 
on the leap year conditions.
 If the year is evenly divisible by 4, it is a leap year.
 If the year is evenly divisible by 100, it is not a leap year, unless:
 The year is also evenly divisible by 400, then it is a leap year

 let a = parseInt(prompt("Enter the year"))
if((a % 4 ===0 && a % 100 !==0) || a % 400===0 ){
    console.log( `${a} is leap year`)
}
else{
    console.log(``${a}  is not a leap year`)
}


************************************************************************************************

11  Accept an integer and  Print hello world n times
let a = parseInt(prompt("Enter  the number"))
for (let i =1 ; i<=a ; i++){
console.log("Hello world")
}


************************************************************************************************

12 Write a program to print all natural numbers up to a given limit 'n'.
let a = parseInt(prompt("Enter  the number"))
for (let i =1 ; i<=a ; i++){
console.log(i)
}


************************************************************************************************
13 Write a program to calculate the sum of the first 'n' natural numbers

let a = parseInt(prompt("Enter  the number"))
let sum =0;
for (let i =1 ; i<=a ; i++){
sum+=i;
}
console.log(sum)

************************************************************************************************

14.  Write a program to calculate the factorial of a given number.
let a = parseInt(prompt("Enter  the number"))
let fact =1;
for (let i =1 ; i<=a ; i++){
fact*=i;
}
console.log(fact)

*************************************************************************************************
15.  Write a program to check if a given number is a prime number or not, 
considering the following conditions:
 A prime number is a positive integer greater than 1, which has only two 
positive divisors: 1 and number itself.

let a = parseInt(prompt("Enter  the number"))
let count = 0;
// factore 
if(a==1) console.log("number is not prime")
for(let i = 2; i < a/2 ; i++){
    if(a % i == 0){
        // console.log(`${i} is a factor of ${a}`)
        count++;
    }
}
if(count == 0) console.log(`${a} is a prime number`)
    else console.log(`${a} is not a prime number`)


**************************************************************************************************

16.  Write a program to calculate the sum of the digits of a given number.
let a = parseInt(prompt("Enter  the number"))
let sum =0;
while(a>0){
    let digit = a % 10;
   sum+=digit;
a = Math.floor(a / 10);
}
console.log(sum)

**************************************************************************************************
17. You are tasked with creating a shop discount program that calculates
 discounts based on the total price of items purchased by a customer. 
0 >= totalPrice <= 5000               -   0% discount
 5000 > totalPrice <= 7000      -   5% discount
 7000 > totalPrice <= 9000      -   10% discount
 9000>totalPrice                               -   20% discount

 let totalPrice = parseInt(prompt("Enter the total price of the product"))
let discount =0;
if(totalPrice >= 0 && totalPrice <= 5000) {
 discount =0
}else if(totalPrice <5000 && totalPrice<=7000){
   discount=5
}
else if(totalPrice <7000 && totalPrice<=9000){
    discount=10
}
else{
    discount =20
}

   let finalPrice = totalPrice - ((totalPrice *discount) /100)
   console.log(`The final price after discount is ${finalPrice}`)

**************************************************************************************************
18 .A utility company needs a program to calculate electricity bills. 
Accept the number of units consumed from the user and calculate the      
bill amount based on the following criteria:
 For the first 100 units, the rate is rupees 4.2 per unit.
 For the next 100 units, the rate is rupees 6 per unit.
 For the next 200 units, the rate is rupees 8 per unit.
 For units above 400, the rate is rupees 13 per unit 

let unit = parseInt(prompt("Enter the total unit"))
let amount =0;
if(unit>400)
  {
    amount = (unit - 400)*13
    unit = 400;
  }
  if(unit >200 && unit <=400){
    amount += (unit - 200)*8
    unit = 200;
  }
  if(unit>100 && unit <=200){
    amount += (unit - 100)*6
    unit = 100;
  }
  if(unit <=100){
    amount += unit*4.2
  }
  
   console.log(`The final price  is ${amount}`)


**************************************************************************************************

19 Write a program to accept a number and print its reverse. Input will not 
contain trailing zero.
let a = parseInt(prompt("Enter  the number"))
let reverse =0;
while( a > 0 ){
    let digit = a % 10;
   reverse = reverse * 10 + digit;
a = Math.floor(a / 10);
}
console.log(reverse);

**************************************************************************************************
 20 .Write a program to accept a number and determine if it is a palindromic 
number. A palindromic number is a number that remains the same when 
its digits are reversed.
let a = parseInt(prompt("Enter  the number"))
let reverse =0;
while( a > 0 ){
    let digit = a % 10;
   reverse = reverse * 10 + digit;
a = Math.floor(a / 10);
}
if(a === reverse){
console.log(`${a} is palindrome `)
}
else{
console.log(`${a} is not a palindrome`)
}

*/





 

