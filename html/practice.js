//   1.Given length and breadth of a rectangle, return the area of the rectangle.

// ans :-

// function areaOfTriangle(length, breadth) {
//     return length * breadth;
// }

// var area = areaOfTriangle(20, 34);
// console.log("Area of the rectangle:", area);
/*************************************************** */

// 2.Take a number and print the square of the number.//

// function square(num1){
//     return num1*num1;
// }
// const number=square(4);
// console.log(number);

/******************************************** */
// 3. Take two numbers and only print the integer part when a is divided by b.//

// function division (a,b){
//     return Math.floor(a/b);
// }
// let integer=division(6,2);
// console.log(`integer part when a is divided by b ${integer}`);
/****************************************************************** */

//4.Take a number and print out the last digit of the number//

// function digit(number){
//     return (number % 10);

// }
// var lastNumber= digit(234);
// console.log(`The last digit of number is ${lastNumber}`);
/************************************************************** */

// 5. Take a number and find the cube of that number.//

// function cube(number){
//     return number*number*number;
// }
// let cubeNumber=cube(3);
// console.log("The number of cube is ",cubeNumber);

/**************************************************************** */

// 6 . Take a 3 digit number and print the reverse of that number. Ex - 235 = 532//

// function reverseNum(num){
//     r=0;
//     while (num >0){
//         const digit =num % 10;
//         r=(r*10)+digit;
//         num = Math.floor(num / 10);
//     }
//     return r;
// }
// const number = reverseNum(456);
// console.log(number);
/******************************************************************************** */

// 7. Take a number and print out the first digit of the number. Ex - 145 = 1, 789 = 7//
// function firstDigit(num){
//     while (num >= 10){
//         num /= 10;
//     }
//     return num;
// }
// const num = 1213;
// const firstDigitResult = firstDigit(num);
// console.log(`The first digit of ${num} is ${firstDigitResult}`);

// 8 . Take a number and return the sum of the first and last digit. Ex - 10 = 1+0 = 1, 452 = 4+2=7 //

// function sumOfDigit(num){
//     let lastDigit =num%10;
//     while(num>=10){
//         num= Math.floor(num/10);
//     }
//     let firstDigit= num;
//     let Sum=lastDigit+firstDigit;
//     return Sum;
// }
// let firstLastDigitResult=sumOfDigit(1234);
// console.log(firstLastDigitResult);

// 9. Take salary of five employees and print the average salary of all the employees//
// function employees(emp1,emp2,emp3,emp4,emp5,emp6){
//     let sum=emp1+emp2+emp3+emp4+emp5+emp6;
//     let len= employees.length;
//     let average= sum/len;
//     return average;

// }
// let total= employees(300,244,256,678,233,786);
// console.log(`The all emlpoyees average if ${total}`);

/**********************April 12 *********************/

// 1. Write a program that checks if a given number is even or odd.
// 2. Create a function that takes two numbers as parameters and returns the larger one.
// 3. Write a function that determines if a given year is a leap year.
// 4. Implement a program that checks whether a given character is a vowel or consonant.
// 5. Create a function that takes three numbers as input and returns the largest among them.
// 6. Write a program that checks if a given number is positive, negative, or zero.
// 7. Implement a function that calculates the grade of a student based on their score.
// 8. Create a program that determines if a given string is a palindrome.
// 9. Write a function that checks whether a person is eligible to vote based on their age.
// 10. Implement a program that determines the type of a triangle based on the lengths of its sides.

//1. Write a program that checks if a given number is even or odd.//

// function EvenvenOdd(num){
//     if (num % 2==0){
//         return "Even";
//     }
//     else{
//         return "Odd";
//     }
// }
// let checkNum = evenOdd(24);
// console.log(checkNum + " is " + EvenOrOdd(checkNum));

//2. Create a function that takes two numbers as parameters and returns the larger one.
// function largerNUmber(num1,num2){
//     if (num1>num2){
//         return num1;
//     }
//     else{
//         return num2;
//     }
// }
// const number= largerNUmber(3,5);
// console.log(`The larger number is ${number}`);


//3. Write a function that determines if a given year is a leap year.//

// function LeapYear(year){
//     if (year % 4 == 0 && year % 100 !=0 || year % 400 ==0){
//         return "Leap Year";
//     }
//     else{
//         return " Not Leap Year";
//     }
// }
// let isLeapYear= LeapYear(2020);
// console.log(`year is a ${isLeapYear}`);

//4 . Implement a program that checks whether a given character is a vowel or consonant.
// function checkCharacter(character){
//     if (character =="a" || character == "e" || character == "i" || character == "o" || character == "u"){
//     return (`The ${character} is a Vowel`);
//     }
//     else{
//         return (`The ${character} is a consonant`);
//     }
// }
// const find = checkCharacter("t");
// console.log(find); 


