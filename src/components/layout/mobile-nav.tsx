import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { docsConfig } from "./data/nav-data";
import { useState } from "react";
import Icon from "../ui/icon";
import Menu from "./component/menu";
import { ScrollArea } from "../ui/scroll-area";

const MobileNav = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="lg:hidden rounded-full hover:bg-black/5">
          <Icon name="Menu" size={25} />
        </button>
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="w-[300px] bg-neutral-50 p-0  text-slate-600"
      >
        <div className="flex h-full flex-col justify-between">
          <div className="space-y-5 ">
            <div className="ml-3 flex items-center gap-1 p-5">
              <span className="font-bold uppercase text-black">X - Trail</span>
            </div>

            <ScrollArea className="h-[70dvh] ">
              <div className="space-y-2 px-5">
                {docsConfig.sideNav.map((item) => (
                  <Menu
                    key={item.url}
                    item={item}
                    onOpenChange={() => setOpen(false)}
                  />
                ))}
              </div>
            </ScrollArea>
          </div>

          <div className="mt-auto space-y-2 p-5">
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
