import ItemsList from "@/components/ItemsList";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <>
      {/* breadcrumb */}
      <div className="container">
        <div className="bread-crumb flex-w p-l-25 p-r-15 p-lr-0-lg">
          <Link href="/" className="stext-109 cl8 hov-cl1 trans-04">
            Home
            <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true" />
          </Link>

          <span className="stext-109 cl4">Loja</span>
        </div>
      </div>
      <ItemsList />
    </>
  );
}
