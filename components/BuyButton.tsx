"use client";

import { buyItem } from "@/actions/items";
import { Size } from "@prisma/client";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

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
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    size: "S",
    quantity: 1,
    message: "",
  });

  const handleSubmit = async () => {
    if (!form.name || !form.phone) {
      toast.error("Por favor preencha o nome e o numero de telefone");
      return;
    }

    setLoading(true);
    const result = await buyItem({
      productId,
      productName,
      basePrice,
      size: form.size as Size,
      quantity: form.quantity,
      name: form.name,
      phone: form.phone,
      customerMessage: form.message,
    });
    setLoading(false);
    if (result.redirect) {
      window.open(result.redirect, "_blank");
      redirect("/");
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
            onChange={(e) => {
              const s = e.target.value as Size;
              setSize(s);
              setForm({ ...form, size: s });
            }}
          >
            <option>Choose an option</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
      </div>

      <div className=" flex-w flex-m w-full">
        <button
          onClick={() => {
            if (size !== "Choose an option") setShowForm(true);
          }}
          className="flex-c-m stext-101 cl0 h-14 bg1 bor1 hov-btn1 p-lr-15 trans-04 w-full"
        >
          Comprar
        </button>
      </div>
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 ">
          <div className="bg2 form-modal-item rounded-lg shadow-md">
            <div className="p-6 flex flex-col gap-5 m-6 max-w-88">
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
                <div className="flex justify-between gap-4 items-center ">
                  <span className="mtext-104 ">Quantidade</span>
                  <input
                    className="mtext-104 max-w-32"
                    type="number"
                    name="quantity"
                    min={1}
                    value={form.quantity}
                    onChange={(e) =>
                      setForm({ ...form, quantity: Number(e.target.value) })
                    }
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <textarea
                    className="mtext-104 w-full"
                    placeholder="Mensagem (opcional)"
                    name="message"
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                  />
                </div>
              </div>
              <button
                className="flex-c-m stext-101 cl0 h-14 bg1 bor1 hov-btn1 p-lr-15 trans-04 w-80"
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
    </div>
  );
}
