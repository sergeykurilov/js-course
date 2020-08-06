'use strict';

const persone = {
    name: 'Alex',
    tel: '+23213132123123',
    parents: {
        mom: 'Lena',
        dad: 'Mike'
    }
};

const clone = JSON.parse(JSON.stringify(persone));

clone.parents.mom = 'Ann';

console.log(persone);
console.log(clone);

