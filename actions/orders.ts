import db from "@/lib/prisma";

export async function getOrdersCount() {

    const ordersCount = await  db.order.findMany({
        where: {
            status: "COMPLETED"
        },
        
    })

    return ordersCount.length

}