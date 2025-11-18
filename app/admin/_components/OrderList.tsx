"use client";
import { OrderWithProduct } from "@/types/types";
import { useState } from "react";

export const OrderList = ({ orders }: { orders: OrderWithProduct[] }) => {
  const [search, setSearch] = useState("");

  const filteredOrders = orders.filter((order) => {
    const idMatchesSearch = order.id
      .toLowerCase()
      .includes(search.toLocaleLowerCase());
    const nameMatchesSearch = order.product.name
      .toLowerCase()
      .includes(search.toLocaleLowerCase());

    return nameMatchesSearch || idMatchesSearch;
  });

  return (
    <>
      <div className="flex flex-col p-2 gap-2 border rounded-sm">
        <input
          className="p-2 "
          type="text"
          name="search"
          id="search"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar por nome, telefone ou ID do pedido"
        />
        <select className="w-fit bg3 p-2" name="status" id="status">
          <option value="">Status:</option>
          <option value="PENDING">PENDING</option>
          <option value="CONFIRMED">CONFIRMED</option>
          <option value="PROCESSING">PROCESSING</option>
          <option value="COMPLETED">COMPLETED</option>
          <option value="CANCELLED">CANCELLED</option>
        </select>
      </div>
      {filteredOrders.map((order) => (
        <div
          key={order.id}
          className="flex flex-col gap-4 border  opacity-55 p-2 rounded-sm hover:opacity-95 "
        >
          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              <h3>{order.product.name}</h3>
              <div className="flex flex-col gap-2">
                <p className="font-thin text-xs">Id: {order.id}</p>
                <div className="flex gap-2">
                  <p>Cor: {order.product.color}</p>
                  <p>Tamanho: {order.size}</p>
                  <p>Qty: {order.quantity}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <span className="bg2 text-gray-500 flex justify-center p-1 rounded-sm">
                <p className="font-medium">{order.status}</p>
              </span>
              <h3>MZN {order.totalAmount.toFixed(2)}</h3>
              <p>{order.createdAt.toLocaleDateString()}</p>
            </div>
          </div>
          {order.customerMessage && <p>Mensagem: {order.customerMessage}</p>}
          <div className="flex gap-2">
            <button className="bg5 p-2 rounded-sm">Processar</button>
            <button className="bg5 p-2 rounded-sm">Concluir</button>
            <button className="bg5 p-2 rounded-sm">Cancelar</button>
          </div>
        </div>
      ))}
    </>
  );
};
