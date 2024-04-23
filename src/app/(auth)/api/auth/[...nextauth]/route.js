import nextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";
import {loginService} from "@/services/auth.service";
import {session} from "next-auth/core/routes";
export const authOptions = {
    providers: [
        //login by email and password
        CredentialsProvider({
            async authorize(userInfo) {
                //define object structure
                const newUserInfo = {
                    email: userInfo.email,
                    password: userInfo.password
                };
                //call login services
                const login = await loginService(newUserInfo);
                console.log("Login : ", login);
            },
        })
    ],
    callbacks: {
        async jwt({ token, user }){
            return { ...token, user };
        },
        async session({ token, user }) {
            session.user = token;
            return session;
        }
    }

}

const handler = nextAuth(authOptions)
export {handler as GET, handler as POST}