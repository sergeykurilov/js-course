'use strict';

// const  num = new Function(33);
// console.log(num);

function User(name, id){
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function(){
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function(name){
    console.log(`Пользователь ${this.name} is gone`);
};






const sergey = new User('Sergey',22);

const alex = new User('Alex', 28);
sergey.exit();
sergey.hello();
alex.hello();

console.log(sergey);
console.log(alex);


