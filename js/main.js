
//@prepros-append script.js

function clic() {
var iconMenu = document.querySelector(".header__icon");
var body = document.querySelector("body");
var menuBody = document.querySelector(".menu__body");
if (iconMenu) {
	iconMenu.addEventListener("click", function () {
		iconMenu.classList.toggle("active");
		body.classList.toggle("lock");
		menuBody.classList.toggle("active");
	});
}
}

clic();

function abc() {
 let user_icon = document.querySelector('.user-header__icon');
user_icon.addEventListener("click", function(e) {
	let user_menu = document.querySelector('.user-header__menu');
	user_menu.classList.toggle('_active');
});



//Клик вне области из стрима вёрстки  я сделал
document.documentElement.addEventListener("click", function(e) {
	if (!e.target.closest('.user-header')){
	let user_menu = document.querySelector('.user-header__menu');
	user_menu.classList.remove('_active');
	}
});
}
abc();

let links = document.querySelectorAll('a[href^="#"]');
  velocity = .9; // скорость, причем чем меньше значение - тем больше скорость
  header = document.querySelector('header');
    topOffset = header.offsetHeight;
var iconMenu = document.querySelector(".header__icon");
var body = document.querySelector("body");
var menuBody = document.querySelector(".menu__body"); 

for (let linkNav of links) {
 linkNav.addEventListener('click', function(e) { //по клику на ссылку 
  e.preventDefault(); //отменяем стандартное поведение 

// if($('.header-menu').hasClass('active')){
    if (menuBody.classList.contains('active')) {
		// $('.header-menu,.header-menu__icon').removeClass('active');
      menuBody.classList.remove('active');
       iconMenu.classList.remove('active');
		// $('body').removeClass('lock');
      body.classList.remove('lock');
}


  let winYOffset = window.pageYOffset, // производим прокрутка прокрутка 
    hash = this.href.replace(/[^#]*(.*)/, '$1'); // к id элемента, к которому нужно перейти 
  elemTop = document.querySelector(hash).getBoundingClientRect().top-topOffset, // отступ от окна браузера до id с учетом смещения при header с position: absolute или fixed
    start = null;
  requestAnimationFrame(step); // покадровая перерисовка анимации
  function step(time) {
    if (start === null) start = time;
    let progress = time - start,
      r = (elemTop < 0 ? Math.max(winYOffset - progress / velocity, winYOffset + elemTop) : Math.min(winYOffset + progress / velocity, winYOffset + elemTop));
    window.scrollTo(0, r);
    if (r != winYOffset + elemTop) {
      requestAnimationFrame(step)
    } else  return;
  }
  }


  );
}



 new Swiper('.main-slider', {
	navigation: {
		nextEl: '.control-main-slider__arrow_next',
		prevEl: '.control-main-slider__arrow_prev'
	},
	observer:true,
	observerParents:true,
	slidesPerView: 1,
    autoHeight: true,
    speed:800,
    loop:true,
	breakpoints: {
		320: {
			autoHeight: true
		},
		768: {
			autoHeight: false
		}
	},
	on: {
		lazyImageReady: function lazyImageReady() {
			ibg();
		}
	} 
});
 console.log('herн');

new Swiper ('.lots__slider',{
	navigation: {
		nextEl: '.control-slider-lots__arrow_next',
		prevEl: '.control-slider-lots__arrow_prev'
	},
    observer:true,
    observerParents:true,
	slidesPerView:3,
	spaceBetween: 0,
	autoHeight: true,
	 loop:true,
	breakpoints: {
		320: {
			slidesPerView: 1
		},
		550: {
			slidesPerView: 2
		},
		768: {
			slidesPerView: 3
		}
	},
});

new Swiper ('.quotes__slider',{
	effect: 'fade',
	navigation: {
		nextEl: '.control-slide-quotes__circle',
	},
    observer:true,
    observerParents:true,
	slidesPerView:1,
	spaceBetween: 0,
	autoHeight: true,
	 loop:true,
	
});
