import { poppins } from "@/lib/font";
import Link from "next/link";
import React from "react";

export default function ItemsPage() {
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
              <th>Tamanho</th>
              <th>Stock</th>
              <th>Preco</th>
              <th>Desconto</th>
            </tr>
          </thead>
          <tbody>
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
