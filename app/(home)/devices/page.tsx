import { DeviceDialog } from "@/components/devices";
import { Button } from "@/components/ui/button";
import { DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { Trash } from "lucide-react";
import { Pencil } from "lucide-react";
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
    model: "LG Lumia M3",
    status: "active",
    app: "inherit",
    contentLink: "",
  },
  {
    name: "phone 2",
    imei: "18479349671932",
    model: "LG Lumia M3",
    status: "active",
    app: "inherit",
    contentLink: "",
  },
  {
    name: "phone 3",
    imei: "00919349671933",
    model: "LG Lumia M3",
    status: "not active",
    app: "inherit",
    contentLink: "",
  },
  {
    name: "phone 4",
    imei: "12359390271934",
    model: "LG Lumia M3",
    status: "not active",
    app: "spotify",
    contentLink: "https://www.spotify.com/playlist/u46eiy343i3qw",
  },
  {
    name: "phone 5",
    imei: "12355479671935",
    model: "LG Lumia M3",
    status: "active",
    app: "spotify",
    contentLink: "https://www.spotify.com/playlist/u46eiy343i3qw",
  },
  {
    name: "phone 6",
    imei: "123591231671936",
    model: "LG Lumia M3",
    status: "not active",
    app: "spotify",
    contentLink: "https://www.spotify.com/playlist/u46eiy343i3qw",
  },
];

const Devices = () => {
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
              <TableHead>Name</TableHead>
              <TableHead>Imei</TableHead>
              <TableHead>Model</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((phone) => {
              return (
                <TableRow key={phone.imei} className="group/item h-14">
                  <TableCell className="font-medium">{phone.name}</TableCell>
                  <TableCell className="font-medium">{phone.imei}</TableCell>
                  <TableCell className="font-medium">{phone.model}</TableCell>
                  <TableCell className="font-medium">{phone.status}</TableCell>
                  <TableCell className="w-1/12">
                    <div className="md:hidden group-hover/item:block">
                      <DeviceEditDialog
                        name={phone.name}
                        model={phone.model}
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
