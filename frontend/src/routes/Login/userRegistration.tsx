import "./userRegistration.css";
import { useNavigate } from "react-router-dom";
import imgLogo from "../../assets/img/logotipo.png";
import { useState } from "react";
import axios from "axios";

function UserRegistration() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const signup = async (event: any) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    try {
      await axios.post("http://localhost:8080/usuarios", {
        username: username,
        nome: name,
        senha: password,
      });

      setShowSuccessModal(true);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      setError("Ocorreu um erro ao cadastrar. Tente novamente.");
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <img src={imgLogo} alt="Logo" className="signup-logo" />
        <h2>Cadastro</h2>
        <form onSubmit={signup}>
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
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirmar Senha</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="signup-button">
            Cadastrar
          </button>
          {error && <p className="error-message">{error}</p>}
        </form>
        <p className="login-link">
          Já tem uma conta? <a href="/login">Faça login</a>
        </p>
      </div>

      {showSuccessModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Cadastro realizado com sucesso!</h3>
            <button onClick={handleCloseModal} className="modal-button">
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserRegistration;
