import { CollapsibleMenu } from "../collapsiblemenu/collapsibleMenu";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupLabel,
  SidebarGroupContent
} from "../../ui/sidebar";

import { type url } from "@/interfaces/url";

export const NavMain = ({ urls }: { urls: url[] }) => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {urls.map((url) => {
            return (
              <>
                {url.items.length == 0 ? (
                  <SidebarMenuItem key={url.title}>
                    <SidebarMenuButton asChild>
                      <a href={url.link}>
                        {url.icon}
                        <span>{url.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ) : (
                  <CollapsibleMenu url={url} />
                )}
              </>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
