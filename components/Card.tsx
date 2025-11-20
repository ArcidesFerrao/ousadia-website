import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

export const Card = () => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
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
            <span className="stext-105 cl3">
              MZN {product.basePrice.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
