'use strict';

const box = document.getElementById('box');
box.style.color = 'red';

const btns = document.getElementsByTagName('button');

console.log(btns[0]);

const circles = document.getElementsByClassName('circle');

console.log(circles);

const hearts = document.querySelectorAll('.heart');
console.log(hearts);


hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart');
oneHeart.style.width = '200px';
oneHeart.style.height = '200px';
oneHeart.style.color = 'red';
console.log(oneHeart);