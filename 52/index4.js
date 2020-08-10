"use strict";

//filter

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];
// const shortNames = names.filter(function(name){
//     return name.length < 5;
// });
// console.log(shortNames);

//map

const answers = ['SnsaQw', 'AnnA', 'HeLLo'];

const result = answers.map((item)=> item.toLowerCase())


console.log(answers);
console.log(result);


// every/some

const some = [4,5,5,32,234,234,];

// console.log(some.some(item => typeof(item) === 'number'));
console.log(some.every(item => typeof(item) === 'number'));


// reduce

const arr = [1,1,1,1,5];


const res = arr.reduce((sum, current) => sum + current, 3);
console.log(res);

// const arr = ['Apple', 'Pear', 'Plumber'];
// const res = arr.reduce((sum, current) => `${sum},${current}`);
// console.log(res);

const obj = {
    ivan: 'person',
    ann: 'person',
    cat: 'animal',
    dog: 'animal'
};

const newArr = Object.entries(obj)
    .filter(item => item[1] === 'person')
    .map(item => item[0]);

console.log(newArr);
