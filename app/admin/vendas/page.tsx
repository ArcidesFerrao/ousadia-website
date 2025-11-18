import { getCompletedOrders } from "@/actions/orders";
import { Breadcrumb } from "@/components/Breadcrumb";
import { poppins } from "@/lib/font";

export default async function SalesPage() {
  const completedOrders = await getCompletedOrders();

  if (completedOrders.length === 0) {
    return (
      <>
        <Breadcrumb
          breadcrumbs={{
            links: [{ name: "admin", href: "/admin" }],
            last: "vendas",
          }}
        />
        <div
          className={`${poppins.className} flex flex-col items-center justify-center w-full`}
        >
          {" "}
          Nenhuma venda encontrada
        </div>
      </>
    );
  }
  return (
    <>
      <Breadcrumb
        breadcrumbs={{
          links: [{ name: "admin", href: "/admin" }],
          last: "vendas",
        }}
      />
      <div className="flex justify-between">
        <h3>Lista de Vendas</h3>
      </div>
      <div className="w-full">
        <table className="w-full">
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Preco</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {completedOrders.map((order) => (
              <tr key={order.id}>
                <td>{order.product.name}</td>
                <td>{order.quantity}</td>
                <td>{order.price}</td>
                <td>{order.totalAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
