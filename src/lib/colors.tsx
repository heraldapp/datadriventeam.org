export const rgbToRgba = (r: number, g: number, b: number) => (
  alpha: number = 1
) => `rgba(${r},${g},${b},${alpha})`;

export const BLUE_DARK = rgbToRgba(0, 27, 67);
export const BLUE_LIGHT = rgbToRgba(64, 133, 233);
export const PURPLE_LIGHT = rgbToRgba(197, 108, 214);
export const PURPLE_DARK = rgbToRgba(49, 35, 174);
export const GRAY_4 = rgbToRgba(80, 80, 80);
export const GRAY_3 = rgbToRgba(120, 120, 120);
export const GRAY_2 = rgbToRgba(230, 230, 230);
export const GRAY_1 = rgbToRgba(250, 250, 250);
export const WHITE = rgbToRgba(255, 255, 255);
export const BLACK = rgbToRgba(0, 0, 0);
export const RED = rgbToRgba(255, 0, 48);
export const GREEN = rgbToRgba(39, 174, 96);
export const ORANGE = rgbToRgba(245, 166, 35);
