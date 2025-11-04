/* eslint-disable @next/next/no-css-tags */
import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Header } from "@/components/Header";
import { Cart } from "@/components/Cart";
import { Footer } from "@/components/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Veste Ousadia",
  description: "Marca moçambicana de vestuário",
  // icons: {
  //   icon: [
  //     { url: "/favicon.png" },
  //   ],
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="images/icons/favicon.png" />
        <link
          rel="stylesheet"
          type="text/css"
          href="vendor/bootstrap/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="fonts/font-awesome-4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="fonts/iconic/css/material-design-iconic-font.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="fonts/linearicons-v1.0.0/icon-font.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="vendor/animate/animate.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="vendor/css-hamburgers/hamburgers.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="vendor/animsition/css/animsition.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="vendor/select2/select2.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="vendor/daterangepicker/daterangepicker.css"
        />
        <link rel="stylesheet" type="text/css" href="vendor/slick/slick.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="vendor/MagnificPopup/magnific-popup.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="vendor/perfect-scrollbar/perfect-scrollbar.css"
        />
        <link rel="stylesheet" type="text/css" href="css/util.css" />
        <link rel="stylesheet" type="text/css" href="css/main.css" />
      </head>

      <body>
        <Header />
        <Cart />
        {children}
        <Footer />
        <Script src="vendor/jquery/jquery-3.2.1.min.js"></Script>
        <Script src="vendor/animsition/js/animsition.min.js"></Script>
        <Script src="vendor/bootstrap/js/popper.js"></Script>
        <Script src="vendor/bootstrap/js/bootstrap.min.js"></Script>
        <Script src="vendor/select2/select2.min.js"></Script>
        {/* <Script>
		$(".js-select2").each(function(){
			$(this).select2({
				minimumResultsForSearch: 20,
				dropdownParent: $(this).next('.dropDownSelect2')
			});
		})
	</Script> */}
        <Script src="vendor/daterangepicker/moment.min.js"></Script>
        <Script src="vendor/daterangepicker/daterangepicker.js"></Script>
        <Script src="vendor/slick/slick.min.js"></Script>
        <Script src="js/slick-custom.js"></Script>
        <Script src="vendor/parallax100/parallax100.js"></Script>
        {/* <Script>$('.parallax100').parallax100();</Script> */}
        <Script src="vendor/MagnificPopup/jquery.magnific-popup.min.js"></Script>
        {/* <Script>
		$('.gallery-lb').each(function() { // the containers for all your galleries
			$(this).magnificPopup({
		        delegate: 'a', // the selector for gallery item
		        type: 'image',
		        gallery: {
		        	enabled:true
		        },
		        mainClass: 'mfp-fade'
		    });
		});
	</Script> */}
        <Script src="vendor/isotope/isotope.pkgd.min.js"></Script>
        <Script src="vendor/sweetalert/sweetalert.min.js"></Script>
        {/* <Script>
		$('.js-addwish-b2').on('click', function(e){
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
		});
	
	</Script> */}
        <Script src="vendor/perfect-scrollbar/perfect-scrollbar.min.js"></Script>
        {/* <Script>
		$('.js-pscroll').each(function(){
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
		});
	</Script> */}
        <Script src="js/main.js"></Script>
      </body>
    </html>
  );
}
