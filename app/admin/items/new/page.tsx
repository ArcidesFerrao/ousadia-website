// import { addItem } from "@/actions/items";
import { ItemForm } from "../../_components/ItemForm";
import { poppins } from "@/lib/font";

export default function NewItemPage() {
  return (
    <div
      className={`${poppins.className} flex flex-col gap-5 p-4 bg3 items-center admin-pages-section`}
    >
      <h2>Adicionar Item</h2>
      <ItemForm
      // addItem={addItem}
      />
    </div>
  );
}
