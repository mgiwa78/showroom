import Link from "next/link";
import React from "react";

const VendorHeader = () => {
  return (
    <Link href={"/"}>
      <h2 className="fs-sm-40 mb-4 text-center">Showroom Vendors</h2>
    </Link>
  );
};

export default VendorHeader;
