"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function AppWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const initializeSliders = async () => {
      const $ = (await import("jquery")).default;
      await import("slick-carousel");
      console.log("Reinitializing jQuery for:", pathname);
      // Give the DOM a moment to load
      const timer = setTimeout(() => {
        try {
          $(".slick-initialized").slick("unslick");
        } catch (e) {
          console.error(e);
        }

        // Slick1 with custom logic
        $(".wrap-slick1").each(function () {
          const wrapSlick1 = $(this);
          const slick1 = $(this).find(".slick1");

          if (slick1.length === 0) {
            console.log("No .slick1 element found");
            return;
          }

          const itemSlick1 = $(slick1).find(".item-slick1");
          const layerSlick1 = $(slick1).find(".layer-slick1");
          const actionSlick1: NodeJS.Timeout[] = [];

          $(slick1).on("init", function () {
            const layerCurrentItem = $(itemSlick1[0]).find(".layer-slick1");

            for (let i = 0; i < actionSlick1.length; i++) {
              clearTimeout(actionSlick1[i]);
            }

            $(layerSlick1).each(function () {
              $(this).removeClass($(this).data("appear") + " visible-true");
            });

            for (let i = 0; i < layerCurrentItem.length; i++) {
              actionSlick1[i] = setTimeout(
                function (index) {
                  $(layerCurrentItem[index]).addClass(
                    $(layerCurrentItem[index]).data("appear") + " visible-true"
                  );
                },
                $(layerCurrentItem[i]).data("delay"),
                i
              );
            }
          });

          let showDot = false;
          if ($(wrapSlick1).find(".wrap-slick1-dots").length > 0) {
            showDot = true;
          }

          $(slick1).slick({
            pauseOnFocus: false,
            pauseOnHover: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            speed: 1000,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 6000,
            arrows: true,
            appendArrows: $(wrapSlick1),
            prevArrow:
              '<button class="arrow-slick1 prev-slick1"><i class="zmdi zmdi-caret-left"></i></button>',
            nextArrow:
              '<button class="arrow-slick1 next-slick1"><i class="zmdi zmdi-caret-right"></i></button>',
            dots: showDot,
            appendDots: $(wrapSlick1).find(".wrap-slick1-dots"),
            dotsClass: "slick1-dots",
            customPaging: function (slick, index) {
              const linkThumb = $(slick.$slides[index]).data("thumb");
              const caption = $(slick.$slides[index]).data("caption");
              return (
                '<img src="' +
                linkThumb +
                '">' +
                '<span class="caption-dots-slick1">' +
                caption +
                "</span>"
              );
            },
          });

          $(slick1).on("afterChange", function (event, slick, currentSlide) {
            const layerCurrentItem = $(itemSlick1[currentSlide]).find(
              ".layer-slick1"
            );

            for (let i = 0; i < actionSlick1.length; i++) {
              clearTimeout(actionSlick1[i]);
            }

            $(layerSlick1).each(function () {
              $(this).removeClass($(this).data("appear") + " visible-true");
            });

            for (let i = 0; i < layerCurrentItem.length; i++) {
              actionSlick1[i] = setTimeout(
                function (index) {
                  $(layerCurrentItem[index]).addClass(
                    $(layerCurrentItem[index]).data("appear") + " visible-true"
                  );
                },
                $(layerCurrentItem[i]).data("delay"),
                i
              );
            }
          });
        });

        // setTimeout(() => {
        //   $(".wrap-slick3").each(function () {
        //     const $wrap = $(this);
        //     const $slick3 = $wrap.find(".slick3");

        //     // Check if element exists and has items
        //     if (
        //       $slick3.length === 0 ||
        //       $slick3.find(".item-slick3").length === 0
        //     ) {
        //       return;
        //     }

        //     // Don't reinitialize if already initialized
        //     if ($slick3.hasClass("slick-initialized")) {
        //       return;
        //     }

        //     $slick3.slick({
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
        //   });
        // }, 300);

        console.log("✅ Sliders reinitialized");
      }, 50);

      $(".js-show-modal-search").on("click", function () {
        $(".modal-search-header").addClass("show-modal-search");
        $(this).css("opacity", "0");
      });

      $(".js-hide-modal-search").on("click", function () {
        $(".modal-search-header").removeClass("show-modal-search");
        $(".js-show-modal-search").css("opacity", "1");
      });

      $(".container-search-header").on("click", function (e) {
        e.stopPropagation();
      });

      $(".js-show-filter").on("click", function () {
        $(this).toggleClass("show-filter");
        $(".panel-filter").slideToggle(400);

        if ($(".js-show-search").hasClass("show-search")) {
          $(".js-show-search").removeClass("show-search");
          $(".panel-search").slideUp(400);
        }
      });

      $(".js-show-search").on("click", function () {
        $(this).toggleClass("show-search");
        $(".panel-search").slideToggle(400);

        if ($(".js-show-filter").hasClass("show-filter")) {
          $(".js-show-filter").removeClass("show-filter");
          $(".panel-filter").slideUp(400);
        }
      });
      /*==================================================================
    [ Fixed Header ]*/
      const headerDesktop = $(".container-menu-desktop");
      const wrapMenu = $(".wrap-menu-desktop");
      let posWrapHeader = 0;

      if ($(".top-bar").length > 0) {
        posWrapHeader = $(".top-bar").height() || 0;
      }

      if (($(window).scrollTop() || 0) > posWrapHeader) {
        $(headerDesktop).addClass("fix-menu-desktop");
        $(wrapMenu).css("top", 0);
      } else {
        $(headerDesktop).removeClass("fix-menu-desktop");
        $(wrapMenu).css("top", posWrapHeader - ($(window).scrollTop() || 0));
      }

      const handleScroll = function () {
        if (($(window).scrollTop() || 0) > posWrapHeader) {
          $(headerDesktop).addClass("fix-menu-desktop");
          $(wrapMenu).css("top", 0);
        } else {
          $(headerDesktop).removeClass("fix-menu-desktop");
          $(wrapMenu).css("top", posWrapHeader - ($(window).scrollTop() || 0));
        }
      };

      $(window).on("scroll", handleScroll);

      // Modal triggers
      $(document).on("click", ".js-show-modal1", function (e) {
        e.preventDefault();
        $(".js-modal1").addClass("show-modal1");
      });

      $(document).on("click", ".js-hide-modal1", function () {
        $(".js-modal1").removeClass("show-modal1");
      });

      //  Cleanup
      return () => {
        clearTimeout(timer);
        $(document).off("click", ".js-show-modal1");
        $(document).off("click", ".js-hide-modal1");
      };
    };

    let cleanUp: (() => void) | undefined;

    initializeSliders().then((cleanUpFn) => {
      cleanUp = cleanUpFn;
    });

    return () => {
      if (cleanUp) cleanUp();
    };
  }, [pathname, isClient]);

  return <>{children}</>;
}
