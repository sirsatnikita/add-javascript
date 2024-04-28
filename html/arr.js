const arr = [4, 7, 12, 5, 8, 11];
let sum = 0;
for (let i = 0;i < arr.length;i++){
    if(i % 1==0 && i % i == 0){
        sum = sum +arr[i];
    }

}
console.log(sum);
