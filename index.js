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

const userName = prompt("Please enter your username:");
const password = prompt("Please enter your password");

if (userName === password){
        alert(`Welcome ${userName}`);
}
else{
    alert("Incorrect username and password.");
}

// Add two numbers 