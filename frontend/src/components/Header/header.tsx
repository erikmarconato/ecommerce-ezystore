import "./header.css";
import imgLogo from "../../assets/img/logotipo.png";
import { useNavigate } from "react-router-dom";
import useRole from "../../routes/Login/useRole";
import { FaUser } from "react-icons/fa";
import { useState } from "react";

function Header() {
  const { role, loading } = useRole();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const logout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("jwt");
    window.location.reload(); 
  };

  const loginButton = () => {
    if (loading) return null;

    if (role === null) {
      return <button className="buttonLogin" onClick={() => navigate("/login")}>Login</button>;
    }

    if (role === "0" || role === "1") {
      return (
        <div className="user-menu">
          <FaUser className="user-icon" onClick={toggleMenu} />
          {showMenu && (
            <div className="dropdown-menu">
              {role === "1" && <button onClick={() => navigate("/paineldecontrole")}>Painel de Controle</button>}
              <button onClick={logout}>Sair</button>
            </div>
          )}
        </div>
      );
    }
  };

  return (
    <header className="header">
      <img className="logo" src={imgLogo} alt="Logotipo do MarketPlace" onClick={() => navigate("/")} />
      {loginButton()}
    </header>
  );
}

export default Header;
