import React from "react";

export const ItemForm = () => {
  return (
    <form className="flex flex-col gap-4 p-2">
      <div className="flex">
        <div className="flex">
          <label htmlFor="name">Nome</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="flex">
          <label htmlFor="price">Preco</label>
          <input type="number" name="price" id="price" />
        </div>
      </div>
      <fieldset>
        <legend>Categoria</legend>
      </fieldset>
      <div className="flex-w">
        <fieldset>
          <legend>Tamanhos</legend>
          <div className="flex gap-2">
            <label htmlFor="sizeXS">XS</label>
            <input type="number" name="sizeXS" id="sizeXS" />
          </div>
          <div className="flex gap-2">
            <label htmlFor="sizeS">S</label>
            <input type="number" name="sizeS" id="sizeS" />
          </div>
          <div className="flex gap-2">
            <label htmlFor="sizeM">M</label>
            <input type="number" name="sizeM" id="sizeM" />
          </div>
          <div className="flex gap-2">
            <label htmlFor="sizeL">L</label>
            <input type="number" name="sizeL" id="sizeL" />
          </div>
          <div className="flex gap-2">
            <label htmlFor="sizeXL">XL</label>
            <input type="number" name="sizeXL" id="sizeXL" />
          </div>
        </fieldset>
        <div className="flex">
          <div className="flex">
            <label htmlFor="color">Cor</label>
            <input type="text" name="color" id="color" />
          </div>
          <div className="flex">
            <label htmlFor="brand">Marca</label>
            <input type="text" name="brand" id="brand" />
          </div>
        </div>
      </div>
    </form>
  );
};
