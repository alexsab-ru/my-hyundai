import Swiper, { Navigation, Pagination, Lazy, Autoplay } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/lazy';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination, Lazy, Autoplay]);

const banner = new Swiper('.banner-slider', {
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
		pauseOnMouseEnter: true,
	},
	autoHeight: false,
	preloadImages: false,
	lazy: {
		loadPrevNext: true,
	},
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
	loop: true,
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 30
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 30
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 30
		},
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	on: {
		init: function(){
			// console.log('swiper initialized');
			document.querySelector('.reviews').classList.remove('hidden')
		}
	}
});