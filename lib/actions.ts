"use server";

import { signIn, signOut } from "@/auth";

export const login = async (formData: {
  username: string;
  password: string;
}) => {
  try {
    console.log(formData);
    const response = await signIn("credentials", {
      username: formData["username"],
      password: formData["password"],
      redirect: false,
    });

    return response;
  } catch (e) {
    throw new Error("erorr on check of username and password");
  }
};

export const logout = async () => {
  await signOut({ redirectTo: "/" });
};
