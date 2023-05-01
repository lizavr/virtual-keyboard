export class Button {
  constructor(
    enValue,
    ruValue,
    isSymbol,
    hasUpperCase,
    enUpperCase,
    ruUpperCase,
    code,
    isUpperCaseVisible = false,
    isEn = true,
  ) {
    this.enValue = enValue;
    this.ruValue = ruValue;
    this.isSymbol = isSymbol;
    this.hasUpperCase = hasUpperCase;
    this.enUpperCase = enUpperCase;
    this.ruUpperCase = ruUpperCase;
    this.code = code;
    this.isUpperCaseVisible = isUpperCaseVisible;
    this.isEn = isEn;
  }

  getValue() {
    return this.isEn ? this.enValue : this.ruValue;
  }

  getUpperCase() {
    return this.isEn ? this.enUpperCase : this.ruUpperCase;
  }

  setLang(isEn) {
    this.isEn = isEn;
  }
}

export const buttonsArray = [
  [
    new Button('`', 'ё', true, true, '~', 'Ё', 'Backquote', true),
    new Button('1', '1', true, true, '!', '!', 'Digit1', true),
    new Button('2', '2', true, true, '@', '"', 'Digit2', true),
    new Button('3', '3', true, true, '#', '№', 'Digit3', true),
    new Button('4', '4', true, true, '$', ';', 'Digit4', true),
    new Button('5', '5', true, true, '%', '%', 'Digit5', true),
    new Button('6', '6', true, true, '^', ':', 'Digit6', true),
    new Button('7', '7', true, true, '&', '?', 'Digit7', true),
    new Button('8', '8', true, true, '*', '*', 'Digit8', true),
    new Button('9', '9', true, true, '(', ')', 'Digit9', true),
    new Button('0', '0', true, true, ')', ')', 'Digit0', true),
    new Button('-', '-', true, true, '_', '_', 'Minus', true),
    new Button('=', '=', true, true, '+', '+', 'Equal', true),
    new Button(
      'Backspace',
      'Backspace',
      false,
      false,
      'Backspace',
      'Backspace',
      'Backspace',
    ),
  ],

  [
    new Button('Tab', 'Tab', false, false, 'Tab', 'Tab', 'Tab'),
    new Button('q', 'й', true, true, 'Q', 'Й', 'KeyQ'),
    new Button('w', 'ц', true, true, 'W', 'Ц', 'KeyW'),
    new Button('e', 'у', true, true, 'E', 'У', 'KeyE'),
    new Button('r', 'к', true, true, 'R', 'К', 'KeyR'),
    new Button('t', 'е', true, true, 'T', 'Е', 'KeyT'),
    new Button('y', 'н', true, true, 'Y', 'Н', 'KeyY'),
    new Button('u', 'г', true, true, 'U', 'Г', 'KeyU'),
    new Button('i', 'ш', true, true, 'I', 'Ш', 'KeyI'),
    new Button('o', 'щ', true, true, 'O', 'Щ', 'KeyO'),
    new Button('p', 'з', true, true, 'P', 'З', 'KeyP'),
    new Button('[', 'х', true, true, '{', 'Х', 'BracketLeft'),
    new Button(']', 'ъ', true, true, '}', 'Ъ', 'BracketRight'),
    new Button('\\', '\\', true, true, '|', '/', true, 'Backslash'),
    new Button('Del', 'Del', false, false, 'Del', 'Del', 'Delete'),
  ],
  [
    new Button(
      'CapsLk',
      'CapsLk',
      false,
      false,
      'CapsLk',
      'CapsLk',
      'CapsLock',
    ),
    new Button('a', 'ф', true, true, 'A', 'Ф', 'KeyA'),
    new Button('s', 'ы', true, true, 'S', 'Ы', 'KeyS'),
    new Button('d', 'в', true, true, 'D', 'В', 'KeyD'),
    new Button('f', 'а', true, true, 'F', 'А', 'KeyF'),
    new Button('g', 'п', true, true, 'G', 'П', 'KeyG'),
    new Button('h', 'р', true, true, 'H', 'Р', 'KeyH'),
    new Button('j', 'о', true, true, 'J', 'О', 'KeyJ'),
    new Button('k', 'л', true, true, 'K', 'Л', 'KeyK'),
    new Button('l', 'д', true, true, 'L', 'Д', 'KeyL'),
    new Button(';', 'ж', true, true, ':', 'Ж', 'Semicolon'),
    new Button("'", 'э', true, true, '"', 'Э', 'Quote'),
    new Button('Enter', 'Enter', false, false, 'Enter', 'Enter', 'Enter'),
  ],
  [
    new Button('Shift', 'Shift', false, false, 'Shift', 'Shift', 'ShiftLeft'),
    new Button('z', 'я', true, true, 'Z', 'Я', 'KeyZ'),
    new Button('x', 'ч', true, true, 'X', 'Ч', 'KeyX'),
    new Button('c', 'с', true, true, 'C', 'С', 'KeyC'),
    new Button('v', 'м', true, true, 'V', 'М', 'KeyV'),
    new Button('b', 'и', true, true, 'B', 'И', 'KeyB'),
    new Button('n', 'т', true, true, 'N', 'Т', 'KeyN'),
    new Button('m', 'ь', true, true, 'M', 'Ь', 'KeyM'),
    new Button(',', 'б', true, true, '<', 'Б', 'Comma'),
    new Button('.', 'ю', true, true, '>', 'Ю', 'Period'),
    new Button('/', '.', true, true, '?', ',', 'Slash'),
    new Button('\u25B2', '\u25B2', false, false, '\u25B2', '\u25B2', 'ArrowUp'),
    new Button('Shift', 'Shift', false, false, 'Shift', 'Shift', 'ShiftRight'),
  ],
  [
    new Button('Ctrl', 'Ctrl', false, false, 'Ctrl', 'Shift', 'ControlLeft'),
    new Button('Win', 'Win', false, false, 'Win', 'Win', 'MetaLeft'),
    new Button('Alt', 'Alt', false, false, 'Alt', 'Alt', 'AltLeft'),
    new Button(' ', ' ', false, false, ' ', 'Space', 'Space'),
    new Button('Alt', 'Alt', false, false, 'Alt', 'Alt', 'AltRight'),
    new Button('Ctrl', 'Ctrl', false, false, 'Ctrl', 'Ctrl', 'ControlRight'),
    new Button(
      '\u25C4',
      '\u25C4',
      false,
      false,
      '\u25C4',
      '\u25C4',
      'ArrowLeft',
    ),
    new Button(
      '\u25BC',
      '\u25BC',
      false,
      false,
      '\u25BC',
      '\u25BC',
      'ArrowDown',
    ),
    new Button(
      '\u25BA',
      '\u25BA',
      false,
      false,
      '\u25BA',
      '\u25BA',
      'ArrowRight',
    ),
  ],
];
