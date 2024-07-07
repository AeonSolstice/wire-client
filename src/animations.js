export const SLIDE_IN_LEFT = [{ translate: '-100% 0' }, { translate: 'none' }];
export const SLIDE_IN_RIGHT = [{ translate: '100vw 0' }, { translate: 'none' }];
export const SLIDE_IN_TOP = [{ translate: '0 -100%' }, { translate: 'none' }];
export const SLIDE_IN_BOTTOM = [
  { translate: '0 100vh' },
  { translate: 'none' },
];
export const SLIDE_OUT_LEFT = [{ translate: 'none' }, { translate: '-100% 0' }];
export const SLIDE_OUT_RIGHT = [{ translate: 'none' }, { translate: '100% 0' }];
export const ZOOM_IN = [{ scale: '0' }, { scale: '100%' }];
export const ZOOM_OUT = [{ scale: '100%' }, { scale: '0' }];
export const FADE_IN = [{ opacity: '0' }, { opacity: '100%' }];
export const FADE_OUT = [{ opacity: '100%' }, { opacity: '0' }];
