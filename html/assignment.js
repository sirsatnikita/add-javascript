//1. Write a JavaScript function that reverses a number.
// const number= require('readline-sync')
// function reversed(n){
//    // n=n+'';
//     return n.split('').reverse().join('');

// }
// const k =number.question("enter the number");
// console.log(reversed(k));

// Write a JavaScript function that checks whether a passed string is a palindrome or not?

// function palindrome(number){
//    let k=number +"".split('').reverse().join('');
//     if (number===k){
//         console.log("palomdrom")
//     }
//     else{
//         console.log("not")
//     }
// }
// palindrome("nayan");


// const number= require('readline-sync');
// function rev(n){
//     n=n+''
//     return n.split('').reverse().join('');
// }
// const k= number.question("Enter the number");
// console.log(rev(k))


// var student= {
//     name:"nikita sirsat",
//     class:"vi",
//     rollno:"23"

// }; 
// for (var key in student){
// console.log(key);
// }



// var student= {
//     name:"nikita sirsat",
//     class:"vi",
//     rollno:"23"

// };
// var keys=Object.keys(student); 
// var keystring=keys.join(",");
// console.log(keystring);

// function intersection(dic1,dic2){
//     const k={};
//     for( const key in dic1){
//         if (dic2.hasOwnProperty(key)){
//             k[key]=dic1[key];
//         }
//     }
//     return k;
// }
// dic1={'A':10,'B':20,'C':30};
// dic2={'B':25,'B':30,'C':40};
// const k = intersection(dic1,dic2);
// console.log(k)

/**************USE MAP FUnction********************* */    
// 1.convert array in double
// function double(x){
//     return x*2; 
// }
// const arr=[5,7,8,9,2,0];
// const output=arr.map(double);
// console.log(output);

// 2.conver array in binary
// function binary(x){
//     return  x.toString(2);

// }
// const arr=[5,7,8,9,2,0];
// const output=arr.map(binary);
// console.log(output);

//  3.Square the Numbers:

// function Square(x){
//     return x**2;
// }
// const arr=[3,7,9,2,5,6];
// const output=arr.map(Square);
// console.log(output)

// 4.Convert Fahrenheit to Celsius:

// function Fahrenheit(x){
//     return (x-32)*5/9;
// }
// const Celsius=[3,6,7,8,9];
// const output= Celsius.map(Fahrenheit);
// console.log(output);


// 5.Capitalize Words: 

//g=(g*(i-j))/(j+1);

// function Capitalize(word){
//     return word.chartAt(0).toUpperCase()+word.slice(1);
// }
// const k=["niki","pinki","rinki"];
// const output=k.map(Capitalize);
// console.log(output)
// function capitalize(word) {
//     return word.charAt(0).toUpperCase() + word.slice(1);
// }

// const k = ["niki", "pinki", "rinki"];
// const output = k.map(capitalize);
// console.log(output); 

// const arr=[2,4,6,7,8];
// const output=arr.reduce(function(acc,curr){
// acc=acc+curr;
// return acc;
// },0);
// console.log(output);
// class name{
//     max(){

//     }
//     add(){

//     }
//     sum(){

//     }
// }

// function calculateTotal(number){
//     const modify= number.map( num=> num %3==0 ? num+1:num-1);
//     const total = modify.reduce((acc,curr)=>acc+curr,0);
//     return total ;
//     return modify

// }
// const numbers=[2,3,5,7,8,9];
// console.log(numbers);
//////////////////////// filter////////////////////////
// Question: Filter students who have passed the exam (grade >= 60).
// students = [    {'name': 'John', 'grade': 75},    {'name': 'Emma', 'grade': 55},    {'name': 'Michael', 'grade': 90}]
// Expected Output:
// [{'name': 'John', 'grade': 75}, {'name': 'Michael', 'grade': 90}]
// function filterPassedStudent(students){
//     return students.filter(students=>students.grade>=60);
// }
// const students= [   
//      {'name': 'John', 'grade': 75},   
//       {'name': 'Emma', 'grade': 55},   
//        {'name': 'Michael', 'grade': 90}
//     ];
//     console.log(filterPassedStudent(students));


