import { enButtons } from './enButtons.js';
import { generateRow } from './generateRow.js';
import { clickMapDivToBtn, keyDownMapBtnToDiv } from './generateButton.js';

const textareaEl = document.createElement('textarea');
textareaEl.classList.add('textarea');

const containerEl = document.createElement('div');
containerEl.classList.add('container');

const keyboardEl = document.createElement('div');
keyboardEl.classList.add('keyboard');

const firstRowEl = document.createElement('div');
firstRowEl.classList.add('first-row');
generateRow(enButtons[0], firstRowEl);

const secondRowEl = document.createElement('div');
secondRowEl.classList.add('second-row');
generateRow(enButtons[1], secondRowEl);

const thirdRowEl = document.createElement('div');
thirdRowEl.classList.add('third-row');
generateRow(enButtons[2], thirdRowEl);

const forthRowEl = document.createElement('div');
forthRowEl.classList.add('forth-row');
generateRow(enButtons[3], forthRowEl);

const fifthRowEl = document.createElement('div');
fifthRowEl.classList.add('fifth-row');
generateRow(enButtons[4], fifthRowEl);

keyboardEl.append(firstRowEl);
keyboardEl.append(secondRowEl);
keyboardEl.append(thirdRowEl);
keyboardEl.append(forthRowEl);
keyboardEl.append(fifthRowEl);

containerEl.append(textareaEl);

containerEl.append(keyboardEl);

document.body.append(containerEl);

const allBtnDiv = document.getElementsByClassName('button');

const insertText = (value) => {
  const beforePosition = textareaEl.selectionStart;
  const afterPosition = textareaEl.selectionEnd;
  textareaEl.value = `${textareaEl.value.slice(
    0,
    beforePosition
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
      beforePosition
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
    beforePosition - 1
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
      beforePosition
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
    beforePosition
  )}${textareaEl.value.slice(afterPosition + 1)}`;
  textareaEl.selectionStart = beforePosition;
  textareaEl.selectionEnd = beforePosition;
};

const addLetters = (btn) => {
  if (btn.isSymbol) {
    insertText(btn.value);
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
    }
  }
};

const onButtonClick = (div) => {
  div.classList.toggle('button_active');
  const chosenButton = clickMapDivToBtn.get(div);
  addLetters(chosenButton);
};

const onButtonClickEnd = (div) => {
  div.classList.toggle('button_active');
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
  const mapSingleArray = [].concat(...enButtons);
  const keyboardBtn = mapSingleArray.filter((item) => ev.code === item.code);
  if (keyboardBtn.length) {
    addLetters(keyboardBtn[0]);
    keyDownMapBtnToDiv.get(keyboardBtn[0]).classList.add('button_active');
  }
});

document.addEventListener('keyup', (ev) => {
  const mapSingleArray = [].concat(...enButtons);
  const keyboardBtn = mapSingleArray.filter((item) => ev.code === item.code);
  if (keyboardBtn.length) {
    keyDownMapBtnToDiv.get(keyboardBtn[0]).classList.remove('button_active');
  }
});
