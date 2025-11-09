import db from "@/lib/prisma";

export async function GET(req: Request) {
    try {
        const collections = await db.collection.findMany();
        return new Response(JSON.stringify(collections), { status: 200 })
        console.log(req)
    } catch (error) {
        return new Response(JSON.stringify({error: `Error fetching collections: ${error}`}), {status: 500})
    }
}