const categories = document.querySelectorAll('#categories .item');

console.log('Number of categories: ', categories.length);

categories.forEach(category => {
  console.log('Category: ', category.querySelector('h2').textContent);
  console.log('Elements: ', category.querySelectorAll('li').length);
});

const style = document.createElement('style');
style.textContent = `
#categories {
padding: 24px;
width: 392px;
  }
#categories li{
  list-style-type: none;
}
.item:not(:last-child) {
  margin-bottom: 24px;
}
.item {
  background: #f6f6fe;
  padding: 16px;
}
#categories h2 {
  margin: 0 0 16px 0;
  font-weight: 600;
  line-height: 1.33333;
  letter-spacing: 0.04em;
  color: #2e2f42;
}
#categories ul {
  padding: 0;
}
#categories ul li {
  border: 1px solid #808080;
  border-radius: 4px;
  margin-top: 8px;
  padding: 8px 16px;
  font-weight: 400;
  font-size: 16px;
}
`;

document.head.append(style);
