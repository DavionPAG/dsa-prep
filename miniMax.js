// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example

// The minimum sum is  and the maximum sum is . The function prints

// 16 24


function miniMaxSum(arr) {
  // Write your code here
  arr.sort()
  
  let min = 0
  let max = 0
  
  for (let i = 0; i < arr.length -1; i++){
      min+= arr[i]
      max+= arr[i+1]
  }
  console.log(min, max)
}