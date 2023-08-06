import airbnbLogo from '../images/airbnb-logo.png';

export default function Navbar() {
    return (
      <nav className="navbar">
        <a href="#">
          <img src={airbnbLogo} alt="Airbnb logo" />
        </a>
      </nav>
    );
}