"use client";

import { useEffect, useState } from "react";
import { Trash } from "lucide-react";
import { Pencil } from "lucide-react";
import { CircleCheck } from "lucide-react";
import { CircleX } from "lucide-react";
import { DeleteDialog } from "@/components/utils/deleteDialog";
import { AlertDialogTrigger } from "@radix-ui/react-alert-dialog";
import { DeviceEditDialog } from "@/components/devices/deviceEditDialog";
import { TableRow, TableCell } from "@/components/ui/table";
import { DbDevice } from "@/interfaces/device";
import { DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import axios from "axios";

export const DeviceList = () => {
  const [data, setData] = useState<DbDevice[]>([]);

  useEffect(() => {
    const getDeviceList = async () => {
      const response = await axios.get("/api/device");
      response.status === 200 ? setData(response.data) : null;
    };

    getDeviceList();
  }, []);

  return (
    <>
      {data.map((phone) => {
        return (
          <TableRow key={phone.imei} className="group/item h-14">
            <TableCell className="font-medium md:text-sm hidden md:table-cell">
              {phone.name}
            </TableCell>
            <TableCell className="font-medium md:text-sm">
              {phone.imei}
            </TableCell>
            <TableCell className="font-medium md:text-sm">
              {phone.groupId}
            </TableCell>
            <TableCell className="font-medium md:text-sm">
              {phone.status === true ? (
                <CircleCheck color="green" size={20} />
              ) : (
                <CircleX color="red" size={20} />
              )}
            </TableCell>
            <TableCell className="p-0">
              <div className="md:hidden group-hover/item:block">
                <DeviceEditDialog
                  id={phone.id}
                  name={phone.name}
                  imei={phone.imei}
                  app={phone.app}
                  contentLink={phone.contentLink}
                  groupId={phone.groupId}
                  status={phone.status}>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Pencil />
                    </Button>
                  </DialogTrigger>
                </DeviceEditDialog>
                <DeleteDialog url={"/api/device"} data={phone}>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:bg-red-200">
                      <Trash />
                    </Button>
                  </AlertDialogTrigger>
                </DeleteDialog>
              </div>
            </TableCell>
          </TableRow>
        );
      })}
    </>
  );
};
