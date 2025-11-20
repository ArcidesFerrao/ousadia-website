// import { addItem } from "@/actions/items";
import Link from "next/link";
import { ItemForm } from "../../_components/ItemForm";
import { poppins } from "@/lib/font";

export default function NewItemPage() {
  return (
    <div
      className={`${poppins.className} flex flex-col gap-5 p-4 bg3 items-center admin-pages-section`}
    >
      <div className="flex justify-between items-center w-full">
        <h2>Adicionar Item</h2>
        <Link href="/admin" className="border px-4 py-2 rounded-sm hover:bg2">
          Cancel
        </Link>
      </div>
      <ItemForm />
    </div>
  );
}