// Question: Calculate the average grade of all students.
// students = [    {'name': 'John', 'grade': 75},    {'name': 'Emma', 'grade': 55},    {'name': 'Michael', 'grade': 90}]
// Expected Output: 73.33

// function CalculateAverageGrade(students){
//     const totalGrade=students.reduce((acc,curr) => acc + curr.Grade,0);
//     const studentAverage=totalGrade/students.lenght;
//     return studentAverage.toFixed(2);
// }
// const students = [   
//     {'name': 'John', 'grade': 75},   
//     {'name': 'Emma', 'grade': 55},   
//     {'name': 'Michael', 'grade': 90}
// ];
// console.log(CalculateAverageGrade(students));
// Function definition
// function calculateAverageGrade(students) {
//     const totalGrades = students.reduce((acc, curr) => acc + curr.grade, 0);
//     const averageGrade = totalGrades / students.length;
//     return averageGrade.toFixed(2); // Round to 2 decimal places
// }

// // Example usage
// const students = [
//     {'name': 'John', 'grade': 75},
//     {'name': 'Emma', 'grade': 55},
//     {'name': 'Michael', 'grade': 90}
// ];
// console.log(calculateAverageGrade(students)); // Output: 73.33

// Question: Convert student names to uppercase.
// students = [    {'name': 'John', 'grade': 75},    {'name': 'Emma', 'grade': 55},    {'name': 'Michael', 'grade': 90}]
// Expected Output:
// ['JOHN', 'EMMA', 'MICHAEL']

// function toUpperCase(students){
//     return students.map(student=>student.name.toUpperCase());
// }
// students = [
//     {'name': 'John', 'grade': 75},
//     {'name': 'Emma', 'grade': 55},
//     {'name': 'Michael', 'grade': 90}
// ]
// console.log(toUpperCase(students));

// Question: Calculate the total price of all products.
// products = [    {'name': 'Laptop', 'price': 1000},    {'name': 'Mouse', 'price': 20},    {'name': 'Keyboard', 'price': 50}]
// Expected Output: 1070

// function CalculateTotalPrice(products){
//     const totalPrice =products.reduce((acc,curr) => acc+curr.price,0);
//     return totalPrice;


// }
//  const student = [
//     {'name': 'Laptop', 'price': 2000},
//     {'name': 'Mouse', 'price': 27},
//     {'name': 'Keyboard', 'price': 59}
// ];
// console.log(CalculateTotalPrice(student));


// Question: Filter products with prices greater than $50.
// products = [    {'name': 'Laptop', 'price': 1000},    {'name': 'Mouse', 'price': 20},    {'name': 'Keyboard', 'price': 50}]
// Expected Output:
// [{'name': 'Laptop', 'price': 1000}, {'name': 'Keyboard', 'price': 50}]

// function products(price){
//     const greater=price.filter(prices=>(prices.price>=50));
//     return greater;
// }
// const product = [
//     {'name': 'Laptop', 'price': 1000},
//     {'name': 'Mouse', 'price': 20},
//     {'name': 'Keyboard', 'price': 50}
// ];
// console.log(products(product))


// You have an array of arrays containing numbers. Transform each inner array into an object with keys as "index" and "value" representing the index and value of each element respectively.

// Sample Input:

// javascript
// Copy code
// [[10, 20, 30], [40, 50, 60], [70, 80, 90]]
// Sample Output:

// javascript
// Copy code
// [[{ index: 0, value: 10 }, { index: 1, value: 20 }, { index: 2, value: 30 }], [{ index: 0, value: 40 }, { index: 1, value: 50 }, { index: 2, value: 60 }], [{ index: 0, value: 70 }, { index: 1, value: 80 }, { index: 2, value: 90 }]]
// function Tranceformarray(arrays){
//     return arrays.map(function(innerarray){
//         return innerarray.map(function(value,index){
//             return{index:index,value:index};
//         });

