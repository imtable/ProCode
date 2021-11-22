import style from './style.module.css';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    // <>
    <div className={`${style.part}`}>
      <nav className={`${style.menu}`}>
        <div className={`${style.item}`}><NavLink to='/company' >About us</NavLink></div>
        <div className={`${style.item}`}><NavLink to='/cats' >Cats</NavLink></div>
        <div className={`${style.item}`}><NavLink to='/gallery' >Gallery</NavLink></div>
      </nav>
    </div>
    // </>
  );
}

export default App;
