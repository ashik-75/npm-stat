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
} from "@tremor/react";
import { Product } from "./types";
import { productListData, productStatus } from "./data";
import { formatDateAndTime, formatPrice } from "@/utils/helper";
import Pagination from "@/components/ui/pagination";
import Icon from "@/components/ui/icon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/modal";
import { useNavigate } from "react-router-dom";

export default function ProductListTable() {
  const [status, setStatus] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const defaultPageSize = 10;

  const startIndex = (currentPage - 1) * defaultPageSize;
  const endIndex = startIndex + defaultPageSize;

  const isSalesPersonSelected = (product: Product) =>
    status.includes(product.status) || status.length === 0;

  const filteredProducts = productListData.filter((item) =>
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
        {productStatus.map((st) => (
          <MultiSelectItem key={st.value} value={st.value}>
            {st.value}
          </MultiSelectItem>
        ))}
      </MultiSelect>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Id</TableHeaderCell>
            <TableHeaderCell>Product</TableHeaderCell>
            <TableHeaderCell>Created At</TableHeaderCell>
            <TableHeaderCell>Price</TableHeaderCell>
            <TableHeaderCell>stock</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell></TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {filteredProducts.slice(startIndex, endIndex).map((item) => {
            const { date, time } = formatDateAndTime(item.createdAt);
            const price = formatPrice(parseFloat(item.price));
            const status = item.status;
            return (
              <TableRow key={item.title}>
                <TableCell className="font-semibold">#00{item.id}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <img
                      className="h-12 w-12 rounded shadow"
                      src={item.image}
                      alt=""
                    />
                    <div>
                      <h1 className="font-semibold">{item.title}</h1>
                      <h5 className="text-zinc-400">{item.category}</h5>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <p className="font-semibold">{date}</p>
                  <p>{time}</p>
                </TableCell>
                <TableCell>{price}</TableCell>
                <TableCell>{item.stock}</TableCell>
                <TableCell>
                  <BadgeDelta
                    deltaType={
                      status === "published" ? "increase" : "unchanged"
                    }
                    size="xs"
                  >
                    {item.status}
                  </BadgeDelta>
                </TableCell>
                <TableCell>
                  <TableAction id={item.id} />
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

const TableAction: React.FC<{ id: string }> = ({ id }) => {
  const navigate = useNavigate();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <Icon name="MoreHorizontal" className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="font-inter" align="end">
        <DropdownMenuItem
          className="flex gap-2"
          onClick={() => navigate(`/product/${id}`)}
        >
          <Icon name="Eye" /> View
        </DropdownMenuItem>

        <Modal>
          <div className="flex w-full gap-2 rounded px-2 py-1 hover:bg-slate-100">
            <Icon name="FileEdit" /> Edit
          </div>
        </Modal>

        <DropdownMenuItem className="flex gap-2">
          <Icon name="Trash" /> Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
