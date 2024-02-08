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

// const car = {
//     name: "BMW",
//     manufactureYear : 2013,
//     color : "White",
//     manufactureAge : function(){
//         return 2024-this.manufactureYear
//     }

// }

// console.log(car.name)
// console.log(car.manufactureAge())

// car.manufactureYear = 2020
// console.log(car.manufactureAge())

// delete car;

// const laptop = {
//     name: "MacBook Air 2020",
//     manufactureYear : 2020,
//     color : "Gold",
//     laptopSize : 13
// }

// console.log(laptop.name)
// laptop.name = "Dell"

// console.log(laptop.name)
// delete laptop

// const tv = {
//     name: "Sony 52 inch",
//     manufactureYear : 2019,
//     color : "Gold",
//     brand :"Sony"
// }

//SPread Operator

// const person = {
//     name : "Samundra",
//     password:"xyz@1234",
//     email : "sam@gmail.com"
// }

// const {password, ...per} = person
// console.log(per)

//Exercise

// const prod = {
//     name: "headphones",
//     price: 200,
//     //discount: "7%",
// }

// if (prod.hasOwn("discount")){
//     console.log(`Already discounted by ${prod.discount} `)
// }
// else{
//     if (prod.price <100){
//         prod.price = prod.price  - (prod.price * (7/100))
//         prod.discount = "7%"
//         console.log(prod)
//     }
//     else{
//         prod.price = prod.price  - (prod.price * (10/100)) 
//         prod.discount = "10%"
//         console.log(prod)
//     }
// }

//Assignment

// const group = [{name : "Samundra Dahal", age: 25},{name : "Sagar Dahal" , age:25},{name: "Kiran Neupane" , age: 19},{name:"Sangeet Chand",age:6}]
// const group1 = [{name : "Samundra Dahal", age: 25},{name : "Sagar Dahal" , age:25},{name: "Kiran Neupane" , age: 19},{name:"Sangeet Chand",age:6}]

// const compareAge = (a,b) => a.age - b.age



// console.log(group.sort(compareAge))

// console.log(group.sort((a,b)=>{
//     const ageA = a.age
//     const ageB = b.age

//     if (ageA > ageB){
//         return 1;
//     }
//     if (ageA < ageB){
//         return -1
//     }
//     return 0
// }))


//JS Function that checks if the user has access or not
//Retrun boolean value


// const checkRole = (ur , sr) =>ur.some((role)=>
//         sr.includes(role))



// console.log(checkRole(["admin", "vendor"], ["user" , "vendor"] ))
// console.log(checkRole(["shop", "facility"], ["user" , "vendor"]))
// console.log(checkRole(["user", "vendor"], ["user" , "vendor"]))


//slug

// const slugFormatter = (string) =>  string.toString().toLowerCase(/~`!@#$%^&*()_+=:;"'<>,./g).replaceAll(" ", "-")


// console.log(slugFormatter("Understanding Nestjs Architectire"))
// console.log(slugFormatter("An Introduction's to C"))

//addition of array

// const array = [1,2,3,4,5,6,7,8,9,10]

// const sumArray = (arr)=> arr.reduce((accumulator , currentValue)=> accumulator+currentValue,0)

// const resp = sumArray(array)
// console.log(resp)

//Compare the 2 arrays and find common food if any: Assignment

// const food1 = ["Apple" , "Banana" , "Mango"]
// const food2 = ["Apple" , "Banan" , "Watermelon"]

// const findCommon = (foodA , foodB)=> foodA.filter((element)=> foodB.includes(element))
// console.log(findCommon(food1,food2)) 

//Pagination

// const array = ["Samundra" , "Sagar" , "Raktim" , "Kiran" , "Sangeet","Amod","Royal","Suman", "Sandeep" , "Santosh"]

// const pagination = (arr ,page , limit) => arr.slice((limit*page)-limit ,limit*page)

// console.log(pagination(array,1,5))
// console.log(pagination(array,2,5))
// console.log(pagination(array,3,2))

//Immutable JS

//JS finction that checks username and password in database and check if the password match or not.

// const db = [{name : "samundra" , password: "sam"},{name : "sagar" , password: "sagar123"},{name : "kiran" , password: "password"},{name : "sangeet" , password: "password2"},{name: "sandeep" , password: "pass123"},{name : "samundras" , password: "helloworld"}]

// const checkUsernamePassword = (arr , username , password)=> arr.some((element)=> element.name === username && element.password === password )
//do using find

// console.log(checkUsernamePassword(db, "sagar" , "sagar123"))
// console.log(checkUsernamePassword(db, "samundra" , "sam1"))

// Search
// const searchUsername = (arr , word) => arr.filter((element) => element.name.toLowerCase().slice(0, word.length) === word.toLowerCase())

// console.log(searchUsername(db, "samundra"))

//Date

//ISO String , UTC string , Time String

// const now = new Date()
// console.log(now)
// console.log(now.toISOString())
// console.log(now.toDateString())
// console.log(now.toUTCString())
// console.log(now.toTimeString())


// const birds = ["Eagle","Emus","Parrot","Sparrow","egrets"]
// const findBird = (bird)=>{ 
//     bird.filter((element)=>{
//         if 
//     })
// }

// console.log(findBird(birds))

//1.

const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

const nameFinder = (character)=>character.map((element)=> element.name)
const heightFinder = (character)=>character.map((element)=> element.height)
const nameAndHeightFinder = (character) => character.map((element) => {
    const {name,height} = element
    return {name,height}
} )
const firstNameFinder = (character) => character.map((element) => element.name.split(" ")[0])

console.log(nameFinder(characters))
console.log(heightFinder(characters))
console.log(nameAndHeightFinder(characters))
console.log(firstNameFinder(characters))

const totalMass = (character)=> character.reduce((accumulator,currentValue) => accumulator+ Number(currentValue.mass),0)
const totalHeight = (character) => character.reduce((acc, current)=> acc + Number(current.height),0)
const totalCharacterCount = (character) => character.reduce((acc, current)=> acc + current.name.length,0)
const blueEyeCharacterCount = (character) => {
    return blue.reduce((acc ,cv )=> acc ,{})
}

console.log(totalMass(characters))
console.log(totalHeight(characters))
console.log(totalCharacterCount(characters))
console.log(blueEyeCharacterCount(characters))

const greaterThanHun = (character)=> character.filter((element) => Number(element.mass) > 100)
const lessThanTwoHun = (character)=> character.filter((element) => Number(element.height) < 200)
const maleCharacter = (character)=> character.filter((element) => element.gender.toLowerCase() === "male")
const femaleCharacter = (character)=> character.filter((element) => element.gender.toLowerCase() === "female")

console.log(greaterThanHun(characters))
console.log(lessThanTwoHun(characters))
console.log(femaleCharacter(characters))

