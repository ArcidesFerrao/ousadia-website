import { getOrders } from "@/actions/orders";
import { InfoCard } from "../_components/DashCard";
import { OrderList } from "../_components/OrderList";

export default async function OrdersPage() {
  const orders = await getOrders();

  if (orders.length === 0) {
    return <> Nenhum pedido encontrado</>;
  }

  return (
    <>
      <div className="flex flex-col">
        <h3>Gerenciar de Pedidos</h3>
        <p>Visualize e gerencie todos os pedidos da loja</p>
      </div>
      <div className="flex-w gap-2 justify-between">
        <InfoCard title="Total de Pedidos" value={orders.length} url="#" />
        <InfoCard title="Pendentes" value={orders.length} url="#" />
        <InfoCard title="Em Processamento" value={orders.length} url="#" />
        <InfoCard title="Concluidos" value={orders.length} url="#" />
      </div>
      <OrderList orders={orders} />
      {/* <div className="w-full">
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
      </div> */}
    </>
  );
}
