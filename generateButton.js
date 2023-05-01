export const clickMapDivToBtn = new Map();

export const keyDownMapBtnToDiv = new Map();

export const setButtonContent = (item, newDiv) => {
  newDiv.innerHTML = '';
  if (item.isUpperCaseVisible) {
    const newSup = document.createElement('sup');
    newSup.classList.add('sup');
    newSup.innerHTML = item.getUpperCase();
    newDiv.append(newSup);
  }
  if (item.isSymbol) {
    newDiv.innerHTML += item.getValue().toUpperCase();
  } else {
    newDiv.innerHTML += item.getValue();
  }
};

export const generateButton = (item) => {
  const newDiv = document.createElement('div');
  newDiv.classList.add('button');
  if (!item.isSymbol) {
    newDiv.classList.add('button_dark');
  }
  setButtonContent(item, newDiv);

  clickMapDivToBtn.set(newDiv, item);

  keyDownMapBtnToDiv.set(item, newDiv);

  return newDiv;
};
