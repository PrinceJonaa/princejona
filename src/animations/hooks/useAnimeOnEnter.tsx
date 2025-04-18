'use client';

import { useEffect } from 'react';
import { animate } from 'animejs';

/**
 * useAnimeOnEnter
 * Triggers an Anime.js animation on the given selector when the component mounts.
 * @param selector - CSS selector for the target element(s)
 * @param config - Anime.js animation configuration object
 */
import { AnimationParams } from 'animejs';

export function useAnimeOnEnter(selector: string, config: AnimationParams) {
  useEffect(() => {
    animate(selector, config);
  }, [selector, config]);
}
