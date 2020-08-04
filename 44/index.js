'use strict';

// function showThis(a,b){
//     console.log(this);
//     function sum(){
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4,5);

//1) Обычная функция : this = windows но если use strict  - undefined

//2) Контекст у методов обьекта - сам обьект
// const obj = {
//     a:20,
//     b:16,
//     sum: function(){
//         function shout(){
//             console.log(this);
//         }
//         shout();
//     }
// };
// obj.sum();

//3) this в конструкторах и классах - это новый экземпляр обьекта

// function User(name,id){
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function(){
//         console.log("hello", this.name);
//     };
// }

// let ivan = new User('Ivan', 25);

// function sayName(surname){
//     console.log(this);
//     console.log(this.name + surname);
// }
// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);
// // создает новую функцию и подвязывает контекст
// function count(num){
//     return this * num;
// }
// const double = count.bind(2);

// console.log(double(6));

// 4) Ручная привязка this: call, apply, bind

const btn = document.querySelector('button');

btn.addEventListener('click', (e)=>{
    console.log(this);
    e.target.style.background = 'red';
});

const obj = {
    num: 5,
    sayNumber: function(){
        const say = () => {
            console.log(this);
        };
    say();
    }
}

obj.sayNumber();

const double = (a,b) =>  a * 2;


console.log(double(4));