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
import { groupDialogProps } from "@/interfaces/group";

export const GroupDialog = ({ isSidebar, title, icon }: groupDialogProps) => {
  const [groupName, setGroupName] = useState<string>("");

  const handleGroupNameChange = (name: string) => {
    setGroupName(name);
  };

  const handleSubmit = () => {
    console.log(groupName);
    /*
    implement api call to server.
    
    POST /api/v1/groups
    {
      "id": integer(auto generated),
      "name": string(from input label)
    }
    */
  };

  return (
    <Dialog>
      {isSidebar ? (
        <SidebarMenuSubButton asChild>
          <DialogTrigger asChild>
            <a>
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
