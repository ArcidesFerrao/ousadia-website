// export const dynamic = "force-dynamic";
// import InitSlick3 from "@/components/InitSlick3";
// import Slick3Init from "@/components/Slick3Init";
import db from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

type Params = Promise<{ id: string }>;

export default async function ProdutoPage(props: { params: Params }) {
  const { id } = await props.params;

  if (!id)
    return (
      <p className="stext-106 text-center min-h-2/3">
        Item nao encontrado {id}
      </p>
    );

  const item = await db.product.findUnique({
    where: {
      id: id,
    },
    include: {
      category: true,
      collection: true,
    },
  });

  if (!item) return <p>Item nao encontrado</p>;

  console.log(item.mainImage);
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
                <div className="wrap-slick3 flex-sb flex-w">
                  <div className="wrap-slick3-dots" />
                  <div className="wrap-slick3-arrows flex-sb-m flex-w" />
                  <div className="slick3 gallery-lb">
                    {item.mainImage && (
                      <div className="item-slick3" data-thumb={item.mainImage}>
                        <div className="wrap-pic-w pos-relative">
                          <Image
                            src={item.mainImage}
                            alt="IMG-PRODUCT"
                            width={500}
                            height={600}
                          />
                          <a
                            className="flex-c-m size-108 items-center how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                            href={item.mainImage}
                          >
                            <i className="fa fa-expand" />
                          </a>
                        </div>
                      </div>
                    )}
                    {item.image2 && (
                      <div className="item-slick3" data-thumb={item.image2}>
                        <div className="wrap-pic-w pos-relative">
                          <Image
                            src={item.image2}
                            alt="IMG-PRODUCT"
                            width={500}
                            height={600}
                          />
                          <a
                            className="flex-c-m size-108 how-pos1 items-center  bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                            href={item.image2}
                          >
                            <i className="fa fa-expand" />
                          </a>
                        </div>
                      </div>
                    )}
                    {item.image3 && (
                      <div className="item-slick3" data-thumb={item.image3}>
                        <div className="wrap-pic-w pos-relative">
                          <Image
                            src={item.image3}
                            alt="IMG-PRODUCT"
                            width={500}
                            height={600}
                          />
                          <a
                            className="flex-c-m size-108 items-center  how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                            href={item.image3}
                          >
                            <i className="fa fa-expand" />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 p-b-30">
              <div className="p-r-50 p-t-5 p-lr-0-lg">
                <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                  {item.name}
                </h4>
                <span className="mtext-106 cl2">MZN {item.basePrice}.00 </span>
                <p className="stext-102 cl3 p-t-23">{item.description}</p>
                <div className="p-t-33 flex flex-col gap-2 w-full">
                  <div className="flex justify-between w-full p-b-10">
                    <div className=" flex-c-m respon6">Size</div>
                    <div className="respon6-next">
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

                  <div className="flex justify-between w-full  p-b-10">
                    <div className=" flex-w flex-m respon6-next w-full">
                      <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                        <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                          <i className="fs-16 zmdi zmdi-minus" />
                        </div>
                        <input
                          className="mtext-104 cl3 txt-center num-product"
                          type="number"
                          name="num-product"
                          defaultValue={1}
                        />
                        <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                          <i className="fs-16 zmdi zmdi-plus" />
                        </div>
                      </div>
                      <button className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 ">
                        Comprar
                      </button>
                    </div>
                  </div>
                </div>
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
                <li className="nav-item p-b-10">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#information"
                    role="tab"
                  >
                    Additional information
                  </a>
                </li>
                <li className="nav-item p-b-10">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#reviews"
                    role="tab"
                  >
                    Reviews (1)
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
                    <p className="stext-102 cl6">
                      Aenean sit amet gravida nisi. Nam fermentum est felis,
                      quis feugiat nunc fringilla sit amet. Ut in blandit ipsum.
                      Quisque luctus dui at ante aliquet, in hendrerit lectus
                      interdum. Morbi elementum sapien rhoncus pretium maximus.
                      Nulla lectus enim, cursus et elementum sed, sodales vitae
                      eros. Ut ex quam, porta consequat interdum in, faucibus eu
                      velit. Quisque rhoncus ex ac libero varius molestie.
                      Aenean tempor sit amet orci nec iaculis. Cras sit amet
                      nulla libero. Curabitur dignissim, nunc nec laoreet
                      consequat, purus nunc porta lacus, vel efficitur tellus
                      augue in ipsum. Cras in arcu sed metus rutrum iaculis.
                      Nulla non tempor erat. Duis in egestas nunc.
                    </p>
                  </div>
                </div>
                {/* - */}
                <div className="tab-pane fade" id="information" role="tabpanel">
                  <div className="row">
                    <div className="col-sm-10 col-md-8 col-lg-6 m-lr-auto">
                      <ul className="p-lr-28 p-lr-15-sm">
                        <li className="flex-w flex-t p-b-7 flex justify-between">
                          <span className="stext-102 cl3 ">Weight</span>
                          <span className="stext-102 cl6">0.79 kg</span>
                        </li>
                        <li className="flex-w flex-t p-b-7  flex justify-between">
                          <span className="stext-102 cl3">Dimensions</span>
                          <span className="stext-102 cl6">
                            110 x 33 x 100 cm
                          </span>
                        </li>
                        <li className="flex-w flex-t p-b-7  flex justify-between">
                          <span className="stext-102 cl3">Materials</span>
                          <span className="stext-102 cl6">60% cotton</span>
                        </li>

                        <li className="flex-w flex-t p-b-7  flex justify-between">
                          <span className="stext-102 cl3 ">Size</span>
                          <span className="stext-102 cl6 ">XL, L, M, S</span>
                        </li>
                      </ul>
                    </div>
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
      {/* <Slick3Init item={item} /> */}
      {/* <InitSlick3 item={item} /> */}
    </>
  );
}
