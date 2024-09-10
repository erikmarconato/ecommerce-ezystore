import { useState } from "react";
import Header from "../../components/Header/header";
import "./addproduct.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState("");
  const [typeProduct, setTypeProduct] = useState("");
  const navigate = useNavigate();

  const fetchProduto = async () => {
    const token = localStorage.getItem("jwt"); 

    if (!token) {
      alert("Token de autenticação não encontrado. Faça login novamente.");
      return;
    }

    try {
      await axios.post(
        "http://localhost:8080/produtos",
        {
          nome: name,
          preco: price,
          imagemUrl: url,
          tipoProduto: typeProduct,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Produto cadastrado com sucesso");
      navigate("/paineldecontrole");
    } catch (err) {
      console.log(err);
      alert("Erro ao cadastrar produto");
    }
  };

  const changeName = (event: any) => {
    setName(event.target.value);
  };

  const changePrice = (event: any) => {
    setPrice(event.target.value);
  };

  const changeUrl = (event: any) => {
    setUrl(event.target.value);
  };

  const changeTypeProduct = (event: any) => {
    setTypeProduct(event.target.value);
  };

  const submit = async (event: any) => {
    event.preventDefault();
    await fetchProduto();
    
  };

  return (
    <>
      <Header />
      <br />
      <div className="divPrincipalAddProduct">
        <h1>Adicionar Produto</h1>
        <form onSubmit={submit}>
          <div>
            <label>
              Nome: <input type="text" onChange={changeName} value={name} required />
            </label>
          </div>

          <div>
            <label>
              Preço: <input type="text" onChange={changePrice} value={price} required />
            </label>
          </div>

          <div>
            <label>
              Imagem URL: <input type="text" onChange={changeUrl} value={url} required />
            </label>
          </div>

          <div>
            <label>
              Tipo de Produto:
              <select value={typeProduct} onChange={changeTypeProduct} required>
                <option value="">Selecione</option>
                <option value="smartphone">Smartphone</option>
                <option value="mouse">Mouse</option>
                <option value="teclado">Teclado</option>
              </select>
            </label>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </div>
    </>
  );
}

export default AddProduct;
