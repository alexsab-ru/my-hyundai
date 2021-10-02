import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination, Scrollbar, Lazy } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/lazy';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination, Scrollbar, Lazy]);

const swiper = new Swiper('.banner-slider', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  // preloadImages: false,
  // Enable lazy loading
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