import style from './style.module.css';
// import { Routes, Route, NavLink } from 'react-router-dom';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';

function App() {
  return (
    // <>
    <div className={`${style.wrapper}`}>
      <header className={`${style.part}`}><Header  /></header>
      <main className={`${style.part}`}><Main /></main>
      <footer className={`${style.part}`}><Footer /></footer>
    </div>
    // </>
  );
}

export default App;
