// import style from './style.module.css';

import Footer from '../components/Footer';
// import Header from '../components/Header';
import Main from '../components/Main';

function App() {
  return (
    // <>
    // <div className={`${style.wrapper}`}>
    //   {/* <header className={`${style.part}`}><Header  /></header>
    //   <main className={`${style.part}`}><Main /></main>
    //   <footer className={`${style.part}`}><Footer /></footer> */}
    // </div>

    <div style={{height:'100%', display:'flex', flexDirection:'column', backgroundColor:'lightgray'}}>
      {/* <header><Header /></header> */}
      <main><Main /></main>
      <footer><Footer /></footer>
    </div>
    // </>
  );
}

export default App;
