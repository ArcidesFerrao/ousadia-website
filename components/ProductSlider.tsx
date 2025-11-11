"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";
import Slider, { Settings } from "react-slick";

type ImageItem = {
  src: string;
  dataThumb: string;
};

export default function ProductSlider({ images }: { images: ImageItem[] }) {
  const settings: Settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slick-gallery",
  };
  return (
    <div className="gallery-lb max-w-fit">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} data-thumb={image.dataThumb}>
            <div>
              <Image
                src={image.src}
                alt="item-image"
                width={500}
                height={600}
              />
              <a
                href={image.src}
                className="flex-c-m size-108 items-center how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
              >
                <i className="fa fa-expand" />
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

// const PrevArrow = (props: any) => (
//   <button {...props} className="arrow-slick3 prev-slick3 slick-prev">
//     <i className="fa fa-angle-left" aria-hidden="true"></i>
//   </button>
// );

// const NextArrow = (props: any) => (
//   <button {...props} className="arrow-slick3 next-slick3 slick-next">
//     <i className="fa fa-angle-right" aria-hidden="true"></i>
//   </button>
// );
