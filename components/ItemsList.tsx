import React from "react";
import { ProductCard } from "./Card";
import db from "@/lib/prisma";

export default async function ItemsList({ title }: { title?: string }) {
  const items = await db.product.findMany({
    where: {
      isActive: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  const categories = await db.category.findMany({
    where: {
      isActive: true,
    },
  });
  return (
    <section className="bg0 p-t-23 p-b-140">
      <div className="container">
        <div className="p-b-10">
          <h3 className="ltext-103 cl5">{title ? title : "Lançamentos"}</h3>
        </div>
        <div className="flex-w flex-sb-m p-b-52">
          <div className="flex-w flex-l-m filter-tope-group m-tb-10">
            <button
              className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1"
              data-filter="*"
            >
              Todos
            </button>
            {categories.length > 0 &&
              categories.map((c) => (
                <button
                  key={c.id}
                  className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                  data-filter={`.${c.id}`}
                >
                  {c.name}
                </button>
              ))}
          </div>
          <div className="flex-w flex-c-m m-tb-10">
            <div className="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter">
              <i className="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list" />
              <i className="icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none" />
              Filtros
            </div>
            <div className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search">
              <i className="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search" />
              <i className="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none" />
              Busca
            </div>
          </div>
          {/* Search product */}
          <div className="dis-none panel-search w-full p-t-10 p-b-15">
            <div className="bor8 dis-flex p-l-15">
              <button className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
                <i className="zmdi zmdi-search" />
              </button>
              <input
                className="mtext-107 cl2 size-114 plh2 p-r-15"
                type="text"
                name="search-product"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        {items.length > 0 ? (
          <p>Nenhum item encontrado</p>
        ) : (
          <>
            <div className="row isotope-grid">
              {items.map((i) => (
                <ProductCard
                  key={i.id}
                  id="id"
                  imageUrl={i.mainImage}
                  price={i.basePrice}
                  name={i.name}
                />
              ))}
            </div>
            <div className="flex-c-m flex-w w-full p-t-45">
              <a
                href="#"
                className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04"
              >
                Ver mais
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
