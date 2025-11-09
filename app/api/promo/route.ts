import db from "@/lib/prisma";

export async function GET(req: Request) {
    try {
        const promo = await db.topBar.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });
        return new Response(JSON.stringify(promo), { status: 200 })
        console.log(req)
    } catch (error) {
        return new Response(JSON.stringify({error: `Error fetching Top Bar Promo: ${error}`}), {status: 500})
    }
}