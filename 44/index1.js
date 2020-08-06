function solution(str){ 
  if(str.length > 0){
    let gapps = '';
    let letter1 = str[str.length - 1];
    let letter2 = str.slice(1, 2);
    let letter3 = str.slice(0, 1);
    let letter4 = str.slice(3, 4);
    let letter5 = str.slice(2,3);
    let gap = letter1+gapps+letter4+gapps+letter5+gapps+letter2+gapps+letter3;
    return gap;

  }else if(str.length >= 0) {
    return gap = '';
  }else if(str === 'hh'){
    return 'h';
  }

}


 console.log(solution('world'));
 console.log(solution('hello'));
 console.log(solution(''));
 console.log(solution('hg'));

 const log = function(a,b, ...rest) {
   console.log(a ,b, rest);
 }

 log('basic', 'rest', 'operator', 'usage');

 function calcOrDouble(number, basis = 5){
   console.log(number * basis);
 }

 calcOrDouble(3);