// Off-canvas burger menu. JS toggles one class; CSS handles the animation.
const OPEN_CLASS = 'header--menu-open';

export function initMenu() {
  const header = document.querySelector('[data-header]');
  const burger = document.querySelector('[data-burger]');
  const overlay = document.querySelector('[data-menu-overlay]');
  const nav = document.querySelector('[data-nav]');

  if (!header || !burger || !nav) return;

  const isOpen = () => header.classList.contains(OPEN_CLASS);

  const open = () => {
    header.classList.add(OPEN_CLASS);
    burger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    header.classList.remove(OPEN_CLASS);
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  burger.addEventListener('click', () => (isOpen() ? close() : open()));
  overlay?.addEventListener('click', close);

  // Close on menu link click.
  nav.addEventListener('click', (e) => {
    if (e.target.closest('a')) close();
  });

  // Close on Escape.
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen()) close();
  });

  // Reset when resizing up to desktop.
  window.matchMedia('(min-width: 1024px)').addEventListener('change', (e) => {
    if (e.matches && isOpen()) close();
  });
}
