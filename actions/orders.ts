import db from "@/lib/prisma";

export async function getOrdersCount() {

    const ordersCount = (await  db.order.findMany({})).length

    return ordersCount

}
export async function getOrders() {

    const orders = await  db.order.findMany({
        include: {
            product: true
        }
    })

    return orders

}
export async function completedTotal() {

    const orders = await  db.order.aggregate({
        _sum: {
            totalAmount: true
        },
        where: {
            status: 'COMPLETED'
        }
    })

    return orders._sum.totalAmount || 0

}
export async function getCompletedOrders() {

    const orders = await  db.order.findMany({
                where: {
            status: 'COMPLETED'
        },
        include: {
            product: true
        }
    })

    return orders

}

