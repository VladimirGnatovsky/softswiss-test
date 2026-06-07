// Swiper-based slider with a progress bar and a current/total counter.
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export function initSlider() {
  const el = document.querySelector('[data-slider]');
  if (!el) return;

  const swiper = new Swiper(el, {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
      prevEl: '[data-slider-prev]',
      nextEl: '[data-slider-next]',
    },
    breakpoints: {
      480: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 4 },
    },
  });

  const fill = document.querySelector('[data-slider-fill]');
  const current = document.querySelector('[data-slider-current]');
  const total = document.querySelector('[data-slider-total]');
  const count = el.querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate)').length;

  if (total) total.textContent = count;

  const sync = () => {
    const step = swiper.realIndex + 1; // 1..7, honest active slide in loop
    if (current) current.textContent = step;
    if (fill) fill.style.transform = `scaleX(${step / count})`;
  };

  swiper.on('slideChange', sync);
  swiper.on('breakpoint', sync); // re-sync when slidesPerView changes
  sync();
}
