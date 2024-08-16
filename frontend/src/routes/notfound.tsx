import Header from "../components/Header/header";
import RoutesComponents from "../components/RoutesComponents/routesComponents";
import "../index.css"

// Está sendo estilizado pelo arquivo global de css "index.css" na pasta "src"
function NotFound() {
  
  return (
    <div>
        <Header/>
        <RoutesComponents/>
        <h1 className="h1NotFound">Página não encontrada!</h1>
    </div>
  );
}

export default NotFound;

