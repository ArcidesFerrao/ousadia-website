import { getCategoryBySlug } from "@/actions/categories";
import { CategorySelected } from "@/components/CategorySelection";
import db from "@/lib/prisma";
import Link from "next/link";

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
      <div className="container">
        <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
          <Link href="/" className="stext-109 cl8 hov-cl1 trans-04">
            Home
            <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true" />
          </Link>
          <Link href="/categorias" className="stext-109 cl8 hov-cl1 trans-04">
            Categorias
            <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true" />
          </Link>

          <span className="stext-109 cl4">{categoryData.name}</span>
        </div>
      </div>

      <div className="bg0 m-t-23 p-b-140">
        <div className="container">
          {<CategorySelected category={categoryData} />}
        </div>
      </div>
    </>
  );
}
