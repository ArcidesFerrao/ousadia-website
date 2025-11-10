"use client";

import { Product } from "@/lib/generated/prisma/client";
import { useEffect } from "react";

declare global {
  interface Window {
    jQuery: typeof $;
    $: typeof $;
  }
}

export default function Slick3Init({ item }: { item: Product }) {
  useEffect(() => {
    // Wait for jQuery and Slick to be loaded
    const initSlick = () => {
      if (typeof window !== "undefined" && window.$) {
        const $ = window.$;

        // Destroy existing slick instance if any
        $(".slick3").slick("unslick").off();

        // Initialize slick3
        $(".wrap-slick3").each(function () {
          $(this)
            .find(".slick3")
            .slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              fade: true,
              infinite: true,
              autoplay: false,
              autoplaySpeed: 6000,
              arrows: true,
              appendArrows: $(this).find(".wrap-slick3-arrows"),
              prevArrow:
                '<button class="arrow-slick3 prev-slick3"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
              nextArrow:
                '<button class="arrow-slick3 next-slick3"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
              dots: true,
              appendDots: $(this).find(".wrap-slick3-dots"),
              dotsClass: "slick3-dots",
              customPaging: function (slick, index: number) {
                const portrait = $(slick.$slides[index]).data("thumb");
                return (
                  '<img src="' +
                  portrait +
                  '" /><div class="slick3-dot-overlay"></div>'
                );
              },
            });
        });
      }
    };

    // Try to initialize immediately
    initSlick();

    // Also try after a short delay to ensure scripts are loaded
    const timeout = setTimeout(initSlick, 300);

    // Cleanup
    return () => {
      clearTimeout(timeout);
      if (typeof window !== "undefined" && window.$) {
        try {
          window.$(".slick3").slick("unslick");
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (e) {
          // Ignore errors during cleanup
        }
      }
    };
  }, [item]);

  return null;
}
