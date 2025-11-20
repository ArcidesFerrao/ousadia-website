import { Breadcrumb } from "@/components/Breadcrumb";
import ItemsList from "@/components/ItemsList";

export default function ProductsPage() {
  return (
    <>
      {/* breadcrumb */}

      <Breadcrumb
        breadcrumbs={{
          links: [],
          last: "Loja",
        }}
      />
      <ItemsList />
    </>
  );
}
