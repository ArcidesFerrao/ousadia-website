import React from "react";
import { ItemForm } from "../../_components/ItemForm";

export default function NewItem() {
  return (
    <div className="flex flex-col gap-5 p-4 bg3  admin-pages-section">
      <h2>Adicionar Item</h2>
      <ItemForm />
    </div>
  );
}
