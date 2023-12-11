import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Invoice } from "./types";
import { formatDateAndTime } from "@/utils/helper";
import clsx from "clsx";

export const columns: ColumnDef<Invoice>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "invoiceId",
    header: "Customer",
    cell: ({ row }) => {
      const title = row.original.title;
      const invoiceId = row.original.invoiceId;

      return (
        <div className="capitalize">
          <p>{title}</p>
          <p className="font-semibold">{invoiceId}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <span
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex cursor-pointer items-center gap-2 font-bold"
        >
          <span>Created At</span>
          <Icon
            name={column.getIsSorted() === "asc" ? "ArrowDown" : "ArrowUp"}
            className="ml-2 h-4 w-4"
          />
        </span>
      );
    },
    cell: ({ row }) => {
      const { date, time } = formatDateAndTime(row.getValue("createdAt"));

      return (
        <div className=" font-medium">
          <p>{date}</p>
          <p>{time}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "due",
    header: ({ column }) => (
      <span
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="flex cursor-pointer items-center gap-2 font-bold"
      >
        <span>Due</span>
        <Icon
          name={column.getIsSorted() === "asc" ? "ArrowDown" : "ArrowUp"}
          className="ml-2 h-4 w-4"
        />
      </span>
    ),
    cell: ({ row }) => {
      const { date, time } = formatDateAndTime(row.getValue("due"));

      return (
        <div className=" font-medium">
          <p>{date}</p>
          <p>{time}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <span
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="flex cursor-pointer items-center gap-2 font-bold"
      >
        <span>Price</span>
        <Icon
          name={column.getIsSorted() === "asc" ? "ArrowDown" : "ArrowUp"}
          className="ml-2 h-4 w-4"
        />
      </span>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "quantity",
    header: ({ column }) => (
      <span
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="flex cursor-pointer items-center gap-2 font-bold"
      >
        <span>Quantity</span>
        <Icon
          name={column.getIsSorted() === "asc" ? "ArrowDown" : "ArrowUp"}
          className="ml-2 h-4 w-4"
        />
      </span>
    ),
    cell: ({ row }) => {
      const quantity = parseFloat(row.getValue("quantity"));

      return <div className=" font-medium">{quantity}</div>;
    },
  },
  {
    accessorKey: "status",
    // id: "status",
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    header: ({ column }) => (
      <span
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="flex cursor-pointer items-center gap-2 font-bold"
      >
        <span>Status</span>
        <Icon
          name={column.getIsSorted() === "asc" ? "ArrowDown" : "ArrowUp"}
          className="ml-2 h-4 w-4"
        />
      </span>
    ),
    cell: ({ row }) => {
      const status: string = row.getValue("status");

      return (
        <div
          className={clsx(
            " inline-block rounded px-1.5 py-1 text-xs font-medium capitalize",
            {
              "bg-pink-600 text-white": status === "overdue",
              "bg-teal-800 text-white": status === "paid",
              "bg-yellow-600 text-white": status === "pending",
            },
          )}
        >
          {status}
        </div>
      );
    },
  },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const invoice = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <Icon name="MoreHorizontal" className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(invoice.invoiceId)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
