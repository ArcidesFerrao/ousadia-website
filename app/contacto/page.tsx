import Image from "next/image";

export default function ContactoPage() {
  return (
    <>
      <section
        className="bg-img1 txt-center p-lr-15 p-tb-124"
        style={{ backgroundImage: 'url("images/bg-01.jpg")' }}
      >
        <h2 className="ltext-105 cl0 txt-center">Contacto</h2>
      </section>
      <section className="bg0 p-t-104 p-b-116">
        <div className="container">
          <div className="flex">
            <div className="size-210 bor10 p-lr-70 p-t-55 p-b-70 p-lr-15-lg w-full-md">
              <form>
                <div className="bor8 m-b-20 how-pos4-parent">
                  <input
                    className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30"
                    type="text"
                    name="email"
                    placeholder="Endereço Electronico"
                  />
                  <Image
                    className="how-pos4 pointer-none"
                    src="/images/icons/icon-email.png"
                    alt="ICON"
                    width={18}
                    height={18}
                  />
                </div>
                <div className="bor8 m-b-20 how-pos4-parent">
                  <input
                    className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30"
                    type="text"
                    name="name"
                    placeholder="Nome Completo"
                  />
                </div>
                <div className="bor8 m-b-20 how-pos4-parent">
                  <input
                    className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30"
                    type="text"
                    name="subject"
                    placeholder="Assunto"
                  />
                </div>
                <div className="bor8 m-b-30">
                  <textarea
                    className="stext-111 cl2 plh3 size-120 p-lr-28 p-tb-25"
                    name="msg"
                    placeholder="Como podemos ajudar?"
                    defaultValue={""}
                  />
                </div>
                <button
                  type="submit"
                  className="flex-c-m stext-101 cl0 size-121 bg3 bor1 hov-btn3 p-lr-15 trans-04 pointer"
                >
                  Enviar
                </button>
              </form>
            </div>
            <div className=" bor10 flex-w flex-col-m gap-5 p-lr-93 p-tb-30 p-lr-15-lg w-full-md">
              <div className="flex-w w-full ">
                <div className=" p-t-2">
                  <span className="mtext-110 cl2">Endereço</span>
                  <p className="stext-115 cl6  p-t-18">
                    Bairro do Infulene, Av. 04 de Outubro, Maputo, Moçambique
                  </p>
                </div>
              </div>
              <div className="flex-w gap-4 w-full ">
                <span className="fs-18 cl5 txt-center ">
                  <span className="lnr lnr-phone-handset" />
                </span>
                <div className=" p-t-2">
                  <span className="mtext-110 cl2">Contacte-nos</span>
                  <p className="stext-115 cl1  p-t-18">+258 845398661</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
