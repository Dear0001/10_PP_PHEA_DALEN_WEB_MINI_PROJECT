import nextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";
import { loginService } from "@/services/auth.service";

export const authOptions = {
    providers: [
        //login by email and password
        CredentialsProvider({
            async authorize(credentials) {
                const { email, password } = credentials;
                const login = await loginService({ email, password });
                console.log("Login: ", login);
                return login;
            },
        })
    ],
    //use to set token into cookies
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, user };
        },
        async session({ token, user }) {
            return { user, ...token };
        }
    },
}

const handler = nextAuth(authOptions);
export { handler as GET, handler as POST };
