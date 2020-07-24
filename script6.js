'use strict';

  let str = "some";
  let strobj = new String(str);

  // console.log(typeof(str));
  // console.log(typeof(strobj));

  console.dir([1,2,3,4,5,6]);

  const soldier = {
    health: 400,
    armor: 100
  };

  // const john = {
  //   health: 100,
  //   sayHello: function() {
  //     console.log("Hello");
  //   }
  // };

  const john = Object.create(soldier);
  // john.__proto__ = soldier;

  // console.log(john.armor);


  // john.sayHello(); 


  // Object.setPrototypeOf(john, soldier);