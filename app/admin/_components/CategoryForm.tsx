"use client";

import { createCategorie } from "@/actions/categories";
import { categorySchema } from "@/lib/schema";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useActionState, useEffect } from "react";

export const CategoryForm = () => {
  const [state, action, pending] = useActionState(createCategorie, undefined);
  const [form, fields] = useForm({
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: categorySchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  useEffect(() => {
    if (state?.status === "success") {
      console.log(state.message);
    }
  }, [state]);

  return (
    <form className="" id={form.id} onSubmit={form.onSubmit} action={action}>
      <div className="max-w-80 flex flex-col gap-5">
        <div className="flex gap-2 rounded-sm border p-2">
          <label htmlFor="name">Nome</label>
          <input type="text" name="name" id="name" />
          {fields.name.allErrors && <p>{fields.name.errors}</p>}
        </div>

        <div className="flex gap-2 rounded-sm border p-2">
          <label htmlFor="slug">Slug</label>
          <input type="text" name="slug" id="slug" />
          {fields.slug.allErrors && <p>{fields.slug.errors}</p>}
        </div>
        <input
          type="submit"
          value={pending ? "..." : "Criar Categoria"}
          disabled={pending}
          className="border rounded-sm p-2"
        />
      </div>
    </form>
  );
};
