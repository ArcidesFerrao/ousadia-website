import type { Metadata } from "next";
import "./globals.css";
import "@/public/vendor/bootstrap/css/bootstrap.min.css";
import "@/public/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "@/public/fonts/iconic/css/material-design-iconic-font.min.css";
import "@/public/fonts/linearicons-v1.0.0/icon-font.min.css";
import "@/public/vendor/animate/animate.css";
import "@/public/vendor/css-hamburgers/hamburgers.min.css";
import "@/public/vendor/animsition/css/animsition.min.css";
import "@/public/vendor/select2/select2.min.css";
import "@/public/vendor/daterangepicker/daterangepicker.css";
import "@/public/vendor/slick/slick.css";
import "@/public/vendor/MagnificPopup/magnific-popup.css";
import "@/public/vendor/perfect-scrollbar/perfect-scrollbar.css";
import "@/public/css/util.css";
import "@/public/css/main.css";

import Script from "next/script";
import { Header } from "@/components/Header";
import { Cart } from "@/components/Cart";
import { Footer } from "@/components/Footer";
import AppWrapper from "@/lib/AppWrapper";

export const metadata: Metadata = {
  title: "Veste Ousadia",
  description: "Marca moçambicana de vestuário",
  icons: {
    icon: [{ url: "/favicon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppWrapper>
          <Header />
          <Cart />
          {children}
          <Footer />
        </AppWrapper>
        <Script
          src="/vendor/jquery/jquery-3.2.1.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/vendor/animsition/js/animsition.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/vendor/bootstrap/js/popper.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/vendor/bootstrap/js/popper.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/vendor/bootstrap/js/bootstrap.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/vendor/select2/select2.min.js"
          strategy="beforeInteractive"
        />
        <Script
          strategy="beforeInteractive"
          id="init-select2"
          dangerouslySetInnerHTML={{
            __html: `console.log("Select2 init script loaded)
            
            $(document).ready(function() {
              console.log("Initializing select2);
              
              $(".js-select2").each(function(){
                $(this).select2({
                  minimumResultsForSearch: 20,
                  dropdownParent: $(this).next('.dropDownSelect2')
                  });
                });
                });
                `,
          }}
        />
        <Script
          id="modal-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `$(".js-select2").each(function(){
              $(this).select2({
                minimumResultsForSearch: 20,
                dropdownParent: $(this).next('.dropDownSelect2')
                });
                })`,
          }}
        />
        <Script
          src="/vendor/daterangepicker/moment.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/vendor/daterangepicker/daterangepicker.js"
          strategy="beforeInteractive"
        />
        <Script src="/vendor/slick/slick.min.js" strategy="afterInteractive" />
        <Script src="/vendor/slick/slick.js" strategy="afterInteractive" />
        <Script src="/js/slick-custom.js" strategy="afterInteractive" />
        <Script
          src="/vendor/parallax100/parallax100.js"
          strategy="beforeInteractive"
        />
        <Script
          id="parallax100"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `$('.parallax100').parallax100();`,
          }}
        />
        <Script
          src="/vendor/MagnificPopup/jquery.magnific-popup.min.js"
          strategy="beforeInteractive"
        />
        <Script
          id="gallery-lb"
          dangerouslySetInnerHTML={{
            __html: `$('.gallery-lb').each(function() { // the containers for all your galleries
              $(this).magnificPopup({
                    delegate: 'a', // the selector for gallery item
                    type: 'image',
                    gallery: {
                      enabled:true
                    },
                    mainClass: 'mfp-fade'
                });
            });`,
          }}
        />
        <Script
          src="/vendor/isotope/isotope.pkgd.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/vendor/sweetalert/sweetalert.min.js"
          strategy="beforeInteractive"
        />
        <Script
          id="js-addwish-b2"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `$('.js-addwish-b2').on('click', function(e){
        e.preventDefault();
        });
        
        $('.js-addwish-b2').each(function(){
          var nameProduct = $(this).parent().parent().find('.js-name-b2').html();
          $(this).on('click', function(){
            swal(nameProduct, "is added to wishlist !", "success");
            
            $(this).addClass('js-addedwish-b2');
            $(this).off('click');
            });
            });
            
            $('.js-addwish-detail').each(function(){
              var nameProduct = $(this).parent().parent().parent().find('.js-name-detail').html();

              $(this).on('click', function(){
                swal(nameProduct, "is added to wishlist !", "success");
                
                $(this).addClass('js-addedwish-detail');
				$(this).off('click');
			});
		});
    
    
		$('.js-addcart-detail').each(function(){
			var nameProduct = $(this).parent().parent().parent().parent().find('.js-name-detail').html();
			$(this).on('click', function(){
				swal(nameProduct, "is added to cart !", "success");
        });
        });`,
          }}
        />
        <Script
          src="/vendor/perfect-scrollbar/perfect-scrollbar.min.js"
          strategy="beforeInteractive"
        />
        <Script
          id="js-pscroll"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `$('.js-pscroll').each(function(){
            $(this).css('position','relative');
            $(this).css('overflow','hidden');
            var ps = new PerfectScrollbar(this, {
              wheelSpeed: 1,
              scrollingThreshold: 1000,
              wheelPropagation: false,
              });
              
              $(window).on('resize', function(){
                ps.update();
                })
            });`,
          }}
        />
        <Script src="/js/main.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
