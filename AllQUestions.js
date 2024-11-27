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

9


************************************************************************************************

10


************************************************************************************************

11


************************************************************************************************

12


************************************************************************************************
13


*/