import { SliderForm } from "@/app/admin/_components/SliderForm";
import Link from "next/link";

export default function NewSliderPage() {
  return (
    <div className="flex flex-col gap-5 p-4 bg3 items-center admin-pages-section">
      <div className="flex justify-between items-center gap-4">
        <h2>Nova Slider</h2>
        <Link href="/admin" className="px-4 py-2 border rounded-sm">
          Cancel
        </Link>
      </div>
      <SliderForm />
    </div>
  );
}
