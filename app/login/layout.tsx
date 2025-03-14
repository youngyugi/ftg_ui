import type { Metadata, Viewport } from "next";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

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
  if (session !== null) return redirect("/");

  return (
    <html lang="en">
      <body className="font-sans w-screen h-screen">{children}</body>
    </html>
  );
};

export default RootLayout;
