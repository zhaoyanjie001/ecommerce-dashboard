
import ReactDOM from 'react-dom';
import App from './App';
import AppContext from './AppContext';
import React from 'react';


// window.someValue1 = '';
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
// )

ReactDOM.render(
    <React.StrictMode>
    {/* <AppContext.Provider value={ someValue }> */}
        <App />
    {/* </AppContext.Provider> */}
    </React.StrictMode>,
    document.getElementById('root')
);