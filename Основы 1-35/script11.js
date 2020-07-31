
'use strict';

const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('CLick');
// };

// btn.onclick = function() {
//     alert('Second CLick');
// };


// btn.addEventListener('click', (e)=>{
//         alert('CLick');
// });

// let i = 0;

const deleteElement = (e)=>{
   console.log(e.currentTarget);
   console.log(e.type);
//    i++;
//    if(i == 1){
//     btn.removeEventListener('click', deleteElement);
//    }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);


btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});
const link = document.querySelector('a');

link.addEventListener('click', (event)=>{
    event.preventDefault();
    console.log(event.target);
});