// Scroll parallax for hero decor. Writes offset to a CSS var; rAF-throttled.
export function initParallax() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const items = document.querySelectorAll('[data-parallax]');
  if (!items.length) return;

  let ticking = false;

  const update = () => {
    const { scrollY } = window;
    items.forEach((el) => {
      const speed = parseFloat(el.dataset.parallax) || 0.2;
      el.style.setProperty('--shift', `${scrollY * speed}px`);
    });
    ticking = false;
  };

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true }
  );

  update();
}
