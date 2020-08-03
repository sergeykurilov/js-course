const menu = document.querySelector('.mobile-menu');
const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', function(){
    menu.classList.toggle('-active');

});

// ***********************

const tab = document.querySelector('.tab'),
      tabLinks = tab.querySelectorAll('.tab-links'),
      tabContent = document.querySelectorAll('.tab-content');

function removeContent(){
    for(let eachContentBlock of tabContent){
        eachContentBlock.classList.add('-hide');
        eachContentBlock.classList.remove('-active');
    }
}

function addContent(){
    for(let eachContentBlock of tabContent){
        for(let menuItem of tabLinks){
            menuItem.addEventListener('click', ()=>{
                eachContentBlock.classList.remove('-hide');
                eachContentBlock.classList.add('-active');
            });
        }
    }
}
addContent();

removeContent();