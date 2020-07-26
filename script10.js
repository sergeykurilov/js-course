'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');
console.dir(box);

box.style.fontSize = '50px';
box.style.width = '500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

box.style.cssText = `font-size: 32px; background-color: blue; color: #000;`;

// for(let i = 0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor = 'yellow';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'yellow';
});

const div = document.createElement('div');
// const text = document.createTextNode('Hey Hey Hey')

div.classList.add('black');

// document.body.append(div); // поместить элемент в конец страницы

wrapper.append(div);

// wrapper.appendChild(div);

// wrapper.prepend(div); // поместить элемент в начало блока

// hearts[0].before(div);
//hearts[0].after(div);

// wrapper.insertBefore(div, hearts[2]);


// // // circles[0].remove();
// wrapper.removeChild(hearts[1]);



// hearts[0].replaceWith(circles[0]);
// wrapper.removeChild(circles[0], hearts[0]);

div.innerHTML = "<h1>Hi</h1>";

// div.textContent = "<h1>Hello Word</h1>";

div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');