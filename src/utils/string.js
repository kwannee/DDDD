import { BLANK_REGEX } from '../constants';

export const capitalizeFirstLetter = (str) => {
  const firstChar = str[0];
  const firstCharUpper = firstChar.toUpperCase();
  const leftChar = str.slice(1, str.length);

  return firstCharUpper + leftChar;
};

export const makePath = (...args) => args.join('/').replace(BLANK_REGEX, ' ');
