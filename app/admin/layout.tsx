export const dynamic = "force-dynamic";

import type { Metadata } from "next";

import { poppins } from "@/lib/font";

export const metadata: Metadata = {
  title: "Veste Ousadia - Admin",
  description: "Gestao da Pagina",
  icons: {
    icon: [{ url: "/favicon.png" }],
  },
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section
      className={`${poppins.className} container admin-page admin-pages-section bg3 text-gray-300 flex flex-col gap-5 p-4  w-full bg3 `}
    >
      {children}
    </section>
  );
}
