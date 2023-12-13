import { useState } from "react";
import {
  Card,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  BadgeDelta,
  MultiSelect,
  MultiSelectItem,
  Button,
} from "@tremor/react";
import { userList, orderStatus } from "./data";
import Pagination from "@/components/ui/pagination";
import { User } from "./types";

export default function UserListTable() {
  const [status, setStatus] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const defaultPageSize = 10;

  const startIndex = (currentPage - 1) * defaultPageSize;
  const endIndex = startIndex + defaultPageSize;

  const isSalesPersonSelected = (product: User) =>
    status.includes(product.status) || status.length === 0;

  const filteredUsers = userList.filter((item) => isSalesPersonSelected(item));

  return (
    <Card>
      <MultiSelect
        onValueChange={(value) => {
          setStatus(value);
          setCurrentPage(1);
        }}
        placeholder="Product status..."
        className="max-w-xs"
      >
        {orderStatus.map((st) => (
          <MultiSelectItem key={st.value} value={st.value}>
            {st.value}
          </MultiSelectItem>
        ))}
      </MultiSelect>

      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Id</TableHeaderCell>
            <TableHeaderCell>Customer</TableHeaderCell>
            <TableHeaderCell>Phone</TableHeaderCell>
            <TableHeaderCell>Company</TableHeaderCell>
            <TableHeaderCell>Role</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell></TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {filteredUsers.slice(startIndex, endIndex).map((user) => {
            const { status, phone, name, company, id, role, image, email } =
              user || {};
            return (
              <TableRow key={phone}>
                <TableCell>#00{id}</TableCell>
                <TableCell>
                  {" "}
                  <div className="flex items-center gap-2">
                    <img
                      className="h-12 w-12 rounded shadow"
                      src={image}
                      alt=""
                    />
                    <div>
                      <h1 className="font-semibold">{name}</h1>
                      <h5 className="text-zinc-400">{email}</h5>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{phone}</TableCell>
                <TableCell>{company}</TableCell>
                <TableCell>{role}</TableCell>
                <TableCell>
                  <BadgeDelta
                    deltaType={
                      status === "active"
                        ? "increase"
                        : status === "pending"
                          ? "unchanged"
                          : status === "rejected"
                            ? "moderateDecrease"
                            : "decrease"
                    }
                  >
                    {status}
                  </BadgeDelta>
                </TableCell>
                <TableCell>
                  <Button size="xs" variant="secondary" color="gray">
                    Show More
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <Pagination
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        length={filteredUsers.length}
        defaultPageSize={defaultPageSize}
      />
    </Card>
  );
}
