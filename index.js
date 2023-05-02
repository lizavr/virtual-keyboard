import { buttonsArray } from './Buttons.js';
import { generateRow } from './generateRow.js';
import {
  clickMapDivToBtn,
  keyDownMapBtnToDiv,
  setButtonContent,
} from './generateButton.js';

const isLangEnKey = 'isLangEn';

let isEn = sessionStorage.getItem(isLangEnKey) !== 'false';

let isShiftActive = false;

let isCapsLkActive = false;

let isAltActive = false;

let isCtrlLeftActive = false;

const singleArray = [].concat(...buttonsArray);

const textareaEl = document.createElement('textarea');
textareaEl.classList.add('textarea');

const describeTitle = document.createElement('p');
describeTitle.classList.add('title');
describeTitle.innerHTML = 'Keyboard';

const containerEl = document.createElement('div');
containerEl.classList.add('container');

const keyboardEl = document.createElement('div');
keyboardEl.classList.add('keyboard');

const firstRowEl = document.createElement('div');
firstRowEl.classList.add('first-row');
generateRow(buttonsArray[0], firstRowEl);

const secondRowEl = document.createElement('div');
secondRowEl.classList.add('second-row');
generateRow(buttonsArray[1], secondRowEl);

const thirdRowEl = document.createElement('div');
thirdRowEl.classList.add('third-row');
generateRow(buttonsArray[2], thirdRowEl);

const forthRowEl = document.createElement('div');
forthRowEl.classList.add('forth-row');
generateRow(buttonsArray[3], forthRowEl);

const fifthRowEl = document.createElement('div');
fifthRowEl.classList.add('fifth-row');
generateRow(buttonsArray[4], fifthRowEl);

const describeEl = document.createElement('div');
const describeInnerFirstEl = document.createElement('p');
const describeInnerSecondEl = document.createElement('p');
describeEl.classList.add('describe');
describeInnerFirstEl.innerHTML = 'Keyboard was created on WindowsOS.';
describeEl.append(describeInnerFirstEl);
describeInnerSecondEl.innerHTML = 'For change language use ctrlLeft + altLeft, please.';
describeEl.append(describeInnerSecondEl);

keyboardEl.append(firstRowEl);
keyboardEl.append(secondRowEl);
keyboardEl.append(thirdRowEl);
keyboardEl.append(forthRowEl);
keyboardEl.append(fifthRowEl);

containerEl.append(describeTitle);

containerEl.append(textareaEl);

containerEl.append(keyboardEl);

containerEl.append(describeEl);

document.body.append(containerEl);

const allBtnDiv = document.getElementsByClassName('button');

const insertText = (value) => {
  const beforePosition = textareaEl.selectionStart;
  const afterPosition = textareaEl.selectionEnd;
  textareaEl.value = `${textareaEl.value.slice(
    0,
    beforePosition,
  )}${value}${textareaEl.value.slice(afterPosition)}`;
  textareaEl.selectionStart = beforePosition + 1;
  textareaEl.selectionEnd = beforePosition + 1;
};

const removeLettersBackSpace = () => {
  const beforePosition = textareaEl.selectionStart;
  const afterPosition = textareaEl.selectionEnd;
  if (beforePosition !== afterPosition) {
    textareaEl.value = `${textareaEl.value.slice(
      0,
      beforePosition,
    )}${textareaEl.value.slice(afterPosition)}`;
    textareaEl.selectionStart = beforePosition;
    textareaEl.selectionEnd = beforePosition;
    return;
  }
  if (beforePosition === 0) {
    return;
  }
  textareaEl.value = `${textareaEl.value.slice(
    0,
    beforePosition - 1,
  )}${textareaEl.value.slice(afterPosition)}`;
  textareaEl.selectionStart = beforePosition - 1;
  textareaEl.selectionEnd = beforePosition - 1;
};

const removeLettersDel = () => {
  const beforePosition = textareaEl.selectionStart;
  const afterPosition = textareaEl.selectionEnd;
  if (beforePosition !== afterPosition) {
    textareaEl.value = `${textareaEl.value.slice(
      0,
      beforePosition,
    )}${textareaEl.value.slice(afterPosition)}`;
    textareaEl.selectionStart = beforePosition;
    textareaEl.selectionEnd = beforePosition;
    return;
  }
  if (afterPosition === textareaEl.value.length) {
    return;
  }
  textareaEl.value = `${textareaEl.value.slice(
    0,
    beforePosition,
  )}${textareaEl.value.slice(afterPosition + 1)}`;
  textareaEl.selectionStart = beforePosition;
  textareaEl.selectionEnd = beforePosition;
};

