
import ReactDOM from 'react-dom';
import App from './App';
import AppContext from './AppContext';
import React from 'react';

const someValue = '0';
window.someValue1 = '';




ReactDOM.render(
    // <React.StrictMode>
    <AppContext.Provider value={ someValue }>
        <App />
    </AppContext.Provider>
    // </React.StrictMode>,
    , document.getElementById('root')
);