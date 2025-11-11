'use server'

import { Size } from "@/lib/generated/prisma/enums";
import db from "@/lib/prisma";
import { itemSchema } from "@/lib/schema";
import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";


export async function getItems() {
  
    const items = await db.product.findMany();

    return items
}


export async function addItem(prevState: unknown, formData: FormData) {
  console.log("adding item")
    try {
        const submission = parseWithZod(formData, { schema: itemSchema})
        if(submission.status !== "success") return submission.error

        const addedItem = await db.product.create({
            data: {
                name: submission.value.name,
                basePrice: submission.value.price,
                description: submission.value.description,
                color: submission.value.color,
                mainImage: submission.value.mainImage,
                image2: submission.value.image2,
                image3: submission.value.image3,
                categoryId: submission.value.categoryId,
                quantityL: submission.value.quantityL,
                quantityXL: submission.value.quantityXL,
                quantityM: submission.value.quantityM,
                quantityS: submission.value.quantityS,
                quantityXS: submission.value.quantityXS,
            }
        })

        if (submission.status === "success") {
            return {
                status: "success",
                message: "Category created successfully",
                addedItem
            }
        }
    } catch (error) {
        console.error(error)
    }
}

export async function getMostOrdered() {
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
      take: 5, // Top 5
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

    return products
}


export async function buyItem({id, amount, size}:{id: string; amount:number; size: Size}) {
  const item = await db.product.findUnique({
    where: {id},
  })

  if (!item ) return "item not found";

  const pedido = await db.order.create({
    data: {
      productId: id,
      price: item.basePrice,
      quantity: amount,
      totalAmount: item.basePrice * amount,
      size: size
    }
  })
  console.log(pedido)
  redirect(`/produtos/${id}`)

}