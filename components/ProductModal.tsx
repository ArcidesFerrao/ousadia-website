import { Product } from "@/lib/generated/prisma/client";
import Image from "next/image";
import ProductSlider from "./ProductSlider";
// import InitSlick3 from "./InitSlick3";

// interface ProductModalProps {
//   product: Product | null;
//   onClose: () => void;
// }

export const ProductModal = ({
  product,
}: //  onClose
{
  product: Product;
}) => {
  if (!product) return <p>Item nao encontrado</p>;

  const images = [
    product.mainImage && {
      src: product.mainImage,
      dataThumb: product.mainImage,
    },
    product.image2 && { src: product.image2, dataThumb: product.image2 },
    product.image3 && { src: product.image3, dataThumb: product.image3 },
  ].filter(Boolean) as { src: string; dataThumb: string }[];

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
          <div className="flex flex-wrap">
            <div className="col-md-6 col-lg-7 p-5 justify-self-center">
              <ProductSlider images={images} />
            </div>
            <div className="col-md-6 col-lg-5 p-b-30">
              <div className="p-r-50 p-t-5 p-lr-0-lg ">
                <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                  {product?.name}
                </h4>
                <span className="mtext-106 cl2">
                  MZN {product?.basePrice.toFixed(2)}
                </span>
                <p className="stext-102 cl3 p-t-23">{product?.description}</p>
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
                    <button className="flex-c-m stext-101 cl0 w-full p-2 bg1 bor1 hov-btn1 p-lr-15 trans-04 ">
                      {/* <button className="flex-c-m stext-101 cl0 w-full p-2 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail"> */}
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <InitSlick3 /> */}
    </div>
  );
};
