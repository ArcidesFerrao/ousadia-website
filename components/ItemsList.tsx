import db from "@/lib/prisma";
import ClientItemsList from "./ClientItemsList";

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
    <section className="bg0 p-t-23 p-b-40 min-h-2/3">
      <div className="container">
        {/* <div className="p-b-10"> */}
        <h3 className="ltext-103 cl5">
          {title !== "" ? title : "Lançamentos"}
        </h3>
        {/* </div> */}
        <ClientItemsList categories={categories} items={items} />
      </div>
    </section>
  );
}
