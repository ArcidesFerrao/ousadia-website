export const Footer = () => {
  return (
    <>
      <footer className="bg3 p-t-75 p-b-32">
        <div className="container">
          <div className="row max-h-fit">
            <div className="col-sm-6 col-lg-3 p-b-50 max-h-fit">
              <h4 className="stext-301 cl0 p-b-30">Categorias</h4>
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
              <h4 className="stext-301 cl0 p-b-30">Help</h4>
              <ul>
                <li className="p-b-10">
                  <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                    Devoluçao
                  </a>
                </li>

                <li className="p-b-10">
                  <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-lg-3 p-b-50  ">
              <h4 className="stext-301 cl0 p-b-30">Contacte-nos</h4>
              <div className="p-t-27">
                <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                  <i className="fa fa-facebook" />
                </a>
                <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                  <i className="fa fa-instagram" />
                </a>
                <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                  <i className="fa fa-pinterest-p" />
                </a>
              </div>
            </div>
            {/* <div className="col-sm-6 col-lg-3 p-b-50 h-fit">
              <h4 className="stext-301 cl0 p-b-30">Newsletter</h4>
              <form>
                <div className="wrap-input1 w-full p-b-4">
                  <input
                    className="input1 bg-none plh1 stext-107 cl7"
                    type="text"
                    name="email"
                    placeholder="email@example.com"
                  />
                  <div className="focus-input1 trans-04" />
                </div>
                <div className="p-t-18">
                  <button className="flex-c-m stext-101 cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04">
                    Subscribe
                  </button>
                </div>
              </form>
            </div> */}
          </div>
          <div className="p-t-40">
            <p className="stext-107 cl6 txt-center">
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              Copyright © All rights reserved | Made with{" "}
              <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
              <a href="https://colorlib.com" target="_blank">
                Colorlib
              </a>{" "}
              &amp; distributed by{" "}
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
