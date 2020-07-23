/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';
// var a = prompt("Введите больше", "");
//   while (!a || a.length > 50) {
//    alert("Keep the message length to 50 chars or less")
//    a = prompt("Введите больше", "");

//       } 

// document.write(a);

// let personalMovieDB = ['Снег','Снег','Снег','Снег','Снег','Снег','Снег','Снег','Снег','Снег','Снег'];

// if(personalMovieDB.length < 10){
//    alert("Просмотрено довольно мало фильмов");
// }else if(personalMovieDB.length >10 && personalMovieDB.length < 30){
//    alert("Вы классический зритель");
// }else if(personalMovieDB.length > 30){
//    alert("Вы киноман");
// }
// else{
//    alert("Произошла ошибка");
// }

// ***************

/** Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */ 

// const numberOfFilms = 18;

// const personalMovieDB = {
//    count: numberOfFilms,
//    movies: {},
//    actors: {},
//    genres: [],
//    privat: false
// }

// let a = prompt('Один из последних просмотренных фильмов?');
// let b = prompt('На сколько оцените его?');

// let movies = {
//    'logan': a,
//    'baltasar': b,
// }
// console.log(movies)
// console.log(movies.baltasar)


// *************** Решение

const numberOfFilms = +prompt("Сколько фильмов просмотрел пользователь");
const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
}




for(let i = 0; i < 2; i++){
    const a = prompt('Один из последних просмотренных фильмов?'),
          b = prompt('На сколько оцените его?');
    if(a !== null && b != null && a != '' && b != '' && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log('done')
    }else{
        console.log('error');
        i--;
    }
          

} 


console.log(personalMovieDB)


//   while (!a || a.length > 50) {
//    alert("Keep the message length to 50 chars or less")
//    a = prompt('Один из последних просмотренных фильмов?');

//       } 

// if(personalMovieDB.count < 10){
//    alert("Просмотрено довольно мало фильмов");
// }else if(personalMovieDB.count >10 && personalMovieDB.count < 30){
//    alert("Вы классический зритель");
// }else if(personalMovieDB.count > 30){
//    alert("Вы киноман");
// }
// else{
//    alert("Произошла ошибка");
// }
