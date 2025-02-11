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

import { Button } from "@/components/ui/button";
/*
  - i need to create a new group
  - i need to delete an existing group 
  - i need to see all the groups
  - i need to modify group settings (name and settings)
  - i need to be able to add devices to group
  - i need to be able to remove devices to a group
*/

const data = [
  {
    id: 0,
    name: "group1",
    playlist: "link playlist",
    application: "spotify",
    devices: [
      "356303486339219",
      "356303488570811",
      "356303488150549",
      "356303480712916",
      "356303483865141",
      "356303480942034",
    ],
  },
  {
    id: 1,
    name: "group2",
    playlist: "link playlist",
    application: "spotify",
    devices: [
      "356303486339219",
      "356303488570811",
      "356303488150549",
      "356303480712916",
      "356303483865141",
      "356303480942034",
    ],
  },
  {
    id: 2,
    name: "group3",
    playlist: "link playlist",
    application: "spotify",
    devices: [
      "356303486339219",
      "356303488570811",
      "356303488150549",
      "356303480712916",
      "356303483865141",
      "356303480942034",
    ],
  },
  {
    id: 3,
    name: "group4",
    playlist: "link playlist",
    application: "spotify",
    devices: [
      "356303486339219",
      "356303488570811",
      "356303488150549",
      "356303480712916",
      "356303483865141",
      "356303480942034",
    ],
  },
];

const Groups = () => {
  return (
    <div className="p-4 pt-0 w-full h-full">
      <header className="flex justify-end">
        <Button variant="outline">
          Add group
          <Plus />
        </Button>
      </header>
      <div className="mt-10 grid auto-rows-min gap-4 md:grid-cols-4">
        {data.map((group) => {
          return (
            <Card className="group p-4" key={group.id}>
              {/* add edit button that opens a dialog where u can edit group data */}
              <div className="flex justify-between h-10">
                <div className="capitalize">{group.name}</div>
                <div className="md:hidden group-hover:block">
                  <Button variant="ghost" size="icon">
                    <Pencil />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Plus />
                  </Button>
                </div>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-11/12">Name</TableHead>
                    <TableHead className="">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {group.devices.map((device) => {
                    return (
                      <TableRow key={device} className="group/item h-14">
                        <TableCell className="font-medium">{device}</TableCell>
                        <TableCell>
                          <div className="md:hidden group-hover/item:block">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="hover:bg-red-200">
                              <Trash />
                            </Button>
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
