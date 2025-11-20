import { getCollectionBySlug } from "@/actions/categories";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CollectionSelected } from "@/components/CategorySelection";
import db from "@/lib/prisma";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const collections = await db.collection.findMany({
    where: { isActive: true },
    select: { slug: true },
  });

  return collections.map((collection) => ({
    slug: collection.slug,
  }));
}

export const revalidate = 3600;

export default async function ColecaoPage(props: { params: Params }) {
  const { slug } = await props.params;

  if (!slug)
    return (
      <p className="stext-106 text-center min-h-2/3">
        Coleção não encontrado {slug}
      </p>
    );

  const collectionData = await getCollectionBySlug(slug);

  if (!collectionData) return <p>Items não encontrados</p>;

  return (
    <>
      <Breadcrumb
        breadcrumbs={{
          links: [{ name: "Categorias", href: "/categorias" }],
          last: collectionData.name,
        }}
      />
      <div className="bg0 m-t-23 p-b-140">
        <div className="container">
          {<CollectionSelected collection={collectionData} />}
        </div>
      </div>
    </>
  );
}
