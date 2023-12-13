import Icon from "@/components/ui/icon";
import { Button, Divider, Select, SelectItem } from "@nextui-org/react";
import { Badge, ListItem } from "@tremor/react";
import clsx from "clsx";
import { Star, StarHalf } from "lucide-react";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { animals } from "./product";

const ProductDetails: React.FC = () => {
  const [color, setColor] = useState("");
  const [qty, setQty] = useState(1);

  return (
    <div className="space-y-10">
      <div className="flex justify-between">
        <Link
          to={"/product"}
          className="flex items-center gap-3 rounded px-4 py-2 font-bold hover:bg-slate-100"
        >
          <Icon name="ArrowLeft" />
          <span>Back</span>
        </Link>
        <div className="space-x-5">
          <Button color="secondary">Draft</Button>
          <Button color="primary">Published</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <img
            className="h-[500px] w-full rounded-xl object-cover object-center shadow"
            src="https://source.unsplash.com/unpaired-green-leather-shoe-on-top-of-white-box-KStSiM1UvPw"
          />
        </div>
        <div className="space-y-5 py-5">
          <Badge className="font-bold">NEW</Badge>
          <p className="text-sm font-bold text-green-500">IN STOCK</p>
          <h1 className="text-2xl font-bold text-zinc-600">
            Foundations Matte Flip Flop
          </h1>
          <div className="flex gap-2">
            <Star fill="#d39c06" color="#dfa608" />
            <Star fill="#d39c06" color="#dfa608" />
            <Star fill="#d39c06" color="#dfa608" />
            <StarHalf fill="#d39c06" color="#dfa608" />
            <div className="text-sm text-zinc-500">(12.4k reviews)</div>
            {/* <Icon name="StarHalf" color="#d39c06" /> */}
          </div>
          <h1 className="text-2xl font-bold text-zinc-600">$99.99</h1>
          <p className="text-zinc-500">
            Featuring the original ripple design inspired by Japanese bullet
            trains, the Nike Air Max 97 lets you push your style full-speed
            ahead.
          </p>
          <Divider className="bg-zinc-100" />

          <div>
            <ListItem>
              <span className="font-semibold">Color</span>
              <div className="flex gap-3 px-2">
                {["red", "zinc", "orange"].map((cl) => (
                  <button
                    onClick={() => setColor(cl)}
                    className={clsx("h-5 w-5 rounded-full", `bg-${cl}-600`, {
                      " ring-2 ring-orange-400 ring-offset-2": cl === color,
                    })}
                    key={cl}
                  />
                ))}
              </div>
            </ListItem>
            <ListItem>
              <span>Size</span>
              <div className="w-[100px]">
                <Select
                  labelPlacement="outside"
                  variant="bordered"
                  size="sm"
                  className="max-w-xs"
                >
                  {animals.map((size) => (
                    <SelectItem key={size.value} value={size.value}>
                      {size.label}
                    </SelectItem>
                  ))}
                </Select>
                <div className="mt-2 text-right text-xs underline underline-offset-1">
                  size chart
                </div>
              </div>
            </ListItem>
            <ListItem>
              <span className="font-semibold">Quantity</span>

              <div className="space-x-3 rounded border p-1">
                <button
                  className="py-.5 rounded bg-slate-100 px-2 text-xl"
                  disabled={qty === 1}
                  onClick={() => setQty((prev) => prev - 1)}
                >
                  {" "}
                  -{" "}
                </button>
                <span>{qty}</span>
                <button
                  className="py-.5 rounded bg-slate-100 px-2 text-xl"
                  disabled={qty === 10}
                  onClick={() => setQty((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
            </ListItem>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
