import { Banner } from "@/components/Banner";
import ItemsList from "@/components/ItemsList";
import { Slider } from "@/components/Slider";

export default function Home() {
  return (
    <>
      <Slider />

      <Banner />

      <ItemsList />
    </>
  );
}
