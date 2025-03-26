"use server";

import { auth } from "@/auth";
import { unauthorized } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Trash, Pencil, Plus } from "lucide-react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

import { AlertDialogTrigger } from "@/components/ui/alert-dialog";

import { DeviceAddDialog } from "@/components/devices";
import { GroupDialog, GroupEditDialog } from "@/components/groups";
import { DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DeleteDialog } from "@/components/utils/deleteDialog";
import { CircleCheck } from "lucide-react";
import { CircleX } from "lucide-react";

const data = [
  {
    id: 0,
    name: "group1",
    contentLink: "link playlist",
    app: "spotify",
    devices: [
      {
        imei: "356209286339219",
        status: "active",
      },
      {
        imei: "457609388570811",
        status: "active",
      },
      {
        imei: "758707888150549",
        status: "not active",
      },
      {
        imei: "502606180712916",
        status: "active",
      },
      {
        imei: "098208183865141",
        status: "not active",
      },
      {
        imei: "512300480942034",
        status: "not active",
      },
    ],
  },
];

const Groups = async () => {
  const session = await auth();
  if (session === null) return unauthorized();

  return (
    <div className="p-4 pt-0 w-full h-full">
      <header className="flex justify-end">
        <GroupDialog>
          <DialogTrigger asChild>
            <Button variant="outline">
              Add group
              <Plus />
            </Button>
          </DialogTrigger>
        </GroupDialog>
      </header>
      <div className="mt-10 grid auto-rows-min gap-4 md:grid-cols-4">
        {data.map((group) => {
          return (
            <Card className="group p-4" key={group.id}>
              <div className="flex justify-between h-10">
                <div className="capitalize">{group.name}</div>
                <div className="md:hidden group-hover:block">
                  <GroupEditDialog
                    id={group.id}
                    name={group.name}
                    app={group.app}
                    contentLink={group.contentLink}>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Pencil />
                      </Button>
                    </DialogTrigger>
                  </GroupEditDialog>
                  <DeviceAddDialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Plus />
                      </Button>
                    </DialogTrigger>
                  </DeviceAddDialog>
                </div>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-11/12">Imei</TableHead>
                    <TableHead className="">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {group.devices.map((device) => {
                    return (
                      <TableRow key={device.imei} className="group/item h-14">
                        <TableCell className="font-medium">
                          <div className="flex justify-between">
                            {device.imei}
                            {device.status === "active" ? (
                              <CircleCheck color="green" size={20} />
                            ) : (
                              <CircleX color="red" size={20} />
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="md:hidden group-hover/item:block">
                            <DeleteDialog url={"/api/group"} data={group}>
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
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Groups;
