"use client";

import { groupEditProps } from "@/interfaces/group";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SpotifyIcon } from "@/components/utils/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SendHorizontal } from "lucide-react";
import { useState } from "react";

export const GroupEditDialog = ({
  id,
  name,
  app,
  contentLink,
  children,
}: groupEditProps) => {
  const [groupName, setGroupName] = useState<string>(name);
  const [groupApp, setGroupApp] = useState<string>(app);
  const [groupContentLink, setGroupContentLink] = useState<string>(contentLink);

  const handleGroupNameChange = (newName: string) => {
    setGroupName(name);
  };

  const handleGroupAppChange = (newApp: string) => {
    setGroupApp(newApp);
  };

  const handleGroupContentLinkChange = (newContentLink: string) => {
    setGroupContentLink(newContentLink);
  };

  const handleSubmit = () => {
    console.log(groupName);
    /**
     * PUT /api/v1/groups
     * {
     *  "id": integer
     *  "name": string
     * }
     */
  };

  return (
    <Dialog>
      {children}
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit group data</DialogTitle>
          <DialogDescription>
            edit group data with your preferrences
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <div>
              <Label htmlFor="groupName" className="sr-only">
                Group name
              </Label>
              <Input
                id="groupName"
                value={groupName}
                placeholder="Group name"
                onChange={(e) => {
                  handleGroupNameChange(e.target.value);
                }}
              />
            </div>
            <div>
              <Select
                defaultValue={groupApp}
                onValueChange={(value) => handleGroupAppChange(value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select an application" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="spotify">
                    <div className="flex justify-center items-center">
                      <div className="mr-1">
                        <SpotifyIcon />
                      </div>
                      <p>Spotify</p>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            {groupApp != "none" ? (
              <div>
                <Label htmlFor="contentLink" className="sr-only">
                  Device model
                </Label>
                <Input
                  id="contentLink"
                  value={groupContentLink}
                  placeholder="content link"
                  onChange={(e) => handleGroupContentLinkChange(e.target.value)}
                />
              </div>
            ) : null}
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
