import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Column } from "@tanstack/react-table";
import Icon from "../ui/icon";
import clsx from "clsx";

type FacetFilterProps<TData, TValue> = {
  column?: Column<TData, TValue>;
  title?: string;
  options?: {
    label: string;
    value: string;
  }[];
};

const FacetFilter = <TData, TValue>({
  column,
  title,
  options,
}: FacetFilterProps<TData, TValue>) => {
  const selectedValues = new Set(column?.getFilterValue() as string[]);

  return (
    <Popover>
      <PopoverTrigger>
        <Button variant={"outline"}>{title}</Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] space-y-2 divide-y" align="start">
        <div className="space-y-2">
          {options?.map(({ value }) => {
            const isSelected = selectedValues.has(value);

            return (
              <div
                key={value}
                className="flex items-center space-x-2"
                onClick={() => {
                  if (isSelected) {
                    selectedValues.delete(value);
                  } else {
                    selectedValues.add(value);
                  }
                  const filterValues = Array.from(selectedValues);

                  column?.setFilterValue(
                    filterValues.length ? filterValues : undefined,
                  );
                }}
              >
                <div className="h-4 w-4 rounded border">
                  <Icon
                    name="Check"
                    className={clsx({
                      visible: isSelected,
                      hidden: !isSelected,
                    })}
                  />
                </div>
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  {value}
                </label>
              </div>
            );
          })}
        </div>

        {selectedValues.size > 0 && (
          <div
            className="cursor-pointer py-1 font-semibold"
            onClick={() => column?.setFilterValue(undefined)}
          >
            Remove Filter
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default FacetFilter;
