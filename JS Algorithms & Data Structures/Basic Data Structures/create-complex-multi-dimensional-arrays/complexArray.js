// example code

let nestedArray = [ // level 1

  ['deep'], // array 1 - level 2

  [ // array 2 - level 2
    ['deeper'], ['deeper'] // arrays 1 and 2 - level 3
  ], // end of array

  [ // array 3 - level 2
    [ // array 1 - level 3
      ['deepest'], ['deepest'] // arrays 1 and 2 - level 4
    ], 

    [ // array 2 - level 3
      [ // array 4 - level 4
        ['deepest-est?'] // array 1 - level 5
      ]
    ]
  ]

]; // end of level 1 array - parent


// fcc challenge - Create complex multi-dimensional arrays

let myNestedArray = [
  // Only change code below this line
  
  // level 2 array 
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],

  
  [
    // level 3 array
    ['loop', 'shift', 6, 7, 1000, 'method'] 
  ],
  
  
  [['concat', false, true, 'spread', 'array']],
  
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth'] 
  

  
  // Only change code above this line
];
