import "./card.css";

// Implementação do conteúdo dos cards na pasta Data - listPorductsCards.tsx

type CardProps = {
  id: number;
  name: string;
  price: number;
  image: string;
  acesso: boolean;
};

function cardsProducts({ id, name, price, image, acesso }: CardProps) {
  
  return (
    <section className="sectionCards">
      <div className="divCards">
        { acesso ? 
          ( <>
              ID: {id}
              <h1>{name}</h1>
              <img src={image} />
              <h2>R$ {price}</h2>
            </>)
          :
          ( <>
            <h1>{name}</h1>
            <img src={image} />
            <h2>R$ {price}</h2>
          </>)

        }
      </div>
    </section>
  );
}

export default cardsProducts;