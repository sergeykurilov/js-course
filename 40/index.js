'use strict';

const now = new Date();

console.log(now.setHours('2020-05-02'));
// new Date.parse('2020-05-02');
console.log(now);
console.log(now.setHours(40));
console.log(now);

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getUTCHours());
// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

let start = new Date();

for (let i = 0; i < 100000; i++){
    let some = i **3;
}

let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд`)