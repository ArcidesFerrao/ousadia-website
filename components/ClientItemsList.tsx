"use client";

import React, { useState } from "react";
import { Card, ProductCard } from "./Card";
import { Category, Product } from "@/lib/generated/prisma/client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ProductModal } from "./ProductModal";

export default function ClientItemsList({
  items,
  categories,
}: {
  items: Product[];
  categories: Category[];
}) {
  const pathname = usePathname();
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLocaleLowerCase());
    const matchesCategory = selectedCategory
      ? item.categoryId === selectedCategory
      : true;

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <div className="flex-w flex-sb-m p-b-10">
        <div className="flex-w flex-l-m filter-tope-group m-tb-10">
          <button
            className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${
              selectedCategory === null ? "how-active1" : ""
            } `}
            onClick={() => setSelectedCategory(null)}
          >
            Todos
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${
                selectedCategory === c.id ? "how-active1" : ""
              }`}
              onClick={() => setSelectedCategory(c.id)}
            >
              {c.name}
            </button>
          ))}
        </div>
        <div className="flex-w flex-c-m m-tb-10">
          {/* <div className="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter">
            <i className="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list" />
            <i className="icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none" />
            Filtros
          </div> */}
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
              placeholder="Buscar item"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
      {filteredItems.length === 0 ? (
        <p className="stext-106">Nenhum item encontrado</p>
      ) : (
        <>
          <div className="row isotope-grid">
            <Card />
            {filteredItems.map((i) => (
              <div
                key={i.id}
                onClick={() => setSelectedProduct(i)}
                className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women"
              >
                <ProductCard
                  id={i.id}
                  imageUrl={i.mainImage}
                  price={i.basePrice}
                  name={i.name}
                />
              </div>
            ))}
          </div>
          {!pathname.includes("/produtos") && (
            <div className="flex-c-m flex-w w-full p-t-45">
              <Link
                href="/produtos"
                className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04"
              >
                Ver mais
              </Link>
            </div>
          )}
        </>
      )}

      {selectedProduct && <ProductModal product={selectedProduct} />}
    </>
  );
}
