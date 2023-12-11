import { Input } from "../ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import Icon from "../ui/icon";
import { Table } from "@tanstack/react-table";
import FacetFilter from "./facet-filter";
import { InvoiceStatus } from "@/features/invoice/routes/list/table-info/data";

type ToolbarType<TData> = {
  table: Table<TData>;
  field: string;
};

const Toolbar = <TData,>({ table, field }: ToolbarType<TData>) => {
  return (
    <div className="flex items-center py-4">
      <div className="flex gap-5">
        <Input
          placeholder={`Filter ${field} ...`}
          value={(table.getColumn(field)?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn(field)?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        {table.getColumn("status") && (
          <FacetFilter
            title="Status"
            column={table.getColumn("status")}
            options={InvoiceStatus}
          />
        )}
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="ml-auto">
            Columns <Icon name="ChevronDown" className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {table
            .getAllColumns()
            .filter((column) => column.getCanHide())
            .map((column) => {
              return (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              );
            })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Toolbar;
