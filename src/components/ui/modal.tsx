import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@tremor/react";
import React, { useState } from "react";

const Modal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setOpen(false);
      setLoading(false);
    }, 1000);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button>Open</Button>
      </DialogTrigger>
      <DialogContent className="rounded border-transparent p-4">
        <h1 className="font-inter text-xl font-bold">Delete</h1>

        <p className="font-inter">Are you sure want to delete 20 items?</p>

        <div className="flex justify-end gap-5">
          <Button
            loading={loading}
            onClick={handleClick}
            disabled={loading}
            color="amber"
          >
            Delete
          </Button>
          <DialogClose>
            <Button>Cancel</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
