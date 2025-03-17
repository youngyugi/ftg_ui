"use server";

import { auth } from "@/auth";
import { unauthorized } from "next/navigation";

const Metrics = async () => {
  const session = await auth();
  if (session === null) return unauthorized();

  return (
    <div className="p-4 pt-0 w-full h-full">
      <div className="flex justify-center items-center h-full">
        work in progress
      </div>
    </div>
  );
};

export default Metrics;
