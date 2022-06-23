import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('webContainer')
);

// function setContainerHeight() {
//   var browserHeight = window.innerHeight;
//   var elemFooter = document.getElementById("Footer-container");
//   var footerHeight = elemFooter.clientHeight;
//   var idealHeight = browserHeight - footerHeight - 99; // no 100 para dejar el margen de los decimales y que no se vea ninguna linea blanca abajo.
//   var viewElem = document.getElementsByClassName("general-window-container");
  
//   for (var i = 0; i < viewElem.length; i++) {
//     viewElem[i].style.minHeight = idealHeight+"px";
//   }
// }