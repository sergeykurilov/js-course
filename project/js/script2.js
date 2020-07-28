/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

// Возьмите свой код из предыдущей практики

'use strict';


document.addEventListener('DOMcontentLoaded', ()=> {
    
})

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...6"
    ]
};

// const title = document.querySelector('.promo__genre');
// const adBlocks = document.querySelector('.promo__adv');
// let promoBG = document.querySelector('.promo__bg');
// adBlocks.remove();
// title.textContent = 'Драма';
// promoBG.style.background = "url(../img/bg.jpg) no-repeat top";

const {movies} = movieDB;
const promoList = document.querySelectorAll('.promo__interactive-item');
const delClass = document.querySelector('.delete');
const promlss = document.querySelector('.promo__interactive-list');
// // promlss.innerHTML = ""
movies.sort();
promlss.innerHTML = '';

movies.forEach((film, i) =>{
    promlss.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film}
    <div class="delete"></div></li>

    `;
});

// promoList.forEach((item) =>{
//     item.remove();
// });

//     let li;    
//     movies.forEach((item)=> {
//         li = document.createElement('li');
//         li.classList.add('promo__interactive-item');
//         li.innerHTML = item;
//         promlss.append(li);
//     });

const btn = document.querySelector('[data-send="send"]');
const input = document.querySelector('.adding__input');
const deleteBtns = document.querySelectorAll('.delete');
const remember = document.getElementById('remember');


    for (let btns of deleteBtns){
        btns.addEventListener('click', (e)=>{
            
            e.target.parentNode.remove();
    
        });
    }

 

    // document.addEventListener("DOMContentLoaded", function (event) {
    //     var _selector = document.querySelector('input[name=myCheckbox]');
    //     _selector.addEventListener('change', function (event) {
    //         if (_selector.checked) {
    //                  console.log("Сделать любимым");
    //         }
    //     });



btn.addEventListener('click', (event)=> {
    event.preventDefault();
    if(input.value > 20){
        let res = input.value.slice(0, 20) + "...";
        movies.push(res);
        promlss.innerHTML += `
        <li class="promo__interactive-item"> ${res}
        <div class="delete"></div></li>
    
        `;
    }else{
        let int = input.value;
        movies.push(int);
        promlss.innerHTML += `
        <li class="promo__interactive-item">${movies.length} ${int}
        <div class="delete"></div></li>
    
        `;
    }
});