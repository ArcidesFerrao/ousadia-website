import React from "react";

import {
  BannerCard,
  InfoCard,
  ProductDashCard,
  PromoCard,
  SliderCard,
} from "./_components/DashCard";
import { getItems } from "@/actions/items";
import Link from "next/link";
import { poppins } from "@/lib/font";

export default async function AdminPage() {
  const items = getItems();

  return (
    <div
      className={`${poppins.className} admin-page bg3 text-gray-300 flex flex-col gap-5 p-4  `}
    >
      <div className="flex justify-between items-center">
        <h2>Dashboard</h2>
        <div className="flex gap-4">
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
        <InfoCard title="Total de Vendas" amount={28900} url="/admin/sales" />
        <InfoCard
          title="Items"
          value={(await items).length}
          url="/admin/items"
        />
        <InfoCard title="Pedidos" value={90} url="/admin/pedidos" />
        <InfoCard title="Clientes" value={8} url="/admin/clientes" />
      </div>
      <div className="flex flex-col gap-5 p-4 bg5 rounded-lg">
        <h5 className="underline">Mais vendidos...</h5>
        <div className="flex-w gap-2 justify-between ">
          <ProductDashCard
            imageUrl="/"
            orders={5}
            price={1000}
            title="Maningue Cenas"
          />
          <ProductDashCard
            imageUrl="/"
            orders={5}
            price={1000}
            title="Maningue Cenas"
          />
          <ProductDashCard
            imageUrl="/"
            orders={5}
            price={1000}
            title="Maningue Cenas"
          />
        </div>
      </div>
      <div className="flex flex-col bg5 gap-4 rounded-lg p-4 ">
        <h3 className="underline">Ads</h3>
        <div className="border rounded p-2">
          <PromoCard promo="Entregas na Cidade de Maputo" />
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
            <BannerCard
              detail="Colecao Exclusiva"
              imageUrl="/"
              title="Shetas"
            />
            <BannerCard detail="Mais Recentes" imageUrl="/" title="Collabs" />
            <BannerCard detail="Nova Trend" imageUrl="/" title="Bones" />
          </div>
        </div>
        <div className="flex flex-col gap-5  ">
          <h5>Slider...</h5>
          <div className="flex-w gap-2 justify-between ">
            <SliderCard detail="Nova Colecao" title="Verao" imageUrl="/" />
            <SliderCard detail="Nova Colecao" title="Verao" imageUrl="/" />
            <SliderCard detail="Nova Colecao" title="Verao" imageUrl="/" />
          </div>
        </div>
      </div>
    </div>
  );
}
