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
  Minus,
  PenLine,
} from "lucide-react";

const urls = [
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
    link: "/devices",
    icon: <Smartphone />,
    items: [
      {
        title: "Add a device",
        link: "/",
        icon: <Plus />,
      },
      {
        title: "Remove a device",
        link: "/",
        icon: <Minus />,
      },
      {
        title: "Manage devices",
        link: "/",
        icon: <PenLine />,
      },
    ],
  },
  {
    title: "Groups",
    link: "/groups",
    icon: <Boxes />,
    items: [
      {
        title: "Add a group",
        link: "",
        icon: <Plus />,
      },
      {
        title: "Remove a group",
        link: "",
        icon: <Minus />,
      },
      {
        title: "Manage groups",
        link: "/",
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
