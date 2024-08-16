import "./header.css";
import imgLogo from "../../assets/img/logotipo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to={"/"}>
        <img className="logo" src={imgLogo} alt="Logotipo do MarketPlace" />
      </Link>
      <input type="text" className="inputText" />
      <button className="buttonLogin">Login</button>
    </header>
  );
}
export default Header;
