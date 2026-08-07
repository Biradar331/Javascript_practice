// javascript program to return the sum of nums of array

// DEFINE YOUR FUNCTION BELOW:
function sumArray(arr) {
  let sum = 0;
  n = arr.length;
  for (const num of arr) {
    sum += num;
  }
  return sum;
}
sumArray([1, 2, 3]); // 6
sumArray([2, 2, 2, 2]); // 8
sumArray([50, 50, 1]); // 101
