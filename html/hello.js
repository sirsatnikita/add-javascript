/*// console.log("hello world");
var v=10;
if(v==1)
{
    console.log("YES");
}
else{
    console.log("NO");
}
const prompt =require("prompt-sync")();
var a = prompt("Enter the value of a:-");
for (var i = 1; i <= a; i++){
    for (var b = 1; b <= i; b++){
        console.log(b + " ");
    }
    console.log("<br>"");
}*/
/*const prompt = require("prompt-sync")();
var a = parseInt(prompt("Enter the value of a: "));

var output = "";
for (var i = 1; i <= a; i++) {
    for (var b = 1; b <= i; b++) {
        output += b + " ";
    }*/
   // output += "<br>";


//console.log(output);

//laxical scoping
// function main(){
//     const name ="nikita sirsat";

//     function sayMyName(){
//         console.log(name)
//     }
//     sayMyName();
// }
// main();

// function main(){
//     const name ="nikita sirsat";

//     function sayMyName(){
//         console.log(name)
//     }
//     return sayMyName;
// }
// let fn = main();
// fn();
// fn();
// fn();
// fn();

/*function a(){
    b()
    console.log("hello world");
    
}
function a(b){
    console.log("1234");
}
a()
b()
*/

// setTimeout(function (){
//     console.log("after 3 sec");
//     console.log("end");
    
// },3000)
// console.log("start");

// const arr = [1,1,2,2,3,3,4,5,5,5,5];
// const newSet = new Set (arr);
// const newarr = [...newSet];
// console.log(newarr);

// console.log("start");

// function cb(){
//     console.log("callback");
// }
// setTimeout(cb,1000);

// console.log("end");
// 
// const input=require("readline-sync")

// let a=input.question("enter the text")
// console.log(a);

// obj = {
//     a:2,
//     b:3,
//     c:4
// }
// for (i in obj){
//     console.log(obj[i]);
// }
// obj ={
//     key: {
//       a:10
//     }
// }
// console.log(obj.key.a)

// const input = require("readline-sync");
// Obj={}
// key = input.question ("enter the vaalue")
// value = input.question("enter the value")
// Obj.keys=value
// console.log(Obj);


// const input = require("readline-sync");
// Obj={}
// Name = input.question ("enter the Name")
// email = input.question ("enter the email")
// Num = input.question ("enter the Number")
// pass = input.question("enter the Passward")
// Obj[email]={
    
// }
// console.log(Obj);

// let array=["nikki","pinki","dinki","zinki"];
// b = array.includes("nikki");
// console.log(b);
// function cricketer(a,b)
// {
//     return function nikita(){
//         console.log(a +"hello"+b);

//     }
// }

// cricketer(2,3)()
// function a(){
//     return function (){
//         console.log("hello i am a fun of a");

//     }
// }
// let b=a()

// function xyz(para){
//     para()

// }
// xyz(b);
// acc value hold karta hai 
//curr 
// arr=[2,4,5,7,8];
// const sum = arr.reduce(function(accumulator,currentValue){
//     return accumulator+currentValue
// },0)

// const multiplication = arr.reduce(function(accumulator,currentValue){
//     return accumulator*currentValue
// },1)
// console.log("Sum:", sum); 
// console.log("Multiplication:", multiplication);

// function reverseString(str){
//     return str.split('').reverse().join('');
// }

// let input="hello";
// let output = reverseString(input);
// console.log(output);


// function input(arr){
//     var sum = 0;
//     for (var i=0;i<arr.length;i++){
//         sum+=arr[i]
//     }
//     return sum;
// }
// var a=[2,3,5,6];
// var result = input(a);
// console.log(result);

// function input(arr){
//     mul=1;
//     for (var i=0;i<arr.length;i++){
//         mul*=arr[i];
//     }
//     return mul;
// }
// var s = [3,4,6,7];
// var result=input(s);
// console.log(result);

// function isPalindrome(str) {
//     str = str.replace(/\s/g, "").toLowerCase();
//     return str === str.split("").reverse().join("");
// }

// var input = "racecar";
// console.log(isPalindrome(input));
// let day=31;
// let hour=24;
// let min=60;
// let mul=hour*min;
// let cal=mul*31*60;
// console.log(cal)
// let days= 365;
// let hour=24;
// // let min=60;
// // let sec=60;
// let cal=days*hour;
// console.log(cal);

// let Day=7;
// if (Day==1){
// console.log("mon");
// }
// else if (Day==2){
// console.log("tue");
// }
// else if (Day==3){
// console.log("wed");
// }
// else if (Day==4){
// console.log("thu");
// }
// else if (Day==5){
// console.log("fri");
// }
// else if (Day==6){
// console.log("sat");
// }
// else if (Day==7){
//     console.log("san");
// }
// else{
//     console.log("not valid")
// }
let height;
let width=10;
let area=(height ?? 100)*(50 ?? width)
console.log(area);