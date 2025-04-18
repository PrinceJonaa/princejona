import { animate } from 'animejs';

/**
 * Fade in and lift the page on mount.
 * @param selector - CSS selector for the page container (default: '.page')
 */
export const fadeInPage = (selector: string = '.page') =>
  animate(selector, {
    opacity: { to: 1, duration: 600 },
    translateY: { to: 0, duration: 600 },
    ease: 'outQuad',
  });

/**
 * Fade out and lower the page on leave.
 * @param selector - CSS selector for the page container (default: '.page')
 */
export const fadeOutPage = (selector: string = '.page') =>
  animate(selector, {
    opacity: { to: 0, duration: 300 },
    translateY: { to: 20, duration: 300 },
    ease: 'inQuad',
  });
