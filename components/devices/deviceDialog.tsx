"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { InsertDevice } from "@/interfaces/device";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SendHorizontal } from "lucide-react";
import { CircleCheck } from "lucide-react";
import { CircleX } from "lucide-react";
import { useState } from "react";
import { deviceDialogProps } from "@/interfaces/device";
import axios from "axios";

export const DeviceDialog = ({ children }: deviceDialogProps) => {
  const [name, setName] = useState<string>("");
  const [imei, setImei] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const handleImeiChange = (imei: string) => {
    setImei(imei);
  };

  const handleNameChange = (name: string) => {
    setName(name);
  };

  const handleSubmit = async () => {
    const data: InsertDevice = {
      name: name,
      imei: imei,
      app: "inherit",
      contentLink: "",
      groupId: null,
      status: false,
    };

    try {
      const response = await axios.post("/api/device", data);
      response.status == 200
        ? toast(
            <div className="flex">
              <CircleCheck size={20} className="mr-2" color={"green"} />
              <p>Device: {name} successfuly created</p>
            </div>
          )
        : toast(
            <div className="flex">
              <CircleX size={20} className="mr-2" color={"red"} />
              <p>Error during device creation</p>
            </div>
          );
    } catch (error) {
      toast(
        <div className="flex">
          <CircleX size={20} className="mr-2" color={"red"} />
          <p>Error during device creation</p>
        </div>
      );
    } finally {
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {children}
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add a device</DialogTitle>
          <DialogDescription>
            Create a new device that will be visualized into the list
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="groupName" className="sr-only">
              Device name
            </Label>
            <Input
              id="deviceName"
              placeholder="Device name"
              onChange={(e) => {
                handleNameChange(e.target.value);
              }}
            />
            <Input
              id="deviceIMEI"
              placeholder="Imei"
              onChange={(e) => {
                handleImeiChange(e.target.value);
              }}
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button
            type="submit"
            size="default"
            className="px-3 mb-2"
            onClick={handleSubmit}>
            <span className="sr-only">send</span>
            <SendHorizontal />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
