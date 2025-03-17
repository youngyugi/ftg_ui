"use server";

import { auth } from "@/auth";
import { unauthorized } from "next/navigation";
import { DeviceDialog } from "@/components/devices";
import { Button } from "@/components/ui/button";
import { DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { Trash } from "lucide-react";
import { Pencil } from "lucide-react";
import { CircleCheck } from "lucide-react";
import { CircleX } from "lucide-react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { DeleteDialog } from "@/components/utils/deleteDialog";
import { AlertDialogTrigger } from "@radix-ui/react-alert-dialog";
import { DeviceEditDialog } from "@/components/devices/deviceEditDialog";

const data = [
  {
    name: "phone 1",
    imei: "12359349671931",
    status: "active",
    app: "inherit",
    contentLink: "",
  },
  {
    name: "phone 2",
    imei: "18479349671932",
    status: "active",
    app: "inherit",
    contentLink: "",
  },
  {
    name: "phone 3",
    imei: "00919349671933",
    status: "not active",
    app: "inherit",
    contentLink: "",
  },
  {
    name: "phone 4",
    imei: "12359390271934",
    status: "not active",
    app: "spotify",
    contentLink: "https://www.spotify.com/playlist/u46eiy343i3qw",
  },
  {
    name: "phone 5",
    imei: "12355479671935",
    status: "active",
    app: "spotify",
    contentLink: "https://www.spotify.com/playlist/u46eiy343i3qw",
  },
  {
    name: "phone 6",
    imei: "123591231671936",
    status: "not active",
    app: "spotify",
    contentLink: "https://www.spotify.com/playlist/u46eiy343i3qw",
  },
];

const Devices = async () => {
  const session = await auth();
  if (session === null) return unauthorized();

  return (
    <div className="p-4 pt-0 w-full h-full">
      <header className="flex justify-end">
        {
          <DeviceDialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                Add a device
                <Plus />
              </Button>
            </DialogTrigger>
          </DeviceDialog>
        }
      </header>
      <div className="mt-10">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="md:w-1/4">Name</TableHead>
              <TableHead className="md:w-1/4">Imei</TableHead>
              <TableHead className="md:w-1/4">Status</TableHead>
              <TableHead className="w-5/12 md:w-1/12">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((phone) => {
              return (
                <TableRow key={phone.imei} className="group/item h-14">
                  <TableCell className="font-medium md:text-sm max-w-xs text-ellipsis whitespace-nowrap overflow-hidden">
                    {phone.name}
                  </TableCell>
                  <TableCell className="font-medium md:text-sm">
                    {phone.imei}
                  </TableCell>
                  <TableCell className="text-center font-medium md:text-sm">
                    {phone.status === "active" ? (
                      <CircleCheck color="green" size={20} />
                    ) : (
                      <CircleX color="red" size={20} />
                    )}
                  </TableCell>
                  <TableCell className="p-0">
                    <div className="md:hidden group-hover/item:block">
                      <DeviceEditDialog
                        name={phone.name}
                        imei={phone.imei}
                        app={phone.app}
                        contentLink={phone.contentLink}>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <Pencil />
                          </Button>
                        </DialogTrigger>
                      </DeviceEditDialog>
                      <DeleteDialog groupId={0} itemImei={phone.imei}>
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
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Devices;
