import TopSection from "@/components/ui/top-section";
import React from "react";
import OrderListTable from "./table-info";

const OrderList: React.FC = () => {
  return (
    <div className="space-y-5">
      <TopSection
        title="List"
        links={[
          {
            title: "Dashboard",
            href: "/dashboard",
          },
          {
            title: "User",
            href: "/user",
          },
          {
            title: "List",
          },
        ]}
      />

      <OrderListTable />
    </div>
  );
};

export default OrderList;
