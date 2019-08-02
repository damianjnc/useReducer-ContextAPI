import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import NoteApp from './components/NoteApp'

//
// Goal: Setup support for adding and removing notes
//
// 1. Setup and dispatch an ADD_NOTE action
// 2. Setup and dispatch a REMOVE_NOTE action
// 3. Test your work!



ReactDOM.render(<NoteApp/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
