import React from "react";
import TopSection from "../../../components/ui/top-section";

const CreateProduct: React.FC = () => {
  return (
    <div className="space-y-10">
      <TopSection
        title="Create new product"
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
            title: "Create",
          },
        ]}
      />
    </div>
  );
};

export default CreateProduct;
