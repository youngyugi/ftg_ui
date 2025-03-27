"use client";

import { MouseEvent, useState } from "react";
import { login } from "@/lib/actions";
import { useRouter } from "next/navigation";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginForm = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const router = useRouter();

  const handleSubmit = async (event: MouseEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const formData = {
        username: username,
        password: password,
      };
      const response = await login(formData);

      if (!!response.error) {
        setError(true);
      } else {
        router.push("/home");
      }
    } catch (e) {
      setError(true);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your username below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                id="password"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
            </div>
            {error ? (
              <p className="text-red-600 text-sm">
                * username or password are not correct
              </p>
            ) : null}
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
