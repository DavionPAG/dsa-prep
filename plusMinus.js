// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.


function plusMinus(arr) {
  // Write your code here

let pos = 0
let neg = 0
let zero = 0

for(let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) pos++
  if (arr[i] < 0) neg++
  if (arr[i] == 0) zero++
}

  let posR = (pos/arr.length).toFixed(4)
  let negR = (neg/arr.length).toFixed(4)
  let zeroR = (zero/arr.length).toFixed(4)

  
console.log(posR,'\n', negR,'\n', zeroR)
}