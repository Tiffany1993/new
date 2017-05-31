require('style-loader!css-loader!../css/style.css');

var h1 = document.createElement('h1');
h1.textContnet = '这里是one.js的h1';
document.body.appendChild(h1);