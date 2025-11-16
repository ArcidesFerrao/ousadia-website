import { getItems } from "@/actions/items";
import { poppins } from "@/lib/font";
import Link from "next/link";
import React from "react";

export default async function ItemsPage() {
  const items = await getItems();

  if (items.length === 0) {
    return (
      <div
        className={`${poppins.className} flex flex-col items-center justify-center gap-5 w-full p-4 bg3 admin-pages-section`}
      >
        {" "}
        Nenhum item encontrado
      </div>
    );
  }
  return (
    <div
      className={`${poppins.className} flex flex-col gap-5 w-full p-4 bg3 admin-pages-section`}
    >
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
              <th>Stock</th>
              <th>Preco</th>
              <th>Desconto</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
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
    </div>
  );
}
