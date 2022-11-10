import 'regenerator-runtime';
import './styles/style.css';
import "./script/component/jumbo-tron.js";
import './script/component/support-by.js';
import './script/component/contact-me.js';
import './script/component/copy-right.js';
// import "./script/component/nav-bar.js";
import "./styles/style.css";
import {navBar, search, main} from './script/view/main.js';
navBar();
main();

document.addEventListener('DOMContentLoaded', search, main);