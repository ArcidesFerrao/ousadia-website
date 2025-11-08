import React from "react";

export default function ItemsPage() {
  return (
    <div>
      <div className="flex">
        <h3>Lista de Items</h3>
        <button>Adicionar</button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Cor</th>
              <th>Tamanho</th>
              <th>Stock</th>
              <th>Preco</th>
              <th>Desconto</th>
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
