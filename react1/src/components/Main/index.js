import { Routes, Route } from 'react-router-dom';
import style from './style.module.css';
import Company from '../../containers/Company';
import Gallery from '../../containers/Gallery';
import Cats from '../../containers/Cats';
import HomeCats from '../../containers/Cats/HomeCats';
import WildCats from '../../containers/Cats/WildCats';

function App() {
  return (
    // <>
    <div className={`${style.part}`}>
      <Routes>
        <Route exact path='/company' element={<Company />} />

        <Route exact path='/cats' element={<Cats />} />
        <Route exact path='/cats/home-cats' element={<HomeCats />} />
        <Route exact path='/cats/wild-cats' element={<WildCats />} />

        <Route exact path='/gallery' element={<Gallery />} />
      </Routes>
    </div>
    // </>
  );
}

export default App;