//     });
// }
// const array=[[10, 20, 30], [40, 50, 60], [70, 80, 90]]
// console.log(Tranceformarray(array));

// Manipulating strings with regular expressions:
// Given an array of strings containing dates in the format "YYYY-MM-DD", transform each string to the format "DD/MM/YYYY".

// Sample Input:

// javascript
// Copy code
// ['2023-05-15', '2023-06-20', '2023-07-25']
// Sample Output:

// javascript
// Copy code
// ['15/05/2023', '20/06/2023', '25/07/2023']

// function reverse(array){
//     const num=array+""
//     return reverse.array().join('')

// }
// const output=['2023-05-15', '2023-06-20', '2023-07-25']
// console.log(output);

// function reverse(array){
//     return array.map(function(dates){
//         var part=dates.split('-');
//         var year=part[0];
//         var month=part[1];
//         var day=part[2];
//         return day+"/"+month+'/'+year;
//     });

// }
// const output=['2023-05-15', '2023-06-20', '2023-07-25'];
// console.log(reverse(output));

// function exponential(average){
//     let m=[]
//     for(let i=0;i<average.length;i++){
//         if (i==0){
//             m.push(average[i]);
//         }else{
//             var k= alpha*average[i+1]+(1-alpha)*m[i-1];
//             m.push(k);
//         }
    
//     }
//     return m ;

// }
// const output=[10, 20, 30, 40, 50];
// const alpha=0.5;
// console.log(exponential(output,alpha));


// Transforming and filtering objects in an array:
// You have an array of user objects with name and age properties. Transform each object to include only users above a certain age threshold.

// Sample Input:

// javascript
// Copy code
// [{ name: 'John', age: 25 }, { name: 'Alice', age: 30 }, { name: 'Bob', age: 20 }]
// Sample Output (age threshold = 25):

// javascript
// Copy code
// [{ name: 'John', age: 25 }, { name: 'Alice', age: 30 }]

// function transform(array){
//     return array.filter(Number =>(Number.age>=25));
    
// }
// const output=[{ name: 'John', age: 25 }, { name: 'Alice', age: 30 }, { name: 'Bob', age: 20 }];
// console.log(transform(output));

// Calculating differences between consecutive elements:
// Given an array of numbers, calculate the differences between consecutive elements and store them in a new array.

// Sample Input:

// javascript
// Copy code
// [10, 15, 20, 25, 30]
// Sample Output:

// javascript
// Copy code
// [5, 5, 5, 5]

// function consecutive(array){
//     const m=[];
//     for (let i=1; i < array.length;i++){
//         m.push(array[i]-array[i-1]);
         
//     }
//     return m;
// }
// const output=[10, 15, 20, 25, 30];
// console.log(consecutive(output)You have an array of strings representing key-value pairs separated by a delimiter. Transform each string into an object with corresponding keys and values.

// Sample Input:

// javascript
// Copy code
// ['name:John', 'age:25', 'city:New York']
// Sample Output:

// javascript
// Copy code
// [{ name: 'John' }, { age: '25' }, { city: 'New York' }]
// function transformArrayToObject(array,delimiter){
//     return array.map(function(pair){
//         var kayValue=pair.split(delimiter);
//         let key= kayValue[0];
//         let value=kayValue[1];
//         let obj={};
//         obj[key]=value;
//         return obj;

//     });

// }
// var inputArray = ['name:John', 'age:25', 'city:New York'];
// var delimiter = ':';

// var output =  
// console.log(transformArrayToObject(output);

// function filterStudents(objArray) {
//     let filteredStudents = objArray.filter(student => (){
        
//     });
//     return filteredStudents;
// }

