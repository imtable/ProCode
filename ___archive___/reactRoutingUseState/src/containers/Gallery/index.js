import style from './style.module.css';
import img1 from './cat1.jpeg';
import img2 from './cat2.jpeg';
import img3 from './cat3.jpeg';
import img4 from './cat4.jpeg';

// const images = importAll(require.context('./images/', false, /\.(png|jpe?g|svg)$/));

// function importAll(r) {
//   return r.keys().map(r);
// }

function App() {
  return (
    // <>
    <div className={`${style.component}`}>
      <div className={`${style.gallery}`}>
        <div className={`${style.item}`}>
          <a href="/gallery">
            <img src={img1} alt="cat" />
          </a>
        </div>
        <div className={`${style.item}`}>
          <a href="/gallery">
            <img src={img2} alt="cat" />
          </a>
        </div>
        <div className={`${style.item}`}>
          <a href="/gallery">
            <img src={img3} alt="cat" />
          </a>
        </div>
        <div className={`${style.item}`}>
          <a href="/gallery">
            <img src={img4} alt="cat" />
          </a>
        </div>
      </div>
    </div>
    // </>
  );
}

export default App;
