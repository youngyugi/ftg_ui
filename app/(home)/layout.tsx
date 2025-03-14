import type { Metadata, Viewport } from "next";

import { auth } from "@/auth";
import { unauthorized } from "next/navigation";
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";

import SidebarApp from "@/components/sidebar";
import "../globals.css";

export const metadata: Metadata = {
  title: "Fast2Grow",
  description: "",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await auth();
  if (session === null)
    return (
      <html lang="en">
        <body className="font-sans w-screen h-screen">{children}</body>
      </html>
    );
  return (
    <html lang="en">
      <body className="font-sans w-screen h-screen">
        <SidebarProvider defaultOpen>
          <SidebarApp />
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
              <SidebarTrigger className="m-2 hover:bg-[#d5f8e3]" />
            </header>

            <div className="flex-grow">{children}</div>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
};

export default RootLayout;
