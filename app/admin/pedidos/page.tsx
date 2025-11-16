import { getOrders } from "@/actions/orders";
import { poppins } from "@/lib/font";

export default async function OrdersPage() {
  const orders = await getOrders();
  return (
    <div
      className={`${poppins.className} container admin-pages-section bg3 text-gray-300 flex flex-col gap-5 p-4  `}
    >
      <div className="flex">
        <h3>Lista de Pedidos</h3>
      </div>
      <div className="w-full">
        <table className="w-full">
          <thead>
            <tr>
              <th>Item</th>
              <th>Tamanho</th>
              <th>Quantidade</th>
              <th>Preco</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.product.name}</td>
                <td>{order.quantity}</td>
                <td>{order.size}</td>
                <td>MZN {order.price}</td>
                <td>MZN {order.totalAmount}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
