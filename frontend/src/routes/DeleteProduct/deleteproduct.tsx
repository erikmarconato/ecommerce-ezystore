import { useState } from "react";
import Header from "../../components/Header/header";
import "./deleteproduct.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DeleteProduct() {
  const [id, setId] = useState("");

  const navigate = useNavigate();

  const changeId = (event: any) => {
    setId(event.target.value);
  };

  const deleteProduct = async () => {
    if (id) {
      const checkId = await axios.get(`http://localhost:8080/produtos/${id}`);
      if (checkId.data != null) {
        try {
          await axios.delete(`http://localhost:8080/produtos/${id}`);
          alert("Produto deletado com sucesso!");
          navigate("/paineldecontrole");
        } catch (err) {
          console.log(err);
          alert("Erro ao deletar produto");
        }
      } else {
        alert("Id não existe no banco de dados!");
      }
    }
  };

  function submit(event: any) {
    event.preventDefault();
    deleteProduct();
  }

  return (
    <div>
      <Header />
      <br />
      <div className="divPrincipalDeleteProduct">
        <h1>Deletar Produto</h1>
        <form onSubmit={submit}>
          <div>
            <label>
              ID do Produto:
              <input type="text" onChange={changeId} value={id} required />
            </label>
          </div>

          <button type="submit" className="delete-btn">
            Deletar
          </button>
        </form>
      </div>
    </div>
  );
}

export default DeleteProduct;
