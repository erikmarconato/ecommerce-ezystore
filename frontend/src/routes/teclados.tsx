import Card from "../components/CardsProducts/card";
import Header from "../components/Header/header";
import RoutesComponents from "../components/RoutesComponents/routesComponents";
import { useEffect, useState } from "react";
import axios from "axios";

function Teclados() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resposta = await axios.get("http://localhost:8080/produtos");
        const produtosFiltrados = resposta.data.filter((product) => product.tipoProduto === "teclado");
        setData(produtosFiltrados);
      } catch (error) {
        console.error("Erro ao buscar os produtos: ", error);
      }
    };
    fetchData();
  }, []);
  
  return (
    <div>
    <Header/>
    <RoutesComponents/>
    <div className="centralizarCard">
        {data.map((product) => (
          <Card 
            key={product.id} 
            name={product.nome} 
            price={product.preco} 
            image={product.imagemUrl}
         />
        ))}
      </div>
    </div>
  );
}

export default Teclados;
