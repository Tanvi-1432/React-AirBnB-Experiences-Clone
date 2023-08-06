 import photoGrid from '../images/photo-grid.png'

 export default function Hero() {
    return (
      <section>
        <div className="hero-container">
          <img src={photoGrid} alt="grid" />
          <h1>Online Experiences</h1>
          <p>
            Join unique interactive activities led by one-of-a-kind hosts—all
            without leaving home.
          </p>
        </div>
      </section>
    );
 }