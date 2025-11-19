"use client";

import { createCollectionSliderAd } from "@/actions/categories";
// import type { Collection } from "@/lib/generated/prisma/client";
import { sliderSchema } from "@/lib/schema";
import { UploadButton } from "@/utils/uploadthing";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { Collection } from "@prisma/client";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useActionState, useEffect, useState } from "react";

export const SliderForm = () => {
  const [state, action, pending] = useActionState(
    createCollectionSliderAd,
    undefined
  );
  const [form, fields] = useForm({
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: sliderSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  const [image, setImage] = useState("");
  const [collections, setCollections] = useState<Collection[]>([]);
  const [selectedCollection, setSelectedCollection] = useState<string | null>(
    null
  );

  useEffect(() => {
    if (state?.status === "success") {
      console.log(state.message);
      redirect("/admin");
    }
    const getCollections = async () => {
      try {
        const res = await fetch("/api/collections");
        if (!res.ok) throw new Error("Error getting collections");
        const data = await res.json();
        setCollections(data);
      } catch (error) {
        console.error(error);
      }
    };

    getCollections();
  }, [state]);

  const handleCollectionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setSelectedCollection(value);
    console.log(selectedCollection);
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
              Colecoes
            </legend>
            {collections.length > 0 &&
              collections.map((c) => (
                <label key={c.id} id={c.id} className="flex radio-label h-fit">
                  <input
                    type="radio"
                    name="collectionId"
                    id="collectionId"
                    value={c.id}
                    onChange={handleCollectionChange}
                  />
                  <span className="radio-option">{c.name}</span>
                </label>
              ))}
          </fieldset>
          {fields.collectionId.errors && <p>{fields.collectionId.errors}</p>}
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
                alert("Upload Completed");
              }}
              onUploadError={(error: Error) => {
                alert(`Error ${error.message}`);
              }}
            />
          )}
          {fields.imageUrl.errors && <p>{fields.imageUrl.errors}</p>}
        </div>
        <input
          type="submit"
          value={pending ? "..." : "Criar Slider Ad"}
          disabled={pending}
          className="border rounded-sm p-2 pointer"
        />
      </div>
    </form>
  );
};
