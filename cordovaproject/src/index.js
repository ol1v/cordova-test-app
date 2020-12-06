import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

document.addEventListener('deviceready', () => {
  window.addEventListener("batterystatus", onBatteryStatus, false);
  
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
})


function onBatteryStatus(info) { 
  alert("BATTERY STATUS:  Level: " + info.level + " Charging: " + info.isPlugged); 
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
