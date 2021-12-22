import style from './style.module.css';
import img from './wild-cats.jpeg';
// import HomeCats from './HomeCats';
// import WildCats from './WildCats';
// import { Routes, Route, NavLink } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

// import HomeCats from '../';

function App() {
  return (
    // <>
    <div className={`${style.component}`}>
      {/* <Routes>
        <Route exact path='/gallery/home-cats' element={<HomeCats />} />
        <Route exact path='/gallery/wild-cats' element={<WildCats />} />
      </Routes> */}
      
      <div className={`${style.menu}`}>
        <div className={`${style.item}`}><NavLink to='/cats' >Back to Cats</NavLink></div>
      </div>

      <div className={`${style.article}`}>
        <p>
          article about wild cats
        </p>
        <img src={img} alt="cat" />
      </div>
    </div>
    // </>
  );
}

export default App;
