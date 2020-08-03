const menu = document.querySelector('.mobile-menu');
const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', function(){
    menu.classList.toggle('-active');

});

// ***********************

let tabs = document.querySelectorAll('.tabheader__item'),
tabsContent = document.querySelectorAll('.tabcontent'),
tabsParent = document.querySelector('.tabheader__items');


function removeContent(){
    tabs.forEach(item => {
        item.classList.add('-hide');
        item.classList.remove('-active');
    });

}

function addContent(){
    tabs.forEach(item => {
        item.classList.add('-active');
        item.classList.remove('-hide');
    });

}
addContent();
removeContent();