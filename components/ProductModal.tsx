import Image from "next/image";

export const ProductModal = () => {
  return (
    <div className="wrap-modal1 js-modal1 p-t-60 p-b-20">
      <div className="overlay-modal1 js-hide-modal1" />
      <div className="container">
        <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
          <button className="how-pos3 hov3 trans-04 js-hide-modal1">
            <Image
              src="/images/icons/icon-close.png"
              alt="CLOSE"
              width={24}
              height={24}
            />
          </button>
          <div className="row">
            <div className="col-md-6 col-lg-7 p-b-30">
              <div className="p-l-25 p-r-30 p-lr-0-lg">
                <div className="wrap-slick3 flex-sb flex-w">
                  <div className="wrap-slick3-dots" />
                  <div className="wrap-slick3-arrows flex-sb-m flex-w" />
                  <div className="slick3 gallery-lb">
                    <div
                      className="item-slick3"
                      data-thumb="/images/product-detail-01.jpg"
                    >
                      <div className="wrap-pic-w pos-relative">
                        <Image
                          src="/images/product-detail-01.jpg"
                          alt="IMG-PRODUCT"
                          width={400}
                          height={500}
                        />
                        <a
                          className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                          href="/images/product-detail-01.jpg"
                        >
                          <i className="fa fa-expand" />
                        </a>
                      </div>
                    </div>
                    <div
                      className="item-slick3"
                      data-thumb="/images/product-detail-02.jpg"
                    >
                      <div className="wrap-pic-w pos-relative">
                        <Image
                          src="/images/product-detail-02.jpg"
                          alt="IMG-PRODUCT"
                          width={400}
                          height={500}
                        />
                        <a
                          className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                          href="/images/product-detail-02.jpg"
                        >
                          <i className="fa fa-expand" />
                        </a>
                      </div>
                    </div>
                    <div
                      className="item-slick3"
                      data-thumb="images/product-detail-03.jpg"
                    >
                      <div className="wrap-pic-w pos-relative">
                        <Image
                          src="/images/product-detail-03.jpg"
                          alt="IMG-PRODUCT"
                          width={400}
                          height={500}
                        />
                        <a
                          className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                          href="images/product-detail-03.jpg"
                        >
                          <i className="fa fa-expand" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 p-b-30">
              <div className="p-r-50 p-t-5 p-lr-0-lg ">
                <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                  Lightweight Jacket
                </h4>
                <span className="mtext-106 cl2">$58.79</span>
                <p className="stext-102 cl3 p-t-23">
                  Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus
                  ligula. Mauris consequat ornare feugiat.
                </p>
                {/*  */}
                <div className=" flex flex-col justify-between gap-5 p-t-33">
                  <div className="flex justify-between p-b-10">
                    <div className=" flex-c-m respon6">Size</div>
                    <div className=" respon6-next">
                      <div className="rs1-select2 bor8 bg0">
                        <select className="js-select2" name="time">
                          <option>Choose an option</option>
                          <option>Size S</option>
                          <option>Size M</option>
                          <option>Size L</option>
                          <option>Size XL</option>
                        </select>
                        <div className="dropDownSelect2" />
                      </div>
                    </div>
                  </div>
                  {/* <div className="flex justify-between p-b-10">
                      <div className=" flex-c-m respon6">Color</div>
                      <div className=" respon6-next">
                        <div className="rs1-select2 bor8 bg0">
                          <select className="js-select2" name="time">
                            <option>Choose an option</option>
                            <option>Red</option>
                            <option>Blue</option>
                            <option>White</option>
                            <option>Grey</option>
                          </select>
                          <div className="dropDownSelect2" />
                        </div>
                      </div>
                    </div> */}
                  <div className="flex-w flex-r-m p-b-10">
                    <button className="flex-c-m stext-101 cl0 w-full p-2 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
