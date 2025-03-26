"use server";

import { auth } from "@/auth";
import { unauthorized } from "next/navigation";
import { DeviceDialog } from "@/components/devices";
import { Button } from "@/components/ui/button";
import { DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
} from "@/components/ui/table";
import { DeviceList } from "@/components/devices";

const data = [
  {
    name: "phone 1",
    imei: "356209286339219",
    status: true,
    app: "inherit",
    group: "group1",
    contentLink: "",
  },
  {
    name: "phone 2",
    imei: "457609388570811",
    status: true,
    app: "inherit",
    group: "group1",
    contentLink: "",
  },
  {
    name: "phone 3",
    imei: "758707888150549",
    status: false,
    app: "inherit",
    group: "group1",
    contentLink: "",
  },
  {
    name: "phone 4",
    imei: "502606180712916",
    status: true,
    app: "spotify",
    group: "group1",
    contentLink: "https://www.spotify.com/playlist/u46eiy343i3qw",
  },
  {
    name: "phone 5",
    imei: "098208183865141",
    status: false,
    app: "spotify",
    group: "group1",
    contentLink: "https://www.spotify.com/playlist/u46eiy343i3qw",
  },
  {
    name: "phone 6",
    imei: "512300480942034",
    status: false,
    app: "spotify",
    group: "group1",
    contentLink: "https://www.spotify.com/playlist/u46eiy343i3qw",
  },
];

const Devices = async () => {
  const session = await auth();
  if (session === null) return unauthorized();

  return (
    <div className="p-4 pt-0 w-full h-full">
      <div className="flex justify-end">
        <DeviceDialog>
          <DialogTrigger asChild>
            <Button variant="outline">
              Add a device
              <Plus />
            </Button>
          </DialogTrigger>
        </DeviceDialog>
      </div>
      <Table className="relative mt-10">
        <TableHeader>
          <TableRow>
            <TableHead className="hidden md:table-cell">Name</TableHead>
            <TableHead className="">Imei</TableHead>
            <TableHead className="">Group</TableHead>
            <TableHead className="">Status</TableHead>
            <TableHead className="w-[100px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <DeviceList />
        </TableBody>
      </Table>
    </div>
  );
};

export default Devices;
