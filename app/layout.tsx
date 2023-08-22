import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import Head from "next/head";

import "@public/css/themes.css";
import "@public/vendors/fontawesome-pro-5/css/all.css";
import "@public/vendors/bootstrap-select/css/bootstrap-select.min.css";
import "@public/vendors/slick/slick.min.css";
import "@public/vendors/magnific-popup/magnific-popup.min.css";
import "@public/vendors/jquery-ui/jquery-ui.min.css";
import "@public/vendors/animate.css";
import "@public/vendors/mapbox-gl/mapbox-gl.min.css";

import Script from "next/script";

export const metadata: Metadata = {
  title: "Showroom",
  description: "Welcome to the Future of Furniture Showrooms!"
};
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/images/favicon.html" />
        <link rel="icon" href="/vendors/jquery.min.js" />
      </Head>
      <body className={poppins.className}>
        {children}

        <Script src="/vendors/jquery.min.js" />
        <Script src="/vendors/jquery-ui/jquery-ui.min.js" />
        <Script src="/vendors/bootstrap/bootstrap.bundle.js" />
        <Script src="/vendors/bootstrap-select/js/bootstrap-select.min.js" />
        <Script src="/vendors/slick/slick.min.js" />
        <Script src="/vendors/waypoints/jquery.waypoints.min.js" />
        <Script src="/vendors/counter/countUp.js" />
        <Script src="/vendors/magnific-popup/jquery.magnific-popup.min.js" />
        <Script src="/vendors/hc-sticky/hc-sticky.min.js" />
        <Script src="/vendors/jparallax/TweenMax.min.js" />
        <Script src="/vendors/mapbox-gl/mapbox-gl.js" />
        <Script src="/js/theme.js" />
        <Script src="/js/theme.js" />
      </body>
    </html>
  );
}
