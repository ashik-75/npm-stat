import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { docsConfig } from "../data/nav-data";
import { ScrollArea } from "@/components/ui/scroll-area";

const SearchBar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(true);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div className="flex-1">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button
            onClick={() => setOpen(true)}
            className="hover: rounded-full p-2 hover:bg-black/5"
          >
            <Icon name="Search" />
          </button>
        </DialogTrigger>
        <DialogContent className="p-0 laptop:max-w-[425px]">
          <Command className="rounded-lg border shadow-md">
            <CommandInput placeholder="Search ..." />
            <CommandList>
              <ScrollArea className="h-72">
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Pages">
                  {docsConfig.sideNav.map((nav) => (
                    <CommandItem
                      key={nav.url}
                      className="flex cursor-pointer flex-col items-start gap-1"
                      onSelect={() => {
                        setOpen(false);
                        navigate(nav.url);
                      }}
                    >
                      <span>{nav.title}</span>
                      <div className="text-xs">{nav.url}</div>
                    </CommandItem>
                  ))}
                </CommandGroup>

                <CommandGroup heading="Personal">
                  {docsConfig.footerNav.map((nav) => (
                    <CommandItem
                      key={nav.url}
                      className="flex cursor-pointer flex-col items-start gap-1"
                      onSelect={() => {
                        setOpen(false);
                        navigate(nav.url);
                      }}
                    >
                      <span>{nav.title}</span>
                      <div className="text-xs">{nav.url}</div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </ScrollArea>
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SearchBar;
