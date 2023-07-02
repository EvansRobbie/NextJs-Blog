import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connect from "@/utils/db";
import User from "@/models/User";
import bcrypt from 'bcryptjs';

// const credentialsProvider = createCredentialsProvider();

const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: Record<"email" | "password", string> | undefined) {
        await connect();
        try {
          const user = await User.findOne({
            email: credentials?.email
          });
          if (user) {
            // check password
            if (credentials?.password && user.password){

              const passOk = await bcrypt.compare(credentials?.password, user.password);
              if (passOk) {
                return user;
              } else {
                throw new Error("Wrong credentials");
              }
            }
          } else {
            throw new Error("User not found!");
          }
        } catch (error:any) {
          throw new Error(error);
        }
      }
    })
  ],
  pages: {
    error: "/dashboard/login",
  },
});

export { handler as GET, handler as POST };
