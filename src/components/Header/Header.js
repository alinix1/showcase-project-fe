import headphones from "../../assets/headphones_logo.png";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header data-cy="header-element">
      <h1>Beats4Devs</h1>
      <img
        className="logo-headphones"
        data-cy="logo"
        src={headphones}
        alt="logo of headphones"
      />
      <div className="all-button-container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <button className="home-button-container" data-cy="home-btn">
            H O M E
          </button>
        </Link>
        <Link to="/playlist" style={{ textDecoration: "none" }}>
          <button className="playlist-button-container" data-cy="playlist-btn">
            P L A Y L I S T
          </button>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <button className="about-button-container" data-cy="about-btn">
            A B O U T
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
