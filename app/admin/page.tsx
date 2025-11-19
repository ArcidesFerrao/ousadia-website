export const dynamic = "force-dynamic";

import {
  BannerCard,
  InfoCard,
  InfoTotalCard,
  ProductDashCard,
  SliderCard,
} from "./_components/DashCard";
import { getItems, getMostOrdered } from "@/actions/items";
import Link from "next/link";
import { PromoForm } from "./_components/PromoForm";
import { getBannerAds, getSliderAds } from "@/actions/promo";
import { completedTotal, getOrdersCount } from "@/actions/orders";

export default async function AdminPage() {
  const items = getItems();
  const bannerAds = await getBannerAds();
  const sliderAds = await getSliderAds();
  const mostOrdered = await getMostOrdered();
  const ordersCount = await getOrdersCount();
  const completedTotalCount = await completedTotal();

  return (
    <>
      <div className="flex justify-between items-center">
        <h2>Dashboard</h2>
        <div className="flex items-center gap-4 text-sm dash-buttons-display">
          <Link
            className="px-3 py-2 border rounded-sm opacity-55 hover:opacity-95"
            href="/admin/categorias/collection/new"
          >
            + Colecao
          </Link>
          <Link
            className="px-3 py-2 border rounded-sm opacity-55 hover:opacity-95"
            href="/admin/categorias/new"
          >
            + Categoria
          </Link>
          <Link
            className="px-3 py-2 border rounded-sm opacity-55 hover:opacity-95"
            href="/admin/items/new"
          >
            + Item
          </Link>
        </div>
      </div>
      <div className="flex-w gap-2 justify-between ">
        <InfoTotalCard
          title="Total de Vendas"
          amount={completedTotalCount}
          url="/admin/vendas"
        />
        <InfoCard
          title="Items"
          value={(await items).length}
          url="/admin/items"
        />
        <InfoCard title="Pedidos" value={ordersCount} url="/admin/pedidos" />
        <div className="flex flex-col  gap-4 text-sm dash-buttons-mobile">
          <Link
            className="px-3 py-2 border rounded-sm max-h-fit opacity-55 hover:opacity-95"
            href="/admin/categorias/collection/new"
          >
            + Colecao
          </Link>
          <Link
            className="px-3 py-2 border rounded-sm max-h-fit opacity-55 hover:opacity-95"
            href="/admin/categorias/new"
          >
            + Categoria
          </Link>
          <Link
            className="px-3 py-2 border rounded-sm max-h-fit opacity-55 hover:opacity-95"
            href="/admin/items/new"
          >
            + Item
          </Link>
        </div>
      </div>
      {mostOrdered.length > 0 && (
        <div className="flex flex-col gap-5 p-4 bg5 rounded-lg">
          <h5 className="underline">Mais vendidos...</h5>
          <div className="flex-w gap-2 justify-between ">
            {mostOrdered.map((item) => (
              <ProductDashCard
                key={item.id}
                imageUrl={item.mainImage || ""}
                orders={item.totalOrders}
                price={item.basePrice || 0}
                title={item.name || ""}
              />
            ))}
          </div>
        </div>
      )}
      <div className="flex flex-col bg5 gap-4 rounded-lg p-4 ">
        <h3 className="underline">Ads</h3>
        <div className="flex border rounded p-2">
          <PromoForm />
        </div>
        <div className="flex flex-col gap-5  py-4 ">
          <div className="flex justify-between gap-5 items-center">
            <h5>Banner...</h5>
            <Link
              href="/admin/categorias/banner/new"
              className="py-2 px-4 border rounded-sm opacity-65 hover:opacity-95"
            >
              +
            </Link>
          </div>
          <div className="flex-w gap-2 justify-between ">
            {bannerAds &&
              bannerAds.map((ad) => (
                <BannerCard
                  key={ad.id}
                  detail={ad.description}
                  imageUrl={ad.imageUrl}
                  title={ad.title}
                />
              ))}
          </div>
        </div>
        <div className="flex flex-col gap-5  ">
          <div className="flex justify-between gap-5 items-center">
            <h5>Slider...</h5>
            <Link
              href="/admin/categorias/collection/slider/new"
              className="py-2 px-4 border rounded-sm opacity-65 hover:opacity-95"
            >
              +
            </Link>
          </div>
          <div className="flex-w gap-2 justify-between ">
            {sliderAds &&
              sliderAds.map((ad) => (
                <SliderCard
                  key={ad.id}
                  detail={ad.description}
                  title={ad.title}
                  imageUrl={ad.imageUrl}
                />
              ))}
            {/* <SliderCard detail="Nova Colecao" title="Verao" imageUrl="/" />
            <SliderCard detail="Nova Colecao" title="Verao" imageUrl="/" /> */}
          </div>
        </div>
      </div>
    </>
  );
}
