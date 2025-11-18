"use client";

import Link from "next/link";
import { ProductCard } from "./Card";
import { CategoryWithProducts, CollectionWithProducts } from "@/types/types";
import { useState } from "react";
import { ProductModal } from "./ProductModal";
import { Product } from "@/lib/generated/prisma/client";

export function CategorySelection({
  category,
}: {
  category: CategoryWithProducts;
}) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  return (
    <>
      <div className="p-b-10" id={category.id}>
        <Link href={`/categorias/${category.slug}`}>
          <h3 className="ltext-103 cl5">{category.name}</h3>
        </Link>
      </div>
      <div className="row isotope-grid">
        {category.products.map((product) => (
          <div
            key={product.id}
            onClick={() => setSelectedProduct(product)}
            className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item "
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      {selectedProduct && <ProductModal product={selectedProduct} />}
    </>
  );
}

export function CategorySelected({
  category,
}: {
  category: CategoryWithProducts;
}) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  return (
    <>
      <div className="p-b-10" id={category.id}>
        <h3 className="ltext-103 cl5">{category.name}</h3>
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item ">
        {category.products.length !== 0 ? (
          category.products.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="row isotope-grid"
            >
              <ProductCard key={product.id} product={product} />
            </div>
          ))
        ) : (
          <p className="text-nowrap">
            Nenhum produto encontrado nesta categoria.
          </p>
        )}
      </div>
      {selectedProduct && <ProductModal product={selectedProduct} />}
    </>
  );
}

export function CollectionSelected({
  collection,
}: {
  collection: CollectionWithProducts;
}) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  return (
    <>
      <div className="p-b-10" id={collection.id}>
        <h3 className="ltext-103 cl5">{collection.name}</h3>
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item ">
        {collection.products.length !== 0 ? (
          collection.products.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="row isotope-grid"
            >
              <ProductCard key={product.id} product={product} />
            </div>
          ))
        ) : (
          <p className="text-nowrap">
            Nenhum produto encontrado nesta colecao.
          </p>
        )}
      </div>
      {selectedProduct && <ProductModal product={selectedProduct} />}
    </>
  );
}

export function CollectionSelection({
  collection,
}: {
  collection: CollectionWithProducts;
}) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  return (
    <>
      <div className="p-b-10" id={collection.id}>
        <Link href={`/categorias/${collection.slug}`}>
          <h3 className="ltext-103 cl5">{collection.name}</h3>
        </Link>
      </div>
      <div className="row isotope-grid">
        {collection.products.map((product) => (
          <div
            key={product.id}
            onClick={() => setSelectedProduct(product)}
            className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item "
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      {selectedProduct && <ProductModal product={selectedProduct} />}
    </>
  );
}
