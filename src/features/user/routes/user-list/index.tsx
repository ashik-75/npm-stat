import TopSection from "@/components/ui/top-section";
import React from "react";
import UserListTable from "./table-info";

const UserList: React.FC = () => {
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

      <UserListTable />
    </div>
  );
};

export default UserList;
