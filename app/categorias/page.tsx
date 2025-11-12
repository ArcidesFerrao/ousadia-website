import { getCategoriesWithProducts } from "@/actions/categories";
import CategorySelection from "@/components/CategorySelection";
import { CategoryWithProducts } from "@/types/types";
import Link from "next/link";

export default async function CategoriesPage() {
  const categoriesWithProducts = await getCategoriesWithProducts();

  return (
    <>
      <div className="container">
        <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
          <Link href="/" className="stext-109 cl8 hov-cl1 trans-04">
            Home
            <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true" />
          </Link>

          <span className="stext-109 cl4">Categorias</span>
        </div>
      </div>

      <div className="bg0 m-t-23 p-b-140">
        <div className="container">
          {categoriesWithProducts.map((category: CategoryWithProducts) => (
            <CategorySelection key={category.id} category={category} />
          ))}
        </div>
      </div>
    </>
  );
}
