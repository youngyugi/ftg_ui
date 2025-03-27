"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import { SendHorizontal } from "lucide-react";
import { CircleCheck } from "lucide-react";
import { CircleX } from "lucide-react";
import { deleteDialogProps } from "@/interfaces/utils";
import { toast } from "sonner";
import axios from "axios";
import { UpdateDevice } from "@/interfaces/device";

export const DeleteDialog = ({
  children,
  data,
  url,
  type,
}: deleteDialogProps) => {
  const handleSubmit = async () => {
    if (type === "delete") {
      try {
        const response = await axios.delete(url, { data });
        response.status == 200
          ? toast(
              <div className="flex">
                <CircleCheck size={20} className="mr-2" color={"green"} />
                <p>Item deleted</p>
              </div>
            )
          : toast(
              <div className="flex">
                <CircleX size={20} className="mr-2" color={"red"} />
                <p>Error during delete of item</p>
              </div>
            );
      } catch (error) {
        toast(
          <div className="flex">
            <CircleX size={20} className="mr-2" color={"red"} />
            <p>Error during delete of item</p>
          </div>
        );
      }
    } else if (type === "update") {
      try {
        const newData: UpdateDevice = {
          id: data.id,
          groupId: null,
        };
        const response = await axios.patch(url, newData);
        response.status == 200
          ? toast(
              <div className="flex">
                <CircleCheck size={20} className="mr-2" color={"green"} />
                <p>Device removed from group</p>
              </div>
            )
          : toast(
              <div className="flex">
                <CircleX size={20} className="mr-2" color={"red"} />
                <p>Error during remove of device from group</p>
              </div>
            );
      } catch (error) {
        toast(
          <div className="flex">
            <CircleX size={20} className="mr-2" color={"red"} />
            <p>Error during remove of device from group</p>
          </div>
        );
      }
    }
  };

  return (
    <AlertDialog>
      {children}
      <AlertDialogContent className="justify-center sm:max-w-md">
        <AlertDialogHeader>
          <AlertDialogTitle>Confirm item remove</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure to remove this item?
          </AlertDialogDescription>
          <AlertDialogDescription>
            This action will be irreversible
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex items-center space-x-2"></div>
        <AlertDialogFooter className="sm:justify-center">
          <AlertDialogCancel asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleSubmit}>
            <SendHorizontal />
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
