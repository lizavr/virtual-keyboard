export const clickMapDivToBtn = new Map();

export const keyDownMapBtnToDiv = new Map();

export const generateButton = (item) => {
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

  return newDiv;
};
