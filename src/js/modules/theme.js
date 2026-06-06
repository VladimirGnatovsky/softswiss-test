// Light/dark theme toggle with localStorage persistence.
const STORAGE_KEY = 'ss-theme';
const root = document.documentElement;

function getSavedTheme() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function getPreferredTheme() {
  const saved = getSavedTheme();
  if (saved === 'light' || saved === 'dark') return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // storage unavailable (private mode) — skip persistence
  }
}

export function initTheme() {
  // Initial theme is set by the inline head script (no flash).
  const toggles = document.querySelectorAll('[data-theme-toggle]');

  toggles.forEach((btn) => {
    btn.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') || getPreferredTheme();
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  });
}
