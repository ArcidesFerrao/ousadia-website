import { Category, Collection, Order, Product } from "@/lib/generated/prisma/client";


export type CategoryWithProducts = Category & {
    products: Product[];
}

export type CollectionWithProducts = Collection & {
    products: Product[];
}


export type OrderWithProduct = Order & {
    product: Product;
}