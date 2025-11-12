import db from "@/lib/prisma";

export async function GET(req: Request) {
    try {
        const categories = await db.category.findMany({
            include: {
                products: true // Include related products
            }
        });
        return new Response(JSON.stringify(categories), { status: 200 })
        console.log(req)
    } catch (error) {
        return new Response(JSON.stringify({error: `Error fetching categories: ${error}`}), {status: 500})
    }
}