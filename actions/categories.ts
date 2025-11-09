'use server'

import db from "@/lib/prisma";
import { bannerSchema, categorySchema } from "@/lib/schema";
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


export async function createCategoryBannerAd(prevState: unknown, formData: FormData) {
    const submission = parseWithZod(formData, { schema: bannerSchema })
        if(submission.status !== "success") return submission.error

        const addedBannerAd = await db.bannerAd.create({
            data: {
                title: submission.value.title,
                description: submission.value.description,
                categoryId: submission.value.categoryId,
                imageUrl: submission.value.imageUrl
            }
        })

if (submission.status === "success") {
        return {
            status: "success",
            message: "Banner Ad created successfully",
            addedBannerAd
        }
    }
}