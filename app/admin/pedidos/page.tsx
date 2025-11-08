import React from "react";

export default function OrdersPage() {
  return (
    <div>
      <div className="flex">
        <h3>Lista de Pedidos</h3>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Cor</th>
              <th>Tamanho</th>
              <th>Quantidade</th>
              <th>Preco</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
