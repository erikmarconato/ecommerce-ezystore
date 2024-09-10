import { useEffect, useState } from "react";
import Header from "../../components/Header/header";
import "../EditProduct/editproductRoute.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EditProductRoute() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState("");
  const [typeProduct, setTypeProduct] = useState("");
  const [idValidation, setIdValidation] = useState("");
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      setName("");
      setPrice("");
      setUrl("");
      setTypeProduct("");
      setIdValidation("");
      setFormError("");
    }

    const fetchProduto = async () => {
      if (id) {
        const token = localStorage.getItem("jwt");
        if (!token) {
          alert("Token de autenticação não encontrado. Faça login novamente.");
          return;
        }

        try {
          const response = await axios.get(`http://localhost:8080/produtos/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const product = response.data;
          setName(product.nome);
          setPrice(product.preco);
          setUrl(product.imagemUrl);
          setTypeProduct(product.tipoProduto);
          setIdValidation("");
        } catch (err) {
          console.log(err);
          setName("");
          setPrice("");
          setUrl("");
          setTypeProduct("");
          setIdValidation("Id não encontrado no banco de dados");
        }
      }
    };

    fetchProduto();
  }, [id]);

  const changeId = (event: any) => {
    setId(event.target.value);
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

    if (id) {
      if (typeProduct === "") {
        setFormError("Tipo de produto deve ser selecionado.");
        return;
      }

      const token = localStorage.getItem("jwt");

      if (!token) {
        alert("Token de autenticação não encontrado. Faça login novamente.");
        return;
      }

      try {
        await axios.put(
          `http://localhost:8080/produtos/${id}`,
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
        alert("Produto atualizado com sucesso!");
        setFormError("");
        navigate("/paineldecontrole");
      } catch (err) {
        console.error("Erro ao atualizar o produto", err);
        alert("Erro ao atualizar o produto");
      }
    } else {
      alert("Id não pode estar vazio");
    }
  };

  return (
    <>
      <Header />
      <br />
      <div className="divPrincipalEditProductRoute">
        <h1>Editar Produto</h1>
        <p>Para editar um produto é necessário inserir o ID</p>
        <form onSubmit={submit}>
          <div>
            <label>
              ID: <input type="text" onChange={changeId} value={id} />
            </label>
          </div>

          <div>
            <label>
              Nome: <input type="text" onChange={changeName} value={name} />
            </label>
          </div>

          <div>
            <label>
              Preço: <input type="text" onChange={changePrice} value={price} />
            </label>
          </div>

          <div>
            <label>
              Imagem URL: <input type="text" onChange={changeUrl} value={url} />
            </label>
          </div>

          <div>
            <label>
              Tipo de Produto:
              <select value={typeProduct} onChange={changeTypeProduct}>
                <option value="">Selecione</option>
                <option value="smartphone">Smartphone</option>
                <option value="mouse">Mouse</option>
                <option value="teclado">Teclado</option>
              </select>
            </label>
          </div>
          <p className="idValidation">{idValidation}</p>
          {formError && <p className="formError">{formError}</p>}

          <button type="submit">Salvar</button>
        </form>
      </div>
    </>
  );
}

export default EditProductRoute;
