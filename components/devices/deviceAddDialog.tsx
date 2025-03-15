"use client";

import { deviceAddDialogProps } from "@/interfaces/device";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SendHorizontal } from "lucide-react";
import { useState } from "react";

export const DeviceAddDialog = ({ children }: deviceAddDialogProps) => {
  const [imei, setImei] = useState<string>("");

  const handleImeiChange = (newImei: string) => {
    setImei(newImei);
  };

  const handleSubmit = () => {
    console.log(imei);
    /**
     * PUT /api/v1/devices
     * {
     *  "imei": string
     * }
     */
  };
  return (
    <Dialog>
      {children}
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add device to group</DialogTitle>
          <DialogDescription>
            insert a device imei to add it to the group
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="imei" className="sr-only">
              Imei number
            </Label>
            <Input
              id="imei"
              value={imei}
              placeholder="Imei number"
              onChange={(e) => {
                handleImeiChange(e.target.value);
              }}
            />
          </div>
        </div>
        <DialogFooter>
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
