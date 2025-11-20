"use client";

import { createCategory, createCollection } from "@/actions/categories";
import { categorySchema, collectionSchema } from "@/lib/schema";
import { UploadButton } from "@/utils/uploadthing";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import toast from "react-hot-toast";

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
          <input type="text" name="slug" id="slug" value={slug} readOnly />
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

export const CollectionForm = () => {
  const [state, action, pending] = useActionState(createCollection, undefined);
  const [form, fields] = useForm({
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: collectionSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [slug, setSlug] = useState("");

  const handleSlug = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTitle(value);
    const formattedSlug = value.toLowerCase().replace(/\s+/g, "_");
    setSlug(formattedSlug);
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
          <label htmlFor="title">Nome</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={handleSlug}
          />
          {fields.title.errors && <p>{fields.title.errors}</p>}
        </div>

        <div className="flex gap-2 rounded-sm justify-between border p-2">
          <label htmlFor="details">Details</label>
          <input type="text" name="details" id="details" />
          {fields.details.errors && <p>{fields.details.errors}</p>}
        </div>
        <div className="flex gap-2 rounded-sm justify-between border p-2">
          <label htmlFor="slug">Slug</label>
          <input type="text" name="slug" id="slug" value={slug} readOnly />
          {fields.slug.errors && <p>{fields.slug.errors}</p>}
        </div>
        <div className="flex flex-col gap-2 border rounded-sm p-2  justify-center h-fit">
          <label htmlFor="imageUrl">Imagem</label>
          <input
            type="hidden"
            name="imageUrl"
            id="imageUrl"
            value={imageUrl}
            readOnly
          />
          {imageUrl ? (
            <Image
              className="self-center rounded-md"
              src={imageUrl}
              width={250}
              height={250}
              alt="imagem"
            />
          ) : (
            <UploadButton
              className="pointer opacity-65 hover:opacity-95"
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                console.log("Files: ", res);
                if (res && res[0].ufsUrl) setImageUrl(res[0].ufsUrl);
                toast.success("Upload Completed");
              }}
              onUploadError={(error: Error) => {
                toast.success(`Error ${error.message}`);
              }}
            />
          )}
          {fields.imageUrl.allErrors && <p>{fields.imageUrl.errors}</p>}
        </div>
        <input
          type="submit"
          value={pending ? "..." : "Criar Coleção"}
          disabled={pending}
          className="border rounded-sm p-2 pointer"
        />
      </div>
    </form>
  );
};
