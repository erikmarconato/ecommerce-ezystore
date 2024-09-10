import { useNavigate } from "react-router-dom";
import "../CrudProdutos/crudprodutos.css";

function CrudProdutos() {
  const navigate = useNavigate();
    
  return (
    <div className="divPrincipal">
      <h1>Painel de Controle</h1>
      <div className="crudButtons">
      <button className="add-product-btn" onClick={() => {navigate("/adicionarproduto")}}>Adicionar Produto</button>
        <button className="add-product-btn" onClick={() => {navigate("/editarproduto")}}>Editar Produto</button>
        <button className="add-product-btn" onClick={() => {navigate("/deletarproduto")}}>Deletar Produto</button>
      </div>
    </div>
  );
}

export default CrudProdutos;
