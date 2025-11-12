import { Category, Product } from "@/lib/generated/prisma/client";


export type CategoryWithProducts = Category & {
    products: Product[];
}