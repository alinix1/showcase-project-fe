import headphones from "../../assets/headphones_logo.png";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <h1>Beats4Devs</h1>
      <img className="logo-headphones" src={headphones} alt="headphones logo" />
      <Link to="/playlist" style={{ textDecoration: "none" }}>
        <button className="playlist-button-container">P L A Y L I S T</button>
      </Link>
      <Link to="/" style={{ textDecoration: "none" }}>
        <button className="home-button-container">H O M E</button>
      </Link>
      <Link to="/about" style={{ textDecoration: "none" }}>
        <button className="about-button-container">A B O U T</button>
      </Link>
    </header>
  );
};

export default Header;
