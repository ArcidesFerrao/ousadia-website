import { getCategoryBySlug } from "@/actions/categories";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CategorySelected } from "@/components/CategorySelection";
import db from "@/lib/prisma";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const categories = await db.category.findMany({
    where: { isActive: true },
    select: { slug: true },
  });

  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export const revalidate = 3600;

export default async function CategoriaPage(props: { params: Params }) {
  const { slug } = await props.params;

  if (!slug)
    return (
      <p className="stext-106 text-center min-h-2/3">
        Categoria não encontrado {slug}
      </p>
    );

  const categoryData = await getCategoryBySlug(slug);

  if (!categoryData) return <p>Items não encontrados</p>;

  return (
    <>
      <Breadcrumb
        breadcrumbs={{
          links: [{ name: "Categorias", href: "/categorias" }],
          last: categoryData.name,
        }}
      />
      <div className="bg0 m-t-23 p-b-140">
        <div className="container">
          {<CategorySelected category={categoryData} />}
        </div>
      </div>
    </>
  );
}
