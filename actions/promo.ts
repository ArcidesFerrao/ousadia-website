'use server'

import db from "@/lib/prisma"
import { redirect } from "next/navigation"

export async function createPromo(promo: string) {

    const addedPromo = await  db.topBar.create({
        data: {
            text: promo,
        }
    })

    if (addedPromo) {
        redirect("/admin")
    }
}
export async function getBannerAds() {

    const ads = await  db.bannerAd.findMany({
        where: {
            isActive: true
        },
        take: 3,
        orderBy: {
            createdAt: "desc"
        }
    })

    if (ads) {
        return ads
    }
}

export async  function getSliderAds() {
    const ads = await db.sliderAd.findMany({
        where: {
            isActive: true,
        },
        take: 3,
        orderBy: {
            createdAt: "desc"
        }
    })
    if (ads) {
        return ads
    }
}

