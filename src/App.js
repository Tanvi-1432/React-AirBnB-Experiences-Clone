import './App.css';

import cardImage1 from "./images/card-1.png";

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cards from './components/Cards';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="cards-wrapper">
        <Cards
          image={cardImage1}
          productState="SOLD OUT"
          rating="5.0"
          reviewCount={6}
          country="USA"
          title="Life lessons with Katie Zaferes"
          price={136.99}
        />
        <Cards
          image={cardImage1}
          productState="ONLINE"
          rating="5.0"
          reviewCount={30}
          country="USA"
          title="Learn wedding photography"
          price={125.99}
        />
        <Cards
          image={cardImage1}
          productState="SOLD OUT"
          rating="4.8"
          reviewCount={2}
          country="USA"
          title="Group mountain biking"
          price={50}
        />
      </div>
    </div>
  );
}

export default App;
