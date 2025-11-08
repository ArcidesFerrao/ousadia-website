import React from "react";

export const ItemForm = () => {
  return (
    <form className="flex flex-col gap-4 p-2">
      <div className="flex gap-2">
        <div className="flex border items-center gap-2 p-2 rounded">
          <label htmlFor="name">Nome</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="flex border items-center gap-2 p-2 rounded">
          <label htmlFor="price">Preco</label>
          <input type="number" name="price" id="price" />
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex border items-center gap-2 p-2 rounded">
          <label htmlFor="color">Cor</label>
          <input type="text" name="color" id="color" />
        </div>
        <div className="flex border items-center gap-2 p-2 rounded">
          <label htmlFor="brand">Marca</label>
          <input type="text" name="brand" id="brand" />
        </div>
      </div>
      <div className="flex gap-5">
        <fieldset className="radio-category border p-4  flex flex-col gap-5">
          <legend>Categoria</legend>
          <label className="flex radio-label h-fit">
            <input type="radio" name="category" id="category" value="shetas" />
            <span className="radio-option">Shetas</span>
          </label>
          <label className="flex radio-label h-fit">
            <input
              type="radio"
              name="category"
              id="category"
              value="bones"
              className="radio-btn"
            />
            <span className="radio-option">Bones</span>
          </label>
        </fieldset>
        <div className="flex-w gap-5">
          <fieldset className="border p-4 flex flex-col gap-2">
            <legend>Tamanhos</legend>
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
      </div>
    </form>
  );
};
