// let a = 8;
// let b = 5;
// if (a > b){
//     c = a - b;
//     k = c*2;
// console.log(k);
// }
// if (a < b){
//     c = a+b;
// console.log(c);
// }
// if (a == b){
//     c = a * b;
//     console.log(c);
// }

/*words = ['apple', 'orange', 'banana', 'apple', 'orange', 'apple'] 
count_word_frequency(words) 
Output:

 {'apple': 3, 'orange': 2, 'banana': 1}*/
//  function count_word_frequency(words){
//     var wordsfreq={}
//     words.forEach(function(word){
//         if (wordsfreq[word]){
//             wordsfreq[word]++;
//         }else{
//             wordsfreq[word]=1;
//         }
//     });
//     return wordsfreq;
// }
// var words=['apple','orange','banana','apple','orange'];
// var wordsfreq=count_word_frequency(words);
// console.log(wordsfreq);
// ############################################################################################################################################
// 2)Define a function with takes two dictionaries as parameters and merge them and sum the values of common keys.

// Example:

// dict1 = {'a': 1, 'b': 2, 'c': 3}
// dict2 = {'b': 3, 'c': 4, 'd': 5}
// merge_dicts(dict1, dict2)
// Output:

// {'a': 1, 'b': 5, 'c': 7, 'd': 5}
//*************************************/
// function margrDicts(dic1,dict2){
//     const margedict={};
//     for (const key in dic1 ){
//         margedict[key]=dic1[key];

//     }
//     for(const key in dict2){
//         if (margedict[key]){
//             margedict[key]+=dict2[key];
//         }else{
//             margedict[key]=dict2[key]
//     }
// }
// return margedict;
// }
// const dic1={'a':1,'b':2,'c':3};
// const dict2={'b':3,'c':4,'d':5};

//console.log(margrDicts(dic1,dict2));
//#################################################################
// 3)Key with the Highest Value
// Define a function which takes a dictionary as a parameter and returns the key with the highest value in a dictionary.

// Example:

// my_dict = {'a': 5, 'b': 9, 'c': 2}
// max_value_key(my_dict))
// Output:
// b
//*************************************************************************************************** */

// function maxValueKey(dict1){
//     let maxKey=null;
//     let maxValue= Number.MIN_SAFE_INTEGER;
//     for (const key in dict1){
//         if (dict1[key]> maxValue){
//             maxKey=key;
//             maxValue=dict1[key];
//         }
//     }return maxKey;
// }
// const my_dict={'a':5,'b':6,'c':9};
// console.log(maxValueKey(my_dict));
//############################################################
// 4)Reverse Key-Value Pairs
// Define a function which takes as a parameter dictionary and returns a dictionary in which everse the key-value pairs are reversed.

// Example:

// my_dict = {'a': 1, 'b': 2, 'c': 3}
// reverse_dict(my_dict)
// Output:

// {1: 'a', 2: 'b', 3: 'c'}

// function getRandomNumber(min,max){
//     return Math.floor(Math.random()*(max-min+1))+min;
// }
// let RandomNumber=getRandomNumber(1,100);
// console.log(RandomNumber);

// function sumArray(arr){
//     let sum=0;
//     for (var i=0;i<arr.length;i++){
//         sum+=arr[i];

//     }
//     return sum;
// }
// let a=[2,3,4,5,6];
// let k=[8,6,9,2,4];
// console.log (sumArray(a));
// console.log(sumArray(k));

//#######################################################
// let mySet = new Set();
// console.log(mySet.add(1));
// console.log(mySet.add(2));
// console.log(mySet.add(3));
// let myset = [1,2,3];
// let a=new Set(myset);
// //console.log(myset.has(2));
// console.log(a);

// const input= require("readline-sync");
// let arr = input.question("enter the value :-").split(" ").map(Number);
// let sum = 0;
// for (var i=0;i<arr.length;i++){
//     sum+=arr[i];
// }
// console.log("sum:",sum);
//#####################################################################

// const input = require("readline-sync");

// // Take user input for set elements
// let userInput = input.question("Enter elements separated by space: ").split(" ").map(Number);
// //let userArray = userInput.split(" ").map(Number); // Convert input string to array of numbers

// // Create a Set from the user input array
// let mySet = new Set(userInput);

// // Convert the Set back to an array using the spread operator
// let myArray = [...mySet];
// console.log("Array from Set:", myArray);

// //  Alternatively, you can use the Array.from() method
// // let anotherArray = Array.from(mySet);
// // console.log("Another Array from Set:", anotherArray);
//#######################################################################
// Create a Set with the numbers 1, 2, and 3. Show the Set.

// Input: None
// Output:
//  Set {1, 2, 3}let mySet=([2,4,5,7,8]);
// console.log(mySet);
// Question: Add the number 4 to the Set {1, 2, 3}. Show the modified Set.

// Input: Set {1, 2, 3}, value to add: 4
// Output: Set {1, 2, 3, 4}
//************************************************ */
// let mySet = new Set([1,2,3]);
// mySet.add(4);

//     console.log(mySet);
//####################################################
// Question: Check if the number 2 exists in the Set {1, 2, 3, 4}.

// Input: Set {1, 2, 3, 4}
// Output: true
//******************************************* */
// let mySet=new Set([1,2,3,4]);
// console.log(mySet.has(2));
//#################################################
// Question: Remove the number 3 from the Set {1, 2, 3, 4}. Show the modified Set.

// Input: Set {1, 2, 3, 4}, value to remove: 3
// Output: Set {1, 2, 4}
//*********************************************** */
// let mySet= new Set([1,2,3,4]);
// mySet.delete(3);
// console.log(mySet);
//###################################################################
// Question: Get the size of the Set {1, 2, 4}.

// Input: Set {1, 2, 4}
// Output: 3
//******************************************************* */
// let mySet=new Set([2,5,7,8]);
// mySet.clear();
// console.log(mySet);
//#################################################################
// Question: Convert the Set {1, 2, 3} into an array.

// Input: Set {1, 2, 3}
// Output: [1, 2, 3]
//*********************************************************** */
// let mySet= new Set([2,4,5,6]);
// let myArray=Array.from(mySet);
// console.log(myArray);
//#####################################################
                        // **THIS KEYWORD**//
// let obj={
//     name:"john",
//     greet:function(){
//         console.log("hello, " + this.name);
//     }
// };
// obj.greet();

// used constractore
// function person(name){
//     this.name=name;
// }
// let person1=new person("nikita");
// console.log(person1.name);

//using call  

function person(firstname, lastname){
    this.firstname=firstname;
    this.lastname=lastname;
    this.fullname=function(){
        return this.firstname+' '+lastname;

    };
}
let nikki=new person("john","Doe");
console.log(nikki.fullname());