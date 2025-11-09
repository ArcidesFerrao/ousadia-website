import z from "zod";



export const categorySchema = z.object({
    name: z.string().min(3, {message: "Name must be at least 3 chars"}),
    slug: z.string().min(3, {message: "Slug must be at least 3 chars"})
})


export const itemSchema = z.object({
    name: z.string().min(3, {message: "Name must be at least 3 chars"}),
    price: z.coerce.number().int().min(1),
    color: z.string().min(3),
    description: z.string().min(5),
    categoryId: z.string(),
    quantityXS:z.coerce.number().int().min(0),
    quantityS:z.coerce.number().int().min(0),
    quantityM:z.coerce.number().int().min(0),
    quantityL:z.coerce.number().int().min(0),
    quantityXL:z.coerce.number().int().min(0),
    mainImage: z.string().url(),
    image2: z.string().url(),
    image3: z.string().url(),
})

export const bannerSchema = z.object({
    title: z.string().min(3, {message: "Title must be at least 3 chars"}),
    description: z.string().min(5),
    categoryId: z.string(),
    imageUrl: z.string().url(),
})