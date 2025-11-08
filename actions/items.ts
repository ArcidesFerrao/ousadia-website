import db from "@/lib/prisma";




export async function getItems() {
  
    const items = await db.product.findMany();

    return items
}
