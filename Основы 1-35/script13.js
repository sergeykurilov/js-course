"use strict";

//touchstart


//touchmove


//touchend


//touchenter


//touchleave



//touchcancel

window.addEventListener('DOMContentLoaded', ()=>{
    const box = document.querySelector('.box');

    box.addEventListener('touchmove', (event)=>{
        event.preventDefault;

        console.log('Start');

        console.log(event.targetTouches[0].pageX);
    })
});

//touches

//targetTouches

//changedTouches

