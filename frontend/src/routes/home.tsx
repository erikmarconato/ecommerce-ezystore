import Header from "../components/Header/header";
import RoutesComponents from "../components/RoutesComponents/routesComponents";
import ListProductsCards from "../Data/listProductsCards.tsx";
import "../index.css";

function Home() {
  return (
    <div>
      <Header />
      <RoutesComponents />
      <ListProductsCards controlAcess={false}/>
    </div>
  );
}

export default Home;