// const output= [
//     { name: 'Alice', scores: { math: 80, science: 70, history: 85 } },
//     { name: 'Bob', scores: { math: 55, science: 60, history: 45 } },
//     { name: 'Charlie', scores: { math: 75, science: 90, history: 65 } },
//     { name: 'David', scores: { math: 90, science: 85, history: 95 } },
// ];

//console.log(filterStudents(output));
// const n=require('readline-sync');
// let num=n.questionInt("enter the num");
// for (let i=1;i<num;i++){
//     let line = "";
//     for (let j=1;j<=i;j++){
//         line+=i+' ';
//     }
//     console.log(line)
// }

// for (let i=1;i<=4;i++){
//     let line="";
//     for (let j=1;j<=i;j++){
//         line+=j+" "
        

//     }
//     console.log(line);
// }
// const n=require("readline-sync");
// let num=n.questionInt("enter the num :-");
// let counter=1
// for (var i=0;i<num;i++){
//     let line="";
    
//     for (j=1;j<=i;j++){
//         line+=counter+" ";
//         counter++;

//     }
//     console.log(line);
// }
// const n=require("readline-sync");
// let num = n.questionInt("enter :- ");

// for (let i = 1; i <= num; i++) {
//     let line = "";
    
//     // Add spaces before the numbers to create the triangle pattern
//     for (let k = 0; k < num - i; k++) {
//         line += " ";
//     }

//     // Add numbers to the line
//     for (let j = 1; j <= i; j++) {
//         line += i + " ";
//     }

//     // Print the line
//     console.log(line);
// }

//  const n=require("readline-sync");
//  let num =n.questionInt("Enter the num :- ");
 
//  for (let i=1;i<=num;i++){
//     let line = "";
//     for (let j=0;j<num-i;j++){
//         line += " ";
//     }
//     for (let k=1;k<=i;k++){
//         line += k + " ";
//     }
//     console.log(line);

//  }
// const n=require("readline-sync");
// let num =n.questionInt("Enter the num :- ");
// let counter = 1;
 
//  for (let i=1;i<=num;i++){
//     let line = "";
   
//     for (let j=0;j<num-i;j++){
//         line += " ";
//     }
//     for (let k=1;k<=i;k++){
//         line += counter + " ";
//         counter++;
//     }
//     console.log(line);

//  }

// function longestWords(sen){
//     const arr=sen.split(/[^a-z^A-Z]/g,'');
//     let longestlenth=0;
//     result='';
//     for(let i=0;i<=arr.length;i++){
//         if (arr[i].length()>longestlenth){
//             result=arr[i];
//             longestlenth=arr[i].length();
//         }
//         return longestlenth;
//     }
//     const output= ["nikita ! & sirsat"];
//     console.log(longestWords(output));
// }

// function longestWord(sentence) {
//     // Split the sentence into an array of words
//     const words = sentence.split(' ');

//     // Initialize variables to store the longest word and its length
//     let longestLength = 0;
//     let longestWord = '';

//     // Iterate through each word in the array
//     for (let i = 0; i < words.length; i++) {
//         // Remove any non-alphanumeric characters from the word
//         const word = words[i].replace(/[^a-zA-Z]/g, '');
        
//         // Check if the current word is longer than the previously longest word
//         if (word.length > longestLength) {
//             longestLength = word.length;
//             longestWord = word;
//         }
//     }

//     // Return the longest word
//     return longestWord;
// }

// // Example usage:
// const sentence = "nikita ! & sirsatty";
// console.log(longestWord(sentence)); // Output: "nikita"

// //(/[^a-zA-Z]/g,'')


function stringnum(str1,str2){
    for (let i=0;i<=str2.length;i++){
        let char=str2[i];
        let index=str1.indexOf(char);
        if (index==-1){
            return false;
        }
        str1=str1.substring(0,index)+str1.substring(index+1);
    }
    return true;
}
console.log(stringnum("hello","helo"));