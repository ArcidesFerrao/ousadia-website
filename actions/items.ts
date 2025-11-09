'use server'

import db from "@/lib/prisma";
import { itemSchema } from "@/lib/schema";
import { parseWithZod } from "@conform-to/zod";


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