//5. Create a function that takes three numbers as input and returns the largest among them.//

// function largerNUmber(num1,num2,num3){
//     if (num1>num2 & num1>num3){
//         return (`${num1}, is largest`);
//     }
//     else if ( num2>num1 & num2>num3){
//         return (`${num2}, is largest`);
//     }
//     else{
//         return (`${num3}, is largest`);
//     }
// }
// const FindLargeNumber=largerNUmber(4,1,7);
// console.log(FindLargeNumber);

//6. Write a program that checks if a given number is positive, negative, or zero.//

// function checkNUmber(number){
//     if (number > 0){
//         return (`${number},is Positive`);
//     }
//     else if (number<0){
//         return (`${number},is a Negative`);
//     }
//     else{
//         return (`${number},is a Zero`);
//     }
// }
// let result=checkNUmber(-34);
// console.log(result);

// 7. Implement a function that calculates the grade of a student based on their score.

// function calculateGrade( score){
//     if (score >= 90){
//         return "A";
//     }
//     else if (score >= 80){
//         return "B";
//     }
//     else if (score >= 70){
//         return "C";
//     }
//     else if (score >= 60){
//         return "D";
//     }
//    else{
//     return "E";
//    }
// }
// console.log("score:95, grade: "+calculateGrade(95));
// console.log("score:85, grade: "+calculateGrade(85));
// console.log("score:75, grade: "+calculateGrade(75));
// console.log("score:65, grade: "+calculateGrade(65));
// console.log("score:55, grade: "+calculateGrade(55));

//8. Create a program that determines if a given string is a palindrome.//
// function palindrome(number){
//     len=number.lenght;
//     let mag= "it is a palindrome:";
//     for (var i=0;i<len/2;i++){
//         if (number[i] != number[len - 1-i]){
//             mag= "it is not [alindrome"
//         }

//     }
// }
// console.log(`${number}:${mag}`);


//9. Write a function that checks whether a person is eligible to vote based on their age.//
// function vote(age){
//     if (age >=18){
//         return (`${age}, is eligibale for the vote`);
//     }
//     else{
//         return (`${age},  not eligible for vote `);
//     }
// }
// let eligible= vote(45);
// console.log(eligible);

// 10. Implement a program that determines the type of a triangle based on the lengths of its sides.

// function triangle(side1,side2,side3){
//     if (side1 === side2 && side2 === side3) {
//         return "Equilateral triangle";
//     } else if (side1 === side2 || side1 === side3 || side2 === side3) {
//         return "Isosceles triangle";
//     } else {
//         return "Scalene triangle";
//     }
// }
// let side1 = 5, side2 = 5, side3 = 5;
// console.log("Triangle type:", triangle(side1, side2, side3));

// side1 = 4, side2 = 4, side3 = 3;
// console.log("Triangle type:", triangle(side1, side2, side3));

// side1 = 3, side2 = 4, side3 = 5;
// console.log("Triangle type:", triangle(side1, side2, side3));

/*****************************practice by myself****************************/

// function checkNum(num1,num2){
//     if (num1==100 || num2==100 ||num1+num2==100){
//         return true;
//     }
//     else{
//         return false;
//     }


// }
// let result=checkNum(10,80);
// console.log(result);

// let srr=[1,2,3,4,5];
// srr.splice(0,2,6,7,8);
// console.log(srr);

// let arr = ["a","b","c","d","e"];
// console.log(arr.slice(-2,3));

// let arr=[1,2];
// let arr1=[3,4];
// console.log(arr.concat(arr1));
/************************ SAME************** */
// let arr=[1,2];
// let arr1=[3,4];
// console.log(arr.concat([3,4]));
// let arr=[];
// console.log(arr.indexOf());
// console.log(arr.includes());


// if the value is not include in the array the output will be -1
// let str=["nikita"];
// console.log(str.split(''));
// let arr=[1,2,3,4];
// let array=arr.map((element,index)=>element*index);
// console.log(array);

// let string = ["niki","pinki","chinki"];
// let character=string.map(srt =>srt.split('').reverse().join(''));
// console.log(character);

// let string = ["niki","pinki","chinki"];
// string.fill(0);
// console.log(string);

/*******************Object*********************/

// let usre= {
//     name:"niki",
//     age:23,
//     city:"akola",
// };
// console.log(usre.name);

// let user= {
//     name:"niki",
//     age:23,
//     city:"akola",
// };
// delete user.age;
// console.log(user);

// let fruit= "apple";
// let bag={};
// bag[fruit]=5;
// console.log(bag);

//***Object.assign used for marge to array***/
 /*********practice 22 April *************** */

//  function reverse(...str){

