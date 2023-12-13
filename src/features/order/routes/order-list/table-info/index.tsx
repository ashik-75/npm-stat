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

import { orderList, orderStatus } from "./data";
import { formatDateAndTime, formatPrice } from "@/utils/helper";
import Pagination from "@/components/ui/pagination";
import { Order } from "./types";

export default function OrderListTable() {
  const [status, setStatus] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const defaultPageSize = 10;

  const startIndex = (currentPage - 1) * defaultPageSize;
  const endIndex = startIndex + defaultPageSize;

  const isSalesPersonSelected = (order: Order) =>
    status.includes(order.status) || status.length === 0;

  const filteredProducts = orderList.filter((item) =>
    isSalesPersonSelected(item),
  );

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
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Order</TableHeaderCell>
            <TableHeaderCell>Customer</TableHeaderCell>
            <TableHeaderCell>Date</TableHeaderCell>
            <TableHeaderCell>Price</TableHeaderCell>
            <TableHeaderCell>Quantity</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell></TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {filteredProducts.slice(startIndex, endIndex).map((order) => {
            const { date, time } = formatDateAndTime(order.createdAt);
            const price = formatPrice(parseFloat(order.price));
            const status = order.status;
            return (
              <TableRow key={order.createdAt}>
                <TableCell className="font-semibold">#00{order.id}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <img
                      className="h-12 w-12 rounded shadow"
                      src={order.customer.image}
                      alt=""
                    />
                    <div>
                      <h1 className="font-semibold">{order.customer.name}</h1>
                      <h5 className="text-zinc-400">{order.customer.email}</h5>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <p className="font-semibold">{date}</p>
                  <p>{time}</p>
                </TableCell>
                <TableCell>{price}</TableCell>
                <TableCell>{order.quantity}</TableCell>
                <TableCell>
                  <BadgeDelta
                    deltaType={
                      status === "completed"
                        ? "increase"
                        : status === "pending"
                          ? "unchanged"
                          : status === "refunded"
                            ? "moderateDecrease"
                            : "decrease"
                    }
                    size="xs"
                  >
                    {order.status}
                  </BadgeDelta>
                </TableCell>
                <TableCell>
                  <Button size={"xs"} variant={"secondary"} color="gray">
                    Show Details
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
        length={filteredProducts.length}
        defaultPageSize={defaultPageSize}
      />
    </Card>
  );
}
