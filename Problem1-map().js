/* 
1) You Have an odd array (array with odd numbers). [1, 3, 5, 7, 9]. Now convert this array into an even array (array with even numbers). [2, 4, 6, 8, 10]. Do this using for loop & array.map() method. 
Hints: add one to any odd number and it will become an even number;
*/

const arr1 = [1, 3, 5, 7, 9];
const arr2 = [];
for (let num of arr1) {
    num++;
    arr2.push(num);
}
console.log(arr2);

const arr3 = arr1.map(n => n + 1);
console.log(arr3);