import Image from "next/image";
import React from "react";

export default function Block({
  title,
  details,
  url,
  imageUrl,
}: {
  title: string;
  details: string;
  url: string;
  imageUrl: string;
}) {
  return (
    <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
      {/* Block1 */}
      <div className="block1 wrap-pic-w">
        <Image
          //   src="/images/banner-01.jpg"
          src={imageUrl}
          alt="IMG-BANNER"
          width={420}
          height={420}
        />
        <a
          //   href="/produtos"
          href={url}
          className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3"
        >
          <div className="block1-txt-child1 flex-col-l">
            <span className="block1-name ltext-102 trans-04 p-b-8">
              {title}
            </span>
            {/* <span className="block1-name ltext-102 trans-04 p-b-8">Shetas</span> */}
            {/* <span className="block1-info stext-102 trans-04">Colecao Exclusiva            </span> */}
            <span className="block1-info stext-102 trans-04">{details} </span>
          </div>
          <div className="block1-txt-child2 p-b-4 trans-05">
            <div className="block1-link stext-101 cl0 trans-09">Ver</div>
          </div>
        </a>
      </div>
    </div>
  );
}
