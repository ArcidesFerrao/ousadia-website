import Block from "./Block";

export const Banner = () => {
  return (
    <div className="sec-banner bg0 p-t-80 p-b-50">
      <div className="container">
        <div className="row">
          <Block
            title="Shetas"
            details="Colecao Exclusiva"
            url="/produtos"
            imageUrl="/images/banner-01.jpg"
          />
          <Block
            title="Collabs"
            details="Mais Recentes"
            url="/produtos"
            imageUrl="/images/banner-02.jpg"
          />
          <Block
            title="Bones"
            details="Nova Trend"
            url="/produtos"
            imageUrl="/images/banner-03.jpg"
          />
        </div>
      </div>
    </div>
  );
};
