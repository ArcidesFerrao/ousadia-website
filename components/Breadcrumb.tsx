import Link from "next/link";

type BreadcrumbProps = {
  links: { name: string; href: string }[];
  last: string;
};

export const Breadcrumb = ({
  breadcrumbs,
}: {
  breadcrumbs: BreadcrumbProps;
}) => {
  return (
    <div className="container">
      <div className="bread-crumb flex-w p-r-15">
        <Link href="/" className="stext-109 cl8 hov-cl1 trans-04">
          Home
          <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true" />
        </Link>
        {breadcrumbs.links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="stext-109 cl8 hov-cl1 trans-04"
          >
            {link.name}
            <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true" />
          </Link>
        ))}
        <span className="stext-109 cl4">{breadcrumbs.last}</span>
      </div>
    </div>
  );
};
