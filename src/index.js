import React from 'react';
import ReactDOM from 'react-dom';
import './css/normalize.css';
import './css/style.css';
import './css/sanitize.css';
import './firebase/firebase';

// Components CSS
import './css/header.css';
import './css/main.css';
import './css/footer.css';

// Components
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