//     return str.map(s => s.split('').reverse().join(''));
//  }
//  console.log(reverse("nikki","mikki"));

// function average(arr){
//    if (arr.length ===0){
//       return  0;
//    }
//    let sum= arr.reduce((acc,cur)=>acc+cur,0);
//    return sum/arr.length;
// }
// let number= [2,4,5,6];
// console.log(average(number));

// function findVowel(char){
//    let sum = 0;
//    let vowel= ["a","e","i","o","u"];
//    for (let i=0;i<char.length;i++){
//       if (vowel.includes(char[i].toLowerCase())){
//       sum++;
//       }
//    }
//    return sum;
// }
// let string = ["nikita"];
// console.log(findVowel(stringSum of Array Elements: Write a function to calculate the sum of all elements in an array of integers.
//  Average of Array Elements: Write a function to calculate the average of all elements in an array of integers.
//  Find Maximum Element: Write a function to find the maximum element in an array of integers.
// Find Minimum Element: Write a function to find the minimum element in an array of integers.
//  Array Search: Write a function to search for a given element in an array and return its index if found, otherwise return -1.
// Array Sorting: Write a function to sort an array of integers in non-decreasing order (ascending).
//  Array Filtering: Write a function to filter out even numbers from an array of integers and return a new array containing only the even numbers.));

// 1. sum of Array Elements: Write a function to calculate the sum of all elements in an array of integers.

// function array(num){
//    let sum=0;
//    sum= num.reduce((acc,cur)=>acc+cur,0);
//    return sum;

// }
// result=array([1,3,5,6,7]);
// console.log(result);


//2 .Write a function to calculate the average of all elements in an array of integers.

// function average(arr){
//       if (arr.length ===0){
//          return  0;
//       }
//       let sum= arr.reduce((acc,cur)=>acc+cur,0);
//       return sum/arr.length;
//    }
//    let number= [2,4,5,6];
//    console.log(average(number));

// 3.  Write a function to find the maximum element in an array of integers.

// function maximum(arr){
//    let max=arr[0];
//    for (let i=1; i<arr.length;i++){
//       if (arr[i]>max){
//          max=arr[i];
//       }
      
//    }
//    return max;
// }
// let result = maximum([3, 6, 7, 4, 8]);
// console.log(result);

// 4. Write a function to find the minimum element in an array of integers.

// function minimum(arr){
//       let min=arr[0];
//       for (let i=1; i<arr.length;i++){
//          if (arr[i]<min){
//             min=arr[i];
//          }
         
//       }
//       return min;
//    }
//    let result = minimum([3, 6, 7, 4, 8]);
//    console.log(result);

//5.Write a function to search for a given element in an array and return its index if found, otherwise return -1.

// function array(arr,num){
//    if (arr.includes(num)){
//       return arr.indexOf(num);
//    }
//    else{
//       return -1;
//    }
// }
// let output= array([5,4,7,8],8);
// console.log(output);

//6 . Write a function to sort an array of integers in non-decreasing order (ascending).

// function array(arr){
//    arr.sort((a,b)=> a-b);
//    return arr;
// }
// output = array([3,2,1,5,7,]);
// console.log(output);

//7. Write a function to filter out even numbers from an array of integers and return a new array containing only the even numbers.)
// function evenNumber(arr){
//    let num = arr.filter(number=>number%2==0);
//    return num;
// }

// let  number=[4,3,5,7,8,0,34,];
// console.log(evenNumber(number));

// let user = {
//    name:"nikita",
//    location: "Akola",
//    addition:(a,b)=>{
//       console.log(a+b);

//    }
// }

// user={
//    name:"nikita",
//    surname:"sirsat",

// fullname(){
//    console.log(user.name +" "+ user.surname)
// }
// }
// user.fullname();

// function counter(increment,docrement)
// const counter={
//     value:0,
//     increment(){
//         // value=value+1;
//         console.log(this.value=this.value+1);
//     },
//     dicrement(){
//         // value=value-1;
//         console.log(this.value=this.value-1);
//     },
//     reset(){
//         this.value=0;
//         console.log(this.value=0);
//     }
// }
// counter.increment();
// counter.increment();
// counter.increment();
// counter.reset();
// counter.increment();
// counter.increment();
// counter.dicrement();
// counter.increment();

// const item ={
//     apple:2,
//     orange:3,
//     mango:4,
// }
// console.log(item.mango);
// for(let key in item){
//     console.log(key);
//     console,log(item[key]);
// }

// const wages={
//     nikita:200,
//     pratiksha:400,
//     avantika:300,
//     dhanu:200,
// };
// for(let key in wages){
//     console.log(wages[key]+100);
// };

let a={
    name:"punam",

}
// premitive= = copy  
// non-premitive=referance


