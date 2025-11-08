import React from "react";
import { CategoryForm } from "../../_components/CategoryForm";

export default function NovaCategoriaPage() {
  return (
    <div className="flex flex-col gap-5 p-4 bg3  admin-pages-section">
      <h2>Nova Categoria</h2>
      <CategoryForm />
    </div>
  );
}
