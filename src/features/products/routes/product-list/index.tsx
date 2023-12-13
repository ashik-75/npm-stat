import { Button } from "@/components/ui/button";
import React from "react";
import TopSection from "@/components/ui/top-section";
import ProductListTable from "./table-info";

const ProductList: React.FC = () => {
  return (
    <div className="space-y-5 font-inter">
      <div className="flex items-center justify-between">
        <TopSection
          title="List"
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
              title: "List",
            },
          ]}
        />

        <Button color="">Add Product</Button>
      </div>

      <ProductListTable />
    </div>
  );
};

export default ProductList;
