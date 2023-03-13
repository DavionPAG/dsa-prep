// Staircase detail

// This is a staircase of size :

//    #
//   ##
//  ###
// ####
// Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size .

// Function Description

// Complete the staircase function in the editor below.

// staircase has the following parameter(s):

// int n: an integer
// Print

// Print a staircase as described above.

function staircase(n) {
  // Write your code here

  let spaces = n-1;
  for (let i = 0; i < n; i++){
      console.log(`${' '.repeat(spaces)}${'#'.repeat(i+1)}`)
      spaces--
  }
}