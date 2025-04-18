'use client';

import { useEffect } from 'react';
import { animate } from 'animejs';

/**
 * useAnimeOnEnter
 * Triggers an Anime.js animation on the given selector when the component mounts.
 * @param selector - CSS selector for the target element(s)
 * @param config - Anime.js animation configuration object
 */
export function useAnimeOnEnter(selector: string, config: any) {
  useEffect(() => {
    animate(selector, config);
  }, []);
}
