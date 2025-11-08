"use client";

import { addItem } from "@/actions/items";
import { Category } from "@/lib/generated/prisma/client";
import { itemSchema } from "@/lib/schema";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useActionState, useEffect, useState } from "react";

export const ItemForm = () => {
  const [state, action, pending] = useActionState(addItem, undefined);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const [form, fields] = useForm({
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: itemSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  useEffect(() => {
    if (state?.status === "success") {
      console.log(state.message);
    }

    const getCategories = async () => {
      try {
        const res = await fetch("/api/categories");
        if (!res.ok) throw new Error("Error getting categories");
        const categoriesData = await res.json();
        setCategories(categoriesData);
      } catch (error) {
        console.error(error);
      }
    };

    getCategories();
  }, [state]);

  const handleCategryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(event.target.value.toString());
    console.log(selectedCategory);
  };

  return (
    <form
      id={form.id}
      onSubmit={form.onSubmit}
      action={action}
      className="flex flex-col gap-4 p-2"
    >
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <div className="flex border items-center gap-2 p-2 rounded">
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" id="name" />
          </div>
          {fields.name.allErrors && <p>{fields.name.errors}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex border items-center gap-2 p-2 rounded">
            <label htmlFor="price">Preco</label>
            <input type="number" name="price" id="price" />
          </div>
          {fields.price.allErrors && <p>{fields.price.errors}</p>}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex border items-center gap-2 p-2 justify-between rounded">
          <label htmlFor="color">Cor</label>
          <input type="text" name="color" id="color" />
        </div>
        {fields.color.allErrors && <p>{fields.color.errors}</p>}
      </div>
      <div className="flex flex-col gap-5">
        <fieldset className="radio-category border p-4  flex-w gap-5  rounded">
          <legend className="max-w-fit border p-2 text-sm  rounded">
            Categoria
          </legend>
          {categories.length > 0 &&
            categories.map((c) => (
              <label key={c.id} id={c.id} className="flex radio-label h-fit">
                <input
                  type="radio"
                  name="categoryId"
                  id="category"
                  value={c.id}
                  onChange={handleCategryChange}
                />
                <span className="radio-option">{c.name}</span>
              </label>
            ))}
        </fieldset>
        {fields.categoryId.allErrors && <p>{fields.categoryId.errors}</p>}
        <fieldset className="border p-4 flex flex-col gap-2  rounded">
          <legend className="max-w-fit border p-2 text-sm  rounded">
            Tamanhos
          </legend>
          <div className="flex gap-4 border p-2 rounded justify-between">
            <label htmlFor="sizeXS">XS</label>
            <input
              className="max-w-20 bg-gray-100 text-gray-700 px-2 rounded-sm"
              type="number"
              name="sizeXS"
              id="sizeXS"
              min={0}
            />
          </div>
          <div className="flex gap-4 border p-2 rounded justify-between">
            <label htmlFor="sizeS">S</label>

            <input
              className="max-w-20 bg-gray-100 text-gray-700 px-2 rounded-sm"
              type="number"
              name="sizeS"
              id="sizeS"
              min={0}
            />
          </div>
          <div className="flex gap-4 border p-2 rounded justify-between">
            <label htmlFor="sizeM">M</label>
            <input
              className="max-w-20 bg-gray-100 text-gray-700 px-2 rounded-sm"
              type="number"
              name="sizeM"
              id="sizeM"
              min={0}
            />
          </div>
          <div className="flex gap-4 border p-2 rounded justify-between">
            <label htmlFor="sizeL">L</label>
            <input
              className="max-w-20 bg-gray-100 text-gray-700 px-2 rounded-sm"
              type="number"
              name="sizeL"
              id="sizeL"
              min={0}
            />
          </div>
          <div className="flex gap-4 border p-2 rounded justify-between">
            <label htmlFor="sizeXL">XL</label>
            <input
              className="max-w-20 bg-gray-100 text-gray-700 px-2 rounded-sm"
              type="number"
              name="sizeXL"
              id="sizeXL"
              min={0}
            />
          </div>
        </fieldset>
      </div>
      <input
        className="border rounded-sm p-2 pointer text-center opacity-55 hover:opacity-95"
        type="submit"
        value={pending ? "..." : "Criar Item"}
      />
    </form>
  );
};
