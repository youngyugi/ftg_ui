import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronRight } from "lucide-react";
import {
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "../../ui/sidebar";

import { type url } from "@/interfaces/url";

interface CollapsibleMenuProps {
  url: url;
}

export const CollapsibleMenu = ({ url }: CollapsibleMenuProps) => {
  return (
    <Collapsible
      key={url.title}
      asChild
      defaultOpen={true}
      className="group/collapsible">
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton tooltip={url.title}>
            {url.icon}
            <span>{url.title}</span>
            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {url.items.map((item) => {
              return (
                <SidebarMenuSubItem key={item.title}>
                  {item.link ? (
                    <SidebarMenuSubButton asChild>
                      <a href={item.link}>
                        {item.icon}
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuSubButton>
                  ) : (
                    item.dialog
                  )}
                </SidebarMenuSubItem>
              );
            })}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
};
