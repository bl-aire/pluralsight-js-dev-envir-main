import './index.css';

import numeral from 'numeral';

const courseValue = numeral(1000).format( '$0,0.00'); //display 1000 in this format
console.log(`I would pay ${courseValue} for this awesome course!`); //use backtick
