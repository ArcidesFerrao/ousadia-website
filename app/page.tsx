// import Image from "next/image";

import { Banner } from "@/components/Banner";
import ItemsList from "@/components/ItemsList";
import { ProductModal } from "@/components/ProductModal";
import { Slider } from "@/components/Slider";

export default function Home() {
  return (
    <>
      <Slider />
      <Banner />
      {/* Product */}
      <ItemsList />

      {/*Product Modal1 */}
      <ProductModal />
    </>
  );
}
