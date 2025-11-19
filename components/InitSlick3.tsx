"use client";

import { Product } from "@prisma/client";
// import { Product } from "@/lib/generated/prisma/client";
import { useEffect } from "react";
// import "slick-carousel";

declare global {
  interface Window {
    jQuery: typeof $;
    $: typeof $;
  }
}

export default function InitSlick3({ item }: { item: Product }) {
  useEffect(() => {
    if (!item) return;
    let destroyed = false;
    const loadSlick = async () => {
      if (typeof window === "undefined" || destroyed) return;
      window.jQuery = $;
      window.$ = $;

      await import("slick-carousel");

      const retryInit = (attempt = 0) => {
        const slickContainer = $(".wrap-slick3 .slick3");
        if (destroyed) return;

        if (slickContainer.length === 0) {
          if (attempt < 10) {
            setTimeout(() => retryInit(attempt + 1), 100);
          } else {
            console.warn("Slick 3 never found");
          }
          return;
        }
        if (slickContainer.hasClass("slick-initialized")) {
          slickContainer.slick("unslick");
        }

        slickContainer.slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          infinite: true,
          autoplay: false,
          autoplaySpeed: 6000,

          arrows: true,
          appendArrows: $(".wrap-slick3-arrows"),
          prevArrow:
            '<button class="arrow-slick3 prev-slick3"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
          nextArrow:
            '<button class="arrow-slick3 next-slick3"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',

          dots: true,
          appendDots: $(".wrap-slick3-dots"),
          dotsClass: "slick3-dots",
          customPaging: function (slick, index) {
            const portrait = $(slick.$slides[index]).data("thumb");
            return (
              '<img src=" ' +
              portrait +
              ' "/><div class="slick3-dot-overlay"></div>'
            );
          },
        });
      };

      retryInit();
    };

    loadSlick();
    return () => {
      destroyed = true;
      try {
        $(".slick3").slick("unslick");
      } catch (e) {
        console.error(e);
      }
    };
  }, [item]);
  return null;
}

//   if (typeof $.fn.slick !== "function") {
//     console.error("Slick not loaded properly");
//     return;
//   }

//   $(".wrap-slick3").each(function () {
//     const wrap = $(this);
//     const slick3 = wrap.find(".slick3");
//     if (slick3.hasClass("slick-initialized")) {
//       slick3.slick("unslick");
//     }

//     slick3.slick({
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       fade: true,
//       infinite: true,
//       autoplay: false,
//       autoplaySpeed: 6000,

//       arrows: true,
//       appendArrows: wrap.find(".wrap-slick3-arrows"),
//       prevArrow:
//         '<button class="arrow-slick3 prev-slick3"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
//       nextArrow:
//         '<button class="arrow-slick3 next-slick3"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',

//       dots: true,
//       appendDots: wrap.find(".wrap-slick3-dots"),
//       dotsClass: "slick3-dots",
//       customPaging: function (slick, index) {
//         const portrait = $(slick.$slides[index]).data("thumb");
//         return (
//           '<img src=" ' +
//           portrait +
//           ' "/><div class="slick3-dot-overlay"></div>'
//         );
//       },
//     });
//   });
// };

// $(".wrap-slick3").each(function () {
//   $(this)
//     .find(".slick3")
//     .slick({
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       fade: true,
//       infinite: true,
//       autoplay: false,
//       autoplaySpeed: 6000,

//       arrows: true,
//       appendArrows: $(this).find(".wrap-slick3-arrows"),
//       prevArrow:
//         '<button class="arrow-slick3 prev-slick3"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
//       nextArrow:
//         '<button class="arrow-slick3 next-slick3"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',

//       dots: true,
//       appendDots: $(this).find(".wrap-slick3-dots"),
//       dotsClass: "slick3-dots",
//       customPaging: function (slick, index) {
//         const portrait = $(slick.$slides[index]).data("thumb");
//         return (
//           '<img src=" ' +
//           portrait +
//           ' "/><div class="slick3-dot-overlay"></div>'
//         );
//       },
//     });
// });
