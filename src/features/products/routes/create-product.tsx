import React from "react";
import TopSection from "@/components/ui/top-section";
import {
  Card,
  MultiSelect,
  MultiSelectItem,
  TextInput,
  Textarea,
} from "@tremor/react";
import { DollarSign } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CreateProduct: React.FC = () => {
  return (
    <div className="space-y-10">
      <TopSection
        title="Create new product"
        links={[
          {
            title: "Dashboard",
            href: "/dashboard",
          },
          {
            title: "Product",
            href: "/product",
          },
          {
            title: "Create",
          },
        ]}
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <div>
          <h1 className="text-xl font-bold">Details</h1>
          <p className="text-slate-500">Title, short description, image...</p>
        </div>

        <div className="space-y-5 rounded-xl border border-zinc-200/50 p-5 shadow md:col-span-2">
          <div>
            <TextInput placeholder="Product name" />
          </div>

          <div>
            <Textarea rows={10} placeholder="Sub details" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <div>
          <h1 className="text-xl font-bold">Properties</h1>
          <p className="text-slate-500">
            Additional functions and attributes...
          </p>
        </div>

        <Card className="space-y-5 md:col-span-2">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Product Code</Label>
              <Input placeholder="" />
            </div>
            <div className="space-y-2">
              <Label>Product SKU</Label>
              <Input placeholder="" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Quantity</Label>
              <Input placeholder="" />
            </div>
            <div className="space-y-2">
              <Label>Category</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Colors</Label>
              <MultiSelect>
                <MultiSelectItem value="purple">Purple</MultiSelectItem>
                <MultiSelectItem value="purple">Orange</MultiSelectItem>
                <MultiSelectItem value="purple">Green</MultiSelectItem>
                <MultiSelectItem value="purple">Yellow</MultiSelectItem>
                <MultiSelectItem value="purple">White</MultiSelectItem>
              </MultiSelect>
            </div>
            <div className="space-y-2">
              <Label>Sizes</Label>
              <MultiSelect>
                <MultiSelectItem value="purple">1</MultiSelectItem>
                <MultiSelectItem value="purple">2</MultiSelectItem>
                <MultiSelectItem value="purple">3</MultiSelectItem>
                <MultiSelectItem value="purple">4</MultiSelectItem>
                <MultiSelectItem value="purple">5</MultiSelectItem>
              </MultiSelect>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Tags</Label>
            <MultiSelect>
              <MultiSelectItem value="purple">Sport</MultiSelectItem>
              <MultiSelectItem value="purple">Magazine</MultiSelectItem>
              <MultiSelectItem value="purple">3</MultiSelectItem>
              <MultiSelectItem value="purple">4</MultiSelectItem>
              <MultiSelectItem value="purple">5</MultiSelectItem>
            </MultiSelect>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <div>
          <h1 className="text-xl font-bold">Price</h1>
          <p className="text-slate-500">Price related inputs</p>
        </div>

        <Card className="space-y-5 md:col-span-2">
          <div>
            <TextInput icon={DollarSign} placeholder="Regular price" />
          </div>

          <div>
            <TextInput icon={DollarSign} placeholder="Sale price" />
          </div>

          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">
              Tax included with product price
            </Label>
          </div>

          <div>
            <TextInput icon={DollarSign} placeholder="Tax(%)" />
          </div>
        </Card>
      </div>

      <div className="flex justify-end">
        <Button>Add Product</Button>
      </div>
    </div>
  );
};

export default CreateProduct;
