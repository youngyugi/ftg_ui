import { auth } from "@/auth";
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import SidebarApp from "@/components/sidebar";
import "../globals.css";

const HomeLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await auth();
  if (session === null) return <section>{children}</section>;

  return (
    <>
      <SidebarProvider defaultOpen>
        <SidebarApp session={session} />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <SidebarTrigger className="m-2 hover:bg-[#d5f8e3]" />
          </header>

          <div className="flex-grow">{children}</div>
        </SidebarInset>
      </SidebarProvider>
      <Toaster />
    </>
  );
};

export default HomeLayout;
