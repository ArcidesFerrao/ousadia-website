import Image from "next/image";
import Link from "next/link";
import { ProductModalSimple } from "./ProductModal";
import { Product } from "@/lib/generated/prisma/client";

export const Card = () => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
      {/* Block2 */}
      <div className="block2">
        <div className="block2-pic hov-img0">
          <Image
            src="/images/product-01.jpg"
            alt="IMG-PRODUCT"
            width={400}
            height={500}
          />
          <a
            href="#"
            className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
          >
            Comprar
          </a>
        </div>
        <div className="block2-txt flex-w flex-t p-t-14">
          <div className="block2-txt-child1 flex-col-l ">
            <Link
              href="/produtos"
              className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
            >
              Esprit Ruffle Shirt
            </Link>
            <span className="stext-105 cl3">MZN 1000.00</span>
          </div>
          {/* <div className="block2-txt-child2 flex-r p-t-3">
            <a
              href="#"
              className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
            >
              <Image
                className="icon-heart1 dis-block trans-04"
                src="/images/icons/icon-heart-01.png"
                alt="ICON"
                width={400}
                height={500}
              />
              <Image
                className="icon-heart2 dis-block trans-04 ab-t-l"
                src="/images/icons/icon-heart-02.png"
                alt="ICON"
                width={400}
                height={500}
              />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <>
      <div className="block2">
        <div className="block2-pic hov-img0">
          <Image
            src={product.mainImage}
            alt="IMG-PRODUCT"
            width={400}
            height={500}
          />
          <a
            href="#"
            className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
          >
            Comprar
          </a>
        </div>
        <div className="block2-txt flex-w flex-t p-t-14">
          <div className="block2-txt-child1 flex-col-l ">
            <a
              href={`/produtos/${product.id}`}
              className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
            >
              {product.name}
            </a>
            <span className="stext-105 cl3">MZN {product.basePrice}.00</span>
          </div>
          {/* <div className="block2-txt-child2 flex-r p-t-3">
            <a
            href="#"
            className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
            >
            <Image
            className="icon-heart1 dis-block trans-04"
            src="/images/icons/icon-heart-01.png"
            alt="ICON"
            width={400}
            height={500}
            />
            <Image
                className="icon-heart2 dis-block trans-04 ab-t-l"
                src="/images/icons/icon-heart-02.png"
                alt="ICON"
                width={400}
                height={500}
              />
              </a>
              </div> */}
        </div>
      </div>
      <ProductModalSimple
        product={product}
        trigger={
          <a href="#" className="...">
            Quick View
          </a>
        }
      />
    </>
  );
};
