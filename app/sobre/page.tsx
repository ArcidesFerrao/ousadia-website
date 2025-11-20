import Image from "next/image";

export default function SobrePage() {
  return (
    <>
      {/* Title page */}
      <section
        className="bg-img1 txt-center p-lr-15 p-tb-124"
        style={{ backgroundImage: 'url("/images/bg-01.jpg")' }}
      >
        <h2 className="ltext-105 cl0 txt-center">Sobre Ousadia</h2>
      </section>
      {/* Content page */}
      <section className="bg0 p-t-75 p-b-120">
        <div className="container">
          <div className="row p-b-148">
            <div className="col-md-7 col-lg-8">
              <div className="p-t-7 p-r-85 p-r-15-lg p-r-0-md">
                <h3 className="mtext-111 cl2 p-b-16">Quem somos</h3>
                <p className="stext-113 cl6 p-b-26">
                  Ousadia® é uma marca moçambicana de vestuário criada em 2021
                  que produz camisetas pretas com frases temáticas cômicas, de
                  motivação, fé e positividade.
                </p>
                <p className="stext-113 cl6 p-b-26">
                  Fundada como “Gotti”, passou a se chamar “Ousadia” anos
                  depois, inspirada no antigo slogan da marca que era ‘seja
                  ousado’ e também no espírito dos moçambicanos que como
                  menciona o hino nacional: “pátria bela dos que ousaram
                  lutar…”.
                </p>
                <p className="stext-113 cl6 p-b-26">
                  A marca orgulha-se pelo trabalho feito em duas coleções
                  lançadas, e uma Collab no período 2021 - 2023. Actualmente
                  possui um leque de várias camisetas cujos lançamentos são
                  feitos mensalmente desde agosto de 2024.
                </p>
                <p className="stext-113 cl6 p-b-26">
                  Com abertura para colaborar com artistas, individualidades e
                  jovens criativos moçambicanos, a Ousadia compromete-se a criar
                  uma cultura de vestuário casual que não apenas se encaixa na
                  moda, mas que também serve de uma forma de comunicação social.
                </p>
              </div>
            </div>
            <div className="col-11 col-md-5 col-lg-4 m-lr-auto">
              <div className="how-bor1 ">
                <div className="hov-img0">
                  <Image
                    src="/images/about-01.jpeg"
                    alt="IMG"
                    width={500}
                    height={600}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="order-md-2 col-md-7 col-lg-8 p-b-30">
              <div className="p-t-7 p-l-85 p-l-15-lg p-l-0-md">
                <h3 className="mtext-111 cl2 p-b-16">Nossa produção</h3>
                <p className="stext-113 cl6 p-b-26">
                  Nossas shetas e bonés são confeccionadas com material
                  proveniente da Tailândia, e produzidos e estampados em
                  Moçambique por nossas máquinas.Valorizamos a produção local,
                  com mão-de-obra justa e qualificada.
                </p>
              </div>
            </div>
            <div className="order-md-1 col-11 col-md-5 col-lg-4 m-lr-auto p-b-30">
              <div className="how-bor2">
                <div className="hov-img0">
                  <Image
                    src="/images/about-02.jpeg"
                    alt="IMG"
                    width={500}
                    height={600}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
