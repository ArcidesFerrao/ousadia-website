import { getOrders } from "@/actions/orders";
import { InfoCard } from "../_components/DashCard";
import { OrderList } from "../_components/OrderList";

export default async function OrdersPage() {
  const orders = await getOrders();

  if (orders.length === 0) {
    return <> Nenhum pedido encontrado</>;
  }

  const stats = {
    pending: orders.filter(
      (order) => order.status.toLocaleLowerCase() === "pending"
    ).length,
    processing: orders.filter(
      (order) => order.status.toLocaleLowerCase() === "processing"
    ).length,
    completed: orders.filter(
      (order) => order.status.toLocaleLowerCase() === "completed"
    ).length,
  };

  return (
    <>
      <div className="flex flex-col">
        <h3>Gerenciar de Pedidos</h3>
        <p>Visualize e gerencie todos os pedidos da loja</p>
      </div>
      <div className="flex-w gap-2 justify-between">
        <InfoCard title="Total de Pedidos" value={orders.length} url="#" />
        <InfoCard title="Pendentes" value={stats.pending} url="#" />
        <InfoCard title="Em Processamento" value={stats.processing} url="#" />
        <InfoCard title="Concluidos" value={stats.completed} url="#" />
      </div>
      <OrderList orders={orders} />
    </>
  );
}
