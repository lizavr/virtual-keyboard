import { generateButton } from './generateButton.js';
export const generateRow = (arr, rowEl) => {
  arr.forEach((item) => {
    rowEl.append(generateButton(item));
  });
};