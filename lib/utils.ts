import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const isPasswordValid = (
  input_password: string,
  user_password: string
) => {
  return input_password === atob(user_password) ? true : false;
};
