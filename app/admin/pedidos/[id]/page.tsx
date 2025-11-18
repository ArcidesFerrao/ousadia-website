import db from "@/lib/prisma";

type Params = Promise<{ id: string }>;

export default async function OrderPage(props: { params: Params }) {
  const { id } = await props.params;

  if (!id)
    return (
      <p className="stext-106 text-center min-h-2/3">
        Pedido nao encontrado: {id}
      </p>
    );

  const order = db.order.findUnique({
    where: { id },
  });

  return (
    <div>
      <div className="order-page-header flex flex-col"></div>
    </div>
  );
}
