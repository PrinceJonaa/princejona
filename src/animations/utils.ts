import { animate } from 'animejs';

/**
 * Adds Anime.js hover scale animation to a navigation element.
 * @param el - The HTMLElement to animate on hover.
 */
export const animateNavHover = (el: HTMLElement) => {
  el.addEventListener('mouseenter', () => {
    animate(el, { scale: 1.05, duration: 300, ease: 'outQuad' });
  });
  el.addEventListener('mouseleave', () => {
    animate(el, { scale: 1, duration: 300, ease: 'outQuad' });
  });
};
