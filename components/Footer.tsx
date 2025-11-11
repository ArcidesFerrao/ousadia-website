export const Footer = () => {
  return (
    <>
      <footer className="bg3 p-t-75 p-b-32">
        <div className="container">
          <div className="row max-h-fit">
            <div className="col-sm-6 col-lg-3 p-b-50 max-h-fit">
              <h4 className="stext-301 cl0 p-b-10">Categorias</h4>
              <ul>
                <li className="p-b-10">
                  <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                    Shetas
                  </a>
                </li>
                <li className="p-b-10">
                  <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                    Bones
                  </a>
                </li>
                <li className="p-b-10">
                  <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                    Collabs
                  </a>
                </li>
                {/* <li className="p-b-10">
                  <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                    Watches
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="col-sm-6 col-lg-3 p-b-50  max-h-fit">
              <h4 className="stext-301 cl0 p-b-10">Help</h4>
              <ul>
                <li className="p-b-10">
                  <a
                    href="/contacto"
                    className="stext-107 cl7 hov-cl1 trans-04"
                  >
                    Devoluçao
                  </a>
                </li>

                <li className="p-b-10">
                  <a href="/termos" className="stext-107 cl7 hov-cl1 trans-04">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-lg-3 p-b-50  ">
              <h4 className="stext-301 cl0 p-b-10">Contacte-nos</h4>
              <div>
                <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                  <i className="fa fa-whatsapp" />
                </a>
                <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                  <i className="fa fa-facebook" />
                </a>
                <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                  <i className="fa fa-instagram" />
                </a>
              </div>
            </div>
          </div>
          <div className="p-t-40">
            <p className="stext-107 cl6 txt-center">
              Copyright © All rights reserved | Made by{" "}
              <a
                href="https://portfolio-arcidesferraos-projects.vercel.app/"
                target="_blank"
              >
                Arcides Ferrao
              </a>{" "}
              &amp; distributed theme by{" "}
              <a href="https://themewagon.com" target="_blank">
                ThemeWagon
              </a>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            </p>
          </div>
        </div>
      </footer>
      {/* Back to top */}
      <div className="btn-back-to-top" id="myBtn">
        <span className="symbol-btn-back-to-top">
          <i className="zmdi zmdi-chevron-up" />
        </span>
      </div>
    </>
  );
};