const addLetters = (btn) => {
  if (btn.isSymbol) {
    if (isCapsLkActive && isShiftActive) {
      insertText(btn.getUpperCase().toLowerCase());
      return;
    }
    if (isShiftActive) {
      insertText(btn.getUpperCase());
      return;
    }
    if (isCapsLkActive) {
      insertText(btn.getValue().toUpperCase());
      return;
    }
    insertText(btn.getValue());
  } else {
    switch (btn.code) {
      case 'Tab':
        insertText('\t');
        break;
      case 'Space':
        insertText(' ');
        break;
      case 'Enter':
        insertText('\n');
        break;
      case 'ArrowUp':
        insertText('\u25B2');
        break;
      case 'ArrowDown':
        insertText('\u25BC');
        break;
      case 'ArrowLeft':
        insertText('\u25C4');
        break;
      case 'ArrowRight':
        insertText('\u25BA');
        break;
      case 'Backspace':
        removeLettersBackSpace();
        break;
      case 'Delete':
        removeLettersDel();
        break;
      case 'CapsLock':
        isCapsLkActive = !isCapsLkActive;
        break;
      default:
        break;
    }
  }
};

const setLang = () => singleArray.forEach((item) => {
  item.setLang(isEn);
  setButtonContent(item, keyDownMapBtnToDiv.get(item));
});

const switchLangAllBtn = () => {
  isEn = !isEn;
  sessionStorage.setItem(isLangEnKey, isEn);
  setLang();
};

const onButtonClick = (div) => {
  const chosenButton = clickMapDivToBtn.get(div);
  if (chosenButton.code === 'CapsLock') {
    div.classList.toggle('button_active');
  } else {
    div.classList.add('button_active');
  }
  addLetters(chosenButton);
  if (chosenButton.code === 'ShiftLeft' || chosenButton.code === 'ShiftRight') {
    isShiftActive = true;
  }
  if (chosenButton.code === 'ControlLeft') {
    isCtrlLeftActive = true;
    if (isAltActive) {
      switchLangAllBtn();
    }
  }
  if (chosenButton.code === 'AltLeft') {
    isAltActive = true;
    if (isCtrlLeftActive) {
      switchLangAllBtn();
    }
  }
};

const onButtonClickEnd = (div) => {
  const chosenButton = clickMapDivToBtn.get(div);
  if (chosenButton.code !== 'CapsLock') {
    div.classList.remove('button_active');
  }
  if (chosenButton.code === 'ShiftLeft' || chosenButton.code === 'ShiftRight') {
    isShiftActive = false;
  }
  if (chosenButton.code === 'ControlLeft') {
    isCtrlLeftActive = false;
  }
  if (chosenButton.code === 'AltLeft') {
    isAltActive = false;
  }
};

[...allBtnDiv].forEach((item) => {
  item.addEventListener('mousedown', (event) => {
    onButtonClick(event.currentTarget);
  });
});

[...allBtnDiv].forEach((item) => {
  item.addEventListener('mouseup', (event) => {
    onButtonClickEnd(event.currentTarget);
  });
});

document.addEventListener('keydown', (ev) => {
  ev.preventDefault();
  const keyboardBtn = singleArray.filter((item) => ev.code === item.code);
  if (!keyboardBtn.length) {
    return;
  }
  if (keyboardBtn[0].code === 'CapsLock') {
    keyDownMapBtnToDiv.get(keyboardBtn[0]).classList.toggle('button_active');
  } else {
    keyDownMapBtnToDiv.get(keyboardBtn[0]).classList.add('button_active');
  }
  addLetters(keyboardBtn[0]);
  if (
    keyboardBtn[0].code === 'ShiftLeft'
    || keyboardBtn[0].code === 'ShiftRight'
  ) {
    isShiftActive = true;
  }
  if (keyboardBtn[0].code === 'ControlLeft') {
    isCtrlLeftActive = true;
    if (isAltActive) {
      switchLangAllBtn();
    }
  }
  if (keyboardBtn[0].code === 'AltLeft') {
    isAltActive = true;
    if (isCtrlLeftActive) {
      switchLangAllBtn();
    }
  }
});

document.addEventListener('keyup', (ev) => {
  ev.preventDefault();
  const keyboardBtn = singleArray.filter((item) => ev.code === item.code);
  if (!keyboardBtn.length) {
    return;
  }
  if (keyboardBtn[0].code !== 'CapsLock') {
    keyDownMapBtnToDiv.get(keyboardBtn[0]).classList.remove('button_active');
  }
  if (
    keyboardBtn[0].code === 'ShiftLeft'
    || keyboardBtn[0].code === 'ShiftRight'
  ) {
    isShiftActive = false;
  }
  if (keyboardBtn[0].code === 'ControlLeft') {
    isCtrlLeftActive = false;
  }
  if (keyboardBtn[0].code === 'AltLeft') {
    isAltActive = false;
  }
});

setLang();
