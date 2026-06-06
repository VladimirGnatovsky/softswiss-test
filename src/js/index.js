import '../styles/main.scss';

import { initTheme } from './modules/theme.js';
import { initMenu } from './modules/menu.js';
import { initParallax } from './modules/parallax.js';
import { initSlider } from './modules/slider.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMenu();
  initParallax();
  initSlider();

  document
    .querySelector('[data-scroll-top]')
    ?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
});
