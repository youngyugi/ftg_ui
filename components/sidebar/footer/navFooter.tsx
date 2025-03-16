import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { logout } from "@/lib/actions";
import { Settings, LogIn, LogOut } from "lucide-react";
import { Session } from "next-auth";

export const NavFooter = ({ session }: { session: Session }) => {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <a href="/settings">
            <Settings />
            <span>Settings</span>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        {session === null ? (
          <SidebarMenuButton asChild onClick={logout}>
            <a href="/login">
              <LogIn />
              <span>LogIn</span>
            </a>
          </SidebarMenuButton>
        ) : (
          <SidebarMenuButton asChild onClick={logout}>
            <a>
              <LogOut />
              <span>LogOut</span>
            </a>
          </SidebarMenuButton>
        )}
      </SidebarMenuItem>
    </SidebarMenu>
  );
};
