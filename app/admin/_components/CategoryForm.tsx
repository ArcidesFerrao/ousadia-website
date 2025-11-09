"use client";

import { createCategory } from "@/actions/categories";
import { categorySchema } from "@/lib/schema";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";
import { useActionState, useEffect, useState } from "react";

export const CategoryForm = () => {
  const [state, action, pending] = useActionState(createCategory, undefined);
  const [form, fields] = useForm({
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: categorySchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");

  const handleSlug = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    setSlug(value.toLowerCase());
  };

  useEffect(() => {
    if (state?.status === "success") {
      console.log(state.message);
      redirect("/admin");
    }
  }, [state]);

  return (
    <form className="" id={form.id} onSubmit={form.onSubmit} action={action}>
      <div className="max-w-100 flex flex-col gap-5">
        <div className="flex gap-2 rounded-sm border p-2">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleSlug}
          />
          {fields.name.allErrors && <p>{fields.name.errors}</p>}
        </div>

        <div className="flex gap-2 rounded-sm justify-between border p-2">
          <label htmlFor="slug">Slug</label>
          <input type="text" name="slug" id="slug" value={slug} />
          {fields.slug.allErrors && <p>{fields.slug.errors}</p>}
        </div>
        <input
          type="submit"
          value={pending ? "..." : "Criar Categoria"}
          disabled={pending}
          className="border rounded-sm p-2 pointer"
        />
      </div>
    </form>
  );
};
