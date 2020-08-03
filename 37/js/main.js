  
window.addEventListener('DOMContentLoaded', function() {

    let tabs = document.querySelectorAll('.tabheader__item'),
        tabContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');


    function hideContentOnTab(){
        tabContent.forEach(tab => {
            tab.classList.remove('show', 'fade');
            tab.classList.add('hide');
        });

        tabs.forEach(tab => {
            tab.classList.remove('tabheader__item_active');
        });
    }

    function showContentOnTab(i = 0){
        tabContent[i].classList.add('show', 'fade');
        tabContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideContentOnTab();
    showContentOnTab();


   tabsParent.addEventListener('click', (event)=>{
       const target = event.target;

        if(target && target.classList.contains('tabheader__item')){
            tabs.forEach((item,i) => {
              if(target == item){
                hideContentOnTab();
                showContentOnTab(i);
              }
            });
        }
   });


    //timer

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((t / 1000) % 60);
        const minutes = Math.floor((t / 1000 / 60) % 60);
        const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        const days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
          'total': t,
          'days': days,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
        };
      }
      
      function initializeClock(id, endtime) {
        const clock = document.querySelector(id);
        const daysSpan = clock.querySelector('#days');
        const hoursSpan = clock.querySelector('#hours');
        const minutesSpan = clock.querySelector('#minutes');
        const secondsSpan = clock.querySelector('#seconds');
      
        function updateClock() {
          const t = getTimeRemaining(endtime);
      
          daysSpan.innerHTML = t.days;
          hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
          minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
          secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
      
          if (t.total <= 0) {
            clearInterval(timeinterval);
          }
        }
      
        updateClock();
        const timeinterval = setInterval(updateClock, 1000);
      }
      

      const deadline = '2020-08-10';
      initializeClock('.timer', deadline);

});


