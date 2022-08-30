// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

function plusMinus(arr) {
  // Write your code here
  let pos = 0
  let neg = 0
  let zer = 0

  arr.forEach(num => {
      num > 0 ? pos += 1 : pos
      num < 0 ? neg += 1 : neg
      num == 0 ? zer += 1 : zer
  })
  
  pos = (pos/arr.length).toPrecision(6)
  neg = (neg/arr.length).toPrecision(6)
  zer = (zer/arr.length).toPrecision(6)
  
  console.log(pos,'\n',neg,'\n',zer)

}