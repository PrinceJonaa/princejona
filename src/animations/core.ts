import { animate, stagger } from 'animejs';

/**
 * Fade in and lift elements upward.
 * @param selector - CSS selector for target elements.
 */
export const liftIn = (selector: string) =>
  animate(selector, {
    opacity: { to: 1, duration: 500 },
    translateY: { to: 0, duration: 500 },
    delay: stagger(100),
    ease: 'outQuad',
  });

/**
 * Scale and fade in elements with a pop effect.
 * @param selector - CSS selector for target elements.
 */
export const scalePop = (selector: string) =>
  animate(selector, {
    opacity: { to: 1, duration: 500 },
    scale: { to: 1, duration: 600 },
    delay: stagger(120),
    ease: 'outQuad',
  });

/**
 * Pulse effect for ambient or symbolic motion.
 * @param selector - CSS selector for target elements.
 */
export const pulse = (selector: string) =>
  animate(selector, {
    scale: [{ to: 1.05 }, { to: 1 }],
    loop: true,
    alternate: true,
    duration: 1000,
    ease: 'inOutQuad',
  });
