import jquery from "jquery";
import './main.css';
import './button/button.css';
import img from './assets/React-icon.svg.png';
import { showButton } from './button/button';
showButton();
console.log({ jquery });
console.log('Test good');

const picture = document.createElement('img');
picture.setAttribute('src', img);
document.body.appendChild(picture);