import style from './style.module.css';

function App() {
  return (
    // <>
    <div className={`${style.component}`}>
      <div className={`${style.inner}`}>
        <p className="about-text">
          Our service area is currently growing and our map may not be exact. Please contact us to see if your area is covered.
        </p>
      </div>
    </div>
    // </>
  );
}

export default App;
