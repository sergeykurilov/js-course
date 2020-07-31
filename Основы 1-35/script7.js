'use strict';

function hello(){
  console.log("Hello, World!");
  debugger;
}
hello();

function hi(){
  console.log('Say H!');
}
hi();

const arr = [2,112,123,3,23232,23232,232323],
      sorted = arr.sort(compareNum);
    
function compareNum(a,b){
  return a - b;
}

