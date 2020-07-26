/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const title = document.querySelector('.promo__genre');
const adBlocks = document.querySelector('.promo__adv');
let promoBG = document.querySelector('.promo__bg');
adBlocks.remove();
title.textContent = 'Драма';
promoBG.style.background = "url(../img/bg.jpg) no-repeat top";

const {movies} = movieDB;

movies.forEach(item => {
    console.log(item);
});