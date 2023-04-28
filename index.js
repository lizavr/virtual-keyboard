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

const addLetters = (btn) => {
  if (btn.isSymbol) {
    textareaEl.innerHTML += btn.value;
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
