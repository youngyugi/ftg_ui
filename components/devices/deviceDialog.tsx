"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { SidebarMenuSubButton } from "@/components/ui/sidebar";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SendHorizontal } from "lucide-react";
import { useState } from "react";

interface grouDialogProps {
  isSidebar: boolean;
  title: string;
  icon: React.ReactElement;
}

export const DeviceDialog = ({ isSidebar, title, icon }: grouDialogProps) => {
  const [name, setName] = useState<string>("");
  const [imei, setImei] = useState<string>("");

  const handleImeiChange = (imei: string) => {
    setImei(imei);
  };

  const handleNameChange = (name: string) => {
    setName(name);
  };

  const handleSubmit = () => {
    console.log(imei, name);

    //to dev api call
    //POST
    /* 
    {
      id: string (auto generated)
      name: string (from input label)
      imei: string (from input label)
    }
    */
  };

  return (
    <Dialog>
      {isSidebar ? (
        <SidebarMenuSubButton asChild>
          <DialogTrigger asChild>
            <a href="#">
              {icon}
              <span>{title}</span>
            </a>
          </DialogTrigger>
        </SidebarMenuSubButton>
      ) : (
        <DialogTrigger asChild>
          <Button variant="outline">Share</Button>
        </DialogTrigger>
      )}
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
            className="px-3"
            onClick={handleSubmit}>
            <span className="sr-only">send</span>
            <SendHorizontal />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
