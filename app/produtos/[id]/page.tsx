import db from "@/lib/prisma";
import Link from "next/link";
import ProductSlider from "@/components/ProductSlider";
import BuyButton from "@/components/BuyButton";
import { notFound } from "next/navigation";

type Params = Promise<{ id: string }>;

export async function generateStaticParams() {
  const products = await db.product.findMany({
    where: {
      isActive: true,
    },
    select: {
      id: true,
    },
  });

  return products.map((product) => ({ id: product.id }));
}

export const revalidate = 3600; // Revalidate every 60 seconds

export default async function ProdutoPage(props: { params: Params }) {
  const { id } = await props.params;

  const item = await db.product.findUnique({
    where: {
      id: id,
    },
    include: {
      category: true,
      collection: true,
    },
  });

  if (!item) {
    notFound();
  }

  const images = [
    item.mainImage && { src: item.mainImage, dataThumb: item.mainImage },
    item.image2 && { src: item.image2, dataThumb: item.image2 },
    item.image3 && { src: item.image3, dataThumb: item.image3 },
  ].filter(Boolean) as { src: string; dataThumb: string }[];

  return (
    <>
      {/* breadcrumb */}
      <div className="container">
        <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
          <Link href="/" className="stext-109 cl8 hov-cl1 trans-04">
            Home
            <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true" />
          </Link>
          <Link href="/produtos" className="stext-109 cl8 hov-cl1 trans-04">
            Loja
            <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true" />
          </Link>
          <span className="stext-109 cl4">{item?.name}</span>
        </div>
      </div>
      {/* Product Detail */}
      <section className="sec-product-detail mt-16 bg0 p-t-65 p-b-60">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-7 p-b-30">
              <div className="p-l-25 p-r-30 p-lr-0-lg">
                <ProductSlider images={images} />
              </div>
            </div>
            <div className="col-md-6 col-lg-5 p-b-30 max-w-fill">
              <div className="p-r-50 p-t-5 p-lr-0-lg">
                <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                  {item.name}
                </h4>
                <span className="mtext-106 cl2">MZN {item.basePrice}.00 </span>
                <p className="stext-102 cl3 p-t-23">{item.description}</p>
                <BuyButton
                  productId={item.id}
                  productName={item.name}
                  basePrice={item.basePrice}
                />
              </div>
            </div>
          </div>
          <div className="bor10 m-t-50 p-t-43 p-b-40">
            {/* Tab01 */}
            <div className="tab01">
              {/* Nav tabs */}
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item p-b-10">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#description"
                    role="tab"
                  >
                    Description
                  </a>
                </li>
              </ul>
              {/* Tab panes */}
              <div className="tab-content p-t-43">
                <div
                  className="tab-pane fade show active"
                  id="description"
                  role="tabpanel"
                >
                  <div className="how-pos2 p-lr-15-md">
                    <p className="stext-102 cl6">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg6 flex-c-m flex-w  m-t-73 p-tb-15">
          <span className="stext-107 cl6 p-lr-25">SKU: JAK-01</span>
          <span className="stext-107 cl6 p-lr-25">
            Category: {item?.category.name}
          </span>
        </div>
      </section>
    </>
  );
}
