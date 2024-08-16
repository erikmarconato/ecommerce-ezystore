import "./card.css";

// Implementação do conteúdo dos cards na pasta Data - listPorductsCards.tsx

type CardProps = {
  name: string;
  price: number;
  image: string;
};

function cardsProducts({ name, price, image }: CardProps) {
  return (
    <section className="sectionCards">
      <div className="divCards">
        <h1>{name}</h1>
        <img src={image} />
        <h2>R$ {price}</h2>
      </div>
    </section>
  );
}

export default cardsProducts;
