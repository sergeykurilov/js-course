'use strict';

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

const obj = {
    a: 5,
    b: 1
};

// const copy = obj; // ссылка на объект

// copy.a = 10;

// console.log(copy);
// console.log(obj); //

function copy(mainObj){
    let objCopy = {};

    let key;

    for(key in mainObj){
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b:5,
    c: {
        x: 8,
        y: 3
    }
}

const newNumbers = copy(numbers);
newNumbers.c.x = 1000;

newNumbers.a = 100;

// console.log(newNumbers);
// console.log(numbers);

const add = {
    d: 17,
    e: 20
};

const clone = Object.assign({}, add);

clone.d =2000;
// console.log(add);

// console.log(clone);

const oldArray = ['1', 'sd', 'sjjnd'];

const newArray = oldArray.slice();
newArray[1] = 'addadsadad';
console.log(newArray);
console.log(oldArray);

// оператор разворота 

const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

    console.log(internet)

function log(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2,4,7];

log(...num);


const array = ["a","b"];

const newArrayy = [...array];

const q = {
    one: 1,
    two: 2,
};

const newObj = {...q};

console.log(newObj);