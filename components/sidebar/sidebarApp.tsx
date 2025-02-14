import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "../ui/sidebar";

import { NavHeader } from "./header/navHeader";
import { NavMain } from "./main/navMain";
import { NavFooter } from "./footer/navFooter";
import {
  House,
  ChartSpline,
  Boxes,
  Smartphone,
  Plus,
  PenLine,
} from "lucide-react";

import { url } from "@/interfaces/url";
import { GroupDialog } from "@/components/groups/groupDialog";
import { DeviceDialog } from "@/components/devices/deviceDialog";
import { DialogTrigger } from "@/components/ui/dialog";
import { SidebarMenuSubButton } from "@/components/ui/sidebar";

const urls: url[] = [
  {
    title: "Home",
    link: "/",
    icon: <House />,
    items: [],
  },
  {
    title: "Metrics",
    link: "/metrics",
    icon: <ChartSpline />,
    items: [],
  },
  {
    title: "Devices",
    link: "#",
    icon: <Smartphone />,
    items: [
      {
        title: "Add a device",
        icon: <Plus />,
        dialog: (
          <DeviceDialog>
            <SidebarMenuSubButton asChild>
              <DialogTrigger asChild>
                <a>
                  <Plus />
                  <span>Add a device</span>
                </a>
              </DialogTrigger>
            </SidebarMenuSubButton>
          </DeviceDialog>
        ),
      },
      {
        title: "Manage devices",
        link: "/devices",
        icon: <PenLine />,
      },
    ],
  },
  {
    title: "Groups",
    link: "#",
    icon: <Boxes />,
    items: [
      {
        title: "Add a group",
        icon: <Plus />,
        dialog: (
          <GroupDialog>
            <SidebarMenuSubButton asChild>
              <DialogTrigger asChild>
                <a>
                  <Plus />
                  <span>Add a group</span>
                </a>
              </DialogTrigger>
            </SidebarMenuSubButton>
          </GroupDialog>
        ),
      },
      {
        title: "Manage groups",
        link: "/groups",
        icon: <PenLine />,
      },
    ],
  },
];

const SidebarApp = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <NavHeader />
      </SidebarHeader>
      <SidebarContent>
        <NavMain urls={urls} />
      </SidebarContent>
      <SidebarFooter>
        <NavFooter />
      </SidebarFooter>
    </Sidebar>
  );
};

export default SidebarApp;
