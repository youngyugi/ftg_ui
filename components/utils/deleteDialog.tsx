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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SendHorizontal } from "lucide-react";
import { useState } from "react";
import { deleteDialogProps } from "@/interfaces/utils";
import { hadUnsupportedValue } from "next/dist/build/analysis/get-page-static-info";

export const DeleteDialog = ({
  children,
  groupId,
  itemImei,
}: deleteDialogProps) => {
  const handleSubmit = () => {
    console.log(groupId, itemImei);
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
