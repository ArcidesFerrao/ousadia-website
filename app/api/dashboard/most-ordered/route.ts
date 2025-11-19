import db from "@/lib/prisma";
import { NextResponse } from "next/server";



export async function GET() {
  try {
    // Group all orders by productId and sum the quantities
    const mostOrdered = await db.order.groupBy({
      by: ["productId"],
      _sum: {
        quantity: true,
      },
      orderBy: {
        _sum: {
          quantity: "desc",
        },
      },
      take: 10, // Top 10
    });

    // Fetch full product details for each productId
    const products = await Promise.all(
      mostOrdered.map(async (item) => {
        const product = await db.product.findUnique({
          where: { id: item.productId },
          select: {
            id: true,
            name: true,
            mainImage: true,
            basePrice: true,
            discount: true,
          },
        });

        return {
          ...product,
          totalOrders: item._sum.quantity ?? 0,
        };
      })
    );

    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching most ordered products:", error);
    return NextResponse.json(
      { error: "Failed to fetch most ordered products" },
      { status: 500 }
    );
  }
}
