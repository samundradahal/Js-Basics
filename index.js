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

// const properCase = (word) =>{
//     let newString = ""
//     for (let i = 0 ; i< word.length ; i++){
//         i === 0 || i === word.indexOf(" ") + 1 ? newString += word[i].toUpperCase() :  newString += word[i];
//     }
//     return newString;
// }

 

// const result2 = properCase("sagar dahal")
// console.log(result2)
//JS Function that converts long text to .... format
//Raktim is a Mern Stack teacher. He is teaching us Mern Course from 20th Jan
// Raktim is a Mern Stack teacher. He is ....

// const longFormat = (word) =>{
//     return word.substring(0,46).padEnd(49,".")
// }
// const result1 = longFormat("Raktim is a Mern Stack teacher. He is teaching us Mern Course from 20th Jan")
// console.log(result1)
//JS Function that replaces C++ to mern
///Raktim is a C++ teacher. He is teaching us C++ Course from 20th Jan
//Raktim is a Mern teacher. He is teaching us Mern Course from 20th Jan

// const replaceWord = (word) =>{
//     return word.replaceAll("C++" , "Mern")
// }

// const result = replaceWord("Raktim is a C++ teacher. He is teaching us C++ Course from 20th Jan")
// console.log(result)


//JS function that validates string email or not

// const emailFinder = (email)=>{
//     if (email.includes("@")) {
//         return "Valid Email";
//     }
//     else{
//         return "Invalid Email";
//     }
// }

// const result = emailFinder("samundra")
// console.log(result)

// const result1 = emailFinder("samundra@gmail.com")
// console.log(result1)


//JS function to count no of vowels

// const vowelCount = (sentence)=>{
//     lowCase = sentence.toLowerCase()
//     let counter = 0
//     for(let i = 0 ; i<lowCase.length; i++){
//        if (lowCase[i] === "a" || lowCase[i] === "e" || lowCase[i] === "i" || lowCase[i] === "o" || lowCase[i] === "u"){
//         counter ++;
//        }
//     }
//     return counter
// }


// const result4 = vowelCount("aaaaaaaaeeeeeee")
// const result5 = vowelCount("sdgdfhgdsfgew")

// console.log(result4 , result5)

// Coluser Function

// const print = (name) =>{
//     return `Print is ${name}`
// }

// const mainFn = (fname , lname , cb) =>{
//     const name = fname.concat(" ", lname)
//     return cb(name)
// }

// const result = mainFn("samundra", "dahal" , print)
// console.log(result)

//JS Function that checks if the password is valid password or not
//condition : at least 1 lower case at least 1 upper case at least 1 symbol password > 8 at least 1 number

// const checkPassword = (password)=>{
//     let isUpperCase = false
//     let isLowerCase = false
//     let isSymbol = false
//     let isNumber = false
//     let isSpace = false
//     let asciiNumber = 0
//     if (password.length <= 8){
//         return "Password must contains 8 characters"
//     }
//     for (let i = 0 ; i<password.length ; i++ ){
//         asciiNumber = password.charCodeAt(i); 
        
//         (asciiNumber >= 65 && asciiNumber <=90) ?
//         isUpperCase = true:
//         (asciiNumber >= 97 && asciiNumber <= 122) ?
//         isLowerCase = true : 
//         (asciiNumber >= 48 && asciiNumber <= 57)?  
//         isNumber = true : 
//         asciiNumber === 32?
//         isSpace = true:
//         isSymbol = true;
//     }
    
//    if  (isUpperCase && isLowerCase && isNumber && isSymbol) {
//     return "Valid Password"
//    }
//    else{
//     return "Password must contains at least one uppercase , one lowercase , one number and one symbol"
//    }
// }

// const result = checkPassword("123456789Cs &")
// console.log(result)

// JS function to check palindrome

// const checkPalindrom = (word) =>{
//     let newString = ""
//     for(i = word.length - 1;i >= 0 ; i-- ){
//         newString += word[i]
//     }

//     if (word === newString){
//         return `${word} is palindrome`
//     }
//     else{
//         return `${word} is not palindrome` 
//     }
// }

// const result = checkPalindrom("lol")
// console.log(result)

// const result1 = checkPalindrom("lolm")
// console.log(result1)


//Convert degree celcius to farheniet to vice versa and use celcius as default

// const changeTemp = (value , type = "C") =>{
//     const numValue = Number(value)
//     if (type === "F"){
//         return ((numValue-32)/9)*5
//     }
//     return ((9*numValue)/5)+32
// }

// const result = changeTemp("60")
// console.log(result)

// const result1 = changeTemp("45" , "F")
// console.log(result1)

//Objects

// const person = {
//     name : "Samundra Dahal",
//     birthYear : 2055,
//     isMale : true,
//     age : function(){
//         return 2080-this.birthYear
//     },
//     calcAge : function(){
//         return 2080-person.birthYear
//     },
// };

// console.log(person.name)
// console.log(person.age())
// console.log(person.calcAge())


//Create your own Object for car , laptop , tv and do CRUD operations

