// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr) {
  // Write your code here
  let sortedArr = arr.sort()
  
  let arr1 = [...sortedArr]
  let arr2 = [...sortedArr]
  
  arr1.pop()
  arr2.shift()
  
  let min = 0
  let max = 0
  
  arr1.forEach(num => min += num)
  
  arr2.forEach(num => max += num)
  
  console.log(min, max)
}