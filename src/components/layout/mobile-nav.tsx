import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { docsConfig } from "./data/nav-data";
import { useState } from "react";
import Icon from "../ui/icon";
import Menu from "./component/menu";

const MobileNav = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="lg:hidden rounded-full p-2 hover:bg-black/5">
          <Icon name="Menu" size={25} />
        </button>
      </SheetTrigger>
      <SheetContent side={"left"} className="w-[300px] p-5">
        <div className="flex h-full flex-col justify-between">
          <div className="space-y-10">
            <div className="ml-3 flex items-center gap-1">
              <span className="font-semibold text-black">Mercury</span>
              <span className="font-semibold text-rose-600">App</span>
            </div>

            <div className="space-y-2">
              {docsConfig.sideNav.map((item) => (
                <Menu
                  key={item.url}
                  item={item}
                  onOpenChange={() => setOpen(false)}
                />
              ))}
            </div>
          </div>

          <div className="mt-auto space-y-2">
            {docsConfig.footerNav.map((item) => (
              <Menu
                key={item.url}
                item={item}
                onOpenChange={() => setOpen(false)}
              />
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
