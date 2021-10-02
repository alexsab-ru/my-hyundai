import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination, Scrollbar, Lazy, Autoplay } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/lazy';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination, Scrollbar, Lazy, Autoplay]);

const banner = new Swiper('.banner-slider', {
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
		pauseOnMouseEnter: true,
	},
 lazy: true,
 pagination: {
	el: '.swiper-pagination',
	clickable: true,
},
navigation: {
	nextEl: '.swiper-button-next',
	prevEl: '.swiper-button-prev',
},
});

const partners = new Swiper('.partners-slider', {
	breakpoints: {
		320: {
			slidesPerView: 3,
			spaceBetween: 10
		},
		586: {
			slidesPerView: 4,
			spaceBetween: 10
		},
		768: {
			slidesPerView: 5,
			spaceBetween: 10
		},
		1024: {
			slidesPerView: 7,
			spaceBetween: 10
		},
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});


import './map';