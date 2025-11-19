import { getItems } from "@/actions/items";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Product } from "@/lib/generated/prisma/client";
import Link from "next/link";
export default async function ItemsPage() {
  const items = await getItems();

  if (items.length === 0) {
    return (
      <>
        <Breadcrumb
          breadcrumbs={{
            links: [{ name: "admin", href: "/admin" }],
            last: "items",
          }}
        />
        <p>Nenhum item encontrado</p>
      </>
    );
  }
  return (
    <>
      <Breadcrumb
        breadcrumbs={{
          links: [{ name: "admin", href: "/admin" }],
          last: "items",
        }}
      />
      <div className="flex justify-between">
        <h3>Lista de Items</h3>
        <Link href="/admin/items/new" className="px-4 py-2">
          Adicionar
        </Link>
      </div>
      <div className="w-full">
        <table className="w-full">
          <thead>
            <tr>
              <th>Item</th>
              <th>Cor</th>
              <th>Preco</th>
              <th>Desconto</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item: Product) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.color}</td>
                <td>{item.basePrice}</td>
                <td>{item.discount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
