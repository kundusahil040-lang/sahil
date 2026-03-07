//second largest
let arr = [10, 20, 5, 8];
arr.sort((a, b) => b-a);
console.log("second largest:", arr[1]);
//count occurrence
let arr = [1,2,2,3,1];
let count = {};
for (let i = 0; i < arr.length; i++){
    count[arr[i]] = (count[arr[i]] || 0) +1;
}
console.log(count);
