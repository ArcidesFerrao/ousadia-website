'use server'

// import { Size } from "@/lib/generated/prisma/enums";
import db from "@/lib/prisma";
import { itemSchema } from "@/lib/schema";
import { parseWithZod } from "@conform-to/zod";
import { Size } from "@prisma/client";


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
                collectionId: submission.value.collectionId,
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
      mostOrdered.map(async (item: { productId: string; _sum: { quantity: number | null } }) => {
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


export async function buyItem({
  productId,
  productName,
  basePrice,
  size,
  quantity,
  name,
  phone,
customerMessage}:{
    productId: string; productName: string; basePrice: number; quantity:number; size: Size; name: string; phone: string; customerMessage?: string 
  }) {
    const message = `
    *Novo Pedido*
    ---------------------
    *Nome:* ${name}
    *Telefone:* ${phone}
    ---------------------
    *Produto:* ${productName}
    *Tamanho:* ${size}
    *Quantidade:* ${quantity}
    *Preco:* ${basePrice}
    *Valor:* ${basePrice * quantity}
    ID do produto: ${productId}
    `
    const whatsappNumber = "258852740554"
    const encodedMessage = encodeURIComponent(message.trim());
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    
    const pedido = await db.order.create({
      data: {
        customerName: name,
        customerPhone: phone,
        productId: productId,
        price: basePrice,
        quantity: quantity,
        totalAmount: basePrice * quantity,
        size: size,
        customerMessage
      }
    })
  console.log(pedido)
  
  return { redirect: whatsappURL}
}