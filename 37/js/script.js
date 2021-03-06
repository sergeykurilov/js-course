  window.addEventListener('DOMContentLoaded', function () {

      // Tabs

      let tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');


      function hideTabContent() {

          tabsContent.forEach(item => {
              item.classList.add('hide');
              item.classList.remove('show', 'fade');
          });

          tabs.forEach(item => {
              item.classList.remove('tabheader__item_active');
          });
      }


      function showTabContent(i = 0) {
          tabsContent[i].classList.add('show', 'fade');
          tabsContent[i].classList.remove('hide');
          tabs[i].classList.add('tabheader__item_active');
      }

      hideTabContent();
      showTabContent();


      tabsParent.addEventListener('click', function (event) {
          const target = event.target;

          if (target && target.classList.contains('tabheader__item')) {
              tabs.forEach((item, i) => {
                  if (target == item) {
                      hideTabContent();
                      showTabContent(i);
                  }
              });
          }
      });



      // timer

      const deadline = '2020-08-19';

      function getTimeRemaining(endtime) {
          const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60) % 24)),
              minutes = Math.floor((t / 1000 / 60) % 60),
              seconds = Math.floor((t / 1000) % 60);
          return {
              'total': t,
              'days': days,
              'hours': hours,
              'minutes': minutes,
              'seconds': seconds
          };
      }

      function setClock(selector, endtime) {
          const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

          updateClock();

          function getZero(num) {
              if (num >= 0 && num < 10) {
                  return `0${num}`;
              } else {
                  return num;
              }
          }

          function updateClock() {
              const t = getTimeRemaining(endtime);

              days.innerHTML = getZero(t.days);
              hours.innerHTML = getZero(t.hours);
              minutes.innerHTML = getZero(t.minutes);
              seconds.innerHTML = getZero(t.seconds);


              if (t.total <= 0) {
                  clearInterval(timeInterval);
              }
          }



      }

      setClock('.timer', deadline);



      //modal

      // Modal

      const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal');

      modalTrigger.forEach(btn => {
          btn.addEventListener('click', openModal);
      });

      function closeModal() {
          modal.classList.add('hide');
          modal.classList.remove('show');
          document.body.style.overflow = '';
      }

      function openModal() {
          modal.classList.add('show');
          modal.classList.remove('hide');
          document.body.style.overflow = 'hidden';
          clearInterval(modalTimerId);
      }

      modal.addEventListener('click', (e) => {
          if (e.target === modal || e.target.getAttribute('data-close') == "") {
              closeModal();
          }
      });

      document.addEventListener('keydown', (e) => {
          if (e.code === "Escape" && modal.classList.contains('show')) {
              closeModal();
          }
      });

      const modalTimerId = setTimeout(openModal, 300000);
      // Изменил значение, чтобы не отвлекало

      function showModalByScroll() {
          if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
              openModal();
              window.removeEventListener('scroll', showModalByScroll);
          }
      }
      window.addEventListener('scroll', showModalByScroll);



      // Используем классы для карточек

      //     class postCard {
      //         constructor(imgPath, itemSubtitle, itemDescr, menuItemTotal){
      //             this.imgPath = imgPath;
      //             this.itemSubtitle = itemSubtitle;
      //             this.itemDescr = itemDescr;
      //             this.menuItemTotal = menuItemTotal;
      //         }

      //         cardAdd(){
      //             return this.imgPath , Subtitle = this.itemSubtitle, Descr = this.itemDescr, Price = this.menuItemTotal;
      //          }
      //     }



      // let cardFirst = new postCard('./img/slider/food-12.jpg','Меню "Фитнес', 'Description', 123);
      // console.log(cardFirst);

      // let menuItemBlock = document.querySelectorAll('.menu__item'),
      //       Image = document.querySelector('img'),
      //       Subtitle = document.querySelector('.menu__item-subtitle'),
      //       Descr = document.querySelector('.menu__item-descr'),
      //       Price = document.querySelector('.menu__item-total>span');

      // console.log(+Price.textContent);

      class MenuCard {
          constructor(src, alt, title, descr, price, parentSelector, ...classes) {
              this.src = src;
              this.alt = alt;
              this.title = title;
              this.descr = descr;
              this.price = price;
              this.classes = classes;
              this.parent = document.querySelector(parentSelector);
              this.transfer = 27;
              this.changeToUAH();
          }

          changeToUAH() {
              this.price = +this.price * this.transfer;
          }

          render() {
              const element = document.createElement('div');
              if (this.classes.length === 0) {
                  this.element = 'menu__item';
                  element.classList.add(this.element);
              } else {
                  this.classes.forEach(className => element.classList.add(className));
              }
              element.innerHTML = `
            <img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
             </div>
            `;

              this.parent.append(element);
          }
      }

      const getResources = async (url) => {
          const res = await fetch(url)

          if (!res.ok) {
              throw new Error(`Could not fetch ${url}, status: ${res.status}`);
          }

          return await res.json();
      };


      // getResources('http://localhost:3000/menu')
      //     .then(data => {
      //         data.forEach(({img,altimg,title,descr,price}) => {
      //             new MenuCard(img,altimg,title,descr,price, '.menu .container').render();
      //         });
      //     });

      // getResources('http://localhost:3000/menu')
      //     .then(data => createCard(data));

      // **************************
      axios.get('http://localhost:3000/menu')
          .then(data => data.data.forEach(({
              img,
              altimg,
              title,
              descr,
              price
          }) => {
              new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
          }));



      function createCard(data) {
          data.forEach(({
              img,
              altimg,
              title,
              descr,
              price
          }) => {
              const element = document.createElement('div');
              element.classList.add('menu__item');
              element.innerHTML = `
            <img src=${img} alt=${altimg}>
            <h3 class="menu__item-subtitle">${title}</h3>
            <div class="menu__item-descr">${descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${price}</span> грн/день</div>
             </div>
            
            `;

              document.querySelector('.menu .container').append(element);
          });
      }

      // const div = new MenuCard()
      // div.render();

      // new MenuCard(
      //     "img/tabs/vegy.jpg",
      //     "vegy",
      //     'Меню "Фитнес"',
      //     '"Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
      //     9,
      //     '.menu .container',
      //     'menu__item',
      // ).render();


      // new MenuCard(
      //     "img/tabs/vegy.jpg",
      //     "vegy",
      //     'Меню "Фитнес"',
      //     '"Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
      //     9,
      //     '.menu .container',
      //     'menu__item',
      // ).render();


      // new MenuCard(
      //     "img/tabs/vegy.jpg",
      //     "vegy",
      //     'Меню "Фитнес"',
      //     '"Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
      //     9,
      //     '.menu .container',
      //     'menu__item',
      // ).render();



      //Отправка запросов Forms 

      const forms = document.querySelectorAll('form');

      const message = {
          loading: 'img/form/spinner.svg',
          success: 'Скоро свяжемся!',
          failer: 'Smth went wrong',
      };

      forms.forEach(item => {
          bindpostData(item);
      });


      const postData = async (url, data) => {
          const res = await fetch(url, {
              method: "POST",
              headers: {
                  'Content-type': 'application/json',
              },
              body: data
          });

          return await res.json();
      };

      //когда используем связыку обьекта + FormData заглавие не нужно указывать
      // оно устанавливается автоматически
      function bindpostData(form) {
          form.addEventListener('submit', (e) => {
              e.preventDefault();

              const statusMessage = document.createElement('img');
              statusMessage.src = message.loading;
              statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
              form.insertAdjacentElement('afterend', statusMessage)




              const formData = new FormData(form);

              // const object = {};
              // formData.forEach(function(value, key){
              //     object[key] = value;
              // });
              const json = JSON.stringify(Object.fromEntries(formData.entries()));

              // const json = JSON.stringify(object);
              postData('http://localhost:3000/requests', json)
                  .then(data => {
                      console.log(data);
                      showThanksModal(message.success);
                      statusMessage.remove();
                  }).catch(() => {
                      showThanksModal(message.failer);
                  }).finally(() => {
                      form.reset();
                  });




              // request.addEventListener('load', () => {
              //    if(request.status === 200) {
              //        console.log(request.response);
              //        showThanksModal(message.success);
              //        form.reset();
              //      statusMessage.remove(); 
              //    } else{
              //     showThanksModal(message.failer);
              //    }
              // });
          });
      }



      function showThanksModal(message) {
          const prevModalDialog = document.querySelector('.modal__dialog');

          prevModalDialog.classList.add('hide');
          openModal();

          const thanksModal = document.createElement('div');
          thanksModal.classList.add('modal__dialog');
          thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
          document.querySelector('.modal').append(thanksModal);
          setTimeout(() => {
              thanksModal.remove();
              prevModalDialog.classList.add('show');
              prevModalDialog.classList.remove('hide');
              closeModal();
          }, 4000);
      }


      // fetch('http://localhost:3000/menu')
      //     .then(data => data.json())
      //     .then(res => console.log(res));


      // slider

      let offset = 0;
      let slideIndex = 1;

      const slides = document.querySelectorAll('.offer__slide'),
          slider = document.querySelector('.offer__slider'),
          prev = document.querySelector('.offer__slider-prev'),
          next = document.querySelector('.offer__slider-next'),
          total = document.querySelector('#total'),
          current = document.querySelector('#current'),
          slidesWrapper = document.querySelector('.offer__slider-wrapper'),
          width = window.getComputedStyle(slidesWrapper).width,
          slidesField = document.querySelector('.offer__slider-inner');

      if (slides.length < 10) {
          total.textContent = `0${slides.length}`;
          current.textContent = `0${slideIndex}`;
      } else {
          total.textContent = slides.length;
          current.textContent = slideIndex;
      }

      slidesField.style.width = 100 * slides.length + '%';
      slidesField.style.display = 'flex';
      slidesField.style.transition = '0.5s all';

      slidesWrapper.style.overflow = 'hidden';

      slides.forEach(slide => {
          slide.style.width = width;
      });

      slider.style.position = 'relative';
      const indicators = document.createElement('ol'),
          dots = [];
      indicators.classList.add('carousel-indicators');
      indicators.style = `
            position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 15;
            display: flex;
            justify-content: center;
            margin-right: 15%;
            margin-left: 15%;
            list-style: none;
      `;

      slider.append(indicators);

      for (let i = 0; i < slides.length; i++) {
          const dot = document.createElement('li');
          dot.setAttribute('data-slide-to', i + 1);
          dot.style.cssText = `
                box-sizing: content-box;
                flex: 0 1 auto;
                width: 30px;
                height: 6px;
                margin-right: 3px;
                margin-left: 3px;
                cursor: pointer;
                background-color: #fff;
                background-clip: padding-box;
                border-top: 10px solid transparent;
                border-bottom: 10px solid transparent;
                opacity: .5;
                transition: opacity .6s ease;
          `;

          if (i == 0) {
              dot.style.opacity = 1;
          }

          indicators.append(dot);
          dots.push(dot);
      }

      next.addEventListener('click', () => {
          if (offset == (+width.slice(0, width.length - 2) * (slides.length - 1))) {
              offset = 0;
          } else {
              offset += +width.slice(0, width.length - 2);
          }

          slidesField.style.transform = `translateX(-${offset}px)`;

          if (slideIndex == slides.length) {
              slideIndex = 1;
          } else {
              slideIndex++;
          }

          if (slides.length < 10) {
              current.textContent = `0${slideIndex}`;
          } else {
              current.textContent = slideIndex;
          }
          dots.forEach(dot => dot.style.opacity = '.5');
          dots[slideIndex - 1].style.opacity = 1;
      });

      prev.addEventListener('click', () => {
          if (offset == 0) {
              offset = +width.slice(0, width.length - 2) * (slides.length - 1);
          } else {
              offset -= +width.slice(0, width.length - 2);
          }

          slidesField.style.transform = `translateX(-${offset}px)`;

          if (slideIndex == 1) {
              slideIndex = slides.length;
          } else {
              slideIndex--;
          }

          if (slides.length < 10) {
              current.textContent = `0${slideIndex}`;
          } else {
              current.textContent = slideIndex;
          }
          dots.forEach(dot => dot.style.opacity = '.5');
          dots[slideIndex - 1].style.opacity = 1;
      });

      dots.forEach(dot => {
          dot.addEventListener('click', (e) => {
              const slideTo = e.target.getAttribute('data-slide-to');
              slideIndex = slideTo;

              offset = +width.slice(0, width.length - 2) * (slideTo - 1);
              slidesField.style.transform = `translateX(-${offset}px)`;
              if (slides.length < 10) {
                  current.textContent = `0${slideIndex}`;
              } else {
                  current.textContent = slideIndex;
              }

              dots.forEach(dot => dot.style.opacity = '.5');
              dots[slideIndex - 1].style.opacity = 1;
          });
      });
  });
  //       showSlides(slideIndex);

  //       if (slide.length < 10) {
  //           total.textContent = `0${slides.length}`;
  //       } else {
  //           total.textContent = slides.length;
  //       }

  //       function showSlides(n) {
  //           if (n > slides.length) {
  //               slideIndex = 1;
  //           }
  //           if (n < 1) {
  //               slideIndex = slides.length;
  //           }

  //           slides.forEach(item => item.style.display = 'none');
  //           slides[slideIndex - 1].style.display = 'block';
  //           if (slide.length < 10) {
  //               current.textContent = `0${slideIndex}`;
  //           } else {
  //               total.textContent = slideIndex;
  //           }
  //       };

  //       function plusSlides(n) {
  //           showSlides(slideIndex += n);
  //       }
  //       prev.addEventListener('click', () => {
  //           plusSlides(-1);
  //       });

  //       next.addEventListener('click', () => {
  //           plusSlides(1);
  //       });

  //   });


  // &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&