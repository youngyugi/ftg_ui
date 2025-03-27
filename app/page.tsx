import { auth } from "@/auth";
import { redirect } from "next/navigation";

import LoginForm from "@/components/login";

const Login = async () => {
  const session = await auth();
  if (session !== null) {
    redirect("/home");
  }

  return (
    <section className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <LoginForm />
        </div>
      </div>
    </section>
  );
};

export default Login;
