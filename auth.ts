import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      authorize: async (credentials): Promise<any> => {
        if (credentials === null) return null;
        try {
          const user = { username: "test", password: "password" };
          if (user === null) throw new Error("user not found");
          if (user.password !== credentials.password)
            throw new Error("wrong password");

          return user;
        } catch (error: any) {
          throw new Error(error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
});
