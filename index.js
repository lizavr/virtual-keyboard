class Button {
  constructor(
    value,
    isSymbol,
    hasUpperCase,
    upperCase,
    code,
    isUpperCaseVisible = false,
  ) {
    this.value = value;
    this.isSymbol = isSymbol;
    this.hasUpperCase = hasUpperCase;
    this.upperCase = upperCase;
    this.code = code;
    this.isUpperCaseVisible = isUpperCaseVisible;
  }
}

const enButtons = [
  [
    new Button('`', true, true, '~', 'Backquote', true),
    new Button('1', true, true, '!', 'Digit1', true),
    new Button('2', true, true, '@', 'Digit2', true),
    new Button('3', true, true, '#', 'Digit3', true),
    new Button('4', true, true, '$', 'Digit4', true),
    new Button('5', true, true, '%', 'Digit5', true),
    new Button('6', true, true, '^', 'Digit6', true),
    new Button('7', true, true, '&', 'Digit7', true),
    new Button('8', true, true, '*', 'Digit8', true),
    new Button('9', true, true, '(', 'Digit9', true),
    new Button('0', true, true, ')', 'Digit0', true),
    new Button('-', true, true, '_', 'Minus', true),
    new Button('=', true, true, '+', 'Equal', true),
    new Button('Backspace', false, false, 'Backspace', 'Backspace'),
  ],

  [
    new Button('Tab', false, false, 'Tab', 'Tab'),
    new Button('q', true, true, 'Q', 'KeyQ'),
    new Button('w', true, true, 'W', 'KeyW'),
    new Button('e', true, true, 'E', 'KeyE'),
    new Button('r', true, true, 'R', 'KeyR'),
    new Button('t', true, true, 'T', 'KeyT'),
    new Button('y', true, true, 'Y', 'KeyY'),
    new Button('u', true, true, 'U', 'KeyU'),
    new Button('i', true, true, 'I', 'KeyI'),
    new Button('o', true, true, 'O', 'KeyO'),
    new Button('p', true, true, 'P', 'KeyP'),
    new Button('[', true, true, '{', 'BracketLeft'),
    new Button(']', true, true, '}', 'BracketRight'),
    new Button('\\', true, true, '|', true, 'Backslash'),
    new Button('Del', false, false, 'Del', 'Delete'),
  ],
  [
    new Button('CapsLk', false, false, 'CapsLk', 'CapsLock'),
    new Button('a', true, true, 'A', 'KeyA'),
    new Button('s', true, true, 'S', 'KeyS'),
    new Button('d', true, true, 'D', 'KeyD'),
    new Button('f', true, true, 'F', 'KeyF'),
    new Button('g', true, true, 'G', 'KeyG'),
    new Button('h', true, true, 'H', 'KeyH'),
    new Button('j', true, true, 'J', 'KeyJ'),
    new Button('k', true, true, 'K', 'KeyK'),
    new Button('l', true, true, 'L', 'KeyL'),
    new Button(';', true, true, ':', 'Semicolon'),
    new Button("'", true, true, '"', 'Quote'),
    new Button('Enter', false, false, 'Enter', 'Enter'),
  ],
  [
    new Button('Shift', false, false, 'Shift', 'ShiftLeft'),
    new Button('z', true, true, 'Z', 'KeyZ'),
    new Button('x', true, true, 'X', 'KeyX'),
    new Button('c', true, true, 'C', 'KeyC'),
    new Button('v', true, true, 'V', 'KeyV'),
    new Button('b', true, true, 'B', 'KeyB'),
    new Button('n', true, true, 'N', 'KeyN'),
    new Button('m', true, true, 'M', 'KeyM'),
    new Button(',', true, true, '<', 'Comma'),
    new Button('.', true, true, '>', 'Period'),
    new Button('/', true, true, '?', 'Slash'),
    new Button('Up', false, false, 'Up', 'ArrowUp'),
    new Button('Shift', false, false, 'Shift', 'ShiftRight'),
  ],
  [
    new Button('Ctrl', false, false, 'Ctrl', 'ControlLeft'),
    new Button('Win', false, false, 'Win', 'MetaLeft'),
    new Button('Alt', false, false, 'Alt', 'AltLeft'),
    new Button('Space', false, false, 'Space', 'Space'),
    new Button('Alt', false, false, 'Alt', 'AltRight'),
    new Button('Ctrl', false, false, 'Ctrl', 'ControlRight'),
    new Button('Left', false, false, 'Left', 'ArrowLeft'),
    new Button('Down', false, false, 'Down', 'ArrowDown'),
    new Button('Right', false, false, 'Right', 'ArrowRight'),
  ],
];

const clickMapDivToBtn = new Map();

const keyDownMapBtnToDiv = new Map();

const textareaEl = document.createElement('textarea');
textareaEl.classList.add('textarea');

const onButtonClick = (div) => {
  div.classList.toggle('button_active');
  const chosenButton = clickMapDivToBtn.get(div);
  if (chosenButton.isSymbol) {
    textareaEl.innerHTML += chosenButton.value;
  }
};

const onButtonClickEnd = (div) => {
  div.classList.toggle('button_active');
};

const generateButton = (item) => {
  const newDiv = document.createElement('div');
  newDiv.classList.add('button');
  if (!item.isSymbol) {
    newDiv.classList.add('button_dark');
  }
  if (item.isUpperCaseVisible) {
    const newSup = document.createElement('sup');
    newSup.innerHTML = item.upperCase;
    newDiv.append(newSup);
  }
  newDiv.innerHTML += item.value;

  clickMapDivToBtn.set(newDiv, item);

  keyDownMapBtnToDiv.set(item, newDiv);

  newDiv.addEventListener('mousedown', (event) => {
    onButtonClick(event.currentTarget);
  });

  newDiv.addEventListener('mouseup', (event) => {
    onButtonClickEnd(event.currentTarget);
  });

  return newDiv;
};

const generateRow = (arr, rowEl) => {
  arr.forEach((item) => {
    rowEl.append(generateButton(item));
  });
};

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

document.addEventListener('keydown', (ev) => {
  ev.preventDefault();
  const mapSingleArray = [].concat(...enButtons);
  const keyboardBtn = mapSingleArray.filter((item) => ev.code === item.code);
  if (keyboardBtn.length) {
    if (keyboardBtn[0].isSymbol) {
      textareaEl.innerHTML += keyboardBtn[0].value;
    }
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
