import { DataTable } from "@/components/date-table";
import TopSection from "@/components/ui/top-section";
import React from "react";
import { invoiceData } from "./table-info/data";
import { columns } from "./table-info/column";

const InvoiceList: React.FC = () => {
  return (
    <div>
      <TopSection
        title="Invoice List"
        links={[
          {
            title: "Dashboard",
            href: "/dashboard",
          },
          {
            title: "Invoice",
            href: "/invoice",
          },
          {
            title: "List",
          },
        ]}
      />

      <DataTable field="invoiceId" data={invoiceData} columns={columns} />
    </div>
  );
};

export default InvoiceList;
