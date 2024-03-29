import style from './style.module.css';
import img from './cat1.jpeg';
import img2 from './wild-cats.jpeg';
import { NavLink } from 'react-router-dom';
// import { Routes, Route, NavLink } from 'react-router-dom';
// import HomeCats from './HomeCatsPage';
// import WildCats from './WildCatsPage';


function App() {
  return (
    // <>
    <div className={`${style.component}`}>
      {/* <Routes>
        <Route exact path='home-cats' element={<HomeCats />} />
        <Route exact path='wild-cats' element={<WildCats />} />
      </Routes> */}
      
      <div className={`${style.menu}`}>
        <div className={`${style.item}`}><NavLink to='/cats/home-cats' >Home cats</NavLink></div>
        <div className={`${style.item}`}><NavLink to='/cats/wild-cats' >Wild cats</NavLink></div>
      </div>

      <div className={`${style.article}`}>
        <p>
          The cat (Felis catus) is a domestic species of small carnivorous mammal.[1][2] It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family.[4] A cat can either be a house cat, a farm cat or a feral cat; the latter ranges freely and avoids human contact.[5] Domestic cats are valued by humans for companionship and their ability to kill rodents. About 60 cat breeds are recognized by various cat registries.[6]

          The cat is similar in anatomy to the other felid species: it has a strong flexible body, quick reflexes, sharp teeth and retractable claws adapted to killing small prey. Its night vision and sense of smell are well developed. Cat communication includes vocalizations like meowing, purring, trilling, hissing, growling and grunting as well as cat-specific body language. A predator that is most active at dawn and dusk (crepuscular), the cat is a solitary hunter but a social species. It can hear sounds too faint or too high in frequency for human ears, such as those made by mice and other small mammals.[7] It secretes and perceives pheromones.[8]

          Female domestic cats can have kittens from spring to late autumn, with litter sizes often ranging from two to five kittens.[9] Domestic cats are bred and shown at events as registered pedigreed cats, a hobby known as cat fancy. Population control of cats may be effected by spaying and neutering, but their proliferation and the abandonment of pets has resulted in large numbers of feral cats worldwide, contributing to the extinction of entire bird, mammal, and reptile species.[10]

          Cats were first domesticated in the Near East around 7500 BC.[11] It was long thought that cat domestication began in ancient Egypt, where cats were venerated from around 3100 BC.[12][13] As of 2021, there are an estimated 220 million owned and 480 million stray cats in the world.[14][15] As of 2017, the domestic cat was the second-most popular pet in the United States, with 95 million cats owned.[16][17][18] In the United Kingdom, 26% of adults have a cat with an estimated population of 10.9 million pet cats as of 2020.[19]
        </p>
        <img src={img} alt="cat" />
        <img src={img2} alt="cat" />
      </div>
    </div>
    // </>
  );
}

export default App;
