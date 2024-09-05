export const pxToRem = (number: number, baseRem = 16) => {
  return ` ${number / baseRem}rem !important`;
};
