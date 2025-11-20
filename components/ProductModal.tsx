"use client";

import Image from "next/image";
import ProductSlider from "./ProductSlider";
import BuyButton from "./BuyButton";
import { useState } from "react";
import { Product } from "@prisma/client";

export const ProductModal = ({ product }: { product: Product }) => {
  if (!product) return <p>Item não encontrado</p>;

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
                <BuyButton
                  productId={product.id}
                  basePrice={product.basePrice}
                  productName={product.name}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProductModalSimple = ({
  product,
  trigger,
}: {
  product: Product;
  trigger: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const images = [product.mainImage, product.image2, product.image3]
    .filter((img): img is string => !!img)
    .map((src) => ({ src, dataThumb: src }));
  return (
    <>
      <div
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(true);
        }}
      >
        {trigger}
      </div>
      {isOpen && (
        <div className="wrap-modal1 js-modal1 p-t-60 p-b-20 show-modal1">
          <div className="overlay-modal1 js-hide-modal1" />
          <div className="container">
            <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
              <button
                onClick={() => setIsOpen(false)}
                className="how-pos3 hov3 trans-04 js-hide-modal1"
              >
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
                    <p className="stext-102 cl3 p-t-23">
                      {product?.description}
                    </p>
                    {/*  */}
                    <BuyButton
                      productId={product.id}
                      basePrice={product.basePrice}
                      productName={product.name}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
