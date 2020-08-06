$(document).ready(function(){
    var form = $(".modal_body");

    $(document).mouseup(function (e) {

        if(!form.is(e.target) && form.has(e.target).length === 0 ) {
            form.removeClass('active_modal');
            document.getElementById('modal_btn').onclick = function() {
                form.toggleClass('active_modal');
            };
            $('.close').click(function () {

                form.removeClass('active_modal');
            });
        }
    });

    $('#Additional_Services_1').on('click', function(){
       window.open('#');
    });
    $('#Additional_Services_2').on('click', function(){
       window.open('#');
    });
    $('#Additional_Services_3').on('click', function(){
       window.open('#');
    });
    $('#Help_1').on('click', function(){
       window.open('#');
    });
    $('#Help_2').on('click', function(){
       window.open('#');
    });

    $('.slider').bxSlider();

});

   //modal

   const modalOpen = document.querySelector('[data-modal]'),
   modalBody = document.querySelector('.modal') ,
   modalClose = document.querySelector('[data-close]');

modalOpen.addEventListener('click', ()=>{
 modalBody.classList.add('open');
});

modalClose.addEventListener('click', ()=>{
 modalBody.classList.remove('open');
});




const modalTrigger = document.querySelectorAll('[data-modal]'),
   modal = document.querySelector('.modal'),
   modalCloseBtn = document.querySelector('[data-close]');

   modalTrigger.forEach(btn => {
     btn.addEventListener('click', openModal);
 });
function openModal(){
 modal.classList.add('show');
 modal.classList.remove('hide');
 document.body.style.overflow = 'hidden';
 clearInterval(modalTimerId);
}


function closeModal() {
 modal.classList.add('hide');
 modal.classList.remove('show');
 document.body.style.overflow = '';
}


modalCloseBtn.addEventListener('click', closeModal);


modal.addEventListener('click', (e)=>{
 if(e.target === modal){
 closeModal();
 }
}); 

document.addEventListener('keydown', (e)=> {
 if(e.code === "Escape" && modal.classList.contains('show')){
     closeModal();
 }
});
