import React from "react";
import TopSection from "../../../components/ui/top-section";

const ProductDetails: React.FC = () => {
  return (
    <div>
      <TopSection
        title="Product Details"
        links={[
          {
            title: "Dashboard",
            href: "/dashboard",
          },
          {
            title: "Product",
            href: "/product",
          },
          {
            title: "Details",
          },
        ]}
      />
    </div>
  );
};

export default ProductDetails;
