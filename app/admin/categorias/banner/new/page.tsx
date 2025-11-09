import { BannerForm } from "@/app/admin/_components/BannerForm";
import Link from "next/link";

export default function NewBannerPage() {
  return (
    <div className="flex flex-col gap-5 p-4 bg3 items-center admin-pages-section">
      <div className="flex justify-between items-center gap-4">
        <h2>Novo Banner</h2>
        <Link href="/admin" className="px-4 py-2 border rounded-sm">
          Cancel
        </Link>
      </div>
      <BannerForm />
    </div>
  );
}
