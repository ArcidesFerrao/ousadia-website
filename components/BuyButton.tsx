"use client";

import { buyItem } from "@/actions/items";
import { Size } from "@/lib/generated/prisma/enums";
import React, { useState } from "react";

export default function BuyButton({
  productId,
  productName,
  basePrice,
}: {
  productId: string;
  productName: string;
  basePrice: number;
}) {
  const [size, setSize] = useState<Size | "Choose an option">(
    "Choose an option"
  );
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  async function handleBuy() {
    if (!size || size === "Choose an option") {
      alert("Escolha o tamanho primeiro.");
      return;
    }

    const name = prompt("Digite o seu nome completo");
    if (!name) return;

    const phone = prompt("Digite o seu numero de telefone");
    if (!phone) return;

    setLoading(true);

    try {
      const result = await buyItem({
        productId,
        productName,
        basePrice,
        size,
        quantity,
        name,
        phone,
      });

      if (result.redirect) {
        window.open(result.redirect, "_blank");
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-t-33 flex flex-col gap-2">
      <div className="flex justify-between w-full p-b-10  m-b-20">
        <div className=" flex-c-m respon6">Size</div>
        <div className="rs1-select2 bor8 bg0">
          <select
            className=""
            name="size"
            value={size}
            onChange={(e) => setSize(e.target.value as Size)}
          >
            <option>Choose an option</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
      </div>

      {/* <div className="flex justify-between w-full  p-b-10"> */}
      <div className=" flex-w flex-m w-full">
        <div className="flex justify-between items-center w-full m-b-20">
          <div className=" flex-c-m respon6">Quantity</div>

          <div className="flex items-center ">
            <button
              className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m "
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            >
              <i className="fs-16 zmdi zmdi-minus" />
            </button>
            <input
              className="mtext-104 txt-center w-20 "
              type="number"
              name="num-product"
              value={quantity}
              readOnly
            />
            <button
              className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m"
              onClick={() => setQuantity((q) => q + 1)}
            >
              <i className="fs-16 zmdi zmdi-plus" />
            </button>
          </div>
        </div>
        {/* <div className="wrap-num-product flex-w m-r-20 m-tb-10">
            <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
              <i className="fs-16 zmdi zmdi-minus" />
            </div>
            <input
              className="mtext-104 cl3 txt-center num-product"
              type="number"
              name="num-product"
              defaultValue={1}
            />
            <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
              <i className="fs-16 zmdi zmdi-plus" />
            </div>
          </div> */}
        <button
          onClick={handleBuy}
          disabled={loading}
          className="flex-c-m stext-101 cl0 h-14 bg1 bor1 hov-btn1 p-lr-15 trans-04 w-full"
        >
          {loading ? "..." : "Comprar"}
        </button>
      </div>
      {/* </div> */}
    </div>
  );
}
