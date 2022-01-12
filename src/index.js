import React from 'react';
import ReactDOM from  'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const butts = {
    ass: 69,
    butthole: true
}

const bigbutts = {
    ...butts,
    ass: 96,
    farts: "no"
}

console.log(butts)
console.log(bigbutts)




ReactDOM.render(<AppRouter />, document.getElementById('app'));