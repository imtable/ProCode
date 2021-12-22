import { Routes, Route } from 'react-router-dom';
import style from './style.module.css';
import HomePage from '../../containers/HomePage';
import Cats from '../../containers/CatsPage';
import HomeCats from '../../containers/CatsPage/HomeCatsPage';
import WildCats from '../../containers/CatsPage/WildCatsPage';

function Component() {
  return (
    // <>
    <div className={`${style.part}`}>
      <Routes>
        <Route exact path='/' element={<HomePage />} />

        <Route exact path='/cats' element={<Cats />} />
        <Route exact path='/cats/home-cats' element={<HomeCats />} />
        <Route exact path='/cats/wild-cats' element={<WildCats />} />
      </Routes>
    </div>
    // </>
  );
}

export default Component;
