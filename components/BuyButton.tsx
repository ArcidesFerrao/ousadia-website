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
  //   const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    size: "" as Size,
    quantity: 1,
  });

  const handleSubmit = async () => {
    if (!form.name || !form.phone) {
      alert("por favor preencha o nome e o numero");
      return;
    }

    setLoading(true);
    const result = await buyItem({
      productId,
      productName,
      basePrice,
      size: form.size,
      quantity: form.quantity,
      name: form.name,
      phone: form.phone,
    });
    setLoading(false);
    if (result.redirect) {
      window.open(result.redirect, "_blank");
    }
  };

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
        {/* <div className="flex justify-between items-center w-full m-b-20">
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
        </div> */}

        <button
          onClick={() => setShowForm(true)}
          className="flex-c-m stext-101 cl0 h-14 bg1 bor1 hov-btn1 p-lr-15 trans-04 w-full"
        >
          Comprar
        </button>
      </div>
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 ">
          <div className="bg2 form-modal-item rounded-lg shadow-md">
            <div className="p-6 flex flex-col gap-5 m-6 w-88">
              <span className="mtext-109">Finalizar Pedido</span>
              <div className="py-2 flex flex-col gap-4">
                <div>
                  <input
                    className="mtext-104"
                    type="text"
                    placeholder="Nome"
                    name={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div>
                  <input
                    className="mtext-104"
                    type="text"
                    placeholder="Telefone (+258...)"
                    name={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                  />
                </div>
                <div className="flex justify-between items-center w-full">
                  <span className="stext-102">Quantity</span>
                  <input
                    className="mtext-104"
                    type="number"
                    name="quantity"
                    min={1}
                    value={form.quantity}
                    onChange={(e) =>
                      setForm({ ...form, quantity: Number(e.target.value) })
                    }
                  />
                </div>
              </div>
              <button
                className="flex-c-m stext-101 cl0 h-14 bg1 bor1 hov-btn1 p-lr-15 trans-04 w-full"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? "Enviando..." : "Confirmar Pedido"}
              </button>
              <button
                className="flex-c-m stext-101 cl2 h-14 bg2 bor1 hov-btn1 p-lr-15 trans-04 w-full"
                onClick={() => setShowForm(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* </div> */}
    </div>
  );
}
