/*let x = 5;
let y = 7;
let z = 9;
if (x >= y && y >= z){
console.log("ture");
}
else{
console.log("false");
}
const prompt = require("prompt-sync")();
let x = prompt("Enter the value of x:-");
let y = prompt("Enter the value of x:-");
if (x > y){
    console.log((x - y)*2);
}
else if (x < y) {
    console.log(x + y);
}
else{
    console.log(x * y);
}*/
/*const prompt = require("prompt-sync")();
var a = prompt("Enter the value of a:-");
var b = prompt("Enter the value of b:-");
if(a>b)
{
    console.log((a-b)*2);
}
else if(b>a)
{
    console.log(a+b);
}
else{
    console.log(a*b);
}*/
// let number = [4,6,8,3,9,2];
// for (let i = 0;i < number.length;i++){
//     if (number[i] % 3 == 0 ){
//         document.write(number[i]);
//     }
// }

// let str= ["apple", "banana", "orange", "grape"];
// for(var i=0;i<str.length;i++){
// for (var i = str.length - 1; i >= 0; i--) {
//     let reverseStr = str[i];
// }
// }
//     for (let j = str[i].length - 1; j >= 0; j--) {
//         reversedString += strings[i][j];
//     }
//     document.write(reversedStr + "<br>");

// 

let arr = [12345];

for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let strNum = num.toString(); // Convert the number to a string
    
    for (let j = 0; j < strNum.length; j++) {
        let power = strNum.length - j - 1; // Calculate the power of 10 for the current digit
        let digit = parseInt(strNum[j]); // Get the current digit
        
        let result = digit * Math.pow(10, power); // Calculate the value based on the digit and power
        console.log(result); // Output the calculated value
    }
}












