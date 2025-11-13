"use client";

import { useEffect, useState } from "react";
import { PromoCard } from "./DashCard";
import { createPromo } from "@/actions/promo";
// import { redirect } from "next/navigation";

export const PromoForm = () => {
  const [onEdit, setOnEdit] = useState(false);
  const [promo, setPromo] = useState("");
  //   const [state, setState] = useState("");

  const handleEdit = () => {
    setOnEdit((prev) => !prev);
  };

  const handlePromoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setPromo(value);
  };

  useEffect(() => {
    const getPromo = async () => {
      try {
        const res = await fetch("/api/promo");
        if (!res.ok) throw new Error("Error getting promo");
        const data = await res.json();
        setPromo(data[0].text);
      } catch (error) {
        console.error(error);
      }
    };

    getPromo();
  }, []);

  return (
    <div className="flex justify-between w-full gap-4">
      {onEdit ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // const createdPromo =
            createPromo(promo);
            // if (createdPromo) redirect("/admin");
          }}
          className="flex flex-col bg3 gap-5 p-2 w-full  min-w-40 opacity-70 hover:opacity-95"
        >
          <div className="flex flex-col gap-2">
            <h5>Top Bar Promo</h5>
            <input
              className="bg5 p-2 "
              type="text"
              name="promo"
              id="promo"
              value={promo}
              onChange={handlePromoChange}
            />
          </div>
          <input
            className="bg5 py-2 pointer"
            type="submit"
            value={promo ? "+ Nova Promo" : "Editar"}
          />
        </form>
      ) : (
        <div>
          {promo ? (
            <PromoCard promo={promo} />
          ) : (
            <p>No promo available, add a new one</p>
          )}
        </div>
      )}
      <button onClick={handleEdit} className="border p-2 rounded-sm pointer">
        {onEdit ? "Cancel" : promo ? "+" : "Editar"}
      </button>
    </div>
  );
};
