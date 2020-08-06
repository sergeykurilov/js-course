'use script';

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current1.json');
    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    request.send();


    request.addEventListener('load', () => {
        if(request.status === 200){
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        }else{
            inputUsd.value = 'чё то не так ...';
        }
    });

    //status 404,0,200
    // statusText
    // Response
    // readyState
// readyStateChange


    // request.open(method, url, async, login, pass);
});