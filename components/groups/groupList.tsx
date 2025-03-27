"use client";

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
import { GroupEditDialog, DeviceAddDialog } from "@/components/groups";
import { DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DeleteDialog } from "@/components/utils/deleteDialog";
import { CircleCheck } from "lucide-react";
import { CircleX } from "lucide-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { DbGroup } from "@/interfaces/group";
import { DbDevice } from "@/interfaces/device";

interface localDbGroup extends DbGroup {
  devices?: DbDevice[];
}

export const GroupList = () => {
  const [data, setData] = useState<localDbGroup[]>([]);

  useEffect(() => {
    const getGroupList = async () => {
      try {
        const groupResponse = await axios.get("/api/group");
        const deviceResponse = await axios.get("/api/device");

        if (groupResponse.status === 200 && deviceResponse.status === 200) {
          const groups: localDbGroup[] = groupResponse.data;
          const devices: DbDevice[] = deviceResponse.data;

          const groupsWithDevices = groups.map((group) => {
            const groupDevices = devices.filter(
              (device) => device.groupId === group.id
            );
            return {
              ...group,
              devices: groupDevices,
            };
          });
          setData(groupsWithDevices);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getGroupList();
  }, []);

  return (
    <>
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
                <DeviceAddDialog groupId={group.id}>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Plus />
                    </Button>
                  </DialogTrigger>
                </DeviceAddDialog>
                <DeleteDialog url={"/api/group"} data={group} type={"delete"}>
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
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-11/12">Imei</TableHead>
                  <TableHead className="">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {group.devices?.map((device) => {
                  return (
                    <TableRow key={device.imei} className="group/item h-14">
                      <TableCell className="font-medium">
                        <div className="flex justify-between">
                          {device.imei}
                          {device.status === true ? (
                            <CircleCheck color="green" size={20} />
                          ) : (
                            <CircleX color="red" size={20} />
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="md:hidden group-hover/item:block">
                          <DeleteDialog
                            url={"/api/device"}
                            data={device}
                            type={"update"}>
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
    </>
  );
};
