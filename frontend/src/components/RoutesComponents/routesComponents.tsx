import "./routesComponents.css";
import { Link } from "react-router-dom";

function RoutesComponents() {
  return (
    <div className="divRoutesComponents">
      <Link to={"/mouses"} className="options">
        Mouses
      </Link>
      <Link to={"/teclados"} className="options">
        Teclados
      </Link>
      <Link to={"/smartphones"} className="options">
        Smartphones
      </Link>
    </div>
  );
}

export default RoutesComponents;
