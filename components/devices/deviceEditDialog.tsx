"use client";

import { deviceEditProps } from "@/interfaces/device";
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
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SendHorizontal } from "lucide-react";
import { useState } from "react";

const apps = [
  {
    name: "Spotify",
    value: "spotify",
    icon: <SpotifyIcon />,
    editableContent: <></>,
  },
];

export const DeviceEditDialog = ({
  name,
  model,
  imei,
  app,
  contentLink,
  children,
}: deviceEditProps) => {
  const [dialogName, setDialogName] = useState<string>(name);
  const [dialogModel, setDialogModel] = useState<string>(model);
  const [dialogContentLink, setDialogContentLink] =
    useState<string>(contentLink);
  const [selectedApp, setSelectedApp] = useState<string>(app);

  const handleNameChange = (newName: string) => {
    setDialogName(newName);
  };

  const handleModelChange = (newModel: string) => {
    setDialogModel(newModel);
  };

  const handleAppChange = (newApp: string) => {
    setSelectedApp(newApp);
  };

  const handleContentLinkChange = (newContentLink: string) => {
    setDialogContentLink(newContentLink);
  };

  const handleSubmit = () => {
    console.log(name);
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
          <DialogTitle>Edit device configuration</DialogTitle>
          <DialogDescription>
            edit device data with your preferrences
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <div>
              <Label htmlFor="name" className="sr-only">
                Device name
              </Label>
              <Input
                id="name"
                value={dialogName}
                placeholder="name"
                onChange={(e) => {
                  handleNameChange(e.target.value);
                }}
              />
            </div>
            <div>
              <Label htmlFor="imei" className="sr-only">
                Device Imei
              </Label>
              <Input id="imei" value={imei} placeholder="imei" disabled />
            </div>
            <div>
              <Label htmlFor="model" className="sr-only">
                Device model
              </Label>
              <Input
                id="model"
                value={dialogModel}
                placeholder="model"
                onChange={(e) => handleModelChange(e.target.value)}
              />
            </div>
            <div>
              <Separator className="my-2" />
            </div>

            <div>
              <Select
                defaultValue={selectedApp}
                onValueChange={(value) => handleAppChange(value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select an application" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="inherit">Inherit from group</SelectItem>
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
            {selectedApp != "inherit" ? (
              <div>
                <Label htmlFor="contentLink" className="sr-only">
                  Device model
                </Label>
                <Input
                  id="contentLink"
                  value={dialogContentLink}
                  placeholder="content link"
                  onChange={(e) => handleContentLinkChange(e.target.value)}
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
