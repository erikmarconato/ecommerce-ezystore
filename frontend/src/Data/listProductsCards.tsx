import Card from "../components/CardsProducts/card";
import data from "./products.json";
import "../index.css";

// Foi estilizado pelo css global "index.css" na pasta "src" apenas para centralizar os cards na div

function ListProductsCards() {
  const products = [
    ...data.products.keyboards,
    ...data.products.mouses,
    ...data.products.smartphones,
  ];
  return (
    <div className="centralizarCard">
      {products.map((product) => (
        <Card
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default ListProductsCards;
