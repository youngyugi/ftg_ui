"use client";

import {
  DbDevice,
  deviceAddDialogProps,
  UpdateDevice,
} from "@/interfaces/device";
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
import { toast } from "sonner";
import { CircleCheck } from "lucide-react";
import { CircleX } from "lucide-react";
import axios from "axios";

export const DeviceAddDialog = ({
  children,
  groupId,
}: deviceAddDialogProps) => {
  const [imei, setImei] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const handleImeiChange = (newImei: string) => {
    setImei(newImei);
  };

  const handleSubmit = async () => {
    let selectedDevice: DbDevice = {
      id: 0,
      name: "",
      imei: "",
      app: "",
      contentLink: "",
      groupId: 0,
      status: false,
    };

    try {
      const response = await axios.get("/api/device");

      if (response.status === 200) {
        const wantedDevices: DbDevice[] = response.data.filter(
          (device: DbDevice) => device.imei === imei
        );

        wantedDevices.length > 0
          ? (selectedDevice = wantedDevices[0])
          : toast(
              <div className="flex">
                <CircleX size={20} className="mr-2" color={"red"} />
                <p>Din't found any device with this imei</p>
              </div>
            );
      }
    } catch (error) {
      console.error("Error fetching device data:", error);
    }

    try {
      console.log(selectedDevice);
      const data: UpdateDevice = {
        id: selectedDevice.id,
        groupId: groupId,
      };
      const response = await axios.patch("/api/device", data);
      response.status == 200
        ? toast(
            <div className="flex">
              <CircleCheck size={20} className="mr-2" color={"green"} />
              <p>Device successfuly added to group</p>
            </div>
          )
        : toast(
            <div className="flex">
              <CircleX size={20} className="mr-2" color={"red"} />
              <p>Error during add of device to group</p>
            </div>
          );
    } catch (error) {
      toast(
        <div className="flex">
          <CircleX size={20} className="mr-2" color={"red"} />
          <p>Error during add of device to group</p>
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
