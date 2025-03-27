"use server";

import { auth } from "@/auth";
import { unauthorized } from "next/navigation";
import { Plus } from "lucide-react";
import { GroupDialog, GroupList } from "@/components/groups";
import { DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

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
        <GroupList />
      </div>
    </div>
  );
};

export default Groups;
