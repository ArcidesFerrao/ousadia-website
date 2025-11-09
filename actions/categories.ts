'use server'

import db from "@/lib/prisma";
import { categorySchema } from "@/lib/schema";
import { parseWithZod } from "@conform-to/zod";

export async function createCategory(prevState: unknown, formData: FormData) {
    const submission = parseWithZod(formData, { schema: categorySchema})

    if(submission.status !== "success") return submission.error

    const addCategory = await  db.category.create({
        data: {
            name: submission.value.name,
            slug:submission.value.slug
        }
    })

    if (submission.status === "success") {
        return {
            status: "success",
            message: "Category created successfully",
            addCategory
        }
    }
}



export async function getCategories() {
  const data = await db.category.findMany();

  return data
}
