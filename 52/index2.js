"use strict";

console.log('Зарпос данных');

const req = new Promise((resolve, reject) => {
    setTimeout(()=>{
        const product = {
            name: 'SSSS',
            time: 2000
        };    
        resolve(product);
    },2000);
});
