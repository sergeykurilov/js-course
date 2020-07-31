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


// let i = 0;
// while(i < 2){
//     i++;
//         const a = prompt('Один из последних просмотренных фильмов?'),
//           b = prompt('На сколько оцените его?');
//     if(a !== null && b != null && a != '' && b != '' && a.length < 50){
//         personalMovieDB.movies[a] = b;
//         console.log('done')
//     }else{
//         console.log('error');
//         i--;
//     }
// }

// let i = 0;

// do{
//     i++;
//         const a = prompt('Один из последних просмотренных фильмов?'),
//           b = prompt('На сколько оцените его?');
//     if(a !== null && b != null && a != '' && b != '' && a.length < 50){
//         personalMovieDB.movies[a] = b;
//         console.log('done')
//     }else{
//         console.log('error');
//         i--;
//     }
// }while(i < 2);



          

// } 





//   while (!a || a.length > 50) {
//    alert("Keep the message length to 50 chars or less")
//    a = prompt('Один из последних просмотренных фильмов?');

//       } 






// Код возьмите из предыдущего домашнего задания

let numberOfFilms;
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function(){
        personalMovieDB.count = +prompt('Сколько фильмов просмотрел пользователь', '');
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Сколько фильмов просмотрел пользователь', '');
        }
    },
    rememberMyFilms: function(){
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
    },
    detectPersonalLevel: function(){
        if(personalMovieDB.count < 10){
            alert("Просмотрено довольно мало фильмов");
         }else if(personalMovieDB.count >10 && personalMovieDB.count < 30){
            alert("Вы классический зритель");
         }else if(personalMovieDB.count > 30){
            alert("Вы киноман");
         }
         else{
            alert("Произошла ошибка");
         }
    },
    showMyDB: function(hidden){
        if(!hidden){
            console.log(personalMovieDB)
        }
    },
    writeYourGenres: function(){
        for(let i = 1; i < 2; i++){
            // let genre = prompt(`Ваш любимый жанр под номером ${i}`); 
            // if(genre ==='' || genre == null){
            //     console.log('Вы ввели некорректные данные');
            //     i--;
            // }else{
            //     personalMovieDB.genres[i - 1] = genre;
            // }

             let genres = prompt(`Введите ваши любимые жанры через запятую`).toLocaleLowerCase();
             
              if(genres ==='' || genres == null){
                console.log('Вы ввели некорректные данные');
                i--;
            }else{
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }


            personalMovieDB.genres.forEach((item, i) => {
                console.log(`Любимый жанр ${i + 1} - это ${item}`);
            });
    }
    },
    toggleVisibleMyDB: function(){
        if(personalMovieDB.privat == false){}
       return  personalMovieDB.privat = true;
    }
 };


/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

// function first() {
//     setTimeout(() =>{
//         console.log(new Date())
//     }, 2)
// }

// function second(){
//     console.log(2)
// }
// first();
// second();

// function learnJS(lang, callback){
//     console.log(`Я учу ${lang}`)
//     callback();
// }

// function done(){
//     console.log('Пошел ')
// }


// learnJS('JS', done);