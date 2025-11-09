"use client";

import { addItem } from "@/actions/items";
import { poppins } from "@/lib/font";
import type { Category } from "@/lib/generated/prisma/client";
import { itemSchema } from "@/lib/schema";
import { UploadButton } from "@/utils/uploadthing";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import Image from "next/image";
import { useActionState, useEffect, useState } from "react";

export const ItemForm = () => {
  const [state, action, pending] = useActionState(addItem, undefined);

  const [mainImage, setMainImage] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
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

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedCategory(value);
    console.log(selectedCategory);
    console.log(value);
  };

  return (
    <form
      noValidate
      id={form.id}
      onSubmit={form.onSubmit}
      // onSubmit={(e) => {
      //   e.preventDefault();
      //   console.log("form submitting");
      //   form.onSubmit(e);
      // }}
      action={action}
      className={`${poppins.className} flex flex-col gap-4 p-2`}
    >
      <div className="flex-col gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex border items-center gap-2 p-2 rounded">
              <label htmlFor="name">Nome</label>
              <input type="text" name="name" id="name" />
            </div>
            {fields.name.errors && <p>{fields.name.errors}</p>}
          </div>
          <div className="flex justify-between gap-2">
            <div className="flex flex-col gap-2">
              <div className="flex border items-center gap-2 p-2 rounded">
                <label htmlFor="price">Preco</label>
                <input type="number" name="price" id="price" />
              </div>
              {fields.price.errors && <p>{fields.price.errors}</p>}
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex border items-center gap-2 p-2 justify-between rounded">
                <label htmlFor="color">Cor</label>
                <input type="text" name="color" id="color" />
              </div>
              {fields.color.errors && <p>{fields.color.errors}</p>}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col border  gap-2 p-2 justify-between rounded">
              <label htmlFor="description">Descricao</label>
              <textarea name="description" id="description" />
            </div>
            {fields.description.errors && <p>{fields.description.errors}</p>}
          </div>
        </div>
        <div className="flex-col gap-4">
          <div className="flex flex-col gap-4">
            <fieldset className="radio-category border p-4  flex-w gap-5  rounded">
              <legend className="max-w-fit border p-2 text-sm  rounded">
                Categoria
              </legend>
              {categories.length > 0 &&
                categories.map((c) => (
                  <label
                    key={c.id}
                    id={c.id}
                    className="flex radio-label h-fit"
                  >
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
            <fieldset className="border p-4 flex flex-w gap-2  rounded">
              <legend className="max-w-fit border p-2 text-sm  rounded">
                Tamanhos
              </legend>
              <div className="flex gap-4 border p-2 rounded justify-between">
                <label htmlFor="quantityXS">XS</label>
                <input
                  className="max-w-20 bg-gray-100 text-gray-700 px-2 rounded-sm"
                  type="number"
                  name="quantityXS"
                  id="quantityXS"
                  min={0}
                />
              </div>
              <div className="flex gap-4 border p-2 rounded justify-between">
                <label htmlFor="quantityS">S</label>

                <input
                  className="max-w-20 bg-gray-100 text-gray-700 px-2 rounded-sm"
                  type="number"
                  name="quantityS"
                  id="quantityS"
                  min={0}
                />
              </div>
              <div className="flex gap-4 border p-2 rounded justify-between">
                <label htmlFor="quantityM">M</label>
                <input
                  className="max-w-20 bg-gray-100 text-gray-700 px-2 rounded-sm"
                  type="number"
                  name="quantityM"
                  id="quantityM"
                  min={0}
                />
              </div>
              <div className="flex gap-4 border p-2 rounded justify-between">
                <label htmlFor="quantityL">L</label>
                <input
                  className="max-w-20 bg-gray-100 text-gray-700 px-2 rounded-sm"
                  type="number"
                  name="quantityL"
                  id="quantityL"
                  min={0}
                />
              </div>
              <div className="flex gap-4 border p-2 rounded justify-between">
                <label htmlFor="quantityXL">XL</label>
                <input
                  className="max-w-20 bg-gray-100 text-gray-700 px-2 rounded-sm"
                  type="number"
                  name="quantityXL"
                  id="quantityXL"
                  min={0}
                />
              </div>
            </fieldset>
          </div>
          <div className="flex gap-4 justify-between">
            <div className="flex flex-col gap-2 border rounded-sm p-2  justify-center h-fit">
              <label htmlFor="mainImage">Main Image</label>
              <input
                type="hidden"
                name="mainImage"
                id="mainImage"
                value={mainImage}
                readOnly
              />
              {mainImage ? (
                <Image
                  className="self-center rounded-md"
                  src={mainImage}
                  width={120}
                  height={120}
                  alt="mainImage"
                />
              ) : (
                <UploadButton
                  className="pointer opacity-65 hover:opacity-95"
                  endpoint="imageUploader"
                  onClientUploadComplete={(res) => {
                    console.log("Files: ", res);
                    if (res && res[0].ufsUrl) setMainImage(res[0].ufsUrl);
                    alert("Upload Completed");
                  }}
                  onUploadError={(error: Error) => {
                    alert(`Error ${error.message}`);
                  }}
                />
              )}
            </div>
            <div className="flex flex-col gap-2 border rounded-sm p-2  h-fit justify-center">
              <label htmlFor="image2">Imagem 2</label>
              <input type="hidden" name="image2" id="image2" value={image2} />
              {image2 ? (
                <Image
                  src={image2}
                  width={120}
                  height={120}
                  className="self-center rounded-md"
                  alt="second image"
                />
              ) : (
                <UploadButton
                  className="pointer opacity-65 hover:opacity-95"
                  endpoint="imageUploader"
                  onClientUploadComplete={(res) => {
                    console.log("Files: ", res);
                    setImage2(res[0].url);
                    alert("Upload Completed");
                  }}
                  onUploadError={(error: Error) => {
                    alert(`Error ${error.message}`);
                  }}
                />
              )}
            </div>
            <div className="flex flex-col gap-2 border rounded-sm p-2  h-fit justify-center">
              <label htmlFor="image3">Imagem 3</label>
              <input type="hidden" name="image3" id="image3" value={image3} />
              {image3 ? (
                <Image
                  src={image3}
                  width={120}
                  height={120}
                  className="self-center rounded-md"
                  alt="third image"
                />
              ) : (
                <UploadButton
                  className="pointer opacity-65 hover:opacity-95"
                  endpoint="imageUploader"
                  onClientUploadComplete={(res) => {
                    console.log("Files: ", res);
                    setImage3(res[0].url);
                    alert("Upload Completed");
                  }}
                  onUploadError={(error: Error) => {
                    alert(`Error ${error.message}`);
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {fields.mainImage.errors && <p>{fields.mainImage.errors}</p>}
      {fields.image2.errors && <p>{fields.image2.errors}</p>}
      {fields.image3.errors && <p>{fields.image3.errors}</p>}
      <div className="border p-2 bg-gray-100 text-xs">
        <p>Main: {mainImage || "none"}</p>
        <p>Image2: {image2 || "none"}</p>
        <p>Image3: {image3 || "none"}</p>
        <p>Category: {selectedCategory || "none"}</p>
        <p>Pending: {pending ? "yes" : "no"}</p>
      </div>
      <input
        className="border rounded-sm p-2 pointer text-center opacity-55 hover:opacity-95"
        type="submit"
        value={pending ? "..." : "Criar Item"}
        disabled={pending}
      />
    </form>
  );
};
