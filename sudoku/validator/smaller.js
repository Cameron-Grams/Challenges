function elementArrays( array ){
//get individual elements of the 2D array
  for ( let j = 0; j < array.length; j++ ){
    let k = array[ j ];
    if ( testArray( k ) === false ){
      return false;
    }
  };
  console.log( 'finished test of array' );
  return true;
};

function testArray( array ){
//return boolean of array completeness
  for ( let i = 1; i <= 9; i++ ){
    if ( array.indexOf( i ) === -1 ){
      return false;
    }
  }
  return true;
};



function validSolution( array ){

  return elementArrays( array );

};



/* this confirms the test of the individual arrays

let a =  [1, 0, 0, 3, 4, 2, 5, 6, 0];
 
let b = testArray( a );
console.log( 'test of a is: ', b );
*/

/*
let g = validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]
]); // => false
*/

let g = validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]); // => true

console.log( 'verdict is ', g );


