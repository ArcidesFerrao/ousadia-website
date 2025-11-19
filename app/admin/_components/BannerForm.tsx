"use client";

import { createCategoryBannerAd } from "@/actions/categories";
// import type { Category } from "@/lib/generated/prisma/client";
import { bannerSchema } from "@/lib/schema";
import { UploadButton } from "@/utils/uploadthing";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { Category } from "@prisma/client";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const BannerForm = () => {
  const [state, action, pending] = useActionState(
    createCategoryBannerAd,
    undefined
  );
  const [form, fields] = useForm({
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: bannerSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  const [image, setImage] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  //   const [slug, setSlug] = useState("");

  //   const handleSlug = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const value = e.target.value;
  //     setName(value);
  //     setSlug(value.toLowerCase());
  //   };

  useEffect(() => {
    if (state?.status === "success") {
      console.log(state.message);
      redirect("/admin");
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

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedCategory(value);
    console.log(selectedCategory);
    console.log(value);
  };

  return (
    <form className="" id={form.id} onSubmit={form.onSubmit} action={action}>
      <div className="max-w-100 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 justify-between rounded-sm border p-2">
            <label htmlFor="title">Titulo</label>
            <input type="text" name="title" id="title" />
          </div>
          {fields.title.errors && <p>{fields.title.errors}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 justify-between rounded-sm border p-2">
            <label htmlFor="description">Descricao</label>
            <input type="text" name="description" id="description" />
          </div>
          {fields.description.errors && <p>{fields.description.errors}</p>}
        </div>
        <div className="flex flex-col gap-4">
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
                    id="categoryId"
                    value={c.id}
                    onChange={handleCategoryChange}
                  />
                  <span className="radio-option">{c.name}</span>
                </label>
              ))}
          </fieldset>
          {fields.categoryId.errors && <p>{fields.categoryId.errors}</p>}
        </div>
        <div className="flex flex-col gap-2 rounded-sm justify-between border p-2">
          <label htmlFor="imageUrl">Imagem</label>
          <input
            type="hidden"
            name="imageUrl"
            id="imageUrl"
            value={image}
            readOnly
          />
          {image ? (
            <Image
              src={image}
              width={250}
              height={250}
              alt="banner image"
              className="self-center rounded-sm"
            />
          ) : (
            <UploadButton
              className="pointer opacity-65 hover:opacity-95"
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                console.log("Files: ", res);
                if (res && res[0].ufsUrl) setImage(res[0].ufsUrl);
                toast.success("Upload Completed");
              }}
              onUploadError={(error: Error) => {
                toast.success(`Error ${error.message}`);
              }}
            />
          )}
          {fields.imageUrl.errors && <p>{fields.imageUrl.errors}</p>}
        </div>
        <input
          type="submit"
          value={pending ? "..." : "Criar Banner Ad"}
          disabled={pending}
          className="border rounded-sm p-2 pointer"
        />
      </div>
    </form>
  );
};
