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

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SendHorizontal } from "lucide-react";
import { CircleCheck } from "lucide-react";
import { CircleX } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { groupDialogProps, InsertGroup } from "@/interfaces/group";
import axios from "axios";

export const GroupDialog = ({ children }: groupDialogProps) => {
  const [groupName, setGroupName] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const handleGroupNameChange = (name: string) => {
    setGroupName(name);
  };

  const handleSubmit = async () => {
    const data: InsertGroup = {
      name: groupName,
      app: "none",
      contentLink: "",
    };

    try {
      const response = await axios.post("/api/group", data);
      response.status == 200
        ? toast(
            <div className="flex">
              <CircleCheck size={20} className="mr-2" color={"green"} />
              <p>Group: {groupName} successfuly created</p>
            </div>
          )
        : toast(
            <div className="flex">
              <CircleX size={20} className="mr-2" color={"red"} />
              <p>Error during group creation</p>
            </div>
          );
    } catch (error) {
      toast(
        <div className="flex">
          <CircleX size={20} className="mr-2" color={"red"} />
          <p>Error during group creation</p>
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
          <DialogTitle>Add a group</DialogTitle>
          <DialogDescription>
            Create a new group that will be added into the group list
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="groupName" className="sr-only">
              Group name
            </Label>
            <Input
              id="groupName"
              defaultValue=""
              placeholder="Group name"
              onChange={(e) => {
                handleGroupNameChange(e.target.value);
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
