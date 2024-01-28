//Prints the message
// console.log("Hello Worlds");


//Variables(var,let,const)
//camelCase pattern for variable assignment

// var myName = "Samundra";
// myName = "Sagar"
// console.log(myName);

// let hello = "Ram";
// hello = "Shyam";
// console.log(hello);

//Create 4 variables using const keyword for table , fan ,chair , pen

// const fanCompany = "Baltra";
// const tableType = "Dining Table";
// const chairType = "Armchair";
// const penName = "Cello pen";


//Comments
//Single line comment
/* Multi
Line 
Comment */

//use var and let keyword for four variables

// var employeeName = "Kiran"
// var bankName = "NIC Asia"
// bankName = "Siddhartha"  //reassigning the var value
// console.log(bankName)
// var templeName = "Pashupati Temple"
// var mathMarks = 90

// let myMarks = [80,90,70,60,50]
// let mySubject = ["Math","Science","Physics","Social","Computer Network"]
// let myPercentage = 70.8
// let mySchool = "XYZ School"

//January 24

//Interactions
//alert,prompt,confirm

// const isNepali = confirm("Are you Nepali?")
// console.log(isNepali)

// const input = prompt("Then tell me what is the national bird of Nepal?")
// console.log(input)

// alert("You entered " + input + " .Now serach weather you are right or wrong :D")


// Data types

// const checkGender = prompt("Are you male or female (m/f)?").toUpperCase();

// switch (checkGender){
//     case "M":
//         alert("Yor are male.");
//         break;
//     case "F":
//         alert("You are female.")
//         break;
//     default:
//         alert("Please choose m or f")
//         break;
// }

// const userName = prompt("Please enter your username:");
// const password = prompt("Please enter your password");

// if (userName === password){
//         alert(`Welcome ${userName}`);
// }
// else{
//     alert("Incorrect username and password.");
// }

// Add two numbers 

// const firstNumber = Number(prompt("Please enter first Number"));
// const secondNumber = Number(prompt("Please enter second Number"));

// const result = firstNumber + secondNumber;
// console.log(1/0)
// if (isNaN(result)){
//     alert("Please enter numbers only.")
// }
// else{
//     alert(`The result is ${result}`)
// }

//Ternary Operator
//condition ? true : false

//if else 
//isNaN(result) ? alert("Please enter numbers only.") : alert(`The result is ${result}`);

//else if else
// condition ? statement : condition ? statement : statement
// const month = prompt("Please enter Month");
// month === "jan" ? alert("January") : month === "feb" ? alert("Feburary"): alert("March")

//operators

// const userName = prompt("What is your name?");
// const time = Number(prompt("Enter the time in hours"));

// isNaN(time)? alert("Invalid time"): time >=5 && time < 12 ? alert(`Good morning ${userName}`) : time >= 12 && time <3 ? alert(`Good afternoon ${userName}`):alert(`Good evening ${userName}`);


// assigment : Make a multiplication table of 2,3,5 using for , while and do while loop 

// for(let i=1 ; i<=10; i++){
//     console.log(`2 * ${i} = ${2*i}`);
// }
// console.log("--------------------")
// let i = 1;
// while(i<=10){
//     console.log(`3 * ${i} = ${3*i}`);
//     i++;
// }
// console.log("--------------------")
// let j = 1;
// do{
//     console.log(`5 * ${j} = ${5*j}`);
//     j++;  
// }
// while(j<=10)

//functions

//Write a function to do multiplication table of 2

// function table2(number){
//     return 2*number;
// }


// const selectNumber = Number(prompt("2*?"))
// const result = table2(selectNumber);
// console.log(result)


//Function to find the area of rectangle;

// const areaOfRect = (l,b) =>{
//     return(l*b);
// }

// const length = Number(prompt("Enter length"))
// const breadth = Number(prompt("Enter breadth"))

// result1 = areaOfRect(length,breadth);
// console.log(result1);


//Function to revers a number

// const reverse = (number)=>{
//     const str = String(number)
//     let newString = "";
//     for(let i = str.length - 1 ; i >= 0; i--){
//         newString += str[i];
//     }
//     return newString;
// }

// const result = reverse(312134);
// console.log({result})

// Comma seperator function

// const commaFormatter = (num) =>{
//     const str = String(num)
//     let newString = ""
//     let reverseString = ""
//     let counter = 0
//     for(let i = str.length - 1 ; i >= 0 ; i--){
//         if (counter === 3){
//             newString += ","
//             counter = 0
//         } 
//         newString += str[i]
//         counter ++;
//     }
//     for(let i = newString.length - 1 ; i >= 0 ; i--){
//         reverseString += newString[i]
//     }

//     return reverseString;
// }

// const result = commaFormatter(1000000000);
// console.log({result})


//Assignment 
//JS Function that converts regular text to proper case
//samundra dahal =. Samundra Dahal
//JS Function that converts long text to .... format
//Raktim is a Mern Stack teacher. He is teaching us Mern Course from 20th Jan
// Raktim is a Mern Stack teacher. He is ....
//JS Function that replaces C++ to mern
///Raktim is a C++ teacher. He is teaching us C++ Course from 20th Jan
//Raktim is a Mern teacher. He is teaching us Mern Course from 20th Jan