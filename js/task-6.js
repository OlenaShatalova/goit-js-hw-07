function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  let a = 30;
  let str = '';
  while (amount > 0) {
    str += `<div style="width: ${a}px; height: ${a}px; background-color: ${getRandomHexColor()};"></div>`;
    amount--;
    a += 10;
  }
  boxesDiv.innerHTML = str;
}

const amountInput = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesDiv = document.querySelector('div#boxes');

createBtn.addEventListener('click', event => {
  event.preventDefault();

  let amount = amountInput.value;
  if (amount > 0 && amount < 101) {
    createBoxes(amount);
  }
  amountInput.value = '';
});

destroyBtn.addEventListener('click', event => {
  boxesDiv.innerHTML = '';
});

const style = document.createElement('style');
style.textContent = `
#controls {
  padding: 32px;
  background: #f6f6fe;
}

#controls input {
  width: 150px;
  text-align: center;
}
#controls button {
  margin-left: 16px;
  width: 120px;
}

[data-destroy] {
  background: #ff4e4e;
}

[data-destroy]:hover {
  background: #ff7070;
}

#boxes {
  margin-top: 16px;
  padding: 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 44px;
  background: #f6f6fe;
}
`;

document.head.append(style);
