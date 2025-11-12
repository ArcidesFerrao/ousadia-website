import Link from "next/link";
import { ProductCard } from "./Card";
import { CategoryWithProducts } from "@/types/types";

export function CategorySelection({
  category,
}: {
  category: CategoryWithProducts;
}) {
  return (
    <>
      <div className="p-b-10" id={category.id}>
        <Link href={`/categorias/${category.slug}`}>
          <h3 className="ltext-103 cl5">{category.name}</h3>
        </Link>
      </div>
      <div className="row isotope-grid">
        <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item ">
          {category.products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              imageUrl={product.mainImage}
              name={product.name}
              price={product.basePrice}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export function CategorySelected({
  category,
}: {
  category: CategoryWithProducts;
}) {
  console.log("CategorySelected category:", category.products.length);
  return (
    <>
      <div className="p-b-10" id={category.id}>
        <h3 className="ltext-103 cl5">{category.name}</h3>
      </div>
      <div className="row isotope-grid">
        <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item ">
          {category.products.length !== 0 ? (
            category.products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                imageUrl={product.mainImage}
                name={product.name}
                price={product.basePrice}
              />
            ))
          ) : (
            <p>Nenhum produto encontrado nesta categoria.</p>
          )}
        </div>
      </div>
    </>
  );
}
