// Complete the countApplesAndOranges function in the editor below. It should print the number of apples and oranges that land on Sam's house, each on a separate line.

// countApplesAndOranges has the following parameter(s):

// s: integer, starting point of Sam's house location.
// t: integer, ending location of Sam's house location.
// a: integer, location of the Apple tree.
// b: integer, location of the Orange tree.
// apples: integer array, distances at which each apple falls from the tree.
// oranges: integer array, distances at which each orange falls from the tree.
// Input Format

// The first line contains two space-separated integers denoting the respective values of  and .
// The second line contains two space-separated integers denoting the respective values of  and .
// The third line contains two space-separated integers denoting the respective values of  and .
// The fourth line contains  space-separated integers denoting the respective distances that each apple falls from point .
// The fifth line contains  space-separated integers denoting the respective distances that each orange falls from point .

// Print two integers on two different lines:

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let aHit = 0
  let bHit = 0
  
  for (let i = 0; i < apples.length; i++) {
      apples[i]+= a
      apples[i] >= s && apples[i] <= t ? aHit++ : '';
  }
  
  for (let i = 0; i < oranges.length; i++) {
      oranges[i]+= b
      oranges[i] >= s && oranges[i] <= t ? bHit++ : '';
  }
console.log(aHit)
console.log(bHit)
}