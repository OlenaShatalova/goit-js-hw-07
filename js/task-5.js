function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const nameColor = document.querySelector('.color');
const changeColor = document.querySelector('.change-color');

changeColor.addEventListener('click', event => {
  event.preventDefault();
  const currentColor = getRandomHexColor();
  document.body.style.backgroundColor = currentColor;
  nameColor.textContent = currentColor;
});

const style = document.createElement('style');
style.textContent = `
.widget {
  width: 345px;
  border-radius: 8px;
  padding: 100px 0;
  background: #fff;
}
.widget p{
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.04em;
  color: #2e2f42;
}
.change-color {
  display: block;
  margin: 0 auto;
}
`;

document.head.append(style);
