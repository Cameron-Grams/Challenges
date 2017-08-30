function elementArrays( array ){
  for ( let j = 0; j < array.length; j++ ){
    let k = array[ j ];
    if ( testArray( k ) === false ){
      console.log( 'array is: ', k );
      return false;
    }
  };
  return true;
};

function testArray( array ){
  for ( let i = 1; i <= 9; i++ ){
    if ( array.indexOf( i ) === -1 ){
      console.log( 'array is ', array, ' i is ', i );
      return false;
    }
  }
  return true;
};


function generateColumns( arr ){
  let columns = [];
  for ( let i = 0; i < 9; i++ ){
    let singleColumn = [];
    for ( let j = 0; j < 9; j++ ){
      singleColumn.push( arr[ j ][ i ] );
    }
    columns.push( singleColumn );
  }
  return columns;
}


function generateSquare( arr, x, y ){
  let returnArray = [];
  let xEnd = x + 2;
  let yEnd = y + 2;
  for ( let i = x; i <= xEnd; i++ ){
    for ( let j = y; j <= yEnd; j++ ){
      returnArray.push( arr[ i ][ j ] );
    }
  }
  return returnArray;
}


function formSquares( arr ){
  let squares = [];
  for ( let i = 0; i < 9; i = i + 3 ){
    for ( let j = 0; j < 9; j += 3 ){
      squares.push( generateSquare( arr, i, j ) );
    }
  }
  return squares;
}

function validSolution( arr ){
  let rows = elementArrays( arr );
  let columns = generateColumns( arr );
  let squares = formSquares( arr );
  return  rows && elementArrays( columns ) && elementArrays( squares );
 ;
  }


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
/*
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
*/
console.log( 'verdict is ', g );


