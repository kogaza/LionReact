'use strict';

function test () {
  if(true) {
    const a = 'b';
    console.log(a);
  }

  a = 'c';

  console.log(a);  
}

test();

console.log(a);