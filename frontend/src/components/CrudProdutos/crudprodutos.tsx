import "../CrudProdutos/crudprodutos.css";

function CrudProdutos() {
  return (
    <div className="divPrincipal">
      <h1>Painel de Controle</h1>
      <div className="crudButtons">
        <button className="add-product-btn">Adicionar Produto</button>
        <button className="add-product-btn">Editar Produto</button>
        <button className="add-product-btn">Excluir Produto</button>
      </div>
    </div>
  );
}

export default CrudProdutos;
