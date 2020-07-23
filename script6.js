'use strict';

function abbrevName(name){
  const a =  name.charAt(0);
  const b = name.charAt(4)
   return `${a}.${b}`;
}


console.log(abbrevName("Sam Harris"))