import CTA from "@/components/vendor/CTA";
import FeaturedVendors from "@/components/vendor/FeaturedVendors";
import OtherVendors from "@/components/vendor/OtherVendors";
import OtherVendorsItem from "@/components/vendor/OtherVendorsItem";
import VendorHeader from "@/components/vendor/VendorHeader";
import Script from "next/script";

export default function Home() {
  return (
    <main className="pt-5" id="content">
      <VendorHeader />
      <FeaturedVendors />
      <OtherVendors />
      <CTA />
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
    </main>
  );
}
