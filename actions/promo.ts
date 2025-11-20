'use server'

import db from "@/lib/prisma"

export async function createPromo(promo: string) {

    const addedPromo = await  db.topBar.create({
        data: {
            text: promo,
        }
    })

    if (addedPromo) {
        return {success: true, addedPromo};
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

