import React from "react";
import { ItemForm } from "../../_components/ItemForm";

export default function NewItemPage() {
  return (
    <div className="flex flex-col gap-5 p-4 bg3 items-center admin-pages-section">
      <h2>Adicionar Item</h2>
      <ItemForm />
    </div>
  );
}
