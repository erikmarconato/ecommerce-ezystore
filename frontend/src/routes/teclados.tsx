import Card from "../components/CardsProducts/card";
import data from "../Data/products.json";
import Header from "../components/Header/header";
import RoutesComponents from "../components/RoutesComponents/routesComponents";

function Teclados() {
  const products = [...data.products.keyboards];
  return (
    <div>
      <Header />
      <RoutesComponents />
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
    </div>
  );
}

export default Teclados;