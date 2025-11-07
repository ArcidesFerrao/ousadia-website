"use client";
import React, { useEffect, useState } from "react";
// import $ from "jquery";
// import "slick-carousel";
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
        if ($(".wrap-slick1").length) {
          try {
            $(".slick-initialized").slick("unslick");
            $(".wrap-slick1 .slick1").slick();
            $(".wrap-slick2 .slick2").slick();
            console.log("✅ Slick sliders reinitialized");
          } catch (e) {
            console.error(e);
          }
        }
      }, 300);
      // Modal triggers
      $(document).on("click", ".js-show-modal1", function (e) {
        e.preventDefault();
        $(".js-modal1").addClass("show-modal1");
      });

      $(document).on("click", ".js-hide-modal1", function () {
        $(".js-modal1").removeClass("show-modal1");
      });
      // Cleanup
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
