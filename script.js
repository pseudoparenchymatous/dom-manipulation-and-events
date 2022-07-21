const container = document.querySelector('#container');

const para = document.createElement('p');
para.textContent = 'Hey I\'m red!';
container.appendChild(para);

const h3 = document.createElement('h3');
h3.textContent = 'I\'m a blue h3!';
container.appendChild(h3);

const div = document.createElement('div');
div.classList.toggle('pink-div');
div.style.cssText = 'border: solid black 2px; background-color: pink;';