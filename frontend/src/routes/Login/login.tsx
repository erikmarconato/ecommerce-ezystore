import "./login.css";
import { useNavigate } from "react-router-dom";
import imgLogo from "../../assets/img/logotipo.png";
import { useState } from "react";
import axios from "axios";
import  { jwtDecode }  from  "jwt-decode" ;


function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const login = async (event: any) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        username: username,
        senha: senha,
      });

      if (response.status === 200) {
        const token = response.data;
        const decoded = jwtDecode(token);  
        localStorage.setItem("role", decoded.role);
        localStorage.setItem("jwt", token);
        console.log(localStorage);
        navigate("/");
      }
    } catch (error) {
      
      console.error("Erro de autenticação:", error);
      setError("Ocorreu um erro. Verifique suas credenciais");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={imgLogo} alt="Logo" className="login-logo" />
        <h2>Login</h2>
        <form onSubmit={login}>
          <div className="input-group">
            <label htmlFor="username">Usuário</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button">
            Entrar
          </button>
          {error && <p className="error-message">{error}</p>}
        </form>
        <p className="signup-link">
          Não tem uma conta? <a href="/criarusuario">Cadastre-se</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
