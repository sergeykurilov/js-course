  
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

});