import { getCategoriesWithProducts } from "@/actions/categories";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CategorySelection } from "@/components/CategorySelection";
import { CategoryWithProducts } from "@/types/types";

export default async function CategoriesPage() {
  const categoriesWithProducts = await getCategoriesWithProducts();

  return (
    <>
      <Breadcrumb
        breadcrumbs={{
          links: [],
          last: "Categorias",
        }}
      />
      {categoriesWithProducts.length === 0 ? (
        <div className="container min-h-120 p-5">
          <p>Nenhuma categoria encontrada!</p>
        </div>
      ) : (
        <div className="bg0 m-t-23 p-b-140">
          <div className="container">
            {categoriesWithProducts.map((category: CategoryWithProducts) => (
              <div key={category.id}>
                {category.products.length !== 0 && (
                  <CategorySelection key={category.id} category={category} />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
