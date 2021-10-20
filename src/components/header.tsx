import logo from "../logo.svg";
import "./header.css";

const Header = () => {
  return (
    <header className="Header">
      <img src={logo} className="Header__logo" alt="logo" width="200px" data-testid="logo" />
    </header>
  );
};

export default Header;
