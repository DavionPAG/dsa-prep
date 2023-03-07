// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

let matrix = [
  [1,2,3,4],
  [5,6,7,8],
  [10,20,30,40],
  [11,22,33,44]
]


function calcDiags(matrix){
  let n = matrix.length;
  let diag1 = 0;
  let diag2 = 0;
  for(var i=0; i<n; i++){
      for(var j=0; j<n; j++){
          // an element from the main diagonal
          if(i === j) { 
              diag1 += matrix[i][j];
          }
          // an element from the second diagonal
          if(i + j === n - 1){
              diag2 += matrix[i][j];
          }
      }
  }
  console.log('Matrix: ', n)
  console.log(Math.abs(diag1-diag2))
  return Math.abs(diag1-diag2)
}

calcDiags(matrix)