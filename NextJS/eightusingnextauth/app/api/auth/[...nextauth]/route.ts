import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import Github from "next-auth/providers/github";

console.log(process.env.NEXTAUTH_SECRET);

const handler = NextAuth({
    providers: [
        CredentialsProvider({
          name: "Email",        //The name to display on the sign in form (e.g. "Sign in with...")
          
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
          credentials: {
            username: { label: "Username", type: "text", placeholder: "Type your username here !" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
            const username = credentials?.username;
            const password = credentials?.password;

            console.log(username, password);
            

            //db request to check if the username and password are correct basically the authentication part!
            const user = { 
                id: "1", 
                name: "Suman Prasad", 
                email: "suman@gmail.com" 
            }
      
            if (user) {
              return user
            } else {
              return null;
            }
          }
        }),
        
        GoogleProvider({            //yeh google wla sign ka method daal dega like sign in with google 
            clientId: "ABC",
            clientSecret: "ABC"
          }),
        
          Github({            //yeh github wla sign ka method daal dega like sign in with github 
            clientId: "ABC",
            clientSecret: "ABC"
          })



      ],
      secret: process.env.NEXTAUTH_SECRET,
})

export {handler as GET, handler as POST}

//ispe yeh next-auth install krnge na yeh khudh ek front bna kr dega ..jispe help krega ki jo credentials provide krnge us hisb ka woh frontend ka bana dega.. jitne credentials add krnge tb unka !